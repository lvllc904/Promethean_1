// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @title RWAMarketplace
 * @dev Decentralized marketplace for trading tokenized real world assets
 */
contract RWAMarketplace is ReentrancyGuard, AccessControl, Pausable {
    bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");
    bytes32 public constant FEE_MANAGER_ROLE = keccak256("FEE_MANAGER_ROLE");
    
    struct Listing {
        uint256 listingId;
        address tokenContract;
        address seller;
        uint256 amount;
        uint256 pricePerToken;
        uint256 totalPrice;
        bool isActive;
        uint256 createdAt;
        uint256 expiresAt;
        string assetType;
    }
    
    struct Trade {
        uint256 tradeId;
        uint256 listingId;
        address buyer;
        address seller;
        uint256 amount;
        uint256 totalPrice;
        uint256 timestamp;
        uint256 platformFee;
    }
    
    mapping(uint256 => Listing) public listings;
    mapping(address => uint256[]) public userListings;
    mapping(address => uint256[]) public userTrades;
    mapping(address => bool) public approvedTokens;
    
    uint256 public nextListingId = 1;
    uint256 public nextTradeId = 1;
    uint256 public platformFeeRate = 250; // 2.5% in basis points
    uint256 public minimumListingDuration = 1 hours;
    uint256 public maximumListingDuration = 30 days;
    
    address public feeRecipient;
    uint256 public totalVolume;
    uint256 public totalFees;
    
    event TokenApproved(address indexed tokenContract, string assetType);
    event ListingCreated(uint256 indexed listingId, address indexed seller, address indexed tokenContract, uint256 amount, uint256 pricePerToken);
    event ListingCancelled(uint256 indexed listingId, address indexed seller);
    event TradeExecuted(uint256 indexed tradeId, uint256 indexed listingId, address indexed buyer, address seller, uint256 amount, uint256 totalPrice);
    event PriceUpdated(uint256 indexed listingId, uint256 oldPrice, uint256 newPrice);
    event FeeRateUpdated(uint256 oldRate, uint256 newRate);
    
    modifier onlyApprovedToken(address tokenContract) {
        require(approvedTokens[tokenContract], "Token not approved for trading");
        _;
    }
    
    modifier onlyListingOwner(uint256 listingId) {
        require(listings[listingId].seller == msg.sender, "Not listing owner");
        _;
    }
    
    modifier validListing(uint256 listingId) {
        require(listings[listingId].isActive, "Listing not active");
        require(block.timestamp <= listings[listingId].expiresAt, "Listing expired");
        _;
    }
    
    constructor(address _admin, address _feeRecipient) {
        _grantRole(DEFAULT_ADMIN_ROLE, _admin);
        _grantRole(OPERATOR_ROLE, _admin);
        _grantRole(FEE_MANAGER_ROLE, _admin);
        feeRecipient = _feeRecipient;
    }
    
    /**
     * @dev Approve a token contract for trading
     */
    function approveToken(address tokenContract, string memory assetType) 
        external 
        onlyRole(OPERATOR_ROLE) 
    {
        require(tokenContract != address(0), "Invalid token contract");
        approvedTokens[tokenContract] = true;
        emit TokenApproved(tokenContract, assetType);
    }
    
    /**
     * @dev Create a new listing
     */
    function createListing(
        address tokenContract,
        uint256 amount,
        uint256 pricePerToken,
        uint256 duration,
        string memory assetType
    ) external onlyApprovedToken(tokenContract) nonReentrant {
        require(amount > 0, "Amount must be positive");
        require(pricePerToken > 0, "Price must be positive");
        require(duration >= minimumListingDuration && duration <= maximumListingDuration, "Invalid duration");
        
        IERC20 token = IERC20(tokenContract);
        require(token.balanceOf(msg.sender) >= amount, "Insufficient token balance");
        require(token.allowance(msg.sender, address(this)) >= amount, "Insufficient allowance");
        
        // Transfer tokens to marketplace for escrow
        token.transferFrom(msg.sender, address(this), amount);
        
        uint256 listingId = nextListingId++;
        uint256 expiresAt = block.timestamp + duration;
        
        listings[listingId] = Listing({
            listingId: listingId,
            tokenContract: tokenContract,
            seller: msg.sender,
            amount: amount,
            pricePerToken: pricePerToken,
            totalPrice: amount * pricePerToken,
            isActive: true,
            createdAt: block.timestamp,
            expiresAt: expiresAt,
            assetType: assetType
        });
        
        userListings[msg.sender].push(listingId);
        
        emit ListingCreated(listingId, msg.sender, tokenContract, amount, pricePerToken);
    }
    
    /**
     * @dev Purchase tokens from a listing
     */
    function buyTokens(uint256 listingId, uint256 amount) 
        external 
        payable 
        validListing(listingId) 
        nonReentrant 
    {
        Listing storage listing = listings[listingId];
        require(amount <= listing.amount, "Amount exceeds available");
        require(msg.sender != listing.seller, "Cannot buy own listing");
        
        uint256 totalCost = amount * listing.pricePerToken;
        require(msg.value >= totalCost, "Insufficient payment");
        
        // Calculate platform fee
        uint256 platformFee = (totalCost * platformFeeRate) / 10000;
        uint256 sellerPayment = totalCost - platformFee;
        
        // Update listing
        listing.amount -= amount;
        if (listing.amount == 0) {
            listing.isActive = false;
        }
        
        // Transfer tokens to buyer
        IERC20(listing.tokenContract).transfer(msg.sender, amount);
        
        // Transfer payments
        payable(listing.seller).transfer(sellerPayment);
        payable(feeRecipient).transfer(platformFee);
        
        // Refund excess payment
        if (msg.value > totalCost) {
            payable(msg.sender).transfer(msg.value - totalCost);
        }
        
        // Record trade
        uint256 tradeId = nextTradeId++;
        Trade memory trade = Trade({
            tradeId: tradeId,
            listingId: listingId,
            buyer: msg.sender,
            seller: listing.seller,
            amount: amount,
            totalPrice: totalCost,
            timestamp: block.timestamp,
            platformFee: platformFee
        });
        
        userTrades[msg.sender].push(tradeId);
        userTrades[listing.seller].push(tradeId);
        
        // Update statistics
        totalVolume += totalCost;
        totalFees += platformFee;
        
        emit TradeExecuted(tradeId, listingId, msg.sender, listing.seller, amount, totalCost);
    }
    
    /**
     * @dev Cancel a listing and return tokens
     */
    function cancelListing(uint256 listingId) 
        external 
        onlyListingOwner(listingId) 
        nonReentrant 
    {
        Listing storage listing = listings[listingId];
        require(listing.isActive, "Listing not active");
        
        listing.isActive = false;
        
        // Return tokens to seller
        IERC20(listing.tokenContract).transfer(listing.seller, listing.amount);
        
        emit ListingCancelled(listingId, msg.sender);
    }
    
    /**
     * @dev Update listing price
     */
    function updatePrice(uint256 listingId, uint256 newPricePerToken) 
        external 
        onlyListingOwner(listingId) 
        validListing(listingId) 
    {
        require(newPricePerToken > 0, "Price must be positive");
        
        Listing storage listing = listings[listingId];
        uint256 oldPrice = listing.pricePerToken;
        
        listing.pricePerToken = newPricePerToken;
        listing.totalPrice = listing.amount * newPricePerToken;
        
        emit PriceUpdated(listingId, oldPrice, newPricePerToken);
    }
    
    /**
     * @dev Set platform fee rate
     */
    function setPlatformFeeRate(uint256 newRate) external onlyRole(FEE_MANAGER_ROLE) {
        require(newRate <= 1000, "Fee rate too high"); // Max 10%
        uint256 oldRate = platformFeeRate;
        platformFeeRate = newRate;
        emit FeeRateUpdated(oldRate, newRate);
    }
    
    /**
     * @dev Set fee recipient
     */
    function setFeeRecipient(address newRecipient) external onlyRole(FEE_MANAGER_ROLE) {
        require(newRecipient != address(0), "Invalid recipient");
        feeRecipient = newRecipient;
    }
    
    /**
     * @dev Get listing details
     */
    function getListing(uint256 listingId) external view returns (Listing memory) {
        return listings[listingId];
    }
    
    /**
     * @dev Get user's listings
     */
    function getUserListings(address user) external view returns (uint256[] memory) {
        return userListings[user];
    }
    
    /**
     * @dev Get user's trade history
     */
    function getUserTrades(address user) external view returns (uint256[] memory) {
        return userTrades[user];
    }
    
    /**
     * @dev Get active listings for a token
     */
    function getTokenListings(address tokenContract) external view returns (uint256[] memory) {
        uint256[] memory activeListings = new uint256[](nextListingId - 1);
        uint256 count = 0;
        
        for (uint256 i = 1; i < nextListingId; i++) {
            if (listings[i].tokenContract == tokenContract && 
                listings[i].isActive && 
                block.timestamp <= listings[i].expiresAt) {
                activeListings[count] = i;
                count++;
            }
        }
        
        // Resize array to actual count
        uint256[] memory result = new uint256[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = activeListings[i];
        }
        
        return result;
    }
    
    /**
     * @dev Get marketplace statistics
     */
    function getMarketplaceStats() external view returns (
        uint256 activeListings,
        uint256 totalTrades,
        uint256 volume,
        uint256 fees
    ) {
        uint256 active = 0;
        for (uint256 i = 1; i < nextListingId; i++) {
            if (listings[i].isActive && block.timestamp <= listings[i].expiresAt) {
                active++;
            }
        }
        
        return (active, nextTradeId - 1, totalVolume, totalFees);
    }
    
    /**
     * @dev Emergency pause functionality
     */
    function pauseContract() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _pause();
    }
    
    function unpauseContract() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _unpause();
    }
    
    /**
     * @dev Emergency withdrawal of tokens
     */
    function emergencyWithdraw(address tokenContract) external onlyRole(DEFAULT_ADMIN_ROLE) {
        IERC20 token = IERC20(tokenContract);
        uint256 balance = token.balanceOf(address(this));
        token.transfer(msg.sender, balance);
    }
}
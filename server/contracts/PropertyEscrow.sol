// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title PropertyEscrow
 * @dev Contract for handling property listings, transactions and escrow services
 */
contract PropertyEscrow is Ownable {
    // DAC token for platform fees
    IERC20 public dacToken;
    // Address where fees are sent
    address public feeCollector;
    // Platform fee percentage (denominated in basis points, 100 = 1%)
    uint256 public feePercentage = 150; // 1.5% by default
    
    // Enum for listing type
    enum ListingType { Sale, Rent, LeaseOption, SubjectTo }
    
    // Enum for listing status
    enum ListingStatus { 
        Active,     // Listing is active and available
        Reserved,   // Someone has placed a deposit
        Completed,  // Transaction completed
        Canceled    // Listing was canceled
    }
    
    // Structure to store listing details
    struct Listing {
        string propertyId;      // Reference to off-chain property data
        address seller;         // Owner/seller of the property
        uint256 price;          // Price in native currency (ETH)
        ListingType listingType; // Type of listing
        ListingStatus status;   // Current status
        address buyer;          // Address of the buyer (if reserved)
        uint256 depositAmount;  // Amount deposited by buyer
    }
    
    // Store listings by ID
    mapping(uint256 => Listing) private listings;
    // Store listing IDs by user address
    mapping(address => uint256[]) private userListings;
    // Listing counter
    uint256 public listingCount = 0;
    // Store all listing IDs
    uint256[] private listingIds;
    
    // Events
    event ListingCreated(
        uint256 indexed listingId, 
        address indexed seller, 
        string propertyId, 
        uint256 price
    );
    
    event ListingUpdated(
        uint256 indexed listingId, 
        uint256 newPrice
    );
    
    event ListingRemoved(
        uint256 indexed listingId
    );
    
    event PaymentReceived(
        uint256 indexed listingId, 
        address indexed buyer, 
        uint256 depositAmount
    );
    
    event PaymentRefunded(
        uint256 indexed listingId, 
        address indexed buyer, 
        uint256 refundAmount
    );
    
    event EscrowComplete(
        uint256 indexed listingId, 
        address indexed buyer, 
        address indexed seller, 
        uint256 price
    );
    
    /**
     * @dev Constructor to set the DAC token address and fee collector
     * @param _dacToken Address of the DAC token
     * @param _feeCollector Address where fees will be sent
     */
    constructor(address _dacToken, address _feeCollector) {
        dacToken = IERC20(_dacToken);
        feeCollector = _feeCollector;
    }
    
    /**
     * @dev List a property for sale or rent
     * @param propertyId Reference to off-chain property data
     * @param price Listing price in native currency
     * @param listingType Type of listing (0=Sale, 1=Rent, etc.)
     * @return ID of the created listing
     */
    function listProperty(
        string memory propertyId,
        uint256 price,
        ListingType listingType
    ) public returns (uint256) {
        require(price > 0, "Price must be greater than zero");
        
        uint256 listingId = listingCount++;
        
        listings[listingId] = Listing({
            propertyId: propertyId,
            seller: msg.sender,
            price: price,
            listingType: listingType,
            status: ListingStatus.Active,
            buyer: address(0),
            depositAmount: 0
        });
        
        userListings[msg.sender].push(listingId);
        listingIds.push(listingId);
        
        emit ListingCreated(listingId, msg.sender, propertyId, price);
        
        return listingId;
    }
    
    /**
     * @dev Update the price of a listing
     * @param listingId ID of the listing
     * @param newPrice New listing price
     */
    function updateListingPrice(uint256 listingId, uint256 newPrice) public {
        require(listingId < listingCount, "Invalid listing ID");
        require(newPrice > 0, "Price must be greater than zero");
        
        Listing storage listing = listings[listingId];
        require(listing.seller == msg.sender, "Not the seller");
        require(listing.status == ListingStatus.Active, "Listing not active");
        
        listing.price = newPrice;
        
        emit ListingUpdated(listingId, newPrice);
    }
    
    /**
     * @dev Remove a listing
     * @param listingId ID of the listing to remove
     */
    function removeListing(uint256 listingId) public {
        require(listingId < listingCount, "Invalid listing ID");
        
        Listing storage listing = listings[listingId];
        require(listing.seller == msg.sender, "Not the seller");
        require(listing.status == ListingStatus.Active, "Listing not active");
        
        listing.status = ListingStatus.Canceled;
        
        emit ListingRemoved(listingId);
    }
    
    /**
     * @dev Purchase a property (for sale listings)
     * @param listingId ID of the listing to purchase
     */
    function purchaseProperty(uint256 listingId) public payable {
        require(listingId < listingCount, "Invalid listing ID");
        
        Listing storage listing = listings[listingId];
        require(listing.status == ListingStatus.Active, "Listing not active");
        require(listing.listingType == ListingType.Sale, "Listing not for sale");
        require(msg.value == listing.price, "Incorrect payment amount");
        require(msg.sender != listing.seller, "Cannot purchase own listing");
        
        listing.buyer = msg.sender;
        listing.depositAmount = msg.value;
        listing.status = ListingStatus.Reserved;
        
        emit PaymentReceived(listingId, msg.sender, msg.value);
    }
    
    /**
     * @dev Deposit escrow payment (for rent or other types)
     * @param listingId ID of the listing
     */
    function depositEscrow(uint256 listingId) public payable {
        require(listingId < listingCount, "Invalid listing ID");
        
        Listing storage listing = listings[listingId];
        require(listing.status == ListingStatus.Active, "Listing not active");
        require(listing.listingType != ListingType.Sale, "Use purchaseProperty for sales");
        require(msg.value > 0, "Must send some ETH");
        require(msg.sender != listing.seller, "Cannot rent own listing");
        
        listing.buyer = msg.sender;
        listing.depositAmount = msg.value;
        listing.status = ListingStatus.Reserved;
        
        emit PaymentReceived(listingId, msg.sender, msg.value);
    }
    
    /**
     * @dev Approve and complete a sale after buyer has deposited funds
     * @param listingId ID of the listing
     * @param buyer Address of the buyer to approve
     */
    function approveSale(uint256 listingId, address buyer) public {
        require(listingId < listingCount, "Invalid listing ID");
        
        Listing storage listing = listings[listingId];
        require(listing.seller == msg.sender, "Not the seller");
        require(listing.status == ListingStatus.Reserved, "Listing not reserved");
        require(listing.buyer == buyer, "Incorrect buyer");
        require(listing.depositAmount > 0, "No deposit made");
        
        uint256 fee = (listing.depositAmount * feePercentage) / 10000;
        uint256 sellerAmount = listing.depositAmount - fee;
        
        // Transfer fee to fee collector
        (bool feeSuccess, ) = feeCollector.call{value: fee}("");
        require(feeSuccess, "Fee transfer failed");
        
        // Transfer remaining amount to seller
        (bool sellerSuccess, ) = listing.seller.call{value: sellerAmount}("");
        require(sellerSuccess, "Seller transfer failed");
        
        listing.status = ListingStatus.Completed;
        
        emit EscrowComplete(listingId, buyer, listing.seller, listing.depositAmount);
    }
    
    /**
     * @dev Refund buyer's deposit (if sale falls through)
     * @param listingId ID of the listing
     */
    function refundBuyer(uint256 listingId) public {
        require(listingId < listingCount, "Invalid listing ID");
        
        Listing storage listing = listings[listingId];
        require(listing.seller == msg.sender, "Not the seller");
        require(listing.status == ListingStatus.Reserved, "Listing not reserved");
        require(listing.depositAmount > 0, "No deposit made");
        
        uint256 refundAmount = listing.depositAmount;
        address buyer = listing.buyer;
        
        // Reset listing
        listing.status = ListingStatus.Active;
        listing.buyer = address(0);
        listing.depositAmount = 0;
        
        // Refund the buyer
        (bool success, ) = buyer.call{value: refundAmount}("");
        require(success, "Refund failed");
        
        emit PaymentRefunded(listingId, buyer, refundAmount);
    }
    
    /**
     * @dev Get a listing by ID
     * @param listingId ID of the listing
     * @return Listing details
     */
    function getListing(uint256 listingId) public view returns (Listing memory) {
        require(listingId < listingCount, "Invalid listing ID");
        return listings[listingId];
    }
    
    /**
     * @dev Get all listing IDs
     * @return Array of listing IDs
     */
    function getListingIds() public view returns (uint256[] memory) {
        return listingIds;
    }
    
    /**
     * @dev Get listings by user
     * @param user Address of the user
     * @return Array of listing IDs
     */
    function getListingsByUser(address user) public view returns (uint256[] memory) {
        return userListings[user];
    }
    
    /**
     * @dev Set the platform fee percentage
     * @param _feePercentage New fee percentage (in basis points)
     */
    function setFeePercentage(uint256 _feePercentage) public onlyOwner {
        require(_feePercentage <= 1000, "Fee too high"); // Max 10%
        feePercentage = _feePercentage;
    }
}

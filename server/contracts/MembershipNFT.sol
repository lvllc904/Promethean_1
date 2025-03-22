// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title MembershipNFT
 * @dev Contract for DAC Marketplace membership tiers as NFTs with benefits
 */
contract MembershipNFT is ERC721Enumerable, Ownable {
    // DAC token for rewards
    IERC20 public dacToken;
    // Treasury address for membership payments
    address public treasury;
    
    // Token counter
    uint256 private _tokenIdCounter;
    
    // Membership tiers (0=Free, 1=Basic, 2=Premium, 3=Enterprise)
    enum MembershipTier { Free, Basic, Premium, Enterprise }
    
    // Price for each membership tier (in ETH)
    mapping(uint8 => uint256) public tierPrices;
    
    // DAC tokens awarded for each membership tier
    mapping(uint8 => uint256) public tierTokens;
    
    // Mapping from user address to membership tier
    mapping(address => uint8) private userTiers;
    
    // Mapping from token ID to membership tier
    mapping(uint256 => uint8) private tokenTiers;
    
    // Events
    event MembershipPurchased(
        address indexed user,
        uint8 tier,
        uint256 tokenId
    );
    
    event MembershipUpgraded(
        address indexed user,
        uint8 oldTier,
        uint8 newTier
    );
    
    /**
     * @dev Constructor to set initial values
     * @param _name Name of the NFT collection
     * @param _symbol Symbol of the NFT collection
     * @param _dacToken Address of the DAC token
     * @param _treasury Address where membership payments will be sent
     */
    constructor(
        string memory _name,
        string memory _symbol,
        address _dacToken,
        address _treasury
    ) ERC721(_name, _symbol) {
        dacToken = IERC20(_dacToken);
        treasury = _treasury;
        
        // Initialize tier prices
        tierPrices[uint8(MembershipTier.Free)] = 0 ether;
        tierPrices[uint8(MembershipTier.Basic)] = 0.05 ether; // ~$100
        tierPrices[uint8(MembershipTier.Premium)] = 0.1 ether; // ~$200
        tierPrices[uint8(MembershipTier.Enterprise)] = 0.5 ether; // ~$1000
        
        // Initialize token rewards
        tierTokens[uint8(MembershipTier.Free)] = 0;
        tierTokens[uint8(MembershipTier.Basic)] = 10 * 10**18; // 10 DAC
        tierTokens[uint8(MembershipTier.Premium)] = 50 * 10**18; // 50 DAC
        tierTokens[uint8(MembershipTier.Enterprise)] = 250 * 10**18; // 250 DAC
    }
    
    /**
     * @dev Purchase a membership tier
     * @param tier Tier to purchase (0=Free, 1=Basic, 2=Premium, 3=Enterprise)
     * @return ID of the minted NFT
     */
    function purchaseMembership(uint8 tier) public payable returns (uint256) {
        require(tier <= uint8(MembershipTier.Enterprise), "Invalid tier");
        require(msg.value == tierPrices[tier], "Incorrect payment amount");
        
        // Check if user already has a membership
        if (userTiers[msg.sender] > 0) {
            require(tier > userTiers[msg.sender], "Cannot downgrade tier");
            emit MembershipUpgraded(msg.sender, userTiers[msg.sender], tier);
        }
        
        // Mint the NFT
        uint256 tokenId = mintMembershipNFT(msg.sender, tier);
        
        // Update user's tier
        userTiers[msg.sender] = tier;
        
        // Forward payment to treasury
        (bool success, ) = treasury.call{value: msg.value}("");
        require(success, "Treasury transfer failed");
        
        // If tier includes DAC tokens, transfer them to the user
        if (tierTokens[tier] > 0) {
            require(
                dacToken.transfer(msg.sender, tierTokens[tier]),
                "Token transfer failed"
            );
        }
        
        return tokenId;
    }
    
    /**
     * @dev Mint a membership NFT
     * @param user Address to mint the NFT to
     * @param tier Tier of the membership
     * @return ID of the minted NFT
     */
    function mintMembershipNFT(address user, uint8 tier) public payable returns (uint256) {
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;
        
        _mint(user, tokenId);
        tokenTiers[tokenId] = tier;
        
        emit MembershipPurchased(user, tier, tokenId);
        
        return tokenId;
    }
    
    /**
     * @dev Upgrade a membership to a higher tier
     * @param newTier Tier to upgrade to
     */
    function upgradeMembership(uint8 newTier) public payable {
        require(userTiers[msg.sender] > 0, "No existing membership");
        require(newTier > userTiers[msg.sender], "Not an upgrade");
        require(newTier <= uint8(MembershipTier.Enterprise), "Invalid tier");
        
        // Calculate price difference
        uint256 priceDifference = tierPrices[newTier] - tierPrices[userTiers[msg.sender]];
        require(msg.value == priceDifference, "Incorrect payment amount");
        
        // Store old tier for event
        uint8 oldTier = userTiers[msg.sender];
        
        // Update user's tier
        userTiers[msg.sender] = newTier;
        
        // Forward payment to treasury
        (bool success, ) = treasury.call{value: msg.value}("");
        require(success, "Treasury transfer failed");
        
        // Calculate token difference
        uint256 tokenDifference = tierTokens[newTier] - tierTokens[oldTier];
        
        // If the upgrade includes additional DAC tokens, transfer them to the user
        if (tokenDifference > 0) {
            require(
                dacToken.transfer(msg.sender, tokenDifference),
                "Token transfer failed"
            );
        }
        
        emit MembershipUpgraded(msg.sender, oldTier, newTier);
    }
    
    /**
     * @dev Get the membership tier of a user
     * @param user Address to check
     * @return Membership tier
     */
    function getMembershipTier(address user) public view returns (uint8) {
        return userTiers[user];
    }
    
    /**
     * @dev Set the price for a membership tier
     * @param tier Tier to update
     * @param price New price in ETH
     */
    function setTierPrice(uint8 tier, uint256 price) public onlyOwner {
        require(tier <= uint8(MembershipTier.Enterprise), "Invalid tier");
        tierPrices[tier] = price;
    }
    
    /**
     * @dev Set the token reward for a membership tier
     * @param tier Tier to update
     * @param tokenAmount New token amount
     */
    function setTierTokens(uint8 tier, uint256 tokenAmount) public onlyOwner {
        require(tier <= uint8(MembershipTier.Enterprise), "Invalid tier");
        tierTokens[tier] = tokenAmount;
    }
    
    /**
     * @dev Get the price for a membership tier
     * @param tier Tier to check
     * @return Price in ETH
     */
    function getTierPrice(uint8 tier) public view returns (uint256) {
        require(tier <= uint8(MembershipTier.Enterprise), "Invalid tier");
        return tierPrices[tier];
    }
    
    /**
     * @dev Get the token reward for a membership tier
     * @param tier Tier to check
     * @return Token amount
     */
    function getTierTokens(uint8 tier) public view returns (uint256) {
        require(tier <= uint8(MembershipTier.Enterprise), "Invalid tier");
        return tierTokens[tier];
    }
}

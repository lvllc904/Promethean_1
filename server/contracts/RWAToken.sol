// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @title RWAToken
 * @dev ERC-1400 compatible security token for Real World Asset tokenization
 * Implements transfer restrictions, compliance controls, and revenue distribution
 */
contract RWAToken is ERC20, ReentrancyGuard, AccessControl, Pausable {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant COMPLIANCE_ROLE = keccak256("COMPLIANCE_ROLE");
    bytes32 public constant ASSET_MANAGER_ROLE = keccak256("ASSET_MANAGER_ROLE");
    
    struct AssetDetails {
        string assetType;           // "real_estate", "venture_capital", "equipment"
        string description;         // Asset description
        uint256 totalValue;         // Total asset valuation in wei
        string custodyDetails;      // IPFS hash of custody documentation
        address custodian;          // Address of asset custodian
        bool isActive;              // Asset status
        uint256 lastValuation;      // Timestamp of last valuation
    }
    
    struct InvestorProfile {
        bool isAccredited;          // Accredited investor status
        string jurisdiction;        // Investor jurisdiction
        uint256 maxAllocation;      // Maximum allocation allowed
        bool isBlacklisted;         // Compliance blacklist status
        uint256 kycTimestamp;       // KYC verification timestamp
    }
    
    AssetDetails public assetDetails;
    mapping(address => InvestorProfile) public investors;
    mapping(address => uint256) public dividendClaimed;
    
    uint256 public totalDividendsDistributed;
    uint256 public minimumHolding = 1 * 10**decimals(); // Minimum token holding
    uint256 public transferFee = 50; // 0.5% transfer fee (basis points)
    
    // Events
    event AssetValuationUpdated(uint256 newValuation, uint256 timestamp);
    event DividendDistributed(uint256 totalAmount, uint256 perTokenAmount);
    event InvestorRegistered(address indexed investor, string jurisdiction);
    event TransferRestricted(address indexed from, address indexed to, string reason);
    event ComplianceViolation(address indexed account, string violation);
    
    modifier onlyCompliantTransfer(address from, address to, uint256 amount) {
        require(_isTransferCompliant(from, to, amount), "Transfer not compliant");
        _;
    }
    
    constructor(
        string memory name,
        string memory symbol,
        AssetDetails memory _assetDetails,
        address _admin
    ) ERC20(name, symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, _admin);
        _grantRole(MINTER_ROLE, _admin);
        _grantRole(COMPLIANCE_ROLE, _admin);
        _grantRole(ASSET_MANAGER_ROLE, _admin);
        
        assetDetails = _assetDetails;
        assetDetails.isActive = true;
        assetDetails.lastValuation = block.timestamp;
    }
    
    /**
     * @dev Mint tokens to investor after compliance verification
     */
    function mintTokens(
        address to,
        uint256 amount,
        string memory jurisdiction
    ) external onlyRole(MINTER_ROLE) nonReentrant {
        require(assetDetails.isActive, "Asset not active");
        require(investors[to].isAccredited, "Investor not accredited");
        require(!investors[to].isBlacklisted, "Investor blacklisted");
        
        // Register investor if not already registered
        if (investors[to].kycTimestamp == 0) {
            _registerInvestor(to, jurisdiction);
        }
        
        // Check allocation limits
        uint256 newBalance = balanceOf(to) + amount;
        require(newBalance <= investors[to].maxAllocation, "Exceeds allocation limit");
        
        _mint(to, amount);
        emit Transfer(address(0), to, amount);
    }
    
    /**
     * @dev Override transfer with compliance checks
     */
    function transfer(address to, uint256 amount) 
        public 
        override 
        onlyCompliantTransfer(msg.sender, to, amount)
        returns (bool) 
    {
        uint256 fee = (amount * transferFee) / 10000;
        uint256 netAmount = amount - fee;
        
        // Transfer fee to asset manager
        if (fee > 0) {
            _transfer(msg.sender, assetDetails.custodian, fee);
        }
        
        return super.transfer(to, netAmount);
    }
    
    /**
     * @dev Override transferFrom with compliance checks
     */
    function transferFrom(address from, address to, uint256 amount)
        public
        override
        onlyCompliantTransfer(from, to, amount)
        returns (bool)
    {
        uint256 fee = (amount * transferFee) / 10000;
        uint256 netAmount = amount - fee;
        
        // Transfer fee to asset manager
        if (fee > 0) {
            _transfer(from, assetDetails.custodian, fee);
        }
        
        return super.transferFrom(from, to, netAmount);
    }
    
    /**
     * @dev Distribute dividends to all token holders
     */
    function distributeDividends() external payable onlyRole(ASSET_MANAGER_ROLE) {
        require(msg.value > 0, "No dividends to distribute");
        require(totalSupply() > 0, "No tokens in circulation");
        
        uint256 dividendPerToken = msg.value / totalSupply();
        totalDividendsDistributed += msg.value;
        
        emit DividendDistributed(msg.value, dividendPerToken);
    }
    
    /**
     * @dev Claim dividends for token holder
     */
    function claimDividends() external nonReentrant {
        uint256 balance = balanceOf(msg.sender);
        require(balance > 0, "No tokens held");
        
        uint256 totalDividends = (balance * totalDividendsDistributed) / totalSupply();
        uint256 claimable = totalDividends - dividendClaimed[msg.sender];
        
        require(claimable > 0, "No dividends to claim");
        
        dividendClaimed[msg.sender] += claimable;
        
        (bool success, ) = payable(msg.sender).call{value: claimable}("");
        require(success, "Dividend transfer failed");
    }
    
    /**
     * @dev Update asset valuation
     */
    function updateAssetValuation(uint256 newValuation) 
        external 
        onlyRole(ASSET_MANAGER_ROLE) 
    {
        require(newValuation > 0, "Invalid valuation");
        
        assetDetails.totalValue = newValuation;
        assetDetails.lastValuation = block.timestamp;
        
        emit AssetValuationUpdated(newValuation, block.timestamp);
    }
    
    /**
     * @dev Register new investor with compliance data
     */
    function registerInvestor(
        address investor,
        bool isAccredited,
        string memory jurisdiction,
        uint256 maxAllocation
    ) external onlyRole(COMPLIANCE_ROLE) {
        investors[investor] = InvestorProfile({
            isAccredited: isAccredited,
            jurisdiction: jurisdiction,
            maxAllocation: maxAllocation,
            isBlacklisted: false,
            kycTimestamp: block.timestamp
        });
        
        emit InvestorRegistered(investor, jurisdiction);
    }
    
    /**
     * @dev Update investor compliance status
     */
    function updateInvestorCompliance(
        address investor,
        bool isAccredited,
        bool isBlacklisted
    ) external onlyRole(COMPLIANCE_ROLE) {
        investors[investor].isAccredited = isAccredited;
        investors[investor].isBlacklisted = isBlacklisted;
        
        if (isBlacklisted) {
            emit ComplianceViolation(investor, "Blacklisted");
        }
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
     * @dev Internal function to register investor
     */
    function _registerInvestor(address investor, string memory jurisdiction) internal {
        investors[investor] = InvestorProfile({
            isAccredited: true, // Default for minting
            jurisdiction: jurisdiction,
            maxAllocation: type(uint256).max, // Default max allocation
            isBlacklisted: false,
            kycTimestamp: block.timestamp
        });
        
        emit InvestorRegistered(investor, jurisdiction);
    }
    
    /**
     * @dev Check if transfer is compliant with regulations
     */
    function _isTransferCompliant(
        address from,
        address to,
        uint256 amount
    ) internal view returns (bool) {
        // Skip compliance for minting/burning
        if (from == address(0) || to == address(0)) {
            return true;
        }
        
        // Check if contract is paused
        if (paused()) {
            return false;
        }
        
        // Check sender compliance
        if (investors[from].isBlacklisted) {
            return false;
        }
        
        // Check receiver compliance
        if (investors[to].isBlacklisted || !investors[to].isAccredited) {
            return false;
        }
        
        // Check minimum holding requirements
        if (balanceOf(from) - amount < minimumHolding && balanceOf(from) != amount) {
            return false;
        }
        
        // Check allocation limits for receiver
        if (balanceOf(to) + amount > investors[to].maxAllocation) {
            return false;
        }
        
        return true;
    }
    
    /**
     * @dev Get asset information
     */
    function getAssetDetails() external view returns (AssetDetails memory) {
        return assetDetails;
    }
    
    /**
     * @dev Get investor information
     */
    function getInvestorProfile(address investor) external view returns (InvestorProfile memory) {
        return investors[investor];
    }
    
    /**
     * @dev Calculate claimable dividends for an address
     */
    function getClaimableDividends(address account) external view returns (uint256) {
        uint256 balance = balanceOf(account);
        if (balance == 0 || totalSupply() == 0) {
            return 0;
        }
        
        uint256 totalDividends = (balance * totalDividendsDistributed) / totalSupply();
        return totalDividends - dividendClaimed[account];
    }
    
    /**
     * @dev Override required by Solidity
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        require(!paused(), "Contract is paused");
        super._beforeTokenTransfer(from, to, amount);
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Snapshot.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @title PrometheaToken (PROM)
 * @dev Governance token for the Promethea DAC
 * Features:
 * - Standard ERC20 functionality
 * - Snapshot capability for governance voting
 * - Burning mechanism for deflationary economics
 * - Pausable for emergency situations
 * - Initial distribution to bootstrap the DAC
 */
contract PrometheaToken is ERC20, ERC20Burnable, ERC20Snapshot, Ownable, Pausable {
    
    // Token distribution allocations
    uint256 public constant TOTAL_SUPPLY = 1_000_000_000 * 10**18; // 1 billion PROM
    uint256 public constant DAC_TREASURY_ALLOCATION = 400_000_000 * 10**18; // 40% for DAC treasury
    uint256 public constant COMMUNITY_REWARDS_ALLOCATION = 300_000_000 * 10**18; // 30% for community rewards
    uint256 public constant DEPTH_OS_INCENTIVES_ALLOCATION = 200_000_000 * 10**18; // 20% for Depth OS incentives
    uint256 public constant FOUNDER_ALLOCATION = 100_000_000 * 10**18; // 10% for founders (vested)
    
    // Vesting and distribution tracking
    mapping(address => uint256) public vestedTokens;
    mapping(address => uint256) public releasedTokens;
    mapping(address => uint256) public vestingStart;
    uint256 public constant VESTING_DURATION = 4 * 365 days; // 4 years
    
    // Community rewards pool
    address public communityRewardsPool;
    address public dacTreasury;
    address public depthOSIncentivesPool;
    
    // Governance features
    mapping(address => bool) public authorizedMinters;
    uint256 public maxInflationRate = 200; // 2% per year maximum
    uint256 public lastInflationTimestamp;
    
    // Events
    event TokensVested(address indexed beneficiary, uint256 amount);
    event TokensReleased(address indexed beneficiary, uint256 amount);
    event SnapshotCreated(uint256 indexed snapshotId);
    event AuthorizedMinterAdded(address indexed minter);
    event AuthorizedMinterRemoved(address indexed minter);
    event InflationMinted(uint256 amount, string reason);
    
    /**
     * @dev Constructor initializes the Promethea token with initial distribution
     * @param _dacTreasury Address for DAC treasury
     * @param _communityRewardsPool Address for community rewards
     * @param _depthOSIncentivesPool Address for Depth OS incentives
     * @param _founderAddresses Array of founder addresses for vesting
     */
    constructor(
        address _dacTreasury,
        address _communityRewardsPool,
        address _depthOSIncentivesPool,
        address[] memory _founderAddresses
    ) ERC20("Promethea Token", "PROM") {
        require(_dacTreasury != address(0), "Invalid treasury address");
        require(_communityRewardsPool != address(0), "Invalid community pool address");
        require(_depthOSIncentivesPool != address(0), "Invalid incentives pool address");
        require(_founderAddresses.length > 0, "At least one founder required");
        
        dacTreasury = _dacTreasury;
        communityRewardsPool = _communityRewardsPool;
        depthOSIncentivesPool = _depthOSIncentivesPool;
        lastInflationTimestamp = block.timestamp;
        
        // Mint initial allocations
        _mint(_dacTreasury, DAC_TREASURY_ALLOCATION);
        _mint(_communityRewardsPool, COMMUNITY_REWARDS_ALLOCATION);
        _mint(_depthOSIncentivesPool, DEPTH_OS_INCENTIVES_ALLOCATION);
        
        // Set up founder vesting
        uint256 founderAllocationPerAddress = FOUNDER_ALLOCATION / _founderAddresses.length;
        for (uint256 i = 0; i < _founderAddresses.length; i++) {
            _setupVesting(_founderAddresses[i], founderAllocationPerAddress);
        }
        
        emit SnapshotCreated(_snapshot());
    }
    
    /**
     * @dev Set up vesting for a beneficiary
     * @param _beneficiary Address of the beneficiary
     * @param _amount Amount of tokens to vest
     */
    function _setupVesting(address _beneficiary, uint256 _amount) private {
        require(_beneficiary != address(0), "Invalid beneficiary");
        require(_amount > 0, "Amount must be greater than 0");
        
        vestedTokens[_beneficiary] = _amount;
        vestingStart[_beneficiary] = block.timestamp;
        
        emit TokensVested(_beneficiary, _amount);
    }
    
    /**
     * @dev Release vested tokens for the caller
     */
    function releaseVestedTokens() external {
        uint256 releasableAmount = getReleasableAmount(msg.sender);
        require(releasableAmount > 0, "No tokens available for release");
        
        releasedTokens[msg.sender] += releasableAmount;
        _mint(msg.sender, releasableAmount);
        
        emit TokensReleased(msg.sender, releasableAmount);
    }
    
    /**
     * @dev Calculate releasable amount for a beneficiary
     * @param _beneficiary Address of the beneficiary
     * @return Amount of tokens that can be released
     */
    function getReleasableAmount(address _beneficiary) public view returns (uint256) {
        if (vestedTokens[_beneficiary] == 0) {
            return 0;
        }
        
        uint256 elapsedTime = block.timestamp - vestingStart[_beneficiary];
        if (elapsedTime >= VESTING_DURATION) {
            return vestedTokens[_beneficiary] - releasedTokens[_beneficiary];
        }
        
        uint256 vestedAmount = (vestedTokens[_beneficiary] * elapsedTime) / VESTING_DURATION;
        return vestedAmount - releasedTokens[_beneficiary];
    }
    
    /**
     * @dev Create a new snapshot for governance voting
     * @return Snapshot ID
     */
    function createSnapshot() external onlyOwner returns (uint256) {
        uint256 snapshotId = _snapshot();
        emit SnapshotCreated(snapshotId);
        return snapshotId;
    }
    
    /**
     * @dev Add an authorized minter (for controlled inflation)
     * @param _minter Address to authorize
     */
    function addAuthorizedMinter(address _minter) external onlyOwner {
        require(_minter != address(0), "Invalid minter address");
        authorizedMinters[_minter] = true;
        emit AuthorizedMinterAdded(_minter);
    }
    
    /**
     * @dev Remove an authorized minter
     * @param _minter Address to remove authorization
     */
    function removeAuthorizedMinter(address _minter) external onlyOwner {
        authorizedMinters[_minter] = false;
        emit AuthorizedMinterRemoved(_minter);
    }
    
    /**
     * @dev Mint new tokens with inflation controls
     * @param _to Address to mint to
     * @param _amount Amount to mint
     * @param _reason Reason for minting (for transparency)
     */
    function controlledMint(address _to, uint256 _amount, string memory _reason) external {
        require(authorizedMinters[msg.sender], "Not authorized to mint");
        require(_to != address(0), "Invalid recipient");
        
        // Check inflation rate limits
        uint256 timeSinceLastInflation = block.timestamp - lastInflationTimestamp;
        require(timeSinceLastInflation >= 365 days, "Too frequent inflation");
        
        uint256 currentSupply = totalSupply();
        uint256 maxAllowedInflation = (currentSupply * maxInflationRate) / 10000;
        require(_amount <= maxAllowedInflation, "Exceeds maximum inflation rate");
        
        _mint(_to, _amount);
        lastInflationTimestamp = block.timestamp;
        
        emit InflationMinted(_amount, _reason);
    }
    
    /**
     * @dev Update maximum inflation rate (governance decision)
     * @param _newRate New maximum inflation rate in basis points (100 = 1%)
     */
    function updateMaxInflationRate(uint256 _newRate) external onlyOwner {
        require(_newRate <= 500, "Inflation rate too high"); // Max 5%
        maxInflationRate = _newRate;
    }
    
    /**
     * @dev Pause token transfers (emergency function)
     */
    function pause() external onlyOwner {
        _pause();
    }
    
    /**
     * @dev Unpause token transfers
     */
    function unpause() external onlyOwner {
        _unpause();
    }
    
    /**
     * @dev Get voting power at a specific snapshot
     * @param _account Account to check
     * @param _snapshotId Snapshot ID
     * @return Voting power (token balance) at snapshot
     */
    function getVotingPower(address _account, uint256 _snapshotId) external view returns (uint256) {
        return balanceOfAt(_account, _snapshotId);
    }
    
    /**
     * @dev Delegate tokens for governance (simple delegation)
     * This is a basic implementation - can be enhanced with more sophisticated delegation
     */
    mapping(address => address) public delegates;
    mapping(address => uint256) public delegatedBalance;
    
    event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate);
    
    function delegate(address _to) external {
        address oldDelegate = delegates[msg.sender];
        delegates[msg.sender] = _to;
        
        uint256 delegatorBalance = balanceOf(msg.sender);
        
        if (oldDelegate != address(0)) {
            delegatedBalance[oldDelegate] -= delegatorBalance;
        }
        
        if (_to != address(0)) {
            delegatedBalance[_to] += delegatorBalance;
        }
        
        emit DelegateChanged(msg.sender, oldDelegate, _to);
    }
    
    /**
     * @dev Get total voting power including delegated tokens
     * @param _account Account to check
     * @return Total voting power
     */
    function getTotalVotingPower(address _account) external view returns (uint256) {
        return balanceOf(_account) + delegatedBalance[_account];
    }
    
    // Override required functions
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override(ERC20, ERC20Snapshot)
    {
        super._beforeTokenTransfer(from, to, amount);
        
        // Update delegated balances on transfer
        if (from != address(0) && delegates[from] != address(0)) {
            delegatedBalance[delegates[from]] -= amount;
        }
        
        if (to != address(0) && delegates[to] != address(0)) {
            delegatedBalance[delegates[to]] += amount;
        }
    }
    
    /**
     * @dev Burn tokens and reduce total supply (deflationary mechanism)
     * @param _amount Amount to burn
     */
    function burnFromTreasury(uint256 _amount) external {
        require(msg.sender == dacTreasury, "Only treasury can burn");
        _burn(dacTreasury, _amount);
    }
    
    /**
     * @dev Get token distribution information
     * @return Array of allocation amounts and descriptions
     */
    function getTokenDistribution() external pure returns (
        uint256[] memory amounts,
        string[] memory descriptions
    ) {
        amounts = new uint256[](4);
        descriptions = new string[](4);
        
        amounts[0] = DAC_TREASURY_ALLOCATION;
        descriptions[0] = "DAC Treasury";
        
        amounts[1] = COMMUNITY_REWARDS_ALLOCATION;
        descriptions[1] = "Community Rewards";
        
        amounts[2] = DEPTH_OS_INCENTIVES_ALLOCATION;
        descriptions[2] = "Depth OS Incentives";
        
        amounts[3] = FOUNDER_ALLOCATION;
        descriptions[3] = "Founder Allocation (Vested)";
        
        return (amounts, descriptions);
    }
}
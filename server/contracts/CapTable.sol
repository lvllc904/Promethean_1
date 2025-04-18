// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./PromToken.sol";

/**
 * @title CapTable
 * @dev Smart contract to manage Prom token ownership and vesting schedules
 */
contract CapTable is AccessControl, ReentrancyGuard {
    // Roles for access control
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant DISTRIBUTOR_ROLE = keccak256("DISTRIBUTOR_ROLE");
    
    // Reference to the Prom token contract
    PromToken public promToken;
    
    // Ownership categories
    enum OwnershipCategory { WORKER, USER, INVESTOR, TREASURY }
    
    // Vesting schedule 
    struct VestingSchedule {
        uint256 totalAmount;          // Total amount of tokens to vest
        uint256 amountClaimed;        // Amount of tokens already claimed
        uint256 startTime;            // Start time of the vesting period
        uint256 endTime;              // End time of the vesting period
        bool revocable;               // Whether the vesting can be revoked
        bool revoked;                 // Whether the vesting has been revoked
    }
    
    // Token holder data
    struct TokenHolder {
        OwnershipCategory category;   // Category of the token holder
        uint256 totalBalance;         // Total direct balance (not vested)
        VestingSchedule[] vestingSchedules; // Vesting schedules for the holder
        bool hasReceivedInitialGrant; // Flag for initial free token
    }
    
    // Mapping of addresses to their token holder data
    mapping(address => TokenHolder) public tokenHolders;
    
    // Total tokens distributed in each category
    mapping(OwnershipCategory => uint256) public categoryTotals;
    
    // Address array to track all token holders
    address[] public holderAddresses;
    
    // Events
    event InitialGrantDistributed(address indexed holder);
    event VestingScheduleCreated(address indexed holder, uint256 amount, uint256 startTime, uint256 endTime);
    event VestingTokensClaimed(address indexed holder, uint256 amount);
    event VestingScheduleRevoked(address indexed holder, uint256 scheduleIndex);
    event DirectTokensDistributed(address indexed holder, uint256 amount, OwnershipCategory category);
    
    /**
     * @dev Constructor sets up roles and references the Prom token contract
     * @param _promTokenAddress Address of the Prom token contract
     */
    constructor(address _promTokenAddress) {
        require(_promTokenAddress != address(0), "Invalid token address");
        
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(DISTRIBUTOR_ROLE, msg.sender);
        
        promToken = PromToken(_promTokenAddress);
    }
    
    /**
     * @dev Distribute initial free token to a new user
     * @param userAddress Address of the user
     */
    function distributeInitialProm(address userAddress) external onlyRole(DISTRIBUTOR_ROLE) nonReentrant {
        require(userAddress != address(0), "Invalid user address");
        require(!tokenHolders[userAddress].hasReceivedInitialGrant, "User already received initial grant");
        
        // Create token holder if it doesn't exist
        if (tokenHolders[userAddress].totalBalance == 0 && 
            tokenHolders[userAddress].vestingSchedules.length == 0) {
            tokenHolders[userAddress].category = OwnershipCategory.USER;
            holderAddresses.push(userAddress);
        }
        
        // Mark as having received initial grant
        tokenHolders[userAddress].hasReceivedInitialGrant = true;
        
        // Mint and distribute the token
        promToken.mint(userAddress, 1 * 10**18, "user");
        tokenHolders[userAddress].totalBalance += 1 * 10**18;
        categoryTotals[OwnershipCategory.USER] += 1 * 10**18;
        
        emit InitialGrantDistributed(userAddress);
    }
    
    /**
     * @dev Distribute tokens to a worker with optional vesting
     * @param workerAddress Address of the worker
     * @param amount Amount of tokens to distribute
     * @param withVesting Whether to apply vesting
     * @param vestingDuration Duration of vesting in seconds (if withVesting is true)
     */
    function distributeWorkerProm(
        address workerAddress, 
        uint256 amount, 
        bool withVesting, 
        uint256 vestingDuration
    ) external onlyRole(DISTRIBUTOR_ROLE) nonReentrant {
        require(workerAddress != address(0), "Invalid worker address");
        require(amount > 0, "Amount must be greater than 0");
        
        // Create token holder if it doesn't exist
        if (tokenHolders[workerAddress].totalBalance == 0 && 
            tokenHolders[workerAddress].vestingSchedules.length == 0) {
            tokenHolders[workerAddress].category = OwnershipCategory.WORKER;
            holderAddresses.push(workerAddress);
        }
        
        if (withVesting && vestingDuration > 0) {
            // Create a vesting schedule
            uint256 startTime = block.timestamp;
            uint256 endTime = startTime + vestingDuration;
            
            VestingSchedule memory newSchedule = VestingSchedule({
                totalAmount: amount,
                amountClaimed: 0,
                startTime: startTime,
                endTime: endTime,
                revocable: true,
                revoked: false
            });
            
            tokenHolders[workerAddress].vestingSchedules.push(newSchedule);
            
            // Mint tokens to this contract for later distribution
            promToken.mint(address(this), amount, "worker");
            
            emit VestingScheduleCreated(workerAddress, amount, startTime, endTime);
        } else {
            // Direct distribution without vesting
            promToken.mint(workerAddress, amount, "worker");
            tokenHolders[workerAddress].totalBalance += amount;
            
            emit DirectTokensDistributed(workerAddress, amount, OwnershipCategory.WORKER);
        }
        
        categoryTotals[OwnershipCategory.WORKER] += amount;
    }
    
    /**
     * @dev Distribute additional tokens to a user (beyond initial free token)
     * @param userAddress Address of the user
     * @param amount Amount of tokens to distribute
     */
    function distributeUserProm(address userAddress, uint256 amount) 
        external onlyRole(DISTRIBUTOR_ROLE) nonReentrant {
        require(userAddress != address(0), "Invalid user address");
        require(amount > 0, "Amount must be greater than 0");
        
        // Create token holder if it doesn't exist
        if (tokenHolders[userAddress].totalBalance == 0 && 
            tokenHolders[userAddress].vestingSchedules.length == 0) {
            tokenHolders[userAddress].category = OwnershipCategory.USER;
            holderAddresses.push(userAddress);
        }
        
        // Direct distribution
        promToken.mint(userAddress, amount, "user");
        tokenHolders[userAddress].totalBalance += amount;
        categoryTotals[OwnershipCategory.USER] += amount;
        
        emit DirectTokensDistributed(userAddress, amount, OwnershipCategory.USER);
    }
    
    /**
     * @dev Handle investor token sale
     * @param investorAddress Address of the investor
     * @param amount Amount of tokens to sell
     * @param price Price paid per token (for record-keeping only)
     */
    function handleInvestorSale(address investorAddress, uint256 amount, uint256 price) 
        external onlyRole(DISTRIBUTOR_ROLE) nonReentrant {
        require(investorAddress != address(0), "Invalid investor address");
        require(amount > 0, "Amount must be greater than 0");
        
        // Create token holder if it doesn't exist
        if (tokenHolders[investorAddress].totalBalance == 0 && 
            tokenHolders[investorAddress].vestingSchedules.length == 0) {
            tokenHolders[investorAddress].category = OwnershipCategory.INVESTOR;
            holderAddresses.push(investorAddress);
        }
        
        // Mint and distribute tokens
        promToken.mint(investorAddress, amount, "investor");
        tokenHolders[investorAddress].totalBalance += amount;
        categoryTotals[OwnershipCategory.INVESTOR] += amount;
        
        emit DirectTokensDistributed(investorAddress, amount, OwnershipCategory.INVESTOR);
    }
    
    /**
     * @dev Manage Prom tokens in the DAC treasury
     * @param amount Amount of tokens to manage
     * @param action Action to take ('mint' or 'burn')
     */
    function manageDACTreasury(uint256 amount, string memory action) external onlyRole(ADMIN_ROLE) nonReentrant {
        require(amount > 0, "Amount must be greater than 0");
        require(
            keccak256(abi.encodePacked(action)) == keccak256(abi.encodePacked("mint")) || 
            keccak256(abi.encodePacked(action)) == keccak256(abi.encodePacked("burn")), 
            "Invalid action"
        );
        
        if (keccak256(abi.encodePacked(action)) == keccak256(abi.encodePacked("mint"))) {
            // Mint new tokens to DAC treasury
            promToken.mint(msg.sender, amount, "treasury");
            categoryTotals[OwnershipCategory.TREASURY] += amount;
            
            emit DirectTokensDistributed(msg.sender, amount, OwnershipCategory.TREASURY);
        } else {
            // Burn tokens from DAC treasury
            promToken.burn(amount);
            categoryTotals[OwnershipCategory.TREASURY] -= amount;
            
            emit TokensBurned(msg.sender, amount);
        }
    }
    
    /**
     * @dev Claim tokens from vesting schedule
     * @param scheduleIndex Index of the vesting schedule
     */
    function claimVestedTokens(uint256 scheduleIndex) external nonReentrant {
        require(scheduleIndex < tokenHolders[msg.sender].vestingSchedules.length, "Invalid schedule index");
        
        VestingSchedule storage schedule = tokenHolders[msg.sender].vestingSchedules[scheduleIndex];
        require(!schedule.revoked, "Vesting schedule revoked");
        
        uint256 vestedAmount = calculateVestedAmount(msg.sender, scheduleIndex);
        uint256 claimableAmount = vestedAmount - schedule.amountClaimed;
        
        require(claimableAmount > 0, "No tokens to claim");
        
        schedule.amountClaimed += claimableAmount;
        tokenHolders[msg.sender].totalBalance += claimableAmount;
        
        promToken.transfer(msg.sender, claimableAmount);
        
        emit VestingTokensClaimed(msg.sender, claimableAmount);
    }
    
    /**
     * @dev Calculate vested amount for a schedule
     * @param holder Address of the token holder
     * @param scheduleIndex Index of the vesting schedule
     * @return Vested amount
     */
    function calculateVestedAmount(address holder, uint256 scheduleIndex) public view returns (uint256) {
        require(scheduleIndex < tokenHolders[holder].vestingSchedules.length, "Invalid schedule index");
        
        VestingSchedule storage schedule = tokenHolders[holder].vestingSchedules[scheduleIndex];
        
        if (schedule.revoked) {
            return schedule.amountClaimed;
        }
        
        if (block.timestamp < schedule.startTime) {
            return 0;
        }
        
        if (block.timestamp >= schedule.endTime) {
            return schedule.totalAmount;
        }
        
        // Linear vesting
        uint256 timeElapsed = block.timestamp - schedule.startTime;
        uint256 totalVestingTime = schedule.endTime - schedule.startTime;
        
        return (schedule.totalAmount * timeElapsed) / totalVestingTime;
    }
    
    /**
     * @dev Revoke a vesting schedule (admin only)
     * @param holder Address of the token holder
     * @param scheduleIndex Index of the vesting schedule
     */
    function revokeVestingSchedule(address holder, uint256 scheduleIndex) external onlyRole(ADMIN_ROLE) nonReentrant {
        require(scheduleIndex < tokenHolders[holder].vestingSchedules.length, "Invalid schedule index");
        
        VestingSchedule storage schedule = tokenHolders[holder].vestingSchedules[scheduleIndex];
        require(!schedule.revoked, "Already revoked");
        require(schedule.revocable, "Not revocable");
        
        uint256 vestedAmount = calculateVestedAmount(holder, scheduleIndex);
        uint256 amountClaimable = vestedAmount - schedule.amountClaimed;
        uint256 amountRevoked = schedule.totalAmount - vestedAmount;
        
        // Mark as revoked
        schedule.revoked = true;
        
        // Transfer vested but unclaimed tokens to the holder
        if (amountClaimable > 0) {
            schedule.amountClaimed += amountClaimable;
            tokenHolders[holder].totalBalance += amountClaimable;
            promToken.transfer(holder, amountClaimable);
        }
        
        // Return revoked tokens to treasury
        if (amountRevoked > 0) {
            address treasury = msg.sender; // Admin is the treasury
            promToken.transfer(treasury, amountRevoked);
        }
        
        emit VestingScheduleRevoked(holder, scheduleIndex);
    }
    
    /**
     * @dev Get total tokens held by an address (direct + vested)
     * @param holder Address of the token holder
     * @return Total balance including vested tokens
     */
    function getTotalTokens(address holder) external view returns (uint256) {
        uint256 total = tokenHolders[holder].totalBalance;
        
        // Add vested but unclaimed tokens
        for (uint256 i = 0; i < tokenHolders[holder].vestingSchedules.length; i++) {
            if (!tokenHolders[holder].vestingSchedules[i].revoked) {
                uint256 vestedAmount = calculateVestedAmount(holder, i);
                uint256 unclaimedAmount = vestedAmount - tokenHolders[holder].vestingSchedules[i].amountClaimed;
                total += unclaimedAmount;
            }
        }
        
        return total;
    }
    
    /**
     * @dev Get count of token holders
     * @return Number of unique token holders
     */
    function getHolderCount() external view returns (uint256) {
        return holderAddresses.length;
    }
    
    /**
     * @dev Check if user has received initial free token
     * @param userAddress Address to check
     * @return Whether user has received initial grant
     */
    function hasReceivedInitialGrant(address userAddress) external view returns (bool) {
        return tokenHolders[userAddress].hasReceivedInitialGrant;
    }
    
    /**
     * @dev Get vesting schedules for a holder
     * @param holder Address of the token holder
     * @return Array of vesting schedules
     */
    function getVestingSchedules(address holder) external view returns (VestingSchedule[] memory) {
        return tokenHolders[holder].vestingSchedules;
    }
}
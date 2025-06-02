// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @title AssetCustody
 * @dev Manages custody and verification of real world assets
 */
contract AssetCustody is ReentrancyGuard, AccessControl, Pausable {
    bytes32 public constant CUSTODIAN_ROLE = keccak256("CUSTODIAN_ROLE");
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");
    bytes32 public constant ASSET_MANAGER_ROLE = keccak256("ASSET_MANAGER_ROLE");
    
    struct Asset {
        string assetId;             // Unique identifier
        string assetType;           // Type of asset
        string description;         // Asset description
        uint256 valuation;          // Current valuation
        address custodian;          // Responsible custodian
        address tokenContract;      // Associated token contract
        string documentationHash;   // IPFS hash of documentation
        bool isVerified;            // Verification status
        bool isActive;              // Asset status
        uint256 createdAt;          // Creation timestamp
        uint256 lastInspection;     // Last inspection timestamp
    }
    
    struct CustodianProfile {
        string name;                // Custodian name
        string licenseNumber;       // License/certification number
        string jurisdiction;        // Operating jurisdiction
        bool isActive;              // Active status
        uint256 totalAssetsValue;   // Total value under custody
        uint256 registeredAt;       // Registration timestamp
    }
    
    mapping(string => Asset) public assets;
    mapping(address => CustodianProfile) public custodians;
    mapping(address => string[]) public custodianAssets;
    
    string[] public allAssetIds;
    uint256 public totalAssetsValue;
    
    event AssetRegistered(string indexed assetId, address indexed custodian, uint256 valuation);
    event AssetVerified(string indexed assetId, address indexed verifier);
    event ValuationUpdated(string indexed assetId, uint256 oldValue, uint256 newValue);
    event CustodianRegistered(address indexed custodian, string name);
    event InspectionCompleted(string indexed assetId, uint256 timestamp);
    event AssetTransferred(string indexed assetId, address oldCustodian, address newCustodian);
    
    constructor(address _admin) {
        _grantRole(DEFAULT_ADMIN_ROLE, _admin);
        _grantRole(CUSTODIAN_ROLE, _admin);
        _grantRole(VERIFIER_ROLE, _admin);
        _grantRole(ASSET_MANAGER_ROLE, _admin);
    }
    
    /**
     * @dev Register a new custodian
     */
    function registerCustodian(
        address custodianAddress,
        string memory name,
        string memory licenseNumber,
        string memory jurisdiction
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(bytes(name).length > 0, "Name cannot be empty");
        require(!custodians[custodianAddress].isActive, "Custodian already registered");
        
        custodians[custodianAddress] = CustodianProfile({
            name: name,
            licenseNumber: licenseNumber,
            jurisdiction: jurisdiction,
            isActive: true,
            totalAssetsValue: 0,
            registeredAt: block.timestamp
        });
        
        _grantRole(CUSTODIAN_ROLE, custodianAddress);
        emit CustodianRegistered(custodianAddress, name);
    }
    
    /**
     * @dev Register a new asset under custody
     */
    function registerAsset(
        string memory assetId,
        string memory assetType,
        string memory description,
        uint256 valuation,
        address tokenContract,
        string memory documentationHash
    ) external onlyRole(CUSTODIAN_ROLE) {
        require(bytes(assetId).length > 0, "Asset ID cannot be empty");
        require(bytes(assets[assetId].assetId).length == 0, "Asset already exists");
        require(custodians[msg.sender].isActive, "Custodian not active");
        require(valuation > 0, "Valuation must be positive");
        
        assets[assetId] = Asset({
            assetId: assetId,
            assetType: assetType,
            description: description,
            valuation: valuation,
            custodian: msg.sender,
            tokenContract: tokenContract,
            documentationHash: documentationHash,
            isVerified: false,
            isActive: true,
            createdAt: block.timestamp,
            lastInspection: 0
        });
        
        allAssetIds.push(assetId);
        custodianAssets[msg.sender].push(assetId);
        custodians[msg.sender].totalAssetsValue += valuation;
        totalAssetsValue += valuation;
        
        emit AssetRegistered(assetId, msg.sender, valuation);
    }
    
    /**
     * @dev Verify an asset by authorized verifier
     */
    function verifyAsset(string memory assetId) external onlyRole(VERIFIER_ROLE) {
        require(bytes(assets[assetId].assetId).length > 0, "Asset does not exist");
        require(!assets[assetId].isVerified, "Asset already verified");
        
        assets[assetId].isVerified = true;
        emit AssetVerified(assetId, msg.sender);
    }
    
    /**
     * @dev Update asset valuation
     */
    function updateValuation(
        string memory assetId,
        uint256 newValuation
    ) external onlyRole(ASSET_MANAGER_ROLE) {
        require(bytes(assets[assetId].assetId).length > 0, "Asset does not exist");
        require(newValuation > 0, "Valuation must be positive");
        
        uint256 oldValuation = assets[assetId].valuation;
        address custodian = assets[assetId].custodian;
        
        // Update values
        assets[assetId].valuation = newValuation;
        custodians[custodian].totalAssetsValue = 
            custodians[custodian].totalAssetsValue - oldValuation + newValuation;
        totalAssetsValue = totalAssetsValue - oldValuation + newValuation;
        
        emit ValuationUpdated(assetId, oldValuation, newValuation);
    }
    
    /**
     * @dev Complete inspection for an asset
     */
    function completeInspection(string memory assetId) external onlyRole(CUSTODIAN_ROLE) {
        require(bytes(assets[assetId].assetId).length > 0, "Asset does not exist");
        require(assets[assetId].custodian == msg.sender, "Not asset custodian");
        
        assets[assetId].lastInspection = block.timestamp;
        emit InspectionCompleted(assetId, block.timestamp);
    }
    
    /**
     * @dev Transfer asset to new custodian
     */
    function transferAsset(
        string memory assetId,
        address newCustodian
    ) external onlyRole(ASSET_MANAGER_ROLE) {
        require(bytes(assets[assetId].assetId).length > 0, "Asset does not exist");
        require(custodians[newCustodian].isActive, "New custodian not active");
        
        address oldCustodian = assets[assetId].custodian;
        uint256 assetValue = assets[assetId].valuation;
        
        // Update custodian assets
        custodians[oldCustodian].totalAssetsValue -= assetValue;
        custodians[newCustodian].totalAssetsValue += assetValue;
        
        // Remove from old custodian's list
        string[] storage oldAssets = custodianAssets[oldCustodian];
        for (uint i = 0; i < oldAssets.length; i++) {
            if (keccak256(bytes(oldAssets[i])) == keccak256(bytes(assetId))) {
                oldAssets[i] = oldAssets[oldAssets.length - 1];
                oldAssets.pop();
                break;
            }
        }
        
        // Add to new custodian's list
        custodianAssets[newCustodian].push(assetId);
        assets[assetId].custodian = newCustodian;
        
        emit AssetTransferred(assetId, oldCustodian, newCustodian);
    }
    
    /**
     * @dev Deactivate an asset
     */
    function deactivateAsset(string memory assetId) external onlyRole(ASSET_MANAGER_ROLE) {
        require(bytes(assets[assetId].assetId).length > 0, "Asset does not exist");
        require(assets[assetId].isActive, "Asset already inactive");
        
        assets[assetId].isActive = false;
        
        // Update totals
        address custodian = assets[assetId].custodian;
        uint256 assetValue = assets[assetId].valuation;
        custodians[custodian].totalAssetsValue -= assetValue;
        totalAssetsValue -= assetValue;
    }
    
    /**
     * @dev Get asset details
     */
    function getAsset(string memory assetId) external view returns (Asset memory) {
        require(bytes(assets[assetId].assetId).length > 0, "Asset does not exist");
        return assets[assetId];
    }
    
    /**
     * @dev Get custodian profile
     */
    function getCustodian(address custodianAddress) external view returns (CustodianProfile memory) {
        return custodians[custodianAddress];
    }
    
    /**
     * @dev Get assets under specific custodian
     */
    function getCustodianAssets(address custodianAddress) external view returns (string[] memory) {
        return custodianAssets[custodianAddress];
    }
    
    /**
     * @dev Get all asset IDs
     */
    function getAllAssets() external view returns (string[] memory) {
        return allAssetIds;
    }
    
    /**
     * @dev Get total number of assets
     */
    function getTotalAssetsCount() external view returns (uint256) {
        return allAssetIds.length;
    }
    
    /**
     * @dev Check if asset exists and is verified
     */
    function isAssetVerified(string memory assetId) external view returns (bool) {
        return bytes(assets[assetId].assetId).length > 0 && assets[assetId].isVerified;
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
}
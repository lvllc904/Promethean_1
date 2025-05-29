// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";

/**
 * @title PrometheaIdentity
 * @dev Decentralized identity management for Promethea DAC participants
 * Manages identity verification, reputation, and authentication for Depth OS users
 */
contract PrometheaIdentity is Ownable, ReentrancyGuard, EIP712 {
    using ECDSA for bytes32;
    
    struct Identity {
        address owner;
        string ipfsHash; // IPFS hash containing identity document
        bytes32 identityCommitment; // Commitment to private identity data
        uint256 creationTimestamp;
        uint256 lastUpdateTimestamp;
        bool isVerified;
        bool isActive;
        uint256 reputationScore;
        string[] endorsements; // IPFS hashes of endorsement documents
    }
    
    struct VerificationRequest {
        address requester;
        bytes32 identityHash;
        string evidenceIPFS;
        uint256 timestamp;
        bool processed;
        bool approved;
        address verifier;
    }
    
    struct ReputationUpdate {
        address subject;
        address reporter;
        int256 scoreChange;
        string reason;
        uint256 timestamp;
        bool verified;
    }
    
    // Identity storage
    mapping(address => Identity) public identities;
    mapping(bytes32 => address) public identityCommitments;
    mapping(uint256 => VerificationRequest) public verificationRequests;
    mapping(address => ReputationUpdate[]) public reputationHistory;
    
    // Authorized verifiers (trusted entities that can verify identities)
    mapping(address => bool) public authorizedVerifiers;
    mapping(address => string) public verifierProfiles; // IPFS hash of verifier credentials
    
    // Identity counters and limits
    uint256 public totalIdentities;
    uint256 public verificationRequestCounter;
    uint256 public constant MIN_REPUTATION_SCORE = 0;
    uint256 public constant MAX_REPUTATION_SCORE = 1000;
    uint256 public constant INITIAL_REPUTATION_SCORE = 100;
    
    // Governance parameters
    uint256 public verificationFee = 0.01 ether;
    uint256 public verificationTimeLimit = 7 days;
    
    // Events
    event IdentityCreated(address indexed owner, bytes32 indexed commitment, string ipfsHash);
    event IdentityUpdated(address indexed owner, string newIpfsHash);
    event VerificationRequested(uint256 indexed requestId, address indexed requester);
    event IdentityVerified(address indexed owner, address indexed verifier);
    event ReputationUpdated(address indexed subject, int256 scoreChange, address indexed reporter);
    event VerifierAuthorized(address indexed verifier, string profileIPFS);
    event EndorsementAdded(address indexed subject, address indexed endorser, string endorsementIPFS);
    
    /**
     * @dev Constructor
     */
    constructor() EIP712("PrometheaIdentity", "1") {}
    
    /**
     * @dev Create a new decentralized identity
     * @param _ipfsHash IPFS hash of the identity document
     * @param _identityCommitment Cryptographic commitment to private identity data
     */
    function createIdentity(string memory _ipfsHash, bytes32 _identityCommitment) external {
        require(identities[msg.sender].owner == address(0), "Identity already exists");
        require(identityCommitments[_identityCommitment] == address(0), "Commitment already used");
        require(bytes(_ipfsHash).length > 0, "IPFS hash required");
        
        identities[msg.sender] = Identity({
            owner: msg.sender,
            ipfsHash: _ipfsHash,
            identityCommitment: _identityCommitment,
            creationTimestamp: block.timestamp,
            lastUpdateTimestamp: block.timestamp,
            isVerified: false,
            isActive: true,
            reputationScore: INITIAL_REPUTATION_SCORE,
            endorsements: new string[](0)
        });
        
        identityCommitments[_identityCommitment] = msg.sender;
        totalIdentities++;
        
        emit IdentityCreated(msg.sender, _identityCommitment, _ipfsHash);
    }
    
    /**
     * @dev Update an existing identity
     * @param _newIpfsHash New IPFS hash for updated identity document
     */
    function updateIdentity(string memory _newIpfsHash) external {
        require(identities[msg.sender].owner == msg.sender, "Identity not found");
        require(identities[msg.sender].isActive, "Identity is inactive");
        require(bytes(_newIpfsHash).length > 0, "IPFS hash required");
        
        identities[msg.sender].ipfsHash = _newIpfsHash;
        identities[msg.sender].lastUpdateTimestamp = block.timestamp;
        
        emit IdentityUpdated(msg.sender, _newIpfsHash);
    }
    
    /**
     * @dev Request identity verification
     * @param _evidenceIPFS IPFS hash containing verification evidence
     */
    function requestVerification(string memory _evidenceIPFS) external payable {
        require(identities[msg.sender].owner == msg.sender, "Identity not found");
        require(!identities[msg.sender].isVerified, "Already verified");
        require(msg.value >= verificationFee, "Insufficient verification fee");
        require(bytes(_evidenceIPFS).length > 0, "Evidence required");
        
        uint256 requestId = verificationRequestCounter++;
        
        verificationRequests[requestId] = VerificationRequest({
            requester: msg.sender,
            identityHash: identities[msg.sender].identityCommitment,
            evidenceIPFS: _evidenceIPFS,
            timestamp: block.timestamp,
            processed: false,
            approved: false,
            verifier: address(0)
        });
        
        emit VerificationRequested(requestId, msg.sender);
    }
    
    /**
     * @dev Process a verification request (authorized verifiers only)
     * @param _requestId ID of the verification request
     * @param _approved Whether to approve the verification
     */
    function processVerification(uint256 _requestId, bool _approved) external {
        require(authorizedVerifiers[msg.sender], "Not authorized verifier");
        
        VerificationRequest storage request = verificationRequests[_requestId];
        require(!request.processed, "Request already processed");
        require(block.timestamp <= request.timestamp + verificationTimeLimit, "Request expired");
        
        request.processed = true;
        request.approved = _approved;
        request.verifier = msg.sender;
        
        if (_approved) {
            identities[request.requester].isVerified = true;
            // Bonus reputation for verification
            _updateReputation(request.requester, 50, "Identity verified");
            
            emit IdentityVerified(request.requester, msg.sender);
        }
    }
    
    /**
     * @dev Add an endorsement to an identity
     * @param _subject Address of the identity to endorse
     * @param _endorsementIPFS IPFS hash of the endorsement document
     */
    function addEndorsement(address _subject, string memory _endorsementIPFS) external {
        require(identities[msg.sender].isVerified, "Endorser must be verified");
        require(identities[_subject].owner == _subject, "Subject identity not found");
        require(bytes(_endorsementIPFS).length > 0, "Endorsement content required");
        
        identities[_subject].endorsements.push(_endorsementIPFS);
        
        // Small reputation boost for receiving endorsement
        _updateReputation(_subject, 5, "Received endorsement");
        
        emit EndorsementAdded(_subject, msg.sender, _endorsementIPFS);
    }
    
    /**
     * @dev Update reputation score (internal function)
     * @param _subject Address to update reputation for
     * @param _scoreChange Change in reputation (can be negative)
     * @param _reason Reason for the reputation change
     */
    function _updateReputation(address _subject, int256 _scoreChange, string memory _reason) internal {
        Identity storage identity = identities[_subject];
        require(identity.owner == _subject, "Identity not found");
        
        // Calculate new reputation score with bounds checking
        int256 newScore = int256(identity.reputationScore) + _scoreChange;
        if (newScore < int256(MIN_REPUTATION_SCORE)) {
            newScore = int256(MIN_REPUTATION_SCORE);
        } else if (newScore > int256(MAX_REPUTATION_SCORE)) {
            newScore = int256(MAX_REPUTATION_SCORE);
        }
        
        identity.reputationScore = uint256(newScore);
        
        // Record reputation change
        reputationHistory[_subject].push(ReputationUpdate({
            subject: _subject,
            reporter: msg.sender,
            scoreChange: _scoreChange,
            reason: _reason,
            timestamp: block.timestamp,
            verified: authorizedVerifiers[msg.sender]
        }));
        
        emit ReputationUpdated(_subject, _scoreChange, msg.sender);
    }
    
    /**
     * @dev Report reputation change (for verified members)
     * @param _subject Address to report about
     * @param _scoreChange Reputation change to report
     * @param _reason Reason for the reputation change
     */
    function reportReputationChange(address _subject, int256 _scoreChange, string memory _reason) external {
        require(identities[msg.sender].isVerified, "Reporter must be verified");
        require(identities[_subject].owner == _subject, "Subject identity not found");
        require(_scoreChange >= -50 && _scoreChange <= 50, "Score change out of range");
        
        _updateReputation(_subject, _scoreChange, _reason);
    }
    
    /**
     * @dev Authorize a new verifier
     * @param _verifier Address to authorize
     * @param _profileIPFS IPFS hash of verifier's credentials/profile
     */
    function authorizeVerifier(address _verifier, string memory _profileIPFS) external onlyOwner {
        require(_verifier != address(0), "Invalid verifier address");
        require(bytes(_profileIPFS).length > 0, "Verifier profile required");
        
        authorizedVerifiers[_verifier] = true;
        verifierProfiles[_verifier] = _profileIPFS;
        
        emit VerifierAuthorized(_verifier, _profileIPFS);
    }
    
    /**
     * @dev Remove verifier authorization
     * @param _verifier Address to remove authorization from
     */
    function removeVerifierAuthorization(address _verifier) external onlyOwner {
        authorizedVerifiers[_verifier] = false;
        delete verifierProfiles[_verifier];
    }
    
    /**
     * @dev Get identity information
     * @param _owner Address of the identity owner
     * @return Complete identity information
     */
    function getIdentity(address _owner) external view returns (Identity memory) {
        return identities[_owner];
    }
    
    /**
     * @dev Get reputation history for an address
     * @param _subject Address to get history for
     * @return Array of reputation updates
     */
    function getReputationHistory(address _subject) external view returns (ReputationUpdate[] memory) {
        return reputationHistory[_subject];
    }
    
    /**
     * @dev Check if an identity is valid and active
     * @param _owner Address to check
     * @return Whether the identity is valid and active
     */
    function isValidIdentity(address _owner) external view returns (bool) {
        Identity memory identity = identities[_owner];
        return identity.owner == _owner && identity.isActive;
    }
    
    /**
     * @dev Get verification request details
     * @param _requestId Request ID to look up
     * @return Verification request information
     */
    function getVerificationRequest(uint256 _requestId) external view returns (VerificationRequest memory) {
        return verificationRequests[_requestId];
    }
    
    /**
     * @dev Update verification fee (governance function)
     * @param _newFee New verification fee in wei
     */
    function updateVerificationFee(uint256 _newFee) external onlyOwner {
        verificationFee = _newFee;
    }
    
    /**
     * @dev Update verification time limit (governance function)
     * @param _newTimeLimit New time limit in seconds
     */
    function updateVerificationTimeLimit(uint256 _newTimeLimit) external onlyOwner {
        require(_newTimeLimit >= 1 days && _newTimeLimit <= 30 days, "Invalid time limit");
        verificationTimeLimit = _newTimeLimit;
    }
    
    /**
     * @dev Withdraw accumulated verification fees (owner only)
     */
    function withdrawFees() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No fees to withdraw");
        
        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Withdrawal failed");
    }
    
    /**
     * @dev Deactivate an identity (emergency function)
     * @param _owner Address of identity to deactivate
     */
    function deactivateIdentity(address _owner) external onlyOwner {
        require(identities[_owner].owner == _owner, "Identity not found");
        identities[_owner].isActive = false;
    }
    
    /**
     * @dev Reactivate a deactivated identity
     * @param _owner Address of identity to reactivate
     */
    function reactivateIdentity(address _owner) external onlyOwner {
        require(identities[_owner].owner == _owner, "Identity not found");
        identities[_owner].isActive = true;
    }
}
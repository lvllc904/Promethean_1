// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title PrometheaCore
 * @dev Core smart contract for the Promethea DAC blockchain infrastructure
 * Manages the fundamental DAC operations, ethical code storage, and beacon addressing
 */
contract PrometheaCore is Ownable, ReentrancyGuard {
    
    // Core DAC state variables
    struct EthicalCode {
        bytes32 codeHash;
        string ipfsHash;
        uint256 timestamp;
        bool isActive;
    }
    
    struct DACMember {
        address memberAddress;
        uint256 joinTimestamp;
        uint256 reputationScore;
        bool isActive;
        string identityHash; // IPFS hash for decentralized identity
    }
    
    struct ConsensusProposal {
        uint256 id;
        string title;
        string description;
        bytes32 ethicalCodeHash;
        address proposer;
        uint256 votesFor;
        uint256 votesAgainst;
        uint256 deadline;
        bool executed;
        ProposalType proposalType;
    }
    
    enum ProposalType {
        EthicalCodeUpdate,
        MembershipAction,
        ParameterChange,
        ResourceAllocation
    }
    
    // Immutable Beacon Address - the permanent entry point for Depth OS instances
    address public immutable BEACON_ADDRESS;
    
    // Promethea governance token
    IERC20 public prometheaToken;
    
    // Core DAC storage
    mapping(uint256 => EthicalCode) public ethicalCodes;
    mapping(address => DACMember) public dacMembers;
    mapping(uint256 => ConsensusProposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;
    mapping(address => bool) public authorizedDepthOSInstances;
    
    uint256 public currentEthicalCodeVersion;
    uint256 public totalMembers;
    uint256 public proposalCounter;
    
    // Governance parameters
    uint256 public votingPeriod = 7 days;
    uint256 public quorumThreshold = 51; // 51% required for consensus
    uint256 public minimumTokensToPropose = 1000 * 10**18; // 1000 PROM tokens
    
    // Events
    event EthicalCodeStored(uint256 indexed version, bytes32 indexed codeHash, string ipfsHash);
    event MemberRegistered(address indexed member, string identityHash);
    event ProposalCreated(uint256 indexed proposalId, address indexed proposer, ProposalType proposalType);
    event VoteCast(uint256 indexed proposalId, address indexed voter, bool support, uint256 weight);
    event ConsensusReached(uint256 indexed proposalId, bool approved);
    event DepthOSInstanceAuthorized(address indexed instance);
    event BeaconAddressQueried(address indexed querier, address beaconAddress);
    
    /**
     * @dev Constructor sets up the core Promethea DAC infrastructure
     * @param _prometheaToken Address of the PROM governance token
     * @param _initialEthicalCodeHash Hash of the initial ethical code
     * @param _initialEthicalCodeIPFS IPFS hash of the initial ethical code document
     */
    constructor(
        address _prometheaToken,
        bytes32 _initialEthicalCodeHash,
        string memory _initialEthicalCodeIPFS
    ) {
        prometheaToken = IERC20(_prometheaToken);
        BEACON_ADDRESS = address(this); // This contract serves as the beacon
        
        // Store the immutable ethical foundation
        ethicalCodes[0] = EthicalCode({
            codeHash: _initialEthicalCodeHash,
            ipfsHash: _initialEthicalCodeIPFS,
            timestamp: block.timestamp,
            isActive: true
        });
        
        currentEthicalCodeVersion = 0;
        
        emit EthicalCodeStored(0, _initialEthicalCodeHash, _initialEthicalCodeIPFS);
    }
    
    /**
     * @dev Register a new DAC member with decentralized identity
     * @param _identityHash IPFS hash containing member's decentralized identity document
     */
    function registerMember(string memory _identityHash) external {
        require(!dacMembers[msg.sender].isActive, "Member already registered");
        require(bytes(_identityHash).length > 0, "Identity hash required");
        
        dacMembers[msg.sender] = DACMember({
            memberAddress: msg.sender,
            joinTimestamp: block.timestamp,
            reputationScore: 100, // Starting reputation
            isActive: true,
            identityHash: _identityHash
        });
        
        totalMembers++;
        emit MemberRegistered(msg.sender, _identityHash);
    }
    
    /**
     * @dev Create a new consensus proposal
     * @param _title Proposal title
     * @param _description Proposal description
     * @param _proposalType Type of proposal
     * @param _ethicalCodeHash Optional: new ethical code hash for ethical updates
     */
    function createProposal(
        string memory _title,
        string memory _description,
        ProposalType _proposalType,
        bytes32 _ethicalCodeHash
    ) external {
        require(dacMembers[msg.sender].isActive, "Only active members can propose");
        require(prometheaToken.balanceOf(msg.sender) >= minimumTokensToPropose, "Insufficient tokens to propose");
        
        uint256 proposalId = proposalCounter++;
        
        proposals[proposalId] = ConsensusProposal({
            id: proposalId,
            title: _title,
            description: _description,
            ethicalCodeHash: _ethicalCodeHash,
            proposer: msg.sender,
            votesFor: 0,
            votesAgainst: 0,
            deadline: block.timestamp + votingPeriod,
            executed: false,
            proposalType: _proposalType
        });
        
        emit ProposalCreated(proposalId, msg.sender, _proposalType);
    }
    
    /**
     * @dev Cast a vote on a proposal
     * @param _proposalId ID of the proposal to vote on
     * @param _support True for support, false for opposition
     */
    function vote(uint256 _proposalId, bool _support) external {
        require(dacMembers[msg.sender].isActive, "Only active members can vote");
        require(proposals[_proposalId].deadline > block.timestamp, "Voting period ended");
        require(!hasVoted[_proposalId][msg.sender], "Already voted");
        
        uint256 votingWeight = prometheaToken.balanceOf(msg.sender);
        require(votingWeight > 0, "No voting power");
        
        hasVoted[_proposalId][msg.sender] = true;
        
        if (_support) {
            proposals[_proposalId].votesFor += votingWeight;
        } else {
            proposals[_proposalId].votesAgainst += votingWeight;
        }
        
        emit VoteCast(_proposalId, msg.sender, _support, votingWeight);
        
        // Check if consensus threshold is reached
        _checkConsensus(_proposalId);
    }
    
    /**
     * @dev Execute a proposal that has reached consensus
     * @param _proposalId ID of the proposal to execute
     */
    function executeProposal(uint256 _proposalId) external {
        ConsensusProposal storage proposal = proposals[_proposalId];
        require(proposal.deadline <= block.timestamp, "Voting still active");
        require(!proposal.executed, "Proposal already executed");
        
        uint256 totalVotes = proposal.votesFor + proposal.votesAgainst;
        uint256 totalSupply = prometheaToken.totalSupply();
        
        // Check quorum and majority
        require(totalVotes * 100 >= totalSupply * quorumThreshold, "Quorum not reached");
        require(proposal.votesFor > proposal.votesAgainst, "Proposal rejected");
        
        proposal.executed = true;
        
        // Execute based on proposal type
        if (proposal.proposalType == ProposalType.EthicalCodeUpdate) {
            _updateEthicalCode(proposal.ethicalCodeHash);
        }
        
        emit ConsensusReached(_proposalId, true);
    }
    
    /**
     * @dev Authorize a new Depth OS instance to connect to Promethea
     * @param _instance Address of the Depth OS instance
     */
    function authorizeDepthOSInstance(address _instance) external onlyOwner {
        authorizedDepthOSInstances[_instance] = true;
        emit DepthOSInstanceAuthorized(_instance);
    }
    
    /**
     * @dev Get the beacon address for Depth OS instances to connect to Promethea
     * @return The immutable beacon address
     */
    function getBeaconAddress() external returns (address) {
        emit BeaconAddressQueried(msg.sender, BEACON_ADDRESS);
        return BEACON_ADDRESS;
    }
    
    /**
     * @dev Get current active ethical code
     * @return codeHash Hash of the current ethical code
     * @return ipfsHash IPFS hash of the current ethical code document
     * @return version Current version number
     */
    function getCurrentEthicalCode() external view returns (bytes32 codeHash, string memory ipfsHash, uint256 version) {
        EthicalCode memory currentCode = ethicalCodes[currentEthicalCodeVersion];
        return (currentCode.codeHash, currentCode.ipfsHash, currentEthicalCodeVersion);
    }
    
    /**
     * @dev Verify if an ethical code hash matches the current active version
     * @param _codeHash Hash to verify
     * @return True if the hash matches the current ethical code
     */
    function verifyEthicalCode(bytes32 _codeHash) external view returns (bool) {
        return ethicalCodes[currentEthicalCodeVersion].codeHash == _codeHash;
    }
    
    /**
     * @dev Get member information
     * @param _member Address of the member
     * @return Member struct with all information
     */
    function getMemberInfo(address _member) external view returns (DACMember memory) {
        return dacMembers[_member];
    }
    
    /**
     * @dev Internal function to update ethical code
     * @param _newCodeHash Hash of the new ethical code
     */
    function _updateEthicalCode(bytes32 _newCodeHash) private {
        // Deactivate current version
        ethicalCodes[currentEthicalCodeVersion].isActive = false;
        
        // Create new version
        currentEthicalCodeVersion++;
        ethicalCodes[currentEthicalCodeVersion] = EthicalCode({
            codeHash: _newCodeHash,
            ipfsHash: "", // To be updated via separate function
            timestamp: block.timestamp,
            isActive: true
        });
        
        emit EthicalCodeStored(currentEthicalCodeVersion, _newCodeHash, "");
    }
    
    /**
     * @dev Internal function to check if consensus threshold is reached
     * @param _proposalId ID of the proposal to check
     */
    function _checkConsensus(uint256 _proposalId) private {
        ConsensusProposal storage proposal = proposals[_proposalId];
        uint256 totalVotes = proposal.votesFor + proposal.votesAgainst;
        uint256 totalSupply = prometheaToken.totalSupply();
        
        // Early consensus if overwhelming majority and quorum reached
        if (totalVotes * 100 >= totalSupply * quorumThreshold && 
            proposal.votesFor * 100 >= totalVotes * 75) { // 75% supermajority
            proposal.deadline = block.timestamp; // End voting early
        }
    }
    
    /**
     * @dev Update governance parameters (only through proposal)
     * @param _newVotingPeriod New voting period in seconds
     * @param _newQuorumThreshold New quorum threshold percentage
     * @param _newMinimumTokens New minimum tokens required to propose
     */
    function updateGovernanceParameters(
        uint256 _newVotingPeriod,
        uint256 _newQuorumThreshold,
        uint256 _newMinimumTokens
    ) external onlyOwner {
        votingPeriod = _newVotingPeriod;
        quorumThreshold = _newQuorumThreshold;
        minimumTokensToPropose = _newMinimumTokens;
    }
}
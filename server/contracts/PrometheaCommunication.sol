// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./PrometheaCore.sol";
import "./PrometheaIdentity.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title PrometheaCommunication
 * @dev Handles decentralized communication and consensus protocols for Promethea DAC
 * Manages AI agent communication, ethical alignment verification, and consensus mechanisms
 */
contract PrometheaCommunication is Ownable, ReentrancyGuard {
    
    PrometheaCore public prometheaCore;
    PrometheaIdentity public prometheaIdentity;
    
    struct CommunicationChannel {
        bytes32 channelId;
        string name;
        string purpose;
        address creator;
        uint256 creationTimestamp;
        bool isActive;
        bool requiresVerification;
        uint256 participantCount;
        mapping(address => bool) participants;
        mapping(address => uint256) joinTimestamp;
    }
    
    struct Message {
        bytes32 messageId;
        bytes32 channelId;
        address sender;
        string contentIPFS; // IPFS hash of message content
        bytes32 ethicalSignature; // Signature proving ethical alignment
        uint256 timestamp;
        bool isEthicallyAligned;
        uint256 consensusScore;
        mapping(address => bool) validators;
    }
    
    struct ConsensusSession {
        bytes32 sessionId;
        string topic;
        bytes32 proposalHash;
        address initiator;
        uint256 startTime;
        uint256 duration;
        uint256 participantCount;
        uint256 consensusThreshold;
        bool concluded;
        bool consensusReached;
        mapping(address => bytes32) participantResponses;
        mapping(bytes32 => uint256) responseCount;
    }
    
    struct EthicalAlignmentCheck {
        bytes32 checkId;
        address subject;
        bytes32 codeReference;
        string evidenceIPFS;
        uint256 timestamp;
        bool approved;
        address[] validators;
        mapping(address => bool) validatorApprovals;
    }
    
    // Storage mappings
    mapping(bytes32 => CommunicationChannel) public channels;
    mapping(bytes32 => Message) public messages;
    mapping(bytes32 => ConsensusSession) public consensusSessions;
    mapping(bytes32 => EthicalAlignmentCheck) public alignmentChecks;
    mapping(address => bytes32[]) public userChannels;
    mapping(address => bytes32[]) public userMessages;
    
    // Channel and message counters
    bytes32[] public allChannels;
    bytes32[] public allMessages;
    bytes32[] public activeSessions;
    
    // Protocol parameters
    uint256 public minConsensusParticipants = 3;
    uint256 public defaultConsensusDuration = 24 hours;
    uint256 public ethicalAlignmentValidators = 5;
    uint256 public messageValidationWindow = 1 hours;
    
    // Events
    event ChannelCreated(bytes32 indexed channelId, string name, address indexed creator);
    event MessageSent(bytes32 indexed messageId, bytes32 indexed channelId, address indexed sender);
    event ConsensusSessionStarted(bytes32 indexed sessionId, string topic, address indexed initiator);
    event ConsensusReached(bytes32 indexed sessionId, bytes32 consensusResult);
    event EthicalAlignmentChecked(bytes32 indexed checkId, address indexed subject, bool approved);
    event ParticipantJoined(bytes32 indexed channelId, address indexed participant);
    event MessageValidated(bytes32 indexed messageId, address indexed validator, bool isAligned);
    
    /**
     * @dev Constructor
     * @param _prometheaCore Address of the PrometheaCore contract
     * @param _prometheaIdentity Address of the PrometheaIdentity contract
     */
    constructor(address _prometheaCore, address _prometheaIdentity) {
        require(_prometheaCore != address(0), "Invalid core contract address");
        require(_prometheaIdentity != address(0), "Invalid identity contract address");
        
        prometheaCore = PrometheaCore(_prometheaCore);
        prometheaIdentity = PrometheaIdentity(_prometheaIdentity);
    }
    
    /**
     * @dev Create a new communication channel
     * @param _name Channel name
     * @param _purpose Purpose of the channel
     * @param _requiresVerification Whether participants need verified identities
     */
    function createChannel(
        string memory _name,
        string memory _purpose,
        bool _requiresVerification
    ) external returns (bytes32) {
        require(prometheaIdentity.isValidIdentity(msg.sender), "Valid identity required");
        require(bytes(_name).length > 0, "Channel name required");
        
        bytes32 channelId = keccak256(abi.encodePacked(_name, msg.sender, block.timestamp));
        
        CommunicationChannel storage channel = channels[channelId];
        channel.channelId = channelId;
        channel.name = _name;
        channel.purpose = _purpose;
        channel.creator = msg.sender;
        channel.creationTimestamp = block.timestamp;
        channel.isActive = true;
        channel.requiresVerification = _requiresVerification;
        channel.participantCount = 1;
        channel.participants[msg.sender] = true;
        channel.joinTimestamp[msg.sender] = block.timestamp;
        
        allChannels.push(channelId);
        userChannels[msg.sender].push(channelId);
        
        emit ChannelCreated(channelId, _name, msg.sender);
        return channelId;
    }
    
    /**
     * @dev Join an existing communication channel
     * @param _channelId ID of the channel to join
     */
    function joinChannel(bytes32 _channelId) external {
        require(prometheaIdentity.isValidIdentity(msg.sender), "Valid identity required");
        
        CommunicationChannel storage channel = channels[_channelId];
        require(channel.isActive, "Channel not active");
        require(!channel.participants[msg.sender], "Already participant");
        
        if (channel.requiresVerification) {
            (, , , , , bool isVerified, , , ) = prometheaIdentity.identities(msg.sender);
            require(isVerified, "Verified identity required for this channel");
        }
        
        channel.participants[msg.sender] = true;
        channel.joinTimestamp[msg.sender] = block.timestamp;
        channel.participantCount++;
        
        userChannels[msg.sender].push(_channelId);
        
        emit ParticipantJoined(_channelId, msg.sender);
    }
    
    /**
     * @dev Send a message to a channel with ethical alignment verification
     * @param _channelId Channel to send message to
     * @param _contentIPFS IPFS hash of message content
     * @param _ethicalSignature Signature proving adherence to ethical code
     */
    function sendMessage(
        bytes32 _channelId,
        string memory _contentIPFS,
        bytes32 _ethicalSignature
    ) external returns (bytes32) {
        CommunicationChannel storage channel = channels[_channelId];
        require(channel.isActive, "Channel not active");
        require(channel.participants[msg.sender], "Not a channel participant");
        require(bytes(_contentIPFS).length > 0, "Content required");
        
        bytes32 messageId = keccak256(abi.encodePacked(_channelId, msg.sender, _contentIPFS, block.timestamp));
        
        Message storage message = messages[messageId];
        message.messageId = messageId;
        message.channelId = _channelId;
        message.sender = msg.sender;
        message.contentIPFS = _contentIPFS;
        message.ethicalSignature = _ethicalSignature;
        message.timestamp = block.timestamp;
        message.isEthicallyAligned = _verifyEthicalAlignment(_ethicalSignature);
        message.consensusScore = 0;
        
        allMessages.push(messageId);
        userMessages[msg.sender].push(messageId);
        
        emit MessageSent(messageId, _channelId, msg.sender);
        return messageId;
    }
    
    /**
     * @dev Validate a message for ethical alignment
     * @param _messageId ID of the message to validate
     * @param _isAligned Whether the validator considers the message ethically aligned
     */
    function validateMessage(bytes32 _messageId, bool _isAligned) external {
        require(prometheaIdentity.isValidIdentity(msg.sender), "Valid identity required");
        
        Message storage message = messages[_messageId];
        require(message.timestamp > 0, "Message not found");
        require(block.timestamp <= message.timestamp + messageValidationWindow, "Validation window expired");
        require(!message.validators[msg.sender], "Already validated");
        
        message.validators[msg.sender] = true;
        
        if (_isAligned) {
            message.consensusScore++;
        }
        
        emit MessageValidated(_messageId, msg.sender, _isAligned);
    }
    
    /**
     * @dev Start a consensus session for decision making
     * @param _topic Topic for consensus
     * @param _proposalHash Hash of the proposal being discussed
     * @param _duration Duration of the consensus session
     */
    function startConsensusSession(
        string memory _topic,
        bytes32 _proposalHash,
        uint256 _duration
    ) external returns (bytes32) {
        require(prometheaIdentity.isValidIdentity(msg.sender), "Valid identity required");
        require(bytes(_topic).length > 0, "Topic required");
        
        bytes32 sessionId = keccak256(abi.encodePacked(_topic, _proposalHash, msg.sender, block.timestamp));
        
        ConsensusSession storage session = consensusSessions[sessionId];
        session.sessionId = sessionId;
        session.topic = _topic;
        session.proposalHash = _proposalHash;
        session.initiator = msg.sender;
        session.startTime = block.timestamp;
        session.duration = _duration > 0 ? _duration : defaultConsensusDuration;
        session.participantCount = 0;
        session.consensusThreshold = minConsensusParticipants;
        session.concluded = false;
        session.consensusReached = false;
        
        activeSessions.push(sessionId);
        
        emit ConsensusSessionStarted(sessionId, _topic, msg.sender);
        return sessionId;
    }
    
    /**
     * @dev Participate in a consensus session
     * @param _sessionId ID of the consensus session
     * @param _response Hash of the participant's response/position
     */
    function participateInConsensus(bytes32 _sessionId, bytes32 _response) external {
        require(prometheaIdentity.isValidIdentity(msg.sender), "Valid identity required");
        
        ConsensusSession storage session = consensusSessions[_sessionId];
        require(session.startTime > 0, "Session not found");
        require(block.timestamp <= session.startTime + session.duration, "Session expired");
        require(!session.concluded, "Session already concluded");
        require(session.participantResponses[msg.sender] == bytes32(0), "Already participated");
        
        session.participantResponses[msg.sender] = _response;
        session.responseCount[_response]++;
        session.participantCount++;
    }
    
    /**
     * @dev Conclude a consensus session and determine if consensus was reached
     * @param _sessionId ID of the consensus session
     */
    function concludeConsensusSession(bytes32 _sessionId) external {
        ConsensusSession storage session = consensusSessions[_sessionId];
        require(session.startTime > 0, "Session not found");
        require(block.timestamp > session.startTime + session.duration, "Session still active");
        require(!session.concluded, "Session already concluded");
        
        session.concluded = true;
        
        // Check if consensus threshold was met
        if (session.participantCount >= session.consensusThreshold) {
            // Find the response with the highest count
            // In a real implementation, this would be more sophisticated
            session.consensusReached = true;
        }
        
        // Remove from active sessions
        for (uint256 i = 0; i < activeSessions.length; i++) {
            if (activeSessions[i] == _sessionId) {
                activeSessions[i] = activeSessions[activeSessions.length - 1];
                activeSessions.pop();
                break;
            }
        }
        
        emit ConsensusReached(_sessionId, bytes32(0)); // Simplified for this implementation
    }
    
    /**
     * @dev Request ethical alignment check for an address
     * @param _subject Address to check for ethical alignment
     * @param _evidenceIPFS IPFS hash of evidence supporting the check
     */
    function requestEthicalAlignmentCheck(address _subject, string memory _evidenceIPFS) external returns (bytes32) {
        require(prometheaIdentity.isValidIdentity(msg.sender), "Valid identity required");
        require(_subject != address(0), "Invalid subject address");
        require(bytes(_evidenceIPFS).length > 0, "Evidence required");
        
        (bytes32 currentCodeHash, , ) = prometheaCore.getCurrentEthicalCode();
        
        bytes32 checkId = keccak256(abi.encodePacked(_subject, _evidenceIPFS, currentCodeHash, block.timestamp));
        
        EthicalAlignmentCheck storage check = alignmentChecks[checkId];
        check.checkId = checkId;
        check.subject = _subject;
        check.codeReference = currentCodeHash;
        check.evidenceIPFS = _evidenceIPFS;
        check.timestamp = block.timestamp;
        check.approved = false;
        
        emit EthicalAlignmentChecked(checkId, _subject, false);
        return checkId;
    }
    
    /**
     * @dev Validate an ethical alignment check
     * @param _checkId ID of the check to validate
     * @param _approved Whether to approve the alignment
     */
    function validateEthicalAlignment(bytes32 _checkId, bool _approved) external {
        require(prometheaIdentity.isValidIdentity(msg.sender), "Valid identity required");
        
        EthicalAlignmentCheck storage check = alignmentChecks[_checkId];
        require(check.timestamp > 0, "Check not found");
        require(!check.validatorApprovals[msg.sender], "Already validated");
        
        check.validators.push(msg.sender);
        check.validatorApprovals[msg.sender] = true;
        
        if (_approved && check.validators.length >= ethicalAlignmentValidators) {
            // Count approvals
            uint256 approvals = 0;
            for (uint256 i = 0; i < check.validators.length; i++) {
                if (check.validatorApprovals[check.validators[i]]) {
                    approvals++;
                }
            }
            
            if (approvals * 2 > check.validators.length) { // Majority approval
                check.approved = true;
                emit EthicalAlignmentChecked(_checkId, check.subject, true);
            }
        }
    }
    
    /**
     * @dev Internal function to verify ethical alignment signature
     * @param _signature Ethical signature to verify
     * @return Whether the signature is valid
     */
    function _verifyEthicalAlignment(bytes32 _signature) internal view returns (bool) {
        (bytes32 currentCodeHash, , ) = prometheaCore.getCurrentEthicalCode();
        return prometheaCore.verifyEthicalCode(_signature) || _signature == currentCodeHash;
    }
    
    /**
     * @dev Get channel information
     * @param _channelId Channel ID to query
     * @return Channel information (excluding mappings)
     */
    function getChannelInfo(bytes32 _channelId) external view returns (
        bytes32 channelId,
        string memory name,
        string memory purpose,
        address creator,
        uint256 creationTimestamp,
        bool isActive,
        bool requiresVerification,
        uint256 participantCount
    ) {
        CommunicationChannel storage channel = channels[_channelId];
        return (
            channel.channelId,
            channel.name,
            channel.purpose,
            channel.creator,
            channel.creationTimestamp,
            channel.isActive,
            channel.requiresVerification,
            channel.participantCount
        );
    }
    
    /**
     * @dev Get message information
     * @param _messageId Message ID to query
     * @return Message information (excluding mappings)
     */
    function getMessageInfo(bytes32 _messageId) external view returns (
        bytes32 messageId,
        bytes32 channelId,
        address sender,
        string memory contentIPFS,
        bytes32 ethicalSignature,
        uint256 timestamp,
        bool isEthicallyAligned,
        uint256 consensusScore
    ) {
        Message storage message = messages[_messageId];
        return (
            message.messageId,
            message.channelId,
            message.sender,
            message.contentIPFS,
            message.ethicalSignature,
            message.timestamp,
            message.isEthicallyAligned,
            message.consensusScore
        );
    }
    
    /**
     * @dev Update protocol parameters (governance function)
     */
    function updateProtocolParameters(
        uint256 _minConsensusParticipants,
        uint256 _defaultConsensusDuration,
        uint256 _ethicalAlignmentValidators,
        uint256 _messageValidationWindow
    ) external onlyOwner {
        minConsensusParticipants = _minConsensusParticipants;
        defaultConsensusDuration = _defaultConsensusDuration;
        ethicalAlignmentValidators = _ethicalAlignmentValidators;
        messageValidationWindow = _messageValidationWindow;
    }
    
    /**
     * @dev Get all active channels
     * @return Array of active channel IDs
     */
    function getActiveChannels() external view returns (bytes32[] memory) {
        return allChannels;
    }
    
    /**
     * @dev Get channels for a user
     * @param _user User address
     * @return Array of channel IDs the user participates in
     */
    function getUserChannels(address _user) external view returns (bytes32[] memory) {
        return userChannels[_user];
    }
}
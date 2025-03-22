// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title DAOGovernance
 * @dev Contract for handling DAO governance processes including proposal creation, voting, and execution
 */
contract DAOGovernance is Ownable {
    // Token used for governance (DAC token)
    IERC20 public dacToken;
    
    // Governance parameters
    uint8 public quorumPercentage = 10; // 10% of total supply must vote for a proposal to be valid
    uint8 public thresholdPercentage = 60; // 60% majority needed for a proposal to pass
    uint256 public votingPeriod = 5 days; // Voting period duration
    
    // Enum for proposal status
    enum ProposalStatus { Pending, Active, Passed, Rejected, Executed, Canceled }
    
    // Structure to store proposal details
    struct Proposal {
        uint256 id;
        address creator;
        string title;
        string description;
        uint8 status; // Using uint8 instead of enum for compatibility
        uint256 startTime;
        uint256 endTime;
        uint256 votesFor;
        uint256 votesAgainst;
        uint256 votesAbstain;
        string executionPayload; // JSON string defining what to execute
    }
    
    // Store proposals by ID
    mapping(uint256 => Proposal) private proposals;
    // Store votes by proposal ID and voter address
    mapping(uint256 => mapping(address => bool)) private hasVotedOnProposal;
    // Store vote type by proposal ID and voter address (0=against, 1=for, 2=abstain)
    mapping(uint256 => mapping(address => uint8)) private voteTypeByVoter;
    // Store vote power by proposal ID and voter address
    mapping(uint256 => mapping(address => uint256)) private votePowerByVoter;
    
    // Proposal counter
    uint256 private proposalCount = 0;
    // Proposals in active state
    uint256[] private activeProposals;
    
    // Events
    event ProposalCreated(uint256 indexed proposalId, address indexed creator, string title);
    event ProposalStatusChanged(uint256 indexed proposalId, uint8 status);
    event ProposalExecuted(uint256 indexed proposalId);
    event VoteCast(uint256 indexed proposalId, address indexed voter, uint8 voteType, uint256 votePower);
    
    /**
     * @dev Constructor to set the DAC token address
     */
    constructor() {
        // In a real deployment, this would be set to the actual DAC token address
        dacToken = IERC20(0x1234567890123456789012345678901234567890);
    }
    
    /**
     * @dev Create a new proposal
     * @param title Proposal title
     * @param description Detailed description of the proposal
     * @param executionPayload JSON string with execution details
     * @return Proposal ID
     */
    function createProposal(
        string memory title,
        string memory description,
        string memory executionPayload
    ) public returns (uint256) {
        // Ensure creator has minimum tokens to create a proposal
        // In a real implementation, this would check against a minimum threshold
        
        uint256 proposalId = proposalCount++;
        
        proposals[proposalId] = Proposal({
            id: proposalId,
            creator: msg.sender,
            title: title,
            description: description,
            status: uint8(ProposalStatus.Active),
            startTime: block.timestamp,
            endTime: block.timestamp + votingPeriod,
            votesFor: 0,
            votesAgainst: 0,
            votesAbstain: 0,
            executionPayload: executionPayload
        });
        
        activeProposals.push(proposalId);
        
        emit ProposalCreated(proposalId, msg.sender, title);
        
        return proposalId;
    }
    
    /**
     * @dev Cast a vote on a proposal
     * @param proposalId ID of the proposal to vote on
     * @param voteType 0=against, 1=for, 2=abstain
     */
    function castVote(uint256 proposalId, uint8 voteType) public {
        require(proposalId < proposalCount, "Invalid proposal ID");
        require(voteType <= 2, "Invalid vote type");
        require(!hasVotedOnProposal[proposalId][msg.sender], "Already voted");
        
        Proposal storage proposal = proposals[proposalId];
        require(uint8(ProposalStatus.Active) == proposal.status, "Proposal not active");
        require(block.timestamp < proposal.endTime, "Voting period ended");
        
        // Get voter's token balance for voting power
        uint256 votePower = getVotingPower(msg.sender);
        require(votePower > 0, "No voting power");
        
        // Record the vote
        if (voteType == 0) {
            proposal.votesAgainst += votePower;
        } else if (voteType == 1) {
            proposal.votesFor += votePower;
        } else {
            proposal.votesAbstain += votePower;
        }
        
        // Mark that the user has voted and store their vote details
        hasVotedOnProposal[proposalId][msg.sender] = true;
        voteTypeByVoter[proposalId][msg.sender] = voteType;
        votePowerByVoter[proposalId][msg.sender] = votePower;
        
        emit VoteCast(proposalId, msg.sender, voteType, votePower);
        
        // Check if voting period has ended and finalize if needed
        _checkAndFinalizeProposal(proposalId);
    }
    
    /**
     * @dev Execute a passed proposal
     * @param proposalId ID of the proposal to execute
     */
    function executeProposal(uint256 proposalId) public {
        require(proposalId < proposalCount, "Invalid proposal ID");
        
        Proposal storage proposal = proposals[proposalId];
        require(uint8(ProposalStatus.Passed) == proposal.status, "Proposal not passed");
        
        // In a real implementation, this would execute the action defined in executionPayload
        // This might involve calling other contracts, transferring tokens, updating parameters, etc.
        
        proposal.status = uint8(ProposalStatus.Executed);
        emit ProposalExecuted(proposalId);
        emit ProposalStatusChanged(proposalId, proposal.status);
    }
    
    /**
     * @dev Get proposal details
     * @param proposalId ID of the proposal
     * @return Proposal details
     */
    function getProposal(uint256 proposalId) public view returns (Proposal memory) {
        require(proposalId < proposalCount, "Invalid proposal ID");
        return proposals[proposalId];
    }
    
    /**
     * @dev Get all active proposal IDs
     * @return Array of active proposal IDs
     */
    function getActiveProposals() public view returns (uint256[] memory) {
        return activeProposals;
    }
    
    /**
     * @dev Get the total number of proposals
     * @return Number of proposals
     */
    function getProposalCount() public view returns (uint256) {
        return proposalCount;
    }
    
    /**
     * @dev Check if a user has voted on a proposal
     * @param proposalId ID of the proposal
     * @param voter Address of the voter
     * @return True if the user has voted
     */
    function hasVoted(uint256 proposalId, address voter) public view returns (bool) {
        return hasVotedOnProposal[proposalId][voter];
    }
    
    /**
     * @dev Get the voting power of an address
     * @param voter Address to check
     * @return Voting power (token balance)
     */
    function getVotingPower(address voter) public view returns (uint256) {
        return dacToken.balanceOf(voter);
    }
    
    /**
     * @dev Set the quorum percentage
     * @param _quorumPercentage New quorum percentage
     */
    function setQuorumPercentage(uint8 _quorumPercentage) public onlyOwner {
        require(_quorumPercentage > 0 && _quorumPercentage <= 100, "Invalid percentage");
        quorumPercentage = _quorumPercentage;
    }
    
    /**
     * @dev Set the threshold percentage
     * @param _thresholdPercentage New threshold percentage
     */
    function setThresholdPercentage(uint8 _thresholdPercentage) public onlyOwner {
        require(_thresholdPercentage > 0 && _thresholdPercentage <= 100, "Invalid percentage");
        thresholdPercentage = _thresholdPercentage;
    }
    
    /**
     * @dev Set the voting period
     * @param _votingPeriod New voting period in seconds
     */
    function setVotingPeriod(uint256 _votingPeriod) public onlyOwner {
        require(_votingPeriod >= 1 days, "Voting period too short");
        votingPeriod = _votingPeriod;
    }
    
    /**
     * @dev Internal function to check and finalize a proposal if voting period has ended
     * @param proposalId ID of the proposal to check
     */
    function _checkAndFinalizeProposal(uint256 proposalId) internal {
        Proposal storage proposal = proposals[proposalId];
        
        if (block.timestamp >= proposal.endTime && uint8(ProposalStatus.Active) == proposal.status) {
            uint256 totalVotes = proposal.votesFor + proposal.votesAgainst + proposal.votesAbstain;
            uint256 totalSupply = dacToken.totalSupply();
            
            // Check if quorum is reached
            if ((totalVotes * 100) / totalSupply >= quorumPercentage) {
                // Check if threshold is reached
                if ((proposal.votesFor * 100) / totalVotes >= thresholdPercentage) {
                    proposal.status = uint8(ProposalStatus.Passed);
                } else {
                    proposal.status = uint8(ProposalStatus.Rejected);
                }
            } else {
                proposal.status = uint8(ProposalStatus.Rejected);
            }
            
            emit ProposalStatusChanged(proposalId, proposal.status);
            
            // Remove from active proposals
            for (uint256 i = 0; i < activeProposals.length; i++) {
                if (activeProposals[i] == proposalId) {
                    activeProposals[i] = activeProposals[activeProposals.length - 1];
                    activeProposals.pop();
                    break;
                }
            }
        }
    }
}

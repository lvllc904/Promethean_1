import * as grpc from '@grpc/grpc-js';
import { storage } from '../storage';
import { 
  ProposalType, 
  ProposalStatus, 
  VoteOption, 
  DelegationScope 
} from '../../shared/schema';

// Import generated protobuf types
const governanceProto = require('../../generated/governance_grpc_pb');
const { 
  Proposal,
  CreateProposalRequest,
  GetProposalRequest,
  ListProposalsRequest,
  ListProposalsResponse,
  CastVoteRequest,
  VoteResponse,
  CreateDelegationRequest,
  GovernanceStats
} = require('../../generated/governance_pb');

/**
 * Governance gRPC Service Implementation
 * Handles all governance-related operations through gRPC
 */
export class GovernanceService {
  
  /**
   * Create a new governance proposal
   */
  async createProposal(call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) {
    try {
      const request = call.request;
      
      const proposalData = {
        title: request.getTitle(),
        description: request.getDescription(),
        content: request.getContent(),
        type: this.mapProposalType(request.getType()),
        categoryId: request.getCategoryId(),
        createdBy: request.getCreatedBy(),
        votingStartsAt: new Date(request.getVotingStartsAt().getSeconds() * 1000),
        votingEndsAt: new Date(request.getVotingEndsAt().getSeconds() * 1000),
        votingThreshold: request.getVotingThreshold(),
        quorumRequired: request.getQuorumRequired(),
        tags: request.getTagsList(),
        metadata: request.getMetadata(),
        usesQuadraticVoting: request.getUsesQuadraticVoting()
      };

      const newProposal = await storage.createProposal(proposalData);
      const response = this.mapProposalToProto(newProposal);
      
      callback(null, response);
    } catch (error) {
      console.error('Error creating proposal:', error);
      callback({
        code: grpc.status.INTERNAL,
        message: 'Failed to create proposal'
      });
    }
  }

  /**
   * Get a specific proposal by ID
   */
  async getProposal(call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) {
    try {
      const proposalId = call.request.getId();
      const proposal = await storage.getProposal(proposalId);
      
      if (!proposal) {
        return callback({
          code: grpc.status.NOT_FOUND,
          message: 'Proposal not found'
        });
      }

      const response = this.mapProposalToProto(proposal);
      callback(null, response);
    } catch (error) {
      console.error('Error getting proposal:', error);
      callback({
        code: grpc.status.INTERNAL,
        message: 'Failed to get proposal'
      });
    }
  }

  /**
   * List proposals with filtering and pagination
   */
  async listProposals(call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) {
    try {
      const request = call.request;
      const status = request.getStatus();
      const categoryId = request.getCategoryId();
      const page = request.getPage() || 1;
      const limit = request.getLimit() || 10;

      const proposals = await storage.getProposals(status, categoryId);
      
      // Apply pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedProposals = proposals.slice(startIndex, endIndex);

      const response = new ListProposalsResponse();
      response.setProposalsList(paginatedProposals.map(p => this.mapProposalToProto(p)));
      response.setTotalCount(proposals.length);
      response.setPage(page);
      response.setLimit(limit);
      response.setHasNext(endIndex < proposals.length);

      callback(null, response);
    } catch (error) {
      console.error('Error listing proposals:', error);
      callback({
        code: grpc.status.INTERNAL,
        message: 'Failed to list proposals'
      });
    }
  }

  /**
   * Cast a vote on a proposal
   */
  async castVote(call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) {
    try {
      const request = call.request;
      
      const voteData = {
        proposalId: request.getProposalId(),
        userId: request.getUserId(),
        voteOption: this.mapVoteOption(request.getVoteOption()),
        reasoning: request.getReasoning() || null,
        votePowerOverride: request.getVotePowerOverride() || null
      };

      const newVote = await storage.createVote(voteData);
      const updatedProposal = await storage.getProposal(voteData.proposalId);

      const response = new VoteResponse();
      response.setVote(this.mapVoteToProto(newVote));
      response.setUpdatedProposal(this.mapProposalToProto(updatedProposal));

      callback(null, response);
    } catch (error) {
      console.error('Error casting vote:', error);
      callback({
        code: grpc.status.INTERNAL,
        message: 'Failed to cast vote'
      });
    }
  }

  /**
   * Create a vote delegation
   */
  async createDelegation(call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) {
    try {
      const request = call.request;
      
      const delegationData = {
        delegatorId: request.getDelegatorId(),
        delegateId: request.getDelegateId(),
        scope: this.mapDelegationScope(request.getScope()),
        categoryId: request.getCategoryId() || null,
        proposalId: request.getProposalId() || null,
        transferable: request.getTransferable(),
        expiresAt: request.getExpiresAt() ? new Date(request.getExpiresAt().getSeconds() * 1000) : null
      };

      const newDelegation = await storage.createVoteDelegation(delegationData);
      const response = this.mapDelegationToProto(newDelegation);

      callback(null, response);
    } catch (error) {
      console.error('Error creating delegation:', error);
      callback({
        code: grpc.status.INTERNAL,
        message: 'Failed to create delegation'
      });
    }
  }

  /**
   * Get governance statistics
   */
  async getGovernanceStats(call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) {
    try {
      // Get statistics from storage
      const members = await storage.countDaoMembers();
      const proposals = await storage.getProposals();
      const activeProposals = await storage.getProposals("active");
      const categories = await storage.getGovernanceCategories();

      // Calculate statistics
      let totalVotes = 0;
      let executedProposals = 0;
      
      for (const proposal of proposals) {
        totalVotes += (proposal.votesFor || 0) + (proposal.votesAgainst || 0) + (proposal.votesAbstain || 0);
        if (proposal.status === 'executed') {
          executedProposals++;
        }
      }

      const response = new GovernanceStats();
      response.setTotalProposals(proposals.length);
      response.setActiveProposals(activeProposals.length);
      response.setExecutedProposals(executedProposals);
      response.setTotalVotes(totalVotes);
      response.setTotalMembers(members);
      response.setActiveDelegations(0); // TODO: Implement delegation counting
      response.setAverageParticipationRate(totalVotes / (proposals.length * members) * 100);
      response.setTotalVotingPower("1000000"); // TODO: Calculate from token balances
      response.setTokenPrice(0.853);

      callback(null, response);
    } catch (error) {
      console.error('Error getting governance stats:', error);
      callback({
        code: grpc.status.INTERNAL,
        message: 'Failed to get governance statistics'
      });
    }
  }

  /**
   * Stream voting results for real-time updates
   */
  streamVotingResults(call: grpc.ServerWritableStream<any, any>) {
    try {
      const proposalId = call.request.getProposalId();
      
      // Set up real-time streaming
      const intervalId = setInterval(async () => {
        try {
          const proposal = await storage.getProposal(proposalId);
          if (proposal) {
            const update = this.createVotingUpdate(proposal);
            call.write(update);
          }
        } catch (error) {
          console.error('Error streaming voting results:', error);
          call.destroy();
        }
      }, 5000); // Update every 5 seconds

      call.on('cancelled', () => {
        clearInterval(intervalId);
      });

      call.on('error', () => {
        clearInterval(intervalId);
      });

    } catch (error) {
      console.error('Error setting up voting stream:', error);
      call.destroy();
    }
  }

  /**
   * Stream governance events for real-time notifications
   */
  streamGovernanceEvents(call: grpc.ServerWritableStream<any, any>) {
    try {
      const request = call.request;
      const eventTypes = request.getEventTypesList();
      const userId = request.getUserId();
      const proposalId = request.getProposalId();

      // TODO: Implement event streaming with proper event system
      // For now, send periodic updates
      const intervalId = setInterval(() => {
        const event = this.createGovernanceEvent('PROPOSAL_UPDATED', proposalId, userId);
        call.write(event);
      }, 10000); // Every 10 seconds

      call.on('cancelled', () => {
        clearInterval(intervalId);
      });

    } catch (error) {
      console.error('Error setting up governance events stream:', error);
      call.destroy();
    }
  }

  // Helper methods for mapping between protobuf and internal types
  private mapProposalType(protoType: number): ProposalType {
    const typeMap: { [key: number]: ProposalType } = {
      1: 'standard',
      2: 'constitutional', 
      3: 'emergency',
      4: 'spending',
      5: 'technical'
    };
    return typeMap[protoType] || 'standard';
  }

  private mapVoteOption(protoOption: number): VoteOption {
    const optionMap: { [key: number]: VoteOption } = {
      1: 'for',
      2: 'against',
      3: 'abstain'
    };
    return optionMap[protoOption] || 'abstain';
  }

  private mapDelegationScope(protoScope: number): DelegationScope {
    const scopeMap: { [key: number]: DelegationScope } = {
      1: 'global',
      2: 'category',
      3: 'proposal'
    };
    return scopeMap[protoScope] || 'global';
  }

  private mapProposalToProto(proposal: any) {
    const protoProposal = new Proposal();
    protoProposal.setId(proposal.id);
    protoProposal.setTitle(proposal.title);
    protoProposal.setDescription(proposal.description);
    protoProposal.setContent(proposal.content);
    protoProposal.setType(this.mapProposalTypeToProto(proposal.type));
    protoProposal.setStatus(this.mapProposalStatusToProto(proposal.status));
    protoProposal.setCategoryId(proposal.categoryId);
    protoProposal.setCreatedBy(proposal.createdBy);
    protoProposal.setVotesFor(proposal.votesFor || 0);
    protoProposal.setVotesAgainst(proposal.votesAgainst || 0);
    protoProposal.setVotesAbstain(proposal.votesAbstain || 0);
    protoProposal.setTagsList(proposal.tags || []);
    protoProposal.setUsesQuadraticVoting(proposal.usesQuadraticVoting || false);
    return protoProposal;
  }

  private mapVoteToProto(vote: any) {
    // Implementation for mapping vote to protobuf
    return vote; // Simplified for now
  }

  private mapDelegationToProto(delegation: any) {
    // Implementation for mapping delegation to protobuf
    return delegation; // Simplified for now
  }

  private mapProposalTypeToProto(type: ProposalType): number {
    const typeMap: { [key: string]: number } = {
      'standard': 1,
      'constitutional': 2,
      'emergency': 3,
      'spending': 4,
      'technical': 5
    };
    return typeMap[type] || 1;
  }

  private mapProposalStatusToProto(status: ProposalStatus): number {
    const statusMap: { [key: string]: number } = {
      'draft': 1,
      'active': 2,
      'passed': 3,
      'failed': 4,
      'executed': 5,
      'cancelled': 6
    };
    return statusMap[status] || 1;
  }

  private createVotingUpdate(proposal: any) {
    // Create voting update message
    return {
      proposalId: proposal.id,
      votesFor: proposal.votesFor || 0,
      votesAgainst: proposal.votesAgainst || 0,
      votesAbstain: proposal.votesAbstain || 0,
      totalVotes: (proposal.votesFor || 0) + (proposal.votesAgainst || 0) + (proposal.votesAbstain || 0),
      participationRate: 0.75, // TODO: Calculate actual participation
      currentStatus: this.mapProposalStatusToProto(proposal.status),
      timestamp: new Date()
    };
  }

  private createGovernanceEvent(type: string, proposalId?: number, userId?: number) {
    // Create governance event message
    return {
      type: type,
      proposalId: proposalId || 0,
      userId: userId || 0,
      data: JSON.stringify({ timestamp: Date.now() }),
      timestamp: new Date()
    };
  }
}

// Create service definition for gRPC server
export const governanceServiceDefinition = {
  CreateProposal: (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
    const service = new GovernanceService();
    service.createProposal(call, callback);
  },
  GetProposal: (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
    const service = new GovernanceService();
    service.getProposal(call, callback);
  },
  ListProposals: (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
    const service = new GovernanceService();
    service.listProposals(call, callback);
  },
  CastVote: (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
    const service = new GovernanceService();
    service.castVote(call, callback);
  },
  CreateDelegation: (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
    const service = new GovernanceService();
    service.createDelegation(call, callback);
  },
  GetGovernanceStats: (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
    const service = new GovernanceService();
    service.getGovernanceStats(call, callback);
  },
  GetVotingResults: (call: grpc.ServerWritableStream<any, any>) => {
    const service = new GovernanceService();
    service.streamVotingResults(call);
  },
  StreamGovernanceEvents: (call: grpc.ServerWritableStream<any, any>) => {
    const service = new GovernanceService();
    service.streamGovernanceEvents(call);
  }
};
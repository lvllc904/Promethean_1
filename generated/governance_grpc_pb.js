// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var governance_pb = require('./governance_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dac_governance_CastVoteRequest(arg) {
  if (!(arg instanceof governance_pb.CastVoteRequest)) {
    throw new Error('Expected argument of type dac.governance.CastVoteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_CastVoteRequest(buffer_arg) {
  return governance_pb.CastVoteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_CategoriesResponse(arg) {
  if (!(arg instanceof governance_pb.CategoriesResponse)) {
    throw new Error('Expected argument of type dac.governance.CategoriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_CategoriesResponse(buffer_arg) {
  return governance_pb.CategoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_CreateCategoryRequest(arg) {
  if (!(arg instanceof governance_pb.CreateCategoryRequest)) {
    throw new Error('Expected argument of type dac.governance.CreateCategoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_CreateCategoryRequest(buffer_arg) {
  return governance_pb.CreateCategoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_CreateDelegationRequest(arg) {
  if (!(arg instanceof governance_pb.CreateDelegationRequest)) {
    throw new Error('Expected argument of type dac.governance.CreateDelegationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_CreateDelegationRequest(buffer_arg) {
  return governance_pb.CreateDelegationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_CreateProposalRequest(arg) {
  if (!(arg instanceof governance_pb.CreateProposalRequest)) {
    throw new Error('Expected argument of type dac.governance.CreateProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_CreateProposalRequest(buffer_arg) {
  return governance_pb.CreateProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_Delegation(arg) {
  if (!(arg instanceof governance_pb.Delegation)) {
    throw new Error('Expected argument of type dac.governance.Delegation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_Delegation(buffer_arg) {
  return governance_pb.Delegation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_DelegationGraph(arg) {
  if (!(arg instanceof governance_pb.DelegationGraph)) {
    throw new Error('Expected argument of type dac.governance.DelegationGraph');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_DelegationGraph(buffer_arg) {
  return governance_pb.DelegationGraph.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_DelegationNode(arg) {
  if (!(arg instanceof governance_pb.DelegationNode)) {
    throw new Error('Expected argument of type dac.governance.DelegationNode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_DelegationNode(buffer_arg) {
  return governance_pb.DelegationNode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_ExecuteProposalRequest(arg) {
  if (!(arg instanceof governance_pb.ExecuteProposalRequest)) {
    throw new Error('Expected argument of type dac.governance.ExecuteProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_ExecuteProposalRequest(buffer_arg) {
  return governance_pb.ExecuteProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_ExecutionResult(arg) {
  if (!(arg instanceof governance_pb.ExecutionResult)) {
    throw new Error('Expected argument of type dac.governance.ExecutionResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_ExecutionResult(buffer_arg) {
  return governance_pb.ExecutionResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_GetDelegationChainRequest(arg) {
  if (!(arg instanceof governance_pb.GetDelegationChainRequest)) {
    throw new Error('Expected argument of type dac.governance.GetDelegationChainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_GetDelegationChainRequest(buffer_arg) {
  return governance_pb.GetDelegationChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_GetDelegationGraphRequest(arg) {
  if (!(arg instanceof governance_pb.GetDelegationGraphRequest)) {
    throw new Error('Expected argument of type dac.governance.GetDelegationGraphRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_GetDelegationGraphRequest(buffer_arg) {
  return governance_pb.GetDelegationGraphRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_GetProposalRequest(arg) {
  if (!(arg instanceof governance_pb.GetProposalRequest)) {
    throw new Error('Expected argument of type dac.governance.GetProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_GetProposalRequest(buffer_arg) {
  return governance_pb.GetProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_GetVotingPowerRequest(arg) {
  if (!(arg instanceof governance_pb.GetVotingPowerRequest)) {
    throw new Error('Expected argument of type dac.governance.GetVotingPowerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_GetVotingPowerRequest(buffer_arg) {
  return governance_pb.GetVotingPowerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_GetVotingResultsRequest(arg) {
  if (!(arg instanceof governance_pb.GetVotingResultsRequest)) {
    throw new Error('Expected argument of type dac.governance.GetVotingResultsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_GetVotingResultsRequest(buffer_arg) {
  return governance_pb.GetVotingResultsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_GovernanceCategory(arg) {
  if (!(arg instanceof governance_pb.GovernanceCategory)) {
    throw new Error('Expected argument of type dac.governance.GovernanceCategory');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_GovernanceCategory(buffer_arg) {
  return governance_pb.GovernanceCategory.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_GovernanceEvent(arg) {
  if (!(arg instanceof governance_pb.GovernanceEvent)) {
    throw new Error('Expected argument of type dac.governance.GovernanceEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_GovernanceEvent(buffer_arg) {
  return governance_pb.GovernanceEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_GovernanceStats(arg) {
  if (!(arg instanceof governance_pb.GovernanceStats)) {
    throw new Error('Expected argument of type dac.governance.GovernanceStats');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_GovernanceStats(buffer_arg) {
  return governance_pb.GovernanceStats.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_ListProposalsRequest(arg) {
  if (!(arg instanceof governance_pb.ListProposalsRequest)) {
    throw new Error('Expected argument of type dac.governance.ListProposalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_ListProposalsRequest(buffer_arg) {
  return governance_pb.ListProposalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_ListProposalsResponse(arg) {
  if (!(arg instanceof governance_pb.ListProposalsResponse)) {
    throw new Error('Expected argument of type dac.governance.ListProposalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_ListProposalsResponse(buffer_arg) {
  return governance_pb.ListProposalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_Proposal(arg) {
  if (!(arg instanceof governance_pb.Proposal)) {
    throw new Error('Expected argument of type dac.governance.Proposal');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_Proposal(buffer_arg) {
  return governance_pb.Proposal.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_StreamEventsRequest(arg) {
  if (!(arg instanceof governance_pb.StreamEventsRequest)) {
    throw new Error('Expected argument of type dac.governance.StreamEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_StreamEventsRequest(buffer_arg) {
  return governance_pb.StreamEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_UpdateDelegationRequest(arg) {
  if (!(arg instanceof governance_pb.UpdateDelegationRequest)) {
    throw new Error('Expected argument of type dac.governance.UpdateDelegationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_UpdateDelegationRequest(buffer_arg) {
  return governance_pb.UpdateDelegationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_UpdateProposalRequest(arg) {
  if (!(arg instanceof governance_pb.UpdateProposalRequest)) {
    throw new Error('Expected argument of type dac.governance.UpdateProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_UpdateProposalRequest(buffer_arg) {
  return governance_pb.UpdateProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_VoteResponse(arg) {
  if (!(arg instanceof governance_pb.VoteResponse)) {
    throw new Error('Expected argument of type dac.governance.VoteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_VoteResponse(buffer_arg) {
  return governance_pb.VoteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_VotingPowerResponse(arg) {
  if (!(arg instanceof governance_pb.VotingPowerResponse)) {
    throw new Error('Expected argument of type dac.governance.VotingPowerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_VotingPowerResponse(buffer_arg) {
  return governance_pb.VotingPowerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_governance_VotingUpdate(arg) {
  if (!(arg instanceof governance_pb.VotingUpdate)) {
    throw new Error('Expected argument of type dac.governance.VotingUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_governance_VotingUpdate(buffer_arg) {
  return governance_pb.VotingUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Governance Service Definition
var GovernanceServiceService = exports.GovernanceServiceService = {
  // Proposal Management
createProposal: {
    path: '/dac.governance.GovernanceService/CreateProposal',
    requestStream: false,
    responseStream: false,
    requestType: governance_pb.CreateProposalRequest,
    responseType: governance_pb.Proposal,
    requestSerialize: serialize_dac_governance_CreateProposalRequest,
    requestDeserialize: deserialize_dac_governance_CreateProposalRequest,
    responseSerialize: serialize_dac_governance_Proposal,
    responseDeserialize: deserialize_dac_governance_Proposal,
  },
  getProposal: {
    path: '/dac.governance.GovernanceService/GetProposal',
    requestStream: false,
    responseStream: false,
    requestType: governance_pb.GetProposalRequest,
    responseType: governance_pb.Proposal,
    requestSerialize: serialize_dac_governance_GetProposalRequest,
    requestDeserialize: deserialize_dac_governance_GetProposalRequest,
    responseSerialize: serialize_dac_governance_Proposal,
    responseDeserialize: deserialize_dac_governance_Proposal,
  },
  listProposals: {
    path: '/dac.governance.GovernanceService/ListProposals',
    requestStream: false,
    responseStream: false,
    requestType: governance_pb.ListProposalsRequest,
    responseType: governance_pb.ListProposalsResponse,
    requestSerialize: serialize_dac_governance_ListProposalsRequest,
    requestDeserialize: deserialize_dac_governance_ListProposalsRequest,
    responseSerialize: serialize_dac_governance_ListProposalsResponse,
    responseDeserialize: deserialize_dac_governance_ListProposalsResponse,
  },
  updateProposal: {
    path: '/dac.governance.GovernanceService/UpdateProposal',
    requestStream: false,
    responseStream: false,
    requestType: governance_pb.UpdateProposalRequest,
    responseType: governance_pb.Proposal,
    requestSerialize: serialize_dac_governance_UpdateProposalRequest,
    requestDeserialize: deserialize_dac_governance_UpdateProposalRequest,
    responseSerialize: serialize_dac_governance_Proposal,
    responseDeserialize: deserialize_dac_governance_Proposal,
  },
  executeProposal: {
    path: '/dac.governance.GovernanceService/ExecuteProposal',
    requestStream: false,
    responseStream: false,
    requestType: governance_pb.ExecuteProposalRequest,
    responseType: governance_pb.ExecutionResult,
    requestSerialize: serialize_dac_governance_ExecuteProposalRequest,
    requestDeserialize: deserialize_dac_governance_ExecuteProposalRequest,
    responseSerialize: serialize_dac_governance_ExecutionResult,
    responseDeserialize: deserialize_dac_governance_ExecutionResult,
  },
  // Voting Operations
castVote: {
    path: '/dac.governance.GovernanceService/CastVote',
    requestStream: false,
    responseStream: false,
    requestType: governance_pb.CastVoteRequest,
    responseType: governance_pb.VoteResponse,
    requestSerialize: serialize_dac_governance_CastVoteRequest,
    requestDeserialize: deserialize_dac_governance_CastVoteRequest,
    responseSerialize: serialize_dac_governance_VoteResponse,
    responseDeserialize: deserialize_dac_governance_VoteResponse,
  },
  getVotingResults: {
    path: '/dac.governance.GovernanceService/GetVotingResults',
    requestStream: false,
    responseStream: true,
    requestType: governance_pb.GetVotingResultsRequest,
    responseType: governance_pb.VotingUpdate,
    requestSerialize: serialize_dac_governance_GetVotingResultsRequest,
    requestDeserialize: deserialize_dac_governance_GetVotingResultsRequest,
    responseSerialize: serialize_dac_governance_VotingUpdate,
    responseDeserialize: deserialize_dac_governance_VotingUpdate,
  },
  getUserVotingPower: {
    path: '/dac.governance.GovernanceService/GetUserVotingPower',
    requestStream: false,
    responseStream: false,
    requestType: governance_pb.GetVotingPowerRequest,
    responseType: governance_pb.VotingPowerResponse,
    requestSerialize: serialize_dac_governance_GetVotingPowerRequest,
    requestDeserialize: deserialize_dac_governance_GetVotingPowerRequest,
    responseSerialize: serialize_dac_governance_VotingPowerResponse,
    responseDeserialize: deserialize_dac_governance_VotingPowerResponse,
  },
  // Delegation Management
createDelegation: {
    path: '/dac.governance.GovernanceService/CreateDelegation',
    requestStream: false,
    responseStream: false,
    requestType: governance_pb.CreateDelegationRequest,
    responseType: governance_pb.Delegation,
    requestSerialize: serialize_dac_governance_CreateDelegationRequest,
    requestDeserialize: deserialize_dac_governance_CreateDelegationRequest,
    responseSerialize: serialize_dac_governance_Delegation,
    responseDeserialize: deserialize_dac_governance_Delegation,
  },
  updateDelegation: {
    path: '/dac.governance.GovernanceService/UpdateDelegation',
    requestStream: false,
    responseStream: false,
    requestType: governance_pb.UpdateDelegationRequest,
    responseType: governance_pb.Delegation,
    requestSerialize: serialize_dac_governance_UpdateDelegationRequest,
    requestDeserialize: deserialize_dac_governance_UpdateDelegationRequest,
    responseSerialize: serialize_dac_governance_Delegation,
    responseDeserialize: deserialize_dac_governance_Delegation,
  },
  getDelegationChain: {
    path: '/dac.governance.GovernanceService/GetDelegationChain',
    requestStream: false,
    responseStream: true,
    requestType: governance_pb.GetDelegationChainRequest,
    responseType: governance_pb.DelegationNode,
    requestSerialize: serialize_dac_governance_GetDelegationChainRequest,
    requestDeserialize: deserialize_dac_governance_GetDelegationChainRequest,
    responseSerialize: serialize_dac_governance_DelegationNode,
    responseDeserialize: deserialize_dac_governance_DelegationNode,
  },
  getDelegationGraph: {
    path: '/dac.governance.GovernanceService/GetDelegationGraph',
    requestStream: false,
    responseStream: false,
    requestType: governance_pb.GetDelegationGraphRequest,
    responseType: governance_pb.DelegationGraph,
    requestSerialize: serialize_dac_governance_GetDelegationGraphRequest,
    requestDeserialize: deserialize_dac_governance_GetDelegationGraphRequest,
    responseSerialize: serialize_dac_governance_DelegationGraph,
    responseDeserialize: deserialize_dac_governance_DelegationGraph,
  },
  // Governance Categories
listGovernanceCategories: {
    path: '/dac.governance.GovernanceService/ListGovernanceCategories',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: governance_pb.CategoriesResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_dac_governance_CategoriesResponse,
    responseDeserialize: deserialize_dac_governance_CategoriesResponse,
  },
  createGovernanceCategory: {
    path: '/dac.governance.GovernanceService/CreateGovernanceCategory',
    requestStream: false,
    responseStream: false,
    requestType: governance_pb.CreateCategoryRequest,
    responseType: governance_pb.GovernanceCategory,
    requestSerialize: serialize_dac_governance_CreateCategoryRequest,
    requestDeserialize: deserialize_dac_governance_CreateCategoryRequest,
    responseSerialize: serialize_dac_governance_GovernanceCategory,
    responseDeserialize: deserialize_dac_governance_GovernanceCategory,
  },
  // Statistics and Analytics
getGovernanceStats: {
    path: '/dac.governance.GovernanceService/GetGovernanceStats',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: governance_pb.GovernanceStats,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_dac_governance_GovernanceStats,
    responseDeserialize: deserialize_dac_governance_GovernanceStats,
  },
  streamGovernanceEvents: {
    path: '/dac.governance.GovernanceService/StreamGovernanceEvents',
    requestStream: false,
    responseStream: true,
    requestType: governance_pb.StreamEventsRequest,
    responseType: governance_pb.GovernanceEvent,
    requestSerialize: serialize_dac_governance_StreamEventsRequest,
    requestDeserialize: deserialize_dac_governance_StreamEventsRequest,
    responseSerialize: serialize_dac_governance_GovernanceEvent,
    responseDeserialize: deserialize_dac_governance_GovernanceEvent,
  },
};

exports.GovernanceServiceClient = grpc.makeGenericClientConstructor(GovernanceServiceService, 'GovernanceService');

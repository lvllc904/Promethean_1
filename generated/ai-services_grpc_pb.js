// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ai$services_pb = require('./ai-services_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dac_ai_ComplianceRequest(arg) {
  if (!(arg instanceof ai$services_pb.ComplianceRequest)) {
    throw new Error('Expected argument of type dac.ai.ComplianceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ComplianceRequest(buffer_arg) {
  return ai$services_pb.ComplianceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ComplianceResponse(arg) {
  if (!(arg instanceof ai$services_pb.ComplianceResponse)) {
    throw new Error('Expected argument of type dac.ai.ComplianceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ComplianceResponse(buffer_arg) {
  return ai$services_pb.ComplianceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_LegalAnalysisResponse(arg) {
  if (!(arg instanceof ai$services_pb.LegalAnalysisResponse)) {
    throw new Error('Expected argument of type dac.ai.LegalAnalysisResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_LegalAnalysisResponse(buffer_arg) {
  return ai$services_pb.LegalAnalysisResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_LegalDocumentRequest(arg) {
  if (!(arg instanceof ai$services_pb.LegalDocumentRequest)) {
    throw new Error('Expected argument of type dac.ai.LegalDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_LegalDocumentRequest(buffer_arg) {
  return ai$services_pb.LegalDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_MarketAnalysisRequest(arg) {
  if (!(arg instanceof ai$services_pb.MarketAnalysisRequest)) {
    throw new Error('Expected argument of type dac.ai.MarketAnalysisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_MarketAnalysisRequest(buffer_arg) {
  return ai$services_pb.MarketAnalysisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_MarketAnalysisResponse(arg) {
  if (!(arg instanceof ai$services_pb.MarketAnalysisResponse)) {
    throw new Error('Expected argument of type dac.ai.MarketAnalysisResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_MarketAnalysisResponse(buffer_arg) {
  return ai$services_pb.MarketAnalysisResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ModelConfigRequest(arg) {
  if (!(arg instanceof ai$services_pb.ModelConfigRequest)) {
    throw new Error('Expected argument of type dac.ai.ModelConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ModelConfigRequest(buffer_arg) {
  return ai$services_pb.ModelConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ModelConfigResponse(arg) {
  if (!(arg instanceof ai$services_pb.ModelConfigResponse)) {
    throw new Error('Expected argument of type dac.ai.ModelConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ModelConfigResponse(buffer_arg) {
  return ai$services_pb.ModelConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ModelHealthResponse(arg) {
  if (!(arg instanceof ai$services_pb.ModelHealthResponse)) {
    throw new Error('Expected argument of type dac.ai.ModelHealthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ModelHealthResponse(buffer_arg) {
  return ai$services_pb.ModelHealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ProcessingStatsResponse(arg) {
  if (!(arg instanceof ai$services_pb.ProcessingStatsResponse)) {
    throw new Error('Expected argument of type dac.ai.ProcessingStatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ProcessingStatsResponse(buffer_arg) {
  return ai$services_pb.ProcessingStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_PropertyDescriptionRequest(arg) {
  if (!(arg instanceof ai$services_pb.PropertyDescriptionRequest)) {
    throw new Error('Expected argument of type dac.ai.PropertyDescriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_PropertyDescriptionRequest(buffer_arg) {
  return ai$services_pb.PropertyDescriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_PropertyDescriptionResponse(arg) {
  if (!(arg instanceof ai$services_pb.PropertyDescriptionResponse)) {
    throw new Error('Expected argument of type dac.ai.PropertyDescriptionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_PropertyDescriptionResponse(buffer_arg) {
  return ai$services_pb.PropertyDescriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_PropertyValuationRequest(arg) {
  if (!(arg instanceof ai$services_pb.PropertyValuationRequest)) {
    throw new Error('Expected argument of type dac.ai.PropertyValuationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_PropertyValuationRequest(buffer_arg) {
  return ai$services_pb.PropertyValuationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_PropertyValuationResponse(arg) {
  if (!(arg instanceof ai$services_pb.PropertyValuationResponse)) {
    throw new Error('Expected argument of type dac.ai.PropertyValuationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_PropertyValuationResponse(buffer_arg) {
  return ai$services_pb.PropertyValuationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ProposalAnalysisRequest(arg) {
  if (!(arg instanceof ai$services_pb.ProposalAnalysisRequest)) {
    throw new Error('Expected argument of type dac.ai.ProposalAnalysisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ProposalAnalysisRequest(buffer_arg) {
  return ai$services_pb.ProposalAnalysisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ProposalAnalysisResponse(arg) {
  if (!(arg instanceof ai$services_pb.ProposalAnalysisResponse)) {
    throw new Error('Expected argument of type dac.ai.ProposalAnalysisResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ProposalAnalysisResponse(buffer_arg) {
  return ai$services_pb.ProposalAnalysisResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ProposalGenerationRequest(arg) {
  if (!(arg instanceof ai$services_pb.ProposalGenerationRequest)) {
    throw new Error('Expected argument of type dac.ai.ProposalGenerationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ProposalGenerationRequest(buffer_arg) {
  return ai$services_pb.ProposalGenerationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ProposalGenerationResponse(arg) {
  if (!(arg instanceof ai$services_pb.ProposalGenerationResponse)) {
    throw new Error('Expected argument of type dac.ai.ProposalGenerationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ProposalGenerationResponse(buffer_arg) {
  return ai$services_pb.ProposalGenerationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ReviewAnalysisResponse(arg) {
  if (!(arg instanceof ai$services_pb.ReviewAnalysisResponse)) {
    throw new Error('Expected argument of type dac.ai.ReviewAnalysisResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ReviewAnalysisResponse(buffer_arg) {
  return ai$services_pb.ReviewAnalysisResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ReviewBatchRequest(arg) {
  if (!(arg instanceof ai$services_pb.ReviewBatchRequest)) {
    throw new Error('Expected argument of type dac.ai.ReviewBatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ReviewBatchRequest(buffer_arg) {
  return ai$services_pb.ReviewBatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ReviewSentimentRequest(arg) {
  if (!(arg instanceof ai$services_pb.ReviewSentimentRequest)) {
    throw new Error('Expected argument of type dac.ai.ReviewSentimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ReviewSentimentRequest(buffer_arg) {
  return ai$services_pb.ReviewSentimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ReviewSentimentResponse(arg) {
  if (!(arg instanceof ai$services_pb.ReviewSentimentResponse)) {
    throw new Error('Expected argument of type dac.ai.ReviewSentimentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ReviewSentimentResponse(buffer_arg) {
  return ai$services_pb.ReviewSentimentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ReviewSummaryRequest(arg) {
  if (!(arg instanceof ai$services_pb.ReviewSummaryRequest)) {
    throw new Error('Expected argument of type dac.ai.ReviewSummaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ReviewSummaryRequest(buffer_arg) {
  return ai$services_pb.ReviewSummaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_ReviewSummaryResponse(arg) {
  if (!(arg instanceof ai$services_pb.ReviewSummaryResponse)) {
    throw new Error('Expected argument of type dac.ai.ReviewSummaryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_ReviewSummaryResponse(buffer_arg) {
  return ai$services_pb.ReviewSummaryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_SmartContractRequest(arg) {
  if (!(arg instanceof ai$services_pb.SmartContractRequest)) {
    throw new Error('Expected argument of type dac.ai.SmartContractRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_SmartContractRequest(buffer_arg) {
  return ai$services_pb.SmartContractRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_SmartContractResponse(arg) {
  if (!(arg instanceof ai$services_pb.SmartContractResponse)) {
    throw new Error('Expected argument of type dac.ai.SmartContractResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_SmartContractResponse(buffer_arg) {
  return ai$services_pb.SmartContractResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_VotingPatternRequest(arg) {
  if (!(arg instanceof ai$services_pb.VotingPatternRequest)) {
    throw new Error('Expected argument of type dac.ai.VotingPatternRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_VotingPatternRequest(buffer_arg) {
  return ai$services_pb.VotingPatternRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_ai_VotingPatternResponse(arg) {
  if (!(arg instanceof ai$services_pb.VotingPatternResponse)) {
    throw new Error('Expected argument of type dac.ai.VotingPatternResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_ai_VotingPatternResponse(buffer_arg) {
  return ai$services_pb.VotingPatternResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// AI Services Definition
var AIServiceService = exports.AIServiceService = {
  // Property Valuation Services
generatePropertyValuation: {
    path: '/dac.ai.AIService/GeneratePropertyValuation',
    requestStream: false,
    responseStream: true,
    requestType: ai$services_pb.PropertyValuationRequest,
    responseType: ai$services_pb.PropertyValuationResponse,
    requestSerialize: serialize_dac_ai_PropertyValuationRequest,
    requestDeserialize: deserialize_dac_ai_PropertyValuationRequest,
    responseSerialize: serialize_dac_ai_PropertyValuationResponse,
    responseDeserialize: deserialize_dac_ai_PropertyValuationResponse,
  },
  generatePropertyDescription: {
    path: '/dac.ai.AIService/GeneratePropertyDescription',
    requestStream: false,
    responseStream: false,
    requestType: ai$services_pb.PropertyDescriptionRequest,
    responseType: ai$services_pb.PropertyDescriptionResponse,
    requestSerialize: serialize_dac_ai_PropertyDescriptionRequest,
    requestDeserialize: deserialize_dac_ai_PropertyDescriptionRequest,
    responseSerialize: serialize_dac_ai_PropertyDescriptionResponse,
    responseDeserialize: deserialize_dac_ai_PropertyDescriptionResponse,
  },
  analyzePropertyMarket: {
    path: '/dac.ai.AIService/AnalyzePropertyMarket',
    requestStream: false,
    responseStream: true,
    requestType: ai$services_pb.MarketAnalysisRequest,
    responseType: ai$services_pb.MarketAnalysisResponse,
    requestSerialize: serialize_dac_ai_MarketAnalysisRequest,
    requestDeserialize: deserialize_dac_ai_MarketAnalysisRequest,
    responseSerialize: serialize_dac_ai_MarketAnalysisResponse,
    responseDeserialize: deserialize_dac_ai_MarketAnalysisResponse,
  },
  // Governance AI Services
analyzeProposalContent: {
    path: '/dac.ai.AIService/AnalyzeProposalContent',
    requestStream: false,
    responseStream: false,
    requestType: ai$services_pb.ProposalAnalysisRequest,
    responseType: ai$services_pb.ProposalAnalysisResponse,
    requestSerialize: serialize_dac_ai_ProposalAnalysisRequest,
    requestDeserialize: deserialize_dac_ai_ProposalAnalysisRequest,
    responseSerialize: serialize_dac_ai_ProposalAnalysisResponse,
    responseDeserialize: deserialize_dac_ai_ProposalAnalysisResponse,
  },
  generateProposalFromFeedback: {
    path: '/dac.ai.AIService/GenerateProposalFromFeedback',
    requestStream: false,
    responseStream: true,
    requestType: ai$services_pb.ProposalGenerationRequest,
    responseType: ai$services_pb.ProposalGenerationResponse,
    requestSerialize: serialize_dac_ai_ProposalGenerationRequest,
    requestDeserialize: deserialize_dac_ai_ProposalGenerationRequest,
    responseSerialize: serialize_dac_ai_ProposalGenerationResponse,
    responseDeserialize: deserialize_dac_ai_ProposalGenerationResponse,
  },
  analyzeVotingPatterns: {
    path: '/dac.ai.AIService/AnalyzeVotingPatterns',
    requestStream: false,
    responseStream: false,
    requestType: ai$services_pb.VotingPatternRequest,
    responseType: ai$services_pb.VotingPatternResponse,
    requestSerialize: serialize_dac_ai_VotingPatternRequest,
    requestDeserialize: deserialize_dac_ai_VotingPatternRequest,
    responseSerialize: serialize_dac_ai_VotingPatternResponse,
    responseDeserialize: deserialize_dac_ai_VotingPatternResponse,
  },
  // Review Analysis Services
processReviewBatch: {
    path: '/dac.ai.AIService/ProcessReviewBatch',
    requestStream: true,
    responseStream: true,
    requestType: ai$services_pb.ReviewBatchRequest,
    responseType: ai$services_pb.ReviewAnalysisResponse,
    requestSerialize: serialize_dac_ai_ReviewBatchRequest,
    requestDeserialize: deserialize_dac_ai_ReviewBatchRequest,
    responseSerialize: serialize_dac_ai_ReviewAnalysisResponse,
    responseDeserialize: deserialize_dac_ai_ReviewAnalysisResponse,
  },
  getReviewSentiment: {
    path: '/dac.ai.AIService/GetReviewSentiment',
    requestStream: false,
    responseStream: false,
    requestType: ai$services_pb.ReviewSentimentRequest,
    responseType: ai$services_pb.ReviewSentimentResponse,
    requestSerialize: serialize_dac_ai_ReviewSentimentRequest,
    requestDeserialize: deserialize_dac_ai_ReviewSentimentRequest,
    responseSerialize: serialize_dac_ai_ReviewSentimentResponse,
    responseDeserialize: deserialize_dac_ai_ReviewSentimentResponse,
  },
  generateReviewSummary: {
    path: '/dac.ai.AIService/GenerateReviewSummary',
    requestStream: false,
    responseStream: false,
    requestType: ai$services_pb.ReviewSummaryRequest,
    responseType: ai$services_pb.ReviewSummaryResponse,
    requestSerialize: serialize_dac_ai_ReviewSummaryRequest,
    requestDeserialize: deserialize_dac_ai_ReviewSummaryRequest,
    responseSerialize: serialize_dac_ai_ReviewSummaryResponse,
    responseDeserialize: deserialize_dac_ai_ReviewSummaryResponse,
  },
  // Legal and Compliance Services
analyzeLegalDocument: {
    path: '/dac.ai.AIService/AnalyzeLegalDocument',
    requestStream: false,
    responseStream: true,
    requestType: ai$services_pb.LegalDocumentRequest,
    responseType: ai$services_pb.LegalAnalysisResponse,
    requestSerialize: serialize_dac_ai_LegalDocumentRequest,
    requestDeserialize: deserialize_dac_ai_LegalDocumentRequest,
    responseSerialize: serialize_dac_ai_LegalAnalysisResponse,
    responseDeserialize: deserialize_dac_ai_LegalAnalysisResponse,
  },
  generateSmartContract: {
    path: '/dac.ai.AIService/GenerateSmartContract',
    requestStream: false,
    responseStream: true,
    requestType: ai$services_pb.SmartContractRequest,
    responseType: ai$services_pb.SmartContractResponse,
    requestSerialize: serialize_dac_ai_SmartContractRequest,
    requestDeserialize: deserialize_dac_ai_SmartContractRequest,
    responseSerialize: serialize_dac_ai_SmartContractResponse,
    responseDeserialize: deserialize_dac_ai_SmartContractResponse,
  },
  validateCompliance: {
    path: '/dac.ai.AIService/ValidateCompliance',
    requestStream: false,
    responseStream: false,
    requestType: ai$services_pb.ComplianceRequest,
    responseType: ai$services_pb.ComplianceResponse,
    requestSerialize: serialize_dac_ai_ComplianceRequest,
    requestDeserialize: deserialize_dac_ai_ComplianceRequest,
    responseSerialize: serialize_dac_ai_ComplianceResponse,
    responseDeserialize: deserialize_dac_ai_ComplianceResponse,
  },
  // AI Model Management
getModelHealth: {
    path: '/dac.ai.AIService/GetModelHealth',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ai$services_pb.ModelHealthResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_dac_ai_ModelHealthResponse,
    responseDeserialize: deserialize_dac_ai_ModelHealthResponse,
  },
  configureModelSettings: {
    path: '/dac.ai.AIService/ConfigureModelSettings',
    requestStream: false,
    responseStream: false,
    requestType: ai$services_pb.ModelConfigRequest,
    responseType: ai$services_pb.ModelConfigResponse,
    requestSerialize: serialize_dac_ai_ModelConfigRequest,
    requestDeserialize: deserialize_dac_ai_ModelConfigRequest,
    responseSerialize: serialize_dac_ai_ModelConfigResponse,
    responseDeserialize: deserialize_dac_ai_ModelConfigResponse,
  },
  getProcessingStats: {
    path: '/dac.ai.AIService/GetProcessingStats',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ai$services_pb.ProcessingStatsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_dac_ai_ProcessingStatsResponse,
    responseDeserialize: deserialize_dac_ai_ProcessingStatsResponse,
  },
};

exports.AIServiceClient = grpc.makeGenericClientConstructor(AIServiceService, 'AIService');

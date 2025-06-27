// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var properties_pb = require('./properties_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dac_properties_AnalyticsRequest(arg) {
  if (!(arg instanceof properties_pb.AnalyticsRequest)) {
    throw new Error('Expected argument of type dac.properties.AnalyticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_AnalyticsRequest(buffer_arg) {
  return properties_pb.AnalyticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_CancelTransactionRequest(arg) {
  if (!(arg instanceof properties_pb.CancelTransactionRequest)) {
    throw new Error('Expected argument of type dac.properties.CancelTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_CancelTransactionRequest(buffer_arg) {
  return properties_pb.CancelTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_CompleteTransactionRequest(arg) {
  if (!(arg instanceof properties_pb.CompleteTransactionRequest)) {
    throw new Error('Expected argument of type dac.properties.CompleteTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_CompleteTransactionRequest(buffer_arg) {
  return properties_pb.CompleteTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_CreatePropertyRequest(arg) {
  if (!(arg instanceof properties_pb.CreatePropertyRequest)) {
    throw new Error('Expected argument of type dac.properties.CreatePropertyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_CreatePropertyRequest(buffer_arg) {
  return properties_pb.CreatePropertyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_DeletePropertyRequest(arg) {
  if (!(arg instanceof properties_pb.DeletePropertyRequest)) {
    throw new Error('Expected argument of type dac.properties.DeletePropertyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_DeletePropertyRequest(buffer_arg) {
  return properties_pb.DeletePropertyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_DocumentListResponse(arg) {
  if (!(arg instanceof properties_pb.DocumentListResponse)) {
    throw new Error('Expected argument of type dac.properties.DocumentListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_DocumentListResponse(buffer_arg) {
  return properties_pb.DocumentListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_DocumentRequest(arg) {
  if (!(arg instanceof properties_pb.DocumentRequest)) {
    throw new Error('Expected argument of type dac.properties.DocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_DocumentRequest(buffer_arg) {
  return properties_pb.DocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_DocumentResponse(arg) {
  if (!(arg instanceof properties_pb.DocumentResponse)) {
    throw new Error('Expected argument of type dac.properties.DocumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_DocumentResponse(buffer_arg) {
  return properties_pb.DocumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_DocumentUploadRequest(arg) {
  if (!(arg instanceof properties_pb.DocumentUploadRequest)) {
    throw new Error('Expected argument of type dac.properties.DocumentUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_DocumentUploadRequest(buffer_arg) {
  return properties_pb.DocumentUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_DocumentUploadResponse(arg) {
  if (!(arg instanceof properties_pb.DocumentUploadResponse)) {
    throw new Error('Expected argument of type dac.properties.DocumentUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_DocumentUploadResponse(buffer_arg) {
  return properties_pb.DocumentUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_FeaturedPropertiesRequest(arg) {
  if (!(arg instanceof properties_pb.FeaturedPropertiesRequest)) {
    throw new Error('Expected argument of type dac.properties.FeaturedPropertiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_FeaturedPropertiesRequest(buffer_arg) {
  return properties_pb.FeaturedPropertiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_FeaturedPropertiesResponse(arg) {
  if (!(arg instanceof properties_pb.FeaturedPropertiesResponse)) {
    throw new Error('Expected argument of type dac.properties.FeaturedPropertiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_FeaturedPropertiesResponse(buffer_arg) {
  return properties_pb.FeaturedPropertiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_GetPropertyRequest(arg) {
  if (!(arg instanceof properties_pb.GetPropertyRequest)) {
    throw new Error('Expected argument of type dac.properties.GetPropertyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_GetPropertyRequest(buffer_arg) {
  return properties_pb.GetPropertyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_ListDocumentsRequest(arg) {
  if (!(arg instanceof properties_pb.ListDocumentsRequest)) {
    throw new Error('Expected argument of type dac.properties.ListDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_ListDocumentsRequest(buffer_arg) {
  return properties_pb.ListDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_ListPropertiesRequest(arg) {
  if (!(arg instanceof properties_pb.ListPropertiesRequest)) {
    throw new Error('Expected argument of type dac.properties.ListPropertiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_ListPropertiesRequest(buffer_arg) {
  return properties_pb.ListPropertiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_MarketTrendsRequest(arg) {
  if (!(arg instanceof properties_pb.MarketTrendsRequest)) {
    throw new Error('Expected argument of type dac.properties.MarketTrendsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_MarketTrendsRequest(buffer_arg) {
  return properties_pb.MarketTrendsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_MarketTrendsResponse(arg) {
  if (!(arg instanceof properties_pb.MarketTrendsResponse)) {
    throw new Error('Expected argument of type dac.properties.MarketTrendsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_MarketTrendsResponse(buffer_arg) {
  return properties_pb.MarketTrendsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_MediaUploadRequest(arg) {
  if (!(arg instanceof properties_pb.MediaUploadRequest)) {
    throw new Error('Expected argument of type dac.properties.MediaUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_MediaUploadRequest(buffer_arg) {
  return properties_pb.MediaUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_MediaUploadResponse(arg) {
  if (!(arg instanceof properties_pb.MediaUploadResponse)) {
    throw new Error('Expected argument of type dac.properties.MediaUploadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_MediaUploadResponse(buffer_arg) {
  return properties_pb.MediaUploadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_OwnerPropertiesRequest(arg) {
  if (!(arg instanceof properties_pb.OwnerPropertiesRequest)) {
    throw new Error('Expected argument of type dac.properties.OwnerPropertiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_OwnerPropertiesRequest(buffer_arg) {
  return properties_pb.OwnerPropertiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_OwnerPropertiesResponse(arg) {
  if (!(arg instanceof properties_pb.OwnerPropertiesResponse)) {
    throw new Error('Expected argument of type dac.properties.OwnerPropertiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_OwnerPropertiesResponse(buffer_arg) {
  return properties_pb.OwnerPropertiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_Property(arg) {
  if (!(arg instanceof properties_pb.Property)) {
    throw new Error('Expected argument of type dac.properties.Property');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_Property(buffer_arg) {
  return properties_pb.Property.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_PropertyAnalytics(arg) {
  if (!(arg instanceof properties_pb.PropertyAnalytics)) {
    throw new Error('Expected argument of type dac.properties.PropertyAnalytics');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_PropertyAnalytics(buffer_arg) {
  return properties_pb.PropertyAnalytics.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_PropertySearchRequest(arg) {
  if (!(arg instanceof properties_pb.PropertySearchRequest)) {
    throw new Error('Expected argument of type dac.properties.PropertySearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_PropertySearchRequest(buffer_arg) {
  return properties_pb.PropertySearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_PropertySearchResponse(arg) {
  if (!(arg instanceof properties_pb.PropertySearchResponse)) {
    throw new Error('Expected argument of type dac.properties.PropertySearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_PropertySearchResponse(buffer_arg) {
  return properties_pb.PropertySearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_RentalAnalytics(arg) {
  if (!(arg instanceof properties_pb.RentalAnalytics)) {
    throw new Error('Expected argument of type dac.properties.RentalAnalytics');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_RentalAnalytics(buffer_arg) {
  return properties_pb.RentalAnalytics.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_RentalAnalyticsRequest(arg) {
  if (!(arg instanceof properties_pb.RentalAnalyticsRequest)) {
    throw new Error('Expected argument of type dac.properties.RentalAnalyticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_RentalAnalyticsRequest(buffer_arg) {
  return properties_pb.RentalAnalyticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TokenHoldersRequest(arg) {
  if (!(arg instanceof properties_pb.TokenHoldersRequest)) {
    throw new Error('Expected argument of type dac.properties.TokenHoldersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TokenHoldersRequest(buffer_arg) {
  return properties_pb.TokenHoldersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TokenHoldersResponse(arg) {
  if (!(arg instanceof properties_pb.TokenHoldersResponse)) {
    throw new Error('Expected argument of type dac.properties.TokenHoldersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TokenHoldersResponse(buffer_arg) {
  return properties_pb.TokenHoldersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TokenInfo(arg) {
  if (!(arg instanceof properties_pb.TokenInfo)) {
    throw new Error('Expected argument of type dac.properties.TokenInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TokenInfo(buffer_arg) {
  return properties_pb.TokenInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TokenInfoRequest(arg) {
  if (!(arg instanceof properties_pb.TokenInfoRequest)) {
    throw new Error('Expected argument of type dac.properties.TokenInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TokenInfoRequest(buffer_arg) {
  return properties_pb.TokenInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TokenTransferRequest(arg) {
  if (!(arg instanceof properties_pb.TokenTransferRequest)) {
    throw new Error('Expected argument of type dac.properties.TokenTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TokenTransferRequest(buffer_arg) {
  return properties_pb.TokenTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TokenTransferResponse(arg) {
  if (!(arg instanceof properties_pb.TokenTransferResponse)) {
    throw new Error('Expected argument of type dac.properties.TokenTransferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TokenTransferResponse(buffer_arg) {
  return properties_pb.TokenTransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TokenizationRequest(arg) {
  if (!(arg instanceof properties_pb.TokenizationRequest)) {
    throw new Error('Expected argument of type dac.properties.TokenizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TokenizationRequest(buffer_arg) {
  return properties_pb.TokenizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TokenizationResponse(arg) {
  if (!(arg instanceof properties_pb.TokenizationResponse)) {
    throw new Error('Expected argument of type dac.properties.TokenizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TokenizationResponse(buffer_arg) {
  return properties_pb.TokenizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TransactionRequest(arg) {
  if (!(arg instanceof properties_pb.TransactionRequest)) {
    throw new Error('Expected argument of type dac.properties.TransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TransactionRequest(buffer_arg) {
  return properties_pb.TransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TransactionResponse(arg) {
  if (!(arg instanceof properties_pb.TransactionResponse)) {
    throw new Error('Expected argument of type dac.properties.TransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TransactionResponse(buffer_arg) {
  return properties_pb.TransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TransactionResult(arg) {
  if (!(arg instanceof properties_pb.TransactionResult)) {
    throw new Error('Expected argument of type dac.properties.TransactionResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TransactionResult(buffer_arg) {
  return properties_pb.TransactionResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TransactionStatus(arg) {
  if (!(arg instanceof properties_pb.TransactionStatus)) {
    throw new Error('Expected argument of type dac.properties.TransactionStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TransactionStatus(buffer_arg) {
  return properties_pb.TransactionStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_TransactionStatusRequest(arg) {
  if (!(arg instanceof properties_pb.TransactionStatusRequest)) {
    throw new Error('Expected argument of type dac.properties.TransactionStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_TransactionStatusRequest(buffer_arg) {
  return properties_pb.TransactionStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_UpdatePropertyRequest(arg) {
  if (!(arg instanceof properties_pb.UpdatePropertyRequest)) {
    throw new Error('Expected argument of type dac.properties.UpdatePropertyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_UpdatePropertyRequest(buffer_arg) {
  return properties_pb.UpdatePropertyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_UpdateValuationRequest(arg) {
  if (!(arg instanceof properties_pb.UpdateValuationRequest)) {
    throw new Error('Expected argument of type dac.properties.UpdateValuationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_UpdateValuationRequest(buffer_arg) {
  return properties_pb.UpdateValuationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_Valuation(arg) {
  if (!(arg instanceof properties_pb.Valuation)) {
    throw new Error('Expected argument of type dac.properties.Valuation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_Valuation(buffer_arg) {
  return properties_pb.Valuation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_ValuationHistoryRequest(arg) {
  if (!(arg instanceof properties_pb.ValuationHistoryRequest)) {
    throw new Error('Expected argument of type dac.properties.ValuationHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_ValuationHistoryRequest(buffer_arg) {
  return properties_pb.ValuationHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_ValuationHistoryResponse(arg) {
  if (!(arg instanceof properties_pb.ValuationHistoryResponse)) {
    throw new Error('Expected argument of type dac.properties.ValuationHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_ValuationHistoryResponse(buffer_arg) {
  return properties_pb.ValuationHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_ValuationRequest(arg) {
  if (!(arg instanceof properties_pb.ValuationRequest)) {
    throw new Error('Expected argument of type dac.properties.ValuationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_ValuationRequest(buffer_arg) {
  return properties_pb.ValuationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_properties_ValuationResponse(arg) {
  if (!(arg instanceof properties_pb.ValuationResponse)) {
    throw new Error('Expected argument of type dac.properties.ValuationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_properties_ValuationResponse(buffer_arg) {
  return properties_pb.ValuationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Property Management Service
var PropertyServiceService = exports.PropertyServiceService = {
  // Property CRUD Operations
createProperty: {
    path: '/dac.properties.PropertyService/CreateProperty',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.CreatePropertyRequest,
    responseType: properties_pb.Property,
    requestSerialize: serialize_dac_properties_CreatePropertyRequest,
    requestDeserialize: deserialize_dac_properties_CreatePropertyRequest,
    responseSerialize: serialize_dac_properties_Property,
    responseDeserialize: deserialize_dac_properties_Property,
  },
  getProperty: {
    path: '/dac.properties.PropertyService/GetProperty',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.GetPropertyRequest,
    responseType: properties_pb.Property,
    requestSerialize: serialize_dac_properties_GetPropertyRequest,
    requestDeserialize: deserialize_dac_properties_GetPropertyRequest,
    responseSerialize: serialize_dac_properties_Property,
    responseDeserialize: deserialize_dac_properties_Property,
  },
  updateProperty: {
    path: '/dac.properties.PropertyService/UpdateProperty',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.UpdatePropertyRequest,
    responseType: properties_pb.Property,
    requestSerialize: serialize_dac_properties_UpdatePropertyRequest,
    requestDeserialize: deserialize_dac_properties_UpdatePropertyRequest,
    responseSerialize: serialize_dac_properties_Property,
    responseDeserialize: deserialize_dac_properties_Property,
  },
  deleteProperty: {
    path: '/dac.properties.PropertyService/DeleteProperty',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.DeletePropertyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_properties_DeletePropertyRequest,
    requestDeserialize: deserialize_dac_properties_DeletePropertyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listProperties: {
    path: '/dac.properties.PropertyService/ListProperties',
    requestStream: false,
    responseStream: true,
    requestType: properties_pb.ListPropertiesRequest,
    responseType: properties_pb.Property,
    requestSerialize: serialize_dac_properties_ListPropertiesRequest,
    requestDeserialize: deserialize_dac_properties_ListPropertiesRequest,
    responseSerialize: serialize_dac_properties_Property,
    responseDeserialize: deserialize_dac_properties_Property,
  },
  // Property Search and Filtering
searchProperties: {
    path: '/dac.properties.PropertyService/SearchProperties',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.PropertySearchRequest,
    responseType: properties_pb.PropertySearchResponse,
    requestSerialize: serialize_dac_properties_PropertySearchRequest,
    requestDeserialize: deserialize_dac_properties_PropertySearchRequest,
    responseSerialize: serialize_dac_properties_PropertySearchResponse,
    responseDeserialize: deserialize_dac_properties_PropertySearchResponse,
  },
  getFeaturedProperties: {
    path: '/dac.properties.PropertyService/GetFeaturedProperties',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.FeaturedPropertiesRequest,
    responseType: properties_pb.FeaturedPropertiesResponse,
    requestSerialize: serialize_dac_properties_FeaturedPropertiesRequest,
    requestDeserialize: deserialize_dac_properties_FeaturedPropertiesRequest,
    responseSerialize: serialize_dac_properties_FeaturedPropertiesResponse,
    responseDeserialize: deserialize_dac_properties_FeaturedPropertiesResponse,
  },
  getPropertiesByOwner: {
    path: '/dac.properties.PropertyService/GetPropertiesByOwner',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.OwnerPropertiesRequest,
    responseType: properties_pb.OwnerPropertiesResponse,
    requestSerialize: serialize_dac_properties_OwnerPropertiesRequest,
    requestDeserialize: deserialize_dac_properties_OwnerPropertiesRequest,
    responseSerialize: serialize_dac_properties_OwnerPropertiesResponse,
    responseDeserialize: deserialize_dac_properties_OwnerPropertiesResponse,
  },
  // Property Transactions
initiateTransaction: {
    path: '/dac.properties.PropertyService/InitiateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.TransactionRequest,
    responseType: properties_pb.TransactionResponse,
    requestSerialize: serialize_dac_properties_TransactionRequest,
    requestDeserialize: deserialize_dac_properties_TransactionRequest,
    responseSerialize: serialize_dac_properties_TransactionResponse,
    responseDeserialize: deserialize_dac_properties_TransactionResponse,
  },
  getTransactionStatus: {
    path: '/dac.properties.PropertyService/GetTransactionStatus',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.TransactionStatusRequest,
    responseType: properties_pb.TransactionStatus,
    requestSerialize: serialize_dac_properties_TransactionStatusRequest,
    requestDeserialize: deserialize_dac_properties_TransactionStatusRequest,
    responseSerialize: serialize_dac_properties_TransactionStatus,
    responseDeserialize: deserialize_dac_properties_TransactionStatus,
  },
  completeTransaction: {
    path: '/dac.properties.PropertyService/CompleteTransaction',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.CompleteTransactionRequest,
    responseType: properties_pb.TransactionResult,
    requestSerialize: serialize_dac_properties_CompleteTransactionRequest,
    requestDeserialize: deserialize_dac_properties_CompleteTransactionRequest,
    responseSerialize: serialize_dac_properties_TransactionResult,
    responseDeserialize: deserialize_dac_properties_TransactionResult,
  },
  cancelTransaction: {
    path: '/dac.properties.PropertyService/CancelTransaction',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.CancelTransactionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dac_properties_CancelTransactionRequest,
    requestDeserialize: deserialize_dac_properties_CancelTransactionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Fractional Ownership
tokenizeProperty: {
    path: '/dac.properties.PropertyService/TokenizeProperty',
    requestStream: false,
    responseStream: true,
    requestType: properties_pb.TokenizationRequest,
    responseType: properties_pb.TokenizationResponse,
    requestSerialize: serialize_dac_properties_TokenizationRequest,
    requestDeserialize: deserialize_dac_properties_TokenizationRequest,
    responseSerialize: serialize_dac_properties_TokenizationResponse,
    responseDeserialize: deserialize_dac_properties_TokenizationResponse,
  },
  getTokenInfo: {
    path: '/dac.properties.PropertyService/GetTokenInfo',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.TokenInfoRequest,
    responseType: properties_pb.TokenInfo,
    requestSerialize: serialize_dac_properties_TokenInfoRequest,
    requestDeserialize: deserialize_dac_properties_TokenInfoRequest,
    responseSerialize: serialize_dac_properties_TokenInfo,
    responseDeserialize: deserialize_dac_properties_TokenInfo,
  },
  transferTokens: {
    path: '/dac.properties.PropertyService/TransferTokens',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.TokenTransferRequest,
    responseType: properties_pb.TokenTransferResponse,
    requestSerialize: serialize_dac_properties_TokenTransferRequest,
    requestDeserialize: deserialize_dac_properties_TokenTransferRequest,
    responseSerialize: serialize_dac_properties_TokenTransferResponse,
    responseDeserialize: deserialize_dac_properties_TokenTransferResponse,
  },
  getTokenHolders: {
    path: '/dac.properties.PropertyService/GetTokenHolders',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.TokenHoldersRequest,
    responseType: properties_pb.TokenHoldersResponse,
    requestSerialize: serialize_dac_properties_TokenHoldersRequest,
    requestDeserialize: deserialize_dac_properties_TokenHoldersRequest,
    responseSerialize: serialize_dac_properties_TokenHoldersResponse,
    responseDeserialize: deserialize_dac_properties_TokenHoldersResponse,
  },
  // Property Valuation
requestValuation: {
    path: '/dac.properties.PropertyService/RequestValuation',
    requestStream: false,
    responseStream: true,
    requestType: properties_pb.ValuationRequest,
    responseType: properties_pb.ValuationResponse,
    requestSerialize: serialize_dac_properties_ValuationRequest,
    requestDeserialize: deserialize_dac_properties_ValuationRequest,
    responseSerialize: serialize_dac_properties_ValuationResponse,
    responseDeserialize: deserialize_dac_properties_ValuationResponse,
  },
  getValuationHistory: {
    path: '/dac.properties.PropertyService/GetValuationHistory',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.ValuationHistoryRequest,
    responseType: properties_pb.ValuationHistoryResponse,
    requestSerialize: serialize_dac_properties_ValuationHistoryRequest,
    requestDeserialize: deserialize_dac_properties_ValuationHistoryRequest,
    responseSerialize: serialize_dac_properties_ValuationHistoryResponse,
    responseDeserialize: deserialize_dac_properties_ValuationHistoryResponse,
  },
  updateValuation: {
    path: '/dac.properties.PropertyService/UpdateValuation',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.UpdateValuationRequest,
    responseType: properties_pb.Valuation,
    requestSerialize: serialize_dac_properties_UpdateValuationRequest,
    requestDeserialize: deserialize_dac_properties_UpdateValuationRequest,
    responseSerialize: serialize_dac_properties_Valuation,
    responseDeserialize: deserialize_dac_properties_Valuation,
  },
  // Documents and Media
uploadDocument: {
    path: '/dac.properties.PropertyService/UploadDocument',
    requestStream: true,
    responseStream: false,
    requestType: properties_pb.DocumentUploadRequest,
    responseType: properties_pb.DocumentUploadResponse,
    requestSerialize: serialize_dac_properties_DocumentUploadRequest,
    requestDeserialize: deserialize_dac_properties_DocumentUploadRequest,
    responseSerialize: serialize_dac_properties_DocumentUploadResponse,
    responseDeserialize: deserialize_dac_properties_DocumentUploadResponse,
  },
  getDocument: {
    path: '/dac.properties.PropertyService/GetDocument',
    requestStream: false,
    responseStream: true,
    requestType: properties_pb.DocumentRequest,
    responseType: properties_pb.DocumentResponse,
    requestSerialize: serialize_dac_properties_DocumentRequest,
    requestDeserialize: deserialize_dac_properties_DocumentRequest,
    responseSerialize: serialize_dac_properties_DocumentResponse,
    responseDeserialize: deserialize_dac_properties_DocumentResponse,
  },
  listDocuments: {
    path: '/dac.properties.PropertyService/ListDocuments',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.ListDocumentsRequest,
    responseType: properties_pb.DocumentListResponse,
    requestSerialize: serialize_dac_properties_ListDocumentsRequest,
    requestDeserialize: deserialize_dac_properties_ListDocumentsRequest,
    responseSerialize: serialize_dac_properties_DocumentListResponse,
    responseDeserialize: deserialize_dac_properties_DocumentListResponse,
  },
  uploadMedia: {
    path: '/dac.properties.PropertyService/UploadMedia',
    requestStream: true,
    responseStream: false,
    requestType: properties_pb.MediaUploadRequest,
    responseType: properties_pb.MediaUploadResponse,
    requestSerialize: serialize_dac_properties_MediaUploadRequest,
    requestDeserialize: deserialize_dac_properties_MediaUploadRequest,
    responseSerialize: serialize_dac_properties_MediaUploadResponse,
    responseDeserialize: deserialize_dac_properties_MediaUploadResponse,
  },
  // Property Analytics
getPropertyAnalytics: {
    path: '/dac.properties.PropertyService/GetPropertyAnalytics',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.AnalyticsRequest,
    responseType: properties_pb.PropertyAnalytics,
    requestSerialize: serialize_dac_properties_AnalyticsRequest,
    requestDeserialize: deserialize_dac_properties_AnalyticsRequest,
    responseSerialize: serialize_dac_properties_PropertyAnalytics,
    responseDeserialize: deserialize_dac_properties_PropertyAnalytics,
  },
  getMarketTrends: {
    path: '/dac.properties.PropertyService/GetMarketTrends',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.MarketTrendsRequest,
    responseType: properties_pb.MarketTrendsResponse,
    requestSerialize: serialize_dac_properties_MarketTrendsRequest,
    requestDeserialize: deserialize_dac_properties_MarketTrendsRequest,
    responseSerialize: serialize_dac_properties_MarketTrendsResponse,
    responseDeserialize: deserialize_dac_properties_MarketTrendsResponse,
  },
  getRentalAnalytics: {
    path: '/dac.properties.PropertyService/GetRentalAnalytics',
    requestStream: false,
    responseStream: false,
    requestType: properties_pb.RentalAnalyticsRequest,
    responseType: properties_pb.RentalAnalytics,
    requestSerialize: serialize_dac_properties_RentalAnalyticsRequest,
    requestDeserialize: deserialize_dac_properties_RentalAnalyticsRequest,
    responseSerialize: serialize_dac_properties_RentalAnalytics,
    responseDeserialize: deserialize_dac_properties_RentalAnalytics,
  },
};

exports.PropertyServiceClient = grpc.makeGenericClientConstructor(PropertyServiceService, 'PropertyService');

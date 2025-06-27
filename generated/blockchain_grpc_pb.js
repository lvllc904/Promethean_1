// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var blockchain_pb = require('./blockchain_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dac_blockchain_BalanceRequest(arg) {
  if (!(arg instanceof blockchain_pb.BalanceRequest)) {
    throw new Error('Expected argument of type dac.blockchain.BalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_BalanceRequest(buffer_arg) {
  return blockchain_pb.BalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_BalanceResponse(arg) {
  if (!(arg instanceof blockchain_pb.BalanceResponse)) {
    throw new Error('Expected argument of type dac.blockchain.BalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_BalanceResponse(buffer_arg) {
  return blockchain_pb.BalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_BeaconAddressResponse(arg) {
  if (!(arg instanceof blockchain_pb.BeaconAddressResponse)) {
    throw new Error('Expected argument of type dac.blockchain.BeaconAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_BeaconAddressResponse(buffer_arg) {
  return blockchain_pb.BeaconAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_BlockInfo(arg) {
  if (!(arg instanceof blockchain_pb.BlockInfo)) {
    throw new Error('Expected argument of type dac.blockchain.BlockInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_BlockInfo(buffer_arg) {
  return blockchain_pb.BlockInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_BlockInfoRequest(arg) {
  if (!(arg instanceof blockchain_pb.BlockInfoRequest)) {
    throw new Error('Expected argument of type dac.blockchain.BlockInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_BlockInfoRequest(buffer_arg) {
  return blockchain_pb.BlockInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_BlockchainEvent(arg) {
  if (!(arg instanceof blockchain_pb.BlockchainEvent)) {
    throw new Error('Expected argument of type dac.blockchain.BlockchainEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_BlockchainEvent(buffer_arg) {
  return blockchain_pb.BlockchainEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_ContractCallRequest(arg) {
  if (!(arg instanceof blockchain_pb.ContractCallRequest)) {
    throw new Error('Expected argument of type dac.blockchain.ContractCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_ContractCallRequest(buffer_arg) {
  return blockchain_pb.ContractCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_ContractCallResponse(arg) {
  if (!(arg instanceof blockchain_pb.ContractCallResponse)) {
    throw new Error('Expected argument of type dac.blockchain.ContractCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_ContractCallResponse(buffer_arg) {
  return blockchain_pb.ContractCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_ContractInfo(arg) {
  if (!(arg instanceof blockchain_pb.ContractInfo)) {
    throw new Error('Expected argument of type dac.blockchain.ContractInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_ContractInfo(buffer_arg) {
  return blockchain_pb.ContractInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_ContractInfoRequest(arg) {
  if (!(arg instanceof blockchain_pb.ContractInfoRequest)) {
    throw new Error('Expected argument of type dac.blockchain.ContractInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_ContractInfoRequest(buffer_arg) {
  return blockchain_pb.ContractInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_CostEstimateRequest(arg) {
  if (!(arg instanceof blockchain_pb.CostEstimateRequest)) {
    throw new Error('Expected argument of type dac.blockchain.CostEstimateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_CostEstimateRequest(buffer_arg) {
  return blockchain_pb.CostEstimateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_CostEstimateResponse(arg) {
  if (!(arg instanceof blockchain_pb.CostEstimateResponse)) {
    throw new Error('Expected argument of type dac.blockchain.CostEstimateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_CostEstimateResponse(buffer_arg) {
  return blockchain_pb.CostEstimateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_DeployContractRequest(arg) {
  if (!(arg instanceof blockchain_pb.DeployContractRequest)) {
    throw new Error('Expected argument of type dac.blockchain.DeployContractRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_DeployContractRequest(buffer_arg) {
  return blockchain_pb.DeployContractRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_DeploymentResponse(arg) {
  if (!(arg instanceof blockchain_pb.DeploymentResponse)) {
    throw new Error('Expected argument of type dac.blockchain.DeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_DeploymentResponse(buffer_arg) {
  return blockchain_pb.DeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_EthicalValidationRequest(arg) {
  if (!(arg instanceof blockchain_pb.EthicalValidationRequest)) {
    throw new Error('Expected argument of type dac.blockchain.EthicalValidationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_EthicalValidationRequest(buffer_arg) {
  return blockchain_pb.EthicalValidationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_EthicalValidationResponse(arg) {
  if (!(arg instanceof blockchain_pb.EthicalValidationResponse)) {
    throw new Error('Expected argument of type dac.blockchain.EthicalValidationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_EthicalValidationResponse(buffer_arg) {
  return blockchain_pb.EthicalValidationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_EventLogRequest(arg) {
  if (!(arg instanceof blockchain_pb.EventLogRequest)) {
    throw new Error('Expected argument of type dac.blockchain.EventLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_EventLogRequest(buffer_arg) {
  return blockchain_pb.EventLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_EventLogResponse(arg) {
  if (!(arg instanceof blockchain_pb.EventLogResponse)) {
    throw new Error('Expected argument of type dac.blockchain.EventLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_EventLogResponse(buffer_arg) {
  return blockchain_pb.EventLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_EventSubscriptionRequest(arg) {
  if (!(arg instanceof blockchain_pb.EventSubscriptionRequest)) {
    throw new Error('Expected argument of type dac.blockchain.EventSubscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_EventSubscriptionRequest(buffer_arg) {
  return blockchain_pb.EventSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_GasEstimateRequest(arg) {
  if (!(arg instanceof blockchain_pb.GasEstimateRequest)) {
    throw new Error('Expected argument of type dac.blockchain.GasEstimateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_GasEstimateRequest(buffer_arg) {
  return blockchain_pb.GasEstimateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_GasEstimateResponse(arg) {
  if (!(arg instanceof blockchain_pb.GasEstimateResponse)) {
    throw new Error('Expected argument of type dac.blockchain.GasEstimateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_GasEstimateResponse(buffer_arg) {
  return blockchain_pb.GasEstimateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_MemberRegistrationRequest(arg) {
  if (!(arg instanceof blockchain_pb.MemberRegistrationRequest)) {
    throw new Error('Expected argument of type dac.blockchain.MemberRegistrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_MemberRegistrationRequest(buffer_arg) {
  return blockchain_pb.MemberRegistrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_NFTBalanceRequest(arg) {
  if (!(arg instanceof blockchain_pb.NFTBalanceRequest)) {
    throw new Error('Expected argument of type dac.blockchain.NFTBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_NFTBalanceRequest(buffer_arg) {
  return blockchain_pb.NFTBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_NFTBalanceResponse(arg) {
  if (!(arg instanceof blockchain_pb.NFTBalanceResponse)) {
    throw new Error('Expected argument of type dac.blockchain.NFTBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_NFTBalanceResponse(buffer_arg) {
  return blockchain_pb.NFTBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_NetworkInfo(arg) {
  if (!(arg instanceof blockchain_pb.NetworkInfo)) {
    throw new Error('Expected argument of type dac.blockchain.NetworkInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_NetworkInfo(buffer_arg) {
  return blockchain_pb.NetworkInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_PrometheaDeploymentRequest(arg) {
  if (!(arg instanceof blockchain_pb.PrometheaDeploymentRequest)) {
    throw new Error('Expected argument of type dac.blockchain.PrometheaDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_PrometheaDeploymentRequest(buffer_arg) {
  return blockchain_pb.PrometheaDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_RegistrationResponse(arg) {
  if (!(arg instanceof blockchain_pb.RegistrationResponse)) {
    throw new Error('Expected argument of type dac.blockchain.RegistrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_RegistrationResponse(buffer_arg) {
  return blockchain_pb.RegistrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_TokenBalanceRequest(arg) {
  if (!(arg instanceof blockchain_pb.TokenBalanceRequest)) {
    throw new Error('Expected argument of type dac.blockchain.TokenBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_TokenBalanceRequest(buffer_arg) {
  return blockchain_pb.TokenBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_TokenBalanceResponse(arg) {
  if (!(arg instanceof blockchain_pb.TokenBalanceResponse)) {
    throw new Error('Expected argument of type dac.blockchain.TokenBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_TokenBalanceResponse(buffer_arg) {
  return blockchain_pb.TokenBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_TokenTransferRequest(arg) {
  if (!(arg instanceof blockchain_pb.TokenTransferRequest)) {
    throw new Error('Expected argument of type dac.blockchain.TokenTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_TokenTransferRequest(buffer_arg) {
  return blockchain_pb.TokenTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_TransactionEvent(arg) {
  if (!(arg instanceof blockchain_pb.TransactionEvent)) {
    throw new Error('Expected argument of type dac.blockchain.TransactionEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_TransactionEvent(buffer_arg) {
  return blockchain_pb.TransactionEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_TransactionInfo(arg) {
  if (!(arg instanceof blockchain_pb.TransactionInfo)) {
    throw new Error('Expected argument of type dac.blockchain.TransactionInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_TransactionInfo(buffer_arg) {
  return blockchain_pb.TransactionInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_TransactionMonitorRequest(arg) {
  if (!(arg instanceof blockchain_pb.TransactionMonitorRequest)) {
    throw new Error('Expected argument of type dac.blockchain.TransactionMonitorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_TransactionMonitorRequest(buffer_arg) {
  return blockchain_pb.TransactionMonitorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_TransactionQueryRequest(arg) {
  if (!(arg instanceof blockchain_pb.TransactionQueryRequest)) {
    throw new Error('Expected argument of type dac.blockchain.TransactionQueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_TransactionQueryRequest(buffer_arg) {
  return blockchain_pb.TransactionQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_TransactionReceipt(arg) {
  if (!(arg instanceof blockchain_pb.TransactionReceipt)) {
    throw new Error('Expected argument of type dac.blockchain.TransactionReceipt');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_TransactionReceipt(buffer_arg) {
  return blockchain_pb.TransactionReceipt.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_TransactionReceiptRequest(arg) {
  if (!(arg instanceof blockchain_pb.TransactionReceiptRequest)) {
    throw new Error('Expected argument of type dac.blockchain.TransactionReceiptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_TransactionReceiptRequest(buffer_arg) {
  return blockchain_pb.TransactionReceiptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_TransactionRequest(arg) {
  if (!(arg instanceof blockchain_pb.TransactionRequest)) {
    throw new Error('Expected argument of type dac.blockchain.TransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_TransactionRequest(buffer_arg) {
  return blockchain_pb.TransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dac_blockchain_TransactionResponse(arg) {
  if (!(arg instanceof blockchain_pb.TransactionResponse)) {
    throw new Error('Expected argument of type dac.blockchain.TransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dac_blockchain_TransactionResponse(buffer_arg) {
  return blockchain_pb.TransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Blockchain Services Definition
var BlockchainServiceService = exports.BlockchainServiceService = {
  // Smart Contract Management
deployContract: {
    path: '/dac.blockchain.BlockchainService/DeployContract',
    requestStream: false,
    responseStream: true,
    requestType: blockchain_pb.DeployContractRequest,
    responseType: blockchain_pb.DeploymentResponse,
    requestSerialize: serialize_dac_blockchain_DeployContractRequest,
    requestDeserialize: deserialize_dac_blockchain_DeployContractRequest,
    responseSerialize: serialize_dac_blockchain_DeploymentResponse,
    responseDeserialize: deserialize_dac_blockchain_DeploymentResponse,
  },
  getContractInfo: {
    path: '/dac.blockchain.BlockchainService/GetContractInfo',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.ContractInfoRequest,
    responseType: blockchain_pb.ContractInfo,
    requestSerialize: serialize_dac_blockchain_ContractInfoRequest,
    requestDeserialize: deserialize_dac_blockchain_ContractInfoRequest,
    responseSerialize: serialize_dac_blockchain_ContractInfo,
    responseDeserialize: deserialize_dac_blockchain_ContractInfo,
  },
  callContractMethod: {
    path: '/dac.blockchain.BlockchainService/CallContractMethod',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.ContractCallRequest,
    responseType: blockchain_pb.ContractCallResponse,
    requestSerialize: serialize_dac_blockchain_ContractCallRequest,
    requestDeserialize: deserialize_dac_blockchain_ContractCallRequest,
    responseSerialize: serialize_dac_blockchain_ContractCallResponse,
    responseDeserialize: deserialize_dac_blockchain_ContractCallResponse,
  },
  estimateGas: {
    path: '/dac.blockchain.BlockchainService/EstimateGas',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.GasEstimateRequest,
    responseType: blockchain_pb.GasEstimateResponse,
    requestSerialize: serialize_dac_blockchain_GasEstimateRequest,
    requestDeserialize: deserialize_dac_blockchain_GasEstimateRequest,
    responseSerialize: serialize_dac_blockchain_GasEstimateResponse,
    responseDeserialize: deserialize_dac_blockchain_GasEstimateResponse,
  },
  // Transaction Operations
sendTransaction: {
    path: '/dac.blockchain.BlockchainService/SendTransaction',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.TransactionRequest,
    responseType: blockchain_pb.TransactionResponse,
    requestSerialize: serialize_dac_blockchain_TransactionRequest,
    requestDeserialize: deserialize_dac_blockchain_TransactionRequest,
    responseSerialize: serialize_dac_blockchain_TransactionResponse,
    responseDeserialize: deserialize_dac_blockchain_TransactionResponse,
  },
  getTransaction: {
    path: '/dac.blockchain.BlockchainService/GetTransaction',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.TransactionQueryRequest,
    responseType: blockchain_pb.TransactionInfo,
    requestSerialize: serialize_dac_blockchain_TransactionQueryRequest,
    requestDeserialize: deserialize_dac_blockchain_TransactionQueryRequest,
    responseSerialize: serialize_dac_blockchain_TransactionInfo,
    responseDeserialize: deserialize_dac_blockchain_TransactionInfo,
  },
  getTransactionReceipt: {
    path: '/dac.blockchain.BlockchainService/GetTransactionReceipt',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.TransactionReceiptRequest,
    responseType: blockchain_pb.TransactionReceipt,
    requestSerialize: serialize_dac_blockchain_TransactionReceiptRequest,
    requestDeserialize: deserialize_dac_blockchain_TransactionReceiptRequest,
    responseSerialize: serialize_dac_blockchain_TransactionReceipt,
    responseDeserialize: deserialize_dac_blockchain_TransactionReceipt,
  },
  monitorTransactions: {
    path: '/dac.blockchain.BlockchainService/MonitorTransactions',
    requestStream: false,
    responseStream: true,
    requestType: blockchain_pb.TransactionMonitorRequest,
    responseType: blockchain_pb.TransactionEvent,
    requestSerialize: serialize_dac_blockchain_TransactionMonitorRequest,
    requestDeserialize: deserialize_dac_blockchain_TransactionMonitorRequest,
    responseSerialize: serialize_dac_blockchain_TransactionEvent,
    responseDeserialize: deserialize_dac_blockchain_TransactionEvent,
  },
  // Wallet and Account Management
getBalance: {
    path: '/dac.blockchain.BlockchainService/GetBalance',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.BalanceRequest,
    responseType: blockchain_pb.BalanceResponse,
    requestSerialize: serialize_dac_blockchain_BalanceRequest,
    requestDeserialize: deserialize_dac_blockchain_BalanceRequest,
    responseSerialize: serialize_dac_blockchain_BalanceResponse,
    responseDeserialize: deserialize_dac_blockchain_BalanceResponse,
  },
  getTokenBalance: {
    path: '/dac.blockchain.BlockchainService/GetTokenBalance',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.TokenBalanceRequest,
    responseType: blockchain_pb.TokenBalanceResponse,
    requestSerialize: serialize_dac_blockchain_TokenBalanceRequest,
    requestDeserialize: deserialize_dac_blockchain_TokenBalanceRequest,
    responseSerialize: serialize_dac_blockchain_TokenBalanceResponse,
    responseDeserialize: deserialize_dac_blockchain_TokenBalanceResponse,
  },
  getNFTBalance: {
    path: '/dac.blockchain.BlockchainService/GetNFTBalance',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.NFTBalanceRequest,
    responseType: blockchain_pb.NFTBalanceResponse,
    requestSerialize: serialize_dac_blockchain_NFTBalanceRequest,
    requestDeserialize: deserialize_dac_blockchain_NFTBalanceRequest,
    responseSerialize: serialize_dac_blockchain_NFTBalanceResponse,
    responseDeserialize: deserialize_dac_blockchain_NFTBalanceResponse,
  },
  transferTokens: {
    path: '/dac.blockchain.BlockchainService/TransferTokens',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.TokenTransferRequest,
    responseType: blockchain_pb.TransactionResponse,
    requestSerialize: serialize_dac_blockchain_TokenTransferRequest,
    requestDeserialize: deserialize_dac_blockchain_TokenTransferRequest,
    responseSerialize: serialize_dac_blockchain_TransactionResponse,
    responseDeserialize: deserialize_dac_blockchain_TransactionResponse,
  },
  // Network Operations
getNetworkInfo: {
    path: '/dac.blockchain.BlockchainService/GetNetworkInfo',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: blockchain_pb.NetworkInfo,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_dac_blockchain_NetworkInfo,
    responseDeserialize: deserialize_dac_blockchain_NetworkInfo,
  },
  getBlockInfo: {
    path: '/dac.blockchain.BlockchainService/GetBlockInfo',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.BlockInfoRequest,
    responseType: blockchain_pb.BlockInfo,
    requestSerialize: serialize_dac_blockchain_BlockInfoRequest,
    requestDeserialize: deserialize_dac_blockchain_BlockInfoRequest,
    responseSerialize: serialize_dac_blockchain_BlockInfo,
    responseDeserialize: deserialize_dac_blockchain_BlockInfo,
  },
  getLatestBlock: {
    path: '/dac.blockchain.BlockchainService/GetLatestBlock',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: blockchain_pb.BlockInfo,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_dac_blockchain_BlockInfo,
    responseDeserialize: deserialize_dac_blockchain_BlockInfo,
  },
  estimateTransactionCost: {
    path: '/dac.blockchain.BlockchainService/EstimateTransactionCost',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.CostEstimateRequest,
    responseType: blockchain_pb.CostEstimateResponse,
    requestSerialize: serialize_dac_blockchain_CostEstimateRequest,
    requestDeserialize: deserialize_dac_blockchain_CostEstimateRequest,
    responseSerialize: serialize_dac_blockchain_CostEstimateResponse,
    responseDeserialize: deserialize_dac_blockchain_CostEstimateResponse,
  },
  // Event Monitoring
subscribeToEvents: {
    path: '/dac.blockchain.BlockchainService/SubscribeToEvents',
    requestStream: false,
    responseStream: true,
    requestType: blockchain_pb.EventSubscriptionRequest,
    responseType: blockchain_pb.BlockchainEvent,
    requestSerialize: serialize_dac_blockchain_EventSubscriptionRequest,
    requestDeserialize: deserialize_dac_blockchain_EventSubscriptionRequest,
    responseSerialize: serialize_dac_blockchain_BlockchainEvent,
    responseDeserialize: deserialize_dac_blockchain_BlockchainEvent,
  },
  getEventLogs: {
    path: '/dac.blockchain.BlockchainService/GetEventLogs',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.EventLogRequest,
    responseType: blockchain_pb.EventLogResponse,
    requestSerialize: serialize_dac_blockchain_EventLogRequest,
    requestDeserialize: deserialize_dac_blockchain_EventLogRequest,
    responseSerialize: serialize_dac_blockchain_EventLogResponse,
    responseDeserialize: deserialize_dac_blockchain_EventLogResponse,
  },
  // Promethea DAC Specific Services
deployPrometheaCore: {
    path: '/dac.blockchain.BlockchainService/DeployPrometheaCore',
    requestStream: false,
    responseStream: true,
    requestType: blockchain_pb.PrometheaDeploymentRequest,
    responseType: blockchain_pb.DeploymentResponse,
    requestSerialize: serialize_dac_blockchain_PrometheaDeploymentRequest,
    requestDeserialize: deserialize_dac_blockchain_PrometheaDeploymentRequest,
    responseSerialize: serialize_dac_blockchain_DeploymentResponse,
    responseDeserialize: deserialize_dac_blockchain_DeploymentResponse,
  },
  getBeaconAddress: {
    path: '/dac.blockchain.BlockchainService/GetBeaconAddress',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: blockchain_pb.BeaconAddressResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_dac_blockchain_BeaconAddressResponse,
    responseDeserialize: deserialize_dac_blockchain_BeaconAddressResponse,
  },
  validateEthicalAlignment: {
    path: '/dac.blockchain.BlockchainService/ValidateEthicalAlignment',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.EthicalValidationRequest,
    responseType: blockchain_pb.EthicalValidationResponse,
    requestSerialize: serialize_dac_blockchain_EthicalValidationRequest,
    requestDeserialize: deserialize_dac_blockchain_EthicalValidationRequest,
    responseSerialize: serialize_dac_blockchain_EthicalValidationResponse,
    responseDeserialize: deserialize_dac_blockchain_EthicalValidationResponse,
  },
  registerDAOMember: {
    path: '/dac.blockchain.BlockchainService/RegisterDAOMember',
    requestStream: false,
    responseStream: false,
    requestType: blockchain_pb.MemberRegistrationRequest,
    responseType: blockchain_pb.RegistrationResponse,
    requestSerialize: serialize_dac_blockchain_MemberRegistrationRequest,
    requestDeserialize: deserialize_dac_blockchain_MemberRegistrationRequest,
    responseSerialize: serialize_dac_blockchain_RegistrationResponse,
    responseDeserialize: deserialize_dac_blockchain_RegistrationResponse,
  },
};

exports.BlockchainServiceClient = grpc.makeGenericClientConstructor(BlockchainServiceService, 'BlockchainService');

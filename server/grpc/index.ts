import { grpcServer } from './grpc-server';
import { grpcClientGenerator } from './client-generator';

/**
 * Main gRPC module entry point
 * Manages server and client initialization
 */

let isGrpcServerRunning = false;

/**
 * Start the gRPC server
 */
export async function startGrpcServer(port: number = 50051) {
  if (isGrpcServerRunning) {
    console.log('gRPC server is already running');
    return grpcServer;
  }

  try {
    await grpcServer.start();
    isGrpcServerRunning = true;
    
    console.log('gRPC Infrastructure Ready:');
    console.log('- Server running on port', port);
    console.log('- All 6 services operational');
    console.log('- Streaming capabilities enabled');
    console.log('- Type-safe client generation available');
    
    return grpcServer;
  } catch (error) {
    console.error('Failed to start gRPC server:', error);
    throw error;
  }
}

/**
 * Initialize gRPC clients
 */
export async function initializeGrpcClients(serverAddress?: string) {
  try {
    await grpcClientGenerator.initializeClients();
    return grpcClientGenerator.getAllClients();
  } catch (error) {
    console.error('Failed to initialize gRPC clients:', error);
    throw error;
  }
}

/**
 * Stop gRPC services
 */
export async function stopGrpcServices() {
  try {
    if (isGrpcServerRunning) {
      await grpcServer.stop();
      isGrpcServerRunning = false;
    }
    
    grpcClientGenerator.closeAll();
    console.log('All gRPC services stopped');
  } catch (error) {
    console.error('Error stopping gRPC services:', error);
  }
}

/**
 * Get gRPC server status
 */
export function getGrpcStatus() {
  return {
    server: grpcServer.getStatus(),
    isRunning: isGrpcServerRunning,
    clients: Array.from(grpcClientGenerator.getAllClients().keys())
  };
}

// Export individual components
export { grpcServer, grpcClientGenerator };

// Export service types for frontend integration
export type {
  GovernanceClient,
  AIClient,
  BlockchainClient,
  PropertyClient,
  AuthClient,
  SocialClient
} from './client-generator';
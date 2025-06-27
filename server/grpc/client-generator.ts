import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

/**
 * gRPC Client Generator
 * Creates type-safe client instances for all services
 */
export class GRPCClientGenerator {
  private clients: Map<string, any> = new Map();
  private serverAddress: string;

  constructor(serverAddress: string = 'localhost:50051') {
    this.serverAddress = serverAddress;
  }

  /**
   * Initialize all gRPC clients
   */
  async initializeClients() {
    const protoPath = path.join(process.cwd(), 'proto');

    // Initialize Governance Client
    const governanceClient = await this.createClient(
      path.join(protoPath, 'governance.proto'),
      'dac.governance.GovernanceService'
    );
    this.clients.set('governance', governanceClient);

    // Initialize AI Services Client
    const aiClient = await this.createClient(
      path.join(protoPath, 'ai-services.proto'),
      'dac.ai.AIService'
    );
    this.clients.set('ai', aiClient);

    // Initialize Blockchain Client
    const blockchainClient = await this.createClient(
      path.join(protoPath, 'blockchain.proto'),
      'dac.blockchain.BlockchainService'
    );
    this.clients.set('blockchain', blockchainClient);

    // Initialize Property Client
    const propertyClient = await this.createClient(
      path.join(protoPath, 'properties.proto'),
      'dac.properties.PropertyService'
    );
    this.clients.set('property', propertyClient);

    // Initialize Auth Client
    const authClient = await this.createClient(
      path.join(protoPath, 'auth.proto'),
      'dac.auth.AuthService'
    );
    this.clients.set('auth', authClient);

    // Initialize Social Client
    const socialClient = await this.createClient(
      path.join(protoPath, 'social.proto'),
      'dac.social.SocialService'
    );
    this.clients.set('social', socialClient);

    console.log('All gRPC clients initialized successfully');
    return this.clients;
  }

  /**
   * Create a gRPC client for a specific service
   */
  private async createClient(protoFile: string, servicePath: string) {
    const packageDefinition = protoLoader.loadSync(protoFile, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    });

    const grpcObject = grpc.loadPackageDefinition(packageDefinition);
    
    // Navigate to the service using the path
    const pathParts = servicePath.split('.');
    let service = grpcObject;
    for (const part of pathParts) {
      service = service[part];
    }

    return new service(
      this.serverAddress,
      grpc.credentials.createInsecure()
    );
  }

  /**
   * Get a specific client
   */
  getClient(serviceName: string) {
    return this.clients.get(serviceName);
  }

  /**
   * Get all clients
   */
  getAllClients() {
    return this.clients;
  }

  /**
   * Close all client connections
   */
  closeAll() {
    this.clients.forEach((client, name) => {
      try {
        client.close();
        console.log(`${name} client closed`);
      } catch (error) {
        console.error(`Error closing ${name} client:`, error);
      }
    });
    this.clients.clear();
  }
}

/**
 * Type-safe client interfaces for frontend integration
 */
export interface GovernanceClient {
  createProposal(request: any, callback: (error: any, response: any) => void): void;
  getProposal(request: any, callback: (error: any, response: any) => void): void;
  listProposals(request: any, callback: (error: any, response: any) => void): void;
  castVote(request: any, callback: (error: any, response: any) => void): void;
  createDelegation(request: any, callback: (error: any, response: any) => void): void;
  getGovernanceStats(request: any, callback: (error: any, response: any) => void): void;
  getVotingResults(request: any): grpc.ClientReadableStream<any>;
  streamGovernanceEvents(request: any): grpc.ClientReadableStream<any>;
}

export interface AIClient {
  generatePropertyValuation(request: any): grpc.ClientReadableStream<any>;
  generatePropertyDescription(request: any, callback: (error: any, response: any) => void): void;
  analyzeProposalContent(request: any, callback: (error: any, response: any) => void): void;
  processReviewBatch(): grpc.ClientDuplexStream<any, any>;
  getModelHealth(request: any, callback: (error: any, response: any) => void): void;
}

export interface BlockchainClient {
  deployContract(request: any): grpc.ClientReadableStream<any>;
  getContractInfo(request: any, callback: (error: any, response: any) => void): void;
  sendTransaction(request: any, callback: (error: any, response: any) => void): void;
  monitorTransactions(request: any): grpc.ClientReadableStream<any>;
  getBalance(request: any, callback: (error: any, response: any) => void): void;
}

export interface PropertyClient {
  createProperty(request: any, callback: (error: any, response: any) => void): void;
  getProperty(request: any, callback: (error: any, response: any) => void): void;
  searchProperties(request: any, callback: (error: any, response: any) => void): void;
  tokenizeProperty(request: any): grpc.ClientReadableStream<any>;
  requestValuation(request: any): grpc.ClientReadableStream<any>;
}

export interface AuthClient {
  register(request: any, callback: (error: any, response: any) => void): void;
  login(request: any, callback: (error: any, response: any) => void): void;
  verifyToken(request: any, callback: (error: any, response: any) => void): void;
  linkWallet(request: any, callback: (error: any, response: any) => void): void;
  setupMFA(request: any, callback: (error: any, response: any) => void): void;
}

export interface SocialClient {
  createProfile(request: any, callback: (error: any, response: any) => void): void;
  createPost(request: any, callback: (error: any, response: any) => void): void;
  getFeed(request: any): grpc.ClientReadableStream<any>;
  sendMessage(request: any, callback: (error: any, response: any) => void): void;
  followUser(request: any, callback: (error: any, response: any) => void): void;
}

// Export singleton instance
export const grpcClientGenerator = new GRPCClientGenerator();
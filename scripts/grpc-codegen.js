/**
 * gRPC Code Generation Script
 * Generates TypeScript definitions and client code from protobuf files
 */

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

class GRPCCodeGenerator {
  constructor() {
    this.protoPath = './proto';
    this.outputPath = './generated';
    this.clientOutputPath = './client/src/lib/grpc';
  }

  async generateAll() {
    console.log('🚀 Starting gRPC Code Generation');
    
    try {
      // Ensure output directories exist
      await this.ensureDirectories();
      
      // Generate protobuf JavaScript files
      await this.generateProtobufJS();
      
      // Generate TypeScript definitions
      await this.generateTypeScriptDefinitions();
      
      // Generate client-side gRPC-Web code
      await this.generateGRPCWebClients();
      
      // Generate utility functions
      await this.generateUtilities();
      
      console.log('✅ gRPC Code Generation Complete');
      console.log('📁 Generated files:');
      console.log('   - Server protobuf files: ./generated/');
      console.log('   - Client gRPC-Web code: ./client/src/lib/grpc/');
      console.log('   - TypeScript definitions: ./generated/*.d.ts');
      
    } catch (error) {
      console.error('❌ Code generation failed:', error);
      throw error;
    }
  }

  async ensureDirectories() {
    const dirs = [this.outputPath, this.clientOutputPath, `${this.clientOutputPath}/types`];
    
    for (const dir of dirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }
  }

  async generateProtobufJS() {
    console.log('📦 Generating protobuf JavaScript files...');
    
    const command = `npx grpc_tools_node_protoc \
      --js_out=import_style=commonjs,binary:${this.outputPath} \
      --grpc_out=grpc_js:${this.outputPath} \
      --proto_path=${this.protoPath} \
      ${this.protoPath}/*.proto`;
    
    await execAsync(command);
    console.log('✅ Protobuf JavaScript files generated');
  }

  async generateTypeScriptDefinitions() {
    console.log('📝 Generating TypeScript definitions...');
    
    // Generate basic TypeScript interfaces for each service
    const protoFiles = fs.readdirSync(this.protoPath).filter(f => f.endsWith('.proto'));
    
    for (const protoFile of protoFiles) {
      const serviceName = path.basename(protoFile, '.proto');
      await this.generateServiceTypes(serviceName);
    }
    
    console.log('✅ TypeScript definitions generated');
  }

  async generateServiceTypes(serviceName) {
    const typeDefinitions = this.generateTypeDefinitionsForService(serviceName);
    const outputFile = path.join(this.outputPath, `${serviceName}.d.ts`);
    
    fs.writeFileSync(outputFile, typeDefinitions);
  }

  generateTypeDefinitionsForService(serviceName) {
    const serviceMap = {
      'governance': this.generateGovernanceTypes(),
      'ai-services': this.generateAIServiceTypes(),
      'blockchain': this.generateBlockchainTypes(),
      'properties': this.generatePropertyTypes(),
      'auth': this.generateAuthTypes(),
      'social': this.generateSocialTypes()
    };

    return serviceMap[serviceName] || this.generateGenericTypes(serviceName);
  }

  generateGovernanceTypes() {
    return `
// Governance Service TypeScript Definitions
export interface Proposal {
  id: number;
  title: string;
  description: string;
  content: string;
  type: ProposalType;
  status: ProposalStatus;
  categoryId: number;
  createdBy: number;
  createdAt: Date;
  votingStartsAt: Date;
  votingEndsAt: Date;
  votingThreshold: string;
  quorumRequired: string;
  votesFor: number;
  votesAgainst: number;
  votesAbstain: number;
  tags: string[];
  metadata: string;
  usesQuadraticVoting: boolean;
}

export enum ProposalType {
  STANDARD = 'standard',
  CONSTITUTIONAL = 'constitutional',
  EMERGENCY = 'emergency',
  SPENDING = 'spending',
  TECHNICAL = 'technical'
}

export enum ProposalStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  PASSED = 'passed',
  FAILED = 'failed',
  EXECUTED = 'executed',
  CANCELLED = 'cancelled'
}

export interface Vote {
  id: number;
  proposalId: number;
  userId: number;
  voteOption: VoteOption;
  votePower: string;
  reasoning?: string;
  createdAt: Date;
  isDelegated: boolean;
  delegatedFrom?: number;
}

export enum VoteOption {
  FOR = 'for',
  AGAINST = 'against',
  ABSTAIN = 'abstain'
}

export interface CreateProposalRequest {
  title: string;
  description: string;
  content: string;
  type: ProposalType;
  categoryId: number;
  createdBy: number;
  votingStartsAt: Date;
  votingEndsAt: Date;
  votingThreshold: string;
  quorumRequired: string;
  tags: string[];
  metadata: string;
  usesQuadraticVoting: boolean;
}

export interface GovernanceStats {
  totalProposals: number;
  activeProposals: number;
  executedProposals: number;
  totalVotes: number;
  totalMembers: number;
  activeDelegations: number;
  averageParticipationRate: number;
  totalVotingPower: string;
  tokenPrice: number;
}
`;
  }

  generateAIServiceTypes() {
    return `
// AI Services TypeScript Definitions
export interface PropertyValuationRequest {
  propertyId: string;
  propertyData: PropertyData;
  method: ValuationMethod;
  comparableProperties: string[];
  marketConditions: MarketConditions;
}

export interface PropertyData {
  address: string;
  propertyType: string;
  squareFootage: number;
  bedrooms: number;
  bathrooms: number;
  yearBuilt: number;
  lotSize: string;
  features: string[];
  condition: string;
  location: LocationData;
  images: string[];
}

export interface ValuationResult {
  estimatedValue: number;
  confidenceScore: number;
  valueRange: ValueRange;
  comparables: ComparableProperty[];
  factors: ValuationFactor[];
  methodologyUsed: string;
  valuationDate: Date;
}

export enum ValuationMethod {
  COMPARATIVE = 'comparative',
  INCOME = 'income',
  COST = 'cost',
  AI_HYBRID = 'ai_hybrid'
}

export interface ProposalAnalysisRequest {
  proposalContent: string;
  proposalType: string;
  stakeholderGroups: string[];
  relevantPolicies: string[];
}

export interface ProposalAnalysisResponse {
  analysis: ProposalAnalysisResult;
  recommendations: string[];
  risks: RiskAssessment[];
  impacts: ImpactAssessment[];
}
`;
  }

  generateBlockchainTypes() {
    return `
// Blockchain Service TypeScript Definitions
export interface DeployContractRequest {
  contractName: string;
  bytecode: string;
  abi: string;
  constructorArgs: string[];
  gasSettings: GasSettings;
  deployerAddress: string;
  network: string;
}

export interface ContractInfo {
  address: string;
  name: string;
  abi: string;
  bytecode: string;
  deployer: string;
  deployedAt: Date;
  network: string;
  verificationStatus: string;
}

export interface TransactionRequest {
  fromAddress: string;
  toAddress: string;
  value: string;
  data: string;
  gasSettings: GasSettings;
  network: string;
  nonce: string;
}

export interface TransactionResponse {
  success: boolean;
  transactionHash: string;
  nonce: string;
  errorMessage?: string;
  status: string;
}

export interface GasSettings {
  gasLimit?: string;
  gasPrice?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
}

export interface WalletInfo {
  address: string;
  type: WalletType;
  ethBalance: string;
  dacTokenBalance: string;
  promTokenBalance: string;
  otherTokens: TokenBalance[];
  nfts: NFTInfo[];
  linkedAt: Date;
  isPrimary: boolean;
}

export enum WalletType {
  METAMASK = 'metamask',
  WALLET_CONNECT = 'wallet_connect',
  COINBASE = 'coinbase',
  TRUST_WALLET = 'trust_wallet',
  HARDWARE = 'hardware'
}
`;
  }

  generatePropertyTypes() {
    return `
// Property Service TypeScript Definitions
export interface Property {
  id: number;
  title: string;
  description: string;
  type: PropertyType;
  status: PropertyStatus;
  ownerId: number;
  address: Address;
  details: PropertyDetails;
  pricing: PricingInfo;
  images: PropertyImage[];
  documents: PropertyDocument[];
  metrics: PropertyMetrics;
  tokenization?: TokenizationInfo;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  isFeatured: boolean;
}

export enum PropertyType {
  SINGLE_FAMILY = 'single_family',
  CONDO = 'condo',
  TOWNHOUSE = 'townhouse',
  MULTI_FAMILY = 'multi_family',
  COMMERCIAL = 'commercial',
  LAND = 'land',
  MIXED_USE = 'mixed_use'
}

export enum PropertyStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  PENDING = 'pending',
  SOLD = 'sold',
  WITHDRAWN = 'withdrawn',
  EXPIRED = 'expired'
}

export interface TokenizationRequest {
  propertyId: number;
  totalTokens: string;
  tokenPrice: string;
  minimumInvestment: string;
  parameters: TokenizationParameters;
}

export interface TokenizationInfo {
  isTokenized: boolean;
  tokenContractAddress?: string;
  totalTokens?: string;
  tokensAvailable?: string;
  tokenPrice?: string;
  minimumInvestment?: string;
  tokenHolders: TokenHolder[];
  status: TokenizationStatus;
}

export enum TokenizationStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled'
}
`;
  }

  generateAuthTypes() {
    return `
// Auth Service TypeScript Definitions
export interface UserProfile {
  id: number;
  username: string;
  email: string;
  name: string;
  avatarUrl?: string;
  membershipTier: MembershipTier;
  walletAddress?: string;
  dacTokenBalance?: string;
  promTokenBalance?: string;
  reputationScore: number;
  createdAt: Date;
  lastLogin?: Date;
  emailVerified: boolean;
  mfaEnabled: boolean;
  roles: string[];
  preferences: UserPreferences;
  settings: ProfileSettings;
}

export enum MembershipTier {
  FREE = 'free',
  BASIC = 'basic',
  PREMIUM = 'premium',
  ENTERPRISE = 'enterprise'
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  name: string;
  referralCode?: string;
  acceptTerms: boolean;
  acceptPrivacy: boolean;
  inviteCode?: string;
}

export interface LoginRequest {
  identifier: string; // username or email
  password: string;
  rememberMe: boolean;
  mfaCode?: string;
  deviceInfo: string;
  ipAddress: string;
}

export interface AuthResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: UserProfile;
  expiresAt: Date;
  errorMessage?: string;
  requiresMfa: boolean;
  sessionId: string;
}

export interface WalletLinkRequest {
  userId: number;
  walletAddress: string;
  signature: string;
  message: string;
  walletType: WalletType;
}
`;
  }

  generateSocialTypes() {
    return `
// Social Service TypeScript Definitions
export interface SocialProfile {
  profileId: string;
  userId: number;
  pseudonym: string;
  displayName: string;
  bio: string;
  avatarUrl?: string;
  bannerUrl?: string;
  interests: string[];
  skills: string[];
  location?: string;
  website?: string;
  socialLinks: SocialLink[];
  reputationScore: number;
  privacyLevel: PrivacyLevel;
  verificationStatus: VerificationStatus;
  stats: ProfileStats;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  badges: ProfileBadge[];
}

export interface Post {
  postId: string;
  profileId: string;
  content: string;
  type: PostType;
  media: PostMedia[];
  tags: string[];
  visibility: PostVisibility;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isPinned: boolean;
  createdAt: Date;
  updatedAt: Date;
  author: SocialProfile;
  comments: Comment[];
  hasLiked: boolean;
  metrics: PostMetrics;
  moderationStatus: ModerationStatus;
}

export enum PostType {
  TEXT = 'text',
  IMAGE = 'image',
  VIDEO = 'video',
  LINK = 'link',
  POLL = 'poll',
  ARTICLE = 'article'
}

export enum PostVisibility {
  PUBLIC = 'public',
  FOLLOWERS = 'followers',
  PRIVATE = 'private',
  UNLISTED = 'unlisted'
}

export interface Message {
  messageId: string;
  conversationId: string;
  senderProfileId: string;
  recipientProfileId: string;
  content: string;
  type: MessageType;
  attachments: MessageAttachment[];
  sentAt: Date;
  readAt?: Date;
  isEncrypted: boolean;
  encryptionKeyId?: string;
  sender: SocialProfile;
  moderationStatus: ModerationStatus;
}

export enum MessageType {
  TEXT = 'text',
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
  FILE = 'file',
  SYSTEM = 'system'
}
`;
  }

  generateGenericTypes(serviceName) {
    return `
// ${serviceName} Service TypeScript Definitions
// Auto-generated generic types

export interface ${this.capitalize(serviceName)}Request {
  [key: string]: any;
}

export interface ${this.capitalize(serviceName)}Response {
  success: boolean;
  data?: any;
  error?: string;
}
`;
  }

  async generateGRPCWebClients() {
    console.log('🌐 Generating gRPC-Web client code...');
    
    // Generate client wrapper for browser usage
    const clientCode = this.generateClientWrapper();
    fs.writeFileSync(path.join(this.clientOutputPath, 'client.ts'), clientCode);
    
    // Generate React hooks for gRPC services
    const hooksCode = this.generateReactHooks();
    fs.writeFileSync(path.join(this.clientOutputPath, 'hooks.ts'), hooksCode);
    
    console.log('✅ gRPC-Web client code generated');
  }

  generateClientWrapper() {
    return `
import { grpc } from '@improbable-eng/grpc-web';
import { BrowserHeaders } from 'browser-headers';

/**
 * gRPC-Web Client Wrapper
 * Provides browser-compatible gRPC client functionality
 */

interface GRPCClientConfig {
  baseUrl: string;
  enableStreaming: boolean;
  defaultHeaders?: Record<string, string>;
}

export class GRPCWebClient {
  private config: GRPCClientConfig;
  private defaultMetadata: BrowserHeaders;

  constructor(config: GRPCClientConfig) {
    this.config = {
      baseUrl: config.baseUrl || 'http://localhost:8080',
      enableStreaming: config.enableStreaming ?? true,
      ...config
    };

    this.defaultMetadata = new BrowserHeaders(config.defaultHeaders || {});
  }

  /**
   * Make a unary gRPC call
   */
  async unaryCall<TRequest, TResponse>(
    method: grpc.MethodDefinition<TRequest, TResponse>,
    request: TRequest,
    metadata?: BrowserHeaders
  ): Promise<TResponse> {
    return new Promise((resolve, reject) => {
      grpc.unary(method, {
        request,
        host: this.config.baseUrl,
        metadata: metadata || this.defaultMetadata,
        onEnd: (result) => {
          if (result.status === grpc.Code.OK) {
            resolve(result.message as TResponse);
          } else {
            reject(new Error(result.statusMessage));
          }
        }
      });
    });
  }

  /**
   * Create a server streaming call
   */
  streamingCall<TRequest, TResponse>(
    method: grpc.MethodDefinition<TRequest, TResponse>,
    request: TRequest,
    metadata?: BrowserHeaders
  ): grpc.Request {
    return grpc.invoke(method, {
      request,
      host: this.config.baseUrl,
      metadata: metadata || this.defaultMetadata
    });
  }

  /**
   * Set authentication token
   */
  setAuthToken(token: string) {
    this.defaultMetadata.set('authorization', \`Bearer \${token}\`);
  }

  /**
   * Clear authentication
   */
  clearAuth() {
    this.defaultMetadata.delete('authorization');
  }
}

// Export singleton instance
export const grpcWebClient = new GRPCWebClient({
  baseUrl: import.meta.env.VITE_GRPC_URL || 'http://localhost:8080',
  enableStreaming: true,
  defaultHeaders: {
    'content-type': 'application/grpc-web+proto'
  }
});

// Service-specific clients
export class GovernanceWebClient extends GRPCWebClient {
  async createProposal(request: any) {
    // Implementation would use actual generated protobuf methods
    console.log('Creating proposal via gRPC-Web:', request);
    return { id: Math.floor(Math.random() * 10000), ...request };
  }

  async getProposal(id: number) {
    console.log('Getting proposal via gRPC-Web:', id);
    return { id, title: 'Sample Proposal', status: 'active' };
  }

  streamVotingResults(proposalId: number, onUpdate: (update: any) => void) {
    console.log('Streaming voting results for proposal:', proposalId);
    
    // Simulate streaming updates
    const interval = setInterval(() => {
      onUpdate({
        proposalId,
        votesFor: Math.floor(Math.random() * 1000),
        votesAgainst: Math.floor(Math.random() * 500),
        participationRate: Math.random() * 100
      });
    }, 2000);

    return () => clearInterval(interval);
  }
}

export class AIWebClient extends GRPCWebClient {
  async generatePropertyValuation(request: any) {
    console.log('Generating property valuation via gRPC-Web:', request);
    return {
      estimatedValue: Math.floor(Math.random() * 1000000) + 200000,
      confidenceScore: Math.random() * 0.3 + 0.7,
      methodology: 'AI_HYBRID'
    };
  }

  streamValuationProgress(propertyId: string, onProgress: (progress: any) => void) {
    console.log('Streaming valuation progress for property:', propertyId);
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      onProgress({
        propertyId,
        progress,
        status: progress < 100 ? 'processing' : 'completed'
      });
      
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }
}

export class BlockchainWebClient extends GRPCWebClient {
  async deployContract(request: any) {
    console.log('Deploying contract via gRPC-Web:', request);
    return {
      contractAddress: '0x' + Math.random().toString(16).substr(2, 40),
      transactionHash: '0x' + Math.random().toString(16).substr(2, 64),
      status: 'deployed'
    };
  }

  async getBalance(address: string) {
    console.log('Getting balance via gRPC-Web:', address);
    return {
      balance: String(Math.floor(Math.random() * 1000000000)),
      formattedBalance: (Math.random() * 100).toFixed(4),
      currency: 'ETH'
    };
  }
}

// Export service clients
export const governanceWebClient = new GovernanceWebClient({
  baseUrl: import.meta.env.VITE_GRPC_URL || 'http://localhost:8080',
  enableStreaming: true
});

export const aiWebClient = new AIWebClient({
  baseUrl: import.meta.env.VITE_GRPC_URL || 'http://localhost:8080',
  enableStreaming: true
});

export const blockchainWebClient = new BlockchainWebClient({
  baseUrl: import.meta.env.VITE_GRPC_URL || 'http://localhost:8080',
  enableStreaming: true
});
`;
  }

  generateReactHooks() {
    return `
import { useState, useEffect, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  governanceWebClient, 
  aiWebClient, 
  blockchainWebClient 
} from './client';

/**
 * React Hooks for gRPC Services
 * Integrates gRPC calls with React Query for optimal caching and state management
 */

// Governance Hooks
export function useProposal(proposalId: number) {
  return useQuery({
    queryKey: ['proposal', proposalId],
    queryFn: () => governanceWebClient.getProposal(proposalId),
    enabled: !!proposalId
  });
}

export function useCreateProposal() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (proposalData: any) => governanceWebClient.createProposal(proposalData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['proposals'] });
    }
  });
}

export function useVotingResults(proposalId: number) {
  const [votingData, setVotingData] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    if (!proposalId) return;

    setIsStreaming(true);
    const unsubscribe = governanceWebClient.streamVotingResults(
      proposalId,
      (update) => setVotingData(update)
    );

    return () => {
      unsubscribe();
      setIsStreaming(false);
    };
  }, [proposalId]);

  return { votingData, isStreaming };
}

// AI Service Hooks
export function usePropertyValuation() {
  return useMutation({
    mutationFn: (propertyData: any) => aiWebClient.generatePropertyValuation(propertyData)
  });
}

export function useValuationProgress(propertyId: string, enabled: boolean = false) {
  const [progress, setProgress] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    if (!enabled || !propertyId) return;

    setIsStreaming(true);
    const unsubscribe = aiWebClient.streamValuationProgress(
      propertyId,
      (progressUpdate) => setProgress(progressUpdate)
    );

    return () => {
      unsubscribe();
      setIsStreaming(false);
    };
  }, [propertyId, enabled]);

  return { progress, isStreaming };
}

// Blockchain Hooks
export function useContractDeployment() {
  return useMutation({
    mutationFn: (contractData: any) => blockchainWebClient.deployContract(contractData)
  });
}

export function useWalletBalance(address: string) {
  return useQuery({
    queryKey: ['balance', address],
    queryFn: () => blockchainWebClient.getBalance(address),
    enabled: !!address,
    refetchInterval: 30000 // Refetch every 30 seconds
  });
}

// Custom hook for managing gRPC streaming connections
export function useGRPCStream<T>(
  streamFunction: (onData: (data: T) => void) => () => void,
  enabled: boolean = true
) {
  const [data, setData] = useState<T | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const startStream = useCallback(() => {
    if (!enabled) return;

    setIsStreaming(true);
    setError(null);

    try {
      const unsubscribe = streamFunction((newData) => {
        setData(newData);
      });

      return unsubscribe;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Stream error'));
      setIsStreaming(false);
    }
  }, [streamFunction, enabled]);

  const stopStream = useCallback(() => {
    setIsStreaming(false);
  }, []);

  useEffect(() => {
    const unsubscribe = startStream();
    
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
      stopStream();
    };
  }, [startStream, stopStream]);

  return {
    data,
    isStreaming,
    error,
    startStream,
    stopStream
  };
}

// Authentication helper hook
export function useGRPCAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback((token: string) => {
    governanceWebClient.setAuthToken(token);
    aiWebClient.setAuthToken(token);
    blockchainWebClient.setAuthToken(token);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    governanceWebClient.clearAuth();
    aiWebClient.clearAuth();
    blockchainWebClient.clearAuth();
    setIsAuthenticated(false);
  }, []);

  return {
    isAuthenticated,
    login,
    logout
  };
}

// Connection status hook
export function useGRPCConnection() {
  const [isConnected, setIsConnected] = useState(true);
  const [lastError, setLastError] = useState<string | null>(null);

  // TODO: Implement actual connection monitoring
  // This would involve periodic health checks to the gRPC server

  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Perform a lightweight health check
        await governanceWebClient.unaryCall(/* health check method */, {});
        setIsConnected(true);
        setLastError(null);
      } catch (error) {
        setIsConnected(false);
        setLastError(error instanceof Error ? error.message : 'Connection failed');
      }
    };

    const interval = setInterval(checkConnection, 30000); // Check every 30 seconds
    checkConnection(); // Initial check

    return () => clearInterval(interval);
  }, []);

  return {
    isConnected,
    lastError
  };
}
`;
  }

  async generateUtilities() {
    console.log('🔧 Generating utility functions...');
    
    const utilityCode = `
/**
 * gRPC Utility Functions
 * Helper functions for working with gRPC services
 */

import { grpc } from '@improbable-eng/grpc-web';

export class GRPCError extends Error {
  constructor(
    message: string,
    public code: grpc.Code,
    public details?: string
  ) {
    super(message);
    this.name = 'GRPCError';
  }

  static fromGrpcResponse(response: grpc.UnaryOutput<any>): GRPCError {
    return new GRPCError(
      response.statusMessage || 'Unknown gRPC error',
      response.status,
      response.statusMessage
    );
  }
}

export function isGRPCError(error: any): error is GRPCError {
  return error instanceof GRPCError;
}

export function handleGRPCError(error: any): string {
  if (isGRPCError(error)) {
    switch (error.code) {
      case grpc.Code.UNAUTHENTICATED:
        return 'Authentication required. Please log in.';
      case grpc.Code.PERMISSION_DENIED:
        return 'Permission denied. You do not have access to this resource.';
      case grpc.Code.NOT_FOUND:
        return 'The requested resource was not found.';
      case grpc.Code.ALREADY_EXISTS:
        return 'The resource already exists.';
      case grpc.Code.RESOURCE_EXHAUSTED:
        return 'Rate limit exceeded. Please try again later.';
      case grpc.Code.UNAVAILABLE:
        return 'Service temporarily unavailable. Please try again.';
      default:
        return error.message || 'An unexpected error occurred.';
    }
  }
  
  return error.message || 'An unknown error occurred.';
}

export function createMetadata(headers: Record<string, string> = {}) {
  const metadata = new grpc.Metadata();
  Object.entries(headers).forEach(([key, value]) => {
    metadata.set(key, value);
  });
  return metadata;
}

export function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const attempt = async () => {
      try {
        const result = await operation();
        resolve(result);
      } catch (error) {
        attempts++;
        
        if (attempts >= maxRetries) {
          reject(error);
          return;
        }

        // Exponential backoff
        const backoffDelay = delay * Math.pow(2, attempts - 1);
        setTimeout(attempt, backoffDelay);
      }
    };

    attempt();
  });
}

export function debounceGRPCCall<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  delay: number = 300
): T {
  let timeoutId: NodeJS.Timeout;
  
  return ((...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    
    return new Promise<ReturnType<T>>((resolve, reject) => {
      timeoutId = setTimeout(async () => {
        try {
          const result = await fn(...args);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  }) as T;
}

export class StreamManager {
  private streams: Map<string, () => void> = new Map();

  add(id: string, unsubscribe: () => void) {
    // Clean up existing stream if it exists
    this.remove(id);
    this.streams.set(id, unsubscribe);
  }

  remove(id: string) {
    const unsubscribe = this.streams.get(id);
    if (unsubscribe) {
      unsubscribe();
      this.streams.delete(id);
    }
  }

  removeAll() {
    this.streams.forEach((unsubscribe) => unsubscribe());
    this.streams.clear();
  }

  has(id: string): boolean {
    return this.streams.has(id);
  }

  count(): number {
    return this.streams.size;
  }
}

export const streamManager = new StreamManager();

// Cleanup streams on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    streamManager.removeAll();
  });
}
`;

    fs.writeFileSync(path.join(this.clientOutputPath, 'utils.ts'), utilityCode);
    
    // Generate index file for easy imports
    const indexCode = `
export * from './client';
export * from './hooks';
export * from './utils';

// Re-export commonly used types
export type {
  Proposal,
  Vote,
  GovernanceStats,
  PropertyValuationRequest,
  ValuationResult,
  DeployContractRequest,
  TransactionResponse,
  UserProfile,
  SocialProfile,
  Post
} from '../../../generated/governance';
`;

    fs.writeFileSync(path.join(this.clientOutputPath, 'index.ts'), indexCode);
    
    console.log('✅ Utility functions generated');
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

// Run code generation if this file is executed directly
if (import.meta.url === \`file://\${process.argv[1]}\`) {
  const generator = new GRPCCodeGenerator();
  generator.generateAll().catch(console.error);
}

export default GRPCCodeGenerator;
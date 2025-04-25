import { 
  users, type User, type InsertUser,
  properties, type Property, type InsertProperty,
  proposals, type Proposal, type InsertProposal,
  votes, type Vote, type InsertVote,
  tasks, type Task, type InsertTask,
  membershipTiers, type MembershipTier, type InsertMembershipTier,
  serviceCategories, type ServiceCategory, type InsertServiceCategory,
  serviceProviders, type ServiceProvider, type InsertServiceProvider,
  apiCredentials, type ApiCredential, type InsertApiCredential,
  serviceIntegrations, type ServiceIntegration, type InsertServiceIntegration,
  whitelabelSettings, type WhitelabelSetting, type InsertWhitelabelSetting,
  apiUsageLogs, type ApiUsageLog, type InsertApiUsageLog,
  reviews, type Review, type InsertReview,
  governanceProposals, type GovernanceProposal, type InsertGovernanceProposal,
  workerRatings, type WorkerRating, type InsertWorkerRating,
  workerReputations, type WorkerReputation, type InsertWorkerReputation,
  workerBadges, type WorkerBadge, type InsertWorkerBadge,
  escrows, type Escrow, type InsertEscrow,
  titleTransfers, type TitleTransfer, type InsertTitleTransfer,
  arbitrators, type Arbitrator, type InsertArbitrator
} from "@shared/schema";
import * as schema from "@shared/schema";
import { db } from "./db";
import { eq, like, and, or, desc, asc, sql } from "drizzle-orm";

// Interfaces for community features not in schema.ts
interface CommunityPost {
  id: number;
  title: string;
  content: string;
  authorId: number;
  authorName: string;
  authorAvatar?: string;
  postedAt: string;
  likes: number;
  replies: number;
  tags: string[];
}

interface CommunityEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  virtual: boolean;
  organizer: string;
  attendees: number;
}

interface CommunityResource {
  id: number;
  title: string;
  type: 'guide' | 'video' | 'webinar' | 'case-study';
  description: string;
  thumbnail?: string;
  author: string;
  publishedAt: string;
  likes: number;
  downloads: number;
}

interface CommunityMember {
  id: number;
  name: string;
  avatar?: string;
  role: string;
  badges: string[];
  memberSince: string;
  reputation: number;
}

// Modify the storage interface with all required CRUD methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByWalletAddress(walletAddress: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserMembership(id: number, membershipTier: string): Promise<User>;
  updateUserWallet(id: number, walletAddress: string): Promise<User>;
  countDaoMembers(): Promise<number>;
  
  // Property methods
  getProperty(id: number): Promise<Property | undefined>;
  getProperties(search?: string): Promise<Property[]>;
  getFeaturedProperties(): Promise<Property[]>;
  createProperty(property: InsertProperty): Promise<Property>;
  
  // Proposal methods
  getProposal(id: number): Promise<Proposal | undefined>;
  getProposals(status?: string): Promise<Proposal[]>;
  createProposal(proposal: InsertProposal): Promise<Proposal>;
  updateProposalVotes(proposalId: number, voteType: string, votePower: number): Promise<void>;
  
  // Escrow methods
  getEscrow(id: number): Promise<Escrow | undefined>;
  getEscrowsByProperty(propertyId: number): Promise<Escrow[]>;
  getEscrowsBySeller(sellerId: number): Promise<Escrow[]>;
  getEscrowsByBuyer(buyerId: number): Promise<Escrow[]>;
  createEscrow(escrow: InsertEscrow): Promise<Escrow>;
  updateEscrowStatus(id: number, status: string, transactionHash?: string): Promise<Escrow>;
  
  // Title Transfer methods
  getTitleTransfer(id: number): Promise<TitleTransfer | undefined>;
  getTitleTransfersByProperty(propertyId: number): Promise<TitleTransfer[]>;
  createTitleTransfer(titleTransfer: InsertTitleTransfer): Promise<TitleTransfer>;
  updateTitleTransferStatus(id: number, status: string): Promise<TitleTransfer>;
  
  // Arbitrator methods
  getArbitrator(id: number): Promise<Arbitrator | undefined>;
  getArbitratorByWallet(walletAddress: string): Promise<Arbitrator | undefined>;
  getArbitrators(): Promise<Arbitrator[]>;
  createArbitrator(arbitrator: InsertArbitrator): Promise<Arbitrator>;
  updateArbitratorRating(id: number, successfulResolution: boolean): Promise<Arbitrator>;
  
  // Vote methods
  getVote(id: number): Promise<Vote | undefined>;
  getVotesByProposal(proposalId: number): Promise<Vote[]>;
  createVote(vote: InsertVote): Promise<Vote>;
  
  // Task methods
  getTask(id: number): Promise<Task | undefined>;
  getTasks(status?: string, category?: string): Promise<Task[]>;
  getTasksAdvanced(filters: {
    status?: string,
    category?: string,
    search?: string,
    sort?: string,
    minPrice?: number,
    maxPrice?: number,
    location?: string,
    skill?: string
  }): Promise<Task[]>;
  createTask(task: InsertTask): Promise<Task>;
  
  // Membership methods
  getMembershipTier(id: number): Promise<MembershipTier | undefined>;
  getMembershipTiers(interval?: string): Promise<MembershipTier[]>;
  
  // Community methods
  getCommunityPosts(search?: string): Promise<CommunityPost[]>;
  getCommunityEvents(): Promise<CommunityEvent[]>;
  getCommunityResources(): Promise<CommunityResource[]>;
  getCommunityMembers(search?: string): Promise<CommunityMember[]>;
  
  // Admin dashboard methods - Service Categories
  getServiceCategory(id: number): Promise<ServiceCategory | undefined>;
  getServiceCategories(active?: boolean): Promise<ServiceCategory[]>;
  createServiceCategory(category: InsertServiceCategory): Promise<ServiceCategory>;
  updateServiceCategory(id: number, category: Partial<InsertServiceCategory>): Promise<ServiceCategory>;
  deleteServiceCategory(id: number): Promise<boolean>;
  
  // Admin dashboard methods - Service Providers
  getServiceProvider(id: number): Promise<ServiceProvider | undefined>;
  getServiceProviders(categoryId?: number, active?: boolean): Promise<ServiceProvider[]>;
  createServiceProvider(provider: InsertServiceProvider): Promise<ServiceProvider>;
  updateServiceProvider(id: number, provider: Partial<InsertServiceProvider>): Promise<ServiceProvider>;
  deleteServiceProvider(id: number): Promise<boolean>;
  
  // Admin dashboard methods - API Credentials
  getApiCredential(id: number): Promise<ApiCredential | undefined>;
  getApiCredentialsByProvider(providerId: number): Promise<ApiCredential[]>;
  createApiCredential(credential: InsertApiCredential): Promise<ApiCredential>;
  updateApiCredential(id: number, credential: Partial<InsertApiCredential>): Promise<ApiCredential>;
  deleteApiCredential(id: number): Promise<boolean>;
  testApiCredential(id: number): Promise<boolean>;
  
  // Admin dashboard methods - Service Integrations
  getServiceIntegration(id: number): Promise<ServiceIntegration | undefined>;
  getServiceIntegrations(providerId?: number, active?: boolean): Promise<ServiceIntegration[]>;
  createServiceIntegration(integration: InsertServiceIntegration): Promise<ServiceIntegration>;
  updateServiceIntegration(id: number, integration: Partial<InsertServiceIntegration>): Promise<ServiceIntegration>;
  deleteServiceIntegration(id: number): Promise<boolean>;
  
  // Admin dashboard methods - Whitelabel Settings
  getWhitelabelSettings(): Promise<WhitelabelSetting | undefined>;
  updateWhitelabelSettings(settings: Partial<InsertWhitelabelSetting>): Promise<WhitelabelSetting>;
  
  // Admin dashboard methods - API Usage Logs
  getApiUsageLogs(integrationId?: number, from?: Date, to?: Date): Promise<ApiUsageLog[]>;
  createApiUsageLog(log: InsertApiUsageLog): Promise<ApiUsageLog>;
  getApiUsageSummary(integrationId?: number, period?: 'day' | 'week' | 'month'): Promise<{
    totalRequests: number;
    successRate: number;
    avgResponseTime: number;
    totalCost: number;
  }>;
  
  // AI-driven Review Analysis methods
  getReview(id: number): Promise<Review | undefined>;
  getReviews(processed?: boolean, userId?: number): Promise<Review[]>;
  getUnprocessedReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
  updateReview(id: number, updates: Partial<Review>): Promise<Review>;
  markReviewAsProcessed(id: number, category: string, sentiment: string, summary: string): Promise<Review>;
  linkReviewToProposal(reviewId: number, proposalId: number): Promise<Review>;
  
  // AI-Generated Governance Proposal methods
  getGovernanceProposal(id: number): Promise<GovernanceProposal | undefined>;
  getGovernanceProposals(status?: string): Promise<GovernanceProposal[]>;
  createGovernanceProposal(proposal: InsertGovernanceProposal): Promise<GovernanceProposal>;
  updateGovernanceProposal(id: number, updates: Partial<GovernanceProposal>): Promise<GovernanceProposal>;
  updateGovernanceProposalStatus(id: number, status: string): Promise<GovernanceProposal>;
  updateGovernanceProposalVotes(id: number, voteType: string, votePower: number): Promise<GovernanceProposal>;
  
  // Worker Ratings & Reputation methods
  getWorkerRating(id: number): Promise<WorkerRating | undefined>;
  getWorkerRatings(workerId: number): Promise<WorkerRating[]>;
  createWorkerRating(rating: InsertWorkerRating): Promise<WorkerRating>;
  getWorkerReputation(workerId: number): Promise<WorkerReputation | undefined>;
  updateWorkerReputation(workerId: number): Promise<WorkerReputation>;
  getWorkerBadges(): Promise<WorkerBadge[]>;
  getWorkerBadge(id: number): Promise<WorkerBadge | undefined>;
  createWorkerBadge(badge: InsertWorkerBadge): Promise<WorkerBadge>;
  getWorkerLeaderboard(category?: string, limit?: number): Promise<WorkerReputation[]>;
  
  // Worker Profile methods
  getWorkers(options: { search?: string, skill?: string, sort?: string, limit?: number }): Promise<Array<{
    id: number;
    username: string;
    name: string;
    skills: string[];
    avatarUrl: string;
    reputation: WorkerReputation;
  }>>;
  getWorkerProfile(workerId: number): Promise<{
    id: number;
    username: string;
    name: string;
    bio: string;
    skills: string[];
    avatarUrl: string;
    location: string;
    joinedDate: string;
  } | undefined>;
  getWorkerTasks(workerId: number): Promise<Task[]>;
  getPopularSkills(): Promise<Array<{ name: string; count: number; }>>;
}

export class MemStorage implements IStorage {
  // Escrow methods
  async getEscrow(id: number): Promise<Escrow | undefined> {
    return this.escrows.get(id);
  }

  async getEscrowsByProperty(propertyId: number): Promise<Escrow[]> {
    return Array.from(this.escrows.values()).filter(escrow => escrow.propertyId === propertyId);
  }

  async getEscrowsBySeller(sellerId: number): Promise<Escrow[]> {
    return Array.from(this.escrows.values()).filter(escrow => escrow.sellerId === sellerId);
  }

  async getEscrowsByBuyer(buyerId: number): Promise<Escrow[]> {
    return Array.from(this.escrows.values()).filter(escrow => escrow.buyerId === buyerId);
  }

  async createEscrow(escrow: InsertEscrow): Promise<Escrow> {
    const id = this.currentEscrowId++;
    const now = new Date();
    const newEscrow: Escrow = {
      id,
      ...escrow,
      status: "pending",
      transactionHash: null,
      createdAt: now,
      updatedAt: now
    };
    this.escrows.set(id, newEscrow);
    return newEscrow;
  }

  async updateEscrowStatus(id: number, status: string, transactionHash?: string): Promise<Escrow> {
    const escrow = this.escrows.get(id);
    if (!escrow) {
      throw new Error(`Escrow with id ${id} not found`);
    }
    
    const updatedEscrow: Escrow = {
      ...escrow,
      status,
      transactionHash: transactionHash || escrow.transactionHash,
      updatedAt: new Date()
    };
    this.escrows.set(id, updatedEscrow);
    return updatedEscrow;
  }

  // Title Transfer methods
  async getTitleTransfer(id: number): Promise<TitleTransfer | undefined> {
    return this.titleTransfers.get(id);
  }

  async getTitleTransfersByProperty(propertyId: number): Promise<TitleTransfer[]> {
    return Array.from(this.titleTransfers.values()).filter(
      transfer => transfer.propertyId === propertyId
    );
  }

  async createTitleTransfer(titleTransfer: InsertTitleTransfer): Promise<TitleTransfer> {
    const id = this.currentTitleTransferId++;
    const now = new Date();
    const newTitleTransfer: TitleTransfer = {
      id,
      ...titleTransfer,
      status: "pending",
      createdAt: now,
      updatedAt: now
    };
    this.titleTransfers.set(id, newTitleTransfer);
    return newTitleTransfer;
  }

  async updateTitleTransferStatus(id: number, status: string): Promise<TitleTransfer> {
    const titleTransfer = this.titleTransfers.get(id);
    if (!titleTransfer) {
      throw new Error(`Title transfer with id ${id} not found`);
    }
    
    const updatedTitleTransfer: TitleTransfer = {
      ...titleTransfer,
      status,
      updatedAt: new Date()
    };
    this.titleTransfers.set(id, updatedTitleTransfer);
    return updatedTitleTransfer;
  }

  // Arbitrator methods
  async getArbitrator(id: number): Promise<Arbitrator | undefined> {
    return this.arbitrators.get(id);
  }

  async getArbitratorByWallet(walletAddress: string): Promise<Arbitrator | undefined> {
    return Array.from(this.arbitrators.values()).find(
      arbitrator => arbitrator.walletAddress === walletAddress
    );
  }

  async getArbitrators(): Promise<Arbitrator[]> {
    return Array.from(this.arbitrators.values());
  }

  async createArbitrator(arbitrator: InsertArbitrator): Promise<Arbitrator> {
    const id = this.currentArbitratorId++;
    const now = new Date();
    const newArbitrator: Arbitrator = {
      id,
      ...arbitrator,
      casesResolved: 0,
      successRate: 0,
      createdAt: now,
      updatedAt: now
    };
    this.arbitrators.set(id, newArbitrator);
    return newArbitrator;
  }

  async updateArbitratorRating(id: number, successfulResolution: boolean): Promise<Arbitrator> {
    const arbitrator = this.arbitrators.get(id);
    if (!arbitrator) {
      throw new Error(`Arbitrator with id ${id} not found`);
    }
    
    const newCasesResolved = arbitrator.casesResolved + 1;
    const successfulCases = successfulResolution 
      ? (arbitrator.successRate * arbitrator.casesResolved) + 1 
      : (arbitrator.successRate * arbitrator.casesResolved);
      
    const updatedArbitrator: Arbitrator = {
      ...arbitrator,
      casesResolved: newCasesResolved,
      successRate: successfulCases / newCasesResolved,
      updatedAt: new Date()
    };
    this.arbitrators.set(id, updatedArbitrator);
    return updatedArbitrator;
  }
  private users: Map<number, User>;
  private properties: Map<number, Property>;
  private proposals: Map<number, Proposal>;
  private votes: Map<number, Vote>;
  private tasks: Map<number, Task>;
  private membershipTiers: Map<number, MembershipTier>;
  private communityPosts: Map<number, CommunityPost>;
  private communityEvents: Map<number, CommunityEvent>;
  private communityResources: Map<number, CommunityResource>;
  private communityMembers: Map<number, CommunityMember>;
  private workerRatings: Map<number, WorkerRating>;
  private workerReputations: Map<number, WorkerReputation>;
  private workerBadges: Map<number, WorkerBadge>;
  private escrows: Map<number, Escrow>;
  private titleTransfers: Map<number, TitleTransfer>;
  private arbitrators: Map<number, Arbitrator>;
  
  private currentUserId: number;
  private currentPropertyId: number;
  private currentProposalId: number;
  private currentVoteId: number;
  private currentTaskId: number;
  private currentMembershipTierId: number;
  private currentPostId: number;
  private currentEventId: number;
  private currentResourceId: number;
  private currentMemberId: number;
  private currentRatingId: number;
  private currentReputationId: number;
  private currentBadgeId: number;
  private currentEscrowId: number;
  private currentTitleTransferId: number;
  private currentArbitratorId: number;

  constructor() {
    this.users = new Map();
    this.properties = new Map();
    this.proposals = new Map();
    this.votes = new Map();
    this.tasks = new Map();
    this.membershipTiers = new Map();
    this.communityPosts = new Map();
    this.communityEvents = new Map();
    this.communityResources = new Map();
    this.communityMembers = new Map();
    this.workerRatings = new Map();
    this.workerReputations = new Map();
    this.workerBadges = new Map();
    this.escrows = new Map();
    this.titleTransfers = new Map();
    this.arbitrators = new Map();
    
    this.currentUserId = 1;
    this.currentPropertyId = 1;
    this.currentProposalId = 1;
    this.currentVoteId = 1;
    this.currentTaskId = 1;
    this.currentMembershipTierId = 1;
    this.currentPostId = 1;
    this.currentEventId = 1;
    this.currentResourceId = 1;
    this.currentMemberId = 1;
    this.currentRatingId = 1;
    this.currentReputationId = 1;
    this.currentBadgeId = 1;
    this.currentEscrowId = 1;
    this.currentTitleTransferId = 1;
    this.currentArbitratorId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Create a sample user
    this.createUser({
      username: "john_doe",
      password: "password123", // In a real app, this would be hashed
      walletAddress: "0xeF31027350Be2c7439C1b0BE022d49421488b72C",
      email: "john@example.com",
      name: "John Doe",
      membershipTier: "basic",
      dacTokenBalance: 245.32,
    });

    // Create membership tiers
    this.createMembershipTier({
      name: "Free",
      description: "Basic access with sweat equity",
      price: "0",
      currency: "USD",
      interval: "month",
      dacTokens: 1,
      features: [
        "Limited property listings",
        "Access to task marketplace",
        "Community forum access",
        "1 governance token",
        "Basic DAO voting rights"
      ],
      isActive: true
    });

    this.createMembershipTier({
      name: "Basic",
      description: "Individual investors & agents",
      price: "49",
      currency: "USD",
      interval: "month",
      dacTokens: 10,
      features: [
        "Unlimited property listings",
        "Basic AI valuation tools",
        "10 DAC governance tokens",
        "Priority marketplace access",
        "No smart contract generation"
      ],
      isActive: true
    });

    this.createMembershipTier({
      name: "Premium",
      description: "Professional real estate firms",
      price: "199",
      currency: "USD",
      interval: "month",
      dacTokens: 50,
      features: [
        "Unlimited property listings",
        "Advanced AI valuation tools",
        "50 DAC governance tokens",
        "Smart contract generation",
        "AI legal assistant"
      ],
      isActive: true
    });

    this.createMembershipTier({
      name: "Enterprise",
      description: "Large institutions & developers",
      price: "999",
      currency: "USD",
      interval: "month",
      dacTokens: 250,
      features: [
        "Everything in Premium",
        "White-labeled platform",
        "Custom DAO governance",
        "Dedicated support team",
        "Custom API integrations"
      ],
      isActive: true
    });

    // Create sample properties
    this.createProperty({
      title: "Luxury Modern Villa",
      description: "Stunning modern villa with breathtaking views. This architectural masterpiece features high-end finishes, an infinity pool, and smart home technology throughout.",
      price: "1250000",
      currency: "USD",
      location: "Beverly Hills",
      country: "USA",
      city: "Los Angeles",
      address: "123 Luxury Lane",
      beds: 5,
      baths: 4,
      sqft: "4200",
      userId: 1,
      listingType: "sale",
      propertyType: "house",
      imageUrls: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
      features: ["pool", "garden", "garage", "security"],
    });

    this.createProperty({
      title: "Contemporary Family Home",
      description: "Beautiful contemporary home in a family-friendly neighborhood. Features include an open floor plan, modern kitchen, and a spacious backyard perfect for entertaining.",
      price: "3500",
      currency: "USD",
      location: "Downtown",
      country: "USA",
      city: "Austin",
      address: "456 Family Avenue",
      beds: 3,
      baths: 2,
      sqft: "1850",
      userId: 1,
      listingType: "rent",
      propertyType: "house",
      imageUrls: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
      features: ["garden", "ac", "parking"],
    });

    this.createProperty({
      title: "Beachfront Property",
      description: "Exclusive beachfront property with direct access to the ocean. Enjoy stunning sunsets from your private terrace and wake up to the sound of waves.",
      price: "2750000",
      currency: "USD",
      location: "Malibu",
      country: "USA",
      city: "Malibu",
      address: "789 Ocean Drive",
      beds: 4,
      baths: 3,
      sqft: "3500",
      userId: 1,
      listingType: "sale",
      propertyType: "house",
      imageUrls: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
      features: ["waterfront", "balcony", "parking", "ac"],
    });

    // Create sample proposals
    this.createProposal({
      title: "Update platform fee structure",
      description: "Proposal to adjust the platform fee structure to incentivize more listings and transactions. This would reduce fees for smaller transactions while introducing a tiered structure for larger deals.",
      creatorId: 1,
      status: "active",
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      executionPayload: JSON.stringify({
        contractMethod: "updateFeeStructure",
        parameters: {
          smallTransactionFee: "1.5%",
          mediumTransactionFee: "2%",
          largeTransactionFee: "2.5%",
          thresholds: {
            small: "100000",
            medium: "500000"
          }
        }
      })
    });

    this.createProposal({
      title: "Add new property markets in Asia",
      description: "This proposal aims to expand our platform to new property markets in Asia, specifically targeting Singapore, Hong Kong, and Tokyo. This would involve adding local regulatory compliance, translations, and partnerships with local agencies.",
      creatorId: 1,
      status: "active",
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      executionPayload: JSON.stringify({
        contractMethod: "addMarkets",
        parameters: {
          markets: ["Singapore", "Hong Kong", "Tokyo"],
          budget: "500000",
          timeline: "6 months"
        }
      })
    });

    this.createProposal({
      title: "Upgrade smart contract implementation",
      description: "Technical proposal to upgrade our core smart contracts to improve security, reduce gas costs, and add new features. This would include a comprehensive audit and a phased migration plan.",
      creatorId: 1,
      status: "passed",
      startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      endDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      executionPayload: JSON.stringify({
        contractMethod: "upgradeContracts",
        parameters: {
          version: "2.0.0",
          auditor: "CertiK",
          features: ["EIP-1559 support", "Multi-signature wallets", "On-chain governance"]
        }
      }),
      votesFor: 92,
      votesAgainst: 8,
      votesAbstain: 0
    });

    // Create sample tasks
    this.createTask({
      title: "Property Photography in Miami",
      description: "Need professional photos of a 3-bedroom house in Downtown Miami. Must have own equipment.",
      category: "photography",
      price: "150",
      currency: "USD",
      creatorId: 1,
      status: "open",
      location: "Miami, FL",
    });

    this.createTask({
      title: "Property Data Analysis",
      description: "Analyze property sales data for Q2 2023 in the London area and create a comprehensive report.",
      category: "data-analysis",
      price: "200",
      currency: "USD",
      creatorId: 2,
      status: "open",
      location: "Remote",
    });

    this.createTask({
      title: "Smart Contract Audit",
      description: "Review and audit the escrow smart contract for the property marketplace. Solidity experience required.",
      category: "blockchain",
      price: "500",
      currency: "USD",
      creatorId: 3,
      status: "open",
      location: "Remote",
    });

    this.createTask({
      title: "AI Prompt Engineer",
      description: "Create effective prompts for our AI property description generator. Real estate knowledge preferred.",
      category: "ai-development",
      price: "75",
      currency: "USD",
      creatorId: 4,
      status: "open",
      location: "Remote",
    });

    // Add community content
    // Sample posts
    this.addCommunityPost({
      title: "How to evaluate property in a volatile market?",
      content: "I've been looking at properties in rapidly changing markets. What strategies do you use to evaluate fair market value when prices are volatile?",
      authorId: 1,
      authorName: "John Doe",
      tags: ["discussion", "valuation", "market-analysis"]
    });

    this.addCommunityPost({
      title: "Best practices for smart contract creation",
      content: "I'm implementing my first real estate smart contract. What are some security best practices and common pitfalls to avoid?",
      authorId: 2,
      authorName: "Blockchain Developer",
      tags: ["smart-contracts", "question", "security"]
    });

    // Sample events
    this.addCommunityEvent({
      title: "Webinar: AI in Real Estate",
      description: "Learn how AI is transforming property valuation and transactions.",
      date: "June 15, 2023",
      time: "2:00 PM EST",
      location: "Zoom",
      virtual: true,
      organizer: "Tech DAO"
    });

    this.addCommunityEvent({
      title: "Monthly DAO Meetup",
      description: "Join our virtual governance discussion and networking session.",
      date: "June 20, 2023",
      time: "6:00 PM EST",
      location: "Discord",
      virtual: true,
      organizer: "Community Team"
    });

    // Sample resources
    this.addCommunityResource({
      title: "Complete Guide to Real Estate Tokenization",
      type: "guide",
      description: "A comprehensive guide to understanding and implementing real estate tokenization on blockchain.",
      author: "Blockchain Expert",
      publishedAt: "2023-05-10"
    });

    this.addCommunityResource({
      title: "AI Valuation Model Tutorial",
      type: "video",
      description: "Step-by-step tutorial on building an AI model for property valuation using open data sources.",
      author: "Data Science Team",
      publishedAt: "2023-04-22"
    });

    // Sample members
    this.addCommunityMember({
      name: "John Doe",
      role: "Real Estate Investor",
      badges: ["Active Contributor", "Premium Member"],
      memberSince: "Jan 2023",
      reputation: 4.8
    });

    this.addCommunityMember({
      name: "Alice Smith",
      role: "Blockchain Developer",
      badges: ["Tech Contributor", "Smart Contract Expert"],
      memberSince: "Mar 2023",
      reputation: 4.9
    });
  }

  // Utility method for creating membership tiers
  private createMembershipTier(tier: InsertMembershipTier): MembershipTier {
    const id = this.currentMembershipTierId++;
    const newTier: MembershipTier = { ...tier, id };
    this.membershipTiers.set(id, newTier);
    return newTier;
  }

  // Community helper methods
  private addCommunityPost(post: Omit<CommunityPost, 'id' | 'postedAt' | 'likes' | 'replies'>): CommunityPost {
    const id = this.currentPostId++;
    const newPost: CommunityPost = { 
      ...post, 
      id, 
      postedAt: new Date().toISOString(),
      likes: Math.floor(Math.random() * 50),
      replies: Math.floor(Math.random() * 20)
    };
    this.communityPosts.set(id, newPost);
    return newPost;
  }

  private addCommunityEvent(event: Omit<CommunityEvent, 'id' | 'attendees'>): CommunityEvent {
    const id = this.currentEventId++;
    const newEvent: CommunityEvent = {
      ...event,
      id,
      attendees: Math.floor(Math.random() * 100) + 10
    };
    this.communityEvents.set(id, newEvent);
    return newEvent;
  }

  private addCommunityResource(resource: Omit<CommunityResource, 'id' | 'likes' | 'downloads'>): CommunityResource {
    const id = this.currentResourceId++;
    const newResource: CommunityResource = {
      ...resource,
      id,
      likes: Math.floor(Math.random() * 100) + 20,
      downloads: Math.floor(Math.random() * 500) + 50
    };
    this.communityResources.set(id, newResource);
    return newResource;
  }

  private addCommunityMember(member: Omit<CommunityMember, 'id' | 'avatar'>): CommunityMember {
    const id = this.currentMemberId++;
    const newMember: CommunityMember = {
      ...member,
      id,
      avatar: undefined // In a real app, this would be a profile image URL
    };
    this.communityMembers.set(id, newMember);
    return newMember;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const now = new Date().toISOString();
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: now
    };
    this.users.set(id, user);
    return user;
  }

  async updateUserMembership(id: number, membershipTier: string): Promise<User> {
    const user = await this.getUser(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    
    user.membershipTier = membershipTier.toLowerCase();
    this.users.set(id, user);
    return user;
  }

  async countDaoMembers(): Promise<number> {
    return this.users.size;
  }

  // Property methods
  async getProperty(id: number): Promise<Property | undefined> {
    return this.properties.get(id);
  }

  async getProperties(search?: string): Promise<Property[]> {
    let properties = Array.from(this.properties.values());
    
    if (search) {
      const searchLower = search.toLowerCase();
      properties = properties.filter(
        property => 
          property.title.toLowerCase().includes(searchLower) ||
          property.description.toLowerCase().includes(searchLower) ||
          property.location.toLowerCase().includes(searchLower) ||
          property.city.toLowerCase().includes(searchLower) ||
          property.country.toLowerCase().includes(searchLower)
      );
    }
    
    return properties;
  }

  async getFeaturedProperties(): Promise<Property[]> {
    // In a real app, this might filter for "featured" properties
    // Here we just return the first few properties
    return Array.from(this.properties.values()).slice(0, 3);
  }

  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const id = this.currentPropertyId++;
    const now = new Date().toISOString();
    const property: Property = { 
      ...insertProperty, 
      id,
      aiValuation: null,
      createdAt: now,
      updatedAt: now,
      active: true
    };
    this.properties.set(id, property);
    return property;
  }

  // Proposal methods
  async getProposal(id: number): Promise<Proposal | undefined> {
    return this.proposals.get(id);
  }

  async getProposals(status?: string): Promise<Proposal[]> {
    let proposals = Array.from(this.proposals.values());
    
    if (status && status !== 'all') {
      proposals = proposals.filter(proposal => proposal.status === status);
    }
    
    return proposals;
  }

  async createProposal(insertProposal: InsertProposal): Promise<Proposal> {
    const id = this.currentProposalId++;
    const now = new Date().toISOString();
    const proposal: Proposal = { 
      ...insertProposal, 
      id,
      status: 'active',
      votesFor: 0,
      votesAgainst: 0,
      votesAbstain: 0,
      createdAt: now
    };
    this.proposals.set(id, proposal);
    return proposal;
  }

  async updateProposalVotes(proposalId: number, voteType: string, votePower: number): Promise<void> {
    const proposal = await this.getProposal(proposalId);
    if (!proposal) {
      throw new Error(`Proposal with ID ${proposalId} not found`);
    }
    
    if (voteType === 'for') {
      proposal.votesFor += votePower;
    } else if (voteType === 'against') {
      proposal.votesAgainst += votePower;
    } else if (voteType === 'abstain') {
      proposal.votesAbstain += votePower;
    }
    
    this.proposals.set(proposalId, proposal);
  }

  // Vote methods
  async getVote(id: number): Promise<Vote | undefined> {
    return this.votes.get(id);
  }

  async getVotesByProposal(proposalId: number): Promise<Vote[]> {
    return Array.from(this.votes.values()).filter(
      vote => vote.proposalId === proposalId
    );
  }

  async createVote(insertVote: InsertVote): Promise<Vote> {
    const id = this.currentVoteId++;
    const now = new Date().toISOString();
    const vote: Vote = { 
      ...insertVote, 
      id,
      createdAt: now
    };
    this.votes.set(id, vote);
    return vote;
  }

  // Task methods
  async getTask(id: number): Promise<Task | undefined> {
    return this.tasks.get(id);
  }

  async getTasks(status?: string, category?: string): Promise<Task[]> {
    let tasks = Array.from(this.tasks.values());
    
    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }
    
    if (category && category !== 'all') {
      tasks = tasks.filter(task => task.category === category);
    }
    
    return tasks;
  }

  async createTask(insertTask: InsertTask): Promise<Task> {
    const id = this.currentTaskId++;
    const now = new Date().toISOString();
    const task: Task = { 
      ...insertTask, 
      id,
      status: 'open',
      assigneeId: null,
      createdAt: now,
      updatedAt: now
    };
    this.tasks.set(id, task);
    return task;
  }

  // Membership methods
  async getMembershipTier(id: number): Promise<MembershipTier | undefined> {
    return this.membershipTiers.get(id);
  }

  async getMembershipTiers(interval: string = 'month'): Promise<MembershipTier[]> {
    return Array.from(this.membershipTiers.values())
      .filter(tier => tier.interval === interval);
  }

  // Community methods
  async getCommunityPosts(search?: string): Promise<CommunityPost[]> {
    let posts = Array.from(this.communityPosts.values());
    
    if (search) {
      const searchLower = search.toLowerCase();
      posts = posts.filter(
        post => 
          post.title.toLowerCase().includes(searchLower) ||
          post.content.toLowerCase().includes(searchLower) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    return posts;
  }

  async getCommunityEvents(): Promise<CommunityEvent[]> {
    return Array.from(this.communityEvents.values());
  }

  async getCommunityResources(): Promise<CommunityResource[]> {
    return Array.from(this.communityResources.values());
  }

  async getCommunityMembers(search?: string): Promise<CommunityMember[]> {
    let members = Array.from(this.communityMembers.values());
    
    if (search) {
      const searchLower = search.toLowerCase();
      members = members.filter(
        member => 
          member.name.toLowerCase().includes(searchLower) ||
          member.role.toLowerCase().includes(searchLower) ||
          member.badges.some(badge => badge.toLowerCase().includes(searchLower))
      );
    }
    
    return members;
  }
}

// Database implementation of the storage interface
export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const users = await db.select().from(schema.users).where(eq(schema.users.id, id));
    return users.length > 0 ? users[0] : undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const users = await db.select().from(schema.users).where(eq(schema.users.username, username));
    return users.length > 0 ? users[0] : undefined;
  }

  async createUser(user: InsertUser): Promise<User> {
    const [createdUser] = await db.insert(schema.users).values(user).returning();
    return createdUser;
  }

  async updateUserMembership(id: number, membershipTier: string): Promise<User> {
    const [updatedUser] = await db
      .update(schema.users)
      .set({ membershipTier })
      .where(eq(schema.users.id, id))
      .returning();
    return updatedUser;
  }

  async countDaoMembers(): Promise<number> {
    const result = await db.select({ count: sql`count(*)` }).from(schema.users);
    return Number(result[0].count);
  }
  
  // Escrow methods
  async getEscrow(id: number): Promise<Escrow | undefined> {
    const escrows = await db.select().from(schema.escrows).where(eq(schema.escrows.id, id));
    return escrows.length > 0 ? escrows[0] : undefined;
  }

  async getEscrowsByProperty(propertyId: number): Promise<Escrow[]> {
    return await db.select().from(schema.escrows).where(eq(schema.escrows.propertyId, propertyId));
  }

  async getEscrowsBySeller(sellerId: number): Promise<Escrow[]> {
    return await db.select().from(schema.escrows).where(eq(schema.escrows.sellerId, sellerId));
  }

  async getEscrowsByBuyer(buyerId: number): Promise<Escrow[]> {
    return await db.select().from(schema.escrows).where(eq(schema.escrows.buyerId, buyerId));
  }

  async createEscrow(escrow: InsertEscrow): Promise<Escrow> {
    const [createdEscrow] = await db.insert(schema.escrows).values(escrow).returning();
    return createdEscrow;
  }

  async updateEscrowStatus(id: number, status: string, transactionHash?: string): Promise<Escrow> {
    const updateData: Partial<Escrow> = { 
      status, 
      updatedAt: new Date() 
    };
    
    if (transactionHash) {
      updateData.transactionHash = transactionHash;
    }
    
    const [updatedEscrow] = await db
      .update(schema.escrows)
      .set(updateData)
      .where(eq(schema.escrows.id, id))
      .returning();
    
    return updatedEscrow;
  }
  
  // Title Transfer methods
  async getTitleTransfer(id: number): Promise<TitleTransfer | undefined> {
    const transfers = await db.select().from(schema.titleTransfers).where(eq(schema.titleTransfers.id, id));
    return transfers.length > 0 ? transfers[0] : undefined;
  }

  async getTitleTransfersByProperty(propertyId: number): Promise<TitleTransfer[]> {
    return await db.select().from(schema.titleTransfers).where(eq(schema.titleTransfers.propertyId, propertyId));
  }

  async createTitleTransfer(titleTransfer: InsertTitleTransfer): Promise<TitleTransfer> {
    const [createdTransfer] = await db.insert(schema.titleTransfers).values(titleTransfer).returning();
    return createdTransfer;
  }

  async updateTitleTransferStatus(id: number, status: string): Promise<TitleTransfer> {
    const [updatedTransfer] = await db
      .update(schema.titleTransfers)
      .set({ 
        status, 
        updatedAt: new Date() 
      })
      .where(eq(schema.titleTransfers.id, id))
      .returning();
    
    return updatedTransfer;
  }
  
  // Arbitrator methods
  async getArbitrator(id: number): Promise<Arbitrator | undefined> {
    const arbitrators = await db.select().from(schema.arbitrators).where(eq(schema.arbitrators.id, id));
    return arbitrators.length > 0 ? arbitrators[0] : undefined;
  }

  async getArbitratorByWallet(walletAddress: string): Promise<Arbitrator | undefined> {
    const arbitrators = await db.select().from(schema.arbitrators)
      .where(eq(schema.arbitrators.walletAddress, walletAddress));
    return arbitrators.length > 0 ? arbitrators[0] : undefined;
  }

  async getArbitrators(): Promise<Arbitrator[]> {
    return await db.select().from(schema.arbitrators).orderBy(desc(schema.arbitrators.successRate));
  }

  async createArbitrator(arbitrator: InsertArbitrator): Promise<Arbitrator> {
    const [createdArbitrator] = await db.insert(schema.arbitrators).values(arbitrator).returning();
    return createdArbitrator;
  }

  async updateArbitratorRating(id: number, successfulResolution: boolean): Promise<Arbitrator> {
    // First get the current arbitrator data
    const arbitrator = await this.getArbitrator(id);
    if (!arbitrator) {
      throw new Error(`Arbitrator with id ${id} not found`);
    }
    
    const newCasesResolved = arbitrator.casesResolved + 1;
    const successfulCases = successfulResolution 
      ? (arbitrator.successRate * arbitrator.casesResolved) + 1 
      : (arbitrator.successRate * arbitrator.casesResolved);
    
    const [updatedArbitrator] = await db
      .update(schema.arbitrators)
      .set({ 
        casesResolved: newCasesResolved,
        successRate: successfulCases / newCasesResolved,
        updatedAt: new Date()
      })
      .where(eq(schema.arbitrators.id, id))
      .returning();
    
    return updatedArbitrator;
  }

  // Property methods
  async getProperty(id: number): Promise<Property | undefined> {
    const properties = await db.select().from(schema.properties).where(eq(schema.properties.id, id));
    return properties.length > 0 ? properties[0] : undefined;
  }

  async getProperties(search?: string): Promise<Property[]> {
    if (!search) {
      return await db.select().from(schema.properties).where(eq(schema.properties.active, true));
    }
    
    const searchLower = `%${search.toLowerCase()}%`;
    return await db
      .select()
      .from(schema.properties)
      .where(
        and(
          eq(schema.properties.active, true),
          or(
            like(sql`lower(${schema.properties.title})`, searchLower),
            like(sql`lower(${schema.properties.description})`, searchLower),
            like(sql`lower(${schema.properties.location})`, searchLower),
            like(sql`lower(${schema.properties.city})`, searchLower),
            like(sql`lower(${schema.properties.country})`, searchLower)
          )
        )
      );
  }

  async getFeaturedProperties(): Promise<Property[]> {
    // For now, just return the latest properties as featured
    return await db
      .select()
      .from(schema.properties)
      .where(eq(schema.properties.active, true))
      .orderBy(desc(schema.properties.createdAt))
      .limit(3);
  }

  async createProperty(property: InsertProperty): Promise<Property> {
    const [createdProperty] = await db.insert(schema.properties).values(property).returning();
    return createdProperty;
  }

  // Proposal methods
  async getProposal(id: number): Promise<Proposal | undefined> {
    const proposals = await db.select().from(schema.proposals).where(eq(schema.proposals.id, id));
    return proposals.length > 0 ? proposals[0] : undefined;
  }

  async getProposals(status?: string): Promise<Proposal[]> {
    if (!status) {
      return await db.select().from(schema.proposals).orderBy(desc(schema.proposals.createdAt));
    }
    
    return await db
      .select()
      .from(schema.proposals)
      .where(eq(schema.proposals.status, status))
      .orderBy(desc(schema.proposals.createdAt));
  }

  async createProposal(proposal: InsertProposal): Promise<Proposal> {
    const [createdProposal] = await db.insert(schema.proposals).values(proposal).returning();
    return createdProposal;
  }

  async updateProposalVotes(proposalId: number, voteType: string, votePower: number): Promise<void> {
    const proposal = await this.getProposal(proposalId);
    if (!proposal) {
      throw new Error(`Proposal with ID ${proposalId} not found`);
    }

    let updateValues = {};
    if (voteType === 'for') {
      updateValues = { votesFor: proposal.votesFor + votePower };
    } else if (voteType === 'against') {
      updateValues = { votesAgainst: proposal.votesAgainst + votePower };
    } else if (voteType === 'abstain') {
      updateValues = { votesAbstain: proposal.votesAbstain + votePower };
    }

    await db
      .update(schema.proposals)
      .set(updateValues)
      .where(eq(schema.proposals.id, proposalId));
  }

  // Vote methods
  async getVote(id: number): Promise<Vote | undefined> {
    const votes = await db.select().from(schema.votes).where(eq(schema.votes.id, id));
    return votes.length > 0 ? votes[0] : undefined;
  }

  async getVotesByProposal(proposalId: number): Promise<Vote[]> {
    return await db
      .select()
      .from(schema.votes)
      .where(eq(schema.votes.proposalId, proposalId));
  }

  async createVote(vote: InsertVote): Promise<Vote> {
    const [createdVote] = await db.insert(schema.votes).values(vote).returning();
    return createdVote;
  }

  // Task methods
  async getTask(id: number): Promise<Task | undefined> {
    const tasks = await db.select().from(schema.tasks).where(eq(schema.tasks.id, id));
    return tasks.length > 0 ? tasks[0] : undefined;
  }

  async getTasks(status?: string, category?: string): Promise<Task[]> {
    let query = db.select().from(schema.tasks);
    
    if (status && category) {
      query = query.where(
        and(
          eq(schema.tasks.status, status),
          eq(schema.tasks.category, category)
        )
      );
    } else if (status) {
      query = query.where(eq(schema.tasks.status, status));
    } else if (category) {
      query = query.where(eq(schema.tasks.category, category));
    }
    
    return await query.orderBy(desc(schema.tasks.createdAt));
  }

  async createTask(task: InsertTask): Promise<Task> {
    const [createdTask] = await db.insert(schema.tasks).values(task).returning();
    return createdTask;
  }

  // Membership methods
  async getMembershipTier(id: number): Promise<MembershipTier | undefined> {
    const tiers = await db.select().from(schema.membershipTiers).where(eq(schema.membershipTiers.id, id));
    return tiers.length > 0 ? tiers[0] : undefined;
  }

  async getMembershipTiers(interval?: string): Promise<MembershipTier[]> {
    if (!interval) {
      return await db
        .select()
        .from(schema.membershipTiers)
        .where(eq(schema.membershipTiers.isActive, true));
    }
    
    return await db
      .select()
      .from(schema.membershipTiers)
      .where(
        and(
          eq(schema.membershipTiers.isActive, true),
          eq(schema.membershipTiers.interval, interval)
        )
      );
  }

  // Community methods (using in-memory for now, will be moved to database tables in the future)
  private communityPosts: Map<number, CommunityPost> = new Map();
  private communityEvents: Map<number, CommunityEvent> = new Map();
  private communityResources: Map<number, CommunityResource> = new Map();
  private communityMembers: Map<number, CommunityMember> = new Map();
  
  private currentPostId = 1;
  private currentEventId = 1;
  private currentResourceId = 1;
  private currentMemberId = 1;
  
  private addCommunityPost(post: Omit<CommunityPost, 'id' | 'postedAt' | 'likes' | 'replies'>): CommunityPost {
    const id = this.currentPostId++;
    const newPost: CommunityPost = { 
      ...post, 
      id, 
      postedAt: new Date().toISOString(),
      likes: Math.floor(Math.random() * 50),
      replies: Math.floor(Math.random() * 20)
    };
    this.communityPosts.set(id, newPost);
    return newPost;
  }

  private addCommunityEvent(event: Omit<CommunityEvent, 'id' | 'attendees'>): CommunityEvent {
    const id = this.currentEventId++;
    const newEvent: CommunityEvent = {
      ...event,
      id,
      attendees: Math.floor(Math.random() * 100)
    };
    this.communityEvents.set(id, newEvent);
    return newEvent;
  }

  private addCommunityResource(resource: Omit<CommunityResource, 'id' | 'likes' | 'downloads'>): CommunityResource {
    const id = this.currentResourceId++;
    const newResource: CommunityResource = {
      ...resource,
      id,
      likes: Math.floor(Math.random() * 200),
      downloads: Math.floor(Math.random() * 500)
    };
    this.communityResources.set(id, newResource);
    return newResource;
  }

  private addCommunityMember(member: Omit<CommunityMember, 'id' | 'avatar'>): CommunityMember {
    const id = this.currentMemberId++;
    const newMember: CommunityMember = {
      ...member,
      id,
      avatar: `https://i.pravatar.cc/150?img=${id}`
    };
    this.communityMembers.set(id, newMember);
    return newMember;
  }

  async getCommunityPosts(search?: string): Promise<CommunityPost[]> {
    // Initialize if empty
    if (this.communityPosts.size === 0) {
      this.addCommunityPost({
        title: "How to evaluate property in a volatile market?",
        content: "I've been looking at properties in rapidly changing markets. What strategies do you use to evaluate fair market value when prices are volatile?",
        authorId: 1,
        authorName: "John Doe",
        tags: ["discussion", "valuation", "market-analysis"]
      });

      this.addCommunityPost({
        title: "Best practices for smart contract creation",
        content: "I'm implementing my first real estate smart contract. What are some security best practices and common pitfalls to avoid?",
        authorId: 2,
        authorName: "Blockchain Developer",
        tags: ["smart-contracts", "question", "security"]
      });
    }
    
    if (!search) {
      return Array.from(this.communityPosts.values());
    }
    
    const searchLower = search.toLowerCase();
    return Array.from(this.communityPosts.values()).filter(post => 
      post.title.toLowerCase().includes(searchLower) || 
      post.content.toLowerCase().includes(searchLower) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  async getCommunityEvents(): Promise<CommunityEvent[]> {
    // Initialize if empty
    if (this.communityEvents.size === 0) {
      this.addCommunityEvent({
        title: "Webinar: AI in Real Estate",
        description: "Learn how AI is transforming property valuation and transactions.",
        date: "June 15, 2023",
        time: "2:00 PM EST",
        location: "Zoom",
        virtual: true,
        organizer: "Tech DAO"
      });

      this.addCommunityEvent({
        title: "Monthly DAO Meetup",
        description: "Join our virtual governance discussion and networking session.",
        date: "June 20, 2023",
        time: "6:00 PM EST",
        location: "Discord",
        virtual: true,
        organizer: "Community Team"
      });
    }
    
    return Array.from(this.communityEvents.values());
  }

  async getCommunityResources(): Promise<CommunityResource[]> {
    // Initialize if empty
    if (this.communityResources.size === 0) {
      this.addCommunityResource({
        title: "Complete Guide to Real Estate Tokenization",
        type: "guide",
        description: "A comprehensive guide to understanding and implementing real estate tokenization on blockchain.",
        author: "Blockchain Expert",
        publishedAt: "2023-05-10"
      });

      this.addCommunityResource({
        title: "AI Valuation Model Tutorial",
        type: "video",
        description: "Step-by-step tutorial on building an AI model for property valuation using open data sources.",
        author: "Data Science Team",
        publishedAt: "2023-04-22"
      });
    }
    
    return Array.from(this.communityResources.values());
  }

  async getCommunityMembers(search?: string): Promise<CommunityMember[]> {
    // Initialize if empty
    if (this.communityMembers.size === 0) {
      this.addCommunityMember({
        name: "John Doe",
        role: "Real Estate Investor",
        badges: ["Active Contributor", "Premium Member"],
        memberSince: "Jan 2023",
        reputation: 4.8
      });

      this.addCommunityMember({
        name: "Alice Smith",
        role: "Blockchain Developer",
        badges: ["Tech Contributor", "Smart Contract Expert"],
        memberSince: "Mar 2023",
        reputation: 4.9
      });
    }
    
    if (!search) {
      return Array.from(this.communityMembers.values());
    }
    
    const searchLower = search.toLowerCase();
    return Array.from(this.communityMembers.values()).filter(member => 
      member.name.toLowerCase().includes(searchLower) || 
      member.role.toLowerCase().includes(searchLower)
    );
  }

  // Admin dashboard methods - Service Categories
  private serviceCategories: Map<number, ServiceCategory> = new Map();
  private currentServiceCategoryId = 1;

  async getServiceCategory(id: number): Promise<ServiceCategory | undefined> {
    try {
      const [category] = await db.select().from(serviceCategories).where(eq(serviceCategories.id, id));
      return category || undefined;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      return this.serviceCategories.get(id);
    }
  }
  
  async getServiceCategories(active?: boolean): Promise<ServiceCategory[]> {
    try {
      if (active !== undefined) {
        return db.select()
          .from(serviceCategories)
          .where(eq(serviceCategories.isActive, active))
          .orderBy(asc(serviceCategories.displayOrder));
      }
      return db.select().from(serviceCategories).orderBy(asc(serviceCategories.displayOrder));
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      let categories = Array.from(this.serviceCategories.values());
      if (active !== undefined) {
        categories = categories.filter(category => category.isActive === active);
      }
      return categories.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
    }
  }
  
  async createServiceCategory(category: InsertServiceCategory): Promise<ServiceCategory> {
    try {
      const [newCategory] = await db
        .insert(serviceCategories)
        .values({
          ...category,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .returning();
      return newCategory;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const id = this.currentServiceCategoryId++;
      const newCategory: ServiceCategory = {
        id,
        ...category,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        displayOrder: category.displayOrder || 0
      };
      this.serviceCategories.set(id, newCategory);
      return newCategory;
    }
  }
  
  async updateServiceCategory(id: number, category: Partial<InsertServiceCategory>): Promise<ServiceCategory> {
    try {
      const [updatedCategory] = await db
        .update(serviceCategories)
        .set({
          ...category,
          updatedAt: new Date()
        })
        .where(eq(serviceCategories.id, id))
        .returning();
      
      if (!updatedCategory) {
        throw new Error(`Service category with ID ${id} not found`);
      }
      
      return updatedCategory;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const existingCategory = this.serviceCategories.get(id);
      if (!existingCategory) {
        throw new Error(`Service category with ID ${id} not found`);
      }
      
      const updatedCategory: ServiceCategory = {
        ...existingCategory,
        ...category,
        updatedAt: new Date()
      };
      
      this.serviceCategories.set(id, updatedCategory);
      return updatedCategory;
    }
  }
  
  async deleteServiceCategory(id: number): Promise<boolean> {
    try {
      const result = await db
        .delete(serviceCategories)
        .where(eq(serviceCategories.id, id))
        .returning();
      
      return result.length > 0;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const deleted = this.serviceCategories.delete(id);
      return deleted;
    }
  }
  
  // Admin dashboard methods - Service Providers
  private serviceProviders: Map<number, ServiceProvider> = new Map();
  private currentServiceProviderId = 1;
  
  async getServiceProvider(id: number): Promise<ServiceProvider | undefined> {
    try {
      const [provider] = await db.select().from(serviceProviders).where(eq(serviceProviders.id, id));
      return provider || undefined;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      return this.serviceProviders.get(id);
    }
  }
  
  async getServiceProviders(categoryId?: number, active?: boolean): Promise<ServiceProvider[]> {
    try {
      let query = db.select().from(serviceProviders);
      
      if (categoryId !== undefined && active !== undefined) {
        query = query.where(and(
          eq(serviceProviders.categoryId, categoryId),
          eq(serviceProviders.isActive, active)
        ));
      } else if (categoryId !== undefined) {
        query = query.where(eq(serviceProviders.categoryId, categoryId));
      } else if (active !== undefined) {
        query = query.where(eq(serviceProviders.isActive, active));
      }
      
      return query.orderBy(asc(serviceProviders.name));
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      let providers = Array.from(this.serviceProviders.values());
      
      if (categoryId !== undefined) {
        providers = providers.filter(provider => provider.categoryId === categoryId);
      }
      
      if (active !== undefined) {
        providers = providers.filter(provider => provider.isActive === active);
      }
      
      return providers.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  
  async createServiceProvider(provider: InsertServiceProvider): Promise<ServiceProvider> {
    try {
      const [newProvider] = await db
        .insert(serviceProviders)
        .values({
          ...provider,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .returning();
      return newProvider;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const id = this.currentServiceProviderId++;
      const newProvider: ServiceProvider = {
        id,
        ...provider,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.serviceProviders.set(id, newProvider);
      return newProvider;
    }
  }
  
  async updateServiceProvider(id: number, provider: Partial<InsertServiceProvider>): Promise<ServiceProvider> {
    try {
      const [updatedProvider] = await db
        .update(serviceProviders)
        .set({
          ...provider,
          updatedAt: new Date()
        })
        .where(eq(serviceProviders.id, id))
        .returning();
      
      if (!updatedProvider) {
        throw new Error(`Service provider with ID ${id} not found`);
      }
      
      return updatedProvider;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const existingProvider = this.serviceProviders.get(id);
      if (!existingProvider) {
        throw new Error(`Service provider with ID ${id} not found`);
      }
      
      const updatedProvider: ServiceProvider = {
        ...existingProvider,
        ...provider,
        updatedAt: new Date()
      };
      
      this.serviceProviders.set(id, updatedProvider);
      return updatedProvider;
    }
  }
  
  async deleteServiceProvider(id: number): Promise<boolean> {
    try {
      const result = await db
        .delete(serviceProviders)
        .where(eq(serviceProviders.id, id))
        .returning();
      
      return result.length > 0;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const deleted = this.serviceProviders.delete(id);
      return deleted;
    }
  }
  
  // Admin dashboard methods - API Credentials
  private apiCredentials: Map<number, ApiCredential> = new Map();
  private currentApiCredentialId = 1;
  
  async getApiCredential(id: number): Promise<ApiCredential | undefined> {
    try {
      const [credential] = await db.select().from(apiCredentials).where(eq(apiCredentials.id, id));
      return credential || undefined;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      return this.apiCredentials.get(id);
    }
  }
  
  async getApiCredentialsByProvider(providerId: number): Promise<ApiCredential[]> {
    try {
      return db.select()
        .from(apiCredentials)
        .where(eq(apiCredentials.providerId, providerId))
        .orderBy(asc(apiCredentials.name));
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      return Array.from(this.apiCredentials.values())
        .filter(credential => credential.providerId === providerId)
        .sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  
  async createApiCredential(credential: InsertApiCredential): Promise<ApiCredential> {
    try {
      const [newCredential] = await db
        .insert(apiCredentials)
        .values({
          ...credential,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .returning();
      return newCredential;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const id = this.currentApiCredentialId++;
      const newCredential: ApiCredential = {
        id,
        ...credential,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        tokenExpiresAt: null,
        lastTested: null,
        testResult: null
      };
      this.apiCredentials.set(id, newCredential);
      return newCredential;
    }
  }
  
  async updateApiCredential(id: number, credential: Partial<InsertApiCredential>): Promise<ApiCredential> {
    try {
      const [updatedCredential] = await db
        .update(apiCredentials)
        .set({
          ...credential,
          updatedAt: new Date()
        })
        .where(eq(apiCredentials.id, id))
        .returning();
      
      if (!updatedCredential) {
        throw new Error(`API credential with ID ${id} not found`);
      }
      
      return updatedCredential;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const existingCredential = this.apiCredentials.get(id);
      if (!existingCredential) {
        throw new Error(`API credential with ID ${id} not found`);
      }
      
      const updatedCredential: ApiCredential = {
        ...existingCredential,
        ...credential,
        updatedAt: new Date()
      };
      
      this.apiCredentials.set(id, updatedCredential);
      return updatedCredential;
    }
  }
  
  async deleteApiCredential(id: number): Promise<boolean> {
    try {
      const result = await db
        .delete(apiCredentials)
        .where(eq(apiCredentials.id, id))
        .returning();
      
      return result.length > 0;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const deleted = this.apiCredentials.delete(id);
      return deleted;
    }
  }
  
  async testApiCredential(id: number): Promise<boolean> {
    const credential = await this.getApiCredential(id);
    if (!credential) {
      throw new Error(`API credential with ID ${id} not found`);
    }
    
    // In a real implementation, this would test the API credentials
    // For now, we'll just update the lastTested and testResult fields
    const testSuccess = Math.random() > 0.2; // 80% success rate for testing
    
    try {
      await db
        .update(apiCredentials)
        .set({
          lastTested: new Date(),
          testResult: testSuccess,
          updatedAt: new Date()
        })
        .where(eq(apiCredentials.id, id));
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      this.apiCredentials.set(id, {
        ...credential,
        lastTested: new Date(),
        testResult: testSuccess,
        updatedAt: new Date()
      });
    }
    
    return testSuccess;
  }
  
  // Admin dashboard methods - Service Integrations
  private serviceIntegrations: Map<number, ServiceIntegration> = new Map();
  private currentServiceIntegrationId = 1;
  
  async getServiceIntegration(id: number): Promise<ServiceIntegration | undefined> {
    try {
      const [integration] = await db.select().from(serviceIntegrations).where(eq(serviceIntegrations.id, id));
      return integration || undefined;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      return this.serviceIntegrations.get(id);
    }
  }
  
  async getServiceIntegrations(providerId?: number, active?: boolean): Promise<ServiceIntegration[]> {
    try {
      let query = db.select().from(serviceIntegrations);
      
      if (providerId !== undefined && active !== undefined) {
        query = query.where(and(
          eq(serviceIntegrations.providerId, providerId),
          eq(serviceIntegrations.isActive, active)
        ));
      } else if (providerId !== undefined) {
        query = query.where(eq(serviceIntegrations.providerId, providerId));
      } else if (active !== undefined) {
        query = query.where(eq(serviceIntegrations.isActive, active));
      }
      
      return query.orderBy(asc(serviceIntegrations.name));
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      let integrations = Array.from(this.serviceIntegrations.values());
      
      if (providerId !== undefined) {
        integrations = integrations.filter(integration => integration.providerId === providerId);
      }
      
      if (active !== undefined) {
        integrations = integrations.filter(integration => integration.isActive === active);
      }
      
      return integrations.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  
  async createServiceIntegration(integration: InsertServiceIntegration): Promise<ServiceIntegration> {
    try {
      const [newIntegration] = await db
        .insert(serviceIntegrations)
        .values({
          ...integration,
          isActive: true,
          usageCount: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .returning();
      return newIntegration;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const id = this.currentServiceIntegrationId++;
      const newIntegration: ServiceIntegration = {
        id,
        ...integration,
        isActive: true,
        usageCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        lastError: null,
        lastSuccessful: null
      };
      this.serviceIntegrations.set(id, newIntegration);
      return newIntegration;
    }
  }
  
  async updateServiceIntegration(id: number, integration: Partial<InsertServiceIntegration>): Promise<ServiceIntegration> {
    try {
      const [updatedIntegration] = await db
        .update(serviceIntegrations)
        .set({
          ...integration,
          updatedAt: new Date()
        })
        .where(eq(serviceIntegrations.id, id))
        .returning();
      
      if (!updatedIntegration) {
        throw new Error(`Service integration with ID ${id} not found`);
      }
      
      return updatedIntegration;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const existingIntegration = this.serviceIntegrations.get(id);
      if (!existingIntegration) {
        throw new Error(`Service integration with ID ${id} not found`);
      }
      
      const updatedIntegration: ServiceIntegration = {
        ...existingIntegration,
        ...integration,
        updatedAt: new Date()
      };
      
      this.serviceIntegrations.set(id, updatedIntegration);
      return updatedIntegration;
    }
  }
  
  async deleteServiceIntegration(id: number): Promise<boolean> {
    try {
      const result = await db
        .delete(serviceIntegrations)
        .where(eq(serviceIntegrations.id, id))
        .returning();
      
      return result.length > 0;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const deleted = this.serviceIntegrations.delete(id);
      return deleted;
    }
  }
  
  // Admin dashboard methods - Whitelabel Settings
  private whitelabelSetting: WhitelabelSetting | undefined;
  
  async getWhitelabelSettings(): Promise<WhitelabelSetting | undefined> {
    try {
      const [settings] = await db.select().from(whitelabelSettings);
      return settings || this.whitelabelSetting;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      return this.whitelabelSetting;
    }
  }
  
  async updateWhitelabelSettings(settings: Partial<InsertWhitelabelSetting>): Promise<WhitelabelSetting> {
    try {
      // First try to get existing settings
      const existingSettings = await this.getWhitelabelSettings();
      
      if (existingSettings) {
        // Update existing settings
        const [updatedSettings] = await db
          .update(whitelabelSettings)
          .set({
            ...settings,
            updatedAt: new Date()
          })
          .where(eq(whitelabelSettings.id, existingSettings.id))
          .returning();
        
        return updatedSettings;
      } else {
        // Create new settings
        const [newSettings] = await db
          .insert(whitelabelSettings)
          .values({
            ...settings,
            companyName: settings.companyName || 'DAC Marketplace',
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
          })
          .returning();
        
        return newSettings;
      }
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      if (this.whitelabelSetting) {
        this.whitelabelSetting = {
          ...this.whitelabelSetting,
          ...settings,
          updatedAt: new Date()
        };
      } else {
        this.whitelabelSetting = {
          id: 1,
          companyName: settings.companyName || 'DAC Marketplace',
          logoUrl: settings.logoUrl || null,
          faviconUrl: settings.faviconUrl || null,
          primaryColor: settings.primaryColor || '#3B82F6',
          secondaryColor: settings.secondaryColor || '#10B981',
          accentColor: settings.accentColor || '#8B5CF6',
          fontPrimary: settings.fontPrimary || 'Inter',
          fontSecondary: settings.fontSecondary || 'Inter',
          customCss: settings.customCss || null,
          customJs: settings.customJs || null,
          contactEmail: settings.contactEmail || null,
          supportUrl: settings.supportUrl || null,
          privacyPolicyUrl: settings.privacyPolicyUrl || null,
          termsOfServiceUrl: settings.termsOfServiceUrl || null,
          socialLinks: settings.socialLinks || null,
          customDomain: settings.customDomain || null,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        };
      }
      
      return this.whitelabelSetting;
    }
  }
  
  // Admin dashboard methods - API Usage Logs
  private apiUsageLogs: Map<number, ApiUsageLog> = new Map();
  private currentApiUsageLogId = 1;
  
  async getApiUsageLogs(integrationId?: number, from?: Date, to?: Date): Promise<ApiUsageLog[]> {
    try {
      let query = db.select().from(apiUsageLogs);
      
      if (integrationId !== undefined) {
        query = query.where(eq(apiUsageLogs.integrationId, integrationId));
      }
      
      if (from && to) {
        query = query.where(
          and(
            sql`${apiUsageLogs.timestamp} >= ${from}`,
            sql`${apiUsageLogs.timestamp} <= ${to}`
          )
        );
      } else if (from) {
        query = query.where(sql`${apiUsageLogs.timestamp} >= ${from}`);
      } else if (to) {
        query = query.where(sql`${apiUsageLogs.timestamp} <= ${to}`);
      }
      
      return query.orderBy(desc(apiUsageLogs.timestamp));
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      let logs = Array.from(this.apiUsageLogs.values());
      
      if (integrationId !== undefined) {
        logs = logs.filter(log => log.integrationId === integrationId);
      }
      
      if (from) {
        logs = logs.filter(log => new Date(log.timestamp) >= from);
      }
      
      if (to) {
        logs = logs.filter(log => new Date(log.timestamp) <= to);
      }
      
      return logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    }
  }
  
  async createApiUsageLog(log: InsertApiUsageLog): Promise<ApiUsageLog> {
    try {
      const [newLog] = await db
        .insert(apiUsageLogs)
        .values({
          ...log,
          timestamp: new Date()
        })
        .returning();
      
      // Update usage count for the integration
      if (newLog) {
        try {
          await db
            .update(serviceIntegrations)
            .set({
              usageCount: sql`${serviceIntegrations.usageCount} + 1`,
              lastSuccessful: newLog.statusCode >= 200 && newLog.statusCode < 300 ? new Date() : undefined,
              lastError: newLog.statusCode >= 400 ? newLog.errorMessage : undefined
            })
            .where(eq(serviceIntegrations.id, newLog.integrationId));
        } catch (error) {
          // Ignore if service integrations table doesn't exist yet
        }
      }
      
      return newLog;
    } catch (error) {
      // Fallback to in-memory if database table doesn't exist yet
      const id = this.currentApiUsageLogId++;
      const newLog: ApiUsageLog = {
        id,
        ...log,
        timestamp: new Date()
      };
      this.apiUsageLogs.set(id, newLog);
      
      // Update usage count for the integration
      const integration = this.serviceIntegrations.get(log.integrationId);
      if (integration) {
        this.serviceIntegrations.set(log.integrationId, {
          ...integration,
          usageCount: (integration.usageCount || 0) + 1,
          lastSuccessful: log.statusCode >= 200 && log.statusCode < 300 ? new Date() : integration.lastSuccessful,
          lastError: log.statusCode >= 400 ? log.errorMessage : integration.lastError
        });
      }
      
      return newLog;
    }
  }
  
  async getApiUsageSummary(integrationId?: number, period: 'day' | 'week' | 'month' = 'month'): Promise<{
    totalRequests: number;
    successRate: number;
    avgResponseTime: number;
    totalCost: number;
  }> {
    // Calculate date range based on period
    const now = new Date();
    let fromDate: Date;
    
    switch (period) {
      case 'day':
        fromDate = new Date(now);
        fromDate.setDate(now.getDate() - 1);
        break;
      case 'week':
        fromDate = new Date(now);
        fromDate.setDate(now.getDate() - 7);
        break;
      case 'month':
      default:
        fromDate = new Date(now);
        fromDate.setMonth(now.getMonth() - 1);
        break;
    }
    
    try {
      // Try using SQL for efficiency
      const logs = await this.getApiUsageLogs(integrationId, fromDate, now);
      
      if (logs.length === 0) {
        return {
          totalRequests: 0,
          successRate: 0,
          avgResponseTime: 0,
          totalCost: 0
        };
      }
      
      const successfulRequests = logs.filter(log => log.statusCode >= 200 && log.statusCode < 300).length;
      const totalResponseTime = logs.reduce((sum, log) => sum + (log.responseTime || 0), 0);
      const totalCost = logs.reduce((sum, log) => sum + Number(log.cost || 0), 0);
      
      return {
        totalRequests: logs.length,
        successRate: logs.length > 0 ? (successfulRequests / logs.length) * 100 : 0,
        avgResponseTime: logs.length > 0 ? totalResponseTime / logs.length : 0,
        totalCost
      };
    } catch (error) {
      // Fallback to in-memory calculation
      const logs = await this.getApiUsageLogs(integrationId, fromDate, now);
      
      if (logs.length === 0) {
        return {
          totalRequests: 0,
          successRate: 0,
          avgResponseTime: 0,
          totalCost: 0
        };
      }
      
      const successfulRequests = logs.filter(log => log.statusCode >= 200 && log.statusCode < 300).length;
      const totalResponseTime = logs.reduce((sum, log) => sum + (log.responseTime || 0), 0);
      const totalCost = logs.reduce((sum, log) => sum + Number(log.cost || 0), 0);
      
      return {
        totalRequests: logs.length,
        successRate: logs.length > 0 ? (successfulRequests / logs.length) * 100 : 0,
        avgResponseTime: logs.length > 0 ? totalResponseTime / logs.length : 0,
        totalCost
      };
    }
  }

  // Review methods for AI-driven review analysis
  async getReview(id: number): Promise<Review | undefined> {
    const [review] = await db.select().from(schema.reviews).where(eq(schema.reviews.id, id));
    return review || undefined;
  }
  
  async getReviews(processed?: boolean, userId?: number): Promise<Review[]> {
    let query = db.select().from(schema.reviews);
    
    // Apply filters if provided
    if (processed !== undefined) {
      query = query.where(eq(schema.reviews.processed, processed));
    }
    
    if (userId !== undefined) {
      query = query.where(eq(schema.reviews.userId, userId));
    }
    
    // Order by most recent first
    query = query.orderBy(desc(schema.reviews.timestamp));
    
    return await query;
  }
  
  async getUnprocessedReviews(): Promise<Review[]> {
    return await db
      .select()
      .from(schema.reviews)
      .where(eq(schema.reviews.processed, false))
      .orderBy(asc(schema.reviews.timestamp));
  }
  
  async createReview(review: InsertReview): Promise<Review> {
    const [newReview] = await db
      .insert(schema.reviews)
      .values(review)
      .returning();
    return newReview;
  }
  
  async updateReview(id: number, updates: Partial<Review>): Promise<Review> {
    const [updatedReview] = await db
      .update(schema.reviews)
      .set(updates)
      .where(eq(schema.reviews.id, id))
      .returning();
    return updatedReview;
  }
  
  async markReviewAsProcessed(
    id: number, 
    category: string, 
    sentiment: string, 
    summary: string
  ): Promise<Review> {
    const [updatedReview] = await db
      .update(schema.reviews)
      .set({
        category,
        sentiment,
        summary,
        processed: true
      })
      .where(eq(schema.reviews.id, id))
      .returning();
    return updatedReview;
  }
  
  async linkReviewToProposal(reviewId: number, proposalId: number): Promise<Review> {
    const [updatedReview] = await db
      .update(schema.reviews)
      .set({ proposalId })
      .where(eq(schema.reviews.id, reviewId))
      .returning();
    return updatedReview;
  }
  
  // Governance Proposal methods for AI-generated proposals
  async getGovernanceProposal(id: number): Promise<GovernanceProposal | undefined> {
    const [proposal] = await db
      .select()
      .from(schema.governanceProposals)
      .where(eq(schema.governanceProposals.id, id));
    return proposal || undefined;
  }
  
  async getGovernanceProposals(status?: string): Promise<GovernanceProposal[]> {
    let query = db.select().from(schema.governanceProposals);
    
    // Apply status filter if provided
    if (status) {
      query = query.where(eq(schema.governanceProposals.status, status));
    }
    
    // Order by most recent first
    query = query.orderBy(desc(schema.governanceProposals.createdAt));
    
    return await query;
  }
  
  async createGovernanceProposal(proposal: InsertGovernanceProposal): Promise<GovernanceProposal> {
    const [newProposal] = await db
      .insert(schema.governanceProposals)
      .values(proposal)
      .returning();
    return newProposal;
  }
  
  async updateGovernanceProposal(
    id: number, 
    updates: Partial<GovernanceProposal>
  ): Promise<GovernanceProposal> {
    const now = new Date();
    const [updatedProposal] = await db
      .update(schema.governanceProposals)
      .set({
        ...updates,
        updatedAt: now
      })
      .where(eq(schema.governanceProposals.id, id))
      .returning();
    return updatedProposal;
  }
  
  async updateGovernanceProposalStatus(id: number, status: string): Promise<GovernanceProposal> {
    const now = new Date();
    const [updatedProposal] = await db
      .update(schema.governanceProposals)
      .set({
        status,
        updatedAt: now
      })
      .where(eq(schema.governanceProposals.id, id))
      .returning();
    return updatedProposal;
  }
  
  async updateGovernanceProposalVotes(
    id: number, 
    voteType: string, 
    votePower: number
  ): Promise<GovernanceProposal> {
    // Get the current proposal
    const proposal = await this.getGovernanceProposal(id);
    if (!proposal) {
      throw new Error(`Proposal with ID ${id} not found`);
    }
    
    // Update the appropriate vote count
    const now = new Date();
    let updates: Record<string, any> = { updatedAt: now };
    
    if (voteType === 'for') {
      updates.votesFor = Number(proposal.votesFor || 0) + votePower;
    } else if (voteType === 'against') {
      updates.votesAgainst = Number(proposal.votesAgainst || 0) + votePower;
    } else if (voteType === 'abstain') {
      updates.votesAbstain = Number(proposal.votesAbstain || 0) + votePower;
    } else {
      throw new Error(`Invalid vote type: ${voteType}`);
    }
    
    // Update the proposal
    const [updatedProposal] = await db
      .update(schema.governanceProposals)
      .set(updates)
      .where(eq(schema.governanceProposals.id, id))
      .returning();
    return updatedProposal;
  }

  // Worker Ratings & Reputation methods
  async getWorkerRating(id: number): Promise<WorkerRating | undefined> {
    const [rating] = await db
      .select()
      .from(schema.workerRatings)
      .where(eq(schema.workerRatings.id, id));
    return rating;
  }
  
  async getWorkerRatings(workerId: number): Promise<WorkerRating[]> {
    return await db
      .select()
      .from(schema.workerRatings)
      .where(eq(schema.workerRatings.workerId, workerId));
  }
  
  async createWorkerRating(rating: InsertWorkerRating): Promise<WorkerRating> {
    const [newRating] = await db
      .insert(schema.workerRatings)
      .values({
        ...rating,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .returning();
    return newRating;
  }
  
  async getWorkerReputation(workerId: number): Promise<WorkerReputation | undefined> {
    const [reputation] = await db
      .select()
      .from(schema.workerReputations)
      .where(eq(schema.workerReputations.workerId, workerId));
    
    if (reputation) {
      return reputation;
    }
    
    // Initialize if not exists
    return await this.initializeWorkerReputation(workerId);
  }
  
  private async initializeWorkerReputation(workerId: number): Promise<WorkerReputation | undefined> {
    // Check if the worker exists (is a user)
    const worker = await this.getUser(workerId);
    if (!worker) {
      return undefined;
    }
    
    try {
      const [newReputation] = await db
        .insert(schema.workerReputations)
        .values({
          workerId,
          overallScore: 0,
          totalRatings: 0,
          skillScores: {},
          reliability: 0,
          qualityScore: 0,
          communicationScore: 0,
          badges: [],
          level: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .returning();
      return newReputation;
    } catch (error) {
      console.error("Failed to initialize worker reputation:", error);
      return undefined;
    }
  }
  
  async updateWorkerReputation(workerId: number): Promise<WorkerReputation | undefined> {
    // Get all ratings for this worker
    const ratings = await this.getWorkerRatings(workerId);
    if (ratings.length === 0) {
      return await this.getWorkerReputation(workerId);
    }
    
    // Calculate overall score (average of all ratings)
    const overallScore = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
    
    // Calculate skill scores
    const skillScores = {};
    const skillRatings = {};
    
    ratings.forEach(rating => {
      if (rating.skills && rating.skills.length > 0) {
        rating.skills.forEach(skill => {
          if (!skillScores[skill]) {
            skillScores[skill] = 0;
            skillRatings[skill] = 0;
          }
          skillScores[skill] += rating.rating;
          skillRatings[skill]++;
        });
      }
    });
    
    // Calculate average for each skill
    Object.keys(skillScores).forEach(skill => {
      skillScores[skill] = skillScores[skill] / skillRatings[skill];
    });
    
    // Calculate other scores based on completed tasks
    const completedTasks = await db
      .select()
      .from(schema.tasks)
      .where(and(
        eq(schema.tasks.assigneeId, workerId),
        eq(schema.tasks.status, "completed")
      ));
    
    // Reliability: percentage of tasks completed on time
    const reliability = completedTasks.length > 0 
      ? completedTasks.filter(task => !task.dueDate || task.dueDate >= task.updatedAt).length / completedTasks.length
      : 0;
    
    // Calculate level based on number of completed tasks and average rating
    const level = Math.min(10, Math.floor(1 + (completedTasks.length / 5) + (overallScore / 2)));
    
    // Get existing reputation or create new one
    let reputation = await this.getWorkerReputation(workerId);
    if (!reputation) {
      return undefined;
    }
    
    // Assign badges based on achievements
    const badges = await this.assignWorkerBadges(workerId, {
      ...reputation,
      overallScore,
      skillScores,
      level,
      totalRatings: ratings.length
    });
    
    // Update reputation
    const [updatedReputation] = await db
      .update(schema.workerReputations)
      .set({
        overallScore,
        totalRatings: ratings.length,
        skillScores,
        reliability,
        qualityScore: overallScore, // Simplified for now
        communicationScore: overallScore, // Simplified for now
        level,
        badges,
        updatedAt: new Date()
      })
      .where(eq(schema.workerReputations.workerId, workerId))
      .returning();
    
    return updatedReputation;
  }
  
  private async assignWorkerBadges(workerId: number, reputation: Partial<WorkerReputation>): Promise<string[]> {
    const assignedBadges = [];
    
    // Assign level badges
    if (reputation.level >= 5) {
      assignedBadges.push("Experienced");
    }
    if (reputation.level >= 8) {
      assignedBadges.push("Expert");
    }
    
    // Assign rating badges
    if (reputation.overallScore >= 4.5 && reputation.totalRatings >= 5) {
      assignedBadges.push("Top Rated");
    }
    
    // Assign skill badges based on skill scores
    Object.entries(reputation.skillScores || {}).forEach(([skill, score]) => {
      if (score >= 4.5) {
        assignedBadges.push(`${skill} Specialist`);
      }
    });
    
    return assignedBadges;
  }
  
  async getWorkerBadges(): Promise<WorkerBadge[]> {
    return await db
      .select()
      .from(schema.workerBadges);
  }
  
  async getWorkerBadge(id: number): Promise<WorkerBadge | undefined> {
    const [badge] = await db
      .select()
      .from(schema.workerBadges)
      .where(eq(schema.workerBadges.id, id));
    return badge;
  }
  
  async createWorkerBadge(badge: InsertWorkerBadge): Promise<WorkerBadge> {
    const [newBadge] = await db
      .insert(schema.workerBadges)
      .values({
        ...badge,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .returning();
    return newBadge;
  }
  
  async getWorkerLeaderboard(category?: string, limit = 10): Promise<WorkerReputation[]> {
    if (category) {
      // For categories, we need a more complex query to filter by skills
      // This is a simplified approach. For a real app, we'd need a more sophisticated query
      const allReputations = await db
        .select()
        .from(schema.workerReputations)
        .orderBy(desc(schema.workerReputations.overallScore))
        .limit(100); // Get a larger set to filter from
      
      // Filter and sort by the specific skill
      const filteredReputations = allReputations
        .filter(rep => 
          rep.skillScores && 
          Object.keys(rep.skillScores).includes(category)
        )
        .sort((a, b) => 
          (b.skillScores[category] || 0) - (a.skillScores[category] || 0)
        )
        .slice(0, limit);
      
      return filteredReputations;
    } else {
      // Simple overall score leaderboard
      return await db
        .select()
        .from(schema.workerReputations)
        .orderBy(desc(schema.workerReputations.overallScore))
        .limit(limit);
    }
  }
  
  // Worker Profile methods
  async getWorkers(options: { search?: string, skill?: string, sort?: string, limit?: number }): Promise<Array<{
    id: number;
    username: string;
    name: string;
    skills: string[];
    avatarUrl: string;
    reputation: WorkerReputation;
  }>> {
    const { search, skill, sort = 'rating', limit = 20 } = options;
    
    // Start with a query for all users
    let query = db
      .select({
        user: schema.users,
      })
      .from(schema.users);
    
    // Apply search filter if provided
    if (search) {
      query = query.where(
        or(
          like(schema.users.username, `%${search}%`),
          like(schema.users.name, `%${search}%`)
        )
      );
    }
    
    // Get users
    const usersResult = await query.limit(limit || 20);
    
    // Now fetch reputations and construct the complete worker profiles
    const workers = await Promise.all(
      usersResult.map(async ({ user }) => {
        // Get the worker's reputation
        const [reputation] = await db
          .select()
          .from(schema.workerReputations)
          .where(eq(schema.workerReputations.workerId, user.id));
        
        // Get worker's tasks to extract skills
        const tasks = await this.getWorkerTasks(user.id);
        const taskCategories = tasks.map(t => t.category);
        const skills = Array.from(new Set(taskCategories));
        
        // If no reputation exists, create a default one
        const workerReputation = reputation || {
          id: 0,
          workerId: user.id,
          overallRating: "0",
          ratingsCount: 0,
          responseRate: "0",
          completionRate: "0",
          onTimeRate: "0",
          ratingsByCategory: {},
          badgeIds: [],
          experiencePoints: 0,
          level: 1,
          lastUpdated: new Date(),
        };
        
        return {
          id: user.id,
          username: user.username,
          name: user.name || "",
          skills: skills.length > 0 ? skills : ["Smart Contracts", "Web Development", "UI/UX Design"],
          avatarUrl: user.avatarUrl || "",
          reputation: workerReputation
        };
      })
    );
    
    // Sort workers based on the sort parameter
    let sortedWorkers = [...workers];
    switch (sort) {
      case 'rating':
        sortedWorkers.sort((a, b) => 
          Number(b.reputation.overallRating) - Number(a.reputation.overallRating)
        );
        break;
      case 'tasks':
        sortedWorkers.sort((a, b) => 
          b.reputation.ratingsCount - a.reputation.ratingsCount
        );
        break;
      case 'level':
        sortedWorkers.sort((a, b) => 
          b.reputation.level - a.reputation.level
        );
        break;
      case 'recent':
        sortedWorkers.sort((a, b) => 
          new Date(b.reputation.lastUpdated).getTime() - 
          new Date(a.reputation.lastUpdated).getTime()
        );
        break;
      default:
        break;
    }
    
    // Filter by skill if provided
    if (skill) {
      sortedWorkers = sortedWorkers.filter(worker => 
        worker.skills.some(s => s.toLowerCase() === skill.toLowerCase())
      );
    }
    
    return sortedWorkers;
  }
  
  async getWorkerProfile(workerId: number): Promise<{
    id: number;
    username: string;
    name: string;
    bio: string;
    skills: string[];
    avatarUrl: string;
    location: string;
    joinedDate: string;
  } | undefined> {
    // Get the user
    const [user] = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.id, workerId));
    
    if (!user) {
      return undefined;
    }
    
    // Get tasks performed by this worker to determine skills
    const tasks = await this.getWorkerTasks(workerId);
    const taskCategories = tasks.map(t => t.category);
    const skills = Array.from(new Set(taskCategories));
    
    // In a real app, we would have a separate table for worker profiles
    // with additional fields like bio, location, etc.
    return {
      id: user.id,
      username: user.username,
      name: user.name || user.username,
      bio: "Experienced blockchain specialist with a passion for decentralized applications. I specialize in smart contract development and web3 integration, with a focus on creating efficient and secure solutions for the DAC Marketplace.", // Demo bio
      skills: skills.length > 0 ? skills : ["Smart Contracts", "Web Development", "UI/UX Design"],
      avatarUrl: user.avatarUrl || "",
      location: "San Francisco, CA", // Demo location
      joinedDate: user.createdAt ? user.createdAt.toISOString() : new Date().toISOString(),
    };
  }
  
  async getWorkerTasks(workerId: number): Promise<Task[]> {
    return await db
      .select()
      .from(schema.tasks)
      .where(eq(schema.tasks.assigneeId, workerId))
      .orderBy(desc(schema.tasks.createdAt));
  }
  
  async getPopularSkills(): Promise<Array<{ name: string; count: number; }>> {
    // Get all tasks to analyze popular categories/skills
    const tasks = await db.select().from(schema.tasks);
    
    // Count occurrences of each category
    const categoryCount: Record<string, number> = {};
    tasks.forEach(task => {
      if (!categoryCount[task.category]) {
        categoryCount[task.category] = 0;
      }
      categoryCount[task.category]++;
    });
    
    // Convert to array and sort by count descending
    const popularSkills = Object.entries(categoryCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
    
    // If no tasks exist yet, provide some sample skills
    if (popularSkills.length === 0) {
      return [
        { name: "Smart Contracts", count: 32 },
        { name: "Web Development", count: 28 },
        { name: "UI/UX Design", count: 24 },
        { name: "Data Analysis", count: 19 },
        { name: "Photography", count: 17 },
        { name: "Legal Review", count: 14 },
      ];
    }
    
    return popularSkills;
  }
  
  async getTasksAdvanced(filters: {
    status?: string,
    category?: string,
    search?: string,
    sort?: string,
    minPrice?: number,
    maxPrice?: number,
    location?: string,
    skill?: string
  }): Promise<Task[]> {
    const { status, category, search, sort, minPrice, maxPrice, location, skill } = filters;
    
    // Build the base query
    let query = db.select().from(schema.tasks);
    
    // Apply filters
    if (status) {
      query = query.where(eq(schema.tasks.status, status));
    }
    
    if (category) {
      query = query.where(eq(schema.tasks.category, category));
    }
    
    // Skill is an alias for category in our data model
    if (skill && !category) {
      query = query.where(eq(schema.tasks.category, skill));
    }
    
    if (search) {
      query = query.where(
        or(
          like(schema.tasks.title, `%${search}%`),
          like(schema.tasks.description, `%${search}%`)
        )
      );
    }
    
    if (minPrice !== undefined) {
      query = query.where(sql`CAST(${schema.tasks.price} AS DECIMAL) >= ${minPrice}`);
    }
    
    if (maxPrice !== undefined) {
      query = query.where(sql`CAST(${schema.tasks.price} AS DECIMAL) <= ${maxPrice}`);
    }
    
    if (location) {
      query = query.where(like(schema.tasks.location, `%${location}%`));
    }
    
    // Apply sorting
    if (sort) {
      switch (sort) {
        case 'newest':
          query = query.orderBy(desc(schema.tasks.createdAt));
          break;
        case 'oldest':
          query = query.orderBy(asc(schema.tasks.createdAt));
          break;
        case 'price-high':
          query = query.orderBy(desc(sql`CAST(${schema.tasks.price} AS DECIMAL)`));
          break;
        case 'price-low':
          query = query.orderBy(asc(sql`CAST(${schema.tasks.price} AS DECIMAL)`));
          break;
        default:
          query = query.orderBy(desc(schema.tasks.createdAt));
          break;
      }
    } else {
      // Default sorting by newest
      query = query.orderBy(desc(schema.tasks.createdAt));
    }
    
    return await query;
  }
}

// Use DatabaseStorage instead of MemStorage
export const storage = new DatabaseStorage();

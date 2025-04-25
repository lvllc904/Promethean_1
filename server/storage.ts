import { 
  users, type User, type InsertUser,
  properties, type Property, type InsertProperty,
  governanceCategories, type GovernanceCategory, type InsertGovernanceCategory,
  proposals, type Proposal, type InsertProposal,
  votes, type Vote, type InsertVote,
  voteDelegations, type VoteDelegation, type InsertVoteDelegation,
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
  arbitrators, type Arbitrator, type InsertArbitrator,
  legalAgents, type LegalAgent, type InsertLegalAgent,
  legalConsultations, type LegalConsultation, type InsertLegalConsultation,
  legalDocumentTemplates, type LegalDocumentTemplate, type InsertLegalDocumentTemplate,
  legalComplianceChecks, type LegalComplianceCheck, type InsertLegalComplianceCheck
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
  
  // Governance category methods
  getGovernanceCategory(id: number): Promise<GovernanceCategory | undefined>;
  getGovernanceCategories(): Promise<GovernanceCategory[]>;
  createGovernanceCategory(category: InsertGovernanceCategory): Promise<GovernanceCategory>;
  updateGovernanceCategory(id: number, updates: Partial<GovernanceCategory>): Promise<GovernanceCategory>;
  
  // Proposal methods
  getProposal(id: number): Promise<Proposal | undefined>;
  getProposals(status?: string, categoryId?: number): Promise<Proposal[]>;
  createProposal(proposal: InsertProposal): Promise<Proposal>;
  executeProposal(proposalId: number): Promise<Proposal>;
  updateProposalVotes(proposalId: number, voteType: string, votePower: number): Promise<void>;
  
  // Enhanced vote methods for quadratic voting and delegation
  getVotesByUser(userId: number, proposalId?: number): Promise<Vote[]>;
  calculateQuadraticVotePower(baseVotes: number): Promise<number>;
  
  // Vote delegation methods
  getVoteDelegation(id: number): Promise<VoteDelegation | undefined>;
  getVoteDelegationsByDelegator(delegatorId: number): Promise<VoteDelegation[]>;
  getVoteDelegationsByDelegate(delegateId: number): Promise<VoteDelegation[]>;
  getActiveVoteDelegationsForProposal(proposalId: number): Promise<VoteDelegation[]>;
  createVoteDelegation(delegation: InsertVoteDelegation): Promise<VoteDelegation>;
  updateVoteDelegation(id: number, active: boolean): Promise<VoteDelegation>;
  
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
  
  // Legal Agent Network methods
  getLegalAgent(id: number): Promise<LegalAgent | undefined>;
  getLegalAgents(options?: { expertise?: string; jurisdiction?: string; language?: string }): Promise<LegalAgent[]>;
  createLegalAgent(agent: InsertLegalAgent): Promise<LegalAgent>;
  updateLegalAgent(id: number, updates: Partial<InsertLegalAgent>): Promise<LegalAgent>;
  
  // Legal Consultation methods
  getLegalConsultation(id: number): Promise<LegalConsultation | undefined>;
  getLegalConsultationsByUser(userId: number): Promise<LegalConsultation[]>;
  createLegalConsultation(consultation: InsertLegalConsultation): Promise<LegalConsultation>;
  updateLegalConsultation(id: number, updates: Partial<LegalConsultation>): Promise<LegalConsultation>;
  addMessageToConsultation(id: number, message: { role: string; content: string; }): Promise<LegalConsultation>;
  completeConsultation(id: number, summary: string, legalAdvice: string): Promise<LegalConsultation>;
  
  // Legal Document Template methods
  getLegalDocumentTemplate(id: number): Promise<LegalDocumentTemplate | undefined>;
  getLegalDocumentTemplates(options?: { documentType?: string; jurisdiction?: string }): Promise<LegalDocumentTemplate[]>;
  createLegalDocumentTemplate(template: InsertLegalDocumentTemplate): Promise<LegalDocumentTemplate>;
  updateLegalDocumentTemplate(id: number, updates: Partial<InsertLegalDocumentTemplate>): Promise<LegalDocumentTemplate>;
  
  // Legal Compliance Check methods
  getLegalComplianceCheck(id: number): Promise<LegalComplianceCheck | undefined>;
  getLegalComplianceChecksByUser(userId: number): Promise<LegalComplianceCheck[]>;
  getLegalComplianceChecksByProperty(propertyId: number): Promise<LegalComplianceCheck[]>;
  createLegalComplianceCheck(check: InsertLegalComplianceCheck): Promise<LegalComplianceCheck>;
  updateLegalComplianceCheck(id: number, updates: Partial<LegalComplianceCheck>): Promise<LegalComplianceCheck>;
  completeComplianceCheck(id: number, status: string, report: any, issues: any[], recommendations: any[]): Promise<LegalComplianceCheck>;
}

export class MemStorage implements IStorage {
  private usersByUsername = new Map<string, number>();
  private usersByEmail = new Map<string, number>();
  private usersByWalletAddress = new Map<string, number>();
  
  // Maps and counters for advanced governance
  private governanceCategories = new Map<number, GovernanceCategory>();
  private voteDelegations = new Map<number, VoteDelegation>();
  private currentGovernanceCategoryId = 1;
  private currentVoteDelegationId = 1;
  
  // Governance category methods
  async getGovernanceCategory(id: number): Promise<GovernanceCategory | undefined> {
    return this.governanceCategories.get(id);
  }
  
  async getGovernanceCategories(): Promise<GovernanceCategory[]> {
    return Array.from(this.governanceCategories.values()).filter(category => category.isActive);
  }
  
  async createGovernanceCategory(category: InsertGovernanceCategory): Promise<GovernanceCategory> {
    const id = this.currentGovernanceCategoryId++;
    const now = new Date();
    const newCategory: GovernanceCategory = {
      id,
      ...category,
      isActive: true,
      createdAt: now,
      updatedAt: now
    };
    this.governanceCategories.set(id, newCategory);
    return newCategory;
  }
  
  async updateGovernanceCategory(id: number, updates: Partial<GovernanceCategory>): Promise<GovernanceCategory> {
    const category = this.governanceCategories.get(id);
    if (!category) {
      throw new Error(`Governance category with id ${id} not found`);
    }
    
    const updatedCategory: GovernanceCategory = {
      ...category,
      ...updates,
      updatedAt: new Date()
    };
    this.governanceCategories.set(id, updatedCategory);
    return updatedCategory;
  }
  
  // Updated proposal methods to support categories
  async getProposals(status?: string, categoryId?: number): Promise<Proposal[]> {
    let proposals = Array.from(this.proposals.values());
    
    if (status) {
      proposals = proposals.filter(proposal => proposal.status === status);
    }
    
    if (categoryId) {
      proposals = proposals.filter(proposal => proposal.categoryId === categoryId);
    }
    
    return proposals;
  }
  
  // Execute a proposal, updating its status
  async executeProposal(proposalId: number): Promise<Proposal> {
    const proposal = this.proposals.get(proposalId);
    if (!proposal) {
      throw new Error(`Proposal with id ${proposalId} not found`);
    }
    
    const updatedProposal: Proposal = {
      ...proposal,
      status: 'executed',
      updatedAt: new Date()
    };
    this.proposals.set(proposalId, updatedProposal);
    return updatedProposal;
  }
  
  // Vote delegation methods
  async getVoteDelegation(id: number): Promise<VoteDelegation | undefined> {
    return this.voteDelegations.get(id);
  }
  
  async getVoteDelegationsByDelegator(delegatorId: number): Promise<VoteDelegation[]> {
    return Array.from(this.voteDelegations.values())
      .filter(delegation => delegation.delegatorId === delegatorId);
  }
  
  async getVoteDelegationsByDelegate(delegateId: number): Promise<VoteDelegation[]> {
    return Array.from(this.voteDelegations.values())
      .filter(delegation => delegation.delegateId === delegateId);
  }
  
  async getActiveVoteDelegationsForProposal(proposalId: number): Promise<VoteDelegation[]> {
    const proposal = await this.getProposal(proposalId);
    if (!proposal) {
      return [];
    }
    
    return Array.from(this.voteDelegations.values()).filter(delegation => {
      if (!delegation.active) return false;
      
      // Check if this delegation applies to this proposal
      if (delegation.proposalId === proposalId) return true;
      if (delegation.scope === 'global') return true;
      if (delegation.scope === 'category' && delegation.categoryId === proposal.categoryId) return true;
      
      return false;
    });
  }
  
  async createVoteDelegation(delegation: InsertVoteDelegation): Promise<VoteDelegation> {
    const id = this.currentVoteDelegationId++;
    const now = new Date();
    const newDelegation: VoteDelegation = {
      id,
      ...delegation,
      active: true,
      createdAt: now,
      updatedAt: now
    };
    this.voteDelegations.set(id, newDelegation);
    return newDelegation;
  }
  
  async updateVoteDelegation(id: number, active: boolean): Promise<VoteDelegation> {
    const delegation = this.voteDelegations.get(id);
    if (!delegation) {
      throw new Error(`Vote delegation with id ${id} not found`);
    }
    
    const updatedDelegation: VoteDelegation = {
      ...delegation,
      active,
      updatedAt: new Date()
    };
    this.voteDelegations.set(id, updatedDelegation);
    return updatedDelegation;
  }
  
  // Enhanced vote methods for quadratic voting
  async getVotesByUser(userId: number, proposalId?: number): Promise<Vote[]> {
    let votes = Array.from(this.votes.values()).filter(vote => vote.userId === userId);
    
    if (proposalId) {
      votes = votes.filter(vote => vote.proposalId === proposalId);
    }
    
    return votes;
  }
  
  async calculateQuadraticVotePower(baseVotes: number): Promise<number> {
    // Quadratic voting formula: vote power = sqrt(baseVotes)
    return Math.floor(Math.sqrt(baseVotes) * 100) / 100; // Round to 2 decimal places
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const userId = this.usersByUsername.get(username);
    if (!userId) return undefined;
    return this.users.get(userId);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const userId = this.usersByEmail.get(email);
    if (!userId) return undefined;
    return this.users.get(userId);
  }

  async getUserByWalletAddress(walletAddress: string): Promise<User | undefined> {
    const userId = this.usersByWalletAddress.get(walletAddress);
    if (!userId) return undefined;
    return this.users.get(userId);
  }

  async createUser(user: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const now = new Date();
    
    const newUser: User = {
      id,
      ...user,
      email: user.email || null,
      name: user.name || null,
      walletAddress: user.walletAddress || null,
      avatarUrl: user.avatarUrl || null,
      membershipTier: user.membershipTier || "free",
      dacTokenBalance: "10", // Initial governance tokens
      promTokenBalance: "0",
      receivedInitialProm: false,
      createdAt: now,
    };
    
    this.users.set(id, newUser);
    this.usersByUsername.set(user.username, id);
    if (user.email) this.usersByEmail.set(user.email, id);
    if (user.walletAddress) this.usersByWalletAddress.set(user.walletAddress, id);
    
    return newUser;
  }

  async updateUserMembership(id: number, membershipTier: string): Promise<User> {
    const user = this.users.get(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    
    const updatedUser: User = {
      ...user,
      membershipTier,
    };
    
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async updateUserWallet(id: number, walletAddress: string): Promise<User> {
    const user = this.users.get(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    
    // If user already had a wallet, remove the old mapping
    if (user.walletAddress) {
      this.usersByWalletAddress.delete(user.walletAddress);
    }
    
    const updatedUser: User = {
      ...user,
      walletAddress,
    };
    
    this.users.set(id, updatedUser);
    this.usersByWalletAddress.set(walletAddress, id);
    return updatedUser;
  }

  async countDaoMembers(): Promise<number> {
    return this.users.size;
  }

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
  private legalAgents: Map<number, LegalAgent>;
  private legalConsultations: Map<number, LegalConsultation>;
  private legalDocumentTemplates: Map<number, LegalDocumentTemplate>;
  private legalComplianceChecks: Map<number, LegalComplianceCheck>;
  
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
  private currentLegalAgentId: number;
  private currentLegalConsultationId: number;
  private currentLegalDocumentTemplateId: number;
  private currentLegalComplianceCheckId: number;

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
    this.legalAgents = new Map();
    this.legalConsultations = new Map();
    this.legalDocumentTemplates = new Map();
    this.legalComplianceChecks = new Map();
    
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
    this.currentLegalAgentId = 1;
    this.currentLegalConsultationId = 1;
    this.currentLegalDocumentTemplateId = 1;
    this.currentLegalComplianceCheckId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  // Legal Agent Network methods
  async getLegalAgent(id: number): Promise<LegalAgent | undefined> {
    return this.legalAgents.get(id);
  }

  async getLegalAgents(options?: { expertise?: string; jurisdiction?: string; language?: string }): Promise<LegalAgent[]> {
    let agents = Array.from(this.legalAgents.values()).filter(agent => agent.active);
    
    if (options?.expertise) {
      agents = agents.filter(agent => agent.expertise.includes(options.expertise as string));
    }
    
    if (options?.jurisdiction) {
      agents = agents.filter(agent => agent.jurisdictions.includes(options.jurisdiction as string));
    }
    
    if (options?.language) {
      agents = agents.filter(agent => agent.languages.includes(options.language as string));
    }
    
    return agents;
  }

  async createLegalAgent(agent: InsertLegalAgent): Promise<LegalAgent> {
    const id = this.currentLegalAgentId++;
    const now = new Date();
    
    const newAgent: LegalAgent = {
      id,
      ...agent,
      active: true,
      createdAt: now,
      updatedAt: now
    };
    
    this.legalAgents.set(id, newAgent);
    return newAgent;
  }

  async updateLegalAgent(id: number, updates: Partial<InsertLegalAgent>): Promise<LegalAgent> {
    const agent = this.legalAgents.get(id);
    if (!agent) {
      throw new Error(`Legal agent with id ${id} not found`);
    }
    
    const updatedAgent: LegalAgent = {
      ...agent,
      ...updates,
      updatedAt: new Date()
    };
    
    this.legalAgents.set(id, updatedAgent);
    return updatedAgent;
  }

  // Legal Consultation methods
  async getLegalConsultation(id: number): Promise<LegalConsultation | undefined> {
    return this.legalConsultations.get(id);
  }

  async getLegalConsultationsByUser(userId: number): Promise<LegalConsultation[]> {
    return Array.from(this.legalConsultations.values()).filter(
      consultation => consultation.userId === userId
    );
  }

  async createLegalConsultation(consultation: InsertLegalConsultation): Promise<LegalConsultation> {
    const id = this.currentLegalConsultationId++;
    const now = new Date();
    
    const newConsultation: LegalConsultation = {
      id,
      ...consultation,
      status: "active",
      conversationHistory: [],
      relatedDocuments: [],
      referenceLinks: [],
      summary: null,
      legalAdvice: null,
      startedAt: now,
      completedAt: null,
      createdAt: now,
      updatedAt: now
    };
    
    this.legalConsultations.set(id, newConsultation);
    return newConsultation;
  }

  async updateLegalConsultation(id: number, updates: Partial<LegalConsultation>): Promise<LegalConsultation> {
    const consultation = this.legalConsultations.get(id);
    if (!consultation) {
      throw new Error(`Legal consultation with id ${id} not found`);
    }
    
    const updatedConsultation: LegalConsultation = {
      ...consultation,
      ...updates,
      updatedAt: new Date()
    };
    
    this.legalConsultations.set(id, updatedConsultation);
    return updatedConsultation;
  }

  async addMessageToConsultation(id: number, message: { role: string; content: string; }): Promise<LegalConsultation> {
    const consultation = this.legalConsultations.get(id);
    if (!consultation) {
      throw new Error(`Legal consultation with id ${id} not found`);
    }
    
    const updatedHistory = [...consultation.conversationHistory, message];
    
    const updatedConsultation: LegalConsultation = {
      ...consultation,
      conversationHistory: updatedHistory,
      updatedAt: new Date()
    };
    
    this.legalConsultations.set(id, updatedConsultation);
    return updatedConsultation;
  }

  async completeConsultation(id: number, summary: string, legalAdvice: string): Promise<LegalConsultation> {
    const consultation = this.legalConsultations.get(id);
    if (!consultation) {
      throw new Error(`Legal consultation with id ${id} not found`);
    }
    
    const now = new Date();
    const updatedConsultation: LegalConsultation = {
      ...consultation,
      status: "completed",
      summary,
      legalAdvice,
      completedAt: now,
      updatedAt: now
    };
    
    this.legalConsultations.set(id, updatedConsultation);
    return updatedConsultation;
  }

  // Legal Document Template methods
  async getLegalDocumentTemplate(id: number): Promise<LegalDocumentTemplate | undefined> {
    return this.legalDocumentTemplates.get(id);
  }

  async getLegalDocumentTemplates(options?: { documentType?: string; jurisdiction?: string }): Promise<LegalDocumentTemplate[]> {
    let templates = Array.from(this.legalDocumentTemplates.values()).filter(template => template.active);
    
    if (options?.documentType) {
      templates = templates.filter(template => template.documentType === options.documentType);
    }
    
    if (options?.jurisdiction) {
      templates = templates.filter(template => template.jurisdictions.includes(options.jurisdiction as string));
    }
    
    return templates;
  }

  async createLegalDocumentTemplate(template: InsertLegalDocumentTemplate): Promise<LegalDocumentTemplate> {
    const id = this.currentLegalDocumentTemplateId++;
    const now = new Date();
    
    const newTemplate: LegalDocumentTemplate = {
      id,
      ...template,
      version: "1.0",
      active: true,
      createdAt: now,
      updatedAt: now
    };
    
    this.legalDocumentTemplates.set(id, newTemplate);
    return newTemplate;
  }

  async updateLegalDocumentTemplate(id: number, updates: Partial<InsertLegalDocumentTemplate>): Promise<LegalDocumentTemplate> {
    const template = this.legalDocumentTemplates.get(id);
    if (!template) {
      throw new Error(`Legal document template with id ${id} not found`);
    }
    
    // If we're updating the template content, increment the version
    let version = template.version;
    if (updates.templateContent) {
      const [major, minor] = template.version.split('.').map(Number);
      version = `${major}.${minor + 1}`;
    }
    
    const updatedTemplate: LegalDocumentTemplate = {
      ...template,
      ...updates,
      version,
      updatedAt: new Date()
    };
    
    this.legalDocumentTemplates.set(id, updatedTemplate);
    return updatedTemplate;
  }

  // Legal Compliance Check methods
  async getLegalComplianceCheck(id: number): Promise<LegalComplianceCheck | undefined> {
    return this.legalComplianceChecks.get(id);
  }

  async getLegalComplianceChecksByUser(userId: number): Promise<LegalComplianceCheck[]> {
    return Array.from(this.legalComplianceChecks.values()).filter(
      check => check.userId === userId
    );
  }

  async getLegalComplianceChecksByProperty(propertyId: number): Promise<LegalComplianceCheck[]> {
    return Array.from(this.legalComplianceChecks.values()).filter(
      check => check.propertyId === propertyId
    );
  }

  async createLegalComplianceCheck(check: InsertLegalComplianceCheck): Promise<LegalComplianceCheck> {
    const id = this.currentLegalComplianceCheckId++;
    const now = new Date();
    
    const newCheck: LegalComplianceCheck = {
      id,
      ...check,
      status: "pending",
      complianceReport: null,
      issues: [],
      recommendations: [],
      completedAt: null,
      createdAt: now,
      updatedAt: now
    };
    
    this.legalComplianceChecks.set(id, newCheck);
    return newCheck;
  }

  async updateLegalComplianceCheck(id: number, updates: Partial<LegalComplianceCheck>): Promise<LegalComplianceCheck> {
    const check = this.legalComplianceChecks.get(id);
    if (!check) {
      throw new Error(`Legal compliance check with id ${id} not found`);
    }
    
    const updatedCheck: LegalComplianceCheck = {
      ...check,
      ...updates,
      updatedAt: new Date()
    };
    
    this.legalComplianceChecks.set(id, updatedCheck);
    return updatedCheck;
  }

  async completeComplianceCheck(
    id: number, 
    status: string, 
    report: any, 
    issues: any[], 
    recommendations: any[]
  ): Promise<LegalComplianceCheck> {
    const check = this.legalComplianceChecks.get(id);
    if (!check) {
      throw new Error(`Legal compliance check with id ${id} not found`);
    }
    
    const now = new Date();
    const updatedCheck: LegalComplianceCheck = {
      ...check,
      status,
      complianceReport: report,
      issues,
      recommendations,
      completedAt: now,
      updatedAt: now
    };
    
    this.legalComplianceChecks.set(id, updatedCheck);
    return updatedCheck;
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
    
    // Initialize legal agent network data
    
    // Create sample legal agents
    this.createLegalAgent({
      name: "PropertyLaw GPT",
      description: "Specialized in real estate laws and property transactions across the United States",
      expertise: ["Real Estate Transactions", "Property Law", "Title Transfers", "Zoning Regulations"],
      jurisdictions: ["USA", "California", "New York", "Texas", "Florida"],
      languages: ["English", "Spanish"],
      modelProvider: "OpenAI",
      modelName: "gpt-4o",
      promptTemplate: "You are PropertyLaw GPT, an AI legal assistant specializing in real estate law in the United States. Please analyze the following property transaction case and provide legal guidance: {{query}}",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    });
    
    this.createLegalAgent({
      name: "International Property Counsel",
      description: "Expert in international property laws, cross-border transactions, and global real estate investments",
      expertise: ["International Property Law", "Cross-border Transactions", "Foreign Investment", "Tax Implications"],
      jurisdictions: ["Global", "EU", "UK", "China", "UAE", "Singapore"],
      languages: ["English", "French", "Mandarin", "Arabic"],
      modelProvider: "Anthropic",
      modelName: "claude-3-sonnet-20240229",
      promptTemplate: "You are International Property Counsel, an AI legal assistant specializing in international real estate law. Please analyze the following global property transaction and provide legal guidance: {{query}}",
      avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    });
    
    this.createLegalAgent({
      name: "Commercial RE Advisor",
      description: "Specialized in commercial real estate contracts, leases, and development projects",
      expertise: ["Commercial Real Estate", "Leasing", "Development Contracts", "Financing"],
      jurisdictions: ["USA", "Canada", "UK"],
      languages: ["English"],
      modelProvider: "OpenAI",
      modelName: "gpt-4o",
      promptTemplate: "You are Commercial RE Advisor, an AI legal assistant specializing in commercial real estate. Please analyze the following commercial property matter and provide legal guidance: {{query}}",
      avatarUrl: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    });
    
    // Create sample document templates
    this.createLegalDocumentTemplate({
      title: "Standard Residential Purchase Agreement",
      description: "A comprehensive purchase agreement template for residential real estate transactions",
      jurisdictions: ["USA"],
      documentType: "Purchase Agreement",
      templateContent: "REAL ESTATE PURCHASE AGREEMENT\n\nThis Real Estate Purchase Agreement (\"Agreement\") is made and entered into as of {{date}} by and between {{seller_name}} (\"Seller\") and {{buyer_name}} (\"Buyer\").\n\n1. PROPERTY: Seller agrees to sell and Buyer agrees to buy the real property located at {{property_address}}, legally described as {{legal_description}} (\"Property\").\n\n2. PURCHASE PRICE: The purchase price for the Property is ${{purchase_price}} (\"Purchase Price\").\n\n3. PAYMENT TERMS: Buyer shall pay the Purchase Price as follows:\n   a. ${{earnest_money}} as earnest money deposit upon execution of this Agreement.\n   b. ${{down_payment}} as down payment at closing.\n   c. ${{mortgage_amount}} through a mortgage loan to be obtained by Buyer.\n\n...",
      variables: {
        date: { type: "date", description: "Date of agreement" },
        seller_name: { type: "string", description: "Legal name of the seller" },
        buyer_name: { type: "string", description: "Legal name of the buyer" },
        property_address: { type: "string", description: "Complete property address" },
        legal_description: { type: "string", description: "Legal property description from title" },
        purchase_price: { type: "number", description: "Total purchase price in USD" },
        earnest_money: { type: "number", description: "Earnest money deposit amount" },
        down_payment: { type: "number", description: "Down payment amount" },
        mortgage_amount: { type: "number", description: "Mortgage loan amount" }
      },
      createdBy: 1
    });
    
    this.createLegalDocumentTemplate({
      title: "Commercial Property Lease Agreement",
      description: "A comprehensive lease agreement template for commercial properties",
      jurisdictions: ["USA"],
      documentType: "Lease Agreement",
      templateContent: "COMMERCIAL PROPERTY LEASE AGREEMENT\n\nThis Commercial Property Lease Agreement (\"Lease\") is made and entered into as of {{date}} by and between {{lessor_name}} (\"Lessor\") and {{lessee_name}} (\"Lessee\").\n\n1. PREMISES: Lessor hereby leases to Lessee and Lessee hereby leases from Lessor the commercial property located at {{property_address}} (\"Premises\"), consisting of approximately {{square_footage}} square feet.\n\n2. TERM: The term of this Lease shall be for {{lease_term}} months, commencing on {{start_date}} and ending on {{end_date}} (\"Lease Term\").\n\n3. RENT: Lessee shall pay to Lessor as rent for the Premises the sum of ${{monthly_rent}} per month (\"Base Rent\").\n\n...",
      variables: {
        date: { type: "date", description: "Date of agreement" },
        lessor_name: { type: "string", description: "Legal name of the property owner" },
        lessee_name: { type: "string", description: "Legal name of the tenant" },
        property_address: { type: "string", description: "Complete property address" },
        square_footage: { type: "number", description: "Square footage of the premises" },
        lease_term: { type: "number", description: "Length of lease in months" },
        start_date: { type: "date", description: "Lease start date" },
        end_date: { type: "date", description: "Lease end date" },
        monthly_rent: { type: "number", description: "Monthly rent amount" }
      },
      createdBy: 1
    });
    
    // Create a sample consultation
    const userId = 1;
    const agentId = 1;
    
    this.createLegalConsultation({
      userId,
      agentId,
      query: "I'm planning to purchase a property in California that has an existing tenant on a month-to-month lease. What are my legal rights and responsibilities regarding the tenant after I purchase the property?",
      jurisdiction: "California",
      propertyId: 1
    });
    
    // Create a sample compliance check
    this.createLegalComplianceCheck({
      userId,
      checkType: "Property Purchase",
      jurisdiction: "California",
      propertyId: 1
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
    const now = new Date();
    
    // Calculate vote power if using quadratic voting
    let votePower = insertVote.votePower;
    const baseVotes = insertVote.baseVotes;
    
    if (baseVotes) {
      // Apply quadratic voting formula
      votePower = await this.calculateQuadraticVotePower(baseVotes);
    }
    
    // Check for delegated votes
    const delegations = await this.getActiveVoteDelegationsForProposal(insertVote.proposalId);
    const userDelegations = delegations.filter(del => del.delegateId === insertVote.userId);
    
    // Create the primary vote
    const vote: Vote = { 
      ...insertVote, 
      id, 
      votePower,
      isQuadratic: true,
      isDelegated: false,
      delegatedFrom: null,
      createdAt: now 
    };
    this.votes.set(id, vote);
    
    // Create votes for each delegation
    for (const delegation of userDelegations) {
      const delegator = await this.getUser(delegation.delegatorId);
      if (!delegator) continue;
      
      // Skip if delegator has already voted directly
      const existingVote = Array.from(this.votes.values()).find(v => 
        v.proposalId === insertVote.proposalId && v.userId === delegation.delegatorId
      );
      if (existingVote) continue;
      
      // Create a delegated vote
      const delegatedId = this.currentVoteId++;
      let delegatedBaseVotes = 0;
      
      // Use delegator's token balance as the base votes
      if (delegator.dacTokenBalance) {
        delegatedBaseVotes = parseFloat(delegator.dacTokenBalance);
      }
      
      // Apply quadratic voting formula
      const delegatedVotePower = await this.calculateQuadraticVotePower(delegatedBaseVotes);
      
      const delegatedVote: Vote = {
        id: delegatedId,
        proposalId: insertVote.proposalId,
        userId: delegation.delegatorId,
        voteType: insertVote.voteType,
        votePower: delegatedVotePower,
        baseVotes: delegatedBaseVotes,
        isQuadratic: true,
        isDelegated: true,
        delegatedFrom: insertVote.userId,
        createdAt: now
      };
      
      this.votes.set(delegatedId, delegatedVote);
      
      // Update proposal vote counts
      await this.updateProposalVotes(insertVote.proposalId, insertVote.voteType, delegatedVotePower);
    }
    
    // Update proposal vote counts for the main vote
    await this.updateProposalVotes(insertVote.proposalId, insertVote.voteType, votePower);
    
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
  // Governance category methods
  async getGovernanceCategory(id: number): Promise<GovernanceCategory | undefined> {
    const categories = await db.select().from(schema.governanceCategories).where(eq(schema.governanceCategories.id, id));
    return categories.length > 0 ? categories[0] : undefined;
  }
  
  async getGovernanceCategories(): Promise<GovernanceCategory[]> {
    return await db.select().from(schema.governanceCategories).where(eq(schema.governanceCategories.isActive, true));
  }
  
  async createGovernanceCategory(category: InsertGovernanceCategory): Promise<GovernanceCategory> {
    const [createdCategory] = await db.insert(schema.governanceCategories).values(category).returning();
    return createdCategory;
  }
  
  async updateGovernanceCategory(id: number, updates: Partial<GovernanceCategory>): Promise<GovernanceCategory> {
    const [updatedCategory] = await db
      .update(schema.governanceCategories)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(schema.governanceCategories.id, id))
      .returning();
    return updatedCategory;
  }
  
  // Vote delegation methods
  async getVoteDelegation(id: number): Promise<VoteDelegation | undefined> {
    const delegations = await db.select().from(schema.voteDelegations).where(eq(schema.voteDelegations.id, id));
    return delegations.length > 0 ? delegations[0] : undefined;
  }
  
  async getVoteDelegationsByDelegator(delegatorId: number): Promise<VoteDelegation[]> {
    return await db.select().from(schema.voteDelegations).where(eq(schema.voteDelegations.delegatorId, delegatorId));
  }
  
  async getVoteDelegationsByDelegate(delegateId: number): Promise<VoteDelegation[]> {
    return await db.select().from(schema.voteDelegations).where(eq(schema.voteDelegations.delegateId, delegateId));
  }
  
  async getActiveVoteDelegationsForProposal(proposalId: number): Promise<VoteDelegation[]> {
    const proposal = await this.getProposal(proposalId);
    if (!proposal) {
      return [];
    }
    
    // Get delegations that are active and either:
    // 1. Apply specifically to this proposal
    // 2. Apply globally
    // 3. Apply to the category of this proposal
    return await db.select().from(schema.voteDelegations).where(
      and(
        eq(schema.voteDelegations.active, true),
        or(
          eq(schema.voteDelegations.proposalId, proposalId),
          eq(schema.voteDelegations.scope, 'global'),
          and(
            eq(schema.voteDelegations.scope, 'category'),
            eq(schema.voteDelegations.categoryId, proposal.categoryId || 0)
          )
        )
      )
    );
  }
  
  async createVoteDelegation(delegation: InsertVoteDelegation): Promise<VoteDelegation> {
    const [createdDelegation] = await db.insert(schema.voteDelegations).values(delegation).returning();
    return createdDelegation;
  }
  
  async updateVoteDelegation(id: number, active: boolean): Promise<VoteDelegation> {
    const [updatedDelegation] = await db
      .update(schema.voteDelegations)
      .set({ active, updatedAt: new Date() })
      .where(eq(schema.voteDelegations.id, id))
      .returning();
    return updatedDelegation;
  }
  
  // Enhanced vote methods for quadratic voting
  async getVotesByUser(userId: number, proposalId?: number): Promise<Vote[]> {
    let query = db.select().from(schema.votes).where(eq(schema.votes.userId, userId));
    
    if (proposalId) {
      query = query.where(eq(schema.votes.proposalId, proposalId));
    }
    
    return await query;
  }
  
  async calculateQuadraticVotePower(baseVotes: number): Promise<number> {
    // Quadratic voting formula: vote power = sqrt(baseVotes)
    return Math.floor(Math.sqrt(baseVotes) * 100) / 100; // Round to 2 decimal places
  }
  
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const users = await db.select().from(schema.users).where(eq(schema.users.id, id));
    return users.length > 0 ? users[0] : undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const users = await db.select().from(schema.users).where(eq(schema.users.username, username));
    return users.length > 0 ? users[0] : undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    if (!email) return undefined;
    const users = await db.select().from(schema.users).where(eq(schema.users.email, email));
    return users.length > 0 ? users[0] : undefined;
  }

  async getUserByWalletAddress(walletAddress: string): Promise<User | undefined> {
    if (!walletAddress) return undefined;
    const users = await db.select().from(schema.users).where(eq(schema.users.walletAddress, walletAddress));
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

  async updateUserWallet(id: number, walletAddress: string): Promise<User> {
    const [updatedUser] = await db
      .update(schema.users)
      .set({ walletAddress })
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

  async getProposals(status?: string, categoryId?: number): Promise<Proposal[]> {
    let query = db.select().from(schema.proposals);
    
    if (status && categoryId) {
      query = query.where(
        and(
          eq(schema.proposals.status, status),
          eq(schema.proposals.categoryId, categoryId)
        )
      );
    } else if (status) {
      query = query.where(eq(schema.proposals.status, status));
    } else if (categoryId) {
      query = query.where(eq(schema.proposals.categoryId, categoryId));
    }
    
    return await query.orderBy(desc(schema.proposals.createdAt));
  }
  
  async executeProposal(proposalId: number): Promise<Proposal> {
    const [executedProposal] = await db
      .update(schema.proposals)
      .set({ 
        status: 'executed',
        updatedAt: new Date()
      })
      .where(eq(schema.proposals.id, proposalId))
      .returning();
    return executedProposal;
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
    // Calculate vote power if using quadratic voting
    let votePower = vote.votePower;
    const baseVotes = vote.baseVotes;
    
    if (baseVotes) {
      // Apply quadratic voting formula
      votePower = await this.calculateQuadraticVotePower(baseVotes);
    }
    
    // Insert the primary vote with calculated votePower
    const enhancedVote = {
      ...vote,
      votePower,
      isQuadratic: true,
      isDelegated: false,
      delegatedFrom: null
    };
    
    const [createdVote] = await db.insert(schema.votes).values(enhancedVote).returning();
    
    // Check for delegations
    const delegations = await this.getActiveVoteDelegationsForProposal(vote.proposalId);
    const userDelegations = delegations.filter(del => del.delegateId === vote.userId);
    
    // Create votes for each delegation
    for (const delegation of userDelegations) {
      // Get the delegator
      const delegator = await this.getUser(delegation.delegatorId);
      if (!delegator) continue;
      
      // Skip if delegator has already voted directly
      const existingVotes = await db.select()
        .from(schema.votes)
        .where(
          and(
            eq(schema.votes.proposalId, vote.proposalId),
            eq(schema.votes.userId, delegation.delegatorId)
          )
        );
        
      if (existingVotes.length > 0) continue;
      
      // Use delegator's token balance as the base votes
      let delegatedBaseVotes = 0;
      if (delegator.dacTokenBalance) {
        delegatedBaseVotes = parseFloat(delegator.dacTokenBalance);
      }
      
      // Apply quadratic voting formula
      const delegatedVotePower = await this.calculateQuadraticVotePower(delegatedBaseVotes);
      
      // Create a delegated vote
      const delegatedVote = {
        proposalId: vote.proposalId,
        userId: delegation.delegatorId,
        voteType: vote.voteType,
        votePower: delegatedVotePower,
        baseVotes: delegatedBaseVotes,
        isQuadratic: true,
        isDelegated: true,
        delegatedFrom: vote.userId,
        createdAt: new Date()
      };
      
      await db.insert(schema.votes).values(delegatedVote);
      
      // Update proposal vote counts
      await this.updateProposalVotes(vote.proposalId, vote.voteType, delegatedVotePower);
    }
    
    // Update proposal vote counts for the main vote
    await this.updateProposalVotes(vote.proposalId, vote.voteType, votePower);
    
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
    
    // Calculate overall rating (average of all ratings)
    const overallRating = parseFloat((ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(2));
    
    // Calculate ratings by category and skills
    const ratingsByCategory: Record<string, number> = {};
    const criteriaRatings: Record<string, { sum: number, count: number }> = {
      communication: { sum: 0, count: 0 },
      quality: { sum: 0, count: 0 },
      timeliness: { sum: 0, count: 0 },
      professionalism: { sum: 0, count: 0 },
      value: { sum: 0, count: 0 }
    };
    
    // Process detailed criteria from ratings
    ratings.forEach(rating => {
      if (rating.criteria) {
        const criteria = rating.criteria as Record<string, number>;
        
        // Process each criteria field if present
        Object.entries(criteria).forEach(([key, value]) => {
          if (criteriaRatings[key]) {
            criteriaRatings[key].sum += value;
            criteriaRatings[key].count++;
          }
        });
        
        // Also add task-specific categories based on metadata
        const task = this.getTask(rating.taskId);
        if (task && task.category) {
          if (!ratingsByCategory[task.category]) {
            ratingsByCategory[task.category] = 0;
            ratingsByCategory[`${task.category}_count`] = 0;
          }
          ratingsByCategory[task.category] += rating.rating;
          ratingsByCategory[`${task.category}_count`]++;
        }
      }
    });
    
    // Calculate average for each criteria
    Object.keys(criteriaRatings).forEach(key => {
      if (criteriaRatings[key].count > 0) {
        ratingsByCategory[key] = parseFloat((criteriaRatings[key].sum / criteriaRatings[key].count).toFixed(2));
      }
    });
    
    // Calculate category averages
    Object.keys(ratingsByCategory).forEach(category => {
      if (category.endsWith('_count')) return;
      const countKey = `${category}_count`;
      if (ratingsByCategory[countKey] > 0) {
        ratingsByCategory[category] = parseFloat((ratingsByCategory[category] / ratingsByCategory[countKey]).toFixed(2));
      }
    });
    
    // Get all worker's tasks (for various metrics)
    const allTasks = await db
      .select()
      .from(schema.tasks)
      .where(eq(schema.tasks.assigneeId, workerId));
    
    const completedTasks = allTasks.filter(task => task.status === "completed");
    const acceptedTasks = allTasks.filter(task => ["assigned", "in_progress", "completed"].includes(task.status || ""));
    
    // Calculate rates
    const completionRate = acceptedTasks.length > 0 
      ? parseFloat((completedTasks.length / acceptedTasks.length * 100).toFixed(2))
      : 0;
      
    const onTimeRate = completedTasks.length > 0 
      ? parseFloat((completedTasks.filter(task => 
          !task.dueDate || 
          (task.completedAt && new Date(task.completedAt) <= new Date(task.dueDate))
        ).length / completedTasks.length * 100).toFixed(2))
      : 0;
    
    // Calculate response rate based on task inquiries (simplified version)
    // In a real app, we'd track when a worker was contacted about a task
    const responseRate = parseFloat((Math.min(95, 70 + (completionRate / 10))).toFixed(2));
    
    // Calculate experience points based on various factors
    let experiencePoints = 0;
    
    // Base XP from completed tasks (10 XP per task)
    experiencePoints += completedTasks.length * 10;
    
    // XP from ratings (2 XP per 5-star, 1 XP per 4-star)
    ratings.forEach(rating => {
      if (rating.rating === 5) experiencePoints += 2;
      if (rating.rating === 4) experiencePoints += 1;
    });
    
    // Bonus XP for high on-time rate (up to 20 XP)
    experiencePoints += Math.floor(onTimeRate / 5);
    
    // Calculate level based on XP
    // Level formula: 1 + floor(sqrt(XP / 10))
    const level = Math.max(1, Math.floor(1 + Math.sqrt(experiencePoints / 10)));
    
    // Get existing reputation or create new one
    let reputation = await this.getWorkerReputation(workerId);
    if (!reputation) {
      return undefined;
    }
    
    // Get badges (badge IDs are stored in badgeIds field)
    const badgeIds = await this.calculateWorkerBadges(workerId, {
      experiencePoints,
      level,
      completedTaskCount: completedTasks.length,
      overallRating,
      onTimeRate,
      completionRate,
      ratingCount: ratings.length,
      categoryRatings: ratingsByCategory
    });
    
    // Update reputation
    const [updatedReputation] = await db
      .update(schema.workerReputations)
      .set({
        overallRating,
        ratingsCount: ratings.length,
        responseRate,
        completionRate,
        onTimeRate,
        ratingsByCategory: ratingsByCategory,
        badgeIds,
        experiencePoints,
        level,
        lastUpdated: new Date()
      })
      .where(eq(schema.workerReputations.workerId, workerId))
      .returning();
    
    return updatedReputation;
  }
  
  private async calculateWorkerBadges(
    workerId: number, 
    stats: {
      experiencePoints: number,
      level: number,
      completedTaskCount: number,
      overallRating: number,
      onTimeRate: number,
      completionRate: number,
      ratingCount: number,
      categoryRatings: Record<string, number>
    }
  ): Promise<number[]> {
    // Get all available badges from the database
    const allBadges = await this.getWorkerBadges();
    
    // Get worker's current badges
    const reputation = await this.getWorkerReputation(workerId);
    const currentBadgeIds = reputation?.badgeIds || [];
    
    // Create a set of badges to assign
    const badgesToAssign = new Set<number>(currentBadgeIds);
    
    // Helper function to check if badge is already assigned
    const isBadgeAssigned = (badgeId: number) => badgesToAssign.has(badgeId);
    
    // Process each badge to see if the worker qualifies
    for (const badge of allBadges) {
      // Skip if badge is already assigned
      if (isBadgeAssigned(badge.id)) {
        continue;
      }
      
      // Check badge criteria
      const criteria = badge.criteria as Record<string, any>;
      let qualified = true;
      
      // Validate against each criteria type
      if (criteria.minLevel && stats.level < criteria.minLevel) {
        qualified = false;
      }
      
      if (criteria.minExperiencePoints && stats.experiencePoints < criteria.minExperiencePoints) {
        qualified = false;
      }
      
      if (criteria.minCompletedTasks && stats.completedTaskCount < criteria.minCompletedTasks) {
        qualified = false;
      }
      
      if (criteria.minOverallRating && stats.overallRating < criteria.minOverallRating) {
        qualified = false;
      }
      
      if (criteria.minRatingCount && stats.ratingCount < criteria.minRatingCount) {
        qualified = false;
      }
      
      if (criteria.minOnTimeRate && stats.onTimeRate < criteria.minOnTimeRate) {
        qualified = false;
      }
      
      if (criteria.minCompletionRate && stats.completionRate < criteria.minCompletionRate) {
        qualified = false;
      }
      
      // Category-specific ratings criteria
      if (criteria.categoryRating) {
        for (const [category, minRating] of Object.entries(criteria.categoryRating)) {
          const workerRating = stats.categoryRatings[category];
          if (!workerRating || workerRating < minRating) {
            qualified = false;
            break;
          }
        }
      }
      
      // If worker qualifies, add the badge
      if (qualified) {
        badgesToAssign.add(badge.id);
      }
    }
    
    // Check for special verification badges (these would be assigned by admin)
    const verifiedBadgeIds = [5, 10, 15]; // Example IDs for verification badges
    for (const badgeId of verifiedBadgeIds) {
      if (currentBadgeIds.includes(badgeId)) {
        badgesToAssign.add(badgeId);
      }
    }
    
    return Array.from(badgesToAssign);
  }
  
  // Backward compatibility method
  private async assignWorkerBadges(workerId: number, reputation: Partial<any>): Promise<string[]> {
    // Map old field names to new ones
    const stats = {
      experiencePoints: reputation.experiencePoints || 0,
      level: reputation.level || 1,
      completedTaskCount: 0, // Would need to be computed in the old system
      overallRating: Number(reputation.overallScore) || 0,
      onTimeRate: 0, // Not available in old system
      completionRate: 0, // Not available in old system
      ratingCount: reputation.totalRatings || 0,
      categoryRatings: reputation.skillScores || {}
    };
    
    // Get badge IDs
    const badgeIds = await this.calculateWorkerBadges(workerId, stats);
    
    // For backward compatibility, return string badge names
    const badges = await this.getWorkerBadges();
    return badgeIds
      .map(id => badges.find(b => b.id === id)?.name || "")
      .filter(name => name !== "");
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
  
  // Worker Skill Endorsement methods
  async getWorkerSkillEndorsement(id: number): Promise<WorkerSkillEndorsement | undefined> {
    const [endorsement] = await db
      .select()
      .from(schema.workerSkillEndorsements)
      .where(eq(schema.workerSkillEndorsements.id, id));
    return endorsement;
  }
  
  async getWorkerSkillEndorsements(workerId: number): Promise<WorkerSkillEndorsement[]> {
    return await db
      .select()
      .from(schema.workerSkillEndorsements)
      .where(eq(schema.workerSkillEndorsements.workerId, workerId));
  }
  
  async getWorkerSkillEndorsementsByEndorser(endorserId: number): Promise<WorkerSkillEndorsement[]> {
    return await db
      .select()
      .from(schema.workerSkillEndorsements)
      .where(eq(schema.workerSkillEndorsements.endorserId, endorserId));
  }
  
  async createWorkerSkillEndorsement(endorsement: InsertWorkerSkillEndorsement): Promise<WorkerSkillEndorsement> {
    // Check for existing endorsement from this user for this skill
    const [existingEndorsement] = await db
      .select()
      .from(schema.workerSkillEndorsements)
      .where(and(
        eq(schema.workerSkillEndorsements.workerId, endorsement.workerId),
        eq(schema.workerSkillEndorsements.endorserId, endorsement.endorserId),
        eq(schema.workerSkillEndorsements.skill, endorsement.skill)
      ));
      
    if (existingEndorsement) {
      // Update the existing endorsement instead of creating a new one
      const [updatedEndorsement] = await db
        .update(schema.workerSkillEndorsements)
        .set({
          level: endorsement.level,
          details: endorsement.details,
          createdAt: new Date() // Update the timestamp
        })
        .where(eq(schema.workerSkillEndorsements.id, existingEndorsement.id))
        .returning();
        
      return updatedEndorsement;
    }
    
    // Create a new endorsement
    const [newEndorsement] = await db
      .insert(schema.workerSkillEndorsements)
      .values({
        ...endorsement,
        createdAt: new Date()
      })
      .returning();
      
    // After adding/updating an endorsement, update the worker's reputation
    await this.updateWorkerReputation(endorsement.workerId);
      
    return newEndorsement;
  }
  
  async verifyWorkerSkillEndorsement(endorsementId: number, isVerified: boolean): Promise<WorkerSkillEndorsement> {
    const [updatedEndorsement] = await db
      .update(schema.workerSkillEndorsements)
      .set({ isVerified })
      .where(eq(schema.workerSkillEndorsements.id, endorsementId))
      .returning();
      
    // After verifying an endorsement, update the worker's reputation
    await this.updateWorkerReputation(updatedEndorsement.workerId);
      
    return updatedEndorsement;
  }
  
  async deleteWorkerSkillEndorsement(endorsementId: number): Promise<void> {
    // Get the endorsement first to know which worker to update later
    const [endorsement] = await db
      .select()
      .from(schema.workerSkillEndorsements)
      .where(eq(schema.workerSkillEndorsements.id, endorsementId));
      
    if (!endorsement) {
      throw new Error("Endorsement not found");
    }
    
    // Delete the endorsement
    await db
      .delete(schema.workerSkillEndorsements)
      .where(eq(schema.workerSkillEndorsements.id, endorsementId));
      
    // Update the worker's reputation
    await this.updateWorkerReputation(endorsement.workerId);
  }
  
  async getWorkerSkillsByEndorsements(workerId: number): Promise<Array<{
    skill: string;
    endorsementCount: number;
    averageLevel: number;
    verifiedCount: number;
  }>> {
    const endorsements = await this.getWorkerSkillEndorsements(workerId);
    
    // Group endorsements by skill
    const skillMap: Record<string, {
      count: number;
      totalLevel: number;
      verified: number;
    }> = {};
    
    endorsements.forEach(e => {
      if (!skillMap[e.skill]) {
        skillMap[e.skill] = { count: 0, totalLevel: 0, verified: 0 };
      }
      
      skillMap[e.skill].count++;
      skillMap[e.skill].totalLevel += e.level;
      
      if (e.isVerified) {
        skillMap[e.skill].verified++;
      }
    });
    
    // Convert to array and calculate averages
    return Object.entries(skillMap).map(([skill, data]) => ({
      skill,
      endorsementCount: data.count,
      averageLevel: parseFloat((data.totalLevel / data.count).toFixed(1)),
      verifiedCount: data.verified
    })).sort((a, b) => b.endorsementCount - a.endorsementCount);
  }
  
  async getWorkerLeaderboard(category?: string, limit = 10): Promise<WorkerReputation[]> {
    // Get all worker reputations
    const allReputations = await db
      .select()
      .from(schema.workerReputations)
      .orderBy(desc(schema.workerReputations.overallRating))
      .limit(100); // Get a larger set to filter from
      
    if (category) {
      // For category-specific leaderboards, filter by skills/criteria
      let filteredReputations = allReputations;
      
      // Filter based on whether this is a skill or a metric
      const metricCategories = ['responsiveness', 'completion', 'quality', 'timeliness', 'ontime', 'experience'];
      
      if (metricCategories.includes(category.toLowerCase())) {
        // This is a metric-based leaderboard
        switch (category.toLowerCase()) {
          case 'responsiveness':
            filteredReputations = allReputations
              .sort((a, b) => Number(b.responseRate) - Number(a.responseRate));
            break;
          case 'completion':
            filteredReputations = allReputations
              .sort((a, b) => Number(b.completionRate) - Number(a.completionRate));
            break;
          case 'ontime':
          case 'timeliness':
            filteredReputations = allReputations
              .sort((a, b) => Number(b.onTimeRate) - Number(a.onTimeRate));
            break;
          case 'experience':
            filteredReputations = allReputations
              .sort((a, b) => b.experiencePoints - a.experiencePoints);
            break;
          default:
            // Default to overall rating
            filteredReputations = allReputations
              .sort((a, b) => Number(b.overallRating) - Number(a.overallRating));
        }
      } else {
        // This is a skill/category-based leaderboard
        filteredReputations = allReputations
          .filter(rep => {
            // Check if the reputation has rating data for this category
            const ratings = rep.ratingsByCategory as Record<string, any>;
            return ratings && 
              Object.keys(ratings).some(key => key.toLowerCase() === category.toLowerCase());
          })
          .sort((a, b) => {
            const aRatings = a.ratingsByCategory as Record<string, any>;
            const bRatings = b.ratingsByCategory as Record<string, any>;
            
            // Find the matching category (case-insensitive)
            const aKey = Object.keys(aRatings || {}).find(k => k.toLowerCase() === category.toLowerCase());
            const bKey = Object.keys(bRatings || {}).find(k => k.toLowerCase() === category.toLowerCase());
            
            const aRating = aKey ? aRatings[aKey] : 0;
            const bRating = bKey ? bRatings[bKey] : 0;
            
            return bRating - aRating;
          });
      }
      
      return filteredReputations.slice(0, limit);
    } else {
      // Overall rating leaderboard
      return allReputations.slice(0, limit);
    }
  }
  
  async getTopBadgeHolders(badgeId: number, limit = 10): Promise<{user: User, reputation: WorkerReputation}[]> {
    // Get all workers who have this badge
    const reputations = await db
      .select()
      .from(schema.workerReputations)
      .where(sql`${schema.workerReputations.badgeIds} @> array[${badgeId}]::integer[]`);
      
    if (reputations.length === 0) {
      return [];
    }
    
    // Get the users associated with these reputations
    const userIds = reputations.map(rep => rep.workerId);
    const users = await db
      .select()
      .from(schema.users)
      .where(inArray(schema.users.id, userIds));
      
    // Join the data together
    const result = [];
    for (const reputation of reputations) {
      const user = users.find(u => u.id === reputation.workerId);
      if (user) {
        result.push({
          user,
          reputation
        });
      }
    }
    
    // Sort by experience points and limit
    return result
      .sort((a, b) => b.reputation.experiencePoints - a.reputation.experiencePoints)
      .slice(0, limit);
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

  // Legal Agent Network methods
  async getLegalAgent(id: number): Promise<LegalAgent | undefined> {
    const [agent] = await db
      .select()
      .from(schema.legalAgents)
      .where(eq(schema.legalAgents.id, id));
    return agent;
  }
  
  async getLegalAgents(options?: { expertise?: string; jurisdiction?: string; language?: string }): Promise<LegalAgent[]> {
    let query = db.select().from(schema.legalAgents).where(eq(schema.legalAgents.active, true));
    
    if (options?.expertise) {
      query = query.where(sql`${schema.legalAgents.expertise} @> ARRAY[${options.expertise}]::text[]`);
    }
    
    if (options?.jurisdiction) {
      query = query.where(sql`${schema.legalAgents.jurisdictions} @> ARRAY[${options.jurisdiction}]::text[]`);
    }
    
    if (options?.language) {
      query = query.where(sql`${schema.legalAgents.languages} @> ARRAY[${options.language}]::text[]`);
    }
    
    return await query;
  }
  
  async createLegalAgent(agent: InsertLegalAgent): Promise<LegalAgent> {
    const [createdAgent] = await db.insert(schema.legalAgents).values(agent).returning();
    return createdAgent;
  }
  
  async updateLegalAgent(id: number, updates: Partial<InsertLegalAgent>): Promise<LegalAgent> {
    const [updatedAgent] = await db
      .update(schema.legalAgents)
      .set(updates)
      .where(eq(schema.legalAgents.id, id))
      .returning();
    return updatedAgent;
  }
  
  // Legal Consultation methods
  async getLegalConsultation(id: number): Promise<LegalConsultation | undefined> {
    const [consultation] = await db
      .select()
      .from(schema.legalConsultations)
      .where(eq(schema.legalConsultations.id, id));
    return consultation;
  }
  
  async getLegalConsultationsByUser(userId: number): Promise<LegalConsultation[]> {
    return await db
      .select()
      .from(schema.legalConsultations)
      .where(eq(schema.legalConsultations.userId, userId))
      .orderBy(desc(schema.legalConsultations.createdAt));
  }
  
  async createLegalConsultation(consultation: InsertLegalConsultation): Promise<LegalConsultation> {
    const [createdConsultation] = await db
      .insert(schema.legalConsultations)
      .values({
        ...consultation,
        conversation: [],
        status: 'active',
        legalAdvice: null,
        summary: null
      })
      .returning();
    return createdConsultation;
  }
  
  async updateLegalConsultation(id: number, updates: Partial<LegalConsultation>): Promise<LegalConsultation> {
    const [updatedConsultation] = await db
      .update(schema.legalConsultations)
      .set(updates)
      .where(eq(schema.legalConsultations.id, id))
      .returning();
    return updatedConsultation;
  }
  
  async addMessageToConsultation(id: number, message: { role: string; content: string; }): Promise<LegalConsultation> {
    // First get the current consultation
    const consultation = await this.getLegalConsultation(id);
    if (!consultation) {
      throw new Error(`Consultation with ID ${id} not found`);
    }
    
    // Add the message to the conversation array
    const conversation = [...(consultation.conversation || []), message];
    
    // Update the consultation
    const [updatedConsultation] = await db
      .update(schema.legalConsultations)
      .set({ 
        conversation,
        updatedAt: new Date()
      })
      .where(eq(schema.legalConsultations.id, id))
      .returning();
    
    return updatedConsultation;
  }
  
  async completeConsultation(id: number, summary: string, legalAdvice: string): Promise<LegalConsultation> {
    const [completedConsultation] = await db
      .update(schema.legalConsultations)
      .set({ 
        status: 'completed',
        summary,
        legalAdvice,
        completedAt: new Date(),
        updatedAt: new Date()
      })
      .where(eq(schema.legalConsultations.id, id))
      .returning();
    
    return completedConsultation;
  }
  
  // Legal Document Template methods
  async getLegalDocumentTemplate(id: number): Promise<LegalDocumentTemplate | undefined> {
    const [template] = await db
      .select()
      .from(schema.legalDocumentTemplates)
      .where(eq(schema.legalDocumentTemplates.id, id));
    return template;
  }
  
  async getLegalDocumentTemplates(options?: { documentType?: string; jurisdiction?: string }): Promise<LegalDocumentTemplate[]> {
    let query = db
      .select()
      .from(schema.legalDocumentTemplates)
      .where(eq(schema.legalDocumentTemplates.active, true));
    
    if (options?.documentType) {
      query = query.where(eq(schema.legalDocumentTemplates.documentType, options.documentType));
    }
    
    if (options?.jurisdiction) {
      query = query.where(sql`${schema.legalDocumentTemplates.jurisdictions} @> ARRAY[${options.jurisdiction}]::text[]`);
    }
    
    return await query.orderBy(asc(schema.legalDocumentTemplates.title));
  }
  
  async createLegalDocumentTemplate(template: InsertLegalDocumentTemplate): Promise<LegalDocumentTemplate> {
    const [createdTemplate] = await db
      .insert(schema.legalDocumentTemplates)
      .values({
        ...template,
        active: true,
        version: '1.0'
      })
      .returning();
    return createdTemplate;
  }
  
  async updateLegalDocumentTemplate(id: number, updates: Partial<InsertLegalDocumentTemplate>): Promise<LegalDocumentTemplate> {
    // If updating content, increment the version
    let versionUpdate = {};
    if (updates.templateContent) {
      const template = await this.getLegalDocumentTemplate(id);
      if (template) {
        const currentVersion = parseFloat(template.version || '1.0');
        versionUpdate = { version: (currentVersion + 0.1).toFixed(1) };
      }
    }
    
    const [updatedTemplate] = await db
      .update(schema.legalDocumentTemplates)
      .set({
        ...updates,
        ...versionUpdate,
        updatedAt: new Date()
      })
      .where(eq(schema.legalDocumentTemplates.id, id))
      .returning();
    
    return updatedTemplate;
  }
  
  // Legal Compliance Check methods
  async getLegalComplianceCheck(id: number): Promise<LegalComplianceCheck | undefined> {
    const [check] = await db
      .select()
      .from(schema.legalComplianceChecks)
      .where(eq(schema.legalComplianceChecks.id, id));
    return check;
  }
  
  async getLegalComplianceChecksByUser(userId: number): Promise<LegalComplianceCheck[]> {
    return await db
      .select()
      .from(schema.legalComplianceChecks)
      .where(eq(schema.legalComplianceChecks.userId, userId))
      .orderBy(desc(schema.legalComplianceChecks.createdAt));
  }
  
  async getLegalComplianceChecksByProperty(propertyId: number): Promise<LegalComplianceCheck[]> {
    return await db
      .select()
      .from(schema.legalComplianceChecks)
      .where(eq(schema.legalComplianceChecks.propertyId, propertyId))
      .orderBy(desc(schema.legalComplianceChecks.createdAt));
  }
  
  async createLegalComplianceCheck(check: InsertLegalComplianceCheck): Promise<LegalComplianceCheck> {
    const [createdCheck] = await db
      .insert(schema.legalComplianceChecks)
      .values({
        ...check,
        status: 'pending',
        complianceReport: null,
        issues: [],
        recommendations: [],
        completedAt: null
      })
      .returning();
    return createdCheck;
  }
  
  async updateLegalComplianceCheck(id: number, updates: Partial<LegalComplianceCheck>): Promise<LegalComplianceCheck> {
    const [updatedCheck] = await db
      .update(schema.legalComplianceChecks)
      .set({
        ...updates,
        updatedAt: new Date()
      })
      .where(eq(schema.legalComplianceChecks.id, id))
      .returning();
    return updatedCheck;
  }
  
  async completeComplianceCheck(id: number, status: string, report: any, issues: any[], recommendations: any[]): Promise<LegalComplianceCheck> {
    const [completedCheck] = await db
      .update(schema.legalComplianceChecks)
      .set({
        status,
        complianceReport: report,
        issues,
        recommendations,
        completedAt: new Date(),
        updatedAt: new Date()
      })
      .where(eq(schema.legalComplianceChecks.id, id))
      .returning();
    return completedCheck;
  }
}

// Use DatabaseStorage instead of MemStorage
export const storage = new DatabaseStorage();

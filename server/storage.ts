import { 
  users, type User, type InsertUser,
  properties, type Property, type InsertProperty,
  proposals, type Proposal, type InsertProposal,
  votes, type Vote, type InsertVote,
  tasks, type Task, type InsertTask,
  membershipTiers, type MembershipTier, type InsertMembershipTier
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
  createUser(user: InsertUser): Promise<User>;
  updateUserMembership(id: number, membershipTier: string): Promise<User>;
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
  
  // Vote methods
  getVote(id: number): Promise<Vote | undefined>;
  getVotesByProposal(proposalId: number): Promise<Vote[]>;
  createVote(vote: InsertVote): Promise<Vote>;
  
  // Task methods
  getTask(id: number): Promise<Task | undefined>;
  getTasks(status?: string, category?: string): Promise<Task[]>;
  createTask(task: InsertTask): Promise<Task>;
  
  // Membership methods
  getMembershipTier(id: number): Promise<MembershipTier | undefined>;
  getMembershipTiers(interval?: string): Promise<MembershipTier[]>;
  
  // Community methods
  getCommunityPosts(search?: string): Promise<CommunityPost[]>;
  getCommunityEvents(): Promise<CommunityEvent[]>;
  getCommunityResources(): Promise<CommunityResource[]>;
  getCommunityMembers(search?: string): Promise<CommunityMember[]>;
}

export class MemStorage implements IStorage {
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
}

// Use DatabaseStorage instead of MemStorage
export const storage = new DatabaseStorage();

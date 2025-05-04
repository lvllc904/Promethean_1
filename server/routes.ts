import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { 
  insertPropertySchema,
  insertProposalSchema,
  insertTaskSchema,
  insertVoteSchema,
  insertPromVestingScheduleSchema,
  insertPromTokenPriceSchema,
  insertServiceCategorySchema,
  insertServiceProviderSchema,
  insertApiCredentialSchema,
  insertServiceIntegrationSchema,
  insertWhitelabelSettingSchema,
  insertApiUsageLogSchema,
  insertReviewSchema,
  insertGovernanceProposalSchema,
  insertWorkerRatingSchema,
  insertWorkerReputationSchema,
  insertWorkerBadgeSchema,
  insertWorkerSkillEndorsementSchema,
  insertEscrowSchema,
  insertTitleTransferSchema,
  insertArbitratorSchema,
  insertLegalAgentSchema,
  insertLegalConsultationSchema,
  insertLegalDocumentTemplateSchema,
  insertLegalComplianceCheckSchema,
  insertUiLabelSchema
} from "@shared/schema";
import { aiConcierge } from "./services/ai-concierge";
import { scheduler } from "./services/scheduler";
import { testRunner } from "./services/test-runner";
import { generatePropertyValuation, generatePropertyDescription } from "./services/ai";
import * as web3Service from "./services/web3";
import Stripe from "stripe";

import { requireSocialAuth, SocialAuthRequest } from './middleware/social-auth';
import { socialSecurityService } from './services/social-security';
import { socialProfileService } from './services/social-profile';
import { insertSocialProfileSchema, insertSocialPostSchema, insertSocialMessageSchema, socialMessages } from '@shared/schema';
import { eq, and, or, asc, desc, isNull, sql } from 'drizzle-orm';
import { db } from './db';

export async function registerRoutes(app: Express): Promise<Server> {
  // Base API prefix
  const apiPrefix = "/api";

  // Users
  app.get(`${apiPrefix}/users/me`, async (req, res) => {
    // In a real app, this would use authentication from the session
    const userId = req.session?.userId || 1;
    const user = await storage.getUser(userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Don't send password in response
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  });

  // Properties
  app.get(`${apiPrefix}/properties`, async (req, res) => {
    try {
      const properties = await storage.getProperties();
      res.json(properties);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch properties" });
    }
  });

  app.get(`${apiPrefix}/properties/featured`, async (req, res) => {
    try {
      const featuredProperties = await storage.getFeaturedProperties();
      res.json(featuredProperties);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured properties" });
    }
  });

  app.get(`${apiPrefix}/properties/:id`, async (req, res) => {
    try {
      const propertyId = parseInt(req.params.id);
      const property = await storage.getProperty(propertyId);
      
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }
      
      res.json(property);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch property" });
    }
  });

  app.post(`${apiPrefix}/properties`, async (req, res) => {
    try {
      const propertyData = insertPropertySchema.parse(req.body);
      const newProperty = await storage.createProperty(propertyData);
      res.status(201).json(newProperty);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid property data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create property" });
    }
  });

  // DAO Governance
  app.get(`${apiPrefix}/dao/proposals`, async (req, res) => {
    try {
      const status = req.query.status as string;
      const categoryId = req.query.categoryId ? parseInt(req.query.categoryId as string) : undefined;
      const proposals = await storage.getProposals(status, categoryId);
      res.json(proposals);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch proposals" });
    }
  });

  app.get(`${apiPrefix}/dao/proposals/active`, async (req, res) => {
    try {
      const activeProposals = await storage.getProposals("active");
      res.json(activeProposals);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch active proposals" });
    }
  });

  app.get(`${apiPrefix}/dao/proposals/:id`, async (req, res) => {
    try {
      const proposalId = parseInt(req.params.id);
      const proposal = await storage.getProposal(proposalId);
      
      if (!proposal) {
        return res.status(404).json({ message: "Proposal not found" });
      }
      
      res.json(proposal);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch proposal" });
    }
  });

  app.post(`${apiPrefix}/dao/proposals`, async (req, res) => {
    try {
      const proposalData = insertProposalSchema.parse(req.body);
      const newProposal = await storage.createProposal(proposalData);
      res.status(201).json(newProposal);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid proposal data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create proposal" });
    }
  });

  app.post(`${apiPrefix}/dao/votes`, async (req, res) => {
    try {
      const voteData = insertVoteSchema.parse(req.body);
      
      // Record the vote - note that createVote handles vote power calculation
      // and automatically applies delegation votes if applicable
      const newVote = await storage.createVote(voteData);
      
      // Get the updated proposal after voting
      const updatedProposal = await storage.getProposal(voteData.proposalId);
      
      res.status(201).json({
        vote: newVote,
        proposal: updatedProposal
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid vote data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to record vote" });
    }
  });

  app.get(`${apiPrefix}/dao/stats`, async (req, res) => {
    try {
      const members = await storage.countDaoMembers();
      const proposals = await storage.getProposals();
      const activeProposals = await storage.getProposals("active");
      const categories = await storage.getGovernanceCategories();
      
      // Calculate votes and total delegations
      let totalVotes = 0;
      let executedProposals = 0;
      let activeVoteDelegations = 0;
      
      for (const proposal of proposals) {
        // Sum up all votes (for, against, abstain)
        const proposalVotes = (proposal.votesFor || 0) + (proposal.votesAgainst || 0) + (proposal.votesAbstain || 0);
        totalVotes += proposalVotes;
        
        if (proposal.status === 'executed') {
          executedProposals++;
        }
      }
      
      // Get all active delegations (this is specific to the current user if authenticated)
      if (req.isAuthenticated() && req.user) {
        const userId = req.user.id;
        // Count both delegations created by this user and delegated to this user
        const delegatedByUser = await storage.getVoteDelegationsByDelegator(userId);
        const delegatedToUser = await storage.getVoteDelegationsByDelegate(userId);
        
        // Filter to only active delegations
        const activeDelegatedByUser = delegatedByUser.filter(d => d.active);
        const activeDelegatedToUser = delegatedToUser.filter(d => d.active);
        
        activeVoteDelegations = activeDelegatedByUser.length + activeDelegatedToUser.length;
      }
      
      res.json({
        members,
        totalProposals: proposals.length,
        activeProposals: activeProposals.length,
        executedProposals,
        totalVotes,
        categoryCount: categories.length,
        activeVoteDelegations,
        tokenPrice: 0.853, // This would come from a price feed in a real app
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch DAO statistics" });
    }
  });
  
  // Governance Categories
  app.get(`${apiPrefix}/dao/governance-categories`, async (req, res) => {
    try {
      const categories = await storage.getGovernanceCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch governance categories" });
    }
  });
  
  app.get(`${apiPrefix}/dao/governance-categories/:id`, async (req, res) => {
    try {
      const categoryId = parseInt(req.params.id);
      const category = await storage.getGovernanceCategory(categoryId);
      
      if (!category) {
        return res.status(404).json({ message: "Governance category not found" });
      }
      
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch governance category" });
    }
  });
  
  app.post(`${apiPrefix}/dao/governance-categories`, async (req, res) => {
    try {
      const categoryData = insertGovernanceCategorySchema.parse(req.body);
      const newCategory = await storage.createGovernanceCategory(categoryData);
      res.status(201).json(newCategory);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid category data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create governance category" });
    }
  });
  
  app.patch(`${apiPrefix}/dao/governance-categories/:id`, async (req, res) => {
    try {
      const categoryId = parseInt(req.params.id);
      const updates = req.body;
      const updatedCategory = await storage.updateGovernanceCategory(categoryId, updates);
      res.json(updatedCategory);
    } catch (error) {
      res.status(500).json({ message: "Failed to update governance category" });
    }
  });
  
  // Vote Delegations
  app.get(`${apiPrefix}/dao/vote-delegations`, async (req, res) => {
    try {
      const delegatorId = req.query.delegatorId ? parseInt(req.query.delegatorId as string) : undefined;
      const delegateId = req.query.delegateId ? parseInt(req.query.delegateId as string) : undefined;
      
      if (delegatorId) {
        const delegations = await storage.getVoteDelegationsByDelegator(delegatorId);
        return res.json(delegations);
      }
      
      if (delegateId) {
        const delegations = await storage.getVoteDelegationsByDelegate(delegateId);
        return res.json(delegations);
      }
      
      // Default to getting all active delegations
      const delegations = await storage.getVoteDelegationsByDelegator(parseInt(req.user?.id.toString() || "0"));
      res.json(delegations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch vote delegations" });
    }
  });
  
  app.post(`${apiPrefix}/dao/vote-delegations`, async (req, res) => {
    try {
      const delegationData = insertVoteDelegationSchema.parse(req.body);
      const newDelegation = await storage.createVoteDelegation(delegationData);
      res.status(201).json(newDelegation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid delegation data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create vote delegation" });
    }
  });
  
  app.patch(`${apiPrefix}/dao/vote-delegations/:id/toggle`, async (req, res) => {
    try {
      const delegationId = parseInt(req.params.id);
      const { active } = req.body;
      
      if (active === undefined || typeof active !== 'boolean') {
        return res.status(400).json({ message: "Active status must be a boolean value" });
      }
      
      const updatedDelegation = await storage.updateVoteDelegation(delegationId, active);
      res.json(updatedDelegation);
    } catch (error) {
      res.status(500).json({ message: "Failed to update vote delegation" });
    }
  });
  
  // Advanced Delegation - Multilevel Delegation
  app.post(`${apiPrefix}/dao/multilevel-delegations`, async (req, res) => {
    try {
      const { delegatorId, delegateId, scope, categoryId, proposalId, transferable, expiresAt } = req.body;
      
      if (!delegatorId || !delegateId || !scope) {
        return res.status(400).json({ 
          message: "Required fields missing. delegatorId, delegateId, and scope are required" 
        });
      }
      
      // Create multilevel delegation with chain tracking and loop prevention
      const newDelegation = await storage.createMultilevelDelegation(
        delegatorId,
        delegateId,
        scope,
        categoryId,
        proposalId,
        transferable,
        expiresAt
      );
      
      res.status(201).json(newDelegation);
    } catch (error) {
      if (error instanceof Error && error.message.includes("Circular delegation")) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: "Failed to create multilevel delegation" });
    }
  });
  
  // Get delegation chain for a user
  app.get(`${apiPrefix}/dao/delegation-chain/:userId`, async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const proposalId = req.query.proposalId ? parseInt(req.query.proposalId as string) : undefined;
      
      const chain = await storage.getUserDelegationChain(userId, proposalId);
      res.json(chain);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch delegation chain" });
    }
  });
  
  // Get delegation graph (network visualization)
  app.get(`${apiPrefix}/dao/delegation-graph`, async (req, res) => {
    try {
      const proposalId = req.query.proposalId ? parseInt(req.query.proposalId as string) : undefined;
      
      const graph = await storage.getDelegationGraph(proposalId);
      res.json(graph);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch delegation graph" });
    }
  });
  
  // Get detailed governance statistics
  app.get(`${apiPrefix}/dao/governance-stats`, async (req, res) => {
    try {
      const stats = await storage.getGovernanceStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch governance statistics" });
    }
  });
  
  // Get user's voting power (with optional quadratic calculation)
  app.get(`${apiPrefix}/dao/voting-power/:userId`, async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const proposalId = req.query.proposalId ? parseInt(req.query.proposalId as string) : undefined;
      
      const votingPower = await storage.getTotalUserVotingPower(userId, proposalId);
      res.json(votingPower);
    } catch (error) {
      res.status(500).json({ message: "Failed to calculate voting power" });
    }
  });
  
  // Update user governance settings (quadratic voting preference, etc.)
  app.patch(`${apiPrefix}/dao/governance-settings/:userId`, async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const settings = req.body;
      
      const updatedUser = await storage.updateUserGovernanceSettings(userId, settings);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Failed to update governance settings" });
    }
  });
  
  // Proposal execution
  app.post(`${apiPrefix}/dao/proposals/:id/execute`, async (req, res) => {
    try {
      const proposalId = parseInt(req.params.id);
      const proposal = await storage.getProposal(proposalId);
      
      if (!proposal) {
        return res.status(404).json({ message: "Proposal not found" });
      }
      
      // Check if proposal has passed voting
      if (proposal.status !== 'active') {
        return res.status(400).json({ message: "Only active proposals can be executed" });
      }
      
      // Check if the proposal has passed (more votes for than against)
      if ((proposal.votesFor || 0) <= (proposal.votesAgainst || 0)) {
        return res.status(400).json({ 
          message: "Proposal cannot be executed because it has not passed the vote threshold"
        });
      }
      
      // Execute the proposal
      const executedProposal = await storage.executeProposal(proposalId);
      res.json(executedProposal);
    } catch (error) {
      res.status(500).json({ message: "Failed to execute proposal" });
    }
  });

  // Tasks / Marketplace
  app.get(`${apiPrefix}/tasks`, async (req, res) => {
    try {
      const status = req.query.status as string;
      const category = req.query.category as string;
      const search = req.query.search as string;
      const sort = req.query.sort as string;
      const minPrice = req.query.minPrice ? Number(req.query.minPrice) : undefined;
      const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : undefined;
      const location = req.query.location as string;
      const skill = req.query.skill as string;
      
      const tasks = await storage.getTasksAdvanced({
        status,
        category,
        search,
        sort,
        minPrice,
        maxPrice,
        location,
        skill
      });
      
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tasks" });
    }
  });

  app.get(`${apiPrefix}/tasks/available`, async (req, res) => {
    try {
      const availableTasks = await storage.getTasks("open");
      res.json(availableTasks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch available tasks" });
    }
  });

  app.post(`${apiPrefix}/tasks`, async (req, res) => {
    try {
      const taskData = insertTaskSchema.parse(req.body);
      const newTask = await storage.createTask(taskData);
      res.status(201).json(newTask);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid task data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create task" });
    }
  });

  app.get(`${apiPrefix}/tasks/stats`, async (req, res) => {
    try {
      const availableTasks = await storage.getTasks("open");
      const completedTasks = await storage.getTasks("completed");
      
      // Calculate average reward
      const totalPrice = availableTasks.reduce((sum, task) => sum + Number(task.price), 0);
      const averageReward = availableTasks.length > 0 ? totalPrice / availableTasks.length : 0;
      
      // Count unique assignees for active workers
      const activeWorkers = new Set(
        (await storage.getTasks("assigned")).map(task => task.assigneeId)
      ).size;
      
      res.json({
        availableTasks: availableTasks.length,
        completedTasks: completedTasks.length,
        averageReward,
        activeWorkers
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch task statistics" });
    }
  });
  
  // Gig Worker Ratings & Reputation Endpoints
  app.post(`${apiPrefix}/worker/ratings`, async (req, res) => {
    try {
      const ratingData = insertWorkerRatingSchema.parse(req.body);
      
      // Validate that the task exists and is completed
      const task = await storage.getTask(ratingData.taskId);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      
      if (task.status !== "completed") {
        return res.status(400).json({ message: "Can only rate completed tasks" });
      }
      
      // Validate that the rater is the task creator
      if (task.creatorId !== ratingData.raterId) {
        return res.status(403).json({ message: "Only the task creator can provide ratings" });
      }
      
      // Validate that the worker is the task assignee
      if (task.assigneeId !== ratingData.workerId) {
        return res.status(400).json({ message: "Worker must be the task assignee" });
      }
      
      const newRating = await storage.createWorkerRating(ratingData);
      
      // Update the worker's reputation
      await storage.updateWorkerReputation(ratingData.workerId);
      
      res.status(201).json(newRating);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid rating data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to save worker rating" });
    }
  });
  
  app.get(`${apiPrefix}/worker/ratings/:workerId`, async (req, res) => {
    try {
      const workerId = parseInt(req.params.workerId);
      const ratings = await storage.getWorkerRatings(workerId);
      res.json(ratings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch worker ratings" });
    }
  });
  
  app.get(`${apiPrefix}/worker/reputation/:workerId`, async (req, res) => {
    try {
      const workerId = parseInt(req.params.workerId);
      const reputation = await storage.getWorkerReputation(workerId);
      
      if (!reputation) {
        return res.status(404).json({ message: "Worker reputation not found" });
      }
      
      res.json(reputation);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch worker reputation" });
    }
  });
  
  app.get(`${apiPrefix}/worker/badges`, async (req, res) => {
    try {
      const badges = await storage.getWorkerBadges();
      res.json(badges);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch worker badges" });
    }
  });
  
  app.post(`${apiPrefix}/worker/badges`, async (req, res) => {
    try {
      const badgeData = insertWorkerBadgeSchema.parse(req.body);
      const newBadge = await storage.createWorkerBadge(badgeData);
      res.status(201).json(newBadge);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid badge data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create worker badge" });
    }
  });
  
  app.get(`${apiPrefix}/worker/leaderboard`, async (req, res) => {
    try {
      const category = req.query.category as string;
      const limit = parseInt(req.query.limit as string || "10");
      
      const leaderboard = await storage.getWorkerLeaderboard(category, limit);
      res.json(leaderboard);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch worker leaderboard" });
    }
  });
  
  // New Worker Profile Endpoints
  app.get(`${apiPrefix}/workers`, async (req, res) => {
    try {
      const search = req.query.search as string;
      const skill = req.query.skill as string;
      const sort = req.query.sort as string || 'rating';
      const limit = parseInt(req.query.limit as string || "20");
      
      const workers = await storage.getWorkers({ search, skill, sort, limit });
      res.json(workers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch workers" });
    }
  });
  
  app.get(`${apiPrefix}/workers/:id`, async (req, res) => {
    try {
      const workerId = parseInt(req.params.id);
      const worker = await storage.getWorkerProfile(workerId);
      
      if (!worker) {
        return res.status(404).json({ message: "Worker not found" });
      }
      
      const reputation = await storage.getWorkerReputation(workerId);
      
      res.json({
        profile: worker,
        reputation: reputation || {
          overallRating: 0,
          ratingsCount: 0,
          level: 1,
          experiencePoints: 0,
          badgeIds: [],
          ratingsByCategory: {}
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch worker profile" });
    }
  });
  
  app.get(`${apiPrefix}/workers/:id/ratings`, async (req, res) => {
    try {
      const workerId = parseInt(req.params.id);
      const ratings = await storage.getWorkerRatings(workerId);
      res.json(ratings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch worker ratings" });
    }
  });
  
  app.get(`${apiPrefix}/workers/:id/tasks`, async (req, res) => {
    try {
      const workerId = parseInt(req.params.id);
      const tasks = await storage.getWorkerTasks(workerId);
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch worker tasks" });
    }
  });
  
  app.get(`${apiPrefix}/skills/popular`, async (req, res) => {
    try {
      const skills = await storage.getPopularSkills();
      res.json(skills);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch popular skills" });
    }
  });
  
  // Worker Skill Endorsement Routes
  app.get(`${apiPrefix}/workers/:id/endorsements`, async (req, res) => {
    try {
      const workerId = parseInt(req.params.id);
      const endorsements = await storage.getWorkerSkillEndorsements(workerId);
      res.json(endorsements);
    } catch (error) {
      console.error("Error fetching worker skill endorsements:", error);
      res.status(500).json({ message: "Failed to fetch worker skill endorsements" });
    }
  });
  
  app.get(`${apiPrefix}/workers/:id/skills`, async (req, res) => {
    try {
      const workerId = parseInt(req.params.id);
      const skills = await storage.getWorkerSkillsByEndorsements(workerId);
      res.json(skills);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch worker skills" });
    }
  });
  
  app.post(`${apiPrefix}/workers/:id/endorsements`, async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }
      
      const workerId = parseInt(req.params.id);
      const endorserId = req.user.id;
      
      // Prevent self-endorsement
      if (workerId === endorserId) {
        return res.status(400).json({ message: "Cannot endorse yourself" });
      }
      
      // Parse and validate the endorsement data
      const endorsementData = insertWorkerSkillEndorsementSchema.parse({
        ...req.body,
        workerId,
        endorserId
      });
      
      const newEndorsement = await storage.createWorkerSkillEndorsement(endorsementData);
      res.status(201).json(newEndorsement);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid endorsement data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create worker skill endorsement" });
    }
  });
  
  app.put(`${apiPrefix}/workers/endorsements/:id/verify`, async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }
      
      // Only admin or moderators should be able to verify endorsements
      if (!req.user.role || !['admin', 'moderator'].includes(req.user.role)) {
        return res.status(403).json({ message: "Insufficient permissions" });
      }
      
      const endorsementId = parseInt(req.params.id);
      const { isVerified } = req.body;
      
      if (typeof isVerified !== 'boolean') {
        return res.status(400).json({ message: "isVerified parameter must be a boolean" });
      }
      
      const updatedEndorsement = await storage.verifyWorkerSkillEndorsement(
        endorsementId, 
        isVerified
      );
      
      res.json(updatedEndorsement);
      
    } catch (error) {
      res.status(500).json({ message: "Failed to verify worker skill endorsement" });
    }
  });
  
  app.delete(`${apiPrefix}/workers/endorsements/:id`, async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Authentication required" });
      }
      
      const endorsementId = parseInt(req.params.id);
      
      // Get the endorsement to check if the user has permission to delete it
      const endorsement = await storage.getWorkerSkillEndorsement(endorsementId);
      
      if (!endorsement) {
        return res.status(404).json({ message: "Endorsement not found" });
      }
      
      // Only the endorser, the endorsed worker, or admins can delete endorsements
      if (endorsement.endorserId !== req.user.id && 
          endorsement.workerId !== req.user.id && 
          req.user.role !== 'admin') {
        return res.status(403).json({ message: "You don't have permission to delete this endorsement" });
      }
      
      await storage.deleteWorkerSkillEndorsement(endorsementId);
      res.sendStatus(204);
      
    } catch (error) {
      res.status(500).json({ message: "Failed to delete worker skill endorsement" });
    }
  });

  // Membership Tiers
  app.get(`${apiPrefix}/membership-tiers`, async (req, res) => {
    try {
      const interval = req.query.interval as string || 'month';
      const membershipTiers = await storage.getMembershipTiers(interval);
      res.json(membershipTiers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch membership tiers" });
    }
  });

  app.post(`${apiPrefix}/users/membership`, async (req, res) => {
    try {
      const { userId, membershipTierId } = req.body;
      const tier = await storage.getMembershipTier(membershipTierId);
      
      if (!tier) {
        return res.status(404).json({ message: "Membership tier not found" });
      }
      
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      const updatedUser = await storage.updateUserMembership(userId, tier.name);
      
      // Don't return the password in the response
      const { password, ...userWithoutPassword } = updatedUser;
      res.json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Failed to update user membership" });
    }
  });

  // Community
  app.get(`${apiPrefix}/community/posts`, async (req, res) => {
    try {
      const search = req.query.search as string;
      const posts = await storage.getCommunityPosts(search);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch community posts" });
    }
  });

  app.get(`${apiPrefix}/community/events`, async (req, res) => {
    try {
      const events = await storage.getCommunityEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch community events" });
    }
  });

  app.get(`${apiPrefix}/community/resources`, async (req, res) => {
    try {
      const resources = await storage.getCommunityResources();
      res.json(resources);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch community resources" });
    }
  });

  app.get(`${apiPrefix}/community/members`, async (req, res) => {
    try {
      const search = req.query.search as string;
      const members = await storage.getCommunityMembers(search);
      res.json(members);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch community members" });
    }
  });

  // AI Services
  app.post(`${apiPrefix}/ai/valuation`, async (req, res) => {
    try {
      const propertyData = req.body;
      const valuation = await generatePropertyValuation(propertyData);
      res.json(valuation);
    } catch (error) {
      res.status(500).json({ message: "Failed to generate property valuation" });
    }
  });

  app.post(`${apiPrefix}/ai/description`, async (req, res) => {
    try {
      const propertyData = req.body;
      const description = await generatePropertyDescription(propertyData);
      res.json(description);
    } catch (error) {
      res.status(500).json({ message: "Failed to generate property description" });
    }
  });

  // Prom Token and Fractional Ownership API endpoints
  app.get(`${apiPrefix}/token-price-history`, async (req, res) => {
    try {
      // In a real implementation, this would fetch from the database
      const priceHistory = [
        { date: '2024-01', price: 1.0 },
        { date: '2024-02', price: 1.2 },
        { date: '2024-03', price: 1.15 },
        { date: '2024-04', price: 1.35 },
        { date: '2024-05', price: 1.42 },
        { date: '2024-06', price: 1.38 },
        { date: '2024-07', price: 1.50 },
        { date: '2024-08', price: 1.65 },
        { date: '2024-09', price: 1.72 },
        { date: '2024-10', price: 1.80 },
      ];
      res.json(priceHistory);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch token price history" });
    }
  });

  app.get(`${apiPrefix}/token-supply`, async (req, res) => {
    try {
      // Try to fetch from blockchain first
      try {
        const total = await web3Service.getPromTokenTotalSupply();
        const current = await web3Service.getPromTokenCurrentSupply();
        res.json({ total, current });
      } catch (blockchainError) {
        console.error("Failed to fetch from blockchain:", blockchainError);
        // Fallback to mock data
        res.json({ total: "100000000", current: "10000000" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch token supply data" });
    }
  });

  app.get(`${apiPrefix}/token-balance/:walletAddress`, async (req, res) => {
    try {
      const { walletAddress } = req.params;
      // Try to fetch from blockchain first
      try {
        const balance = await web3Service.getPromTokenBalance(walletAddress);
        res.json({ balance });
      } catch (blockchainError) {
        console.error("Failed to fetch from blockchain:", blockchainError);
        // Fallback to mock data
        res.json({ balance: "1000" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch token balance" });
    }
  });

  app.get(`${apiPrefix}/vesting-schedules/:walletAddress`, async (req, res) => {
    try {
      const { walletAddress } = req.params;
      // Try to fetch from blockchain first
      try {
        const schedules = await web3Service.getUserVestingSchedules(walletAddress);
        res.json(schedules);
      } catch (blockchainError) {
        console.error("Failed to fetch from blockchain:", blockchainError);
        // Fallback to mock data
        res.json([
          {
            totalAmount: "5000",
            amountClaimed: "2000",
            startTime: new Date("2024-01-01"),
            endTime: new Date("2025-01-01"),
            revocable: true,
            revoked: false
          }
        ]);
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch vesting schedules" });
    }
  });

  app.get(`${apiPrefix}/property-tokens`, async (req, res) => {
    try {
      // In a real implementation, this would fetch from the database
      // For now, return mock data
      const mockPortfolio = [
        { id: 1, propertyId: 101, name: "Luxury Condo NYC", tokens: 250, value: 450, allocation: 25 },
        { id: 2, propertyId: 102, name: "Beach House Miami", tokens: 500, value: 900, allocation: 50 },
        { id: 3, propertyId: 103, name: "Mountain Retreat", tokens: 100, value: 180, allocation: 10 },
        { id: 4, propertyId: 104, name: "Downtown Office Space", tokens: 150, value: 270, allocation: 15 },
      ];
      res.json(mockPortfolio);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch property tokens" });
    }
  });

  app.post(`${apiPrefix}/tokenize-property`, async (req, res) => {
    try {
      const { propertyId, totalTokens, tokenPrice, ownershipPercent } = req.body;
      
      // In a real implementation, this would call the blockchain
      // to tokenize the property and create the necessary records
      
      res.json({ 
        success: true, 
        message: "Property tokenization initiated",
        transactionHash: "0x123...456" // Mock transaction hash
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to tokenize property" });
    }
  });

  app.post(`${apiPrefix}/claim-vested-tokens`, async (req, res) => {
    try {
      const { walletAddress, scheduleIndex } = req.body;
      
      // In a real implementation, this would call the blockchain
      // to claim the vested tokens
      
      res.json({ 
        success: true, 
        message: "Vested tokens claimed successfully",
        transactionHash: "0x789...012" // Mock transaction hash
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to claim vested tokens" });
    }
  });

  // ======================================================================
  // AI-Driven Review Analysis & Governance API Routes
  // ======================================================================
  
  // Reviews
  app.get(`${apiPrefix}/reviews`, async (req, res) => {
    try {
      const processed = req.query.processed === 'true' ? true :
                       req.query.processed === 'false' ? false : undefined;
      
      const userId = req.query.userId ? parseInt(req.query.userId as string) : undefined;
      
      const reviews = await storage.getReviews(processed, userId);
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  });
  
  app.get(`${apiPrefix}/reviews/unprocessed`, async (req, res) => {
    try {
      const reviews = await storage.getUnprocessedReviews();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch unprocessed reviews" });
    }
  });
  
  app.get(`${apiPrefix}/reviews/:id`, async (req, res) => {
    try {
      const reviewId = parseInt(req.params.id);
      const review = await storage.getReview(reviewId);
      
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
      
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch review" });
    }
  });
  
  app.post(`${apiPrefix}/reviews`, async (req, res) => {
    try {
      const reviewData = insertReviewSchema.parse(req.body);
      const newReview = await storage.createReview(reviewData);
      res.status(201).json(newReview);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid review data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create review" });
    }
  });
  
  // AI processing endpoint - manually trigger analysis of reviews
  app.post(`${apiPrefix}/reviews/analyze`, async (req, res) => {
    try {
      // This will run asynchronously and not block the response
      aiConcierge.analyzeReviews()
        .then(() => console.log("Review analysis completed"))
        .catch(err => console.error("Error in review analysis:", err));
      
      res.status(202).json({ message: "Review analysis initiated" });
    } catch (error) {
      res.status(500).json({ message: "Failed to initiate review analysis" });
    }
  });
  
  // Scheduler management endpoints
  app.get(`${apiPrefix}/admin/scheduler/status`, (req, res) => {
    try {
      const isRunning = scheduler.reviewAnalysisInterval !== null;
      const reviewAnalysisInterval = scheduler.intervals.get('reviewAnalysis') || 3600000; // Default to 1 hour
      
      res.json({
        isRunning,
        reviewAnalysisInterval: reviewAnalysisInterval / (60 * 1000), // Convert to minutes
        nextRunAt: isRunning ? new Date(Date.now() + reviewAnalysisInterval) : null,
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to get scheduler status" });
    }
  });
  
  app.post(`${apiPrefix}/admin/scheduler/start`, (req, res) => {
    try {
      scheduler.startAll();
      res.json({ message: "Scheduler started successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to start scheduler" });
    }
  });
  
  app.post(`${apiPrefix}/admin/scheduler/stop`, (req, res) => {
    try {
      scheduler.stopAll();
      res.json({ message: "Scheduler stopped successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to stop scheduler" });
    }
  });
  
  app.post(`${apiPrefix}/admin/scheduler/interval`, (req, res) => {
    try {
      const { task, minutes } = req.body;
      
      if (!task || !minutes || isNaN(minutes) || minutes < 1) {
        return res.status(400).json({ 
          message: "Invalid request. Provide a valid task name and interval in minutes (minimum 1)." 
        });
      }
      
      const intervalMs = minutes * 60 * 1000;
      scheduler.updateInterval(task, intervalMs);
      
      res.json({ 
        message: `${task} scheduler interval updated to ${minutes} minutes`,
        task,
        intervalMinutes: minutes
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to update scheduler interval" });
    }
  });
  
  // Governance Proposals
  app.get(`${apiPrefix}/governance/proposals`, async (req, res) => {
    try {
      const status = req.query.status as string;
      const proposals = await storage.getGovernanceProposals(status);
      res.json(proposals);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch governance proposals" });
    }
  });
  
  app.get(`${apiPrefix}/governance/proposals/:id`, async (req, res) => {
    try {
      const proposalId = parseInt(req.params.id);
      const proposal = await storage.getGovernanceProposal(proposalId);
      
      if (!proposal) {
        return res.status(404).json({ message: "Governance proposal not found" });
      }
      
      res.json(proposal);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch governance proposal" });
    }
  });
  
  app.post(`${apiPrefix}/governance/proposals`, async (req, res) => {
    try {
      const proposalData = insertGovernanceProposalSchema.parse(req.body);
      const newProposal = await storage.createGovernanceProposal(proposalData);
      res.status(201).json(newProposal);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid governance proposal data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create governance proposal" });
    }
  });
  
  app.patch(`${apiPrefix}/governance/proposals/:id/status`, async (req, res) => {
    try {
      const proposalId = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status || typeof status !== 'string') {
        return res.status(400).json({ message: "Invalid status" });
      }
      
      const updatedProposal = await storage.updateGovernanceProposalStatus(proposalId, status);
      res.json(updatedProposal);
    } catch (error) {
      res.status(500).json({ message: "Failed to update governance proposal status" });
    }
  });
  
  app.post(`${apiPrefix}/governance/votes`, async (req, res) => {
    try {
      const { proposalId, userId, voteType, votePower } = req.body;
      
      // Validate inputs
      if (!proposalId || !userId || !voteType || !votePower) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Update proposal vote counts
      const updatedProposal = await storage.updateGovernanceProposalVotes(
        proposalId,
        voteType,
        Number(votePower)
      );
      
      // Create a vote record (using the existing votes table)
      const newVote = await storage.createVote({
        proposalId,
        userId,
        voteType,
        votePower: votePower.toString()
      });
      
      res.status(201).json({ proposal: updatedProposal, vote: newVote });
    } catch (error) {
      res.status(500).json({ message: "Failed to record governance vote" });
    }
  });
  
  app.post(`${apiPrefix}/governance/proposals/:id/implement`, async (req, res) => {
    try {
      const proposalId = parseInt(req.params.id);
      const proposal = await storage.getGovernanceProposal(proposalId);
      
      if (!proposal) {
        return res.status(404).json({ message: "Governance proposal not found" });
      }
      
      if (proposal.status !== 'passed') {
        return res.status(400).json({ message: "Only passed proposals can be implemented" });
      }
      
      // This will run asynchronously and not block the response
      aiConcierge.orchestrateAIAssistedImplementation(proposalId, proposal.proposedAction)
        .then(() => console.log(`Implementation of proposal #${proposalId} completed`))
        .catch(err => console.error(`Error in implementation of proposal #${proposalId}:`, err));
      
      res.status(202).json({ message: "Implementation initiated" });
    } catch (error) {
      res.status(500).json({ message: "Failed to initiate proposal implementation" });
    }
  });
  
  // ======================================================================
  // Admin Dashboard API Routes
  // ======================================================================
  
  // Service Categories
  app.get(`${apiPrefix}/admin/service-categories`, async (req, res) => {
    try {
      const active = req.query.active === 'true' ? true : 
                    req.query.active === 'false' ? false : undefined;
      const categories = await storage.getServiceCategories(active);
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch service categories" });
    }
  });
  
  app.get(`${apiPrefix}/admin/service-categories/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const category = await storage.getServiceCategory(id);
      
      if (!category) {
        return res.status(404).json({ message: "Service category not found" });
      }
      
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch service category" });
    }
  });
  
  app.post(`${apiPrefix}/admin/service-categories`, async (req, res) => {
    try {
      const categoryData = insertServiceCategorySchema.parse(req.body);
      const newCategory = await storage.createServiceCategory(categoryData);
      res.status(201).json(newCategory);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid category data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create service category" });
    }
  });
  
  app.patch(`${apiPrefix}/admin/service-categories/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const categoryData = req.body; // We'll do partial validation manually
      
      // Attempt to validate the fields that are present
      const validationSchema = z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        icon: z.string().optional(),
        displayOrder: z.number().optional(),
      });
      
      const validatedData = validationSchema.parse(categoryData);
      
      const updatedCategory = await storage.updateServiceCategory(id, validatedData);
      res.json(updatedCategory);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid category data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update service category" });
    }
  });
  
  app.delete(`${apiPrefix}/admin/service-categories/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteServiceCategory(id);
      
      if (!success) {
        return res.status(404).json({ message: "Service category not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete service category" });
    }
  });
  
  // Service Providers
  app.get(`${apiPrefix}/admin/service-providers`, async (req, res) => {
    try {
      const categoryId = req.query.categoryId ? parseInt(req.query.categoryId as string) : undefined;
      const active = req.query.active === 'true' ? true : 
                    req.query.active === 'false' ? false : undefined;
      
      const providers = await storage.getServiceProviders(categoryId, active);
      res.json(providers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch service providers" });
    }
  });
  
  app.get(`${apiPrefix}/admin/service-providers/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const provider = await storage.getServiceProvider(id);
      
      if (!provider) {
        return res.status(404).json({ message: "Service provider not found" });
      }
      
      res.json(provider);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch service provider" });
    }
  });
  
  app.post(`${apiPrefix}/admin/service-providers`, async (req, res) => {
    try {
      const providerData = insertServiceProviderSchema.parse(req.body);
      const newProvider = await storage.createServiceProvider(providerData);
      res.status(201).json(newProvider);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid provider data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create service provider" });
    }
  });
  
  app.patch(`${apiPrefix}/admin/service-providers/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      // Validate partial update data
      const validationSchema = z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        categoryId: z.number().optional(),
        logoUrl: z.string().optional().nullable(),
        website: z.string().optional().nullable(),
        documentationUrl: z.string().optional().nullable(),
        apiBaseUrl: z.string().optional().nullable(),
        isRapidApi: z.boolean().optional(),
        authType: z.string().optional(),
        requiredFields: z.any().optional(),
      });
      
      const validatedData = validationSchema.parse(req.body);
      const updatedProvider = await storage.updateServiceProvider(id, validatedData);
      res.json(updatedProvider);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid provider data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update service provider" });
    }
  });
  
  app.delete(`${apiPrefix}/admin/service-providers/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteServiceProvider(id);
      
      if (!success) {
        return res.status(404).json({ message: "Service provider not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete service provider" });
    }
  });
  
  // API Credentials
  app.get(`${apiPrefix}/admin/api-credentials`, async (req, res) => {
    try {
      let credentials = [];
      
      if (req.query.providerId) {
        const providerId = parseInt(req.query.providerId as string);
        credentials = await storage.getApiCredentialsByProvider(providerId);
      } else {
        // Fetch by provider and combine
        const providers = await storage.getServiceProviders();
        for (const provider of providers) {
          const providerCredentials = await storage.getApiCredentialsByProvider(provider.id);
          credentials = [...credentials, ...providerCredentials];
        }
      }
      
      // Filter out sensitive information
      const sanitizedCredentials = credentials.map(cred => {
        const { apiKey, apiSecret, accessToken, refreshToken, ...safeData } = cred;
        return {
          ...safeData,
          hasApiKey: !!apiKey,
          hasApiSecret: !!apiSecret,
          hasAccessToken: !!accessToken,
          hasRefreshToken: !!refreshToken,
        };
      });
      
      res.json(sanitizedCredentials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch API credentials" });
    }
  });
  
  app.get(`${apiPrefix}/admin/api-credentials/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const credential = await storage.getApiCredential(id);
      
      if (!credential) {
        return res.status(404).json({ message: "API credential not found" });
      }
      
      // Filter out sensitive information
      const { apiKey, apiSecret, accessToken, refreshToken, ...safeData } = credential;
      const sanitizedCredential = {
        ...safeData,
        hasApiKey: !!apiKey,
        hasApiSecret: !!apiSecret,
        hasAccessToken: !!accessToken,
        hasRefreshToken: !!refreshToken,
      };
      
      res.json(sanitizedCredential);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch API credential" });
    }
  });
  
  app.post(`${apiPrefix}/admin/api-credentials`, async (req, res) => {
    try {
      const credentialData = insertApiCredentialSchema.parse(req.body);
      const newCredential = await storage.createApiCredential(credentialData);
      
      // Filter out sensitive information
      const { apiKey, apiSecret, accessToken, refreshToken, ...safeData } = newCredential;
      const sanitizedCredential = {
        ...safeData,
        hasApiKey: !!apiKey,
        hasApiSecret: !!apiSecret,
        hasAccessToken: !!accessToken,
        hasRefreshToken: !!refreshToken,
      };
      
      res.status(201).json(sanitizedCredential);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid credential data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create API credential" });
    }
  });
  
  app.patch(`${apiPrefix}/admin/api-credentials/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      // Validate partial update data
      const validationSchema = z.object({
        name: z.string().optional(),
        providerId: z.number().optional(),
        apiKey: z.string().optional().nullable(),
        apiSecret: z.string().optional().nullable(),
        accessToken: z.string().optional().nullable(),
        refreshToken: z.string().optional().nullable(),
        additionalSettings: z.any().optional(),
      });
      
      const validatedData = validationSchema.parse(req.body);
      const updatedCredential = await storage.updateApiCredential(id, validatedData);
      
      // Filter out sensitive information
      const { apiKey, apiSecret, accessToken, refreshToken, ...safeData } = updatedCredential;
      const sanitizedCredential = {
        ...safeData,
        hasApiKey: !!apiKey,
        hasApiSecret: !!apiSecret,
        hasAccessToken: !!accessToken,
        hasRefreshToken: !!refreshToken,
      };
      
      res.json(sanitizedCredential);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid credential data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update API credential" });
    }
  });
  
  app.delete(`${apiPrefix}/admin/api-credentials/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteApiCredential(id);
      
      if (!success) {
        return res.status(404).json({ message: "API credential not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete API credential" });
    }
  });
  
  app.post(`${apiPrefix}/admin/api-credentials/:id/test`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.testApiCredential(id);
      
      res.json({ success, message: success ? "Test successful" : "Test failed" });
    } catch (error) {
      res.status(500).json({ message: "Failed to test API credential" });
    }
  });
  
  // Service Integrations
  app.get(`${apiPrefix}/admin/service-integrations`, async (req, res) => {
    try {
      const providerId = req.query.providerId ? parseInt(req.query.providerId as string) : undefined;
      const active = req.query.active === 'true' ? true : 
                    req.query.active === 'false' ? false : undefined;
      
      const integrations = await storage.getServiceIntegrations(providerId, active);
      res.json(integrations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch service integrations" });
    }
  });
  
  app.get(`${apiPrefix}/admin/service-integrations/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const integration = await storage.getServiceIntegration(id);
      
      if (!integration) {
        return res.status(404).json({ message: "Service integration not found" });
      }
      
      res.json(integration);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch service integration" });
    }
  });
  
  app.post(`${apiPrefix}/admin/service-integrations`, async (req, res) => {
    try {
      const integrationData = insertServiceIntegrationSchema.parse(req.body);
      const newIntegration = await storage.createServiceIntegration(integrationData);
      res.status(201).json(newIntegration);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid integration data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create service integration" });
    }
  });
  
  app.patch(`${apiPrefix}/admin/service-integrations/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      // Validate partial update data
      const validationSchema = z.object({
        name: z.string().optional(),
        providerId: z.number().optional(),
        credentialId: z.number().optional(),
        settings: z.any().optional(),
        webhookUrl: z.string().optional().nullable(),
        callbackUrl: z.string().optional().nullable(),
        usageQuota: z.number().optional().nullable(),
        isActive: z.boolean().optional(),
      });
      
      const validatedData = validationSchema.parse(req.body);
      const updatedIntegration = await storage.updateServiceIntegration(id, validatedData);
      res.json(updatedIntegration);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid integration data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update service integration" });
    }
  });
  
  app.delete(`${apiPrefix}/admin/service-integrations/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteServiceIntegration(id);
      
      if (!success) {
        return res.status(404).json({ message: "Service integration not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete service integration" });
    }
  });
  
  // Whitelabel Settings
  app.get(`${apiPrefix}/admin/whitelabel-settings`, async (req, res) => {
    try {
      const settings = await storage.getWhitelabelSettings();
      res.json(settings || {});
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch whitelabel settings" });
    }
  });
  
  app.patch(`${apiPrefix}/admin/whitelabel-settings`, async (req, res) => {
    try {
      // Validate partial update data
      const validationSchema = z.object({
        companyName: z.string().optional(),
        logoUrl: z.string().optional().nullable(),
        faviconUrl: z.string().optional().nullable(),
        primaryColor: z.string().optional(),
        secondaryColor: z.string().optional(),
        accentColor: z.string().optional(),
        fontPrimary: z.string().optional(),
        fontSecondary: z.string().optional(),
        customCss: z.string().optional().nullable(),
        customJs: z.string().optional().nullable(),
        contactEmail: z.string().optional().nullable(),
        supportUrl: z.string().optional().nullable(),
        privacyPolicyUrl: z.string().optional().nullable(),
        termsOfServiceUrl: z.string().optional().nullable(),
        socialLinks: z.any().optional().nullable(),
        customDomain: z.string().optional().nullable(),
      });
      
      const validatedData = validationSchema.parse(req.body);
      const updatedSettings = await storage.updateWhitelabelSettings(validatedData);
      res.json(updatedSettings);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid whitelabel settings", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update whitelabel settings" });
    }
  });
  
  // UI Label Management APIs
  app.get(`${apiPrefix}/admin/ui-labels`, async (req, res) => {
    try {
      const labels = await storage.getUiLabels();
      res.json(labels);
    } catch (error) {
      console.error('Error fetching UI labels:', error);
      res.status(500).json({ message: "Failed to fetch UI labels" });
    }
  });
  
  app.get(`${apiPrefix}/admin/ui-labels/:context`, async (req, res) => {
    try {
      const { context } = req.params;
      const labels = await storage.getUiLabelsByContext(context);
      res.json(labels);
    } catch (error) {
      console.error('Error fetching UI labels by context:', error);
      res.status(500).json({ message: "Failed to fetch UI labels by context" });
    }
  });
  
  app.post(`${apiPrefix}/admin/ui-labels`, async (req, res) => {
    try {
      const labelData = insertUiLabelSchema.parse(req.body);
      const label = await storage.createOrUpdateUiLabel(labelData);
      res.status(201).json(label);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid UI label data", errors: error.errors });
      }
      console.error('Error saving UI label:', error);
      res.status(500).json({ message: "Failed to save UI label" });
    }
  });
  
  app.delete(`${apiPrefix}/admin/ui-labels/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteUiLabel(id);
      
      if (success) {
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ message: "UI label not found" });
      }
    } catch (error) {
      console.error('Error deleting UI label:', error);
      res.status(500).json({ message: "Failed to delete UI label" });
    }
  });
  
  // UI Label public lookup endpoint
  app.get(`${apiPrefix}/ui-labels`, async (req, res) => {
    try {
      const { key, context = 'Global' } = req.query;
      
      if (!key) {
        return res.status(400).json({ message: "Missing required parameter: key" });
      }
      
      const label = await storage.getUiLabel(key as string, context as string);
      
      if (label) {
        res.json({ value: label.customLabel });
      } else {
        // Return null if no custom label is found, frontend will fallback to default
        res.json({ value: null });
      }
    } catch (error) {
      console.error('Error fetching UI label:', error);
      res.status(500).json({ message: "Failed to fetch UI label" });
    }
  });

  // API Usage Logs
  app.get(`${apiPrefix}/admin/api-usage-logs`, async (req, res) => {
    try {
      const integrationId = req.query.integrationId ? parseInt(req.query.integrationId as string) : undefined;
      const from = req.query.from ? new Date(req.query.from as string) : undefined;
      const to = req.query.to ? new Date(req.query.to as string) : undefined;
      
      const logs = await storage.getApiUsageLogs(integrationId, from, to);
      res.json(logs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch API usage logs" });
    }
  });
  
  app.get(`${apiPrefix}/admin/api-usage-summary`, async (req, res) => {
    try {
      const integrationId = req.query.integrationId ? parseInt(req.query.integrationId as string) : undefined;
      const period = (req.query.period as 'day' | 'week' | 'month') || 'month';
      
      const summary = await storage.getApiUsageSummary(integrationId, period);
      res.json(summary);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch API usage summary" });
    }
  });
  
  app.post(`${apiPrefix}/admin/api-usage-logs`, async (req, res) => {
    try {
      const logData = insertApiUsageLogSchema.parse(req.body);
      const newLog = await storage.createApiUsageLog(logData);
      res.status(201).json(newLog);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid log data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create API usage log" });
    }
  });

  // ======================================================================
  // Test Runner API Routes
  // ======================================================================
  
  app.post(`${apiPrefix}/tests/run-unit`, async (_req, res) => {
    try {
      const results = await testRunner.runUnitTests();
      await testRunner.saveResults('unit', results);
      res.json(results);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message
      });
    }
  });

  app.post(`${apiPrefix}/tests/run-integration`, async (_req, res) => {
    try {
      const results = await testRunner.runIntegrationTests();
      await testRunner.saveResults('integration', results);
      res.json(results);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message
      });
    }
  });

  app.post(`${apiPrefix}/tests/run-load`, async (_req, res) => {
    try {
      const results = await testRunner.runLoadTests();
      await testRunner.saveResults('load', results);
      res.json(results);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message
      });
    }
  });

  app.post(`${apiPrefix}/tests/run-e2e`, async (_req, res) => {
    try {
      const results = await testRunner.runE2ETests();
      await testRunner.saveResults('e2e', results);
      res.json(results);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message
      });
    }
  });

  // Payment Processing with Stripe
  // Initialize Stripe
  if (!process.env.STRIPE_SECRET_KEY) {
    console.warn('STRIPE_SECRET_KEY is not set. Payment features will be unavailable.');
  }
  
  const stripe = process.env.STRIPE_SECRET_KEY ? 
    new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' }) : 
    null;
  
  // Create payment intent for a task
  app.post(`${apiPrefix}/payment/create-intent`, async (req, res) => {
    try {
      if (!stripe) {
        return res.status(503).json({ 
          success: false, 
          message: "Payment service unavailable. Please contact support." 
        });
      }
      
      const { taskId } = req.body;
      
      if (!taskId) {
        return res.status(400).json({ 
          success: false, 
          message: "Task ID is required" 
        });
      }
      
      // Get the task to determine payment amount
      const task = await storage.getTask(taskId);
      
      if (!task) {
        return res.status(404).json({ 
          success: false, 
          message: "Task not found" 
        });
      }
      
      // Convert price to cents for Stripe
      const amount = Math.round(parseFloat(task.price) * 100);
      
      // Create a payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: task.currency || 'usd',
        description: `Payment for task: ${task.title}`,
        metadata: {
          taskId: task.id.toString(),
          category: task.category,
          creatorId: task.creatorId.toString(),
          assigneeId: task.assigneeId ? task.assigneeId.toString() : undefined
        }
      });
      
      // Return the client secret to the client
      res.json({
        success: true,
        clientSecret: paymentIntent.client_secret
      });
    } catch (error) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to create payment intent" 
      });
    }
  });
  
  // Webhook to handle payment events from Stripe
  app.post(`${apiPrefix}/payment/webhook`, async (req, res) => {
    try {
      if (!stripe) {
        return res.status(503).json({ 
          success: false, 
          message: "Payment service unavailable" 
        });
      }
      
      const sig = req.headers['stripe-signature'];
      
      if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
        return res.status(400).json({ 
          success: false, 
          message: "Stripe signature or webhook secret missing" 
        });
      }
      
      // Verify the event came from Stripe
      let event;
      try {
        event = stripe.webhooks.constructEvent(
          req.body, 
          sig, 
          process.env.STRIPE_WEBHOOK_SECRET
        );
      } catch (err) {
        return res.status(400).json({ 
          success: false, 
          message: `Webhook signature verification failed: ${err.message}` 
        });
      }
      
      // Handle the event
      switch (event.type) {
        case 'payment_intent.succeeded':
          const paymentIntent = event.data.object;
          
          // Update task status if this was a task payment
          if (paymentIntent.metadata?.taskId) {
            const taskId = parseInt(paymentIntent.metadata.taskId);
            const task = await storage.getTask(taskId);
            
            if (task) {
              // Update the task to reflect payment
              await storage.updateTaskStatus(taskId, "paid");
              
              // Record the payment
              // In a real app, we would have a payments table to track this
              console.log(`Payment for task ${taskId} succeeded`);
            }
          }
          break;
        case 'payment_intent.payment_failed':
          console.log('Payment failed:', event.data.object);
          break;
        default:
          console.log(`Unhandled event type ${event.type}`);
      }
      
      // Return a response to acknowledge receipt of the event
      res.json({ received: true });
    } catch (error) {
      console.error("Error processing webhook:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to process webhook" 
      });
    }
  });
  
  // Task payment completion API
  app.post(`${apiPrefix}/payment/complete-task`, async (req, res) => {
    try {
      const { taskId, paymentIntentId } = req.body;
      
      if (!taskId || !paymentIntentId) {
        return res.status(400).json({ 
          success: false, 
          message: "Task ID and Payment Intent ID are required" 
        });
      }
      
      // Verify the task exists
      const task = await storage.getTask(parseInt(taskId));
      if (!task) {
        return res.status(404).json({ 
          success: false, 
          message: "Task not found" 
        });
      }
      
      // Verify the payment intent if Stripe is available
      if (stripe) {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        
        // Verify payment is complete and for the correct task
        if (
          paymentIntent.status !== 'succeeded' || 
          paymentIntent.metadata?.taskId !== taskId.toString()
        ) {
          return res.status(400).json({ 
            success: false, 
            message: "Invalid payment for this task" 
          });
        }
      }
      
      // Update task status to completed
      await storage.updateTaskStatus(parseInt(taskId), "completed");
      
      // Get the updated task
      const updatedTask = await storage.getTask(parseInt(taskId));
      
      res.json({
        success: true,
        message: "Task payment completed successfully",
        task: updatedTask
      });
    } catch (error) {
      console.error("Error completing task payment:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to complete task payment" 
      });
    }
  });

  // Create the HTTP server
  // Social Media Security Endpoints
  app.post(`${apiPrefix}/social/mfa/setup`, async (req, res) => {
    try {
      const { userId, pseudonym } = req.body;
      
      if (!userId || !pseudonym) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      const mfaData = await socialSecurityService.generateMfaSecret(userId, pseudonym);
      res.json(mfaData);
    } catch (error) {
      console.error('Error setting up MFA:', error);
      res.status(500).json({ error: 'Failed to set up MFA' });
    }
  });
  
  app.post(`${apiPrefix}/social/mfa/verify`, async (req, res) => {
    try {
      const { userId, token } = req.body;
      
      if (!userId || !token) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      const isValid = await socialSecurityService.verifyMfaToken(userId, token);
      
      if (!isValid) {
        return res.status(401).json({ error: 'Invalid MFA token' });
      }
      
      // Token is valid, enable MFA for the user
      await socialSecurityService.enableMfa(userId);
      
      // Generate a social access token
      const accessToken = await socialSecurityService.createSocialToken(userId);
      
      res.json({ success: true, accessToken });
    } catch (error) {
      console.error('Error verifying MFA token:', error);
      res.status(500).json({ error: 'Failed to verify MFA token' });
    }
  });
  
  app.post(`${apiPrefix}/social/access/logout`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      // Extract token from Authorization header
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(400).json({ error: 'Missing token' });
      }
      
      await socialSecurityService.invalidateToken(token);
      res.json({ success: true });
    } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).json({ error: 'Failed to logout' });
    }
  });
  
  app.post(`${apiPrefix}/social/access/logout-all`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      if (!req.user?.userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      await socialSecurityService.invalidateAllTokens(req.user.userId);
      res.json({ success: true });
    } catch (error) {
      console.error('Error during logout-all:', error);
      res.status(500).json({ error: 'Failed to logout from all devices' });
    }
  });
  
  // Social Profile Endpoints
  app.post(`${apiPrefix}/social/profiles`, async (req, res) => {
    try {
      const profileData = insertSocialProfileSchema.parse(req.body);
      const profile = await socialProfileService.createOrUpdateProfile(profileData.userId, profileData);
      res.status(201).json(profile);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: 'Invalid profile data', issues: error.errors });
      }
      if (error instanceof Error && error.message === 'Pseudonym is already taken') {
        return res.status(409).json({ error: error.message });
      }
      console.error('Error creating profile:', error);
      res.status(500).json({ error: 'Failed to create profile' });
    }
  });
  
  app.get(`${apiPrefix}/social/profiles/:id`, requireSocialAuth, async (req, res) => {
    try {
      const profileId = parseInt(req.params.id);
      const profile = await socialProfileService.getProfileById(profileId);
      
      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      
      res.json(profile);
    } catch (error) {
      console.error('Error fetching profile:', error);
      res.status(500).json({ error: 'Failed to fetch profile' });
    }
  });
  
  app.get(`${apiPrefix}/social/profiles/user/:userId`, requireSocialAuth, async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const profile = await socialProfileService.getProfileByUserId(userId);
      
      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      
      res.json(profile);
    } catch (error) {
      console.error('Error fetching profile by user ID:', error);
      res.status(500).json({ error: 'Failed to fetch profile' });
    }
  });
  
  app.get(`${apiPrefix}/social/profiles/pseudonym/:pseudonym`, requireSocialAuth, async (req, res) => {
    try {
      const { pseudonym } = req.params;
      const profile = await socialProfileService.getProfileByPseudonym(pseudonym);
      
      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      
      res.json(profile);
    } catch (error) {
      console.error('Error fetching profile by pseudonym:', error);
      res.status(500).json({ error: 'Failed to fetch profile' });
    }
  });
  
  // Social Posts Endpoints
  app.post(`${apiPrefix}/social/posts`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const postData = insertSocialPostSchema.parse(req.body);
      const userProfile = await socialProfileService.getProfileByUserId(req.user.userId);
      
      if (!userProfile) {
        return res.status(404).json({ error: 'User profile not found' });
      }
      
      const post = await socialProfileService.createPost(userProfile.id, postData);
      res.status(201).json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: 'Invalid post data', issues: error.errors });
      }
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Failed to create post' });
    }
  });
  
  app.get(`${apiPrefix}/social/feed`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const userProfile = await socialProfileService.getProfileByUserId(req.user.userId);
      
      if (!userProfile) {
        return res.status(404).json({ error: 'User profile not found' });
      }
      
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 50;
      const feed = await socialProfileService.getFeed(userProfile.id, limit);
      res.json(feed);
    } catch (error) {
      console.error('Error fetching feed:', error);
      res.status(500).json({ error: 'Failed to fetch feed' });
    }
  });
  
  app.get(`${apiPrefix}/social/posts/user/:profileId`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const profileId = parseInt(req.params.profileId);
      const userProfile = await socialProfileService.getProfileByUserId(req.user.userId);
      
      if (!userProfile) {
        return res.status(404).json({ error: 'User profile not found' });
      }
      
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 50;
      const posts = await socialProfileService.getUserPosts(profileId, userProfile.id, limit);
      res.json(posts);
    } catch (error) {
      console.error('Error fetching user posts:', error);
      res.status(500).json({ error: 'Failed to fetch user posts' });
    }
  });
  
  // Social Following Endpoints
  app.post(`${apiPrefix}/social/follow/:profileId`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const followedProfileId = parseInt(req.params.profileId);
      const userProfile = await socialProfileService.getProfileByUserId(req.user.userId);
      
      if (!userProfile) {
        return res.status(404).json({ error: 'User profile not found' });
      }
      
      await socialProfileService.followUser(userProfile.id, followedProfileId);
      res.json({ success: true });
    } catch (error) {
      console.error('Error following user:', error);
      res.status(500).json({ error: 'Failed to follow user' });
    }
  });
  
  app.delete(`${apiPrefix}/social/follow/:profileId`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const followedProfileId = parseInt(req.params.profileId);
      const userProfile = await socialProfileService.getProfileByUserId(req.user.userId);
      
      if (!userProfile) {
        return res.status(404).json({ error: 'User profile not found' });
      }
      
      await socialProfileService.unfollowUser(userProfile.id, followedProfileId);
      res.json({ success: true });
    } catch (error) {
      console.error('Error unfollowing user:', error);
      res.status(500).json({ error: 'Failed to unfollow user' });
    }
  });
  
  app.get(`${apiPrefix}/social/followers/:profileId`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      const profileId = parseInt(req.params.profileId);
      const followers = await socialProfileService.getFollowers(profileId);
      res.json(followers);
    } catch (error) {
      console.error('Error fetching followers:', error);
      res.status(500).json({ error: 'Failed to fetch followers' });
    }
  });
  
  app.get(`${apiPrefix}/social/following/:profileId`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      const profileId = parseInt(req.params.profileId);
      const following = await socialProfileService.getFollowing(profileId);
      res.json(following);
    } catch (error) {
      console.error('Error fetching following:', error);
      res.status(500).json({ error: 'Failed to fetch following' });
    }
  });
  
  app.get(`${apiPrefix}/social/check-following/:followerProfileId/:followedProfileId`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      const followerProfileId = parseInt(req.params.followerProfileId);
      const followedProfileId = parseInt(req.params.followedProfileId);
      const isFollowing = await socialProfileService.checkFollowing(followerProfileId, followedProfileId);
      res.json({ isFollowing });
    } catch (error) {
      console.error('Error checking follow status:', error);
      res.status(500).json({ error: 'Failed to check follow status' });
    }
  });
  
  // Social Message Endpoints
  app.post(`${apiPrefix}/social/messages`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const { recipientId, content, encryptedKey } = req.body;
      
      if (!recipientId || !content || !encryptedKey) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      // Get sender profile
      const senderProfile = await socialProfileService.getProfileByUserId(req.user.userId);
      
      if (!senderProfile) {
        return res.status(404).json({ error: 'Sender profile not found' });
      }
      
      // Skip Zod validation for now as we'll fix type differences directly
      
      // Create the message
      const message = await db.insert(socialMessages)
        .values({
          senderId: senderProfile.id,
          recipientId,
          encryptedContent: content,
          encryptionMetadata: { key: encryptedKey },
          readAt: null
        })
        .returning();
      
      res.status(201).json(message[0]);
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  });
  
  app.get(`${apiPrefix}/social/messages/conversation/:profileId`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const otherProfileId = parseInt(req.params.profileId);
      const userProfile = await socialProfileService.getProfileByUserId(req.user.userId);
      
      if (!userProfile) {
        return res.status(404).json({ error: 'User profile not found' });
      }
      
      // Get all messages between the two users
      const messages = await db.select()
        .from(socialMessages)
        .where(
          or(
            and(
              eq(socialMessages.senderId, userProfile.id),
              eq(socialMessages.recipientId, otherProfileId)
            ),
            and(
              eq(socialMessages.senderId, otherProfileId),
              eq(socialMessages.recipientId, userProfile.id)
            )
          )
        )
        .orderBy(asc(socialMessages.createdAt));
      
      res.json(messages);
    } catch (error) {
      console.error('Error fetching conversation:', error);
      res.status(500).json({ error: 'Failed to fetch conversation' });
    }
  });
  
  app.get(`${apiPrefix}/social/messages/inbox`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const userProfile = await socialProfileService.getProfileByUserId(req.user.userId);
      
      if (!userProfile) {
        return res.status(404).json({ error: 'User profile not found' });
      }
      
      // Get all distinct conversations
      const conversations = await db.select({
        profileId: sql<number>`CASE WHEN ${socialMessages.senderId} = ${userProfile.id} THEN ${socialMessages.recipientId} ELSE ${socialMessages.senderId} END`,
        lastMessageAt: sql<Date>`MAX(${socialMessages.createdAt})`,
        unreadCount: sql<number>`SUM(CASE WHEN ${socialMessages.readAt} IS NULL AND ${socialMessages.recipientId} = ${userProfile.id} THEN 1 ELSE 0 END)`
      })
      .from(socialMessages)
      .where(
        or(
          eq(socialMessages.senderId, userProfile.id),
          eq(socialMessages.recipientId, userProfile.id)
        )
      )
      .groupBy(sql`CASE WHEN ${socialMessages.senderId} = ${userProfile.id} THEN ${socialMessages.recipientId} ELSE ${socialMessages.senderId} END`)
      .orderBy(desc(sql`MAX(${socialMessages.createdAt})`));
      
      // Get profiles for each conversation
      const profiles = await Promise.all(
        conversations.map(async (conv) => {
          const profile = await socialProfileService.getProfileById(conv.profileId);
          return {
            ...conv,
            profile
          };
        })
      );
      
      res.json(profiles);
    } catch (error) {
      console.error('Error fetching inbox:', error);
      res.status(500).json({ error: 'Failed to fetch inbox' });
    }
  });
  
  app.patch(`${apiPrefix}/social/messages/read/:messageId`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const messageId = parseInt(req.params.messageId);
      const userProfile = await socialProfileService.getProfileByUserId(req.user.userId);
      
      if (!userProfile) {
        return res.status(404).json({ error: 'User profile not found' });
      }
      
      // Verify the message exists and is sent to the current user
      const message = await db.select()
        .from(socialMessages)
        .where(
          and(
            eq(socialMessages.id, messageId),
            eq(socialMessages.recipientId, userProfile.id)
          )
        )
        .limit(1);
      
      if (message.length === 0) {
        return res.status(404).json({ error: 'Message not found or not authorized' });
      }
      
      // Mark the message as read
      const updatedMessage = await db.update(socialMessages)
        .set({ readAt: new Date() })
        .where(eq(socialMessages.id, messageId))
        .returning();
      
      res.json(updatedMessage[0]);
    } catch (error) {
      console.error('Error marking message as read:', error);
      res.status(500).json({ error: 'Failed to mark message as read' });
    }
  });
  
  app.patch(`${apiPrefix}/social/messages/read-all/:profileId`, requireSocialAuth, async (req: SocialAuthRequest, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const otherProfileId = parseInt(req.params.profileId);
      const userProfile = await socialProfileService.getProfileByUserId(req.user.userId);
      
      if (!userProfile) {
        return res.status(404).json({ error: 'User profile not found' });
      }
      
      // Mark all messages from the specified user to the current user as read
      await db.update(socialMessages)
        .set({ readAt: new Date() })
        .where(
          and(
            eq(socialMessages.senderId, otherProfileId),
            eq(socialMessages.recipientId, userProfile.id),
            isNull(socialMessages.readAt)
          )
        );
      
      res.json({ success: true });
    } catch (error) {
      console.error('Error marking messages as read:', error);
      res.status(500).json({ error: 'Failed to mark messages as read' });
    }
  });

  // ======================================================================
  // Escrow System API Routes
  // ======================================================================
  
  app.get(`${apiPrefix}/escrows`, async (req, res) => {
    try {
      const propertyId = req.query.propertyId ? parseInt(req.query.propertyId as string) : undefined;
      const sellerId = req.query.sellerId ? parseInt(req.query.sellerId as string) : undefined;
      const buyerId = req.query.buyerId ? parseInt(req.query.buyerId as string) : undefined;
      
      let escrows = [];
      
      if (propertyId) {
        escrows = await storage.getEscrowsByProperty(propertyId);
      } else if (sellerId) {
        escrows = await storage.getEscrowsBySeller(sellerId);
      } else if (buyerId) {
        escrows = await storage.getEscrowsByBuyer(buyerId);
      } else {
        return res.status(400).json({ message: "Missing query parameter. Provide propertyId, sellerId, or buyerId" });
      }
      
      res.json(escrows);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch escrows", error: error.message });
    }
  });
  
  app.get(`${apiPrefix}/escrows/:id`, async (req, res) => {
    try {
      const escrowId = parseInt(req.params.id);
      const escrow = await storage.getEscrow(escrowId);
      
      if (!escrow) {
        return res.status(404).json({ message: "Escrow not found" });
      }
      
      res.json(escrow);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch escrow", error: error.message });
    }
  });
  
  app.post(`${apiPrefix}/escrows`, async (req, res) => {
    try {
      const escrowData = insertEscrowSchema.parse(req.body);
      
      // Validate that the property exists
      const property = await storage.getProperty(escrowData.propertyId);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }
      
      // Verify seller is the property owner
      if (property.userId !== escrowData.sellerId) {
        return res.status(403).json({ message: "Seller must be the property owner" });
      }
      
      const newEscrow = await storage.createEscrow(escrowData);
      res.status(201).json(newEscrow);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid escrow data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create escrow", error: error.message });
    }
  });
  
  app.patch(`${apiPrefix}/escrows/:id/status`, async (req, res) => {
    try {
      const escrowId = parseInt(req.params.id);
      const { status, transactionHash } = req.body;
      
      if (!status) {
        return res.status(400).json({ message: "Status is required" });
      }
      
      // Validate status is one of the allowed values
      const validStatuses = ["pending", "funded", "completed", "cancelled", "disputed"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ 
          message: "Invalid status", 
          allowedValues: validStatuses 
        });
      }
      
      const updatedEscrow = await storage.updateEscrowStatus(escrowId, status, transactionHash);
      res.json(updatedEscrow);
    } catch (error) {
      res.status(500).json({ message: "Failed to update escrow status", error: error.message });
    }
  });
  
  // ======================================================================
  // Title Transfer API Routes
  // ======================================================================
  
  app.get(`${apiPrefix}/title-transfers`, async (req, res) => {
    try {
      const propertyId = req.query.propertyId ? parseInt(req.query.propertyId as string) : undefined;
      
      if (!propertyId) {
        return res.status(400).json({ message: "PropertyId is required" });
      }
      
      const transfers = await storage.getTitleTransfersByProperty(propertyId);
      res.json(transfers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch title transfers", error: error.message });
    }
  });
  
  app.get(`${apiPrefix}/title-transfers/:id`, async (req, res) => {
    try {
      const transferId = parseInt(req.params.id);
      const transfer = await storage.getTitleTransfer(transferId);
      
      if (!transfer) {
        return res.status(404).json({ message: "Title transfer not found" });
      }
      
      res.json(transfer);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch title transfer", error: error.message });
    }
  });
  
  app.post(`${apiPrefix}/title-transfers`, async (req, res) => {
    try {
      const transferData = insertTitleTransferSchema.parse(req.body);
      
      // Validate that the property exists
      const property = await storage.getProperty(transferData.propertyId);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }
      
      // Verify current owner is correct
      if (property.userId !== transferData.fromUserId) {
        return res.status(403).json({ message: "From user must be the current property owner" });
      }
      
      const newTransfer = await storage.createTitleTransfer(transferData);
      res.status(201).json(newTransfer);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid title transfer data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create title transfer", error: error.message });
    }
  });
  
  app.patch(`${apiPrefix}/title-transfers/:id/status`, async (req, res) => {
    try {
      const transferId = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status) {
        return res.status(400).json({ message: "Status is required" });
      }
      
      // Validate status is one of the allowed values
      const validStatuses = ["pending", "verified", "completed", "rejected"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ 
          message: "Invalid status", 
          allowedValues: validStatuses 
        });
      }
      
      const updatedTransfer = await storage.updateTitleTransferStatus(transferId, status);
      res.json(updatedTransfer);
    } catch (error) {
      res.status(500).json({ message: "Failed to update title transfer status", error: error.message });
    }
  });
  
  // ======================================================================
  // Arbitrator API Routes
  // ======================================================================
  
  app.get(`${apiPrefix}/arbitrators`, async (req, res) => {
    try {
      const arbitrators = await storage.getArbitrators();
      res.json(arbitrators);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch arbitrators", error: error.message });
    }
  });
  
  app.get(`${apiPrefix}/arbitrators/:id`, async (req, res) => {
    try {
      const arbitratorId = parseInt(req.params.id);
      const arbitrator = await storage.getArbitrator(arbitratorId);
      
      if (!arbitrator) {
        return res.status(404).json({ message: "Arbitrator not found" });
      }
      
      res.json(arbitrator);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch arbitrator", error: error.message });
    }
  });
  
  app.get(`${apiPrefix}/arbitrators/wallet/:walletAddress`, async (req, res) => {
    try {
      const { walletAddress } = req.params;
      
      if (!walletAddress) {
        return res.status(400).json({ message: "Wallet address is required" });
      }
      
      const arbitrator = await storage.getArbitratorByWallet(walletAddress);
      
      if (!arbitrator) {
        return res.status(404).json({ message: "Arbitrator not found" });
      }
      
      res.json(arbitrator);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch arbitrator by wallet", error: error.message });
    }
  });
  
  app.post(`${apiPrefix}/arbitrators`, async (req, res) => {
    try {
      const arbitratorData = insertArbitratorSchema.parse(req.body);
      
      // Validate that the user exists
      const user = await storage.getUser(arbitratorData.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Check if wallet address is already registered
      const existingArbitrator = await storage.getArbitratorByWallet(arbitratorData.walletAddress);
      if (existingArbitrator) {
        return res.status(409).json({ message: "Wallet address already registered as an arbitrator" });
      }
      
      const newArbitrator = await storage.createArbitrator(arbitratorData);
      res.status(201).json(newArbitrator);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid arbitrator data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create arbitrator", error: error.message });
    }
  });
  
  app.patch(`${apiPrefix}/arbitrators/:id/rating`, async (req, res) => {
    try {
      const arbitratorId = parseInt(req.params.id);
      const { successfulResolution } = req.body;
      
      if (successfulResolution === undefined) {
        return res.status(400).json({ message: "successfulResolution is required (true or false)" });
      }
      
      const updatedArbitrator = await storage.updateArbitratorRating(arbitratorId, successfulResolution);
      res.json(updatedArbitrator);
    } catch (error) {
      res.status(500).json({ message: "Failed to update arbitrator rating", error: error.message });
    }
  });

  // Legal Agent Network API Routes
  
  // Legal Agent Routes
  app.get(`${apiPrefix}/legal/agents`, async (req, res) => {
    try {
      const expertise = req.query.expertise as string;
      const jurisdiction = req.query.jurisdiction as string;
      const language = req.query.language as string;
      
      const agents = await storage.getLegalAgents({
        expertise,
        jurisdiction,
        language
      });
      
      res.json(agents);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch legal agents", error: error.message });
    }
  });
  
  app.get(`${apiPrefix}/legal/agents/:id`, async (req, res) => {
    try {
      const agentId = parseInt(req.params.id);
      const agent = await storage.getLegalAgent(agentId);
      
      if (!agent) {
        return res.status(404).json({ message: "Legal agent not found" });
      }
      
      res.json(agent);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch legal agent", error: error.message });
    }
  });
  
  app.post(`${apiPrefix}/legal/agents`, async (req, res) => {
    try {
      const agentData = insertLegalAgentSchema.parse(req.body);
      const newAgent = await storage.createLegalAgent(agentData);
      res.status(201).json(newAgent);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid legal agent data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create legal agent", error: error.message });
    }
  });
  
  app.patch(`${apiPrefix}/legal/agents/:id`, async (req, res) => {
    try {
      const agentId = parseInt(req.params.id);
      const updates = req.body;
      
      // Ensure the agent exists
      const agent = await storage.getLegalAgent(agentId);
      if (!agent) {
        return res.status(404).json({ message: "Legal agent not found" });
      }
      
      const updatedAgent = await storage.updateLegalAgent(agentId, updates);
      res.json(updatedAgent);
    } catch (error) {
      res.status(500).json({ message: "Failed to update legal agent", error: error.message });
    }
  });
  
  // Legal Consultation Routes
  app.get(`${apiPrefix}/legal/consultations`, async (req, res) => {
    try {
      const userId = req.session?.userId || parseInt(req.query.userId as string);
      
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      
      const consultations = await storage.getLegalConsultationsByUser(userId);
      res.json(consultations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch consultations", error: error.message });
    }
  });
  
  app.get(`${apiPrefix}/legal/consultations/:id`, async (req, res) => {
    try {
      const consultationId = parseInt(req.params.id);
      const consultation = await storage.getLegalConsultation(consultationId);
      
      if (!consultation) {
        return res.status(404).json({ message: "Consultation not found" });
      }
      
      res.json(consultation);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch consultation", error: error.message });
    }
  });
  
  app.post(`${apiPrefix}/legal/consultations`, async (req, res) => {
    try {
      const consultationData = insertLegalConsultationSchema.parse(req.body);
      
      // Validate that the user exists
      const user = await storage.getUser(consultationData.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Validate that the legal agent exists
      const agent = await storage.getLegalAgent(consultationData.agentId);
      if (!agent) {
        return res.status(404).json({ message: "Legal agent not found" });
      }
      
      const newConsultation = await storage.createLegalConsultation(consultationData);
      res.status(201).json(newConsultation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid consultation data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create consultation", error: error.message });
    }
  });
  
  app.post(`${apiPrefix}/legal/consultations/:id/messages`, async (req, res) => {
    try {
      const consultationId = parseInt(req.params.id);
      const { role, content } = req.body;
      
      if (!role || !content) {
        return res.status(400).json({ message: "Role and content are required" });
      }
      
      // Ensure the consultation exists
      const consultation = await storage.getLegalConsultation(consultationId);
      if (!consultation) {
        return res.status(404).json({ message: "Consultation not found" });
      }
      
      // Add the message to the conversation
      const updatedConsultation = await storage.addMessageToConsultation(
        consultationId,
        { role, content }
      );
      
      res.json(updatedConsultation);
    } catch (error) {
      res.status(500).json({ message: "Failed to add message to consultation", error: error.message });
    }
  });
  
  app.patch(`${apiPrefix}/legal/consultations/:id/complete`, async (req, res) => {
    try {
      const consultationId = parseInt(req.params.id);
      const { summary, legalAdvice } = req.body;
      
      if (!summary || !legalAdvice) {
        return res.status(400).json({ message: "Summary and legal advice are required" });
      }
      
      // Ensure the consultation exists
      const consultation = await storage.getLegalConsultation(consultationId);
      if (!consultation) {
        return res.status(404).json({ message: "Consultation not found" });
      }
      
      // Complete the consultation
      const completedConsultation = await storage.completeConsultation(
        consultationId,
        summary,
        legalAdvice
      );
      
      res.json(completedConsultation);
    } catch (error) {
      res.status(500).json({ message: "Failed to complete consultation", error: error.message });
    }
  });
  
  // Legal Document Template Routes
  app.get(`${apiPrefix}/legal/templates`, async (req, res) => {
    try {
      const documentType = req.query.documentType as string;
      const jurisdiction = req.query.jurisdiction as string;
      
      const templates = await storage.getLegalDocumentTemplates({
        documentType,
        jurisdiction
      });
      
      res.json(templates);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch document templates", error: error.message });
    }
  });
  
  app.get(`${apiPrefix}/legal/templates/:id`, async (req, res) => {
    try {
      const templateId = parseInt(req.params.id);
      const template = await storage.getLegalDocumentTemplate(templateId);
      
      if (!template) {
        return res.status(404).json({ message: "Document template not found" });
      }
      
      res.json(template);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch document template", error: error.message });
    }
  });
  
  app.post(`${apiPrefix}/legal/templates`, async (req, res) => {
    try {
      const templateData = insertLegalDocumentTemplateSchema.parse(req.body);
      const newTemplate = await storage.createLegalDocumentTemplate(templateData);
      res.status(201).json(newTemplate);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid document template data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create document template", error: error.message });
    }
  });
  
  app.patch(`${apiPrefix}/legal/templates/:id`, async (req, res) => {
    try {
      const templateId = parseInt(req.params.id);
      const updates = req.body;
      
      // Ensure the template exists
      const template = await storage.getLegalDocumentTemplate(templateId);
      if (!template) {
        return res.status(404).json({ message: "Document template not found" });
      }
      
      const updatedTemplate = await storage.updateLegalDocumentTemplate(templateId, updates);
      res.json(updatedTemplate);
    } catch (error) {
      res.status(500).json({ message: "Failed to update document template", error: error.message });
    }
  });
  
  // Legal Compliance Check Routes
  app.get(`${apiPrefix}/legal/compliance/user/:userId`, async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const checks = await storage.getLegalComplianceChecksByUser(userId);
      res.json(checks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch compliance checks", error: error.message });
    }
  });
  
  app.get(`${apiPrefix}/legal/compliance/property/:propertyId`, async (req, res) => {
    try {
      const propertyId = parseInt(req.params.propertyId);
      const checks = await storage.getLegalComplianceChecksByProperty(propertyId);
      res.json(checks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch compliance checks", error: error.message });
    }
  });
  
  app.get(`${apiPrefix}/legal/compliance/:id`, async (req, res) => {
    try {
      const checkId = parseInt(req.params.id);
      const check = await storage.getLegalComplianceCheck(checkId);
      
      if (!check) {
        return res.status(404).json({ message: "Compliance check not found" });
      }
      
      res.json(check);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch compliance check", error: error.message });
    }
  });
  
  app.post(`${apiPrefix}/legal/compliance`, async (req, res) => {
    try {
      const checkData = insertLegalComplianceCheckSchema.parse(req.body);
      
      // Validate that the user exists
      const user = await storage.getUser(checkData.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Validate property if provided
      if (checkData.propertyId) {
        const property = await storage.getProperty(checkData.propertyId);
        if (!property) {
          return res.status(404).json({ message: "Property not found" });
        }
      }
      
      const newCheck = await storage.createLegalComplianceCheck(checkData);
      res.status(201).json(newCheck);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid compliance check data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create compliance check", error: error.message });
    }
  });
  
  app.patch(`${apiPrefix}/legal/compliance/:id/complete`, async (req, res) => {
    try {
      const checkId = parseInt(req.params.id);
      const { status, report, issues, recommendations } = req.body;
      
      if (!status || !report) {
        return res.status(400).json({ message: "Status and report are required" });
      }
      
      // Ensure the compliance check exists
      const check = await storage.getLegalComplianceCheck(checkId);
      if (!check) {
        return res.status(404).json({ message: "Compliance check not found" });
      }
      
      // Complete the compliance check
      const completedCheck = await storage.completeComplianceCheck(
        checkId,
        status,
        report,
        issues || [],
        recommendations || []
      );
      
      res.json(completedCheck);
    } catch (error) {
      res.status(500).json({ message: "Failed to complete compliance check", error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

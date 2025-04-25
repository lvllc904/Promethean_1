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
  insertWorkerBadgeSchema
} from "@shared/schema";
import { aiConcierge } from "./services/ai-concierge";
import { scheduler } from "./services/scheduler";
import { testRunner } from "./services/test-runner";
import { generatePropertyValuation, generatePropertyDescription } from "./services/ai";
import * as web3Service from "./services/web3";

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
      const proposals = await storage.getProposals(status);
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
      
      // Update the proposal vote count
      await storage.updateProposalVotes(
        voteData.proposalId, 
        voteData.voteType, 
        Number(voteData.votePower)
      );
      
      // Record the vote
      const newVote = await storage.createVote(voteData);
      res.status(201).json(newVote);
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
      
      res.json({
        members,
        totalProposals: proposals.length,
        activeProposals: activeProposals.length,
        tokenPrice: 0.853, // This would come from a price feed in a real app
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch DAO statistics" });
    }
  });

  // Tasks / Marketplace
  app.get(`${apiPrefix}/tasks`, async (req, res) => {
    try {
      const status = req.query.status as string;
      const category = req.query.category as string;
      const tasks = await storage.getTasks(status, category);
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

  // Create the HTTP server
  const httpServer = createServer(app);

  return httpServer;
}

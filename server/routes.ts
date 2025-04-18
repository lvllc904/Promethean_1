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
  insertPromTokenPriceSchema
} from "@shared/schema";
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

  // Create the HTTP server
  const httpServer = createServer(app);

  return httpServer;
}

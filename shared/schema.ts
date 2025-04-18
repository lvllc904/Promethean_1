import { pgTable, text, serial, integer, boolean, jsonb, timestamp, numeric, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  walletAddress: text("wallet_address").unique(),
  email: text("email"),
  name: text("name"),
  avatarUrl: text("avatar_url"),
  membershipTier: text("membership_tier").default("free"),
  dacTokenBalance: numeric("dac_token_balance").default("0"),
  promTokenBalance: numeric("prom_token_balance").default("0"),
  receivedInitialProm: boolean("received_initial_prom").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  walletAddress: true,
  email: true,
  name: true,
  avatarUrl: true,
  membershipTier: true,
});

// Property schema
export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  currency: text("currency").default("USD"),
  location: text("location").notNull(),
  country: text("country").notNull(),
  city: text("city").notNull(),
  address: text("address"),
  beds: integer("beds"),
  baths: integer("baths"),
  sqft: numeric("sqft"),
  userId: integer("user_id").notNull(),
  listingType: text("listing_type").notNull(), // 'sale' or 'rent'
  propertyType: text("property_type").notNull(), // 'house', 'apartment', 'condo', etc.
  imageUrls: text("image_urls").array(),
  features: text("features").array(),
  aiValuation: numeric("ai_valuation"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  active: boolean("active").default(true),
});

export const insertPropertySchema = createInsertSchema(properties).omit({
  id: true,
  aiValuation: true,
  createdAt: true,
  updatedAt: true,
});

// Proposal schema for DAO governance
export const proposals = pgTable("proposals", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  creatorId: integer("creator_id").notNull(),
  status: text("status").default("active"), // 'active', 'passed', 'rejected', 'executed'
  startDate: timestamp("start_date").defaultNow(),
  endDate: timestamp("end_date").notNull(),
  votesFor: integer("votes_for").default(0),
  votesAgainst: integer("votes_against").default(0),
  votesAbstain: integer("votes_abstain").default(0),
  executionPayload: jsonb("execution_payload"), // Smart contract interaction details
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertProposalSchema = createInsertSchema(proposals).omit({
  id: true,
  status: true,
  votesFor: true,
  votesAgainst: true,
  votesAbstain: true,
  createdAt: true,
});

// Vote schema for recording user votes
export const votes = pgTable("votes", {
  id: serial("id").primaryKey(),
  proposalId: integer("proposal_id").notNull(),
  userId: integer("user_id").notNull(),
  voteType: text("vote_type").notNull(), // 'for', 'against', 'abstain'
  votePower: numeric("vote_power").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertVoteSchema = createInsertSchema(votes).omit({
  id: true,
  createdAt: true,
});

// Task schema for gig marketplace
export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'photography', 'data-analysis', 'blockchain', etc.
  price: numeric("price").notNull(),
  currency: text("currency").default("USD"),
  creatorId: integer("creator_id").notNull(),
  assigneeId: integer("assignee_id"),
  status: text("status").default("open"), // 'open', 'assigned', 'completed', 'cancelled'
  dueDate: timestamp("due_date"),
  location: text("location"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertTaskSchema = createInsertSchema(tasks).omit({
  id: true,
  assigneeId: true,
  status: true,
  createdAt: true,
  updatedAt: true,
});

// Membership tiers
export const membershipTiers = pgTable("membership_tiers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  currency: text("currency").default("USD"),
  interval: text("interval").default("month"), // 'month', 'year'
  dacTokens: integer("dac_tokens").default(0),
  features: text("features").array(),
  isActive: boolean("is_active").default(true),
});

export const insertMembershipTierSchema = createInsertSchema(membershipTiers).omit({
  id: true,
  isActive: true,
});

// Prom token vesting schedules
export const promVestingSchedules = pgTable("prom_vesting_schedules", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  totalAmount: numeric("total_amount").notNull(),
  amountClaimed: numeric("amount_claimed").default("0"),
  startTime: timestamp("start_time").defaultNow(),
  endTime: timestamp("end_time").notNull(),
  revocable: boolean("revocable").default(true),
  revoked: boolean("revoked").default(false),
  category: text("category").notNull(), // 'worker', 'user', 'investor'
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertPromVestingScheduleSchema = createInsertSchema(promVestingSchedules).omit({
  id: true,
  amountClaimed: true,
  revoked: true,
  createdAt: true,
});

// Prom token price history for real-time valuation
export const promTokenPrices = pgTable("prom_token_prices", {
  id: serial("id").primaryKey(),
  price: numeric("price").notNull(),
  marketCap: numeric("market_cap"),
  totalSupply: numeric("total_supply"),
  timestamp: timestamp("timestamp").defaultNow(),
  source: text("source").notNull(), // 'dex', 'oracle', 'manual'
});

export const insertPromTokenPriceSchema = createInsertSchema(promTokenPrices).omit({
  id: true,
  timestamp: true,
});

// Type definitions for all schemas
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof properties.$inferSelect;

export type InsertProposal = z.infer<typeof insertProposalSchema>;
export type Proposal = typeof proposals.$inferSelect;

export type InsertVote = z.infer<typeof insertVoteSchema>;
export type Vote = typeof votes.$inferSelect;

export type InsertTask = z.infer<typeof insertTaskSchema>;
export type Task = typeof tasks.$inferSelect;

export type InsertMembershipTier = z.infer<typeof insertMembershipTierSchema>;
export type MembershipTier = typeof membershipTiers.$inferSelect;

export type InsertPromVestingSchedule = z.infer<typeof insertPromVestingScheduleSchema>;
export type PromVestingSchedule = typeof promVestingSchedules.$inferSelect;

export type InsertPromTokenPrice = z.infer<typeof insertPromTokenPriceSchema>;
export type PromTokenPrice = typeof promTokenPrices.$inferSelect;

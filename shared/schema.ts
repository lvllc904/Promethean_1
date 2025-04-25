import { pgTable, text, serial, integer, boolean, jsonb, timestamp, numeric, varchar, uniqueIndex, unique } from "drizzle-orm/pg-core";
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

// External Service Configuration schemas for white-label admin dashboard
export const serviceCategories = pgTable("service_categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description"),
  icon: text("icon"),
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertServiceCategorySchema = createInsertSchema(serviceCategories).omit({
  id: true,
  isActive: true,
  createdAt: true,
  updatedAt: true,
});

export const serviceProviders = pgTable("service_providers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  categoryId: integer("category_id").notNull(),
  logoUrl: text("logo_url"),
  website: text("website"),
  documentationUrl: text("documentation_url"),
  apiBaseUrl: text("api_base_url"),
  isRapidApi: boolean("is_rapid_api").default(false),
  authType: text("auth_type").notNull(), // 'api_key', 'oauth2', 'bearer', etc.
  requiredFields: jsonb("required_fields"), // Fields required for configuration
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertServiceProviderSchema = createInsertSchema(serviceProviders).omit({
  id: true,
  isActive: true,
  createdAt: true,
  updatedAt: true,
});

export const apiCredentials = pgTable("api_credentials", {
  id: serial("id").primaryKey(),
  providerId: integer("provider_id").notNull(),
  name: text("name").notNull(),
  apiKey: text("api_key"),
  apiSecret: text("api_secret"),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  tokenExpiresAt: timestamp("token_expires_at"),
  additionalSettings: jsonb("additional_settings"),
  isActive: boolean("is_active").default(true),
  lastTested: timestamp("last_tested"),
  testResult: boolean("test_result"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => {
  return {
    nameProviderIndex: uniqueIndex("name_provider_idx").on(table.name, table.providerId),
  };
});

export const insertApiCredentialSchema = createInsertSchema(apiCredentials).omit({
  id: true,
  tokenExpiresAt: true,
  isActive: true,
  lastTested: true,
  testResult: true,
  createdAt: true,
  updatedAt: true,
});

export const serviceIntegrations = pgTable("service_integrations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  providerId: integer("provider_id").notNull(),
  credentialId: integer("credential_id").notNull(),
  settings: jsonb("settings"), // Integration-specific settings
  webhookUrl: text("webhook_url"),
  callbackUrl: text("callback_url"),
  isActive: boolean("is_active").default(true),
  usageQuota: integer("usage_quota"),
  usageCount: integer("usage_count").default(0),
  lastError: text("last_error"),
  lastSuccessful: timestamp("last_successful"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertServiceIntegrationSchema = createInsertSchema(serviceIntegrations).omit({
  id: true,
  isActive: true,
  usageCount: true,
  lastError: true,
  lastSuccessful: true,
  createdAt: true,
  updatedAt: true,
});

export const whitelabelSettings = pgTable("whitelabel_settings", {
  id: serial("id").primaryKey(),
  companyName: text("company_name").notNull(),
  logoUrl: text("logo_url"),
  faviconUrl: text("favicon_url"),
  primaryColor: text("primary_color").default("#3B82F6"), // Default blue color
  secondaryColor: text("secondary_color").default("#10B981"), // Default green color
  accentColor: text("accent_color").default("#8B5CF6"), // Default purple color
  fontPrimary: text("font_primary").default("Inter"),
  fontSecondary: text("font_secondary").default("Inter"),
  customCss: text("custom_css"),
  customJs: text("custom_js"),
  contactEmail: text("contact_email"),
  supportUrl: text("support_url"),
  privacyPolicyUrl: text("privacy_policy_url"),
  termsOfServiceUrl: text("terms_of_service_url"),
  socialLinks: jsonb("social_links"),
  customDomain: text("custom_domain"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertWhitelabelSettingSchema = createInsertSchema(whitelabelSettings).omit({
  id: true,
  isActive: true,
  createdAt: true,
  updatedAt: true,
});

export const apiUsageLogs = pgTable("api_usage_logs", {
  id: serial("id").primaryKey(),
  integrationId: integer("integration_id").notNull(),
  endpoint: text("endpoint").notNull(),
  requestMethod: text("request_method").notNull(),
  requestSize: integer("request_size"),
  responseSize: integer("response_size"),
  statusCode: integer("status_code"),
  responseTime: integer("response_time"), // milliseconds
  errorMessage: text("error_message"),
  cost: numeric("cost").default("0"), // For tracking API costs
  userId: integer("user_id"), // Which user triggered this API call
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertApiUsageLogSchema = createInsertSchema(apiUsageLogs).omit({
  id: true,
  timestamp: true,
});

// Type definitions for admin dashboard schemas
export type InsertServiceCategory = z.infer<typeof insertServiceCategorySchema>;
export type ServiceCategory = typeof serviceCategories.$inferSelect;

export type InsertServiceProvider = z.infer<typeof insertServiceProviderSchema>;
export type ServiceProvider = typeof serviceProviders.$inferSelect;

export type InsertApiCredential = z.infer<typeof insertApiCredentialSchema>;
export type ApiCredential = typeof apiCredentials.$inferSelect;

export type InsertServiceIntegration = z.infer<typeof insertServiceIntegrationSchema>;
export type ServiceIntegration = typeof serviceIntegrations.$inferSelect;

export type InsertWhitelabelSetting = z.infer<typeof insertWhitelabelSettingSchema>;
export type WhitelabelSetting = typeof whitelabelSettings.$inferSelect;

export type InsertApiUsageLog = z.infer<typeof insertApiUsageLogSchema>;
export type ApiUsageLog = typeof apiUsageLogs.$inferSelect;

// Review schema for AI-driven review analysis
export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  content: text("content").notNull(),
  category: text("category"), // 'concern', 'suggestion', 'praise', 'design idea'
  sentiment: text("sentiment"), // 'positive', 'negative', 'neutral'
  summary: text("summary"),
  proposalId: integer("proposal_id"),
  processed: boolean("processed").default(false),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertReviewSchema = createInsertSchema(reviews).omit({
  id: true,
  category: true,
  sentiment: true,
  summary: true,
  proposalId: true,
  processed: true,
  timestamp: true,
});

// Governance proposal schema for AI-generated proposals
export const governanceProposals = pgTable("governance_proposals", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  proposedAction: text("proposed_action").notNull(),
  proposerId: integer("proposer_id").notNull(),
  status: text("status").default("pending"), // 'pending', 'voting', 'passed', 'failed', 'implemented'
  voteStartTime: timestamp("vote_start_time"),
  voteEndTime: timestamp("vote_end_time"),
  bountyAmount: numeric("bounty_amount"),
  implementationDetails: jsonb("implementation_details"),
  feasibilityStudy: jsonb("feasibility_study"), // impact, effort_estimate, alignment
  representativeReviews: jsonb("representative_reviews"), // Array of review IDs
  aiGenerated: boolean("ai_generated").default(false),
  votesFor: integer("votes_for").default(0),
  votesAgainst: integer("votes_against").default(0),
  votesAbstain: integer("votes_abstain").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertGovernanceProposalSchema = createInsertSchema(governanceProposals).omit({
  id: true,
  status: true,
  votesFor: true,
  votesAgainst: true,
  votesAbstain: true,
  createdAt: true,
  updatedAt: true,
});

// Types for reviews and governance proposals
export type InsertReview = z.infer<typeof insertReviewSchema>;
export type Review = typeof reviews.$inferSelect;

export type InsertGovernanceProposal = z.infer<typeof insertGovernanceProposalSchema>;
export type GovernanceProposal = typeof governanceProposals.$inferSelect;

// Secure Social Media Feature Schema

// Social User Profiles
export const socialProfiles = pgTable('social_profiles', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  pseudonym: text('pseudonym').notNull(),
  avatarUrl: text('avatar_url'),
  bio: text('bio'),
  publicKey: text('public_key').notNull(), // For E2EE
  privacySettings: jsonb('privacy_settings').notNull().default({}),
  mfaEnabled: boolean('mfa_enabled').notNull().default(false),
  mfaSecret: text('mfa_secret'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
}, (table) => {
  return {
    userIdIdx: uniqueIndex('social_profiles_user_id_idx').on(table.userId),
    pseudonymIdx: uniqueIndex('social_profiles_pseudonym_idx').on(table.pseudonym),
  };
});

export const insertSocialProfileSchema = createInsertSchema(socialProfiles).omit({
  id: true,
  mfaEnabled: true,
  mfaSecret: true,
  createdAt: true,
  updatedAt: true,
});

// Social Posts
export const socialPosts = pgTable('social_posts', {
  id: serial('id').primaryKey(),
  authorId: integer('author_id').references(() => socialProfiles.id).notNull(),
  content: text('content').notNull(),
  encryptionMetadata: jsonb('encryption_metadata'), // For E2EE posts (optional)
  visibilityLevel: text('visibility_level').notNull().default('followers'), // public, followers, private
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const insertSocialPostSchema = createInsertSchema(socialPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Follower Relationships
export const socialFollows = pgTable('social_follows', {
  id: serial('id').primaryKey(),
  followerId: integer('follower_id').references(() => socialProfiles.id).notNull(),
  followedId: integer('followed_id').references(() => socialProfiles.id).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => {
  return {
    uniqueFollow: uniqueIndex('social_follows_unique_idx').on(table.followerId, table.followedId),
  };
});

export const insertSocialFollowSchema = createInsertSchema(socialFollows).omit({
  id: true,
  createdAt: true,
});

// Direct Messages
export const socialMessages = pgTable('social_messages', {
  id: serial('id').primaryKey(),
  senderId: integer('sender_id').references(() => socialProfiles.id).notNull(),
  recipientId: integer('recipient_id').references(() => socialProfiles.id).notNull(),
  encryptedContent: text('encrypted_content').notNull(),
  encryptionMetadata: jsonb('encryption_metadata').notNull(),
  readAt: timestamp('read_at'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const insertSocialMessageSchema = createInsertSchema(socialMessages).omit({
  id: true,
  readAt: true,
  createdAt: true,
});

// Session tokens for social features with MFA
export const socialSessions = pgTable('social_sessions', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  token: text('token').notNull().unique(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const insertSocialSessionSchema = createInsertSchema(socialSessions).omit({
  id: true,
  createdAt: true,
});

// Types for social media features
export type InsertSocialProfile = z.infer<typeof insertSocialProfileSchema>;
export type SocialProfile = typeof socialProfiles.$inferSelect;

export type InsertSocialPost = z.infer<typeof insertSocialPostSchema>;
export type SocialPost = typeof socialPosts.$inferSelect;

export type InsertSocialFollow = z.infer<typeof insertSocialFollowSchema>;
export type SocialFollow = typeof socialFollows.$inferSelect;

export type InsertSocialMessage = z.infer<typeof insertSocialMessageSchema>;
export type SocialMessage = typeof socialMessages.$inferSelect;

export type InsertSocialSession = z.infer<typeof insertSocialSessionSchema>;
export type SocialSession = typeof socialSessions.$inferSelect;

// Worker Ratings schema
export const workerRatings = pgTable("worker_ratings", {
  id: serial("id").primaryKey(),
  taskId: integer("task_id").notNull(), // Reference to the task that was completed
  raterId: integer("rater_id").notNull(), // User who provided the rating
  workerId: integer("worker_id").notNull(), // User who performed the work
  rating: integer("rating").notNull(), // 1-5 scale
  review: text("review"), // Text review/feedback
  criteria: jsonb("criteria"), // Optional detailed criteria ratings (communication: 5, timeliness: 4, etc.)
  anonymous: boolean("anonymous").default(false), // Whether the review is anonymous
  verified: boolean("verified").default(false), // Whether this is a verified review (client actually paid)
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => {
  return {
    // Ensure a user can only rate a worker once per task
    uniqueRating: uniqueIndex("unique_worker_rating_idx").on(table.taskId, table.raterId, table.workerId),
  };
});

export const insertWorkerRatingSchema = createInsertSchema(workerRatings).omit({
  id: true,
  verified: true,
  createdAt: true,
  updatedAt: true,
});

// Worker Reputation schema to store aggregated metrics
export const workerReputations = pgTable("worker_reputations", {
  id: serial("id").primaryKey(),
  workerId: integer("worker_id").notNull().unique(), // User who is the worker
  overallRating: numeric("overall_rating").default("0"), // Average overall rating (1-5)
  ratingsCount: integer("ratings_count").default(0), // Number of ratings received
  responseRate: numeric("response_rate").default("0"), // % of task inquiries responded to
  completionRate: numeric("completion_rate").default("0"), // % of accepted tasks completed
  onTimeRate: numeric("on_time_rate").default("0"), // % of tasks completed on time
  ratingsByCategory: jsonb("ratings_by_category"), // Detailed ratings by category/skill
  badgeIds: integer("badge_ids").array(), // Earned badges/achievements
  experiencePoints: integer("experience_points").default(0), // XP for leveling up
  level: integer("level").default(1), // Worker level based on XP
  lastUpdated: timestamp("last_updated").defaultNow(),
});

export const insertWorkerReputationSchema = createInsertSchema(workerReputations).omit({
  id: true,
  overallRating: true,
  ratingsCount: true,
  responseRate: true,
  completionRate: true,
  onTimeRate: true,
  lastUpdated: true,
});

// Worker Badges schema
export const workerBadges = pgTable("worker_badges", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'skill', 'achievement', 'milestone'
  iconUrl: text("icon_url"),
  criteria: jsonb("criteria").notNull(), // Requirements to earn this badge
  rarityLevel: text("rarity_level").default("common"), // 'common', 'uncommon', 'rare', 'epic', 'legendary'
  pointsValue: integer("points_value").default(0), // XP points earned for this badge
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertWorkerBadgeSchema = createInsertSchema(workerBadges).omit({
  id: true,
  isActive: true,
  createdAt: true,
});

// Types for worker ratings and reputation
export type InsertWorkerRating = z.infer<typeof insertWorkerRatingSchema>;
export type WorkerRating = typeof workerRatings.$inferSelect;

export type InsertWorkerReputation = z.infer<typeof insertWorkerReputationSchema>;
export type WorkerReputation = typeof workerReputations.$inferSelect;

export type InsertWorkerBadge = z.infer<typeof insertWorkerBadgeSchema>;
export type WorkerBadge = typeof workerBadges.$inferSelect;

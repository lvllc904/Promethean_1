import { db } from '../db';
import { 
  socialProfiles, 
  socialPosts, 
  socialFollows, 
  type SocialProfile,
  type InsertSocialProfile,
  type SocialPost,
  type InsertSocialPost
} from '@shared/schema';
import { eq, and, inArray, or, desc, asc, ne as neq } from 'drizzle-orm';

/**
 * Service class for handling social profile and content operations
 */
export class SocialProfileService {
  /**
   * Create or update a social profile for a user
   * @param userId - The ID of the user
   * @param profileData - The profile data to create or update
   * @returns The created or updated profile
   */
  async createOrUpdateProfile(userId: number, profileData: Omit<InsertSocialProfile, 'userId'>): Promise<SocialProfile> {
    try {
      // Check if the pseudonym is already taken by another user
      const existingPseudonym = await db.query.socialProfiles.findFirst({
        where: and(
          eq(socialProfiles.pseudonym, profileData.pseudonym),
          neq(socialProfiles.userId, userId)
        )
      });
      
      if (existingPseudonym) {
        throw new Error('Pseudonym is already taken');
      }
      
      // Check if the user already has a profile
      const existingProfile = await db.query.socialProfiles.findFirst({
        where: eq(socialProfiles.userId, userId)
      });
      
      if (existingProfile) {
        // Update existing profile
        const [updatedProfile] = await db.update(socialProfiles)
          .set({
            ...profileData,
            updatedAt: new Date()
          })
          .where(eq(socialProfiles.userId, userId))
          .returning();
        
        return updatedProfile;
      } else {
        // Create new profile
        const [newProfile] = await db.insert(socialProfiles)
          .values({
            ...profileData,
            userId
          })
          .returning();
        
        return newProfile;
      }
    } catch (error) {
      console.error('Error creating/updating social profile:', error);
      throw error;
    }
  }
  
  /**
   * Get a social profile by ID
   * @param profileId - The ID of the profile to get
   * @returns The profile or null if not found
   */
  async getProfileById(profileId: number): Promise<SocialProfile | null> {
    try {
      const profiles = await db.select()
        .from(socialProfiles)
        .where(eq(socialProfiles.id, profileId))
        .limit(1);
      
      return profiles.length > 0 ? profiles[0] : null;
    } catch (error) {
      console.error('Error getting social profile by ID:', error);
      throw error;
    }
  }
  
  /**
   * Get a social profile by user ID
   * @param userId - The ID of the user
   * @returns The profile or null if not found
   */
  async getProfileByUserId(userId: number): Promise<SocialProfile | null> {
    try {
      const profiles = await db.select()
        .from(socialProfiles)
        .where(eq(socialProfiles.userId, userId))
        .limit(1);
      
      return profiles.length > 0 ? profiles[0] : null;
    } catch (error) {
      console.error('Error getting social profile by user ID:', error);
      throw error;
    }
  }
  
  /**
   * Get a social profile by pseudonym
   * @param pseudonym - The pseudonym to look up
   * @returns The profile or null if not found
   */
  async getProfileByPseudonym(pseudonym: string): Promise<SocialProfile | null> {
    try {
      const profiles = await db.select()
        .from(socialProfiles)
        .where(eq(socialProfiles.pseudonym, pseudonym))
        .limit(1);
      
      return profiles.length > 0 ? profiles[0] : null;
    } catch (error) {
      console.error('Error getting social profile by pseudonym:', error);
      throw error;
    }
  }
  
  /**
   * Create a post
   * @param authorProfileId - The profile ID of the author
   * @param postData - The post data
   * @returns The created post
   */
  async createPost(authorProfileId: number, postData: Omit<InsertSocialPost, 'authorId'>): Promise<SocialPost> {
    try {
      const [post] = await db.insert(socialPosts)
        .values({
          ...postData,
          authorId: authorProfileId
        })
        .returning();
      
      return post;
    } catch (error) {
      console.error('Error creating social post:', error);
      throw error;
    }
  }
  
  /**
   * Get posts for a user's feed (posts from followed users)
   * @param profileId - The profile ID of the user viewing the feed
   * @param limit - The maximum number of posts to return
   * @returns Array of posts
   */
  async getFeed(profileId: number, limit: number = 50): Promise<Array<SocialPost & { author: Pick<SocialProfile, 'id' | 'pseudonym' | 'avatarUrl'> }>> {
    try {
      // Get IDs of profiles the user follows
      const followed = await db.select({ followedId: socialFollows.followedId })
        .from(socialFollows)
        .where(eq(socialFollows.followerId, profileId));
      
      const followedIds = followed.map(f => f.followedId);
      
      // If the user doesn't follow anyone, return an empty array
      if (followedIds.length === 0) {
        return [];
      }
      
      // Get posts from followed users
      const posts = await db.select()
        .from(socialPosts)
        .where(and(
          inArray(socialPosts.authorId, followedIds),
          or(
            eq(socialPosts.visibilityLevel, 'public'),
            eq(socialPosts.visibilityLevel, 'followers')
          )
        ))
        .orderBy(desc(socialPosts.createdAt))
        .limit(limit);
      
      // Get the author information for each post
      const authorIdsSet = new Set<number>();
      posts.forEach(post => authorIdsSet.add(post.authorId));
      const authorIds = Array.from(authorIdsSet);
      const authors = await db.select({
        id: socialProfiles.id,
        pseudonym: socialProfiles.pseudonym,
        avatarUrl: socialProfiles.avatarUrl
      })
      .from(socialProfiles)
      .where(inArray(socialProfiles.id, authorIds));
      
      // Create a map of author profiles by id for quick lookup
      const authorMap = new Map(authors.map(author => [author.id, author]));
      
      // Combine posts with their author information
      const postsWithAuthors = posts.map(post => ({
        ...post,
        author: authorMap.get(post.authorId) || { 
          id: post.authorId, 
          pseudonym: 'Unknown', 
          avatarUrl: null 
        }
      }));
      
      return postsWithAuthors;
    } catch (error) {
      console.error('Error getting social feed:', error);
      throw error;
    }
  }
  
  /**
   * Get posts by a specific user
   * @param profileId - The profile ID of the user whose posts to get
   * @param viewerProfileId - The profile ID of the user viewing the posts (for visibility)
   * @param limit - The maximum number of posts to return
   * @returns Array of posts
   */
  async getUserPosts(profileId: number, viewerProfileId: number | null = null, limit: number = 50): Promise<SocialPost[]> {
    try {
      // Check if the viewer follows the user
      let isFollower = false;
      if (viewerProfileId) {
        const follow = await db.select()
          .from(socialFollows)
          .where(and(
            eq(socialFollows.followerId, viewerProfileId),
            eq(socialFollows.followedId, profileId)
          ))
          .limit(1);
          
        isFollower = follow.length > 0;
      }
      
      // Determine which visibility levels the viewer can see
      const visibilityLevels = ['public'];
      if (isFollower) visibilityLevels.push('followers');
      if (viewerProfileId === profileId) visibilityLevels.push('private');
      
      // Get the posts
      const posts = await db.select()
        .from(socialPosts)
        .where(and(
          eq(socialPosts.authorId, profileId),
          inArray(socialPosts.visibilityLevel, visibilityLevels)
        ))
        .orderBy(desc(socialPosts.createdAt))
        .limit(limit);
      
      return posts;
    } catch (error) {
      console.error('Error getting user posts:', error);
      throw error;
    }
  }
  
  /**
   * Follow a user
   * @param followerProfileId - The profile ID of the follower
   * @param followedProfileId - The profile ID of the user to follow
   * @returns Success indicator
   */
  async followUser(followerProfileId: number, followedProfileId: number): Promise<boolean> {
    try {
      // Prevent self-following
      if (followerProfileId === followedProfileId) {
        throw new Error('Cannot follow yourself');
      }
      
      // Check if already following
      const existing = await db.select()
        .from(socialFollows)
        .where(and(
          eq(socialFollows.followerId, followerProfileId),
          eq(socialFollows.followedId, followedProfileId)
        ))
        .limit(1);
      
      if (existing.length > 0) {
        return true; // Already following
      }
      
      // Create follow relationship
      await db.insert(socialFollows)
        .values({
          followerId: followerProfileId,
          followedId: followedProfileId
        });
      
      return true;
    } catch (error) {
      console.error('Error following user:', error);
      throw error;
    }
  }
  
  /**
   * Unfollow a user
   * @param followerProfileId - The profile ID of the follower
   * @param followedProfileId - The profile ID of the user to unfollow
   * @returns Success indicator
   */
  async unfollowUser(followerProfileId: number, followedProfileId: number): Promise<boolean> {
    try {
      await db.delete(socialFollows)
        .where(and(
          eq(socialFollows.followerId, followerProfileId),
          eq(socialFollows.followedId, followedProfileId)
        ));
      
      return true;
    } catch (error) {
      console.error('Error unfollowing user:', error);
      throw error;
    }
  }
  
  /**
   * Check if a user follows another user
   * @param followerProfileId - The profile ID of the follower
   * @param followedProfileId - The profile ID of the user to check
   * @returns Whether the follower follows the followed user
   */
  async checkFollowing(followerProfileId: number, followedProfileId: number): Promise<boolean> {
    try {
      const follow = await db.select()
        .from(socialFollows)
        .where(and(
          eq(socialFollows.followerId, followerProfileId),
          eq(socialFollows.followedId, followedProfileId)
        ))
        .limit(1);
      
      return follow.length > 0;
    } catch (error) {
      console.error('Error checking follow status:', error);
      throw error;
    }
  }
  
  /**
   * Get followers of a user
   * @param profileId - The profile ID to get followers for
   * @returns Array of follower profiles
   */
  async getFollowers(profileId: number): Promise<SocialProfile[]> {
    try {
      // First get all follow relationships where this profile is being followed
      const follows = await db.select().from(socialFollows)
        .where(eq(socialFollows.followedId, profileId));
      
      if (follows.length === 0) {
        return [];
      }
      
      // Then get all the follower profiles
      const followerIds = follows.map(f => f.followerId);
      const followers = await db.select().from(socialProfiles)
        .where(inArray(socialProfiles.id, followerIds));
      
      return followers;
    } catch (error) {
      console.error('Error getting followers:', error);
      throw error;
    }
  }
  
  /**
   * Get users followed by a user
   * @param profileId - The profile ID to get following for
   * @returns Array of followed profiles
   */
  async getFollowing(profileId: number): Promise<SocialProfile[]> {
    try {
      // First get all follow relationships where this profile is following others
      const follows = await db.select().from(socialFollows)
        .where(eq(socialFollows.followerId, profileId));
      
      if (follows.length === 0) {
        return [];
      }
      
      // Then get all the followed profiles
      const followedIds = follows.map(f => f.followedId);
      const followed = await db.select().from(socialProfiles)
        .where(inArray(socialProfiles.id, followedIds));
      
      return followed;
    } catch (error) {
      console.error('Error getting following:', error);
      throw error;
    }
  }
}

// Export a singleton instance
export const socialProfileService = new SocialProfileService();
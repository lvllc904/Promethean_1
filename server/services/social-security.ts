import * as speakeasy from 'speakeasy';
import * as qrcode from 'qrcode';
import jwt from 'jsonwebtoken';
import { db } from '../db';
import { socialSessions, socialProfiles } from '@shared/schema';
import { eq } from 'drizzle-orm';

/**
 * Service class for handling MFA and security-related operations
 * for the secure social media feature
 */
export class SocialSecurityService {
  /**
   * Generate a TOTP secret for a user 
   * @param userId - The ID of the user
   * @param pseudonym - The pseudonym of the user for the QR code label
   * @returns The generated secret and QR code as a data URL
   */
  async generateMfaSecret(userId: number, pseudonym: string): Promise<{ secret: string; qrCode: string }> {
    try {
      // Generate a new TOTP secret
      const secretObj = speakeasy.generateSecret({
        name: `DAC Social (${pseudonym})`,
        issuer: 'DAC Marketplace'
      });
      
      // Convert the secret to base32 for storing
      const secret = secretObj.base32;
      
      if (!secretObj.otpauth_url) {
        throw new Error('Failed to generate OTP auth URL');
      }
      
      // Generate a QR code for the secret - ensure otpauth_url is available
      const qrCode = await qrcode.toDataURL(secretObj.otpauth_url);
      
      // Update the user's social profile with the secret
      // Note: We don't enable MFA yet, that happens after verification
      await db.update(socialProfiles)
        .set({ mfaSecret: secret })
        .where(eq(socialProfiles.userId, userId));
      
      return { secret, qrCode };
    } catch (error) {
      console.error('Error generating MFA secret:', error);
      throw new Error('Failed to generate MFA secret');
    }
  }
  
  /**
   * Verify a TOTP token against a user's secret
   * @param userId - The ID of the user
   * @param token - The token to verify
   * @returns Whether the token is valid
   */
  async verifyMfaToken(userId: number, token: string): Promise<boolean> {
    try {
      // Get the user's MFA secret
      const profile = await db.query.socialProfiles.findFirst({
        where: eq(socialProfiles.userId, userId)
      });
      
      if (!profile || !profile.mfaSecret) {
        throw new Error('MFA not set up for this user');
      }
      
      // Verify the token against the secret
      return speakeasy.totp.verify({
        secret: profile.mfaSecret,
        encoding: 'base32',
        token,
        window: 1 // Allow for 1 period before/after for clock drift
      });
    } catch (error) {
      console.error('Error verifying MFA token:', error);
      throw new Error('Failed to verify MFA token');
    }
  }
  
  /**
   * Enable MFA for a user after successful verification
   * @param userId - The ID of the user
   */
  async enableMfa(userId: number): Promise<void> {
    try {
      await db.update(socialProfiles)
        .set({ mfaEnabled: true })
        .where(eq(socialProfiles.userId, userId));
    } catch (error) {
      console.error('Error enabling MFA:', error);
      throw new Error('Failed to enable MFA');
    }
  }
  
  /**
   * Create a social access token for a user after MFA verification
   * @param userId - The ID of the user
   * @returns The generated JWT token
   */
  async createSocialToken(userId: number): Promise<string> {
    try {
      // Create a JWT token with the socialAccess claim
      const secret = process.env.JWT_SECRET || 'your-secret-key'; // In production, this should never be hardcoded
      const expiresIn = '4h'; // Social sessions expire after 4 hours for security
      
      const token = jwt.sign(
        { userId, socialAccess: true },
        secret,
        { expiresIn }
      );
      
      // Calculate expiration time
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 4);
      
      // Store the token in the database
      await db.insert(socialSessions)
        .values({
          userId,
          token,
          expiresAt
        });
      
      return token;
    } catch (error) {
      console.error('Error creating social token:', error);
      throw new Error('Failed to create social access token');
    }
  }
  
  /**
   * Invalidate all social tokens for a user
   * @param userId - The ID of the user
   */
  async invalidateAllTokens(userId: number): Promise<void> {
    try {
      await db.delete(socialSessions)
        .where(eq(socialSessions.userId, userId));
    } catch (error) {
      console.error('Error invalidating tokens:', error);
      throw new Error('Failed to invalidate tokens');
    }
  }
  
  /**
   * Invalidate a specific social token
   * @param token - The token to invalidate
   */
  async invalidateToken(token: string): Promise<void> {
    try {
      await db.delete(socialSessions)
        .where(eq(socialSessions.token, token));
    } catch (error) {
      console.error('Error invalidating token:', error);
      throw new Error('Failed to invalidate token');
    }
  }
}

// Export a singleton instance
export const socialSecurityService = new SocialSecurityService();
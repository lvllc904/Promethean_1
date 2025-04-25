import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../db';
import { socialSessions } from '@shared/schema';
import { eq } from 'drizzle-orm';

/**
 * Interface for the decoded JWT token
 */
interface SocialTokenPayload {
  userId: number;
  socialAccess: boolean;
  exp: number;
}

/**
 * Express request with attached user data
 */
interface SocialAuthRequest extends Request {
  user?: {
    userId: number;
    socialAccess: boolean;
  };
}

/**
 * Middleware to require a valid social access token
 * This ensures that the user has completed MFA verification
 */
export const requireSocialAuth = async (
  req: SocialAuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // Check for Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized: Missing or invalid token format' });
    }

    // Extract the token
    const token = authHeader.split(' ')[1];
    
    // Verify the token
    const secret = process.env.JWT_SECRET || 'your-secret-key'; // In production, this should never be hardcoded
    const decoded = jwt.verify(token, secret) as SocialTokenPayload;
    
    // Check if token has the socialAccess claim
    if (!decoded.socialAccess) {
      return res.status(403).json({ error: 'Forbidden: Token lacks social access privileges' });
    }
    
    // Check if the token is in the database and not expired
    const session = await db.query.socialSessions.findFirst({
      where: eq(socialSessions.token, token)
    });
    
    if (!session || new Date(session.expiresAt) < new Date()) {
      // If token is expired, delete it from the database
      if (session) {
        await db.delete(socialSessions).where(eq(socialSessions.token, token));
      }
      return res.status(401).json({ error: 'Unauthorized: Token expired or invalid' });
    }
    
    // Attach user info to the request
    req.user = {
      userId: decoded.userId,
      socialAccess: decoded.socialAccess
    };
    
    next();
  } catch (error) {
    console.error('Social auth middleware error:', error);
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};
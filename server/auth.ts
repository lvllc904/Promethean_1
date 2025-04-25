import { Express, Request, Response, NextFunction } from "express";
import session from "express-session";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { storage } from "./storage";
import MemoryStore from "memorystore";

// Create promisified scrypt version
const scryptAsync = promisify(scrypt);

// Types for authentication
export interface AuthUser {
  id: number;
  username: string;
  email?: string | null;
  name?: string | null;
  membershipTier?: string | null;
  walletAddress?: string | null;
  dacTokenBalance?: string | null;
  promTokenBalance?: string | null;
  avatarUrl?: string | null;
}

// Extend Express Session and Request types
declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
  
  namespace Express.Session {
    interface SessionData {
      userId?: number;
    }
  }
}

// Create the memory session store
const SessionStore = MemoryStore(session);

// Password utility functions
async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function comparePasswords(supplied: string, stored: string): Promise<boolean> {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
  return timingSafeEqual(hashedBuf, suppliedBuf);
}

// Authentication middleware
export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.userId) {
    return next();
  }
  
  res.status(401).json({ message: "Unauthorized: Please login to continue" });
};

// Combined authentication middleware that works with both wallet and standard auth
export const isAuthenticatedAny = async (req: Request, res: Response, next: NextFunction) => {
  // Check for standard session authentication
  if (req.session && req.session.userId) {
    try {
      const user = await storage.getUser(req.session.userId);
      if (user) {
        req.user = user;
        return next();
      }
    } catch (error) {
      console.error("Error fetching user in auth middleware:", error);
    }
  }
  
  // Check for wallet authentication header
  const walletAddress = req.headers["x-wallet-address"] as string;
  if (walletAddress) {
    try {
      const user = await storage.getUserByWalletAddress(walletAddress);
      if (user) {
        req.user = user;
        return next();
      }
    } catch (error) {
      console.error("Error fetching user by wallet in auth middleware:", error);
    }
  }
  
  // If no authentication method succeeded
  res.status(401).json({ message: "Unauthorized: Please login or connect wallet to continue" });
};

// Setup authentication and session
export function setupAuth(app: Express) {
  // Setup session
  app.use(session({
    name: "dac.sid",
    secret: process.env.SESSION_SECRET || "development-secret-key",
    resave: false,
    saveUninitialized: false,
    store: new SessionStore({
      checkPeriod: 86400000 // 24 hours
    }),
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    }
  }));
  
  // User registration
  app.post("/api/auth/register", async (req: Request, res: Response) => {
    try {
      const { username, password, email, name } = req.body;
      
      if (!username || !password || !email) {
        return res.status(400).json({ message: "Username, password, and email are required" });
      }
      
      // Check if username already exists
      const existingUser = await storage.getUserByUsername(username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      
      // Check if email already exists
      const existingEmail = await storage.getUserByEmail(email);
      if (existingEmail) {
        return res.status(400).json({ message: "Email already exists" });
      }
      
      // Hash password
      const hashedPassword = await hashPassword(password);
      
      // Create user
      const newUser = await storage.createUser({
        username,
        password: hashedPassword,
        email,
        name,
        membershipTier: "basic", // Default tier
      });
      
      // Set session
      req.session.userId = newUser.id;
      
      // Return user (without password)
      const { password: _, ...userWithoutPassword } = newUser;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ message: "Server error during registration" });
    }
  });
  
  // User login
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }
      
      // Get user
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
      
      // Verify password
      const isPasswordValid = await comparePasswords(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
      
      // Set session
      req.session.userId = user.id;
      
      // Return user (without password)
      const { password: _, ...userWithoutPassword } = user;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error during login" });
    }
  });
  
  // Logout
  app.post("/api/auth/logout", (req: Request, res: Response) => {
    req.session.destroy((err) => {
      if (err) {
        console.error("Logout error:", err);
        return res.status(500).json({ message: "Error during logout" });
      }
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
  
  // Get current user
  app.get("/api/auth/user", async (req: Request, res: Response) => {
    if (!req.session || !req.session.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    
    try {
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      
      // Return user (without password)
      const { password: _, ...userWithoutPassword } = user;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.error("Error fetching current user:", error);
      res.status(500).json({ message: "Server error fetching user data" });
    }
  });
  
  // Link wallet to account
  app.post("/api/auth/link-wallet", isAuthenticated, async (req: Request, res: Response) => {
    try {
      const { walletAddress } = req.body;
      const userId = req.session.userId!;
      
      if (!walletAddress) {
        return res.status(400).json({ message: "Wallet address is required" });
      }
      
      // Check if wallet is already linked to another account
      const existingWallet = await storage.getUserByWalletAddress(walletAddress);
      if (existingWallet && existingWallet.id !== userId) {
        return res.status(400).json({ message: "Wallet is already linked to another account" });
      }
      
      // Update user
      const updatedUser = await storage.updateUserWallet(userId, walletAddress);
      
      // Return updated user
      const { password: _, ...userWithoutPassword } = updatedUser;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.error("Error linking wallet:", error);
      res.status(500).json({ message: "Server error linking wallet" });
    }
  });
}
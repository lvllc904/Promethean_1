import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useWallet } from "@/components/wallet/wallet-provider";

// Define the User interface (this should match your backend schema)
export interface User {
  id: number;
  username: string;
  name?: string;
  email?: string;
  membershipTier?: string;
  walletAddress?: string;
  dacTokenBalance?: string;
  promTokenBalance?: string;
  avatarUrl?: string;
}

// Login data interface
interface LoginData {
  username: string;
  password: string;
}

// Registration data interface
interface RegisterData {
  username: string;
  password: string;
  email: string;
  name?: string;
}

// Authentication context type
type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  loginMutation: UseMutationResult<User, Error, LoginData>;
  logoutMutation: UseMutationResult<void, Error, void>;
  registerMutation: UseMutationResult<User, Error, RegisterData>;
};

// Create the context
export const AuthContext = createContext<AuthContextType | null>(null);

// Auth provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const { user: walletUser, isConnected, disconnect } = useWallet();
  const [combinedUser, setCombinedUser] = useState<User | null>(null);

  // Fetch user data
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<User | null, Error>({
    queryKey: ["/api/auth/user"],
    queryFn: async () => {
      try {
        // Direct fetch implementation instead of using apiRequest
        const res = await fetch("/api/auth/user", {
          method: "GET",
          credentials: "include"
        });
        
        // If unauthorized, return null (not logged in)
        if (res.status === 401) {
          return null;
        }
        
        // If not OK, throw error
        if (!res.ok) {
          throw new Error(`Error fetching user: ${res.statusText}`);
        }
        
        // Parse the successful response
        const text = await res.text();
        if (!text) {
          // Empty response, user not logged in
          return null;
        }
        
        try {
          return JSON.parse(text);
        } catch (e) {
          console.error("Failed to parse JSON response:", text);
          return null;
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        return null;
      }
    },
  });

  // Update combined user when either standard or wallet user changes
  useEffect(() => {
    // If wallet is connected, prefer wallet user data
    if (isConnected && walletUser) {
      setCombinedUser(walletUser as User);
    } else if (user) {
      // Otherwise use standard auth user
      setCombinedUser(user);
    } else {
      setCombinedUser(null);
    }
  }, [user, walletUser, isConnected]);

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginData) => {
      try {
        // Direct fetch implementation instead of using apiRequest
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
          credentials: "include"
        });
        
        // Check if response is OK
        if (!res.ok) {
          const text = await res.text();
          
          // Try to parse as JSON if possible
          try {
            const data = JSON.parse(text);
            throw new Error(data.message || "Login failed");
          } catch (e) {
            // Otherwise use the text directly
            throw new Error(text || res.statusText || "Login failed");
          }
        }
        
        // Parse the successful response
        const text = await res.text();
        if (!text) {
          throw new Error("Empty response from server");
        }
        
        try {
          return JSON.parse(text);
        } catch (e) {
          console.error("Failed to parse JSON response:", text);
          throw new Error("Invalid response format from server");
        }
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
    },
    onSuccess: (user: User) => {
      queryClient.setQueryData(["/api/auth/user"], user);
      if (isConnected) {
        // If wallet was connected, disconnect it to avoid conflicts
        disconnect();
      }
      toast({
        title: "Login successful",
        description: `Welcome back, ${user.name || user.username}!`,
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Registration mutation
  const registerMutation = useMutation({
    mutationFn: async (userData: RegisterData) => {
      try {
        // Direct fetch implementation instead of using apiRequest
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
          credentials: "include"
        });
        
        // Check if response is OK
        if (!res.ok) {
          const text = await res.text();
          
          // Try to parse as JSON if possible
          try {
            const data = JSON.parse(text);
            throw new Error(data.message || "Registration failed");
          } catch (e) {
            // Otherwise use the text directly
            throw new Error(text || res.statusText || "Registration failed");
          }
        }
        
        // Parse the successful response
        const text = await res.text();
        if (!text) {
          throw new Error("Empty response from server");
        }
        
        try {
          return JSON.parse(text);
        } catch (e) {
          console.error("Failed to parse JSON response:", text);
          throw new Error("Invalid response format from server");
        }
      } catch (error) {
        console.error("Registration error:", error);
        throw error;
      }
    },
    onSuccess: (user: User) => {
      queryClient.setQueryData(["/api/auth/user"], user);
      toast({
        title: "Registration successful",
        description: `Welcome, ${user.name || user.username}!`,
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      try {
        // Direct fetch implementation instead of using apiRequest
        const res = await fetch("/api/auth/logout", {
          method: "POST",
          credentials: "include"
        });
        
        // Check if response is OK
        if (!res.ok) {
          const text = await res.text();
          
          // Try to parse as JSON if possible
          try {
            const data = JSON.parse(text);
            throw new Error(data.message || "Logout failed");
          } catch (e) {
            // Otherwise use the text directly
            throw new Error(text || res.statusText || "Logout failed");
          }
        }
        
        return;
      } catch (error) {
        console.error("Logout error:", error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.setQueryData(["/api/auth/user"], null);
      
      // Also disconnect wallet if connected
      if (isConnected) {
        disconnect();
      }
      
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Logout failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user: combinedUser,
        isLoading,
        error,
        loginMutation,
        logoutMutation,
        registerMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook for using the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
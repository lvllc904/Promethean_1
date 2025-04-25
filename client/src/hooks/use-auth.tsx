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
        const res = await apiRequest("GET", "/api/auth/user");
        
        // If unauthorized, return null (not logged in)
        if (res.status === 401) {
          return null;
        }
        
        // If not OK, throw error
        if (!res.ok) {
          throw new Error(`Error fetching user: ${res.statusText}`);
        }
        
        // Try to parse the JSON response
        try {
          return await res.json();
        } catch (parseError) {
          console.error("Failed to parse user data response:", parseError);
          throw new Error("Failed to parse user data");
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
        const res = await apiRequest("POST", "/api/auth/login", credentials);
        
        // Check if response is OK
        if (!res.ok) {
          // Try to parse error message if available
          try {
            const errorData = await res.json();
            throw new Error(errorData.message || "Login failed");
          } catch (parseError) {
            // If we can't parse JSON, use status text
            throw new Error(res.statusText || "Login failed");
          }
        }
        
        // Try to parse the successful response
        try {
          return await res.json();
        } catch (parseError) {
          throw new Error("Failed to parse server response");
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
        const res = await apiRequest("POST", "/api/auth/register", userData);
        
        // Check if response is OK
        if (!res.ok) {
          // Try to parse error message if available
          try {
            const errorData = await res.json();
            throw new Error(errorData.message || "Registration failed");
          } catch (parseError) {
            // If we can't parse JSON, use status text
            throw new Error(res.statusText || "Registration failed");
          }
        }
        
        // Try to parse the successful response
        try {
          return await res.json();
        } catch (parseError) {
          throw new Error("Failed to parse server response");
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
        const res = await apiRequest("POST", "/api/auth/logout");
        
        // Check if response is OK
        if (!res.ok) {
          // Try to parse error message if available
          try {
            const errorData = await res.json();
            throw new Error(errorData.message || "Logout failed");
          } catch (parseError) {
            // If we can't parse JSON, use status text
            throw new Error(res.statusText || "Logout failed");
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
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
  dacTokenBalance?: number;
  profilePictureUrl?: string;
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
        if (res.status === 401) return null;
        return await res.json();
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
      const res = await apiRequest("POST", "/api/auth/login", credentials);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }
      return await res.json();
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
      const res = await apiRequest("POST", "/api/auth/register", userData);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Registration failed");
      }
      return await res.json();
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
      await apiRequest("POST", "/api/auth/logout");
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
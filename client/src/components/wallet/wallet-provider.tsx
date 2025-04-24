import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { ConnectWalletModal } from './connect-wallet-modal';
import { useToast } from '@/hooks/use-toast';

// Define window.ethereum interface for TypeScript
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (event: string, callback: (...args: any[]) => void) => void;
      isMetaMask?: boolean;
    };
  }
}

interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  membershipTier?: string;
  dacTokenBalance?: number;
}

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  provider: ethers.BrowserProvider | null;
  signer: ethers.JsonRpcSigner | null;
  user: User | null;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  connect: (providerId?: string) => Promise<void>;
  disconnect: () => void;
  balance: string;
}

const WalletContext = createContext<WalletContextType>({
  isConnected: false,
  address: null,
  provider: null,
  signer: null,
  user: null,
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  connect: async () => {},
  disconnect: () => {},
  balance: '0',
});

export const useWallet = () => useContext(WalletContext);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [balance, setBalance] = useState('0');
  
  const { toast } = useToast();
  
  // Check if wallet is already connected on component mount
  useEffect(() => {
    const checkConnection = async () => {
      // Check if window is defined (to prevent SSR issues)
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          // Check if we're already connected
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts && accounts.length > 0) {
            const newProvider = new ethers.BrowserProvider(window.ethereum);
            const newSigner = await newProvider.getSigner();
            const address = await newSigner.getAddress();
            
            setProvider(newProvider);
            setSigner(newSigner);
            setAddress(address);
            setIsConnected(true);
            
            // Fetch user data if connected
            fetchUserData(address);
            
            // Get wallet balance
            const balance = await newProvider.getBalance(address);
            setBalance(ethers.formatEther(balance));
          }
        } catch (error) {
          console.error("Failed to check wallet connection:", error);
        }
      }
    };
    
    checkConnection();
  }, []);
  
  // Handle account and network changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const handleAccountsChanged = async (accounts: string[]) => {
        if (!accounts || accounts.length === 0) {
          // User disconnected their wallet
          disconnect();
        } else if (accounts[0] !== address) {
          // User switched account
          setAddress(accounts[0]);
          fetchUserData(accounts[0]);
          
          // Update balance
          if (provider) {
            const balance = await provider.getBalance(accounts[0]);
            setBalance(ethers.formatEther(balance));
          }
        }
      };
      
      const handleChainChanged = () => {
        // Reload the page on chain change as recommended by MetaMask
        window.location.reload();
      };
      
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
      
      return () => {
        if (window.ethereum) {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
          window.ethereum.removeListener('chainChanged', handleChainChanged);
        }
      };
    }
  }, [address, provider]);
  
  const fetchUserData = async (walletAddress: string) => {
    try {
      // Simulate user data fetch
      // In a real app, this would fetch from your backend
      setTimeout(() => {
        const mockUser: User = {
          id: 1,
          name: 'John Doe',
          username: 'johndoe',
          email: 'john@example.com',
          membershipTier: 'basic',
          dacTokenBalance: 245.32,
        };
        setUser(mockUser);
      }, 500);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };
  
  const connect = async (providerId?: string) => {
    if (typeof window === 'undefined' || !window.ethereum) {
      toast({
        title: "Wallet Error",
        description: "No Ethereum wallet detected. Please install MetaMask or another compatible wallet.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts',
        params: []
      });
      
      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts returned from wallet");
      }
      
      const newProvider = new ethers.BrowserProvider(window.ethereum);
      const newSigner = await newProvider.getSigner();
      const address = await newSigner.getAddress();
      
      setProvider(newProvider);
      setSigner(newSigner);
      setAddress(address);
      setIsConnected(true);
      
      // Fetch the user data
      fetchUserData(address);
      
      // Get wallet balance
      const balance = await newProvider.getBalance(address);
      setBalance(ethers.formatEther(balance));
      
      toast({
        title: "Wallet Connected",
        description: `Connected to ${address.substring(0, 8)}...${address.substring(36)}`,
      });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to your wallet. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  const disconnect = () => {
    setIsConnected(false);
    setAddress(null);
    setProvider(null);
    setSigner(null);
    setUser(null);
    setBalance('0');
  };
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <WalletContext.Provider
      value={{
        isConnected,
        address,
        provider,
        signer,
        user,
        isModalOpen,
        openModal,
        closeModal,
        connect,
        disconnect,
        balance,
      }}
    >
      {children}
      <ConnectWalletModal />
    </WalletContext.Provider>
  );
};

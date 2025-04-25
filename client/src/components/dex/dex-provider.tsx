import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { ethers } from 'ethers';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useToast } from '@/hooks/use-toast';

export interface Token {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  balance?: {
    raw: ethers.BigNumberish;
    formatted: string;
  };
  logoUrl?: string;
}

export interface SwapQuote {
  path: string[];
  amountIn: {
    raw: ethers.BigNumberish;
    formatted: string;
  };
  amountOut: {
    raw: ethers.BigNumberish;
    formatted: string;
  };
}

export interface LiquidityPosition {
  pairAddress: string;
  tokenA: Token;
  tokenB: Token;
  liquidity: string;
  shareOfPool: string;
}

interface DexContextType {
  availableTokens: Token[];
  popularTokens: Token[];
  selectedTokens: {
    tokenIn: Token | null;
    tokenOut: Token | null;
  };
  swapAmount: string;
  swapQuote: SwapQuote | null;
  slippageTolerance: number;
  liquidityPositions: LiquidityPosition[];
  isLoadingQuote: boolean;
  isSwapping: boolean;
  isApprovingToken: boolean;
  currentDex: {
    name: string;
    routerAddress: string;
  };
  // Functions
  setSelectedTokens: (tokens: { tokenIn?: Token | null; tokenOut?: Token | null }) => void;
  setSwapAmount: (amount: string) => void;
  setSlippageTolerance: (tolerance: number) => void;
  fetchTokenBalance: (token: Token) => Promise<void>;
  getSwapQuote: () => Promise<void>;
  executeSwap: () => Promise<void>;
  approveToken: (token: Token) => Promise<void>;
  switchTokens: () => void;
  addCustomToken: (token: Token) => void;
  // Liquidity related functions
  addLiquidity: (tokenA: Token, tokenB: Token, amountA: string, amountB: string) => Promise<void>;
  removeLiquidity: (position: LiquidityPosition, percentage: number) => Promise<void>;
  // Loading states
  loadingStates: {
    loadingBalances: boolean;
    loadingPositions: boolean;
    addingLiquidity: boolean;
    removingLiquidity: boolean;
  };
}

// Mock token data
const mockTokens: Token[] = [
  {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  },
  {
    address: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
    logoUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
  },
  {
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 6,
    logoUrl: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
  },
  {
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoUrl: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
  },
  {
    address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    name: 'Uniswap',
    symbol: 'UNI',
    decimals: 18,
    logoUrl: 'https://cryptologos.cc/logos/uniswap-uni-logo.png',
  },
  {
    address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
    name: 'ChainLink Token',
    symbol: 'LINK',
    decimals: 18,
    logoUrl: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
  },
  {
    address: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
    name: 'HEX',
    symbol: 'HEX',
    decimals: 8,
    logoUrl: 'https://cryptologos.cc/logos/hex-hex-logo.png',
  },
  {
    address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
    name: 'Polygon',
    symbol: 'MATIC',
    decimals: 18,
    logoUrl: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
  },
  {
    address: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
    name: 'Synthetix Network Token',
    symbol: 'SNX',
    decimals: 18,
    logoUrl: 'https://cryptologos.cc/logos/synthetix-network-token-snx-logo.png',
  },
  {
    address: '0xc0fFee0000000000000000000000000000000001',
    name: 'DAC Token',
    symbol: 'DAC',
    decimals: 18,
    logoUrl: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-real-estate-business-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png',
  },
  {
    address: '0xc0fFee0000000000000000000000000000000002',
    name: 'Prom Token',
    symbol: 'PROM',
    decimals: 18,
    logoUrl: 'https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-token-cryptocurrency-vitaliy-gorbachev-flat-vitaly-gorbachev.png',
  },
];

const DexContext = createContext<DexContextType | null>(null);

export const useDex = () => {
  const context = useContext(DexContext);
  if (!context) {
    throw new Error('useDex must be used within a DexProvider');
  }
  return context;
};

export const DexProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { provider, address, isConnected } = useWallet();
  const { toast } = useToast();
  
  // State
  const [availableTokens, setAvailableTokens] = useState<Token[]>(mockTokens);
  const [popularTokens, setPopularTokens] = useState<Token[]>(mockTokens.slice(0, 5));
  const [selectedTokens, setSelectedTokens] = useState<{ tokenIn: Token | null; tokenOut: Token | null }>({
    tokenIn: mockTokens[0], // Default to ETH
    tokenOut: mockTokens[2], // Default to USDT
  });
  const [swapAmount, setSwapAmount] = useState<string>('');
  const [swapQuote, setSwapQuote] = useState<SwapQuote | null>(null);
  const [slippageTolerance, setSlippageTolerance] = useState<number>(0.5); // 0.5%
  const [liquidityPositions, setLiquidityPositions] = useState<LiquidityPosition[]>([]);
  
  // Loading states
  const [isLoadingQuote, setIsLoadingQuote] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [isApprovingToken, setIsApprovingToken] = useState(false);
  const [loadingBalances, setLoadingBalances] = useState(false);
  const [loadingPositions, setLoadingPositions] = useState(false);
  const [addingLiquidity, setAddingLiquidity] = useState(false);
  const [removingLiquidity, setRemovingLiquidity] = useState(false);
  
  const currentDex = {
    name: 'DAC Swap',
    routerAddress: '0xDeFiRouterAddress0000000000000000000000000',
  };

  // Update token selection
  const updateSelectedTokens = useCallback(
    (tokens: { tokenIn?: Token | null; tokenOut?: Token | null }) => {
      setSelectedTokens((prev) => ({
        tokenIn: tokens.tokenIn !== undefined ? tokens.tokenIn : prev.tokenIn,
        tokenOut: tokens.tokenOut !== undefined ? tokens.tokenOut : prev.tokenOut,
      }));
      // Clear previous quote when tokens change
      setSwapQuote(null);
    },
    []
  );

  // Switch tokens
  const switchTokens = useCallback(() => {
    setSelectedTokens((prev) => ({
      tokenIn: prev.tokenOut,
      tokenOut: prev.tokenIn,
    }));
    // Clear previous quote when tokens change
    setSwapQuote(null);
  }, []);

  // Fetch token balance
  const fetchTokenBalance = useCallback(
    async (token: Token) => {
      if (!isConnected || !provider || !address) {
        return;
      }

      try {
        // For ETH, get the native balance
        if (token.address === '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE') {
          const balance = await provider.getBalance(address);
          const formattedBalance = ethers.utils.formatUnits(balance, token.decimals);
          
          // Update the token in availableTokens
          setAvailableTokens((prevTokens) =>
            prevTokens.map((t) =>
              t.address === token.address
                ? {
                    ...t,
                    balance: {
                      raw: balance.toString(),
                      formatted: formattedBalance,
                    },
                  }
                : t
            )
          );

          // Also update in selected tokens if needed
          setSelectedTokens((prev) => ({
            tokenIn:
              prev.tokenIn?.address === token.address
                ? {
                    ...prev.tokenIn,
                    balance: {
                      raw: balance.toString(),
                      formatted: formattedBalance,
                    },
                  }
                : prev.tokenIn,
            tokenOut:
              prev.tokenOut?.address === token.address
                ? {
                    ...prev.tokenOut,
                    balance: {
                      raw: balance.toString(),
                      formatted: formattedBalance,
                    },
                  }
                : prev.tokenOut,
          }));
        } else {
          // For other tokens, we would use the ERC20 contract
          // This is mocked for this example
          const mockBalance = ethers.utils.parseUnits(
            (Math.random() * 100).toFixed(2),
            token.decimals
          );
          const formattedBalance = ethers.utils.formatUnits(mockBalance, token.decimals);

          // Update the token in availableTokens
          setAvailableTokens((prevTokens) =>
            prevTokens.map((t) =>
              t.address === token.address
                ? {
                    ...t,
                    balance: {
                      raw: mockBalance.toString(),
                      formatted: formattedBalance,
                    },
                  }
                : t
            )
          );

          // Also update in selected tokens if needed
          setSelectedTokens((prev) => ({
            tokenIn:
              prev.tokenIn?.address === token.address
                ? {
                    ...prev.tokenIn,
                    balance: {
                      raw: mockBalance.toString(),
                      formatted: formattedBalance,
                    },
                  }
                : prev.tokenIn,
            tokenOut:
              prev.tokenOut?.address === token.address
                ? {
                    ...prev.tokenOut,
                    balance: {
                      raw: mockBalance.toString(),
                      formatted: formattedBalance,
                    },
                  }
                : prev.tokenOut,
          }));
        }
      } catch (error) {
        console.error(`Error fetching balance for ${token.symbol}:`, error);
        toast({
          title: 'Error',
          description: `Could not fetch ${token.symbol} balance`,
          variant: 'destructive',
        });
      }
    },
    [isConnected, provider, address, toast]
  );

  // Fetch balances for all tokens
  const fetchAllBalances = useCallback(async () => {
    if (!isConnected) return;
    
    setLoadingBalances(true);
    try {
      const fetchPromises = availableTokens.map((token) => fetchTokenBalance(token));
      await Promise.all(fetchPromises);
    } catch (error) {
      console.error('Error fetching all balances:', error);
    } finally {
      setLoadingBalances(false);
    }
  }, [availableTokens, fetchTokenBalance, isConnected]);

  // Fetch balances when wallet connects
  useEffect(() => {
    if (isConnected) {
      fetchAllBalances();
    }
  }, [isConnected, fetchAllBalances]);

  // Add a custom token
  const addCustomToken = (token: Token) => {
    // Check if token already exists
    const tokenExists = availableTokens.some((t) => t.address.toLowerCase() === token.address.toLowerCase());
    
    if (tokenExists) {
      toast({
        title: 'Token Already Exists',
        description: `${token.symbol} is already in your token list`,
        variant: 'default',
      });
      return;
    }
    
    setAvailableTokens((prevTokens) => [...prevTokens, token]);
    toast({
      title: 'Token Added',
      description: `${token.symbol} has been added to your token list`,
      variant: 'default',
    });
    
    // If connected, fetch the balance
    if (isConnected) {
      fetchTokenBalance(token);
    }
  };

  // Get swap quote
  const getSwapQuote = async () => {
    if (!selectedTokens.tokenIn || !selectedTokens.tokenOut || !swapAmount || parseFloat(swapAmount) <= 0) {
      setSwapQuote(null);
      return;
    }
    
    setIsLoadingQuote(true);
    
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Convert input amount to Wei (or equivalent based on decimals)
      const amountInWei = ethers.utils.parseUnits(swapAmount, selectedTokens.tokenIn.decimals);
      
      // Mock exchange rate calculations
      const mockExchangeRate = Math.random() * 2000; // Random exchange rate
      const amountOutWei = ethers.BigNumber.from(
        (Number(ethers.utils.formatUnits(amountInWei, selectedTokens.tokenIn.decimals)) * mockExchangeRate)
          .toFixed(0)
      );
      
      // Format amount out based on output token decimals
      const formattedAmountOut = (
        Number(ethers.utils.formatUnits(amountInWei, selectedTokens.tokenIn.decimals)) * mockExchangeRate
      ).toFixed(selectedTokens.tokenOut.decimals);
      
      const newQuote: SwapQuote = {
        path: [selectedTokens.tokenIn.address, selectedTokens.tokenOut.address],
        amountIn: {
          raw: amountInWei.toString(),
          formatted: swapAmount,
        },
        amountOut: {
          raw: amountOutWei.toString(),
          formatted: formattedAmountOut,
        },
      };
      
      setSwapQuote(newQuote);
    } catch (error) {
      console.error('Error getting swap quote:', error);
      toast({
        title: 'Error',
        description: 'Failed to get swap quote',
        variant: 'destructive',
      });
    } finally {
      setIsLoadingQuote(false);
    }
  };

  // Approve token for swap
  const approveToken = async (token: Token) => {
    if (!isConnected || !swapAmount || parseFloat(swapAmount) <= 0) {
      return;
    }
    
    setIsApprovingToken(true);
    
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      toast({
        title: 'Approved',
        description: `Successfully approved ${token.symbol} for trading`,
        variant: 'default',
      });
    } catch (error) {
      console.error('Error approving token:', error);
      toast({
        title: 'Error',
        description: `Failed to approve ${token.symbol}`,
        variant: 'destructive',
      });
    } finally {
      setIsApprovingToken(false);
    }
  };

  // Execute swap
  const executeSwap = async () => {
    if (
      !isConnected ||
      !selectedTokens.tokenIn ||
      !selectedTokens.tokenOut ||
      !swapAmount ||
      parseFloat(swapAmount) <= 0 ||
      !swapQuote
    ) {
      return;
    }
    
    setIsSwapping(true);
    
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 3000));
      
      toast({
        title: 'Swap Successful',
        description: `Swapped ${swapAmount} ${selectedTokens.tokenIn.symbol} for ${swapQuote.amountOut.formatted} ${selectedTokens.tokenOut.symbol}`,
        variant: 'default',
      });
      
      // Refresh balances after swap
      if (selectedTokens.tokenIn) await fetchTokenBalance(selectedTokens.tokenIn);
      if (selectedTokens.tokenOut) await fetchTokenBalance(selectedTokens.tokenOut);
      
      // Clear swap amount and quote
      setSwapAmount('');
      setSwapQuote(null);
    } catch (error) {
      console.error('Error executing swap:', error);
      toast({
        title: 'Error',
        description: 'Failed to execute swap',
        variant: 'destructive',
      });
    } finally {
      setIsSwapping(false);
    }
  };

  // Add liquidity
  const addLiquidity = async (
    tokenA: Token,
    tokenB: Token,
    amountA: string,
    amountB: string
  ) => {
    if (!isConnected) {
      return;
    }
    
    setAddingLiquidity(true);
    
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 3000));
      
      toast({
        title: 'Liquidity Added',
        description: `Successfully added ${amountA} ${tokenA.symbol} and ${amountB} ${tokenB.symbol} to the pool`,
        variant: 'default',
      });
      
      // Refresh balances
      await fetchTokenBalance(tokenA);
      await fetchTokenBalance(tokenB);
      
      // Refresh liquidity positions
      // This would normally fetch updated positions from the blockchain
    } catch (error) {
      console.error('Error adding liquidity:', error);
      toast({
        title: 'Error',
        description: 'Failed to add liquidity',
        variant: 'destructive',
      });
    } finally {
      setAddingLiquidity(false);
    }
  };

  // Remove liquidity
  const removeLiquidity = async (position: LiquidityPosition, percentage: number) => {
    if (!isConnected) {
      return;
    }
    
    setRemovingLiquidity(true);
    
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 3000));
      
      toast({
        title: 'Liquidity Removed',
        description: `Successfully removed ${percentage}% of your liquidity from the ${position.tokenA.symbol}/${position.tokenB.symbol} pool`,
        variant: 'default',
      });
      
      // Refresh balances
      await fetchTokenBalance(position.tokenA);
      await fetchTokenBalance(position.tokenB);
      
      // Refresh liquidity positions
      // This would normally fetch updated positions from the blockchain
    } catch (error) {
      console.error('Error removing liquidity:', error);
      toast({
        title: 'Error',
        description: 'Failed to remove liquidity',
        variant: 'destructive',
      });
    } finally {
      setRemovingLiquidity(false);
    }
  };

  const value: DexContextType = {
    availableTokens,
    popularTokens,
    selectedTokens,
    swapAmount,
    swapQuote,
    slippageTolerance,
    liquidityPositions,
    isLoadingQuote,
    isSwapping,
    isApprovingToken,
    currentDex,
    setSelectedTokens: updateSelectedTokens,
    setSwapAmount,
    setSlippageTolerance,
    fetchTokenBalance,
    getSwapQuote,
    executeSwap,
    approveToken,
    switchTokens,
    addCustomToken,
    addLiquidity,
    removeLiquidity,
    loadingStates: {
      loadingBalances,
      loadingPositions,
      addingLiquidity,
      removingLiquidity,
    },
  };

  return <DexContext.Provider value={value}>{children}</DexContext.Provider>;
};
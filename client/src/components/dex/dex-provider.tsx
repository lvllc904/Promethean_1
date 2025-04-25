import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useToast } from '@/hooks/use-toast';
import * as dexService from '@/services/dex';

// Define types for the DEX context
interface Token {
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

interface SwapQuote {
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

interface LiquidityPosition {
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
  setSlippageTolerance: (slippage: number) => void;
  fetchTokenBalance: (token: Token) => Promise<Token>;
  getSwapQuote: () => Promise<SwapQuote | null>;
  executeSwap: () => Promise<boolean>;
  approveToken: (token: Token) => Promise<boolean>;
  switchTokens: () => void;
  addCustomToken: (address: string) => Promise<Token | null>;
  // Liquidity related functions
  addLiquidity: (tokenA: Token, tokenB: Token, amountA: string, amountB: string) => Promise<boolean>;
  removeLiquidity: (position: LiquidityPosition, percentage: number) => Promise<boolean>;
  // Loading states
  loadingStates: {
    loadingBalances: boolean;
    loadingPositions: boolean;
    addingLiquidity: boolean;
    removingLiquidity: boolean;
  };
}

// Common popular tokens by chain ID
const DEFAULT_TOKENS_BY_CHAIN: Record<number, Token[]> = {
  1: [ // Ethereum Mainnet
    {
      address: dexService.TOKENS.ETHEREUM.WETH,
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      logoUrl: 'https://assets.coingecko.com/coins/images/2518/small/weth.png'
    },
    {
      address: dexService.TOKENS.ETHEREUM.USDC,
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      logoUrl: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png'
    },
    {
      address: dexService.TOKENS.ETHEREUM.DAI,
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      logoUrl: 'https://assets.coingecko.com/coins/images/9956/small/4943.png'
    },
    {
      address: dexService.TOKENS.ETHEREUM.USDT,
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 6,
      logoUrl: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png'
    }
  ],
  137: [ // Polygon
    {
      address: dexService.TOKENS.POLYGON.WMATIC,
      name: 'Wrapped Matic',
      symbol: 'WMATIC',
      decimals: 18,
      logoUrl: 'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png'
    },
    {
      address: dexService.TOKENS.POLYGON.USDC,
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      logoUrl: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png'
    },
    {
      address: dexService.TOKENS.POLYGON.DAI,
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      logoUrl: 'https://assets.coingecko.com/coins/images/9956/small/4943.png'
    },
    {
      address: dexService.TOKENS.POLYGON.USDT,
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 6,
      logoUrl: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png'
    }
  ],
  56: [ // BSC
    {
      address: dexService.TOKENS.BSC.WBNB,
      name: 'Wrapped BNB',
      symbol: 'WBNB',
      decimals: 18,
      logoUrl: 'https://assets.coingecko.com/coins/images/12591/small/binance-coin-logo.png'
    },
    {
      address: dexService.TOKENS.BSC.BUSD,
      name: 'Binance USD',
      symbol: 'BUSD',
      decimals: 18,
      logoUrl: 'https://assets.coingecko.com/coins/images/9576/small/BUSD.png'
    },
    {
      address: dexService.TOKENS.BSC.USDT,
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 18,
      logoUrl: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png'
    },
    {
      address: dexService.TOKENS.BSC.USDC,
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 18,
      logoUrl: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png'
    }
  ]
};

// Create the DEX context
const DexContext = createContext<DexContextType | null>(null);

// Hook to use the DEX context
export const useDex = () => {
  const context = useContext(DexContext);
  if (!context) {
    throw new Error('useDex must be used within a DexProvider');
  }
  return context;
};

// DEX provider component
export const DexProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { provider, signer, address, isConnected } = useWallet();
  const { toast } = useToast();
  
  // State for the DEX context
  const [availableTokens, setAvailableTokens] = useState<Token[]>([]);
  const [popularTokens, setPopularTokens] = useState<Token[]>([]);
  const [selectedTokens, setSelectedTokensState] = useState<{
    tokenIn: Token | null;
    tokenOut: Token | null;
  }>({
    tokenIn: null,
    tokenOut: null
  });
  const [swapAmount, setSwapAmount] = useState<string>('');
  const [swapQuote, setSwapQuote] = useState<SwapQuote | null>(null);
  const [slippageTolerance, setSlippageTolerance] = useState<number>(0.5); // 0.5% default slippage
  const [liquidityPositions, setLiquidityPositions] = useState<LiquidityPosition[]>([]);
  const [isLoadingQuote, setIsLoadingQuote] = useState<boolean>(false);
  const [isSwapping, setIsSwapping] = useState<boolean>(false);
  const [isApprovingToken, setIsApprovingToken] = useState<boolean>(false);
  const [currentDex, setCurrentDex] = useState<{
    name: string;
    routerAddress: string;
  }>({
    name: 'Uniswap V2',
    routerAddress: dexService.DEX_ROUTERS.UNISWAP_V2.ETHEREUM
  });
  
  // Loading states
  const [loadingStates, setLoadingStates] = useState({
    loadingBalances: false,
    loadingPositions: false,
    addingLiquidity: false,
    removingLiquidity: false
  });
  
  // Update loading state helper
  const updateLoadingState = (key: keyof typeof loadingStates, value: boolean) => {
    setLoadingStates(prev => ({ ...prev, [key]: value }));
  };
  
  // Initialize DEX when wallet is connected
  useEffect(() => {
    const initializeDex = async () => {
      if (isConnected && provider) {
        try {
          // Get the network
          const network = await provider.getNetwork();
          const chainId = Number(network.chainId);
          
          // Set the appropriate DEX router based on the network
          try {
            const routerAddress = dexService.getDexRouter(chainId);
            let dexName = 'Uniswap V2';
            
            if (chainId === 137) {
              dexName = 'QuickSwap';
            } else if (chainId === 56) {
              dexName = 'PancakeSwap';
            }
            
            setCurrentDex({
              name: dexName,
              routerAddress
            });
            
            // Initialize popular tokens for this network
            if (DEFAULT_TOKENS_BY_CHAIN[chainId]) {
              setPopularTokens(DEFAULT_TOKENS_BY_CHAIN[chainId]);
              setAvailableTokens(DEFAULT_TOKENS_BY_CHAIN[chainId]);
              
              // Default select first two tokens
              if (DEFAULT_TOKENS_BY_CHAIN[chainId].length >= 2) {
                setSelectedTokensState({
                  tokenIn: DEFAULT_TOKENS_BY_CHAIN[chainId][0],
                  tokenOut: DEFAULT_TOKENS_BY_CHAIN[chainId][1]
                });
              }
            }
          } catch (error) {
            console.error('Unsupported network:', error);
            toast({
              title: 'Unsupported Network',
              description: 'Please switch to Ethereum, Polygon, or BSC mainnet.',
              variant: 'destructive',
            });
          }
        } catch (error) {
          console.error('Failed to initialize DEX:', error);
        }
      }
    };
    
    initializeDex();
  }, [isConnected, provider, toast]);
  
  // Load token balances when wallet address changes
  useEffect(() => {
    const loadTokenBalances = async () => {
      if (isConnected && provider && address && availableTokens.length > 0) {
        updateLoadingState('loadingBalances', true);
        
        try {
          const updatedTokens = await Promise.all(
            availableTokens.map(async (token) => {
              try {
                return await fetchTokenBalance(token);
              } catch (error) {
                console.error(`Failed to fetch balance for ${token.symbol}:`, error);
                return token;
              }
            })
          );
          
          setAvailableTokens(updatedTokens);
          
          // Also update selected tokens if they exist
          if (selectedTokens.tokenIn) {
            const updatedTokenIn = updatedTokens.find(
              (t) => t.address.toLowerCase() === selectedTokens.tokenIn?.address.toLowerCase()
            );
            if (updatedTokenIn) {
              setSelectedTokensState((prev) => ({
                ...prev,
                tokenIn: updatedTokenIn
              }));
            }
          }
          
          if (selectedTokens.tokenOut) {
            const updatedTokenOut = updatedTokens.find(
              (t) => t.address.toLowerCase() === selectedTokens.tokenOut?.address.toLowerCase()
            );
            if (updatedTokenOut) {
              setSelectedTokensState((prev) => ({
                ...prev,
                tokenOut: updatedTokenOut
              }));
            }
          }
        } catch (error) {
          console.error('Failed to load token balances:', error);
        } finally {
          updateLoadingState('loadingBalances', false);
        }
      }
    };
    
    loadTokenBalances();
  }, [isConnected, provider, address, availableTokens.length]);
  
  // Function to fetch a token's balance
  const fetchTokenBalance = async (token: Token): Promise<Token> => {
    if (!provider || !address) {
      return token;
    }
    
    try {
      const balanceResult = await dexService.getTokenBalance(
        token.address,
        address,
        provider
      );
      
      return {
        ...token,
        balance: balanceResult
      };
    } catch (error) {
      console.error(`Error fetching balance for ${token.symbol}:`, error);
      return token;
    }
  };
  
  // Function to set selected tokens
  const setSelectedTokens = (tokens: { tokenIn?: Token | null; tokenOut?: Token | null }) => {
    setSelectedTokensState((prev) => ({
      tokenIn: tokens.tokenIn !== undefined ? tokens.tokenIn : prev.tokenIn,
      tokenOut: tokens.tokenOut !== undefined ? tokens.tokenOut : prev.tokenOut
    }));
    
    // Clear the swap quote when tokens change
    setSwapQuote(null);
  };
  
  // Function to switch the input and output tokens
  const switchTokens = () => {
    setSelectedTokensState((prev) => ({
      tokenIn: prev.tokenOut,
      tokenOut: prev.tokenIn
    }));
    
    // Clear the swap quote when tokens change
    setSwapQuote(null);
  };
  
  // Function to get a swap quote
  const getSwapQuote = async (): Promise<SwapQuote | null> => {
    if (
      !provider ||
      !selectedTokens.tokenIn ||
      !selectedTokens.tokenOut ||
      !swapAmount ||
      parseFloat(swapAmount) <= 0
    ) {
      return null;
    }
    
    setIsLoadingQuote(true);
    
    try {
      const path = [selectedTokens.tokenIn.address, selectedTokens.tokenOut.address];
      
      const quote = await dexService.getSwapQuote(
        currentDex.routerAddress,
        swapAmount,
        path,
        provider
      );
      
      setSwapQuote(quote);
      return quote;
    } catch (error) {
      console.error('Error getting swap quote:', error);
      toast({
        title: 'Quote Error',
        description: 'Failed to get swap quote. Please try again.',
        variant: 'destructive',
      });
      return null;
    } finally {
      setIsLoadingQuote(false);
    }
  };
  
  // Function to approve a token for swapping
  const approveToken = async (token: Token): Promise<boolean> => {
    if (!signer || !token) {
      return false;
    }
    
    setIsApprovingToken(true);
    
    try {
      const tx = await dexService.approveToken(
        token.address,
        currentDex.routerAddress,
        swapAmount,
        signer
      );
      
      toast({
        title: 'Approval Successful',
        description: `Successfully approved ${token.symbol} for trading.`,
      });
      
      return true;
    } catch (error) {
      console.error('Error approving token:', error);
      toast({
        title: 'Approval Failed',
        description: 'Failed to approve token. Please try again.',
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsApprovingToken(false);
    }
  };
  
  // Function to execute a swap
  const executeSwap = async (): Promise<boolean> => {
    if (
      !signer ||
      !selectedTokens.tokenIn ||
      !selectedTokens.tokenOut ||
      !swapAmount ||
      !swapQuote
    ) {
      return false;
    }
    
    setIsSwapping(true);
    
    try {
      const path = [selectedTokens.tokenIn.address, selectedTokens.tokenOut.address];
      
      // Calculate minimum amount out based on slippage
      const amountOutFormatted = swapQuote.amountOut.formatted;
      const amountOutMinFormatted = (
        parseFloat(amountOutFormatted) *
        (1 - slippageTolerance / 100)
      ).toString();
      
      const deadline = dexService.getDeadline();
      
      await dexService.swapTokens(
        currentDex.routerAddress,
        swapAmount,
        amountOutMinFormatted,
        path,
        deadline,
        signer
      );
      
      toast({
        title: 'Swap Successful',
        description: `Successfully swapped ${swapAmount} ${selectedTokens.tokenIn.symbol} for ${amountOutFormatted} ${selectedTokens.tokenOut.symbol}.`,
      });
      
      // Clear swap amount and quote after successful swap
      setSwapAmount('');
      setSwapQuote(null);
      
      // Refresh token balances
      const updatedTokenIn = await fetchTokenBalance(selectedTokens.tokenIn);
      const updatedTokenOut = await fetchTokenBalance(selectedTokens.tokenOut);
      
      setSelectedTokensState({
        tokenIn: updatedTokenIn,
        tokenOut: updatedTokenOut
      });
      
      return true;
    } catch (error) {
      console.error('Error executing swap:', error);
      toast({
        title: 'Swap Failed',
        description: 'Failed to execute swap. Please try again.',
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsSwapping(false);
    }
  };
  
  // Function to add a custom token
  const addCustomToken = async (address: string): Promise<Token | null> => {
    if (!provider) {
      return null;
    }
    
    try {
      // Check if token already exists
      const existingToken = availableTokens.find(
        (t) => t.address.toLowerCase() === address.toLowerCase()
      );
      
      if (existingToken) {
        return existingToken;
      }
      
      // Get token details
      const details = await dexService.getTokenDetails(address, provider);
      
      const newToken: Token = {
        address,
        name: details.name,
        symbol: details.symbol,
        decimals: details.decimals
      };
      
      // Fetch balance if address is connected
      if (address) {
        const tokenWithBalance = await fetchTokenBalance(newToken);
        
        // Add to available tokens
        setAvailableTokens((prev) => [...prev, tokenWithBalance]);
        
        return tokenWithBalance;
      } else {
        // Add to available tokens without balance
        setAvailableTokens((prev) => [...prev, newToken]);
        
        return newToken;
      }
    } catch (error) {
      console.error('Error adding custom token:', error);
      toast({
        title: 'Invalid Token',
        description: 'Could not add token. Please check the address and try again.',
        variant: 'destructive',
      });
      return null;
    }
  };
  
  // Function to add liquidity
  const addLiquidity = async (
    tokenA: Token,
    tokenB: Token,
    amountA: string,
    amountB: string
  ): Promise<boolean> => {
    if (!signer) {
      return false;
    }
    
    updateLoadingState('addingLiquidity', true);
    
    try {
      const deadline = dexService.getDeadline();
      
      await dexService.addLiquidity(
        currentDex.routerAddress,
        tokenA.address,
        tokenB.address,
        amountA,
        amountB,
        slippageTolerance,
        deadline,
        signer
      );
      
      toast({
        title: 'Liquidity Added',
        description: `Successfully added ${amountA} ${tokenA.symbol} and ${amountB} ${tokenB.symbol} to the liquidity pool.`,
      });
      
      // Refresh token balances
      const updatedTokenA = await fetchTokenBalance(tokenA);
      const updatedTokenB = await fetchTokenBalance(tokenB);
      
      setAvailableTokens((prev) =>
        prev.map((t) => {
          if (t.address.toLowerCase() === tokenA.address.toLowerCase()) {
            return updatedTokenA;
          }
          if (t.address.toLowerCase() === tokenB.address.toLowerCase()) {
            return updatedTokenB;
          }
          return t;
        })
      );
      
      return true;
    } catch (error) {
      console.error('Error adding liquidity:', error);
      toast({
        title: 'Failed to Add Liquidity',
        description: 'Could not add liquidity. Please try again.',
        variant: 'destructive',
      });
      return false;
    } finally {
      updateLoadingState('addingLiquidity', false);
    }
  };
  
  // Function to remove liquidity
  const removeLiquidity = async (
    position: LiquidityPosition,
    percentage: number
  ): Promise<boolean> => {
    if (!signer) {
      return false;
    }
    
    updateLoadingState('removingLiquidity', true);
    
    try {
      const deadline = dexService.getDeadline();
      const liquidityToRemove = (
        parseFloat(position.liquidity) *
        (percentage / 100)
      ).toString();
      
      await dexService.removeLiquidity(
        currentDex.routerAddress,
        position.tokenA.address,
        position.tokenB.address,
        liquidityToRemove,
        slippageTolerance,
        deadline,
        signer
      );
      
      toast({
        title: 'Liquidity Removed',
        description: `Successfully removed ${percentage}% of your liquidity from the ${position.tokenA.symbol}/${position.tokenB.symbol} pool.`,
      });
      
      // Refresh token balances
      const updatedTokenA = await fetchTokenBalance(position.tokenA);
      const updatedTokenB = await fetchTokenBalance(position.tokenB);
      
      setAvailableTokens((prev) =>
        prev.map((t) => {
          if (t.address.toLowerCase() === position.tokenA.address.toLowerCase()) {
            return updatedTokenA;
          }
          if (t.address.toLowerCase() === position.tokenB.address.toLowerCase()) {
            return updatedTokenB;
          }
          return t;
        })
      );
      
      return true;
    } catch (error) {
      console.error('Error removing liquidity:', error);
      toast({
        title: 'Failed to Remove Liquidity',
        description: 'Could not remove liquidity. Please try again.',
        variant: 'destructive',
      });
      return false;
    } finally {
      updateLoadingState('removingLiquidity', false);
    }
  };
  
  // Provide the DEX context to the children
  return (
    <DexContext.Provider
      value={{
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
        // Functions
        setSelectedTokens,
        setSwapAmount,
        setSlippageTolerance,
        fetchTokenBalance,
        getSwapQuote,
        executeSwap,
        approveToken,
        switchTokens,
        addCustomToken,
        // Liquidity related functions
        addLiquidity,
        removeLiquidity,
        // Loading states
        loadingStates
      }}
    >
      {children}
    </DexContext.Provider>
  );
};
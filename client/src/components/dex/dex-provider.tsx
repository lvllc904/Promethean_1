import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useToast } from '@/hooks/use-toast';
import * as dexService from '@/services/dex';

// Define types for the DEX context
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

// Default token lists by chain ID
const DEFAULT_TOKENS_BY_CHAIN: Record<number, Token[]> = {
  // Ethereum Mainnet
  1: [
    {
      address: dexService.TOKENS.ETHEREUM.WETH,
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    },
    {
      address: dexService.TOKENS.ETHEREUM.USDC,
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png'
    },
    {
      address: dexService.TOKENS.ETHEREUM.DAI,
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png'
    },
    {
      address: dexService.TOKENS.ETHEREUM.USDT,
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 6,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png'
    },
    // DAC token - custom project token
    {
      address: '0x123456789abcdef123456789abcdef123456789a', // Placeholder address
      name: 'DAC Token',
      symbol: 'DAC',
      decimals: 18,
      logoUrl: '/images/dac-token-logo.png'
    }
  ],
  // Polygon Mainnet
  137: [
    {
      address: dexService.TOKENS.POLYGON.WMATIC,
      name: 'Wrapped Matic',
      symbol: 'WMATIC',
      decimals: 18,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png'
    },
    {
      address: dexService.TOKENS.POLYGON.USDC,
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png'
    },
    {
      address: dexService.TOKENS.POLYGON.DAI,
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063/logo.png'
    },
    {
      address: dexService.TOKENS.POLYGON.USDT,
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 6,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/assets/0xc2132D05D31c914a87C6611C10748AEb04B58e8F/logo.png'
    },
    // DAC token - project token on Polygon
    {
      address: '0x123456789abcdef123456789abcdef123456789a', // Placeholder address
      name: 'DAC Token',
      symbol: 'DAC',
      decimals: 18,
      logoUrl: '/images/dac-token-logo.png'
    }
  ],
  // BSC Mainnet
  56: [
    {
      address: dexService.TOKENS.BSC.WBNB,
      name: 'Wrapped BNB',
      symbol: 'WBNB',
      decimals: 18,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/WBNB/logo.png'
    },
    {
      address: dexService.TOKENS.BSC.BUSD,
      name: 'Binance USD',
      symbol: 'BUSD',
      decimals: 18,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/BUSD/logo.png'
    },
    {
      address: dexService.TOKENS.BSC.USDC,
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 18,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/USDC/logo.png'
    },
    {
      address: dexService.TOKENS.BSC.USDT,
      name: 'Tether USD',
      symbol: 'USDT',
      decimals: 18,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/USDT/logo.png'
    },
    // DAC token - project token on BSC
    {
      address: '0x123456789abcdef123456789abcdef123456789a', // Placeholder address
      name: 'DAC Token',
      symbol: 'DAC',
      decimals: 18,
      logoUrl: '/images/dac-token-logo.png'
    }
  ],
  // Default for local development/testing
  1337: [
    {
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    },
    {
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      logoUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png'
    },
    {
      address: '0x123456789abcdef123456789abcdef123456789a',
      name: 'DAC Token',
      symbol: 'DAC',
      decimals: 18,
      logoUrl: '/images/dac-token-logo.png'
    }
  ]
};

// Define the DEX context type
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

// Create the DEX context
const DexContext = createContext<DexContextType | null>(null);

// Create the hook for using the DEX context
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
            } else {
              // Fallback to Ethereum if the chain is not supported
              setPopularTokens(DEFAULT_TOKENS_BY_CHAIN[1]);
              setAvailableTokens(DEFAULT_TOKENS_BY_CHAIN[1]);
              
              if (DEFAULT_TOKENS_BY_CHAIN[1].length >= 2) {
                setSelectedTokensState({
                  tokenIn: DEFAULT_TOKENS_BY_CHAIN[1][0],
                  tokenOut: DEFAULT_TOKENS_BY_CHAIN[1][1]
                });
              }
              
              toast({
                title: 'Unsupported Network',
                description: `The current network (${chainId}) is not fully supported. Defaulting to Ethereum tokens.`,
                variant: 'destructive'
              });
            }
          } catch (error) {
            console.error('Error initializing DEX:', error);
            toast({
              title: 'DEX Initialization Error',
              description: 'Failed to initialize the DEX. Please try again or switch networks.',
              variant: 'destructive'
            });
          }
        } catch (error) {
          console.error('Error getting network:', error);
        }
      }
    };
    
    initializeDex();
  }, [isConnected, provider, toast]);
  
  // Update token balances when wallet address changes or tokens are selected
  useEffect(() => {
    const updateBalances = async () => {
      if (!isConnected || !provider || !address) return;
      
      updateLoadingState('loadingBalances', true);
      
      try {
        // Create a copy of tokens to update
        const updatedTokens = [...availableTokens];
        
        // Fetch balances for all tokens
        for (let i = 0; i < updatedTokens.length; i++) {
          try {
            const balance = await dexService.getTokenBalance(
              updatedTokens[i].address,
              address,
              provider
            );
            
            updatedTokens[i] = {
              ...updatedTokens[i],
              balance
            };
          } catch (error) {
            console.error(`Error fetching balance for ${updatedTokens[i].symbol}:`, error);
          }
        }
        
        setAvailableTokens(updatedTokens);
        
        // Also update selected tokens if they exist
        if (selectedTokens.tokenIn) {
          const updatedTokenIn = updatedTokens.find(
            token => token.address === selectedTokens.tokenIn?.address
          );
          
          if (updatedTokenIn) {
            setSelectedTokensState(prev => ({
              ...prev,
              tokenIn: updatedTokenIn
            }));
          }
        }
        
        if (selectedTokens.tokenOut) {
          const updatedTokenOut = updatedTokens.find(
            token => token.address === selectedTokens.tokenOut?.address
          );
          
          if (updatedTokenOut) {
            setSelectedTokensState(prev => ({
              ...prev,
              tokenOut: updatedTokenOut
            }));
          }
        }
      } catch (error) {
        console.error('Error updating token balances:', error);
        toast({
          title: 'Balance Update Error',
          description: 'Failed to update token balances.',
          variant: 'destructive'
        });
      } finally {
        updateLoadingState('loadingBalances', false);
      }
    };
    
    updateBalances();
  }, [isConnected, provider, address, toast]);
  
  // Function to fetch balance for a single token
  const fetchTokenBalance = async (token: Token) => {
    if (!isConnected || !provider || !address) {
      toast({
        title: 'Wallet Not Connected',
        description: 'Please connect your wallet to fetch token balances.',
        variant: 'destructive'
      });
      return;
    }
    
    try {
      const balance = await dexService.getTokenBalance(
        token.address,
        address,
        provider
      );
      
      // Update the token in available tokens list
      setAvailableTokens(prev => 
        prev.map(t => 
          t.address === token.address
            ? { ...t, balance }
            : t
        )
      );
      
      // Update selected tokens if needed
      if (selectedTokens.tokenIn?.address === token.address) {
        setSelectedTokensState(prev => ({
          ...prev,
          tokenIn: { ...prev.tokenIn!, balance }
        }));
      }
      
      if (selectedTokens.tokenOut?.address === token.address) {
        setSelectedTokensState(prev => ({
          ...prev,
          tokenOut: { ...prev.tokenOut!, balance }
        }));
      }
    } catch (error) {
      console.error(`Error fetching balance for ${token.symbol}:`, error);
      toast({
        title: 'Balance Fetch Error',
        description: `Failed to fetch ${token.symbol} balance.`,
        variant: 'destructive'
      });
    }
  };
  
  // Function to add a custom token
  const addCustomToken = (token: Token) => {
    // Check if token already exists
    const exists = availableTokens.some(t => t.address.toLowerCase() === token.address.toLowerCase());
    
    if (exists) {
      toast({
        title: 'Token Already Added',
        description: `${token.symbol} is already in your token list.`,
      });
      return;
    }
    
    // Add the token
    setAvailableTokens(prev => [...prev, token]);
    
    // Fetch its balance
    fetchTokenBalance(token);
    
    toast({
      title: 'Token Added',
      description: `${token.symbol} has been added to your token list.`,
    });
  };
  
  // Function to set selected tokens
  const setSelectedTokens = ({ tokenIn, tokenOut }: { tokenIn?: Token | null; tokenOut?: Token | null }) => {
    setSelectedTokensState(prev => ({
      tokenIn: tokenIn !== undefined ? tokenIn : prev.tokenIn,
      tokenOut: tokenOut !== undefined ? tokenOut : prev.tokenOut
    }));
    
    // Reset swap quote when tokens change
    setSwapQuote(null);
  };
  
  // Function to switch input and output tokens
  const switchTokens = () => {
    setSelectedTokensState(prev => ({
      tokenIn: prev.tokenOut,
      tokenOut: prev.tokenIn
    }));
    
    // Reset swap quote
    setSwapQuote(null);
  };
  
  // Function to get swap quote
  const getSwapQuote = async () => {
    if (
      !isConnected || 
      !provider || 
      !selectedTokens.tokenIn || 
      !selectedTokens.tokenOut || 
      !swapAmount || 
      parseFloat(swapAmount) <= 0
    ) {
      return;
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
    } catch (error) {
      console.error('Error getting swap quote:', error);
      toast({
        title: 'Quote Error',
        description: 'Failed to get swap quote. Please check your inputs and try again.',
        variant: 'destructive'
      });
      setSwapQuote(null);
    } finally {
      setIsLoadingQuote(false);
    }
  };
  
  // Function to approve token spending
  const approveToken = async (token: Token) => {
    if (!isConnected || !signer || !address) {
      toast({
        title: 'Wallet Not Connected',
        description: 'Please connect your wallet to approve tokens.',
        variant: 'destructive'
      });
      return;
    }
    
    setIsApprovingToken(true);
    
    try {
      // Use the maxUint256 value to approve "unlimited" spending
      // This is a common pattern but has security implications
      const approvalAmount = ethers.MaxUint256.toString();
      
      const tx = await dexService.approveToken(
        token.address,
        currentDex.routerAddress,
        approvalAmount,
        signer
      );
      
      toast({
        title: 'Approval Successful',
        description: `${token.symbol} approved for trading.`,
      });
      
      // Refresh the balance after approval
      await fetchTokenBalance(token);
    } catch (error) {
      console.error('Error approving token:', error);
      toast({
        title: 'Approval Failed',
        description: 'Failed to approve token for trading. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsApprovingToken(false);
    }
  };
  
  // Function to execute swap
  const executeSwap = async () => {
    if (
      !isConnected || 
      !signer || 
      !selectedTokens.tokenIn || 
      !selectedTokens.tokenOut || 
      !swapAmount || 
      parseFloat(swapAmount) <= 0 || 
      !swapQuote
    ) {
      toast({
        title: 'Invalid Swap Parameters',
        description: 'Please check your swap inputs and try again.',
        variant: 'destructive'
      });
      return;
    }
    
    setIsSwapping(true);
    
    try {
      // Calculate minimum amount out based on slippage tolerance
      const amountOutFormatted = swapQuote.amountOut.formatted;
      const minAmountOut = (
        parseFloat(amountOutFormatted) * (1 - slippageTolerance / 100)
      ).toString();
      
      // Calculate deadline (20 minutes from now by default)
      const deadline = dexService.getDeadline();
      
      // Execute the swap
      await dexService.swapTokens(
        currentDex.routerAddress,
        swapAmount,
        minAmountOut,
        swapQuote.path,
        deadline,
        signer
      );
      
      toast({
        title: 'Swap Successful',
        description: `Successfully swapped ${swapAmount} ${selectedTokens.tokenIn.symbol} for ${amountOutFormatted} ${selectedTokens.tokenOut.symbol}.`,
      });
      
      // Reset swap amount and quote
      setSwapAmount('');
      setSwapQuote(null);
      
      // Refresh balances
      await Promise.all([
        fetchTokenBalance(selectedTokens.tokenIn),
        fetchTokenBalance(selectedTokens.tokenOut)
      ]);
    } catch (error) {
      console.error('Error executing swap:', error);
      toast({
        title: 'Swap Failed',
        description: 'Failed to execute the swap. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSwapping(false);
    }
  };
  
  // Function to add liquidity
  const addLiquidity = async (
    tokenA: Token,
    tokenB: Token,
    amountA: string,
    amountB: string,
  ) => {
    if (!isConnected || !signer || !address) {
      toast({
        title: 'Wallet Not Connected',
        description: 'Please connect your wallet to add liquidity.',
        variant: 'destructive'
      });
      return;
    }
    
    updateLoadingState('addingLiquidity', true);
    
    try {
      // Calculate deadline (20 minutes from now by default)
      const deadline = dexService.getDeadline();
      
      // Add liquidity
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
        description: `Successfully added liquidity for ${tokenA.symbol}/${tokenB.symbol} pair.`,
      });
      
      // Refresh balances
      await Promise.all([
        fetchTokenBalance(tokenA),
        fetchTokenBalance(tokenB)
      ]);
      
      // TODO: Refresh liquidity positions
    } catch (error) {
      console.error('Error adding liquidity:', error);
      toast({
        title: 'Failed to Add Liquidity',
        description: 'An error occurred while adding liquidity. Please try again.',
        variant: 'destructive'
      });
    } finally {
      updateLoadingState('addingLiquidity', false);
    }
  };
  
  // Function to remove liquidity
  const removeLiquidity = async (
    position: LiquidityPosition,
    percentage: number
  ) => {
    if (!isConnected || !signer || !address) {
      toast({
        title: 'Wallet Not Connected',
        description: 'Please connect your wallet to remove liquidity.',
        variant: 'destructive'
      });
      return;
    }
    
    updateLoadingState('removingLiquidity', true);
    
    try {
      // Calculate liquidityAmount based on percentage
      const liquidityAmount = (
        parseFloat(position.liquidity) * (percentage / 100)
      ).toString();
      
      // Calculate deadline (20 minutes from now by default)
      const deadline = dexService.getDeadline();
      
      // Remove liquidity
      await dexService.removeLiquidity(
        currentDex.routerAddress,
        position.tokenA.address,
        position.tokenB.address,
        liquidityAmount,
        slippageTolerance,
        deadline,
        signer
      );
      
      toast({
        title: 'Liquidity Removed',
        description: `Successfully removed ${percentage}% liquidity from ${position.tokenA.symbol}/${position.tokenB.symbol} pair.`,
      });
      
      // Refresh balances
      await Promise.all([
        fetchTokenBalance(position.tokenA),
        fetchTokenBalance(position.tokenB)
      ]);
      
      // TODO: Refresh liquidity positions
    } catch (error) {
      console.error('Error removing liquidity:', error);
      toast({
        title: 'Failed to Remove Liquidity',
        description: 'An error occurred while removing liquidity. Please try again.',
        variant: 'destructive'
      });
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
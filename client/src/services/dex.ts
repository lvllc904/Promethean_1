import { ethers } from 'ethers';

// Standard ERC20 ABI for token interactions
const ERC20_ABI = [
  // Read-only functions
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function balanceOf(address owner) view returns (uint256)',
  'function allowance(address owner, address spender) view returns (uint256)',
  // Write functions
  'function approve(address spender, uint256 value) returns (bool)',
  'function transfer(address to, uint256 value) returns (bool)',
  'function transferFrom(address from, address to, uint256 value) returns (bool)',
  // Events
  'event Transfer(address indexed from, address indexed to, uint256 value)',
  'event Approval(address indexed owner, address indexed spender, uint256 value)'
];

// Uniswap V2 Router ABI (simplified for common operations)
const UNISWAP_V2_ROUTER_ABI = [
  'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)',
  'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
  'function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)',
  'function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
  'function addLiquidity(address tokenA, address tokenB, uint amountADesired, uint amountBDesired, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB, uint liquidity)',
  'function removeLiquidity(address tokenA, address tokenB, uint liquidity, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB)'
];

// Common DEX routers
export const DEX_ROUTERS = {
  UNISWAP_V2: {
    ETHEREUM: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    POLYGON: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff', // QuickSwap
    BSC: '0x10ED43C718714eb63d5aA57B78B54704E256024E', // PancakeSwap
  },
  SUSHISWAP: {
    ETHEREUM: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
    POLYGON: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    BSC: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  }
};

// Common token addresses
export const TOKENS = {
  ETHEREUM: {
    WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  },
  POLYGON: {
    WMATIC: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    USDC: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    DAI: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    USDT: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  },
  BSC: {
    WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    USDC: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    USDT: '0x55d398326f99059fF775485246999027B3197955',
  },
};

// Initialize token contracts
export function getTokenContract(tokenAddress: string, provider: ethers.Provider | ethers.Signer) {
  return new ethers.Contract(tokenAddress, ERC20_ABI, provider);
}

// Initialize router contract
export function getRouterContract(routerAddress: string, provider: ethers.Provider | ethers.Signer) {
  return new ethers.Contract(routerAddress, UNISWAP_V2_ROUTER_ABI, provider);
}

// Get token details
export async function getTokenDetails(tokenAddress: string, provider: ethers.Provider) {
  const tokenContract = getTokenContract(tokenAddress, provider);
  
  try {
    const [name, symbol, decimals] = await Promise.all([
      tokenContract.name(),
      tokenContract.symbol(),
      tokenContract.decimals()
    ]);
    
    return { name, symbol, decimals };
  } catch (error) {
    console.error('Error fetching token details:', error);
    throw error;
  }
}

// Get token balance
export async function getTokenBalance(tokenAddress: string, address: string, provider: ethers.Provider) {
  const tokenContract = getTokenContract(tokenAddress, provider);
  
  try {
    const balance = await tokenContract.balanceOf(address);
    const decimals = await tokenContract.decimals();
    
    return {
      raw: balance,
      formatted: ethers.formatUnits(balance, decimals)
    };
  } catch (error) {
    console.error('Error fetching token balance:', error);
    throw error;
  }
}

// Approve token spending
export async function approveToken(
  tokenAddress: string,
  spenderAddress: string,
  amount: string,
  signer: ethers.Signer
) {
  const tokenContract = getTokenContract(tokenAddress, signer);
  const tokenDecimals = await tokenContract.decimals();
  const amountInWei = ethers.parseUnits(amount, tokenDecimals);
  
  try {
    const tx = await tokenContract.approve(spenderAddress, amountInWei);
    return await tx.wait();
  } catch (error) {
    console.error('Error approving token spending:', error);
    throw error;
  }
}

// Check token allowance
export async function checkAllowance(
  tokenAddress: string,
  ownerAddress: string,
  spenderAddress: string,
  provider: ethers.Provider
) {
  const tokenContract = getTokenContract(tokenAddress, provider);
  
  try {
    const allowance = await tokenContract.allowance(ownerAddress, spenderAddress);
    const decimals = await tokenContract.decimals();
    
    return {
      raw: allowance,
      formatted: ethers.formatUnits(allowance, decimals)
    };
  } catch (error) {
    console.error('Error checking allowance:', error);
    throw error;
  }
}

// Get swap price quote
export async function getSwapQuote(
  routerAddress: string,
  amountIn: string,
  path: string[], // Array of token addresses representing the swap path
  provider: ethers.Provider
) {
  const routerContract = getRouterContract(routerAddress, provider);
  const tokenInContract = getTokenContract(path[0], provider);
  const tokenOutContract = getTokenContract(path[path.length - 1], provider);
  
  try {
    const tokenInDecimals = await tokenInContract.decimals();
    const tokenOutDecimals = await tokenOutContract.decimals();
    const amountInWei = ethers.parseUnits(amountIn, tokenInDecimals);
    
    const amounts = await routerContract.getAmountsOut(amountInWei, path);
    const amountOut = amounts[amounts.length - 1];
    
    return {
      path,
      amountIn: {
        raw: amountInWei,
        formatted: amountIn
      },
      amountOut: {
        raw: amountOut,
        formatted: ethers.formatUnits(amountOut, tokenOutDecimals)
      }
    };
  } catch (error) {
    console.error('Error getting swap quote:', error);
    throw error;
  }
}

// Perform token swap
export async function swapTokens(
  routerAddress: string,
  amountIn: string,
  amountOutMin: string,
  path: string[],
  deadline: number,
  signer: ethers.Signer
) {
  const routerContract = getRouterContract(routerAddress, signer);
  const tokenInContract = getTokenContract(path[0], signer);
  const tokenOutContract = getTokenContract(path[path.length - 1], signer);
  
  try {
    const tokenInDecimals = await tokenInContract.decimals();
    const tokenOutDecimals = await tokenOutContract.decimals();
    const amountInWei = ethers.parseUnits(amountIn, tokenInDecimals);
    const amountOutMinWei = ethers.parseUnits(amountOutMin, tokenOutDecimals);
    
    // Check if input token is native ETH/MATIC/BNB
    const nativeWrappedTokens = [
      TOKENS.ETHEREUM.WETH.toLowerCase(),
      TOKENS.POLYGON.WMATIC.toLowerCase(),
      TOKENS.BSC.WBNB.toLowerCase()
    ];
    
    let tx;
    const to = await signer.getAddress();
    
    if (path[0].toLowerCase() === nativeWrappedTokens[0]) {
      // Swap native token for other token
      tx = await routerContract.swapExactETHForTokens(
        amountOutMinWei,
        path,
        to,
        deadline,
        { value: amountInWei }
      );
    } else if (path[path.length - 1].toLowerCase() === nativeWrappedTokens[0]) {
      // Swap token for native token
      tx = await routerContract.swapExactTokensForETH(
        amountInWei,
        amountOutMinWei,
        path,
        to,
        deadline
      );
    } else {
      // Swap between ERC20 tokens
      tx = await routerContract.swapExactTokensForTokens(
        amountInWei,
        amountOutMinWei,
        path,
        to,
        deadline
      );
    }
    
    return await tx.wait();
  } catch (error) {
    console.error('Error performing token swap:', error);
    throw error;
  }
}

// Add liquidity to a token pair
export async function addLiquidity(
  routerAddress: string,
  tokenA: string,
  tokenB: string,
  amountA: string,
  amountB: string,
  slippagePercentage: number, // e.g., 0.5 for 0.5%
  deadline: number,
  signer: ethers.Signer
) {
  const routerContract = getRouterContract(routerAddress, signer);
  const tokenAContract = getTokenContract(tokenA, signer);
  const tokenBContract = getTokenContract(tokenB, signer);
  
  try {
    const tokenADecimals = await tokenAContract.decimals();
    const tokenBDecimals = await tokenBContract.decimals();
    
    const amountADesired = ethers.parseUnits(amountA, tokenADecimals);
    const amountBDesired = ethers.parseUnits(amountB, tokenBDecimals);
    
    // Calculate minimum amounts based on slippage
    const slippageFactor = 1 - slippagePercentage / 100;
    const amountAMin = amountADesired * BigInt(Math.floor(slippageFactor * 1000)) / BigInt(1000);
    const amountBMin = amountBDesired * BigInt(Math.floor(slippageFactor * 1000)) / BigInt(1000);
    
    const to = await signer.getAddress();
    
    const tx = await routerContract.addLiquidity(
      tokenA,
      tokenB,
      amountADesired,
      amountBDesired,
      amountAMin,
      amountBMin,
      to,
      deadline
    );
    
    return await tx.wait();
  } catch (error) {
    console.error('Error adding liquidity:', error);
    throw error;
  }
}

// Remove liquidity from a token pair
export async function removeLiquidity(
  routerAddress: string,
  tokenA: string,
  tokenB: string,
  liquidityAmount: string,
  slippagePercentage: number,
  deadline: number,
  signer: ethers.Signer
) {
  const routerContract = getRouterContract(routerAddress, signer);
  const to = await signer.getAddress();
  
  try {
    // For simplicity, we're not calculating the exact LP token decimals
    // In a real implementation, you would get the LP token contract and its decimals
    const liquidityAmountWei = ethers.parseUnits(liquidityAmount, 18); // Most LP tokens have 18 decimals
    
    // Set minimum amounts to 1 for simplicity
    // In a real implementation, you would use getReserves to calculate appropriate minimums
    const amountAMin = BigInt(1);
    const amountBMin = BigInt(1);
    
    const tx = await routerContract.removeLiquidity(
      tokenA,
      tokenB,
      liquidityAmountWei,
      amountAMin,
      amountBMin,
      to,
      deadline
    );
    
    return await tx.wait();
  } catch (error) {
    console.error('Error removing liquidity:', error);
    throw error;
  }
}

// Get swap deadline timestamp (e.g., 20 minutes from now)
export function getDeadline(minutesFromNow: number = 20): number {
  return Math.floor(Date.now() / 1000) + minutesFromNow * 60;
}

// Get the most common DEX based on network ID
export function getDexRouter(chainId: number): string {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return DEX_ROUTERS.UNISWAP_V2.ETHEREUM;
    case 137: // Polygon Mainnet
      return DEX_ROUTERS.UNISWAP_V2.POLYGON; // QuickSwap
    case 56: // Binance Smart Chain
      return DEX_ROUTERS.UNISWAP_V2.BSC; // PancakeSwap
    default:
      throw new Error(`Unsupported chain ID: ${chainId}`);
  }
}

// Get native wrapped token address for a network
export function getNativeWrappedToken(chainId: number): string {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return TOKENS.ETHEREUM.WETH;
    case 137: // Polygon Mainnet
      return TOKENS.POLYGON.WMATIC;
    case 56: // Binance Smart Chain
      return TOKENS.BSC.WBNB;
    default:
      throw new Error(`Unsupported chain ID: ${chainId}`);
  }
}

// Get stable token address for a network
export function getStableToken(chainId: number): string {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return TOKENS.ETHEREUM.USDC;
    case 137: // Polygon Mainnet
      return TOKENS.POLYGON.USDC;
    case 56: // Binance Smart Chain
      return TOKENS.BSC.BUSD;
    default:
      throw new Error(`Unsupported chain ID: ${chainId}`);
  }
}
import { ethers } from 'ethers';

// Define interface for contract addresses
interface ContractAddresses {
  DAOGovernance: string;
  PropertyEscrow: string;
  MembershipNFT: string;
  DACToken: string;
  PromToken: string;
  CapTable: string;
}

// Use environment variables for contract addresses with fallbacks
const CONTRACT_ADDRESSES: ContractAddresses = {
  DAOGovernance: process.env.DAO_GOVERNANCE_ADDRESS || '0x1234567890123456789012345678901234567890',
  PropertyEscrow: process.env.PROPERTY_ESCROW_ADDRESS || '0x2345678901234567890123456789012345678901',
  MembershipNFT: process.env.MEMBERSHIP_NFT_ADDRESS || '0x3456789012345678901234567890123456789012',
  DACToken: process.env.DAC_TOKEN_ADDRESS || '0x4567890123456789012345678901234567890123',
  PromToken: process.env.PROM_TOKEN_ADDRESS || '0x5678901234567890123456789012345678901234',
  CapTable: process.env.CAP_TABLE_ADDRESS || '0x6789012345678901234567890123456789012345',
};

// ABI imports (in a real app, these would be separate JSON files)
import DAOGovernanceABI from '../../client/src/contracts/abis/DAOGovernance.json';
import PropertyEscrowABI from '../../client/src/contracts/abis/PropertyEscrow.json';
import MembershipNFTABI from '../../client/src/contracts/abis/MembershipNFT.json';
import PromTokenABI from '../../client/src/contracts/abis/PromToken.json';
import CapTableABI from '../../client/src/contracts/abis/CapTable.json';

// RPC URL from environment variable with fallback
const RPC_URL = process.env.RPC_URL || 'https://polygon-mumbai.g.alchemy.com/v2/your-api-key';

let provider: ethers.JsonRpcProvider | null = null;

// Get or initialize the provider
export function getWeb3Provider(): ethers.JsonRpcProvider {
  if (!provider) {
    provider = new ethers.JsonRpcProvider(RPC_URL);
  }
  return provider;
}

// Helper to get contract instances
export function getContractInstances() {
  const provider = getWeb3Provider();
  
  return {
    daoGovernance: new ethers.Contract(
      CONTRACT_ADDRESSES.DAOGovernance,
      DAOGovernanceABI,
      provider
    ),
    propertyEscrow: new ethers.Contract(
      CONTRACT_ADDRESSES.PropertyEscrow,
      PropertyEscrowABI,
      provider
    ),
    membershipNFT: new ethers.Contract(
      CONTRACT_ADDRESSES.MembershipNFT,
      MembershipNFTABI,
      provider
    ),
    promToken: new ethers.Contract(
      CONTRACT_ADDRESSES.PromToken,
      PromTokenABI,
      provider
    ),
    capTable: new ethers.Contract(
      CONTRACT_ADDRESSES.CapTable,
      CapTableABI,
      provider
    )
  };
}

// Helper to convert from wei to ether
export function fromWei(wei: bigint): string {
  return ethers.formatEther(wei);
}

// Helper to convert from ether to wei
export function toWei(ether: string): bigint {
  return ethers.parseEther(ether);
}

// DAO Governance functions
export async function createProposal(
  title: string,
  description: string,
  executionPayload: string
): Promise<ethers.TransactionResponse> {
  try {
    const { daoGovernance } = getContractInstances();
    
    // Create a wallet using the private key for signing transactions
    // In a real app, this would use a secure wallet or interact with a user's wallet
    const privateKey = process.env.SERVER_WALLET_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error("Server wallet private key not found");
    }
    
    const wallet = new ethers.Wallet(privateKey, getWeb3Provider());
    const connectedContract = daoGovernance.connect(wallet);
    
    return await connectedContract.createProposal(title, description, executionPayload);
  } catch (error) {
    console.error("Failed to create proposal:", error);
    throw error;
  }
}

export async function castVote(
  proposalId: number,
  voteType: number // 0 = Against, 1 = For, 2 = Abstain
): Promise<ethers.TransactionResponse> {
  try {
    const { daoGovernance } = getContractInstances();
    
    // Create a wallet using the private key for signing transactions
    const privateKey = process.env.SERVER_WALLET_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error("Server wallet private key not found");
    }
    
    const wallet = new ethers.Wallet(privateKey, getWeb3Provider());
    const connectedContract = daoGovernance.connect(wallet);
    
    return await connectedContract.castVote(proposalId, voteType);
  } catch (error) {
    console.error("Failed to cast vote:", error);
    throw error;
  }
}

export async function executeProposal(
  proposalId: number
): Promise<ethers.TransactionResponse> {
  try {
    const { daoGovernance } = getContractInstances();
    
    // Create a wallet using the private key for signing transactions
    const privateKey = process.env.SERVER_WALLET_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error("Server wallet private key not found");
    }
    
    const wallet = new ethers.Wallet(privateKey, getWeb3Provider());
    const connectedContract = daoGovernance.connect(wallet);
    
    return await connectedContract.executeProposal(proposalId);
  } catch (error) {
    console.error("Failed to execute proposal:", error);
    throw error;
  }
}

// Property Escrow functions
export async function listProperty(
  propertyId: string,
  price: string,
  listingType: string
): Promise<ethers.TransactionResponse> {
  try {
    const { propertyEscrow } = getContractInstances();
    
    // Create a wallet using the private key for signing transactions
    const privateKey = process.env.SERVER_WALLET_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error("Server wallet private key not found");
    }
    
    const wallet = new ethers.Wallet(privateKey, getWeb3Provider());
    const connectedContract = propertyEscrow.connect(wallet);
    
    return await connectedContract.listProperty(
      propertyId,
      toWei(price),
      listingType === 'sale' ? 0 : 1
    );
  } catch (error) {
    console.error("Failed to list property:", error);
    throw error;
  }
}

// Membership NFT functions
export async function purchaseMembership(
  membershipTier: string,
  price: string,
  userAddress: string
): Promise<ethers.TransactionResponse> {
  try {
    const { membershipNFT } = getContractInstances();
    
    // Create a wallet using the private key for signing transactions
    const privateKey = process.env.SERVER_WALLET_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error("Server wallet private key not found");
    }
    
    const wallet = new ethers.Wallet(privateKey, getWeb3Provider());
    const connectedContract = membershipNFT.connect(wallet);
    
    const tierIndex = ['free', 'basic', 'premium', 'enterprise'].indexOf(membershipTier.toLowerCase());
    if (tierIndex === -1) throw new Error('Invalid membership tier');
    
    // In a real implementation, this would handle the value transfer differently
    return await connectedContract.mintMembershipNFT(userAddress, tierIndex, {
      value: toWei(price)
    });
  } catch (error) {
    console.error("Failed to purchase membership:", error);
    throw error;
  }
}

export async function getMembershipTier(address: string): Promise<number> {
  try {
    const { membershipNFT } = getContractInstances();
    
    return await membershipNFT.getMembershipTier(address);
  } catch (error) {
    console.error("Failed to get membership tier:", error);
    throw error;
  }
}

// Check if wallet has enough DAC tokens for voting
export async function checkVotingPower(address: string): Promise<string> {
  try {
    const provider = getWeb3Provider();
    
    // In a real implementation, this would check the DAC token balance
    const tokenContract = new ethers.Contract(
      CONTRACT_ADDRESSES.DACToken,
      ['function balanceOf(address owner) view returns (uint256)'],
      provider
    );
    
    const balance = await tokenContract.balanceOf(address);
    return fromWei(balance);
  } catch (error) {
    console.error("Failed to check voting power:", error);
    throw error;
  }
}

// Prom Token functions
export async function getPromTokenBalance(address: string): Promise<string> {
  try {
    const { promToken } = getContractInstances();
    const balance = await promToken.balanceOf(address);
    return fromWei(balance);
  } catch (error) {
    console.error("Failed to get Prom token balance:", error);
    throw error;
  }
}

export async function getPromTokenTotalSupply(): Promise<string> {
  try {
    const { promToken } = getContractInstances();
    const totalSupply = await promToken.totalSupply();
    return fromWei(totalSupply);
  } catch (error) {
    console.error("Failed to get Prom token total supply:", error);
    throw error;
  }
}

export async function getPromTokenCurrentSupply(): Promise<string> {
  try {
    const { promToken } = getContractInstances();
    const currentSupply = await promToken.currentSupply();
    return fromWei(currentSupply);
  } catch (error) {
    console.error("Failed to get Prom token current supply:", error);
    throw error;
  }
}

// Cap Table functions
export async function distributeInitialProm(userAddress: string): Promise<ethers.TransactionResponse> {
  try {
    const { capTable } = getContractInstances();
    
    const privateKey = process.env.SERVER_WALLET_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error("Server wallet private key not found");
    }
    
    const wallet = new ethers.Wallet(privateKey, getWeb3Provider());
    const connectedContract = capTable.connect(wallet);
    
    return await connectedContract.distributeInitialProm(userAddress);
  } catch (error) {
    console.error("Failed to distribute initial Prom token:", error);
    throw error;
  }
}

export async function distributeWorkerProm(
  workerAddress: string,
  amount: string,
  withVesting: boolean,
  vestingDuration: number
): Promise<ethers.TransactionResponse> {
  try {
    const { capTable } = getContractInstances();
    
    const privateKey = process.env.SERVER_WALLET_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error("Server wallet private key not found");
    }
    
    const wallet = new ethers.Wallet(privateKey, getWeb3Provider());
    const connectedContract = capTable.connect(wallet);
    
    return await connectedContract.distributeWorkerProm(
      workerAddress,
      toWei(amount),
      withVesting,
      vestingDuration
    );
  } catch (error) {
    console.error("Failed to distribute worker Prom tokens:", error);
    throw error;
  }
}

export async function getUserVestingSchedules(address: string): Promise<any[]> {
  try {
    const { capTable } = getContractInstances();
    const schedules = await capTable.getVestingSchedules(address);
    
    return schedules.map((schedule: any) => ({
      totalAmount: fromWei(schedule.totalAmount),
      amountClaimed: fromWei(schedule.amountClaimed),
      startTime: new Date(Number(schedule.startTime) * 1000),
      endTime: new Date(Number(schedule.endTime) * 1000),
      revocable: schedule.revocable,
      revoked: schedule.revoked
    }));
  } catch (error) {
    console.error("Failed to get vesting schedules:", error);
    throw error;
  }
}

export async function claimVestedTokens(scheduleIndex: number): Promise<ethers.TransactionResponse> {
  try {
    const { capTable } = getContractInstances();
    
    const privateKey = process.env.SERVER_WALLET_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error("Server wallet private key not found");
    }
    
    const wallet = new ethers.Wallet(privateKey, getWeb3Provider());
    const connectedContract = capTable.connect(wallet);
    
    return await connectedContract.claimVestedTokens(scheduleIndex);
  } catch (error) {
    console.error("Failed to claim vested tokens:", error);
    throw error;
  }
}

export async function getTotalPromTokens(address: string): Promise<string> {
  try {
    const { capTable } = getContractInstances();
    const totalTokens = await capTable.getTotalTokens(address);
    return fromWei(totalTokens);
  } catch (error) {
    console.error("Failed to get total Prom tokens:", error);
    throw error;
  }
}

export async function handlePropertyFractionalization(
  propertyId: number,
  totalTokens: string,
  initialPrice: string
): Promise<ethers.TransactionResponse> {
  try {
    // This would integrate with the Property Escrow contract to 
    // tokenize a real estate property with Prom tokens
    const { propertyEscrow, promToken } = getContractInstances();
    
    const privateKey = process.env.SERVER_WALLET_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error("Server wallet private key not found");
    }
    
    const wallet = new ethers.Wallet(privateKey, getWeb3Provider());
    const connectedEscrow = propertyEscrow.connect(wallet);
    
    // In a real implementation, this would have a special function in the PropertyEscrow contract
    // For now, we'll just simulate it by creating a transaction to the contract
    return await connectedEscrow.listProperty(
      propertyId.toString(),
      toWei(initialPrice),
      2 // 2 would represent 'fractional' listing type
    );
  } catch (error) {
    console.error("Failed to fractionalize property:", error);
    throw error;
  }
}

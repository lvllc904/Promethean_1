import { ethers } from 'ethers';

// Define interface for contract addresses
interface ContractAddresses {
  DAOGovernance: string;
  PropertyEscrow: string;
  MembershipNFT: string;
  DACToken: string;
}

// Use environment variables for contract addresses with fallbacks
const CONTRACT_ADDRESSES: ContractAddresses = {
  DAOGovernance: process.env.DAO_GOVERNANCE_ADDRESS || '0x1234567890123456789012345678901234567890',
  PropertyEscrow: process.env.PROPERTY_ESCROW_ADDRESS || '0x2345678901234567890123456789012345678901',
  MembershipNFT: process.env.MEMBERSHIP_NFT_ADDRESS || '0x3456789012345678901234567890123456789012',
  DACToken: process.env.DAC_TOKEN_ADDRESS || '0x4567890123456789012345678901234567890123',
};

// ABI imports (in a real app, these would be separate JSON files)
import DAOGovernanceABI from '../../client/src/contracts/abis/DAOGovernance.json';
import PropertyEscrowABI from '../../client/src/contracts/abis/PropertyEscrow.json';
import MembershipNFTABI from '../../client/src/contracts/abis/MembershipNFT.json';

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

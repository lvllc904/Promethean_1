import { ethers } from 'ethers';
import DAOGovernanceABI from '../contracts/abis/DAOGovernance.json';
import PropertyEscrowABI from '../contracts/abis/PropertyEscrow.json';
import MembershipNFTABI from '../contracts/abis/MembershipNFT.json';

// Define interface for contract addresses
interface ContractAddresses {
  DAOGovernance: string;
  PropertyEscrow: string;
  MembershipNFT: string;
  DACToken: string;
}

// Use environment variables for contract addresses with fallbacks
const CONTRACT_ADDRESSES: ContractAddresses = {
  DAOGovernance: import.meta.env.VITE_DAO_GOVERNANCE_ADDRESS || '0x1234567890123456789012345678901234567890',
  PropertyEscrow: import.meta.env.VITE_PROPERTY_ESCROW_ADDRESS || '0x2345678901234567890123456789012345678901',
  MembershipNFT: import.meta.env.VITE_MEMBERSHIP_NFT_ADDRESS || '0x3456789012345678901234567890123456789012',
  DACToken: import.meta.env.VITE_DAC_TOKEN_ADDRESS || '0x4567890123456789012345678901234567890123',
};

// Initialize provider (defaulting to Polygon Mumbai testnet)
const getDefaultProvider = () => {
  // Use environment variable for RPC URL with fallback
  const rpcUrl = import.meta.env.VITE_RPC_URL || 'https://polygon-mumbai.g.alchemy.com/v2/';
  return new ethers.JsonRpcProvider(rpcUrl);
};

// Simulate contract ABIs (in a real app these would be imported from compiled contracts)
const simulateContractABIs = () => {
  return {
    DAOGovernance: DAOGovernanceABI || [],
    PropertyEscrow: PropertyEscrowABI || [],
    MembershipNFT: MembershipNFTABI || [],
  };
};

// Helper to get contract instances
export const getContracts = (signer: ethers.JsonRpcSigner | null) => {
  const provider = signer ? signer.provider : getDefaultProvider();
  const ABIs = simulateContractABIs();
  
  return {
    daoGovernance: new ethers.Contract(
      CONTRACT_ADDRESSES.DAOGovernance,
      ABIs.DAOGovernance,
      signer || provider
    ),
    propertyEscrow: new ethers.Contract(
      CONTRACT_ADDRESSES.PropertyEscrow,
      ABIs.PropertyEscrow,
      signer || provider
    ),
    membershipNFT: new ethers.Contract(
      CONTRACT_ADDRESSES.MembershipNFT,
      ABIs.MembershipNFT,
      signer || provider
    ),
  };
};

// Helper to convert from wei to ether
export const fromWei = (wei: bigint): string => {
  return ethers.formatEther(wei);
};

// Helper to convert from ether to wei
export const toWei = (ether: string): bigint => {
  return ethers.parseEther(ether);
};

// DAO Governance functions
export const createProposal = async (
  signer: ethers.JsonRpcSigner,
  title: string,
  description: string,
  executionPayload: string
) => {
  const contracts = getContracts(signer);
  const tx = await contracts.daoGovernance.createProposal(title, description, executionPayload);
  return await tx.wait();
};

export const castVote = async (
  signer: ethers.JsonRpcSigner,
  proposalId: number,
  voteType: number // 0 = Against, 1 = For, 2 = Abstain
) => {
  const contracts = getContracts(signer);
  const tx = await contracts.daoGovernance.castVote(proposalId, voteType);
  return await tx.wait();
};

export const executeProposal = async (
  signer: ethers.JsonRpcSigner,
  proposalId: number
) => {
  const contracts = getContracts(signer);
  const tx = await contracts.daoGovernance.executeProposal(proposalId);
  return await tx.wait();
};

// Property Escrow functions
export const listProperty = async (
  signer: ethers.JsonRpcSigner,
  propertyId: string,
  price: string,
  listingType: string
) => {
  const contracts = getContracts(signer);
  const tx = await contracts.propertyEscrow.listProperty(
    propertyId,
    toWei(price),
    listingType === 'sale' ? 0 : 1
  );
  return await tx.wait();
};

export const purchaseProperty = async (
  signer: ethers.JsonRpcSigner,
  propertyId: string,
  price: string
) => {
  const contracts = getContracts(signer);
  const tx = await contracts.propertyEscrow.purchaseProperty(propertyId, {
    value: toWei(price)
  });
  return await tx.wait();
};

// Membership NFT functions
export const purchaseMembership = async (
  signer: ethers.JsonRpcSigner,
  membershipTier: string,
  price: string
) => {
  const contracts = getContracts(signer);
  const tierIndex = ['free', 'basic', 'premium', 'enterprise'].indexOf(membershipTier.toLowerCase());
  
  if (tierIndex === -1) throw new Error('Invalid membership tier');
  
  const tx = await contracts.membershipNFT.purchaseMembership(tierIndex, {
    value: toWei(price)
  });
  return await tx.wait();
};

export const getMembershipTier = async (
  address: string,
  provider: ethers.JsonRpcProvider | ethers.BrowserProvider = getDefaultProvider()
) => {
  const contracts = getContracts(null);
  const tier = await contracts.membershipNFT.getMembershipTier(address);
  return ['Free', 'Basic', 'Premium', 'Enterprise'][tier] || 'Free';
};

/**
 * Promethea DAC Blockchain Configuration
 * Network configurations and contract addresses for different environments
 */

const networkConfigs = {
  'polygon-zkevm-mainnet': {
    name: 'Polygon zkEVM Mainnet',
    chainId: 1101,
    rpcUrl: 'https://zkevm-rpc.com',
    explorerUrl: 'https://zkevm.polygonscan.com',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18
    },
    gasSettings: {
      maxFeePerGas: '20000000000', // 20 gwei
      maxPriorityFeePerGas: '2000000000', // 2 gwei
      gasLimit: 5000000
    }
  },
  'polygon-zkevm-testnet': {
    name: 'Polygon zkEVM Testnet',
    chainId: 1442,
    rpcUrl: 'https://rpc.public.zkevm-test.net',
    explorerUrl: 'https://testnet-zkevm.polygonscan.com',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18
    },
    gasSettings: {
      maxFeePerGas: '10000000000', // 10 gwei
      maxPriorityFeePerGas: '1000000000', // 1 gwei
      gasLimit: 5000000
    }
  },
  'arbitrum-one': {
    name: 'Arbitrum One',
    chainId: 42161,
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    explorerUrl: 'https://arbiscan.io',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18
    },
    gasSettings: {
      maxFeePerGas: '100000000', // 0.1 gwei
      maxPriorityFeePerGas: '10000000', // 0.01 gwei
      gasLimit: 5000000
    }
  },
  'optimism': {
    name: 'Optimism',
    chainId: 10,
    rpcUrl: 'https://mainnet.optimism.io',
    explorerUrl: 'https://optimistic.etherscan.io',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18
    },
    gasSettings: {
      maxFeePerGas: '100000000', // 0.1 gwei
      maxPriorityFeePerGas: '10000000', // 0.01 gwei
      gasLimit: 5000000
    }
  }
};

/**
 * Get network configuration
 * @param {string} networkName - Name of the network
 * @returns {object} Network configuration
 */
function getNetworkConfig(networkName = 'polygon-zkevm-testnet') {
  const config = networkConfigs[networkName];
  if (!config) {
    throw new Error(`Unsupported network: ${networkName}`);
  }
  return config;
}

/**
 * Get recommended network for Promethea DAC
 * Polygon zkEVM provides the best balance of cost, speed, and security
 */
function getRecommendedNetwork() {
  return 'polygon-zkevm-mainnet';
}

/**
 * Promethea DAC contract addresses by network
 * These will be populated after deployment
 */
const contractAddresses = {
  'polygon-zkevm-mainnet': {
    prometheaCore: null,
    prometheaToken: null,
    prometheaIdentity: null,
    prometheaCommunication: null,
    beaconAddress: null
  },
  'polygon-zkevm-testnet': {
    prometheaCore: null,
    prometheaToken: null,
    prometheaIdentity: null,
    prometheaCommunication: null,
    beaconAddress: null
  }
};

/**
 * Update contract addresses after deployment
 * @param {string} network - Network name
 * @param {object} addresses - Contract addresses
 */
function updateContractAddresses(network, addresses) {
  if (contractAddresses[network]) {
    contractAddresses[network] = { ...contractAddresses[network], ...addresses };
    // The beacon address is always the prometheaCore address
    contractAddresses[network].beaconAddress = addresses.prometheaCore;
  }
}

/**
 * Get contract addresses for a network
 * @param {string} network - Network name
 * @returns {object} Contract addresses
 */
function getContractAddresses(network) {
  return contractAddresses[network] || {};
}

/**
 * Promethea DAC configuration parameters
 */
const dacConfig = {
  // Governance parameters
  votingPeriod: 7 * 24 * 60 * 60, // 7 days in seconds
  quorumThreshold: 51, // 51% required for consensus
  minimumTokensToPropose: '1000000000000000000000', // 1000 PROM tokens
  
  // Token distribution
  totalSupply: '1000000000000000000000000000', // 1 billion PROM
  allocations: {
    dacTreasury: 40, // 40%
    communityRewards: 30, // 30%
    depthOSIncentives: 20, // 20%
    founders: 10 // 10%
  },
  
  // Vesting parameters
  founderVestingDuration: 4 * 365 * 24 * 60 * 60, // 4 years
  
  // Identity system parameters
  verificationFee: '10000000000000000', // 0.01 ETH
  verificationTimeLimit: 7 * 24 * 60 * 60, // 7 days
  initialReputationScore: 100,
  maxReputationScore: 1000,
  
  // Communication protocol parameters
  minConsensusParticipants: 3,
  defaultConsensusDuration: 24 * 60 * 60, // 24 hours
  ethicalAlignmentValidators: 5,
  messageValidationWindow: 60 * 60 // 1 hour
};

/**
 * Get the beacon address for Depth OS instances
 * @param {string} network - Network name
 * @returns {string} Beacon address
 */
function getBeaconAddress(network = 'polygon-zkevm-mainnet') {
  const addresses = getContractAddresses(network);
  return addresses.beaconAddress || addresses.prometheaCore;
}

/**
 * Validate network configuration
 * @param {string} network - Network name
 * @returns {boolean} Whether the network is properly configured
 */
function validateNetworkConfig(network) {
  const config = getNetworkConfig(network);
  const addresses = getContractAddresses(network);
  
  return !!(config && addresses.prometheaCore && addresses.prometheaToken);
}

module.exports = {
  networkConfigs,
  getNetworkConfig,
  getRecommendedNetwork,
  contractAddresses,
  updateContractAddresses,
  getContractAddresses,
  dacConfig,
  getBeaconAddress,
  validateNetworkConfig
};
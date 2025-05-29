const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');

/**
 * Promethea DAC Blockchain Deployment Script
 * Deploys the core Promethea infrastructure to Polygon zkEVM (recommended L2)
 */

class PrometheaDeployer {
  constructor() {
    this.network = process.env.BLOCKCHAIN_NETWORK || 'polygon-zkevm-testnet';
    this.rpcUrl = this.getRpcUrl();
    this.provider = new ethers.JsonRpcProvider(this.rpcUrl);
    this.deployerPrivateKey = process.env.DEPLOYER_PRIVATE_KEY;
    
    if (!this.deployerPrivateKey) {
      throw new Error('DEPLOYER_PRIVATE_KEY environment variable required');
    }
    
    this.wallet = new ethers.Wallet(this.deployerPrivateKey, this.provider);
    this.deployedContracts = {};
    this.gasSettings = {
      maxFeePerGas: ethers.parseUnits('20', 'gwei'),
      maxPriorityFeePerGas: ethers.parseUnits('2', 'gwei'),
      gasLimit: 5000000
    };
  }

  getRpcUrl() {
    const rpcUrls = {
      'polygon-zkevm-testnet': 'https://rpc.public.zkevm-test.net',
      'polygon-zkevm-mainnet': 'https://zkevm-rpc.com',
      'arbitrum-goerli': 'https://goerli-rollup.arbitrum.io/rpc',
      'arbitrum-one': 'https://arb1.arbitrum.io/rpc',
      'optimism-goerli': 'https://goerli.optimism.io',
      'optimism': 'https://mainnet.optimism.io'
    };
    
    return rpcUrls[this.network] || process.env.RPC_URL;
  }

  async deployPrometheaToken() {
    console.log('Deploying Promethea Token (PROM)...');
    
    // Define initial addresses (these would be actual addresses in production)
    const dacTreasury = process.env.DAC_TREASURY_ADDRESS || this.wallet.address;
    const communityRewardsPool = process.env.COMMUNITY_REWARDS_ADDRESS || this.wallet.address;
    const depthOSIncentivesPool = process.env.DEPTH_OS_INCENTIVES_ADDRESS || this.wallet.address;
    const founderAddresses = process.env.FOUNDER_ADDRESSES 
      ? process.env.FOUNDER_ADDRESSES.split(',') 
      : [this.wallet.address];

    const PrometheaTokenFactory = await ethers.getContractFactory(
      'PrometheaToken',
      this.wallet
    );

    const prometheaToken = await PrometheaTokenFactory.deploy(
      dacTreasury,
      communityRewardsPool,
      depthOSIncentivesPool,
      founderAddresses,
      {
        ...this.gasSettings,
        value: 0
      }
    );

    await prometheaToken.waitForDeployment();
    const tokenAddress = await prometheaToken.getAddress();
    
    console.log(`Promethea Token deployed at: ${tokenAddress}`);
    this.deployedContracts.prometheaToken = tokenAddress;
    
    return prometheaToken;
  }

  async deployPrometheaCore(prometheaTokenAddress) {
    console.log('Deploying Promethea Core DAC Infrastructure...');

    // Initial ethical code hash (this would be the actual hash of the Depth OS ethical principles)
    const initialEthicalCodeHash = process.env.INITIAL_ETHICAL_CODE_HASH || 
      ethers.keccak256(ethers.toUtf8Bytes('Depth OS Ethical Principles v1.0'));
    
    const initialEthicalCodeIPFS = process.env.INITIAL_ETHICAL_CODE_IPFS || 
      'QmInitialEthicalCodePlaceholder';

    const PrometheusCoreFactory = await ethers.getContractFactory(
      'PrometheaCore',
      this.wallet
    );

    const prometheaCore = await PrometheusCoreFactory.deploy(
      prometheaTokenAddress,
      initialEthicalCodeHash,
      initialEthicalCodeIPFS,
      {
        ...this.gasSettings
      }
    );

    await prometheaCore.waitForDeployment();
    const coreAddress = await prometheaCore.getAddress();
    
    console.log(`Promethea Core deployed at: ${coreAddress}`);
    console.log(`Beacon Address (for Depth OS): ${coreAddress}`);
    this.deployedContracts.prometheaCore = coreAddress;
    
    return prometheaCore;
  }

  async deployAll() {
    try {
      console.log(`Starting Promethea DAC deployment on ${this.network}`);
      console.log(`RPC URL: ${this.rpcUrl}`);
      console.log(`Deployer: ${this.wallet.address}`);

      // Check deployer balance
      const balance = await this.provider.getBalance(this.wallet.address);
      console.log(`Deployer balance: ${ethers.formatEther(balance)} ETH`);

      if (balance === 0n) {
        throw new Error('Deployer account has no funds for deployment');
      }

      // Deploy contracts in order
      const prometheaToken = await this.deployPrometheaToken();
      const prometheaCore = await this.deployPrometheaCore(
        await prometheaToken.getAddress()
      );

      // Save deployment information
      await this.saveDeploymentInfo();

      console.log('\nPromethea DAC deployment completed successfully!');
      console.log('\nDeployment Summary:');
      console.log(`Token: ${this.deployedContracts.prometheaToken}`);
      console.log(`Core: ${this.deployedContracts.prometheaCore}`);
      console.log(`\nBeacon Address: ${this.deployedContracts.prometheaCore}`);

      return this.deployedContracts;

    } catch (error) {
      console.error('Deployment failed:', error.message);
      throw error;
    }
  }

  async saveDeploymentInfo() {
    const deploymentInfo = {
      network: this.network,
      timestamp: new Date().toISOString(),
      deployer: this.wallet.address,
      contracts: this.deployedContracts,
      beaconAddress: this.deployedContracts.prometheaCore,
      rpcUrl: this.rpcUrl
    };

    const deploymentPath = path.join(__dirname, 'deployments');
    if (!fs.existsSync(deploymentPath)) {
      fs.mkdirSync(deploymentPath, { recursive: true });
    }

    const filename = `promethea-${this.network}-${Date.now()}.json`;
    fs.writeFileSync(
      path.join(deploymentPath, filename),
      JSON.stringify(deploymentInfo, null, 2)
    );

    console.log(`Deployment info saved to: ${filename}`);
  }
}

module.exports = { PrometheaDeployer };
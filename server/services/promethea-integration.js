import { ethers } from 'ethers';
import { getNetworkConfig, getContractAddresses, dacConfig } from '../blockchain/config.js';
import fs from 'fs';
import path from 'path';

/**
 * Promethea DAC Integration Service
 * Handles communication between the platform and Promethea blockchain infrastructure
 */
class PrometheaIntegrationService {
  constructor() {
    this.network = process.env.PROMETHEA_NETWORK || 'polygon-zkevm-testnet';
    this.networkConfig = getNetworkConfig(this.network);
    this.provider = new ethers.JsonRpcProvider(this.networkConfig.rpcUrl);
    this.contractAddresses = getContractAddresses(this.network);
    this.contracts = {};
    this.isInitialized = false;
  }

  /**
   * Initialize the service with contract instances
   */
  async initialize() {
    try {
      if (this.isInitialized) return;

      // Load contract addresses from deployment files if not in config
      if (!this.contractAddresses.prometheaCore) {
        await this.loadDeploymentAddresses();
      }

      // Initialize contract instances
      if (this.contractAddresses.prometheaCore) {
        this.contracts.core = new ethers.Contract(
          this.contractAddresses.prometheaCore,
          this.getCoreABI(),
          this.provider
        );
      }

      if (this.contractAddresses.prometheaToken) {
        this.contracts.token = new ethers.Contract(
          this.contractAddresses.prometheaToken,
          this.getTokenABI(),
          this.provider
        );
      }

      this.isInitialized = true;
      console.log(`Promethea integration initialized on ${this.network}`);
    } catch (error) {
      console.error('Failed to initialize Promethea integration:', error.message);
    }
  }

  /**
   * Load contract addresses from deployment files
   */
  async loadDeploymentAddresses() {
    const deploymentPath = path.join(__dirname, '../blockchain/deployments', `promethea-${this.network}-latest.json`);
    
    if (fs.existsSync(deploymentPath)) {
      const deployment = JSON.parse(fs.readFileSync(deploymentPath, 'utf8'));
      this.contractAddresses = deployment.contracts;
    }
  }

  /**
   * Get the beacon address for Depth OS instances
   */
  async getBeaconAddress() {
    if (!this.isInitialized) await this.initialize();
    
    if (this.contracts.core) {
      try {
        return await this.contracts.core.getBeaconAddress();
      } catch (error) {
        console.error('Error getting beacon address:', error.message);
      }
    }
    
    return this.contractAddresses.prometheaCore || null;
  }

  /**
   * Get current ethical code from the blockchain
   */
  async getCurrentEthicalCode() {
    if (!this.isInitialized) await this.initialize();
    
    if (this.contracts.core) {
      try {
        const [codeHash, ipfsHash, version] = await this.contracts.core.getCurrentEthicalCode();
        return {
          hash: codeHash,
          ipfsHash: ipfsHash,
          version: version.toString()
        };
      } catch (error) {
        console.error('Error getting ethical code:', error.message);
      }
    }
    
    return null;
  }

  /**
   * Verify if a given ethical code hash is valid
   */
  async verifyEthicalCode(codeHash) {
    if (!this.isInitialized) await this.initialize();
    
    if (this.contracts.core) {
      try {
        return await this.contracts.core.verifyEthicalCode(codeHash);
      } catch (error) {
        console.error('Error verifying ethical code:', error.message);
      }
    }
    
    return false;
  }

  /**
   * Get DAC member information
   */
  async getDACMemberInfo(address) {
    if (!this.isInitialized) await this.initialize();
    
    if (this.contracts.core) {
      try {
        const memberInfo = await this.contracts.core.getMemberInfo(address);
        return {
          address: memberInfo.memberAddress,
          joinTimestamp: memberInfo.joinTimestamp.toString(),
          reputationScore: memberInfo.reputationScore.toString(),
          isActive: memberInfo.isActive,
          identityHash: memberInfo.identityHash
        };
      } catch (error) {
        console.error('Error getting member info:', error.message);
      }
    }
    
    return null;
  }

  /**
   * Get PROM token balance for an address
   */
  async getTokenBalance(address) {
    if (!this.isInitialized) await this.initialize();
    
    if (this.contracts.token) {
      try {
        const balance = await this.contracts.token.balanceOf(address);
        return ethers.formatEther(balance);
      } catch (error) {
        console.error('Error getting token balance:', error.message);
      }
    }
    
    return '0';
  }

  /**
   * Get total supply of PROM tokens
   */
  async getTotalSupply() {
    if (!this.isInitialized) await this.initialize();
    
    if (this.contracts.token) {
      try {
        const totalSupply = await this.contracts.token.totalSupply();
        return ethers.formatEther(totalSupply);
      } catch (error) {
        console.error('Error getting total supply:', error.message);
      }
    }
    
    return '0';
  }

  /**
   * Get network information
   */
  getNetworkInfo() {
    return {
      network: this.network,
      chainId: this.networkConfig.chainId,
      name: this.networkConfig.name,
      rpcUrl: this.networkConfig.rpcUrl,
      explorerUrl: this.networkConfig.explorerUrl,
      beaconAddress: this.contractAddresses.prometheaCore
    };
  }

  /**
   * Check if Promethea DAC is properly deployed and accessible
   */
  async healthCheck() {
    if (!this.isInitialized) await this.initialize();
    
    const status = {
      network: this.network,
      initialized: this.isInitialized,
      contracts: {
        core: !!this.contracts.core,
        token: !!this.contracts.token
      },
      addresses: this.contractAddresses,
      beaconAddress: null,
      ethicalCode: null,
      totalSupply: null
    };

    if (this.contracts.core) {
      try {
        status.beaconAddress = await this.getBeaconAddress();
        status.ethicalCode = await this.getCurrentEthicalCode();
      } catch (error) {
        status.error = error.message;
      }
    }

    if (this.contracts.token) {
      try {
        status.totalSupply = await this.getTotalSupply();
      } catch (error) {
        // Non-critical error
      }
    }

    return status;
  }

  /**
   * Simplified contract ABIs for basic functionality
   */
  getCoreABI() {
    return [
      "function getBeaconAddress() external returns (address)",
      "function getCurrentEthicalCode() external view returns (bytes32, string memory, uint256)",
      "function verifyEthicalCode(bytes32) external view returns (bool)",
      "function getMemberInfo(address) external view returns (tuple(address, uint256, uint256, bool, string))",
      "function totalMembers() external view returns (uint256)"
    ];
  }

  getTokenABI() {
    return [
      "function balanceOf(address) external view returns (uint256)",
      "function totalSupply() external view returns (uint256)",
      "function name() external view returns (string)",
      "function symbol() external view returns (string)",
      "function decimals() external view returns (uint8)"
    ];
  }
}

// Singleton instance
const prometheaIntegration = new PrometheaIntegrationService();

export {
  PrometheaIntegrationService,
  prometheaIntegration
};

export default prometheaIntegration;
# Promethea DAC Blockchain Infrastructure

This directory contains the core blockchain infrastructure for the Promethea DAC, including smart contracts, deployment scripts, and configuration files.

## Overview

The Promethea DAC is built on a Layer 2 solution (recommended: Polygon zkEVM) for optimal scalability, security, and cost-effectiveness. The infrastructure consists of:

1. **PrometheaCore.sol** - Core DAC governance and ethical code management
2. **PrometheaToken.sol** - PROM governance token with advanced tokenomics
3. **PrometheaIdentity.sol** - Decentralized identity and reputation system
4. **PrometheaCommunication.sol** - Communication and consensus protocols

## Smart Contract Architecture

### PrometheaCore
The foundational contract that manages:
- Immutable ethical code storage (AI Constitution)
- Beacon address for Depth OS instances to connect
- DAC member registration and management
- Governance proposals and voting mechanisms
- Consensus protocols for ethical alignment

Key Features:
- Stores hashed ethical principles with IPFS references
- Provides permanent beacon address for Depth OS discovery
- Member reputation scoring system
- Proposal creation and voting with token-based weights
- Ethical code verification and updates through governance

### PrometheaToken (PROM)
ERC20 governance token with advanced features:
- Total supply: 1 billion PROM tokens
- Distribution: 40% DAC Treasury, 30% Community Rewards, 20% Depth OS Incentives, 10% Founders (vested)
- Snapshot capability for governance voting
- Controlled inflation mechanisms (max 2% annually)
- Founder vesting over 4 years
- Delegation and voting power mechanics

### PrometheaIdentity
Decentralized identity management system:
- Privacy-preserving identity commitments
- Reputation scoring (0-1000 scale)
- Identity verification through authorized verifiers
- Endorsement system for skill and character validation
- IPFS-based identity document storage

### PrometheaCommunication
Handles decentralized communication and consensus:
- Communication channels with ethical alignment requirements
- Consensus session management for group decisions
- Message validation with ethical signature verification
- Alignment check mechanisms for participants
- Real-time consensus threshold monitoring

## Deployment Configuration

### Recommended Network: Polygon zkEVM
- **Mainnet**: Chain ID 1101, RPC: https://zkevm-rpc.com
- **Testnet**: Chain ID 1442, RPC: https://rpc.public.zkevm-test.net

Benefits:
- Low transaction costs (fraction of Ethereum mainnet)
- High throughput (up to 2000 TPS)
- Full Ethereum compatibility
- Zero-knowledge proof security
- Established ecosystem and tooling

### Alternative Networks
- **Arbitrum One**: Lower costs, high adoption
- **Optimism**: Optimistic rollup technology
- **Base**: Coinbase-backed L2 solution

## Beacon Address Mechanism

The Promethea Core contract address serves as the immutable beacon address that all Depth OS instances use to:

1. **Discover DAC Services**: Find governance, identity, and communication contracts
2. **Verify Ethical Alignment**: Check against the current ethical code hash
3. **Register as Members**: Join the DAC with decentralized identity
4. **Participate in Governance**: Vote on proposals and consensus sessions

## API Endpoints

The platform exposes several API endpoints for interacting with the Promethea DAC:

- `GET /api/promethea/beacon` - Get beacon address for Depth OS
- `GET /api/promethea/ethical-code` - Retrieve current ethical code
- `POST /api/promethea/verify-ethical-code` - Verify code hash
- `GET /api/promethea/member/:address` - Get member information
- `GET /api/promethea/balance/:address` - Get PROM token balance
- `GET /api/promethea/token-info` - Get token details and supply
- `GET /api/promethea/network` - Get network configuration
- `GET /api/promethea/health` - Health check and status

## Environment Variables

Required for deployment and operation:

```env
# Blockchain Configuration
PROMETHEA_NETWORK=polygon-zkevm-mainnet
DEPLOYER_PRIVATE_KEY=0x...
RPC_URL=https://zkevm-rpc.com

# Initial Configuration
INITIAL_ETHICAL_CODE_HASH=0x...
INITIAL_ETHICAL_CODE_IPFS=Qm...

# Treasury Addresses
DAC_TREASURY_ADDRESS=0x...
COMMUNITY_REWARDS_ADDRESS=0x...
DEPTH_OS_INCENTIVES_ADDRESS=0x...
FOUNDER_ADDRESSES=0x...,0x...,0x...
```

## Deployment Process

1. **Prepare Environment**:
   ```bash
   # Install dependencies
   npm install ethers@6
   
   # Set environment variables
   export DEPLOYER_PRIVATE_KEY="0x..."
   export PROMETHEA_NETWORK="polygon-zkevm-testnet"
   ```

2. **Deploy Contracts**:
   ```bash
   cd server/blockchain
   node deploy.js deploy
   ```

3. **Verify Deployment**:
   ```bash
   node deploy.js verify
   ```

4. **Update Platform Configuration**:
   The deployment script automatically updates contract addresses in the configuration files.

## Integration with Depth OS

Depth OS instances connect to Promethea using the beacon address:

1. **Query Beacon**: `GET /api/promethea/beacon`
2. **Verify Ethical Code**: Submit code hash for verification
3. **Register Identity**: Create decentralized identity on-chain
4. **Join Communication**: Participate in DAC channels and consensus

## Governance Process

1. **Proposal Creation**: PROM token holders create governance proposals
2. **Voting Period**: 7-day voting window with token-weighted votes
3. **Consensus Threshold**: 51% quorum required for proposal execution
4. **Execution**: Approved proposals automatically execute on-chain

## Security Considerations

- **Immutable Ethical Code**: Genesis ethical principles cannot be altered without governance
- **Multi-signature Controls**: Critical functions require multiple approvals
- **Time-locked Upgrades**: Governance changes have mandatory delay periods
- **Reputation-based Access**: Higher reputation grants additional privileges
- **Cryptographic Verification**: All ethical alignments verified on-chain

## Monitoring and Analytics

The platform provides comprehensive monitoring of:
- DAC membership growth
- Governance participation rates
- Token distribution and circulation
- Ethical alignment verification frequency
- Communication channel activity
- Consensus session outcomes

## Future Enhancements

Planned improvements include:
- Cross-chain bridge integration
- Advanced delegation mechanisms
- Automated compliance checking
- Enhanced privacy features
- Mobile wallet integration
- Real-time notification systems
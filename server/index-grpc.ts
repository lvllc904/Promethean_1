import express from 'express';
import { startGrpcServer } from './grpc/index';

/**
 * Enhanced Express server with integrated gRPC services
 * Runs both REST API and gRPC server simultaneously
 */

async function startIntegratedServer() {
  const app = express();
  const PORT = process.env.PORT || 5000;
  const GRPC_PORT = process.env.GRPC_PORT || 50051;

  try {
    // Start gRPC server
    console.log('Starting gRPC server...');
    await startGrpcServer(GRPC_PORT);
    
    // Basic middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Health check endpoint
    app.get('/health', (req, res) => {
      res.json({
        status: 'healthy',
        services: {
          rest: true,
          grpc: true
        },
        timestamp: new Date().toISOString()
      });
    });

    // gRPC service status endpoint
    app.get('/grpc/status', (req, res) => {
      res.json({
        grpc: {
          running: true,
          port: GRPC_PORT,
          services: [
            'GovernanceService',
            'AIService',
            'BlockchainService', 
            'PropertyService',
            'AuthService',
            'SocialService'
          ]
        }
      });
    });

    // Start Express server
    app.listen(PORT, () => {
      console.log(`
🚀 DAC Marketplace Platform Ready
================================
REST API Server: http://localhost:${PORT}
gRPC Server: localhost:${GRPC_PORT}
Health Check: http://localhost:${PORT}/health
gRPC Status: http://localhost:${PORT}/grpc/status

Available gRPC Services:
- GovernanceService (Proposals, Voting, Delegations)
- AIService (Property Analysis, Review Processing)  
- BlockchainService (Smart Contracts, Transactions)
- PropertyService (Listings, Tokenization, Valuations)
- AuthService (Authentication, Authorization)
- SocialService (Profiles, Messaging, Endorsements)

Architecture Features:
✅ High-performance gRPC APIs
✅ Real-time streaming capabilities
✅ Type-safe protocol buffer definitions
✅ Cross-service communication
✅ Browser-compatible gRPC-Web support
✅ Comprehensive error handling
      `);
    });

  } catch (error) {
    console.error('Failed to start integrated server:', error);
    process.exit(1);
  }
}

startIntegratedServer();
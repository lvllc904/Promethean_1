# Deployment Guide for DAC Marketplace

This guide provides comprehensive instructions for deploying the DAC Marketplace platform in various environments. Whether you're forking this project, contributing to development, or setting up your own instance, these steps will help you get up and running.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Database Configuration](#database-configuration)
- [Deployment Options](#deployment-options)
  - [Replit Deployment](#replit-deployment)
  - [Vercel Deployment](#vercel-deployment)
  - [Self-hosted Deployment](#self-hosted-deployment)
- [Post-Deployment Verification](#post-deployment-verification)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:

- Node.js (v18 or later)
- npm or yarn
- PostgreSQL database (for production deployments)
- API keys for integrations:
  - OpenAI API key (for AI features)
  - Stripe API keys (for payment features, optional)
  - Anthropic API key (if using Claude, optional)

## Environment Setup

Create a `.env` file with the following variables:

```
# Database
DATABASE_URL=postgresql://username:password@hostname:port/database

# Authentication
SESSION_SECRET=your_secure_random_string

# AI Integration
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key

# Payment Processing (optional)
STRIPE_SECRET_KEY=your_stripe_secret_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key

# Blockchain Integration (optional)
ETHEREUM_RPC_URL=your_ethereum_node_url
```

## Database Configuration

### PostgreSQL Setup

1. Create a PostgreSQL database:
   ```sql
   CREATE DATABASE dac_marketplace;
   CREATE USER dac_user WITH ENCRYPTED PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE dac_marketplace TO dac_user;
   ```

2. Push the schema to your database:
   ```bash
   npm run db:push
   ```

## Deployment Options

### Replit Deployment

The simplest way to deploy DAC Marketplace is directly through Replit:

1. Fork the Replit project
2. Add your environment secrets in the Secrets tab
3. Click the "Deploy" button in the top-right corner
4. Follow the deployment prompts

### Vercel Deployment

To deploy to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Add environment variables in Vercel dashboard
5. Deploy

### Self-hosted Deployment

For self-hosting on a VPS or dedicated server:

1. Clone your repository:
   ```bash
   git clone https://github.com/your-username/dac-marketplace.git
   cd dac-marketplace
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the application:
   ```bash
   npm run build
   ```

4. Set up a process manager (PM2):
   ```bash
   npm install -g pm2
   pm2 start npm --name "dac-marketplace" -- start
   ```

5. Configure Nginx or Apache as a reverse proxy:
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;

     location / {
       proxy_pass http://localhost:5000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

## Post-Deployment Verification

After deployment, verify:

1. **User Authentication**: Test registration and login flows
2. **Database Connectivity**: Ensure data persistence works correctly
3. **AI Features**: Verify OpenAI integration works 
4. **UI Functionality**: Test the UI Label Management system
5. **Mobile Responsiveness**: Verify mobile interfaces work properly

## Troubleshooting

### Common Issues

1. **Database Connection Errors**:
   - Verify DATABASE_URL is correct
   - Check that the database server is accessible from your deployment environment
   - Ensure database user has proper permissions

2. **API Integration Issues**:
   - Verify API keys are correctly set in environment variables
   - Check API usage limits haven't been exceeded

3. **Build Failures**:
   - Check build logs for specific errors
   - Verify Node.js version compatibility

4. **Runtime Errors**:
   - Check application logs
   - Verify environment variables are correctly set

### Security Considerations

1. Always use HTTPS in production
2. Properly secure your PostgreSQL database
3. Regularly update dependencies for security patches
4. Follow security best practices for your deployment environment

## Continuous Integration/Deployment

For automated deployments, consider setting up CI/CD:

1. GitHub Actions for automated testing
2. Automated deployments to your preferred platform
3. Database migration automation

---

For further assistance, please open an issue in the repository or refer to the project documentation.
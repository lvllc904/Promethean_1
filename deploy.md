# Deployment Guide for DAC Marketplace

This guide provides instructions for deploying the DAC Marketplace application to both GitHub and Replit.

## GitHub Deployment

### Using the Automated Script

1. Make sure you've created an empty repository named "DAC2" in your GitHub account
2. Run the provided script:
   ```bash
   ./github_setup.sh
   ```
3. Enter your GitHub username and personal access token when prompted
4. The script will:
   - Initialize Git if needed
   - Add your files to version control
   - Commit them with a meaningful message
   - Push to your GitHub repository

### Manual GitHub Deployment

If you prefer to do this manually:

1. Create a repository on GitHub named "DAC2"
2. Initialize Git in your project:
   ```bash
   git init
   ```
3. Add all files:
   ```bash
   git add .
   ```
4. Commit files:
   ```bash
   git commit -m "Initial commit of DAC Marketplace"
   ```
5. Add GitHub remote:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/DAC2.git
   ```
6. Push to GitHub:
   ```bash
   git push -u origin main
   ```

## Replit Deployment

To deploy the application on Replit:

1. Click on the "Deploy" button in the Replit interface
2. Choose how you want to configure your deployment:
   - Custom domain (if available)
   - Environment variables (make sure to set `OPENAI_API_KEY`)
3. Click "Deploy" to initiate the deployment process
4. Once deployed, you'll receive a unique URL for your application

## Environment Variables

For the application to work properly, make sure these environment variables are set:

- `OPENAI_API_KEY`: Your OpenAI API key for AI features

## Post-Deployment Verification

After deploying, verify:

1. All pages load correctly
2. Web3 wallet connection works
3. AI-powered features function properly
4. DAO governance elements display correctly
5. Property listings and marketplace are accessible

## Troubleshooting

If you encounter issues:

- Check browser console for errors
- Verify environment variables are properly set
- Ensure all API keys are valid
- Check network connections for external service calls
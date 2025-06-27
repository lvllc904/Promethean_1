#!/bin/bash

# GitHub setup script for DAC2 repository
# This script initializes a Git repository and pushes it to GitHub

echo "🚀 Setting up GitHub repository for DAC2..."

# Ask for GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME

# Ask for repository name
read -p "Enter your GitHub repository name (default: DAC2): " REPO_NAME
REPO_NAME=${REPO_NAME:-DAC2}

# Ask for personal access token (more secure than password)
read -sp "Enter your GitHub personal access token: " GITHUB_TOKEN
echo ""

# Initialize Git repository if not already initialized
if [ ! -d .git ]; then
  echo "Initializing Git repository..."
  git init
else
  echo "Git repository already initialized."
fi

# Add GitHub as a remote origin
echo "Adding GitHub as remote origin..."
git remote remove origin 2>/dev/null  # Remove if exists
git remote add origin https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/${REPO_NAME}.git

# Add all files to staging
echo "Adding files to Git..."
git add .

# Commit the changes
echo "Committing files..."
git commit -m "Initial commit of DAC Marketplace platform"

# Set the default branch name (main or master)
DEFAULT_BRANCH=$(git branch --show-current)
if [ -z "$DEFAULT_BRANCH" ]; then
  DEFAULT_BRANCH="main"
fi

# Push to GitHub
echo "Pushing to GitHub repository..."
git push -u origin ${DEFAULT_BRANCH}

echo "✅ Setup complete! Your code has been pushed to https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
echo "NOTE: If you encounter any errors, please check your GitHub username and token."
echo "You may need to create the repository on GitHub first if it doesn't exist."
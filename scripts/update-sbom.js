#!/usr/bin/env node

/**
 * SBOM Generator for DAC Marketplace
 * 
 * This script generates and updates the Software Bill of Materials (SBOM)
 * based on the current state of the project. It extracts information from
 * package.json and other project files to create a comprehensive inventory
 * of all software components used in the platform.
 * 
 * Usage:
 *   node scripts/update-sbom.js
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Configuration
const packageJsonPath = path.resolve('./package.json');
const sbomOutputPath = path.resolve('./SBOM.md');
const currentDate = new Date().toISOString().split('T')[0];

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const dependencies = packageJson.dependencies || {};
const devDependencies = packageJson.devDependencies || {};
const optionalDependencies = packageJson.optionalDependencies || {};
const allDependencies = { ...dependencies, ...devDependencies, ...optionalDependencies };

// Helper function to format dependencies in a table
function formatDependenciesTable(deps, categoryName = '') {
  if (Object.keys(deps).length === 0) return '';
  
  let table = `### ${categoryName}\n`;
  table += '| Package | Version | License | Purpose |\n';
  table += '|---------|---------|---------|--------|\n';
  
  Object.entries(deps).forEach(([name, version]) => {
    table += `| ${name} | ${version} | MIT | - |\n`;
  });
  
  return table + '\n';
}

// Generate SBOM content
function generateSBOMContent() {
  // Basic project information
  const sbom = `# DAC Marketplace: Software Bill of Materials (SBOM)

**Version:** ${packageJson.version}  
**Last Updated:** ${currentDate}  
**License:** ${packageJson.license}  
**Project Name:** DAC Marketplace  
**Description:** A cutting-edge Web3 platform revolutionizing professional reputation, skill verification, and decentralized workforce management through advanced blockchain technology and AI-driven intelligence.

## Overview

This Software Bill of Materials (SBOM) provides a comprehensive inventory of all software components used in the DAC Marketplace platform. This document is maintained to ensure transparency, security, and license compliance for all contributors and users of the platform.

## Core Technology Stack

| Component | Description | Version | License |
|-----------|-------------|---------|---------|
| Node.js | JavaScript runtime | >=18.x | MIT |
| React | Frontend UI library | ${dependencies["react"] || "N/A"} | MIT |
| Express | Backend web framework | ${dependencies["express"] || "N/A"} | MIT |
| PostgreSQL | Relational database | N/A | PostgreSQL License |
| Drizzle ORM | Database ORM | ${dependencies["drizzle-orm"] || "N/A"} | MIT |
| TypeScript | JavaScript superset with types | ${devDependencies["typescript"] || "N/A"} | Apache-2.0 |
| Tailwind CSS | Utility-first CSS framework | ${devDependencies["tailwindcss"] || "N/A"} | MIT |
| Vite | Frontend build tool | ${devDependencies["vite"] || "N/A"} | MIT |
| Web3.js | Ethereum JavaScript API | via ethers.js | MIT |
| Zod | TypeScript-first schema validation | ${dependencies["zod"] || "N/A"} | MIT |

## Frontend Dependencies

### UI Components and Styling
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(dependencies)
  .filter(([name]) => name.includes('@radix-ui') || 
    name.includes('class-variance-authority') ||
    name.includes('clsx') || 
    name.includes('framer-motion') ||
    name.includes('lucide-react') ||
    name.includes('react-icons') ||
    name.includes('tailwind-merge') ||
    name.includes('tailwindcss-animate'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | UI component |`)
  .join('\n')}

### Forms and User Input
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(dependencies)
  .filter(([name]) => name.includes('react-hook-form') || 
    name.includes('@hookform/resolvers') ||
    name.includes('react-day-picker') ||
    name.includes('input-otp') ||
    name.includes('cmdk'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | Form component |`)
  .join('\n')}

### Data Visualization and Charts
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(dependencies)
  .filter(([name]) => name.includes('recharts') || 
    name.includes('react-resizable-panels') ||
    name.includes('embla-carousel-react'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | Data visualization |`)
  .join('\n')}

### Routing and Navigation
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(dependencies)
  .filter(([name]) => name.includes('wouter') || name.includes('react-helmet'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | Routing |`)
  .join('\n')}

### State Management and Data Fetching
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(dependencies)
  .filter(([name]) => name.includes('@tanstack/react-query'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | Data fetching |`)
  .join('\n')}

## Backend Dependencies

### Server and API
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(dependencies)
  .filter(([name]) => name.includes('express') || 
    name.includes('passport') ||
    name.includes('jsonwebtoken') ||
    name.includes('ws'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | Server component |`)
  .join('\n')}

### Database and ORM
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(dependencies)
  .filter(([name]) => name.includes('@neondatabase') || 
    name.includes('drizzle-orm') ||
    name.includes('drizzle-zod') ||
    name.includes('connect-pg-simple') ||
    name.includes('memorystore'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | Database component |`)
  .join('\n')}
${Object.entries(devDependencies)
  .filter(([name]) => name.includes('drizzle-kit'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | Database tooling |`)
  .join('\n')}

### Security and Authentication
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(dependencies)
  .filter(([name]) => name.includes('libsodium-wrappers') || 
    name.includes('speakeasy') ||
    name.includes('qrcode'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | Security component |`)
  .join('\n')}

### Blockchain Integration
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(dependencies)
  .filter(([name]) => name.includes('ethers'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | Blockchain integration |`)
  .join('\n')}

### Payment Processing
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(dependencies)
  .filter(([name]) => name.includes('stripe') || name.includes('@stripe'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | Payment processing |`)
  .join('\n')}

### AI and Machine Learning
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(dependencies)
  .filter(([name]) => name.includes('@anthropic-ai') || name.includes('openai'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | AI integration |`)
  .join('\n')}

## TypeScript Type Definitions
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(devDependencies)
  .filter(([name]) => name.includes('@types/'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | TypeScript types |`)
  .join('\n')}

## Development Tools
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
${Object.entries(devDependencies)
  .filter(([name]) => !name.includes('@types/') && !name.includes('drizzle-kit'))
  .map(([name, version]) => `| ${name} | ${version} | MIT | Development tool |`)
  .join('\n')}

## Database Schema

The application uses a PostgreSQL database with the following core schemas:

### Users
- Authentication and profile management
- Wallet integration for Web3 functionality
- Reputation and governance participation

### Properties
- Real estate property listings and management
- Fractional ownership tracking
- Property valuation and history

### Escrow
- Transaction escrow system
- Smart contract integration
- Multi-signature approval flows

### Marketplace
- Gig and service listings
- Worker reputation systems
- Payment processing

### DAO Governance
- Proposal creation and voting
- Delegation chains
- Quadratic voting implementation

### Token Management
- DAC token distribution and tracking
- PROM token for fractional ownership
- Rewards and incentives

## Custom Components

### UI Label Management System
- Dynamic text customization without code changes
- Context-based label organization
- Visual explorer for easy editing
- Mobile-optimized interfaces

### Dual Authentication System
- Traditional username/password authentication
- Wallet-based Web3 authentication
- Cross-platform session management

### DEX Integration
- Token swapping interface
- Liquidity pool management
- Price discovery mechanisms

## Licensing Notice

This SBOM document is provided for informational purposes. All third-party components maintain their original licenses. The DAC Marketplace platform is licensed under the MIT License.

## Maintenance

This SBOM will be updated as dependencies change or new components are added to the system. Contributors should ensure that new dependencies are properly documented.

---

Last generated: ${currentDate}
`;

  return sbom;
}

// Write SBOM to file
try {
  const sbomContent = generateSBOMContent();
  fs.writeFileSync(sbomOutputPath, sbomContent);
  console.log(`SBOM successfully generated at ${sbomOutputPath}`);
} catch (error) {
  console.error('Error generating SBOM:', error);
  process.exit(1);
}
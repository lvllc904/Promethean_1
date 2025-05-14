# DAC Marketplace: Software Bill of Materials (SBOM)

**Version:** 1.0.0  
**Last Updated:** May 14, 2024  
**License:** MIT  
**Project Name:** DAC Marketplace  
**Description:** A cutting-edge Web3 platform revolutionizing professional reputation, skill verification, and decentralized workforce management through advanced blockchain technology and AI-driven intelligence.

## Overview

This Software Bill of Materials (SBOM) provides a comprehensive inventory of all software components used in the DAC Marketplace platform. This document is maintained to ensure transparency, security, and license compliance for all contributors and users of the platform.

## Core Technology Stack

| Component | Description | Version | License |
|-----------|-------------|---------|---------|
| Node.js | JavaScript runtime | >=18.x | MIT |
| React | Frontend UI library | 18.3.1 | MIT |
| Express | Backend web framework | 4.21.2 | MIT |
| PostgreSQL | Relational database | N/A | PostgreSQL License |
| Drizzle ORM | Database ORM | 0.39.1 | MIT |
| TypeScript | JavaScript superset with types | 5.6.3 | Apache-2.0 |
| Tailwind CSS | Utility-first CSS framework | 3.4.14 | MIT |
| Vite | Frontend build tool | 5.4.14 | MIT |
| Web3.js | Ethereum JavaScript API | via ethers.js | MIT |
| Zod | TypeScript-first schema validation | 3.23.8 | MIT |

## Frontend Dependencies

### UI Components and Styling
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| @radix-ui/* (multiple packages) | Various | MIT | Accessible UI component primitives |
| class-variance-authority | 0.7.0 | MIT | Component styling utilities |
| clsx | 2.1.1 | MIT | Conditional class name construction |
| framer-motion | 11.13.1 | MIT | Animations and transitions |
| lucide-react | 0.453.0 | ISC | Icon components |
| react-icons | 5.4.0 | MIT | Icon components library |
| tailwind-merge | 2.5.4 | MIT | Tailwind utility merging |
| tailwindcss-animate | 1.0.7 | MIT | Animation utilities for Tailwind |
| @tailwindcss/typography | 0.5.15 | MIT | Typography utilities for Tailwind |

### Forms and User Input
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| react-hook-form | 7.53.1 | MIT | Form state management and validation |
| @hookform/resolvers | 3.9.1 | MIT | Form validation resolvers |
| react-day-picker | 8.10.1 | MIT | Date picker component |
| input-otp | 1.2.4 | MIT | One-time password input |
| cmdk | 1.0.0 | MIT | Command menu interfaces |

### Data Visualization and Charts
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| recharts | 2.13.0 | MIT | Composable charting library |
| react-resizable-panels | 2.1.4 | MIT | Resizable panel layouts |
| embla-carousel-react | 8.3.0 | MIT | Carousel/slider component |

### Routing and Navigation
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| wouter | 3.3.5 | Unlicense | Simple routing library |
| react-helmet | 6.1.0 | MIT | Document head management |

### State Management and Data Fetching
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| @tanstack/react-query | 5.60.5 | MIT | Data fetching and state management |

### Testing and Development
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| @testing-library/react | 16.3.0 | MIT | React component testing |
| @testing-library/jest-dom | 6.6.3 | MIT | DOM testing utilities |
| @testing-library/user-event | 14.6.1 | MIT | User event simulation |
| jsdom | 26.1.0 | MIT | DOM environment implementation |
| vitest | 3.1.2 | MIT | Testing framework |
| @vitejs/plugin-react | 4.3.2 | MIT | React plugin for Vite |
| @replit/* (plugins) | Various | MIT | Replit-specific Vite plugins |

## Backend Dependencies

### Server and API
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| express | 4.21.2 | MIT | Web server framework |
| express-session | 1.18.1 | MIT | Session management |
| passport | 0.7.0 | MIT | Authentication middleware |
| passport-local | 1.0.0 | MIT | Username/password authentication |
| jsonwebtoken | 9.0.2 | MIT | JWT implementation |
| ws | 8.18.0 | MIT | WebSocket implementation |

### Database and ORM
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| @neondatabase/serverless | 0.10.4 | MIT | PostgreSQL serverless client |
| drizzle-orm | 0.39.1 | MIT | TypeScript ORM |
| drizzle-zod | 0.7.0 | MIT | Zod schema generator for Drizzle |
| drizzle-kit | 0.30.4 | MIT | Drizzle CLI tools |
| connect-pg-simple | 10.0.0 | MIT | PostgreSQL session store |
| memorystore | 1.6.7 | MIT | Memory-based session store |

### Security and Authentication
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| libsodium-wrappers | 0.7.15 | ISC | Cryptographic operations |
| speakeasy | 2.0.0 | MIT | Two-factor authentication |
| qrcode | 1.5.4 | MIT | QR code generation |

### Blockchain Integration
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| ethers | 6.13.5 | MIT | Ethereum library |

### Payment Processing
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| stripe | 18.0.0 | MIT | Payment processing |
| @stripe/react-stripe-js | 3.6.0 | MIT | React components for Stripe |
| @stripe/stripe-js | 7.2.0 | MIT | Stripe JavaScript library |

### AI and Machine Learning
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| @anthropic-ai/sdk | 0.37.0 | MIT | Anthropic AI SDK |
| openai | 4.89.0 | MIT | OpenAI API client |

### Testing and Monitoring
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| supertest | 7.1.0 | MIT | HTTP assertion testing |
| puppeteer | 24.7.2 | Apache-2.0 | Headless browser automation |
| autocannon | 8.0.0 | MIT | HTTP benchmarking |
| msw | 2.7.5 | MIT | API mocking |

## TypeScript Type Definitions
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| @types/* (multiple packages) | Various | MIT | TypeScript type definitions |

## Development Tools
| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| typescript | 5.6.3 | Apache-2.0 | TypeScript compiler |
| tsx | 4.19.1 | MIT | TypeScript execution |
| esbuild | 0.25.0 | MIT | JavaScript bundler |
| postcss | 8.4.47 | MIT | CSS transformation tool |
| autoprefixer | 10.4.20 | MIT | CSS vendor prefixing |
| vite | 5.4.14 | MIT | Frontend build tooling |

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

Last generated: May 14, 2024
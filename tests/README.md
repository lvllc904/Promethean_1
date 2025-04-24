# DAC Marketplace Test Suite

This directory contains the comprehensive test suite for the DAC Marketplace platform, designed to ensure production readiness and robust functionality.

## Test Organization

The test suite is organized into several directories, each focusing on a different aspect of testing:

- `unit/`: Unit tests for individual components and services
- `integration/`: Tests for API endpoints and service interactions
- `load/`: Performance tests using Autocannon
- `e2e/`: End-to-end workflow tests using Puppeteer

## Running Tests

### Prerequisites

Make sure you have all dependencies installed:

```bash
# Install dependencies if you haven't already
npm install
```

### Running All Tests

Use the provided script to run all tests:

```bash
./run-tests.sh
```

Or run individual test suites using Vitest:

```bash
# Run all unit tests
npx vitest run tests/unit

# Run a specific test file
npx vitest run tests/unit/scheduler.test.ts

# Run integration tests
npx vitest run tests/integration

# Run tests in watch mode during development
npx vitest tests/unit
```

### Load Testing

Load tests require the application to be running. Start the application first, then run:

```bash
tsx tests/load/run.ts
```

### E2E Testing

E2E tests also require the application to be running:

```bash
npx vitest run --config vitest.e2e.config.ts
```

## Test Architecture

### Unit Tests

Unit tests focus on testing individual components and services in isolation. We use Vitest for running tests and Vi for mocking dependencies.

Key files:
- `scheduler.test.ts`: Tests for the scheduler service 
- `SchedulerSettings.test.tsx`: Tests for React component
- `ai-concierge.test.ts`: Tests for AI-powered review analysis
- `smart-contracts.test.ts`: Tests for blockchain interactions

### Integration Tests

Integration tests verify that different parts of the application work together correctly, focusing on API endpoints and database interactions.

Key file:
- `api.test.ts`: Tests for API endpoints including properties, scheduler, authentication

### Load Tests

Load tests measure performance under various loads, using Autocannon to simulate concurrent users.

Key file:
- `load/run.ts`: Configurable load testing script with detailed reporting

### E2E Tests

End-to-end tests use Puppeteer to simulate real user interactions in a browser environment.

Key file:
- `e2e/workflow.test.ts`: Tests for complete user workflows

## Best Practices

1. **Isolated Tests**: Each test should be independent and not rely on the state from previous tests
2. **Clean Setup/Teardown**: Use `beforeEach`/`afterEach` to ensure clean state between tests
3. **Mock External Dependencies**: Use Vi to mock external services and APIs
4. **Test Coverage**: Aim for high test coverage, especially for critical paths
5. **Realistic Data**: Use realistic test data whenever possible
6. **Performance**: Keep tests fast, particularly unit tests
7. **Test One Thing**: Each test should test one specific behavior

## Continuous Integration

These tests can be integrated into a CI/CD pipeline to ensure code quality before deployment.

## Contributing

When adding new features, please add corresponding tests to maintain code quality and prevent regressions.
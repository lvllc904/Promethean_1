#!/bin/bash

# Set colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}===== DAC Marketplace Test Suite =====${NC}\n"

# Run unit tests
echo -e "${CYAN}Running unit tests...${NC}"
npx vitest run tests/unit --reporter verbose

# Check if unit tests passed
if [ $? -eq 0 ]; then
  echo -e "\n${GREEN}✓ Unit tests passed${NC}\n"
else
  echo -e "\n${RED}✗ Unit tests failed${NC}\n"
  exit 1
fi

# Run integration tests (only if application is running)
echo -e "${CYAN}Running integration tests...${NC}"
npx vitest run tests/integration --reporter verbose

# Check if integration tests passed
if [ $? -eq 0 ]; then
  echo -e "\n${GREEN}✓ Integration tests passed${NC}\n"
else
  echo -e "\n${RED}✗ Integration tests failed${NC}\n"
  exit 1
fi

# Run E2E tests (only if the application is running)
echo -e "${YELLOW}Note: E2E tests require the application to be running on port 5000${NC}"
echo -e "Check if the application is running at http://localhost:5000"
read -p "Do you want to run E2E tests? (y/n): " run_e2e

if [ "$run_e2e" = "y" ]; then
  echo -e "${CYAN}Running E2E tests...${NC}"
  npx vitest run --config vitest.e2e.config.ts
  
  if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}✓ E2E tests passed${NC}\n"
  else
    echo -e "\n${RED}✗ E2E tests failed${NC}\n"
    exit 1
  fi
else
  echo -e "${YELLOW}Skipping E2E tests${NC}\n"
fi

# Run load tests (only if the application is running)
echo -e "${YELLOW}Note: Load tests require the application to be running on port 5000${NC}"
echo -e "Check if the application is running at http://localhost:5000"
read -p "Do you want to run load tests? (y/n): " run_load

if [ "$run_load" = "y" ]; then
  echo -e "${CYAN}Running load tests...${NC}"
  tsx tests/load/run.ts
  
  if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}✓ Load tests completed${NC}\n"
  else
    echo -e "\n${RED}✗ Load tests failed${NC}\n"
    exit 1
  fi
else
  echo -e "${YELLOW}Skipping load tests${NC}\n"
fi

echo -e "${GREEN}All tests completed successfully!${NC}"
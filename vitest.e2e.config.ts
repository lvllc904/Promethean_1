import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/e2e/**/*.test.ts'],
    environment: 'node',
    globals: true,
    setupFiles: ['tests/setup.ts'],
    testTimeout: 30000, // 30 seconds timeout for E2E tests
  },
});
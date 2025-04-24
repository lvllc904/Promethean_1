import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// No need to use matchers import directly as it's already included with jest-dom

// Clean up after each test
afterEach(() => {
  cleanup();
});

// Setup environment variables for testing
process.env.NODE_ENV = 'test';

// Mock browser globals if needed
global.fetch = vi.fn();
global.localStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  key: vi.fn(),
  length: 0,
};
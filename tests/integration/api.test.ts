import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import supertest from 'supertest';
import { createServer } from 'http';
import express from 'express';
import { registerRoutes } from '../../server/routes';

describe('API Integration Tests', () => {
  let app: express.Express;
  let server: ReturnType<typeof createServer>;
  let request: ReturnType<typeof supertest>;

  beforeAll(async () => {
    app = express();
    
    // Register the routes
    server = await registerRoutes(app);
    
    // Create a supertest instance
    request = supertest(app);
  });

  afterAll(() => {
    return new Promise<void>((resolve) => {
      server.close(() => resolve());
    });
  });

  describe('Properties API', () => {
    it('GET /api/properties should return a list of properties', async () => {
      const response = await request.get('/api/properties');
      
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });

    it('GET /api/properties/featured should return featured properties', async () => {
      const response = await request.get('/api/properties/featured');
      
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe('Scheduler API', () => {
    it('GET /api/admin/scheduler/status should return scheduler status', async () => {
      const response = await request.get('/api/admin/scheduler/status');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('isRunning');
      expect(response.body).toHaveProperty('reviewAnalysisInterval');
    });
  });

  describe('Authentication', () => {
    it('Unauthenticated users should not be able to access protected routes', async () => {
      // Example of a protected route test
      const response = await request.post('/api/admin/scheduler/start');
      
      // Should return 401 or 403 for unauthenticated requests
      expect([401, 403]).toContain(response.status);
    });
  });

  describe('Error Handling', () => {
    it('Should return 404 for non-existent routes', async () => {
      const response = await request.get('/api/non-existent-route');
      
      expect(response.status).toBe(404);
    });

    it('Should handle invalid request parameters appropriately', async () => {
      // Test with invalid parameters
      const response = await request.post('/api/admin/scheduler/interval')
        .send({ minutes: 'invalid' }); // minutes should be a number
      
      // Expect client error (400-range status)
      expect(response.status).toBeGreaterThanOrEqual(400);
      expect(response.status).toBeLessThan(500);
    });
  });
});
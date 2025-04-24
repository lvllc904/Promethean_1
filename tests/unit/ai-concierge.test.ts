import { describe, it, expect, vi, beforeEach } from 'vitest';
import { aiConcierge } from '../../server/services/ai-concierge';

// Mock OpenAI
vi.mock('openai', () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      chat: {
        completions: {
          create: vi.fn().mockResolvedValue({
            choices: [
              {
                message: {
                  content: JSON.stringify({
                    category: 'Feature Request',
                    summary: 'Add more property filters',
                    sentiment: 'Positive',
                    priority: 'Medium',
                    feasibility: 0.8,
                    proposalRecommended: true,
                  }),
                },
              },
            ],
          }),
        },
      },
    })),
  };
});

// Mock database interactions
vi.mock('../../server/db', () => ({
  db: {
    select: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    execute: vi.fn().mockResolvedValue([
      {
        id: 1,
        userId: 1,
        content: 'I wish there were more filters for searching properties.',
        createdAt: new Date(),
        processed: false,
      },
      {
        id: 2,
        userId: 2,
        content: 'The platform is amazing, but the loading time could be improved.',
        createdAt: new Date(),
        processed: false,
      },
    ]),
    update: vi.fn().mockReturnThis(),
    values: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    execute: vi.fn().mockResolvedValue({ rowCount: 2 }),
    insert: vi.fn().mockReturnThis(),
    values: vi.fn().mockReturnThis(),
    returning: vi.fn().mockResolvedValue([{ id: 1 }]),
  },
}));

describe('AI Concierge Service', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  
  describe('analyzeReviews', () => {
    it('should process unprocessed reviews and generate proposals', async () => {
      const result = await aiConcierge.analyzeReviews();
      
      // Check we got results
      expect(result).toBeDefined();
      expect(result.processed).toBeGreaterThan(0);
    });
    
    it('should mark reviews as processed', async () => {
      await aiConcierge.analyzeReviews();
      
      // Verify update was called
      const db = await import('../../server/db');
      expect(db.db.update).toHaveBeenCalled();
    });
    
    it('should generate governance proposals when recommended', async () => {
      await aiConcierge.analyzeReviews();
      
      // Verify insert was called to create proposals
      const db = await import('../../server/db');
      expect(db.db.insert).toHaveBeenCalled();
    });
    
    it('should return empty results when no unprocessed reviews', async () => {
      // Mock empty result set
      const db = await import('../../server/db');
      db.db.execute.mockResolvedValueOnce([]);
      
      const result = await aiConcierge.analyzeReviews();
      
      expect(result.processed).toBe(0);
    });
  });
  
  describe('analyzeReviewContent', () => {
    it('should analyze review content using OpenAI', async () => {
      const review = {
        id: 1,
        userId: 1,
        content: 'The search filters are limited. Please add more options.',
        createdAt: new Date(),
        processed: false,
      };
      
      const analysis = await aiConcierge.analyzeReviewContent(review.content);
      
      // Verify OpenAI was called
      const OpenAI = (await import('openai')).default;
      expect(OpenAI).toHaveBeenCalled();
      
      // Check analysis results
      expect(analysis).toHaveProperty('category');
      expect(analysis).toHaveProperty('summary');
      expect(analysis).toHaveProperty('sentiment');
      expect(analysis).toHaveProperty('priority');
      expect(analysis).toHaveProperty('feasibility');
      expect(analysis).toHaveProperty('proposalRecommended');
    });
    
    it('should handle OpenAI errors gracefully', async () => {
      // Mock OpenAI to throw an error
      const OpenAI = (await import('openai')).default;
      OpenAI.mockImplementationOnce(() => ({
        chat: {
          completions: {
            create: vi.fn().mockRejectedValue(new Error('API Error')),
          },
        },
      }));
      
      // Should not throw but return null
      const result = await aiConcierge.analyzeReviewContent('Test content');
      expect(result).toBeNull();
    });
  });
});
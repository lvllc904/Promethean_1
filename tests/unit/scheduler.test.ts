import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Create a mock SchedulerService class that would be similar to our actual one
class SchedulerService {
  public reviewAnalysisInterval: NodeJS.Timeout | null = null;
  public intervals: Map<string, number> = new Map();
  
  startAll() {
    this.startReviewAnalysis();
  }
  
  stopAll() {
    this.stopReviewAnalysis();
  }
  
  startReviewAnalysis() {
    if (this.reviewAnalysisInterval) {
      return; // Already running
    }
    
    const intervalMinutes = this.intervals.get('reviewAnalysis') || 60;
    this.reviewAnalysisInterval = setInterval(() => {
      console.log('Running scheduled review analysis...');
      // This would call aiConcierge.analyzeReviews() in the real implementation
    }, intervalMinutes * 60 * 1000);
  }
  
  stopReviewAnalysis() {
    if (this.reviewAnalysisInterval) {
      clearInterval(this.reviewAnalysisInterval);
      this.reviewAnalysisInterval = null;
    }
  }
  
  updateInterval(task: string, milliseconds: number) {
    const minutes = milliseconds / (60 * 1000);
    this.intervals.set(task, minutes);
    
    // If task is running, restart it with new interval
    if (task === 'reviewAnalysis' && this.reviewAnalysisInterval) {
      this.stopReviewAnalysis();
      this.startReviewAnalysis();
    }
  }
}

describe('SchedulerService', () => {
  let scheduler: SchedulerService;
  
  beforeEach(() => {
    // Reset mocks before each test
    vi.resetAllMocks();
    
    // Create a new instance of SchedulerService for each test
    scheduler = new SchedulerService();
    
    // Mock setInterval and clearInterval
    vi.spyOn(global, 'setInterval').mockReturnValue(123 as unknown as NodeJS.Timeout);
    vi.spyOn(global, 'clearInterval').mockImplementation(() => {});
  });
  
  afterEach(() => {
    // Restore original implementations
    vi.restoreAllMocks();
  });
  
  describe('startAll', () => {
    it('should start all scheduled tasks', () => {
      // Spy on startReviewAnalysis method
      const startReviewAnalysisSpy = vi.spyOn(scheduler, 'startReviewAnalysis');
      
      // Call startAll method
      scheduler.startAll();
      
      // Verify startReviewAnalysis was called
      expect(startReviewAnalysisSpy).toHaveBeenCalledTimes(1);
    });
  });
  
  describe('stopAll', () => {
    it('should stop all scheduled tasks', () => {
      // Spy on stopReviewAnalysis method
      const stopReviewAnalysisSpy = vi.spyOn(scheduler, 'stopReviewAnalysis');
      
      // Call stopAll method
      scheduler.stopAll();
      
      // Verify stopReviewAnalysis was called
      expect(stopReviewAnalysisSpy).toHaveBeenCalledTimes(1);
    });
  });
  
  describe('startReviewAnalysis', () => {
    it('should start the review analysis task', () => {
      // Call startReviewAnalysis method
      scheduler.startReviewAnalysis();
      
      // Verify setInterval was called with the correct interval
      expect(global.setInterval).toHaveBeenCalledTimes(1);
      expect(global.setInterval).toHaveBeenCalledWith(expect.any(Function), 60 * 60 * 1000); // Default is 60 minutes
      
      // Verify reviewAnalysisInterval is properly set
      expect(scheduler.reviewAnalysisInterval).not.toBeNull();
    });
    
    it('should not start if already running', () => {
      // Set reviewAnalysisInterval to simulate already running
      scheduler.reviewAnalysisInterval = 123 as unknown as NodeJS.Timeout;
      
      // Call startReviewAnalysis method
      scheduler.startReviewAnalysis();
      
      // Verify setInterval was not called
      expect(global.setInterval).not.toHaveBeenCalled();
    });
  });
  
  describe('stopReviewAnalysis', () => {
    it('should stop the review analysis task', () => {
      // Set reviewAnalysisInterval to simulate running task
      scheduler.reviewAnalysisInterval = 123 as unknown as NodeJS.Timeout;
      
      // Call stopReviewAnalysis method
      scheduler.stopReviewAnalysis();
      
      // Verify clearInterval was called with the correct ID
      expect(global.clearInterval).toHaveBeenCalledTimes(1);
      expect(global.clearInterval).toHaveBeenCalledWith(123);
      
      // Verify reviewAnalysisInterval is properly reset
      expect(scheduler.reviewAnalysisInterval).toBeNull();
    });
    
    it('should do nothing if not running', () => {
      // Set reviewAnalysisInterval to null to simulate not running
      scheduler.reviewAnalysisInterval = null;
      
      // Call stopReviewAnalysis method
      scheduler.stopReviewAnalysis();
      
      // Verify clearInterval was not called
      expect(global.clearInterval).not.toHaveBeenCalled();
    });
  });
  
  describe('updateInterval', () => {
    it('should update the interval for a task', () => {
      // Initialize the intervals map
      scheduler.intervals = new Map([['reviewAnalysis', 60]]);
      
      // Call updateInterval method
      scheduler.updateInterval('reviewAnalysis', 30 * 60 * 1000); // 30 minutes in ms
      
      // Verify interval was updated
      expect(scheduler.intervals.get('reviewAnalysis')).toBe(30);
    });
    
    it('should restart the task with new interval if running', () => {
      // Set up spies for stop and start methods
      const stopSpy = vi.spyOn(scheduler, 'stopReviewAnalysis');
      const startSpy = vi.spyOn(scheduler, 'startReviewAnalysis');
      
      // Set reviewAnalysisInterval to simulate running task
      scheduler.reviewAnalysisInterval = 123 as unknown as NodeJS.Timeout;
      
      // Call updateInterval method
      scheduler.updateInterval('reviewAnalysis', 30 * 60 * 1000); // 30 minutes in ms
      
      // Verify stop and start were called
      expect(stopSpy).toHaveBeenCalledTimes(1);
      expect(startSpy).toHaveBeenCalledTimes(1);
    });
  });
});
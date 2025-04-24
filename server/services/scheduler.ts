import { aiConcierge } from './ai-concierge';

/**
 * Scheduler Service - Handles periodic tasks like review analysis
 */
export class SchedulerService {
  private reviewAnalysisInterval: NodeJS.Timeout | null = null;
  private intervals: Map<string, number> = new Map();
  
  constructor() {
    // Default intervals in milliseconds
    this.intervals.set('reviewAnalysis', 1 * 60 * 60 * 1000); // 1 hour
    this.intervals.set('governanceProcessing', 24 * 60 * 60 * 1000); // 24 hours
  }
  
  /**
   * Start all scheduled tasks
   */
  startAll(): void {
    this.startReviewAnalysis();
    console.log('All scheduled tasks started.');
  }
  
  /**
   * Stop all scheduled tasks
   */
  stopAll(): void {
    this.stopReviewAnalysis();
    console.log('All scheduled tasks stopped.');
  }
  
  /**
   * Start periodic review analysis
   */
  startReviewAnalysis(): void {
    if (this.reviewAnalysisInterval) {
      console.log('Review analysis scheduler already running.');
      return;
    }
    
    const interval = this.intervals.get('reviewAnalysis') || 3600000; // Default to 1 hour
    
    // Run immediately on startup
    this.runReviewAnalysis();
    
    // Then schedule regular runs
    this.reviewAnalysisInterval = setInterval(() => {
      this.runReviewAnalysis();
    }, interval);
    
    console.log(`Review analysis scheduler started. Will run every ${interval / (60 * 1000)} minutes.`);
  }
  
  /**
   * Stop periodic review analysis
   */
  stopReviewAnalysis(): void {
    if (this.reviewAnalysisInterval) {
      clearInterval(this.reviewAnalysisInterval);
      this.reviewAnalysisInterval = null;
      console.log('Review analysis scheduler stopped.');
    }
  }
  
  /**
   * Run the review analysis process once
   */
  private async runReviewAnalysis(): Promise<void> {
    try {
      console.log('Running scheduled review analysis...');
      await aiConcierge.analyzeReviews();
      console.log('Scheduled review analysis completed.');
    } catch (error) {
      console.error('Error in scheduled review analysis:', error);
    }
  }
  
  /**
   * Update the interval for a specific task
   */
  updateInterval(taskName: string, intervalMs: number): void {
    if (intervalMs < 60000) { // Minimum 1 minute
      throw new Error('Interval must be at least 1 minute.');
    }
    
    this.intervals.set(taskName, intervalMs);
    
    // Restart the task if it's running
    if (taskName === 'reviewAnalysis' && this.reviewAnalysisInterval) {
      this.stopReviewAnalysis();
      this.startReviewAnalysis();
    }
    
    console.log(`Updated ${taskName} interval to ${intervalMs / (60 * 1000)} minutes.`);
  }
}

// Export a singleton instance
export const scheduler = new SchedulerService();
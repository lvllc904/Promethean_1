import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SchedulerSettings from '../../client/src/pages/admin/components/SchedulerSettings';
import userEvent from '@testing-library/user-event';
import React from 'react';

// Mock useToast
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

// Mock fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('SchedulerSettings Component', () => {
  beforeEach(() => {
    // Reset mocks
    vi.resetAllMocks();
    
    // Setup mock fetch response for status
    mockFetch.mockImplementation(async (url) => {
      if (url === '/api/admin/scheduler/status') {
        return {
          ok: true,
          json: async () => ({
            isRunning: true,
            reviewAnalysisInterval: 60,
            nextRunAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
          }),
        };
      }
      
      return {
        ok: true,
        json: async () => ({}),
      };
    });
  });
  
  it('renders the scheduler settings component', async () => {
    render(<SchedulerSettings />);
    
    // Wait for the component to load data
    await waitFor(() => {
      expect(screen.getByText('AI Review Analysis Scheduler')).toBeInTheDocument();
    });
    
    // Verify status is displayed
    await waitFor(() => {
      expect(screen.getByText('Running')).toBeInTheDocument();
    });
    
    // Verify interval is displayed
    await waitFor(() => {
      expect(screen.getByText('60 minutes')).toBeInTheDocument();
    });
  });
  
  it('handles API error gracefully', async () => {
    // Mock fetch to return an error
    mockFetch.mockImplementationOnce(async () => ({
      ok: false,
      status: 500,
    }));
    
    render(<SchedulerSettings />);
    
    // Component should render without crashing
    expect(screen.getByText('AI Review Analysis Scheduler')).toBeInTheDocument();
  });
  
  it('handles stop button click', async () => {
    render(<SchedulerSettings />);
    
    // Wait for the component to load
    await waitFor(() => {
      expect(screen.getByText('Running')).toBeInTheDocument();
    });
    
    // Setup mock response for stop action
    mockFetch.mockImplementationOnce(async () => ({
      ok: true,
    }));
    
    // Click the stop button
    const stopButton = screen.getByText('Stop Scheduler');
    fireEvent.click(stopButton);
    
    // Verify API call was made
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/admin/scheduler/stop', {
        method: 'POST',
      });
    });
  });
  
  it('handles interval update', async () => {
    render(<SchedulerSettings />);
    
    // Wait for component to load
    await waitFor(() => {
      expect(screen.getByText('Running')).toBeInTheDocument();
    });
    
    // Setup mock response for interval update
    mockFetch.mockImplementationOnce(async () => ({
      ok: true,
    }));
    
    // Change interval value
    const intervalInput = screen.getByRole('spinbutton');
    await userEvent.clear(intervalInput);
    await userEvent.type(intervalInput, '30');
    
    // Click update button
    const updateButton = screen.getByText('Update');
    fireEvent.click(updateButton);
    
    // Verify API call
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/admin/scheduler/interval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          task: 'reviewAnalysis',
          minutes: 30,
        }),
      });
    });
  });
  
  it('handles manual analysis button click', async () => {
    render(<SchedulerSettings />);
    
    // Wait for component to load
    await waitFor(() => {
      expect(screen.getByText('Running')).toBeInTheDocument();
    });
    
    // Setup mock response
    mockFetch.mockImplementationOnce(async () => ({
      ok: true,
    }));
    
    // Click run now button
    const runButton = screen.getByText('Run Review Analysis Now');
    fireEvent.click(runButton);
    
    // Verify API call
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/reviews/analyze', {
        method: 'POST',
      });
    });
  });
});
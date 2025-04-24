import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SchedulerStatus {
  isRunning: boolean;
  reviewAnalysisInterval: number; // in minutes
  nextRunAt: string | null;
}

export default function SchedulerSettings() {
  const [status, setStatus] = useState<SchedulerStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [newInterval, setNewInterval] = useState<number>(60);
  const { toast } = useToast();

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/scheduler/status');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStatus(data);
    } catch (error) {
      console.error('Failed to fetch scheduler status:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch scheduler status',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    // Refresh every 30 seconds
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleStart = async () => {
    setUpdating(true);
    try {
      const response = await fetch('/api/admin/scheduler/start', {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      toast({
        title: 'Success',
        description: 'Scheduler started successfully',
      });
      fetchStatus();
    } catch (error) {
      console.error('Failed to start scheduler:', error);
      toast({
        title: 'Error',
        description: 'Failed to start scheduler',
        variant: 'destructive',
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleStop = async () => {
    setUpdating(true);
    try {
      const response = await fetch('/api/admin/scheduler/stop', {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      toast({
        title: 'Success',
        description: 'Scheduler stopped successfully',
      });
      fetchStatus();
    } catch (error) {
      console.error('Failed to stop scheduler:', error);
      toast({
        title: 'Error',
        description: 'Failed to stop scheduler',
        variant: 'destructive',
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleUpdateInterval = async () => {
    if (newInterval < 1) {
      toast({
        title: 'Invalid interval',
        description: 'Interval must be at least 1 minute',
        variant: 'destructive',
      });
      return;
    }

    setUpdating(true);
    try {
      const response = await fetch('/api/admin/scheduler/interval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          task: 'reviewAnalysis',
          minutes: newInterval,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      toast({
        title: 'Success',
        description: `Review analysis interval updated to ${newInterval} minutes`,
      });
      fetchStatus();
    } catch (error) {
      console.error('Failed to update scheduler interval:', error);
      toast({
        title: 'Error',
        description: 'Failed to update scheduler interval',
        variant: 'destructive',
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleManualAnalysis = async () => {
    setUpdating(true);
    try {
      const response = await fetch('/api/reviews/analyze', {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      toast({
        title: 'Success',
        description: 'Review analysis initiated',
      });
    } catch (error) {
      console.error('Failed to initiate review analysis:', error);
      toast({
        title: 'Error',
        description: 'Failed to initiate review analysis',
        variant: 'destructive',
      });
    } finally {
      setUpdating(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Review Analysis Scheduler</CardTitle>
        <CardDescription>
          Configure how often reviews are automatically analyzed and transformed into governance proposals
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Status</Label>
                <div className="mt-1 text-lg font-medium">
                  {status?.isRunning ? (
                    <span className="text-green-600 flex items-center">
                      <span className="mr-2 h-3 w-3 rounded-full bg-green-600 inline-block"></span>
                      Running
                    </span>
                  ) : (
                    <span className="text-red-600 flex items-center">
                      <span className="mr-2 h-3 w-3 rounded-full bg-red-600 inline-block"></span>
                      Stopped
                    </span>
                  )}
                </div>
              </div>
              <div>
                <Label>Current Interval</Label>
                <div className="mt-1 text-lg font-medium">
                  {status?.reviewAnalysisInterval} minutes
                </div>
              </div>
            </div>

            {status?.nextRunAt && (
              <div>
                <Label>Next Run</Label>
                <div className="mt-1 text-lg font-medium">
                  {new Date(status.nextRunAt).toLocaleString()}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Button
                  className="w-full"
                  variant={status?.isRunning ? 'outline' : 'default'}
                  disabled={updating || (status?.isRunning ?? false)}
                  onClick={handleStart}
                >
                  {updating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                  Start Scheduler
                </Button>
              </div>
              <div>
                <Button
                  className="w-full"
                  variant={status?.isRunning ? 'default' : 'outline'}
                  disabled={updating || !(status?.isRunning ?? false)}
                  onClick={handleStop}
                >
                  {updating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                  Stop Scheduler
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t">
              <Label>Update Interval (minutes)</Label>
              <div className="flex items-center mt-2 gap-2">
                <Input
                  type="number"
                  min="1"
                  value={newInterval}
                  onChange={(e) => setNewInterval(parseInt(e.target.value) || 1)}
                />
                <Button 
                  disabled={updating} 
                  onClick={handleUpdateInterval}
                >
                  {updating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                  Update
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t">
              <Button 
                variant="secondary" 
                className="w-full" 
                disabled={updating}
                onClick={handleManualAnalysis}
              >
                {updating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                Run Review Analysis Now
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
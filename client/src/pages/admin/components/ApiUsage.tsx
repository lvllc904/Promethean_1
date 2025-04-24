import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, BarChart2, TrendingUp, DownloadCloud, RefreshCw, Search, Activity } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// For date range selection
import { DateRangePicker } from "./DateRangePicker";
import { addDays, format } from "date-fns";

// For visualizations
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

const ApiUsage = () => {
  const { toast } = useToast();
  const [dateRange, setDateRange] = useState({
    from: addDays(new Date(), -7),
    to: new Date(),
  });
  const [viewMode, setViewMode] = useState('table');
  const [integrationFilter, setIntegrationFilter] = useState('all');
  const [endpointFilter, setEndpointFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState<any>(null);
  
  // Fetch usage logs
  const { data: logs, isLoading, error, refetch } = useQuery({
    queryKey: [
      '/api/admin/usage', 
      { 
        start: format(dateRange.from, 'yyyy-MM-dd'), 
        end: format(dateRange.to, 'yyyy-MM-dd'),
        integration: integrationFilter !== 'all' ? integrationFilter : undefined,
        endpoint: endpointFilter || undefined,
        status: statusFilter !== 'all' ? statusFilter : undefined
      }
    ],
    retry: 1,
  });
  
  // Fetch integrations for filtering
  const { data: integrations } = useQuery({
    queryKey: ['/api/admin/integrations'],
    retry: 1,
  });
  
  const handleViewLog = (log: any) => {
    setSelectedLog(log);
    setDetailsOpen(true);
  };
  
  const prepareChartData = () => {
    if (!logs || !logs.length) return [];
    
    // Group data by date
    const groupedByDate = logs.reduce((acc: any, log: any) => {
      const date = new Date(log.timestamp).toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = {
          date,
          count: 0,
          errors: 0,
          totalResponseTime: 0,
          totalCost: 0
        };
      }
      
      acc[date].count += 1;
      
      if (log.statusCode >= 400) {
        acc[date].errors += 1;
      }
      
      if (log.responseTime) {
        acc[date].totalResponseTime += log.responseTime;
      }
      
      if (log.cost) {
        acc[date].totalCost += parseFloat(log.cost);
      }
      
      return acc;
    }, {});
    
    // Convert to array and calculate averages
    return Object.values(groupedByDate).map((day: any) => ({
      ...day,
      averageResponseTime: day.count > 0 ? Math.round(day.totalResponseTime / day.count) : 0,
      cost: parseFloat(day.totalCost.toFixed(4))
    }));
  };
  
  // Count logs by endpoint
  const endpointCounts = logs && logs.reduce((acc: any, log: any) => {
    const endpoint = log.endpoint;
    acc[endpoint] = (acc[endpoint] || 0) + 1;
    return acc;
  }, {});
  
  const topEndpoints = endpointCounts && Object.entries(endpointCounts)
    .sort((a: any, b: any) => b[1] - a[1])
    .slice(0, 10)
    .map(([endpoint, count]: [string, number]) => ({
      endpoint,
      count
    }));
  
  // Calculate success rate
  const successRate = logs && logs.length > 0
    ? Math.round((logs.filter((log: any) => log.statusCode < 400).length / logs.length) * 100)
    : 0;
  
  // Calculate average response time
  const avgResponseTime = logs && logs.length > 0
    ? Math.round(logs.reduce((sum: number, log: any) => sum + (log.responseTime || 0), 0) / logs.length)
    : 0;
  
  // Calculate total API costs
  const totalCost = logs && logs.length > 0
    ? logs.reduce((sum: number, log: any) => sum + parseFloat(log.cost || 0), 0).toFixed(4)
    : '0.00';
  
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>API Usage</CardTitle>
          <CardDescription>Monitor API usage and track service consumption</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>API Usage</CardTitle>
          <CardDescription>Monitor API usage and track service consumption</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to load API usage data. Please try again later.
            </AlertDescription>
          </Alert>
          <div className="mt-4">
            <Button onClick={() => refetch()}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  const chartData = prepareChartData();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>API Usage</CardTitle>
        <CardDescription>Monitor API usage and track service consumption</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Filters and Date Range */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Date Range</h3>
            <DateRangePicker
              from={dateRange.from}
              to={dateRange.to}
              onSelect={(range) => {
                if (range?.from && range?.to) {
                  setDateRange({ from: range.from, to: range.to });
                }
              }}
            />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium">View Mode</h3>
            <Tabs 
              defaultValue="table" 
              value={viewMode}
              onValueChange={setViewMode}
              className="w-full"
            >
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="table">Table</TabsTrigger>
                <TabsTrigger value="chart">Charts</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Download Data</h3>
            <Button className="w-full">
              <DownloadCloud className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>
        
        {/* Additional Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium">Integration</label>
            <Select 
              value={integrationFilter} 
              onValueChange={setIntegrationFilter}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="All Integrations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Integrations</SelectItem>
                {integrations && integrations.map((integration: any) => (
                  <SelectItem key={integration.id} value={integration.id.toString()}>
                    {integration.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium">Endpoint</label>
            <div className="mt-1 relative">
              <Input
                value={endpointFilter}
                onChange={(e) => setEndpointFilter(e.target.value)}
                placeholder="Filter by endpoint"
                className="pl-8"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Status</label>
            <Select 
              value={statusFilter} 
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="success">Success (2xx)</SelectItem>
                <SelectItem value="redirect">Redirect (3xx)</SelectItem>
                <SelectItem value="clientError">Client Error (4xx)</SelectItem>
                <SelectItem value="serverError">Server Error (5xx)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Stats Overview */}
        {viewMode === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Requests</p>
                    <h3 className="text-2xl font-bold">{logs ? logs.length : 0}</h3>
                  </div>
                  <Activity className="h-6 w-6 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                    <h3 className="text-2xl font-bold">{successRate}%</h3>
                  </div>
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                    successRate >= 95 ? 'bg-green-100 text-green-700' :
                    successRate >= 80 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {successRate >= 95 ? '✓' : '!'}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg Response Time</p>
                    <h3 className="text-2xl font-bold">{avgResponseTime} ms</h3>
                  </div>
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Cost</p>
                    <h3 className="text-2xl font-bold">${totalCost}</h3>
                  </div>
                  <BarChart2 className="h-6 w-6 text-purple-500" />
                </div>
              </CardContent>
            </Card>
            
            {topEndpoints && topEndpoints.length > 0 && (
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-base">Top Endpoints</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={topEndpoints}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="endpoint" type="category" width={150} />
                      <Tooltip />
                      <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}
            
            {chartData.length > 0 && (
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-base">API Requests Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                      data={chartData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} name="Requests" />
                      <Area type="monotone" dataKey="errors" stroke="#ff5252" fill="#ff5252" fillOpacity={0.3} name="Errors" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}
          </div>
        )}
        
        {/* Charts View */}
        {viewMode === 'chart' && chartData.length > 0 && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">API Requests Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} name="Total Requests" />
                    <Area type="monotone" dataKey="errors" stroke="#ff5252" fill="#ff5252" fillOpacity={0.3} name="Errors" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Average Response Time (ms)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="averageResponseTime" stroke="#82ca9d" name="Avg Response Time (ms)" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">API Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="cost" fill="#ffc658" name="Cost ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}
        
        {/* Table View */}
        {viewMode === 'table' && (
          <div>
            {logs && logs.length === 0 ? (
              <div className="text-center py-8">
                <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium">No API Usage Data</h3>
                <p className="text-muted-foreground mt-2">
                  No API requests were found matching your filter criteria.
                </p>
              </div>
            ) : (
              <div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>Integration</TableHead>
                        <TableHead>Endpoint</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Time (ms)</TableHead>
                        <TableHead>Cost</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {logs && logs.map((log: any) => {
                        const integration = integrations?.find((i: any) => i.id === log.integrationId);
                        return (
                          <TableRow key={log.id}>
                            <TableCell>
                              {new Date(log.timestamp).toLocaleString()}
                            </TableCell>
                            <TableCell>
                              {integration?.name || 'Unknown'}
                            </TableCell>
                            <TableCell className="font-mono text-xs">
                              {log.endpoint}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                {log.requestMethod}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  log.statusCode < 300 ? "success" :
                                  log.statusCode < 400 ? "outline" :
                                  log.statusCode < 500 ? "warning" : "destructive"
                                }
                              >
                                {log.statusCode}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {log.responseTime || '-'}
                            </TableCell>
                            <TableCell>
                              ${log.cost ? parseFloat(log.cost).toFixed(4) : '0.0000'}
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" onClick={() => handleViewLog(log)}>
                                Details
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      {/* Log Details Dialog */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>API Request Details</DialogTitle>
            <DialogDescription>
              Detailed information about this API request
            </DialogDescription>
          </DialogHeader>
          
          {selectedLog && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Timestamp</p>
                  <p className="text-sm">{new Date(selectedLog.timestamp).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Integration</p>
                  <p className="text-sm">
                    {integrations?.find((i: any) => i.id === selectedLog.integrationId)?.name || 'Unknown'}
                  </p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium">Endpoint</p>
                <p className="text-sm font-mono">{selectedLog.endpoint}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium">Method</p>
                  <Badge variant="outline">{selectedLog.requestMethod}</Badge>
                </div>
                <div>
                  <p className="text-sm font-medium">Status Code</p>
                  <Badge
                    variant={
                      selectedLog.statusCode < 300 ? "success" :
                      selectedLog.statusCode < 400 ? "outline" :
                      selectedLog.statusCode < 500 ? "warning" : "destructive"
                    }
                  >
                    {selectedLog.statusCode}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium">Response Time</p>
                  <p className="text-sm">{selectedLog.responseTime || '-'} ms</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Request Size</p>
                  <p className="text-sm">{selectedLog.requestSize ? `${selectedLog.requestSize} bytes` : 'Unknown'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Response Size</p>
                  <p className="text-sm">{selectedLog.responseSize ? `${selectedLog.responseSize} bytes` : 'Unknown'}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium">Cost</p>
                <p className="text-sm">${selectedLog.cost ? parseFloat(selectedLog.cost).toFixed(4) : '0.0000'}</p>
              </div>
              
              {selectedLog.errorMessage && (
                <div>
                  <p className="text-sm font-medium text-red-500">Error Message</p>
                  <Alert variant="destructive" className="mt-1">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      {selectedLog.errorMessage}
                    </AlertDescription>
                  </Alert>
                </div>
              )}
              
              <div>
                <p className="text-sm font-medium">User ID</p>
                <p className="text-sm">{selectedLog.userId || 'System'}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ApiUsage;
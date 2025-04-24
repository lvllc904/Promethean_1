import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend 
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

interface ApiUsageSummary {
  totalRequests: number;
  totalErrors: number;
  totalCost: number;
  requestsByProvider: Array<{
    providerId: number;
    providerName: string;
    requestCount: number;
    errorCount: number;
    cost: number;
  }>;
  requestsByDate: Array<{
    date: string;
    requestCount: number;
    errorCount: number;
    cost: number;
  }>;
}

interface ApiUsageLog {
  id: number;
  integrationId: number;
  integrationName: string;
  providerId: number;
  providerName: string;
  endpoint: string;
  statusCode: number;
  responseTime: number;
  requestSize: number;
  responseSize: number;
  cost: number;
  timestamp: string;
  parameters: Record<string, any> | null;
  errorMessage: string | null;
}

// Colors for pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#8DD1E1'];

export default function ApiUsage() {
  const [timeframe, setTimeframe] = useState('7d');
  const [activeTab, setActiveTab] = useState('overview');
  
  // Fetch usage summary
  const { 
    data: usageSummary, 
    isLoading: isLoadingSummary, 
    error: summaryError 
  } = useQuery({
    queryKey: ['/api/admin/api-usage-summary', timeframe],
    queryFn: () => fetch(`/api/admin/api-usage-summary?timeframe=${timeframe}`).then(res => res.json()),
    retry: 1,
  });
  
  // Fetch usage logs
  const { 
    data: usageLogs, 
    isLoading: isLoadingLogs, 
    error: logsError 
  } = useQuery({
    queryKey: ['/api/admin/api-usage-logs', timeframe],
    queryFn: () => fetch(`/api/admin/api-usage-logs?timeframe=${timeframe}`).then(res => res.json()),
    retry: 1,
  });
  
  // Format cost for display
  const formatCost = (cost: number) => {
    return `$${cost.toFixed(4)}`;
  };
  
  // Format timestamp for display
  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };
  
  // Prepare data for provider chart
  const prepareProviderChartData = (data: ApiUsageSummary) => {
    if (!data || !data.requestsByProvider) return [];
    
    return data.requestsByProvider.map(item => ({
      name: item.providerName,
      requests: item.requestCount,
      errors: item.errorCount,
      cost: item.cost
    }));
  };
  
  // Prepare data for daily chart
  const prepareDailyChartData = (data: ApiUsageSummary) => {
    if (!data || !data.requestsByDate) return [];
    
    return data.requestsByDate.map(item => ({
      name: item.date,
      requests: item.requestCount,
      errors: item.errorCount,
      cost: item.cost
    }));
  };
  
  // Prepare data for pie chart
  const preparePieChartData = (data: ApiUsageSummary) => {
    if (!data || !data.requestsByProvider) return [];
    
    return data.requestsByProvider.map(item => ({
      name: item.providerName,
      value: item.requestCount
    }));
  };
  
  if (isLoadingSummary || isLoadingLogs) {
    return <div className="flex justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }
  
  if (summaryError || logsError) {
    return <div className="text-red-500">Error loading API usage data. Please try again.</div>;
  }
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">API Usage</h3>
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Last 24 hours</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="logs">Request Logs</TabsTrigger>
          <TabsTrigger value="providers">By Provider</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          {usageSummary ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{usageSummary.totalRequests}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {usageSummary.totalRequests > 0 
                        ? `${((usageSummary.totalErrors / usageSummary.totalRequests) * 100).toFixed(1)}%` 
                        : '0%'}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{formatCost(usageSummary.totalCost)}</div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Daily Request Volume</CardTitle>
                  <CardDescription>
                    API requests over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={prepareDailyChartData(usageSummary)}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value, name) => [
                          name === 'cost' ? formatCost(value as number) : value, 
                          name.charAt(0).toUpperCase() + name.slice(1)
                        ]} />
                        <Legend />
                        <Bar dataKey="requests" fill="#0088FE" name="Requests" />
                        <Bar dataKey="errors" fill="#FF8042" name="Errors" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Request Distribution by Provider</CardTitle>
                  <CardDescription>
                    Breakdown of API usage by provider
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={preparePieChartData(usageSummary)}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {preparePieChartData(usageSummary).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value} requests`, 'Volume']} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No usage data available for the selected timeframe.
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>API Request Logs</CardTitle>
              <CardDescription>
                Detailed log of API requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Endpoint</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Response Time</TableHead>
                      <TableHead>Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {!usageLogs || usageLogs.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          No request logs found for the selected timeframe.
                        </TableCell>
                      </TableRow>
                    ) : (
                      usageLogs.map((log: ApiUsageLog) => (
                        <TableRow key={log.id}>
                          <TableCell className="whitespace-nowrap">
                            {formatTimestamp(log.timestamp)}
                          </TableCell>
                          <TableCell>{log.providerName}</TableCell>
                          <TableCell className="font-mono text-xs">
                            {log.endpoint}
                          </TableCell>
                          <TableCell>
                            {log.statusCode >= 200 && log.statusCode < 300 ? (
                              <Badge className="bg-green-100 text-green-800">
                                {log.statusCode}
                              </Badge>
                            ) : log.statusCode >= 400 && log.statusCode < 500 ? (
                              <Badge variant="destructive">
                                {log.statusCode}
                              </Badge>
                            ) : log.statusCode >= 500 ? (
                              <Badge variant="destructive">
                                {log.statusCode}
                              </Badge>
                            ) : (
                              <Badge variant="outline">
                                {log.statusCode}
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {log.responseTime}ms
                          </TableCell>
                          <TableCell>
                            {formatCost(log.cost)}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="providers">
          <Card>
            <CardHeader>
              <CardTitle>Provider Usage</CardTitle>
              <CardDescription>
                API usage breakdown by provider
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={prepareProviderChartData(usageSummary)}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [
                      name === 'cost' ? formatCost(value as number) : value, 
                      name.charAt(0).toUpperCase() + name.slice(1)
                    ]} />
                    <Legend />
                    <Bar dataKey="requests" fill="#0088FE" name="Requests" />
                    <Bar dataKey="errors" fill="#FF8042" name="Errors" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Provider</TableHead>
                      <TableHead>Requests</TableHead>
                      <TableHead>Errors</TableHead>
                      <TableHead>Error Rate</TableHead>
                      <TableHead>Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {!usageSummary || !usageSummary.requestsByProvider || usageSummary.requestsByProvider.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                          No provider usage data available for the selected timeframe.
                        </TableCell>
                      </TableRow>
                    ) : (
                      usageSummary.requestsByProvider.map((provider) => (
                        <TableRow key={provider.providerId}>
                          <TableCell className="font-medium">{provider.providerName}</TableCell>
                          <TableCell>{provider.requestCount}</TableCell>
                          <TableCell>{provider.errorCount}</TableCell>
                          <TableCell>
                            {provider.requestCount > 0 
                              ? `${((provider.errorCount / provider.requestCount) * 100).toFixed(1)}%` 
                              : '0%'}
                          </TableCell>
                          <TableCell>{formatCost(provider.cost)}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
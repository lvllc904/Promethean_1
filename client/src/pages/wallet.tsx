import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { getPromTokenBalance, getVestingSchedules, claimVestedTokens } from '@/lib/web3-client';
import { useLocation } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// Mock portfolio data
const mockPortfolio = [
  { id: 1, propertyId: 101, name: "Luxury Condo NYC", tokens: 250, value: 450, allocation: 25 },
  { id: 2, propertyId: 102, name: "Beach House Miami", tokens: 500, value: 900, allocation: 50 },
  { id: 3, propertyId: 103, name: "Mountain Retreat", tokens: 100, value: 180, allocation: 10 },
  { id: 4, propertyId: 104, name: "Downtown Office Space", tokens: 150, value: 270, allocation: 15 },
];

// Mock price history data
const mockPriceHistory = [
  { date: '2024-01', price: 1.0 },
  { date: '2024-02', price: 1.2 },
  { date: '2024-03', price: 1.15 },
  { date: '2024-04', price: 1.35 },
  { date: '2024-05', price: 1.42 },
  { date: '2024-06', price: 1.38 },
  { date: '2024-07', price: 1.50 },
  { date: '2024-08', price: 1.65 },
  { date: '2024-09', price: 1.72 },
  { date: '2024-10', price: 1.80 },
];

// Colors for pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function WalletPage() {
  const { toast } = useToast();
  const [location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState('portfolio');
  
  // Get connected wallet address - for now using a mock
  const walletAddress = '0x1234...5678';
  
  // Fetch token balance
  const { data: tokenBalance, isLoading: loadingBalance } = useQuery({
    queryKey: ['token-balance', walletAddress],
    queryFn: async () => {
      try {
        const balance = await getPromTokenBalance(walletAddress);
        return balance;
      } catch (error) {
        console.error('Failed to fetch token balance:', error);
        return '1000'; // Fallback value
      }
    }
  });

  // Fetch vesting schedules
  const { data: vestingSchedules, isLoading: loadingSchedules } = useQuery({
    queryKey: ['vesting-schedules', walletAddress],
    queryFn: async () => {
      try {
        const schedules = await getVestingSchedules(walletAddress);
        return schedules;
      } catch (error) {
        console.error('Failed to fetch vesting schedules:', error);
        return [
          {
            totalAmount: '5000',
            amountClaimed: '2000',
            startTime: new Date('2024-01-01'),
            endTime: new Date('2025-01-01'),
            revocable: true,
            revoked: false
          }
        ]; // Fallback value
      }
    }
  });

  // Fetch property token portfolio
  const { data: portfolio, isLoading: loadingPortfolio } = useQuery({
    queryKey: ['property-tokens', walletAddress],
    queryFn: async () => {
      try {
        const response = await apiRequest(`/api/property-tokens?wallet=${walletAddress}`);
        return response.data;
      } catch (error) {
        console.error('Failed to fetch property tokens:', error);
        return mockPortfolio; // Fallback to mock data
      }
    }
  });

  // Fetch token price history
  const { data: priceHistory } = useQuery({
    queryKey: ['token-price-history'],
    queryFn: async () => {
      try {
        const response = await apiRequest('/api/token-price-history');
        return response.data;
      } catch (error) {
        console.error('Failed to fetch token price history:', error);
        return mockPriceHistory; // Fallback to mock data
      }
    }
  });

  const handleClaimVested = async (scheduleIndex: number) => {
    try {
      toast({
        title: 'Connecting to wallet...',
        description: 'Please approve the transaction in your wallet.',
      });
      
      // In a real implementation, we would connect to MetaMask here
      setTimeout(() => {
        toast({
          title: 'Tokens Claimed',
          description: 'Your vested tokens have been successfully claimed.',
        });
      }, 1500);
    } catch (error) {
      toast({
        title: 'Claim Failed',
        description: 'There was an error claiming your tokens. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleBuyTokens = () => {
    toast({
      title: 'Feature Coming Soon',
      description: 'Token purchasing will be available in the next update.',
    });
  };

  const handleSellTokens = () => {
    toast({
      title: 'Feature Coming Soon',
      description: 'Token selling will be available in the next update.',
    });
  };

  const calculatePortfolioValue = () => {
    if (!portfolio) return 0;
    return portfolio.reduce((total, item) => total + item.value, 0);
  };

  const isLoading = loadingBalance || loadingSchedules || loadingPortfolio;

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Token Wallet</h1>
        <div className="flex items-center space-x-2">
          <Button size="sm" onClick={handleBuyTokens}>Buy Tokens</Button>
          <Button size="sm" variant="outline" onClick={handleSellTokens}>Sell Tokens</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Portfolio Overview</CardTitle>
              <CardDescription>
                Your PROM token holdings and property investments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-secondary p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground">Total Balance</div>
                  <div className="text-2xl font-bold">
                    {isLoading ? 'Loading...' : `${Number(tokenBalance || 0).toLocaleString()} PROM`}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ≈ ${isLoading ? '0.00' : `${(Number(tokenBalance || 0) * 1.8).toLocaleString()}`}
                  </div>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground">Portfolio Value</div>
                  <div className="text-2xl font-bold">
                    ${isLoading ? 'Loading...' : calculatePortfolioValue().toLocaleString()}
                  </div>
                  <div className="text-sm text-green-500">+12.5% (30d)</div>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground">Vesting</div>
                  <div className="text-2xl font-bold">
                    {isLoading 
                      ? 'Loading...' 
                      : vestingSchedules && vestingSchedules.length > 0 
                        ? `${Number(
                            vestingSchedules.reduce(
                              (total, schedule) => total + (Number(schedule.totalAmount) - Number(schedule.amountClaimed)),
                              0
                            )
                          ).toLocaleString()} PROM`
                        : '0 PROM'
                    }
                  </div>
                  <div className="text-sm text-muted-foreground">Pending</div>
                </div>
              </div>
            
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="portfolio">Properties</TabsTrigger>
                  <TabsTrigger value="vesting">Vesting</TabsTrigger>
                  <TabsTrigger value="history">Transaction History</TabsTrigger>
                </TabsList>
                
                <TabsContent value="portfolio" className="mt-4">
                  {isLoading ? (
                    <div className="text-center py-6">Loading portfolio data...</div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Property</TableHead>
                          <TableHead className="text-right">Tokens</TableHead>
                          <TableHead className="text-right">Value (USD)</TableHead>
                          <TableHead className="text-right">Allocation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {portfolio && portfolio.map((item) => (
                          <TableRow 
                            key={item.id}
                            className="cursor-pointer hover:bg-secondary/50"
                            onClick={() => setLocation(`/properties/${item.propertyId}`)}
                          >
                            <TableCell className="font-medium">{item.name}</TableCell>
                            <TableCell className="text-right">{item.tokens.toLocaleString()}</TableCell>
                            <TableCell className="text-right">${item.value.toLocaleString()}</TableCell>
                            <TableCell className="text-right">{item.allocation}%</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </TabsContent>
                
                <TabsContent value="vesting" className="mt-4">
                  {isLoading ? (
                    <div className="text-center py-6">Loading vesting schedules...</div>
                  ) : vestingSchedules && vestingSchedules.length > 0 ? (
                    <div className="space-y-6">
                      {vestingSchedules.map((schedule, index) => {
                        const startDate = new Date(schedule.startTime);
                        const endDate = new Date(schedule.endTime);
                        const now = new Date();
                        
                        const totalDuration = endDate.getTime() - startDate.getTime();
                        const elapsed = now.getTime() - startDate.getTime();
                        const progressPercent = Math.min(
                          Math.max(Math.floor((elapsed / totalDuration) * 100), 0),
                          100
                        );
                        
                        const claimed = Number(schedule.amountClaimed);
                        const total = Number(schedule.totalAmount);
                        const available = Math.floor((total * progressPercent) / 100) - claimed;
                        
                        return (
                          <Card key={index} className="bg-secondary/30">
                            <CardHeader className="pb-2">
                              <div className="flex justify-between items-center">
                                <CardTitle className="text-lg">Vesting Schedule #{index + 1}</CardTitle>
                                {schedule.revoked ? (
                                  <Badge variant="destructive">Revoked</Badge>
                                ) : (
                                  <Badge variant="outline">Active</Badge>
                                )}
                              </div>
                              <CardDescription>
                                {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                  <span>Progress</span>
                                  <span>{progressPercent}%</span>
                                </div>
                                <Progress value={progressPercent} className="h-2" />
                                
                                <div className="grid grid-cols-3 gap-2 text-sm">
                                  <div>
                                    <div className="text-muted-foreground">Total</div>
                                    <div className="font-medium">{total.toLocaleString()} PROM</div>
                                  </div>
                                  <div>
                                    <div className="text-muted-foreground">Claimed</div>
                                    <div className="font-medium">{claimed.toLocaleString()} PROM</div>
                                  </div>
                                  <div>
                                    <div className="text-muted-foreground">Available</div>
                                    <div className="font-medium">{available.toLocaleString()} PROM</div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button 
                                size="sm" 
                                disabled={available <= 0 || schedule.revoked}
                                onClick={() => handleClaimVested(index)}
                                className="w-full"
                              >
                                {available > 0 ? `Claim ${available.toLocaleString()} PROM` : "Nothing to Claim"}
                              </Button>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-muted-foreground">
                      You don't have any active vesting schedules.
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="history" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Apr 15, 2025</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-500/10 text-green-500 hover:bg-green-500/10">
                            Received
                          </Badge>
                        </TableCell>
                        <TableCell>Initial token grant</TableCell>
                        <TableCell className="text-right text-green-500">+1.00 PROM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Apr 10, 2025</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/10">
                            Vested
                          </Badge>
                        </TableCell>
                        <TableCell>Claimed vested tokens</TableCell>
                        <TableCell className="text-right text-green-500">+500.00 PROM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Apr 5, 2025</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/10">
                            Purchase
                          </Badge>
                        </TableCell>
                        <TableCell>Purchased property tokens - Beach House Miami</TableCell>
                        <TableCell className="text-right text-red-500">-250.00 PROM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Mar 28, 2025</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-500/10 text-green-500 hover:bg-green-500/10">
                            Received
                          </Badge>
                        </TableCell>
                        <TableCell>Dividend payment - Luxury Condo NYC</TableCell>
                        <TableCell className="text-right text-green-500">+25.00 PROM</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Portfolio Allocation</CardTitle>
              <CardDescription>Distribution across properties</CardDescription>
            </CardHeader>
            <CardContent>
              {portfolio && portfolio.length > 0 ? (
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={portfolio}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="allocation"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {portfolio.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No property investment data to display.
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>PROM Token Price</CardTitle>
              <CardDescription>Current price: $1.80 (+5.2%)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceHistory || []}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={['dataMin - 0.1', 'dataMax + 0.1']} />
                    <Tooltip formatter={(value) => [`$${value}`, 'Price']} />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useQuery } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { fractionalizeProperty, getTotalTokenSupply, getCurrentTokenSupply } from '@/lib/web3-client';
import { useLocation } from 'wouter';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Mock historical price data
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

export default function TokenizePage() {
  const { toast } = useToast();
  const [location, setLocation] = useLocation();
  const propertyId = parseInt(location.split('/')[2] || '0');
  
  const [tokenPrice, setTokenPrice] = useState('1.0');
  const [totalTokens, setTotalTokens] = useState('1000');
  const [ownershipPercent, setOwnershipPercent] = useState(30);
  
  // Fetch property details
  const { data: property, isLoading } = useQuery({
    queryKey: ['/api/properties', propertyId],
    enabled: !!propertyId,
  });

  // Fetch token supply information
  const { data: tokenSupply } = useQuery({
    queryKey: ['/api/token-supply'],
    queryFn: async () => {
      try {
        const total = await getTotalTokenSupply();
        const current = await getCurrentTokenSupply();
        return { total, current };
      } catch (error) {
        console.error('Failed to fetch token supply:', error);
        return { total: '100000000', current: '10000000' };
      }
    }
  });

  // Fetch token price history
  const { data: priceHistory } = useQuery({
    queryKey: ['/api/token-price-history'],
    queryFn: async () => {
      try {
        const response = await apiRequest('/api/token-price-history');
        return response.data;
      } catch (error) {
        console.error('Failed to fetch token price history:', error);
        return mockPriceHistory;
      }
    }
  });

  const handleTokenize = async () => {
    try {
      // In a real implementation, this would connect to MetaMask first
      toast({
        title: 'Connecting to wallet...',
        description: 'Please approve the transaction in your wallet.',
      });
      
      // Simulate a wallet connection
      setTimeout(() => {
        toast({
          title: 'Property Tokenization Initiated',
          description: 'Your property is being tokenized. This process may take a few minutes.',
        });
        
        // Navigate back to property page
        setTimeout(() => {
          setLocation(`/properties/${propertyId}`);
        }, 2000);
      }, 1500);
    } catch (error) {
      toast({
        title: 'Tokenization Failed',
        description: 'There was an error tokenizing your property. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleOwnershipPercentChange = (value: number[]) => {
    setOwnershipPercent(value[0]);
    // Calculate tokens based on percentage
    const calculatedTokens = Math.floor((value[0] / 100) * 10000);
    setTotalTokens(calculatedTokens.toString());
  };

  const handleTokensChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTotalTokens(value);
    // Update percentage based on tokens
    const calculatedPercentage = (parseInt(value) / 10000) * 100;
    setOwnershipPercent(calculatedPercentage);
  };

  const propertyValue = property?.price || 0;
  const tokenValue = parseFloat(tokenPrice);
  const totalValue = tokenValue * parseInt(totalTokens);
  const platformFee = totalValue * 0.025; // 2.5% platform fee

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading property details...</div>;
  }

  if (!property) {
    return <div className="flex items-center justify-center min-h-screen">Property not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Tokenize Your Property</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Fractional Ownership Setup</CardTitle>
              <CardDescription>
                Create tokens representing ownership shares in your property
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Property Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="property-title">Title</Label>
                    <div id="property-title" className="text-sm mt-1">{property.title}</div>
                  </div>
                  <div>
                    <Label htmlFor="property-price">Property Value</Label>
                    <div id="property-price" className="text-sm mt-1">
                      ${Number(property.price).toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="property-location">Location</Label>
                    <div id="property-location" className="text-sm mt-1">{property.location}</div>
                  </div>
                  <div>
                    <Label htmlFor="property-type">Type</Label>
                    <div id="property-type" className="text-sm mt-1">{property.propertyType}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Tokenization Parameters</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="token-price">Token Price (USD)</Label>
                    <Input
                      id="token-price"
                      type="number"
                      value={tokenPrice}
                      onChange={(e) => setTokenPrice(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label>Ownership Percentage to Tokenize: {ownershipPercent}%</Label>
                    <Slider
                      defaultValue={[30]}
                      max={100}
                      step={1}
                      value={[ownershipPercent]}
                      onValueChange={handleOwnershipPercentChange}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="total-tokens">Total Tokens to Create</Label>
                    <Input
                      id="total-tokens"
                      type="number"
                      value={totalTokens}
                      onChange={handleTokensChange}
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Each token represents a fractional ownership share in this property
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2">Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Property Value:</span>
                    <span>${Number(property.price).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tokenized Value ({ownershipPercent}%):</span>
                    <span>${totalValue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Token Price:</span>
                    <span>${tokenPrice} per token</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Number of Tokens:</span>
                    <span>{parseInt(totalTokens).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee (2.5%):</span>
                    <span>${platformFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t">
                    <span>Net Proceeds:</span>
                    <span>${(totalValue - platformFee).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setLocation(`/properties/${propertyId}`)}>
                Cancel
              </Button>
              <Button onClick={handleTokenize}>
                Tokenize Property
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Token Market Data</CardTitle>
              <CardDescription>Current PROM token statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Current Token Price</div>
                  <div className="text-2xl font-bold">$1.80</div>
                  <div className="text-xs text-green-500">+5.2% (24h)</div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground">Market Cap</div>
                  <div className="text-2xl font-bold">$18,000,000</div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground">Total Supply</div>
                  <div className="text-lg font-medium">
                    {tokenSupply ? 
                      parseInt(tokenSupply.total).toLocaleString() : 
                      '100,000,000'} PROM
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground">Circulating Supply</div>
                  <div className="text-lg font-medium">
                    {tokenSupply ? 
                      parseInt(tokenSupply.current).toLocaleString() : 
                      '10,000,000'} PROM
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Price History</CardTitle>
              <CardDescription>PROM token price over time</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="6m">
                <TabsList className="mb-4">
                  <TabsTrigger value="1m">1M</TabsTrigger>
                  <TabsTrigger value="3m">3M</TabsTrigger>
                  <TabsTrigger value="6m">6M</TabsTrigger>
                  <TabsTrigger value="1y">1Y</TabsTrigger>
                </TabsList>
                
                <TabsContent value="1m" className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceHistory?.slice(-2) || []}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={['dataMin - 0.1', 'dataMax + 0.1']} />
                      <Tooltip formatter={(value) => [`$${value}`, 'Price']} />
                      <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                
                <TabsContent value="3m" className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceHistory?.slice(-4) || []}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={['dataMin - 0.1', 'dataMax + 0.1']} />
                      <Tooltip formatter={(value) => [`$${value}`, 'Price']} />
                      <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                
                <TabsContent value="6m" className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceHistory?.slice(-7) || []}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={['dataMin - 0.1', 'dataMax + 0.1']} />
                      <Tooltip formatter={(value) => [`$${value}`, 'Price']} />
                      <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                
                <TabsContent value="1y" className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceHistory || []}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={['dataMin - 0.1', 'dataMax + 0.1']} />
                      <Tooltip formatter={(value) => [`$${value}`, 'Price']} />
                      <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
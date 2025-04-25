import React from 'react';
import { DexProvider } from '@/components/dex/dex-provider';
import { SwapInterface } from '@/components/dex/swap-interface';
import { PageHeader } from '@/components/ui/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useWallet } from '@/components/wallet/wallet-provider';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft,
  ArrowLeftRight, 
  BarChart3, 
  Coins, 
  DollarSign, 
  Lock, 
  Shield, 
  Zap
} from 'lucide-react';
import { Link } from 'wouter';

export default function AdminDexPage() {
  const { isConnected, openModal } = useWallet();
  
  return (
    <div className="container max-w-6xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">DEX Administration</h1>
          <p className="text-neutral-500 mt-1">Manage decentralized exchange settings and monitor performance</p>
        </div>
        <Link href="/admin">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Main DEX Interface */}
          <Tabs defaultValue="swap" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="swap">Swap</TabsTrigger>
              <TabsTrigger value="info">Stats & Info</TabsTrigger>
            </TabsList>
            
            <TabsContent value="swap" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ArrowLeftRight className="h-5 w-5 mr-2" />
                      Token Swaps
                    </CardTitle>
                    <CardDescription>
                      Exchange any token for another at the best rates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DexProvider>
                      <SwapInterface />
                    </DexProvider>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="h-5 w-5 mr-2" />
                        Security Controls
                      </CardTitle>
                      <CardDescription>
                        Manage DEX security settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full" variant="outline">Emergency Pause</Button>
                      <Button className="w-full" variant="outline">Fee Controls</Button>
                      <Button className="w-full" variant="outline">Risk Parameters</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Analytics
                      </CardTitle>
                      <CardDescription>
                        View detailed exchange statistics
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full">Trading Activity</Button>
                      <Button className="w-full" variant="outline">Liquidity Reports</Button>
                      <Button className="w-full" variant="outline">User Analysis</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="info" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>DEX Performance</CardTitle>
                  <CardDescription>
                    Key metrics for the DAC decentralized exchange
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <DollarSign className="h-5 w-5 mr-2" />
                          TVL
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">$24.2M</div>
                        <p className="text-sm text-emerald-600 mt-1">+5.8% (24h)</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <ArrowLeftRight className="h-5 w-5 mr-2" />
                          24h Volume
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">$4.7M</div>
                        <p className="text-sm text-emerald-600 mt-1">+12.3% (24h)</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Coins className="h-5 w-5 mr-2" />
                          Active Pairs
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">128</div>
                        <p className="text-sm text-neutral-500 mt-1">Across multiple chains</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Admin Controls</CardTitle>
              <CardDescription>
                Manage DEX settings and parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Manage Liquidity Pools</Button>
              <Button className="w-full" variant="outline">Token Whitelist</Button>
              <Button className="w-full" variant="outline">Fee Settings</Button>
              <Button className="w-full" variant="outline">Emergency Controls</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Network Status</CardTitle>
              <CardDescription>
                Current blockchain network status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 mr-2"></div>
                  <span>Ethereum Mainnet</span>
                </div>
                <span className="text-sm text-neutral-500">Active</span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 mr-2"></div>
                  <span>Polygon</span>
                </div>
                <span className="text-sm text-neutral-500">Active</span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span>Arbitrum</span>
                </div>
                <span className="text-sm text-neutral-500">Slow</span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-emerald-500 mr-2"></div>
                  <span>Optimism</span>
                </div>
                <span className="text-sm text-neutral-500">Active</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
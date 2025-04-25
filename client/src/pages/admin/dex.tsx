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
          <h1 className="text-3xl font-bold">DAC Decentralized Exchange</h1>
          <p className="text-neutral-500 mt-1">Swap tokens and provide liquidity directly on the DAC platform</p>
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
                        Security Features
                      </CardTitle>
                      <CardDescription>
                        Built-in protections for your trades
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mr-3">
                          <Lock className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Slippage Protection</h3>
                          <p className="text-sm text-neutral-500">
                            Set custom slippage tolerance to protect your trades from price movements
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mr-3">
                          <BarChart3 className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Price Impact Warning</h3>
                          <p className="text-sm text-neutral-500">
                            Automatically warns you when your trade might significantly impact the market price
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mr-3">
                          <Zap className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">MEV Protection</h3>
                          <p className="text-sm text-neutral-500">
                            Built-in protection against front-running and sandwich attacks
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {!isConnected && (
                    <Card className="bg-primary-50 border-primary-100">
                      <CardHeader>
                        <CardTitle>
                          Connect to Start Trading
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-neutral-600">
                          Connect your wallet to start swapping tokens and providing liquidity to earn rewards
                        </p>
                        <Button onClick={openModal}>
                          Connect Wallet
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="info" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Total Value Locked
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$28.4M</div>
                    <p className="text-sm text-emerald-600 mt-1">+5.2% (24h)</p>
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
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                How to use the DEX platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mr-3 font-medium text-sm">1</div>
                <div>
                  <h3 className="font-medium">Connect your wallet</h3>
                  <p className="text-sm text-neutral-500">
                    Connect your Web3 wallet (MetaMask, WalletConnect, etc.) to get started
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mr-3 font-medium text-sm">2</div>
                <div>
                  <h3 className="font-medium">Select tokens to swap</h3>
                  <p className="text-sm text-neutral-500">
                    Choose which token you want to swap from and which you want to receive
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mr-3 font-medium text-sm">3</div>
                <div>
                  <h3 className="font-medium">Enter amount and review</h3>
                  <p className="text-sm text-neutral-500">
                    Enter how much you want to swap and check the quoted price and details
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mr-3 font-medium text-sm">4</div>
                <div>
                  <h3 className="font-medium">Confirm the swap</h3>
                  <p className="text-sm text-neutral-500">
                    Click "Swap" and confirm the transaction in your wallet
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
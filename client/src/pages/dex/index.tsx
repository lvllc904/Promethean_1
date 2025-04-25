import React from 'react';
import { DexProvider } from '@/components/dex/dex-provider';
import { SwapInterface } from '@/components/dex/swap-interface';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useWallet } from '@/components/wallet/wallet-provider';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeftRight, 
  BarChart3, 
  Coins, 
  DollarSign, 
  Lock, 
  Shield, 
  Zap
} from 'lucide-react';

export default function DexPage() {
  const { isConnected, openModal } = useWallet();
  
  return (
    <div className="container max-w-6xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">DAC Decentralized Exchange</h1>
          <p className="text-neutral-500 mt-1">Swap tokens and provide liquidity directly on the DAC platform</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Main DEX Interface */}
          <Tabs defaultValue="swap" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="swap">Swap</TabsTrigger>
              <TabsTrigger value="liquidity">Liquidity</TabsTrigger>
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
                          <Zap className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Smart Routing</h3>
                          <p className="text-sm text-neutral-500">
                            Automatically finds the best trading route across multiple liquidity sources
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mr-3">
                          <Lock className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Slippage Protection</h3>
                          <p className="text-sm text-neutral-500">
                            Customize slippage tolerance to protect your trades from price movements
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Price Charts
                      </CardTitle>
                      <CardDescription>
                        Track token price movements
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Price chart placeholder */}
                      <div className="h-32 w-full bg-neutral-100 rounded-md flex items-center justify-center">
                        <p className="text-neutral-500 text-sm">Price charts coming soon</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="liquidity" className="space-y-6">
              {!isConnected ? (
                <Card className="p-6 text-center">
                  <div className="flex flex-col items-center justify-center py-8">
                    <Lock className="h-16 w-16 text-neutral-400 mb-4" />
                    <h3 className="text-xl font-medium mb-2">Connect Your Wallet</h3>
                    <p className="text-neutral-500 mb-6 max-w-md">
                      You need to connect your wallet to provide liquidity and earn fees
                    </p>
                    <Button onClick={openModal}>Connect Wallet</Button>
                  </div>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Your Liquidity Positions</CardTitle>
                    <CardDescription>
                      Manage your liquidity and earn trading fees
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-neutral-500">
                        You don't have any active liquidity positions
                      </p>
                      <Button className="mt-4">Add Liquidity</Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>DEX Stats</CardTitle>
              <CardDescription>
                Key metrics about our decentralized exchange
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
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
                    Choose the tokens you want to swap and enter the amount
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 mr-3 font-medium text-sm">3</div>
                <div>
                  <h3 className="font-medium">Review and confirm</h3>
                  <p className="text-sm text-neutral-500">
                    Check the exchange rate and confirm the transaction
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
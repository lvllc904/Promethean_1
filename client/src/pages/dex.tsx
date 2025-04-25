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
              
              <Card>
                <CardHeader>
                  <CardTitle>Supported Networks</CardTitle>
                  <CardDescription>
                    Trade across multiple blockchain networks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center p-4 border rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <img 
                          src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
                          alt="Ethereum" 
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">Ethereum</h3>
                        <p className="text-sm text-neutral-500">Mainnet</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 border rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <img 
                          src="https://cryptologos.cc/logos/polygon-matic-logo.png" 
                          alt="Polygon" 
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">Polygon</h3>
                        <p className="text-sm text-neutral-500">Mainnet</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 border rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                        <img 
                          src="https://cryptologos.cc/logos/bnb-bnb-logo.png" 
                          alt="Binance Smart Chain" 
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">Binance Smart Chain</h3>
                        <p className="text-sm text-neutral-500">Mainnet</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
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
          
          <Card>
            <CardHeader>
              <CardTitle>Popular Pairs</CardTitle>
              <CardDescription>
                Most traded token pairs on the platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-2 hover:bg-neutral-50 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white z-10">
                      <img 
                        src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
                        alt="ETH" 
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border-2 border-white">
                      <img 
                        src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" 
                        alt="USDC" 
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">ETH / USDC</h3>
                    <p className="text-xs text-neutral-500">Ethereum</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$2.1M</div>
                  <p className="text-xs text-neutral-500">24h Volume</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-2 hover:bg-neutral-50 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white z-10">
                      <img 
                        src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
                        alt="ETH" 
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center border-2 border-white">
                      <img 
                        src="https://cryptologos.cc/logos/dai-dai-logo.png" 
                        alt="DAI" 
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">ETH / DAI</h3>
                    <p className="text-xs text-neutral-500">Ethereum</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$950K</div>
                  <p className="text-xs text-neutral-500">24h Volume</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-2 hover:bg-neutral-50 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center border-2 border-white z-10">
                      <img 
                        src="https://cryptologos.cc/logos/polygon-matic-logo.png" 
                        alt="MATIC" 
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border-2 border-white">
                      <img 
                        src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" 
                        alt="USDC" 
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">MATIC / USDC</h3>
                    <p className="text-xs text-neutral-500">Polygon</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$730K</div>
                  <p className="text-xs text-neutral-500">24h Volume</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Benefits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-3">
                  <Zap className="h-4 w-4 text-primary-700" />
                </div>
                <div>Lower fees than centralized exchanges</div>
              </div>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-3">
                  <Lock className="h-4 w-4 text-primary-700" />
                </div>
                <div>Non-custodial - keep control of your assets</div>
              </div>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-3">
                  <ArrowLeftRight className="h-4 w-4 text-primary-700" />
                </div>
                <div>Swap between any supported tokens</div>
              </div>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mr-3">
                  <Coins className="h-4 w-4 text-primary-700" />
                </div>
                <div>Earn by providing liquidity to pools</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { ArrowDown, Info, Settings, ArrowDownUp, BarChart3, RotateCw } from 'lucide-react';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useDex } from './dex-provider';
import { TokenSelect } from './token-select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface SwapInterfaceProps {
  className?: string;
}

export const SwapInterface: React.FC<SwapInterfaceProps> = ({ className }) => {
  const { 
    selectedTokens, 
    setSelectedTokens,
    swapAmount,
    setSwapAmount,
    swapQuote,
    slippageTolerance,
    setSlippageTolerance,
    isLoadingQuote,
    isSwapping,
    isApprovingToken,
    getSwapQuote,
    executeSwap,
    approveToken,
    switchTokens,
    currentDex,
    availableTokens
  } = useDex();
  
  const { isConnected, signer, provider, address } = useWallet();
  
  const [showSettings, setShowSettings] = useState(false);
  const [showTransactionDetails, setShowTransactionDetails] = useState(false);
  const [amountOutInput, setAmountOutInput] = useState('');
  const [needsApproval, setNeedsApproval] = useState(false);
  const [isCheckingAllowance, setIsCheckingAllowance] = useState(false);
  const [activeTab, setActiveTab] = useState('swap');
  
  const tokenInBalance = selectedTokens.tokenIn?.balance?.formatted || '0';
  const tokenOutBalance = selectedTokens.tokenOut?.balance?.formatted || '0';
  
  // Update the output amount when a quote is received
  useEffect(() => {
    if (swapQuote) {
      setAmountOutInput(swapQuote.amountOut.formatted);
    } else {
      setAmountOutInput('');
    }
  }, [swapQuote]);
  
  // Check for token approval when swap parameters change
  useEffect(() => {
    const checkApproval = async () => {
      if (
        !isConnected || 
        !provider || 
        !signer || 
        !address || 
        !selectedTokens.tokenIn || 
        !swapAmount || 
        parseFloat(swapAmount) <= 0
      ) {
        setNeedsApproval(false);
        return;
      }
      
      setIsCheckingAllowance(true);
      
      try {
        // Call the dexService to check allowance
        // This is a simplified placeholder - in a real app you would import a function from the dex service
        // const allowance = await checkAllowance(selectedTokens.tokenIn.address, address, routerAddress);
        // setNeedsApproval(parseFloat(allowance.formatted) < parseFloat(swapAmount));
        
        // For demo purposes, assume approval is needed
        setNeedsApproval(true);
      } catch (error) {
        console.error('Error checking approval:', error);
      } finally {
        setIsCheckingAllowance(false);
      }
    };
    
    checkApproval();
  }, [isConnected, provider, signer, address, selectedTokens.tokenIn, swapAmount]);
  
  // Auto-update quote when parameters change
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (
        selectedTokens.tokenIn &&
        selectedTokens.tokenOut &&
        swapAmount &&
        parseFloat(swapAmount) > 0
      ) {
        getSwapQuote();
      }
    }, 500);
    
    return () => clearTimeout(debounceTimeout);
  }, [selectedTokens.tokenIn, selectedTokens.tokenOut, swapAmount, getSwapQuote]);
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Allow empty string or valid numbers
    if (value === '' || /^[0-9]*[.,]?[0-9]*$/.test(value)) {
      setSwapAmount(value);
    }
  };
  
  // Handle max amount click
  const handleMaxClick = () => {
    if (selectedTokens.tokenIn?.balance) {
      setSwapAmount(selectedTokens.tokenIn.balance.formatted);
    }
  };
  
  // Determine if swap button should be disabled
  const isSwapButtonDisabled = () => {
    if (isLoadingQuote || isSwapping || isApprovingToken) return true;
    if (!selectedTokens.tokenIn || !selectedTokens.tokenOut) return true;
    if (!swapAmount || parseFloat(swapAmount) <= 0) return true;
    if (!swapQuote) return true;
    
    // Check if user has sufficient balance
    if (
      selectedTokens.tokenIn.balance &&
      parseFloat(selectedTokens.tokenIn.balance.formatted) < parseFloat(swapAmount)
    ) {
      return true;
    }
    
    return false;
  };
  
  // Get the swap button text based on current state
  const getSwapButtonText = () => {
    if (!isConnected) return 'Connect Wallet';
    if (!selectedTokens.tokenIn || !selectedTokens.tokenOut) return 'Select Tokens';
    if (!swapAmount || parseFloat(swapAmount) <= 0) return 'Enter Amount';
    
    if (
      selectedTokens.tokenIn.balance &&
      parseFloat(selectedTokens.tokenIn.balance.formatted) < parseFloat(swapAmount)
    ) {
      return 'Insufficient Balance';
    }
    
    if (isLoadingQuote) return 'Fetching Quote...';
    if (needsApproval) {
      return isApprovingToken ? 'Approving...' : `Approve ${selectedTokens.tokenIn.symbol}`;
    }
    
    return isSwapping ? 'Swapping...' : 'Swap';
  };
  
  // Handle swap button click
  const handleSwapClick = async () => {
    if (!isConnected) {
      // Connect wallet (handled by the wallet provider)
      return;
    }
    
    if (needsApproval && selectedTokens.tokenIn) {
      // Approve token
      await approveToken(selectedTokens.tokenIn);
      return;
    }
    
    // Execute swap
    await executeSwap();
  };
  
  // Price impact warning
  const getPriceImpactWarning = () => {
    // Calculate price impact (simplified example)
    // In a real app, you would get this from the DEX service
    const priceImpact = 0.5; // 0.5%
    
    if (priceImpact < 1) {
      return null;
    } else if (priceImpact < 5) {
      return (
        <div className="text-yellow-500 text-sm flex items-center">
          <Info className="h-4 w-4 mr-1" />
          Price impact: {priceImpact.toFixed(2)}%
        </div>
      );
    } else {
      return (
        <div className="text-red-500 text-sm flex items-center">
          <Info className="h-4 w-4 mr-1" />
          High price impact: {priceImpact.toFixed(2)}%
        </div>
      );
    }
  };
  
  return (
    <Card className={cn("w-full max-w-md mx-auto", className)}>
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[200px]">
            <TabsList>
              <TabsTrigger value="swap">Swap</TabsTrigger>
              <TabsTrigger value="pool" disabled>Pool</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex items-center space-x-2">
            <Popover open={showSettings} onOpenChange={setShowSettings}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-4">
                  <h4 className="font-medium">Transaction Settings</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Slippage Tolerance</Label>
                      <span className="text-sm">{slippageTolerance}%</span>
                    </div>
                    <Slider
                      value={[slippageTolerance]}
                      min={0.1}
                      max={5}
                      step={0.1}
                      onValueChange={(values) => setSlippageTolerance(values[0])}
                    />
                    <div className="flex justify-between text-xs text-neutral-500">
                      <span>0.1%</span>
                      <span>5%</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Transaction Deadline</Label>
                    <div className="flex items-center">
                      <Input
                        type="number"
                        min={1}
                        max={60}
                        defaultValue={20}
                        className="w-20"
                      />
                      <span className="ml-2">minutes</span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <Button variant="ghost" size="icon" disabled>
              <BarChart3 className="h-5 w-5" />
              <span className="sr-only">Charts</span>
            </Button>
            
            <Button variant="ghost" size="icon" onClick={() => getSwapQuote()}>
              <RotateCw className="h-5 w-5" />
              <span className="sr-only">Refresh</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* From token input */}
        <div className="rounded-xl border border-neutral-200 p-4 space-y-2">
          <div className="flex justify-between">
            <Label>From</Label>
            <div className="text-sm text-neutral-500">
              Balance: {parseFloat(tokenInBalance).toLocaleString(undefined, {
                maximumFractionDigits: 6
              })}
              {selectedTokens.tokenIn && (
                <Button
                  variant="link"
                  size="sm"
                  className="h-auto p-0 pl-1"
                  onClick={handleMaxClick}
                >
                  MAX
                </Button>
              )}
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="0.0"
              value={swapAmount}
              onChange={handleInputChange}
              className="text-xl border-none shadow-none focus-visible:ring-0 p-0 h-auto"
            />
            <TokenSelect
              value={selectedTokens.tokenIn?.address || ''}
              onSelect={(value) => setSelectedTokens({ tokenIn: availableTokens.find(t => t.address === value) || null })}
              disabledTokenAddresses={selectedTokens.tokenOut ? [selectedTokens.tokenOut.address] : []}
            />
          </div>
        </div>
        
        {/* Switch tokens button */}
        <div className="flex justify-center -my-2 z-10 relative">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10 bg-background border-2"
            onClick={switchTokens}
          >
            <ArrowDownUp className="h-4 w-4" />
            <span className="sr-only">Switch tokens</span>
          </Button>
        </div>
        
        {/* To token input */}
        <div className="rounded-xl border border-neutral-200 p-4 space-y-2">
          <div className="flex justify-between">
            <Label>To</Label>
            <div className="text-sm text-neutral-500">
              Balance: {parseFloat(tokenOutBalance).toLocaleString(undefined, {
                maximumFractionDigits: 6
              })}
            </div>
          </div>
          
          <div className="flex space-x-2">
            {isLoadingQuote ? (
              <Skeleton className="h-9 w-full" />
            ) : (
              <Input
                type="text"
                placeholder="0.0"
                value={amountOutInput}
                readOnly
                className="text-xl border-none shadow-none focus-visible:ring-0 p-0 h-auto"
              />
            )}
            <TokenSelect
              value={selectedTokens.tokenOut?.address || ''}
              onSelect={(value) => setSelectedTokens({ tokenOut: availableTokens.find(t => t.address === value) || null })}
              disabledTokenAddresses={selectedTokens.tokenIn ? [selectedTokens.tokenIn.address] : []}
            />
          </div>
        </div>
        
        {/* Swap details */}
        {swapQuote && (
          <Accordion
            type="single" 
            collapsible
            value={showTransactionDetails ? 'details' : undefined}
            onValueChange={(value) => setShowTransactionDetails(value === 'details')}
          >
            <AccordionItem value="details" className="border-b-0">
              <AccordionTrigger className="py-2">
                <div className="flex justify-between w-full">
                  <div className="text-sm">
                    {`1 ${selectedTokens.tokenIn?.symbol} = ${(
                      parseFloat(swapQuote.amountOut.formatted) / parseFloat(swapAmount)
                    ).toFixed(6)} ${selectedTokens.tokenOut?.symbol}`}
                  </div>
                  <div className="text-sm text-neutral-500">
                    Details
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Expected Output</span>
                    <span>
                      {parseFloat(swapQuote.amountOut.formatted).toLocaleString(undefined, {
                        maximumFractionDigits: 6
                      })} {selectedTokens.tokenOut?.symbol}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Minimum Received</span>
                    <span>
                      {(
                        parseFloat(swapQuote.amountOut.formatted) * (1 - slippageTolerance / 100)
                      ).toLocaleString(undefined, {
                        maximumFractionDigits: 6
                      })} {selectedTokens.tokenOut?.symbol}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Exchange Rate</span>
                    <span>
                      1 {selectedTokens.tokenIn?.symbol} = {(
                        parseFloat(swapQuote.amountOut.formatted) / parseFloat(swapAmount)
                      ).toFixed(6)} {selectedTokens.tokenOut?.symbol}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="flex items-center text-neutral-500">
                          <span>Exchange</span>
                          <Info className="h-3 w-3 ml-1" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>The DEX used for this swap.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <span>
                      {currentDex.name}
                    </span>
                  </div>
                  
                  {getPriceImpactWarning()}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
      
      <CardFooter>
        <Button
          className="w-full"
          disabled={isSwapButtonDisabled()}
          onClick={handleSwapClick}
        >
          {getSwapButtonText()}
        </Button>
      </CardFooter>
    </Card>
  );
};
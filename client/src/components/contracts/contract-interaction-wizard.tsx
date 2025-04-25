import React, { useState } from 'react';
import { useWallet } from '@/components/wallet/wallet-provider';
import { ethers } from 'ethers';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight,
  Code, 
  Copy, 
  ExternalLink, 
  FileText, 
  Info, 
  Loader2, 
  RefreshCw,
  Settings, 
  Zap 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Schema for contract interaction
const contractSchema = z.object({
  address: z.string()
    .min(42, { message: 'Contract address must be 42 characters long' })
    .regex(/^0x[a-fA-F0-9]{40}$/, { message: 'Invalid Ethereum address format' }),
  abi: z.string()
    .min(2, { message: 'ABI is required' })
    .refine(
      (val) => {
        try {
          JSON.parse(val);
          return true;
        } catch (e) {
          return false;
        }
      },
      { message: 'ABI must be valid JSON' }
    ),
});

// Schema for function execution
const executeSchema = z.object({
  functionName: z.string().min(1, { message: 'Function name is required' }),
  params: z.array(z.any()).optional(),
  value: z.string().optional(),
});

type ContractFunction = {
  name: string;
  type: 'read' | 'write';
  inputs: {
    name: string;
    type: string;
    internalType?: string;
  }[];
  outputs?: {
    name: string;
    type: string;
    internalType?: string;
  }[];
  stateMutability?: string;
};

interface ContractInteractionWizardProps {
  presetAddress?: string;
  presetAbi?: string;
}

export function ContractInteractionWizard({ 
  presetAddress, 
  presetAbi 
}: ContractInteractionWizardProps) {
  const { isConnected, provider, signer } = useWallet();
  const { toast } = useToast();
  
  const [contractFunctions, setContractFunctions] = useState<ContractFunction[]>([]);
  const [selectedFunction, setSelectedFunction] = useState<ContractFunction | null>(null);
  const [functionParams, setFunctionParams] = useState<Record<string, string>>({});
  const [ethValue, setEthValue] = useState<string>('0');
  const [functionResult, setFunctionResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('connect');
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  // Form setup
  const form = useForm<z.infer<typeof contractSchema>>({
    resolver: zodResolver(contractSchema),
    defaultValues: {
      address: presetAddress || '',
      abi: presetAbi || '',
    },
  });

  // Connect to contract
  const onSubmit = async (values: z.infer<typeof contractSchema>) => {
    if (!isConnected || !provider) {
      toast({
        title: 'Wallet not connected',
        description: 'Please connect your wallet first.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const abiObj = JSON.parse(values.abi);
      
      // Extract functions from ABI
      const functions = abiObj
        .filter((item: any) => item.type === 'function')
        .map((item: any) => ({
          name: item.name,
          type: item.stateMutability === 'view' || item.stateMutability === 'pure' ? 'read' : 'write',
          inputs: item.inputs || [],
          outputs: item.outputs || [],
          stateMutability: item.stateMutability,
        }));
      
      setContractFunctions(functions);
      
      // Create contract instance
      const contractInstance = new ethers.Contract(
        values.address,
        abiObj,
        signer || provider
      );
      
      setContract(contractInstance);
      setActiveTab('interact');
      
      toast({
        title: 'Contract connected',
        description: 'You can now interact with the contract functions.',
      });
    } catch (error) {
      console.error('Error connecting to contract:', error);
      toast({
        title: 'Connection failed',
        description: 'Could not connect to the contract. Please check the address and ABI.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Select a function to interact with
  const handleSelectFunction = (func: ContractFunction) => {
    setSelectedFunction(func);
    setFunctionParams({});
    setFunctionResult(null);
    setTxHash(null);
  };

  // Update function parameter
  const handleParamChange = (paramName: string, value: string) => {
    setFunctionParams(prev => ({
      ...prev,
      [paramName]: value,
    }));
  };

  // Execute contract function
  const executeFunction = async () => {
    if (!contract || !selectedFunction) return;
    
    setIsLoading(true);
    setFunctionResult(null);
    setTxHash(null);
    
    try {
      // Prepare parameters from form inputs
      const params = selectedFunction.inputs.map(input => 
        functionParams[input.name] || ''
      );
      
      // Call the contract function
      let result;
      
      if (selectedFunction.type === 'read') {
        // Read function
        result = await contract[selectedFunction.name](...params);
        
        // Format the result for display
        let formattedResult = '';
        
        if (Array.isArray(result)) {
          formattedResult = JSON.stringify(
            result.map(r => r.toString ? r.toString() : r),
            null,
            2
          );
        } else if (ethers.BigInt.isBigInt(result)) {
          formattedResult = result.toString();
        } else if (typeof result === 'object' && result !== null) {
          formattedResult = JSON.stringify(result, null, 2);
        } else {
          formattedResult = result?.toString() || '';
        }
        
        setFunctionResult(formattedResult);
        
        toast({
          title: 'Function executed',
          description: 'Read operation completed successfully.',
        });
      } else {
        // Write function
        const options: {value?: ethers.BigNumberish} = {};
        
        // Add ETH value if needed
        if (
          selectedFunction.stateMutability === 'payable' && 
          parseFloat(ethValue) > 0
        ) {
          options.value = ethers.parseEther(ethValue);
        }
        
        const tx = await contract[selectedFunction.name](...params, options);
        setTxHash(tx.hash);
        
        // Wait for transaction confirmation
        const receipt = await tx.wait();
        
        setFunctionResult(JSON.stringify({
          blockNumber: receipt.blockNumber,
          gasUsed: receipt.gasUsed.toString(),
          status: receipt.status === 1 ? 'Success' : 'Failed',
        }, null, 2));
        
        toast({
          title: 'Transaction confirmed',
          description: `Transaction successfully confirmed in block ${receipt.blockNumber}.`,
        });
      }
    } catch (error) {
      console.error('Error executing function:', error);
      
      let errorMessage = 'An error occurred while executing the function.';
      
      if (error instanceof Error) {
        errorMessage = error.message.split('(')[0].trim(); // Clean up error message
      }
      
      setFunctionResult(`Error: ${errorMessage}`);
      
      toast({
        title: 'Execution failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="h-5 w-5 mr-2 text-primary" />
          Smart Contract Interaction Wizard
        </CardTitle>
        <CardDescription>
          Connect to and interact with any smart contract on the blockchain
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="connect">
              <div className="flex items-center">
                <Code className="h-4 w-4 mr-2" />
                Connect Contract
              </div>
            </TabsTrigger>
            <TabsTrigger value="interact" disabled={!contract}>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                Interact
              </div>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="connect">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contract Address</FormLabel>
                      <FormControl>
                        <Input placeholder="0x..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the address of the smart contract you want to interact with
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="abi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contract ABI</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="[{...}]"
                          className="font-mono h-36 text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Paste the ABI (Application Binary Interface) for the contract
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading || !isConnected}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Connect to Contract
                    </>
                  )}
                </Button>
                
                {!isConnected && (
                  <div className="flex items-center justify-center p-4 mt-4 bg-yellow-50 border border-yellow-200 rounded-md">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                    <p className="text-sm text-yellow-700">
                      Please connect your wallet to interact with smart contracts
                    </p>
                  </div>
                )}
              </form>
            </Form>
          </TabsContent>
          
          <TabsContent value="interact">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium mb-2">Contract Functions</h3>
                
                <div className="flex space-x-2 mb-4">
                  <Badge variant="outline" className="bg-blue-50">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                    Read
                  </Badge>
                  <Badge variant="outline" className="bg-orange-50">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-1"></span>
                    Write
                  </Badge>
                </div>
                
                <div className="h-[400px] overflow-y-auto border rounded-md p-1">
                  {contractFunctions.map((func, index) => (
                    <div key={index} className="mb-1">
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-left font-mono text-sm h-auto py-2",
                          selectedFunction?.name === func.name && "bg-neutral-100",
                          func.type === 'read' ? "text-blue-600" : "text-orange-600"
                        )}
                        onClick={() => handleSelectFunction(func)}
                      >
                        <span>{func.name}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {func.type}
                        </Badge>
                      </Button>
                    </div>
                  ))}
                  
                  {contractFunctions.length === 0 && (
                    <div className="p-4 text-center text-neutral-500 text-sm">
                      No functions found in the ABI
                    </div>
                  )}
                </div>
                
                <div className="pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setActiveTab('connect')}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Change Contract
                  </Button>
                </div>
              </div>
              
              <div className="col-span-2 space-y-6">
                {selectedFunction ? (
                  <>
                    <div>
                      <h3 className="text-lg font-medium flex items-center">
                        <span>{selectedFunction.name}</span>
                        <Badge
                          variant="outline"
                          className={cn(
                            "ml-2",
                            selectedFunction.type === 'read' 
                              ? "bg-blue-50 text-blue-700"
                              : "bg-orange-50 text-orange-700"
                          )}
                        >
                          {selectedFunction.type}
                        </Badge>
                      </h3>
                      
                      <div className="mt-2 text-sm text-neutral-500">
                        {selectedFunction.stateMutability && (
                          <Badge variant="outline" className="mr-2">
                            {selectedFunction.stateMutability}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    {/* Function parameters */}
                    {selectedFunction.inputs.length > 0 ? (
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium">Function Parameters</h4>
                        
                        {selectedFunction.inputs.map((input, idx) => (
                          <div key={idx} className="space-y-2">
                            <Label htmlFor={`param-${idx}`}>
                              {input.name || `param${idx}`}
                              <span className="ml-2 text-xs text-neutral-500">
                                ({input.type})
                              </span>
                            </Label>
                            <Input
                              id={`param-${idx}`}
                              placeholder={`Enter ${input.type} value`}
                              onChange={(e) => 
                                handleParamChange(input.name || `param${idx}`, e.target.value)
                              }
                              value={functionParams[input.name || `param${idx}`] || ''}
                            />
                          </div>
                        ))}
                        
                        {/* ETH Value input for payable functions */}
                        {selectedFunction.stateMutability === 'payable' && (
                          <div className="space-y-2">
                            <Label htmlFor="eth-value">
                              ETH Value
                              <span className="ml-2 text-xs text-neutral-500">
                                (amount to send with transaction)
                              </span>
                            </Label>
                            <div className="relative">
                              <Input
                                id="eth-value"
                                type="number"
                                step="0.000000000000000001"
                                min="0"
                                placeholder="0.0"
                                onChange={(e) => setEthValue(e.target.value)}
                                value={ethValue}
                              />
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <span className="text-sm text-neutral-500">ETH</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="py-2 text-sm text-neutral-500">
                        This function does not require any parameters
                      </div>
                    )}
                    
                    <Button
                      onClick={executeFunction}
                      disabled={isLoading}
                      className={cn(
                        selectedFunction.type === 'write' ? "bg-orange-600 hover:bg-orange-700" : "bg-blue-600 hover:bg-blue-700"
                      )}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Executing...
                        </>
                      ) : (
                        <>
                          {selectedFunction.type === 'read' ? 'Read Data' : 'Execute Transaction'}
                        </>
                      )}
                    </Button>
                    
                    {/* Result section */}
                    {(functionResult || txHash) && (
                      <div className="mt-6 space-y-4">
                        <h4 className="text-sm font-medium flex items-center">
                          <Info className="h-4 w-4 mr-2 text-neutral-500" />
                          {selectedFunction.type === 'read' ? 'Result' : 'Transaction Details'}
                        </h4>
                        
                        {txHash && (
                          <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-md text-sm">
                            <div className="flex-1 truncate font-mono">
                              TX: {txHash}
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => {
                                navigator.clipboard.writeText(txHash);
                                toast({
                                  title: "Copied",
                                  description: "Transaction hash copied to clipboard",
                                });
                              }}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              asChild
                            >
                              <a 
                                href={`https://etherscan.io/tx/${txHash}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        )}
                        
                        <div className="relative">
                          <pre className={cn(
                            "p-4 rounded-md text-sm font-mono overflow-auto max-h-60 whitespace-pre-wrap",
                            functionResult?.startsWith("Error:") 
                              ? "bg-red-50 text-red-700" 
                              : "bg-neutral-50"
                          )}>
                            {functionResult}
                          </pre>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 h-8 w-8 bg-neutral-100/80"
                            onClick={() => {
                              if (functionResult) {
                                navigator.clipboard.writeText(functionResult);
                                toast({
                                  title: "Copied",
                                  description: "Result copied to clipboard",
                                });
                              }
                            }}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex h-[300px] items-center justify-center flex-col p-8 border-2 border-dashed rounded-md">
                    <FileText className="h-10 w-10 text-neutral-300 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Function Selected</h3>
                    <p className="text-sm text-neutral-500 text-center">
                      Select a function from the list on the left to interact with the contract
                    </p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-neutral-50 px-6 py-4">
        <div className="text-xs text-neutral-500 flex items-center">
          <Info className="h-3 w-3 mr-1" />
          All contract interactions are executed directly through your connected wallet
        </div>
      </CardFooter>
    </Card>
  );
}
import React, { useState } from 'react';
import { ethers } from 'ethers';
import { 
  AlertCircle, 
  Check, 
  ChevronRight, 
  Code, 
  Copy, 
  ExternalLink, 
  FileJson, 
  Layers, 
  Loader2, 
  Save, 
  Search, 
  Upload, 
  Zap 
} from 'lucide-react';
import { useWallet } from '@/components/wallet/wallet-provider';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Alert, 
  AlertDescription, 
  AlertTitle 
} from '@/components/ui/alert';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Types for ABI
interface AbiInput {
  name: string;
  type: string;
  indexed?: boolean;
  components?: AbiInput[];
  internalType?: string;
}

interface AbiOutput {
  name: string;
  type: string;
  components?: AbiOutput[];
  internalType?: string;
}

interface AbiItem {
  type: string;
  name?: string;
  inputs?: AbiInput[];
  outputs?: AbiOutput[];
  stateMutability?: string;
  anonymous?: boolean;
  payable?: boolean;
  constant?: boolean;
}

type ContractMethod = {
  name: string;
  signature: string;
  inputs: AbiInput[];
  outputs: AbiOutput[];
  stateMutability: string;
  payable: boolean;
  functionType: 'read' | 'write' | 'event' | 'fallback' | 'constructor';
  gasEstimate?: string;
  description?: string;
  abi: AbiItem;
};

interface ContractState {
  address: string;
  abi: AbiItem[];
  network: string;
  name: string;
  methods: ContractMethod[];
  savedContracts: SavedContract[];
  isVerified: boolean;
  loading: boolean;
  error: string | null;
}

type SavedContract = {
  address: string;
  name: string;
  network: string;
  isVerified: boolean;
  abi: AbiItem[];
  lastUsed: number;
  favorite: boolean;
  notes?: string;
  tags?: string[];
};

// Placeholder contract ABIs
const popularContractAbis = {
  erc20: [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "to", type: "address" },
        { name: "value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "spender", type: "address" },
        { name: "value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  erc721: [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "tokenId", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "tokenId", type: "uint256" }],
      name: "ownerOf",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "to", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "tokenId", type: "uint256" }],
      name: "getApproved",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  erc1155: [
    {
      constant: true,
      inputs: [
        { name: "account", type: "address" },
        { name: "id", type: "uint256" },
      ],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "accounts", type: "address[]" },
        { name: "ids", type: "uint256[]" },
      ],
      name: "balanceOfBatch",
      outputs: [{ name: "", type: "uint256[]" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "operator", type: "address" },
        { name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "account", type: "address" },
        { name: "operator", type: "address" },
      ],
      name: "isApprovedForAll",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "id", type: "uint256" },
        { name: "amount", type: "uint256" },
        { name: "data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "ids", type: "uint256[]" },
        { name: "amounts", type: "uint256[]" },
        { name: "data", type: "bytes" },
      ],
      name: "safeBatchTransferFrom",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};

const networks = [
  { id: 1, name: "Ethereum Mainnet", rpcUrl: "https://mainnet.infura.io/v3/your-infura-key" },
  { id: 137, name: "Polygon", rpcUrl: "https://polygon-rpc.com" },
  { id: 56, name: "Binance Smart Chain", rpcUrl: "https://bsc-dataseed.binance.org" },
  { id: 43114, name: "Avalanche", rpcUrl: "https://api.avax.network/ext/bc/C/rpc" },
  { id: 10, name: "Optimism", rpcUrl: "https://mainnet.optimism.io" },
  { id: 42161, name: "Arbitrum", rpcUrl: "https://arb1.arbitrum.io/rpc" },
];

// Interface Categories with human-readable descriptions
const interfaceCategories = [
  {
    name: "Token Standards",
    interfaces: [
      { name: "ERC-20", description: "Standard fungible token interface", abiKey: "erc20" },
      { name: "ERC-721", description: "Non-fungible token standard", abiKey: "erc721" },
      { name: "ERC-1155", description: "Multi-token standard", abiKey: "erc1155" },
    ],
  },
  {
    name: "Governance",
    interfaces: [
      { name: "Governor", description: "On-chain governance standard", abiKey: null },
      { name: "Timelock", description: "Delayed execution controller", abiKey: null },
    ],
  },
  {
    name: "DeFi",
    interfaces: [
      { name: "Uniswap V2 Pair", description: "Automated market maker liquidity pool", abiKey: null },
      { name: "Aave Lending Pool", description: "Decentralized lending protocol", abiKey: null },
      { name: "Compound cToken", description: "Interest-bearing token", abiKey: null },
    ],
  },
];

// Examples of frequent contract interactions
const commonInteractions = [
  {
    name: "Check ERC-20 Balance",
    description: "View your token balance for any ERC-20 token",
    contract: "erc20",
    method: "balanceOf",
    inputs: [{ name: "account", value: "", type: "address" }],
  },
  {
    name: "Transfer ERC-20 Tokens",
    description: "Send tokens to another address",
    contract: "erc20",
    method: "transfer",
    inputs: [
      { name: "recipient", value: "", type: "address" },
      { name: "amount", value: "", type: "uint256" },
    ],
  },
  {
    name: "Approve ERC-20 Allowance",
    description: "Approve tokens to be spent by another address or contract",
    contract: "erc20",
    method: "approve",
    inputs: [
      { name: "spender", value: "", type: "address" },
      { name: "amount", value: "", type: "uint256" },
    ],
  },
  {
    name: "Check NFT Owner",
    description: "Find out who owns a specific NFT",
    contract: "erc721",
    method: "ownerOf",
    inputs: [{ name: "tokenId", value: "", type: "uint256" }],
  },
];

export function ContractInteractionWizard() {
  const { isConnected, address, provider } = useWallet();
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState("lookup");
  
  // State for the contract
  const [contract, setContract] = useState<ContractState>({
    address: '',
    network: '',
    name: '',
    abi: [],
    methods: [],
    savedContracts: [],
    isVerified: false,
    loading: false,
    error: null,
  });
  
  // State for method execution
  const [selectedMethod, setSelectedMethod] = useState<ContractMethod | null>(null);
  const [methodInputs, setMethodInputs] = useState<Record<string, string>>({});
  const [methodValue, setMethodValue] = useState<string>('0');
  const [methodResult, setMethodResult] = useState<any>(null);
  const [executing, setExecuting] = useState(false);
  const [executionError, setExecutionError] = useState<string | null>(null);
  
  // State for ABI management
  const [customAbi, setCustomAbi] = useState('');
  const [selectedAbiTemplate, setSelectedAbiTemplate] = useState('');
  
  // Function to load contract information
  const loadContract = async () => {
    if (!contract.address) {
      setContract(prev => ({ ...prev, error: "Contract address is required" }));
      return;
    }
    
    if (!ethers.isAddress(contract.address)) {
      setContract(prev => ({ ...prev, error: "Invalid Ethereum address" }));
      return;
    }
    
    setContract(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      // In a real app, we would:
      // 1. Fetch contract ABI from Etherscan or similar block explorer API
      // 2. Check contract verification status
      // 3. Get contract name and other metadata
      
      // For now, we'll simulate a successful fetch with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Using ERC-20 ABI as an example
      const contractAbi = popularContractAbis.erc20;
      
      // Parse methods from ABI
      const methods = parseContractMethods(contractAbi);
      
      setContract(prev => ({
        ...prev,
        abi: contractAbi,
        name: "Example Token",
        methods,
        isVerified: true,
        loading: false,
      }));
      
      toast({
        title: "Contract Loaded",
        description: "Successfully loaded Example Token contract",
      });
      
    } catch (error: any) {
      setContract(prev => ({
        ...prev,
        loading: false,
        error: `Failed to load contract: ${error.message}`,
      }));
      
      toast({
        title: "Error",
        description: `Failed to load contract: ${error.message}`,
        variant: "destructive",
      });
    }
  };
  
  // Parse methods from ABI
  const parseContractMethods = (abi: AbiItem[]): ContractMethod[] => {
    return abi
      .filter(item => item.type === "function" || item.type === "event" || item.type === "constructor")
      .map(item => {
        const inputs = item.inputs || [];
        const outputs = item.outputs || [];
        const name = item.name || '';
        
        // Generate function signature
        const signature = `${name}(${inputs.map(input => input.type).join(',')})`;
        
        // Determine function type
        let functionType: ContractMethod['functionType'] = 'read';
        
        if (item.type === 'event') {
          functionType = 'event';
        } else if (item.type === 'constructor') {
          functionType = 'constructor';
        } else if (!item.name) {
          functionType = 'fallback';
        } else if (
          item.stateMutability === 'nonpayable' || 
          item.stateMutability === 'payable' ||
          item.payable
        ) {
          functionType = 'write';
        }
        
        return {
          name,
          signature,
          inputs,
          outputs,
          stateMutability: item.stateMutability || 'nonpayable',
          payable: !!item.payable,
          functionType,
          abi: item,
        };
      });
  };
  
  // Execute read method
  const executeReadMethod = async () => {
    if (!selectedMethod || !contract.address || !provider) return;
    
    setExecuting(true);
    setMethodResult(null);
    setExecutionError(null);
    
    try {
      const contractInterface = new ethers.Interface(contract.abi);
      const contractInstance = new ethers.Contract(contract.address, contractInterface, provider);
      
      // Prepare method arguments
      const args = selectedMethod.inputs.map(input => {
        const value = methodInputs[input.name || ''] || '';
        
        // Type conversion based on ABI type
        if (input.type.includes('int')) {
          return value === '' ? 0 : ethers.BigNumber.from(value);
        }
        
        if (input.type === 'bool') {
          return value.toLowerCase() === 'true';
        }
        
        if (input.type.includes('[]')) {
          try {
            return JSON.parse(value);
          } catch {
            return [];
          }
        }
        
        return value;
      });
      
      // Execute method
      const result = await contractInstance[selectedMethod.name](...args);
      
      setMethodResult(result);
      toast({
        title: "Method Executed",
        description: `Successfully executed ${selectedMethod.name}`,
      });
    } catch (error: any) {
      setExecutionError(`Error executing method: ${error.message}`);
      toast({
        title: "Execution Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setExecuting(false);
    }
  };
  
  // Execute write method
  const executeWriteMethod = async () => {
    if (!selectedMethod || !contract.address || !provider) return;
    
    setExecuting(true);
    setMethodResult(null);
    setExecutionError(null);
    
    try {
      const signer = provider.getSigner();
      const contractInterface = new ethers.utils.Interface(contract.abi);
      const contractInstance = new ethers.Contract(contract.address, contractInterface, signer);
      
      // Prepare method arguments
      const args = selectedMethod.inputs.map(input => {
        const value = methodInputs[input.name || ''] || '';
        
        // Type conversion based on ABI type
        if (input.type.includes('int')) {
          return value === '' ? 0 : ethers.BigNumber.from(value);
        }
        
        if (input.type === 'bool') {
          return value.toLowerCase() === 'true';
        }
        
        if (input.type.includes('[]')) {
          try {
            return JSON.parse(value);
          } catch {
            return [];
          }
        }
        
        return value;
      });
      
      // Prepare transaction options
      const options: any = {};
      if (selectedMethod.payable && parseFloat(methodValue) > 0) {
        options.value = ethers.utils.parseEther(methodValue);
      }
      
      // Execute transaction
      const tx = await contractInstance[selectedMethod.name](...args, options);
      
      setMethodResult({
        hash: tx.hash,
        status: 'pending',
      });
      
      toast({
        title: "Transaction Sent",
        description: `Transaction ${tx.hash} has been submitted`,
      });
      
      // Wait for transaction to be mined
      const receipt = await tx.wait();
      
      setMethodResult({
        hash: receipt.transactionHash,
        status: 'confirmed',
        blockNumber: receipt.blockNumber,
        gasUsed: receipt.gasUsed.toString(),
      });
      
      toast({
        title: "Transaction Confirmed",
        description: `Transaction has been confirmed in block ${receipt.blockNumber}`,
      });
    } catch (error: any) {
      setExecutionError(`Error executing transaction: ${error.message}`);
      toast({
        title: "Transaction Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setExecuting(false);
    }
  };
  
  // Load ABI from template
  const loadAbiTemplate = (templateKey: string) => {
    if (templateKey && popularContractAbis[templateKey as keyof typeof popularContractAbis]) {
      const abi = popularContractAbis[templateKey as keyof typeof popularContractAbis];
      setCustomAbi(JSON.stringify(abi, null, 2));
      
      // Also set the contract ABI and parse methods
      const methods = parseContractMethods(abi);
      setContract(prev => ({
        ...prev,
        abi,
        methods,
      }));
      
      toast({
        title: "ABI Template Loaded",
        description: `${templateKey.toUpperCase()} interface loaded successfully`,
      });
    }
  };
  
  // Load custom ABI from JSON input
  const loadCustomAbi = () => {
    try {
      const parsedAbi = JSON.parse(customAbi);
      
      if (!Array.isArray(parsedAbi)) {
        throw new Error("ABI must be an array");
      }
      
      // Parse methods from ABI
      const methods = parseContractMethods(parsedAbi);
      
      setContract(prev => ({
        ...prev,
        abi: parsedAbi,
        methods,
      }));
      
      toast({
        title: "Custom ABI Loaded",
        description: `Successfully loaded ABI with ${methods.length} methods`,
      });
    } catch (error: any) {
      toast({
        title: "Invalid ABI",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  // Handle method selection
  const handleMethodSelect = (method: ContractMethod) => {
    setSelectedMethod(method);
    setMethodInputs({});
    setMethodResult(null);
    setExecutionError(null);
  };
  
  // Handle input change for method parameters
  const handleInputChange = (name: string, value: string) => {
    setMethodInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Format method result for display
  const formatResult = (result: any): string => {
    if (result === null || result === undefined) {
      return 'null';
    }
    
    if (ethers.BigNumber.isBigNumber(result)) {
      return result.toString();
    }
    
    if (Array.isArray(result)) {
      return `[${result.map(item => formatResult(item)).join(', ')}]`;
    }
    
    if (typeof result === 'object') {
      try {
        return JSON.stringify(result, (key, value) => {
          if (ethers.BigNumber.isBigNumber(value)) {
            return value.toString();
          }
          return value;
        }, 2);
      } catch {
        return String(result);
      }
    }
    
    return String(result);
  };
  
  // Copy text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "Text copied to clipboard",
    });
  };
  
  if (!isConnected) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="h-5 w-5 mr-2 text-primary" />
            Smart Contract Interaction
          </CardTitle>
          <CardDescription>
            Connect your wallet to interact with any smart contract on the blockchain
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-8">
          <Layers className="h-16 w-16 text-neutral-300 mb-4" />
          <h3 className="text-lg font-medium mb-2">Wallet Not Connected</h3>
          <p className="text-sm text-neutral-500 text-center max-w-md mb-6">
            Connect your wallet to interact with smart contracts across multiple networks. You can view contract data, execute functions, and manage your favorite contracts.
          </p>
          <Button>Connect Wallet</Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="h-5 w-5 mr-2 text-primary" />
          Smart Contract Interaction
        </CardTitle>
        <CardDescription>
          Interact with any smart contract on the blockchain
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="border-b px-6">
            <TabsList className="w-full justify-start h-12">
              <TabsTrigger value="lookup">Contract Lookup</TabsTrigger>
              <TabsTrigger value="abi">ABI Management</TabsTrigger>
              <TabsTrigger value="interact">Interact</TabsTrigger>
              <TabsTrigger value="saved">Saved Contracts</TabsTrigger>
            </TabsList>
          </div>
          
          {/* Contract Lookup Tab */}
          <TabsContent value="lookup" className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="contract-address">Contract Address</Label>
                <div className="flex mt-2">
                  <Input 
                    id="contract-address" 
                    placeholder="0x..." 
                    value={contract.address}
                    onChange={(e) => setContract(prev => ({ ...prev, address: e.target.value, error: null }))}
                  />
                  <Button 
                    className="ml-2" 
                    onClick={loadContract}
                    disabled={contract.loading}
                  >
                    {contract.loading ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <Search className="h-4 w-4 mr-2" />
                    )}
                    Load
                  </Button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="contract-network">Network</Label>
                <Select 
                  value={contract.network} 
                  onValueChange={(value) => setContract(prev => ({ ...prev, network: value }))}
                >
                  <SelectTrigger id="contract-network" className="mt-2">
                    <SelectValue placeholder="Select a network" />
                  </SelectTrigger>
                  <SelectContent>
                    {networks.map(network => (
                      <SelectItem key={network.id} value={network.id.toString()}>
                        {network.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {contract.error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{contract.error}</AlertDescription>
              </Alert>
            )}
            
            {contract.methods.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">{contract.name || 'Unnamed Contract'}</h3>
                    <p className="text-sm text-neutral-500">{contract.address}</p>
                  </div>
                  <div className="flex items-center">
                    {contract.isVerified && (
                      <Badge className="mr-2 bg-green-100 text-green-800 hover:bg-green-200 border-0">
                        <Check className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                    <Button variant="outline" size="sm">
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="mb-2 font-medium">Contract Methods</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Inputs</TableHead>
                          <TableHead>Outputs</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contract.methods.map((method, index) => (
                          <TableRow key={index} className="cursor-pointer hover:bg-neutral-50">
                            <TableCell className="font-medium">{method.name}</TableCell>
                            <TableCell>
                              <Badge className={cn(
                                "border-0",
                                method.functionType === 'read' ? "bg-blue-100 text-blue-800" :
                                method.functionType === 'write' ? "bg-amber-100 text-amber-800" :
                                method.functionType === 'event' ? "bg-purple-100 text-purple-800" :
                                "bg-neutral-100 text-neutral-800"
                              )}>
                                {method.functionType}
                              </Badge>
                            </TableCell>
                            <TableCell>{method.inputs.length}</TableCell>
                            <TableCell>{method.outputs?.length || 0}</TableCell>
                            <TableCell className="text-right">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => {
                                  handleMethodSelect(method);
                                  setActiveTab('interact');
                                }}
                              >
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <h4 className="font-medium">Common Contract Templates</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {interfaceCategories.map(category => (
                  <div key={category.name}>
                    <h5 className="text-sm font-medium text-neutral-500 mb-2">{category.name}</h5>
                    <div className="space-y-2">
                      {category.interfaces.map(iface => (
                        <Button 
                          key={iface.name} 
                          variant="outline" 
                          className="w-full justify-start"
                          onClick={() => {
                            if (iface.abiKey) {
                              loadAbiTemplate(iface.abiKey);
                              setSelectedAbiTemplate(iface.abiKey);
                              setActiveTab('abi');
                            }
                          }}
                          disabled={!iface.abiKey}
                        >
                          <FileJson className="h-4 w-4 mr-2" />
                          {iface.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Common Interactions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonInteractions.map((interaction, idx) => (
                  <Card key={idx} className="hover:bg-neutral-50 transition-colors cursor-pointer">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{interaction.name}</CardTitle>
                      <CardDescription>{interaction.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => {
                          // Load ABI template
                          loadAbiTemplate(interaction.contract);
                          
                          // Auto-select method
                          const method = contract.methods.find(m => m.name === interaction.method);
                          if (method) {
                            handleMethodSelect(method);
                            setActiveTab('interact');
                          }
                        }}
                      >
                        <Zap className="h-4 w-4 mr-2" />
                        Use Template
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* ABI Management Tab */}
          <TabsContent value="abi" className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="abi-template">ABI Template</Label>
                <Select 
                  value={selectedAbiTemplate} 
                  onValueChange={(value) => {
                    setSelectedAbiTemplate(value);
                    loadAbiTemplate(value);
                  }}
                >
                  <SelectTrigger id="abi-template">
                    <SelectValue placeholder="Select an ABI template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="erc20">ERC-20 Token</SelectItem>
                    <SelectItem value="erc721">ERC-721 NFT</SelectItem>
                    <SelectItem value="erc1155">ERC-1155 Multi-Token</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="custom-abi">Custom ABI</Label>
                  <div className="flex items-center">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => copyToClipboard(customAbi)}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setCustomAbi(JSON.stringify(contract.abi, null, 2))}
                    >
                      <Code className="h-4 w-4 mr-2" />
                      Current
                    </Button>
                  </div>
                </div>
                <Textarea 
                  id="custom-abi" 
                  className="font-mono text-xs h-64"
                  placeholder="Paste ABI JSON here..."
                  value={customAbi}
                  onChange={(e) => setCustomAbi(e.target.value)}
                />
              </div>
              
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => setCustomAbi('')}
                >
                  Clear
                </Button>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      // Save the ABI to the contract but don't parse it
                      const fileData = new Blob([customAbi], { type: 'application/json' });
                      const fileUrl = URL.createObjectURL(fileData);
                      const link = document.createElement('a');
                      link.href = fileUrl;
                      link.download = 'contract-abi.json';
                      link.click();
                    }}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button onClick={loadCustomAbi}>
                    <Zap className="h-4 w-4 mr-2" />
                    Load ABI
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Interact Tab */}
          <TabsContent value="interact" className="p-6 space-y-6">
            {!selectedMethod ? (
              <div className="text-center py-8">
                <FileJson className="h-16 w-16 mx-auto text-neutral-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No Method Selected</h3>
                <p className="text-sm text-neutral-500 max-w-md mx-auto mb-6">
                  Select a contract method from the Contract Lookup tab to interact with it.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setActiveTab('lookup')}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Browse Methods
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium flex items-center">
                      {selectedMethod.name}
                      <Badge className={cn(
                        "ml-2 border-0",
                        selectedMethod.functionType === 'read' ? "bg-blue-100 text-blue-800" :
                        selectedMethod.functionType === 'write' ? "bg-amber-100 text-amber-800" :
                        "bg-neutral-100 text-neutral-800"
                      )}>
                        {selectedMethod.functionType}
                      </Badge>
                    </h3>
                    <p className="text-sm text-neutral-500 font-mono mt-1">{selectedMethod.signature}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedMethod(null)}
                  >
                    Change Method
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Method Parameters</h4>
                  {selectedMethod.inputs.length === 0 ? (
                    <p className="text-sm text-neutral-500">This method doesn't require any parameters.</p>
                  ) : (
                    <div className="space-y-4">
                      {selectedMethod.inputs.map((input, idx) => (
                        <div key={idx}>
                          <Label htmlFor={`input-${idx}`} className="flex items-center">
                            {input.name || `param${idx}`}
                            <Badge variant="outline" className="ml-2 font-mono text-xs">
                              {input.type}
                            </Badge>
                          </Label>
                          <Input
                            id={`input-${idx}`}
                            className="font-mono mt-1"
                            placeholder={`Enter ${input.type} value...`}
                            value={methodInputs[input.name || ''] || ''}
                            onChange={(e) => handleInputChange(input.name || '', e.target.value)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {selectedMethod.payable && (
                    <div>
                      <Label htmlFor="method-value" className="flex items-center">
                        Value
                        <Badge variant="outline" className="ml-2 font-mono text-xs">
                          ETH
                        </Badge>
                      </Label>
                      <Input
                        id="method-value"
                        className="font-mono mt-1"
                        placeholder="0.0"
                        value={methodValue}
                        onChange={(e) => setMethodValue(e.target.value)}
                        type="number"
                        min="0"
                        step="0.001"
                      />
                    </div>
                  )}
                </div>
                
                <div className="flex justify-center pt-2">
                  <Button
                    onClick={selectedMethod.functionType === 'read' ? executeReadMethod : executeWriteMethod}
                    disabled={executing}
                    className="w-full sm:w-auto"
                  >
                    {executing && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                    {!executing && <Zap className="h-4 w-4 mr-2" />}
                    {selectedMethod.functionType === 'read' ? 'Read Contract' : 'Write Contract'}
                  </Button>
                </div>
                
                {executionError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Execution Failed</AlertTitle>
                    <AlertDescription>{executionError}</AlertDescription>
                  </Alert>
                )}
                
                {methodResult !== null && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Result</h4>
                    
                    {selectedMethod.functionType === 'read' ? (
                      <div className="bg-neutral-50 p-4 rounded-md">
                        <div className="flex items-start justify-between">
                          <pre className="font-mono text-sm overflow-x-auto whitespace-pre-wrap break-all max-h-60">
                            {formatResult(methodResult)}
                          </pre>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(formatResult(methodResult))}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-neutral-50 p-4 rounded-md">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Transaction Hash</span>
                            <div className="flex items-center space-x-2">
                              <Badge className={cn(
                                "border-0",
                                methodResult.status === 'confirmed' ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                              )}>
                                {methodResult.status}
                              </Badge>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(methodResult.hash)}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="font-mono text-sm break-all">{methodResult.hash}</div>
                          
                          {methodResult.blockNumber && (
                            <div className="pt-2">
                              <span className="text-sm font-medium">Block Number</span>
                              <div className="font-mono text-sm">{methodResult.blockNumber}</div>
                            </div>
                          )}
                          
                          {methodResult.gasUsed && (
                            <div className="pt-2">
                              <span className="text-sm font-medium">Gas Used</span>
                              <div className="font-mono text-sm">{methodResult.gasUsed}</div>
                            </div>
                          )}
                          
                          <div className="pt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full"
                              asChild
                            >
                              <a
                                href={`https://etherscan.io/tx/${methodResult.hash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View on Etherscan
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </TabsContent>
          
          {/* Saved Contracts Tab */}
          <TabsContent value="saved" className="p-6 space-y-6">
            {contract.savedContracts.length === 0 ? (
              <div className="text-center py-8">
                <Layers className="h-16 w-16 mx-auto text-neutral-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No Saved Contracts</h3>
                <p className="text-sm text-neutral-500 max-w-md mx-auto mb-6">
                  Save contracts for quick access later. Your saved contracts will appear here.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setActiveTab('lookup')}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Browse Contracts
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Saved contracts table would go here */}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
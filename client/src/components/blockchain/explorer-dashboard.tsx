import React, { useState, useEffect } from 'react';
import { useWallet } from '@/components/wallet/wallet-provider';
import { ethers } from 'ethers';
import { 
  ArrowLeftRight,
  ArrowUpRight, 
  BarChart, 
  Calendar, 
  ChevronRight,
  Clock, 
  Coins, 
  Copy, 
  Database, 
  ExternalLink, 
  FileText, 
  Filter, 
  Flag, 
  History, 
  Info, 
  Layers, 
  Link2, 
  Loader2, 
  MoreHorizontal, 
  RefreshCw,
  Search, 
  Settings, 
  Star, 
  Tag, 
  Timer, 
  TrendingUp, 
  Users, 
  Wallet 
} from 'lucide-react';
import { 
  Avatar, 
  AvatarFallback 
} from '@/components/ui/avatar';
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
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Alert, 
  AlertDescription, 
  AlertTitle 
} from '@/components/ui/alert';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Types for blockchain data
type Transaction = {
  hash: string;
  blockNumber: number;
  timestamp: number;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  nonce: number;
  status: 'confirmed' | 'pending' | 'failed';
  isIncoming: boolean;
  tokenTransfers?: TokenTransfer[];
  methodName?: string;
  methodSignature?: string;
};

type TokenTransfer = {
  token: {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logo?: string;
  };
  from: string;
  to: string;
  value: string;
  tokenType: 'ERC20' | 'ERC721' | 'ERC1155';
  tokenId?: string; // For NFTs
};

type Token = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  balance: string;
  balanceUsd?: string;
  price?: string;
  priceChange24h?: string;
  tokenType: 'ERC20' | 'ERC721' | 'ERC1155';
  logo?: string;
  isStarred?: boolean;
  lastUpdated?: number;
};

type NFT = {
  contractAddress: string;
  tokenId: string;
  name?: string;
  description?: string;
  tokenType: 'ERC721' | 'ERC1155';
  metadata?: {
    image?: string;
    animation_url?: string;
    attributes?: Array<{
      trait_type: string;
      value: string | number;
    }>;
  };
  ownerAddress: string;
  lastTransferred?: number;
};

type Network = {
  id: number;
  name: string;
  icon?: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrl: string;
};

type DashboardState = {
  activeTab: string;
  transactions: Transaction[];
  tokens: Token[];
  nfts: NFT[];
  isLoading: boolean;
  searchQuery: string;
  selectedNetwork: Network;
  watchlist: string[];
  filters: {
    transactionType: 'all' | 'incoming' | 'outgoing';
    dateRange: 'all' | 'today' | 'week' | 'month';
    tokenType: 'all' | 'ERC20' | 'ERC721' | 'ERC1155';
  };
};

// Available networks
const networks: Network[] = [
  {
    id: 1,
    name: 'Ethereum',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrl: 'https://etherscan.io',
  },
  {
    id: 137,
    name: 'Polygon',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    blockExplorerUrl: 'https://polygonscan.com',
  },
  {
    id: 56,
    name: 'BSC',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    blockExplorerUrl: 'https://bscscan.com',
  },
];

interface ExplorerDashboardProps {
  className?: string;
}

export function ExplorerDashboard({ className }: ExplorerDashboardProps) {
  const { isConnected, address, provider } = useWallet();
  const { toast } = useToast();
  
  // Dashboard state
  const [state, setState] = useState<DashboardState>({
    activeTab: 'transactions',
    transactions: [],
    tokens: [],
    nfts: [],
    isLoading: false,
    searchQuery: '',
    selectedNetwork: networks[0],
    watchlist: [],
    filters: {
      transactionType: 'all',
      dateRange: 'all',
      tokenType: 'all',
    },
  });
  
  const [viewingTransaction, setViewingTransaction] = useState<Transaction | null>(null);
  const [viewingToken, setViewingToken] = useState<Token | null>(null);
  const [viewingNFT, setViewingNFT] = useState<NFT | null>(null);
  
  // Mock data - in a real app these would be fetched from APIs
  // like Etherscan, Alchemy, Moralis, etc.
  const mockTransactions: Transaction[] = [
    {
      hash: '0x3a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1',
      blockNumber: 17792345,
      timestamp: Date.now() - 1000 * 60 * 10, // 10 minutes ago
      from: address || '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
      to: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', // Uniswap Router
      value: '0.05',
      gas: '150000',
      gasPrice: '25',
      nonce: 42,
      status: 'confirmed',
      isIncoming: false,
      methodName: 'swapExactETHForTokens',
      methodSignature: '0x7ff36ab5',
      tokenTransfers: [
        {
          token: {
            address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            name: 'Wrapped Ether',
            symbol: 'WETH',
            decimals: 18,
          },
          from: address || '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
          to: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
          value: '0.05',
          tokenType: 'ERC20',
        },
        {
          token: {
            address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
            name: 'Uniswap',
            symbol: 'UNI',
            decimals: 18,
          },
          from: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
          to: address || '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
          value: '10.5',
          tokenType: 'ERC20',
        },
      ],
    },
    {
      hash: '0x9f0e1d2c3b4a5f6e7d8c9b0a1f2e3d4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9f0',
      blockNumber: 17792300,
      timestamp: Date.now() - 1000 * 60 * 60 * 3, // 3 hours ago
      from: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI contract
      to: address || '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
      value: '0',
      gas: '65000',
      gasPrice: '22',
      nonce: 0,
      status: 'confirmed',
      isIncoming: true,
      tokenTransfers: [
        {
          token: {
            address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            name: 'Dai Stablecoin',
            symbol: 'DAI',
            decimals: 18,
          },
          from: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          to: address || '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
          value: '500',
          tokenType: 'ERC20',
        },
      ],
    },
    {
      hash: '0x8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a',
      blockNumber: 17792100,
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2, // 2 days ago
      from: address || '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
      to: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', // BAYC
      value: '0',
      gas: '180000',
      gasPrice: '30',
      nonce: 41,
      status: 'confirmed',
      isIncoming: false,
      methodName: 'safeTransferFrom',
      methodSignature: '0x42842e0e',
      tokenTransfers: [
        {
          token: {
            address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
            name: 'Bored Ape Yacht Club',
            symbol: 'BAYC',
            decimals: 0,
          },
          from: address || '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
          to: '0x1234567890123456789012345678901234567890',
          value: '1',
          tokenType: 'ERC721',
          tokenId: '1234',
        },
      ],
    },
  ];
  
  const mockTokens: Token[] = [
    {
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      balance: '2.5',
      balanceUsd: '5000',
      price: '2000',
      priceChange24h: '2.5',
      tokenType: 'ERC20',
      logo: 'https://assets.coingecko.com/coins/images/2518/small/weth.png',
      isStarred: true,
      lastUpdated: Date.now(),
    },
    {
      address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      name: 'Uniswap',
      symbol: 'UNI',
      decimals: 18,
      balance: '100',
      balanceUsd: '550',
      price: '5.50',
      priceChange24h: '-1.2',
      tokenType: 'ERC20',
      logo: 'https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png',
      lastUpdated: Date.now(),
    },
    {
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      balance: '500',
      balanceUsd: '500',
      price: '1.00',
      priceChange24h: '0.01',
      tokenType: 'ERC20',
      logo: 'https://assets.coingecko.com/coins/images/9956/small/4943.png',
      lastUpdated: Date.now(),
    },
  ];
  
  const mockNFTs: NFT[] = [
    {
      contractAddress: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      tokenId: '5678',
      name: 'Bored Ape #5678',
      description: 'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs.',
      tokenType: 'ERC721',
      metadata: {
        image: 'https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT93kvZEWXCP8QTLyXSL47NvpZiv9SzrEaZqoK6uILrWWHS2UQF5sYS-cVWuv3Jb9GYGFfUkGQhvKU?auto=format&w=1000',
        attributes: [
          { trait_type: 'Background', value: 'Blue' },
          { trait_type: 'Fur', value: 'Golden Brown' },
          { trait_type: 'Eyes', value: 'Bored' },
          { trait_type: 'Clothes', value: 'Hawaiian Shirt' },
        ],
      },
      ownerAddress: address || '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
      lastTransferred: Date.now() - 1000 * 60 * 60 * 24 * 30, // 30 days ago
    },
    {
      contractAddress: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
      tokenId: '4321',
      name: 'Mutant Ape #4321',
      description: 'The Mutant Ape Yacht Club is a collection of up to 20,000 Mutant Apes.',
      tokenType: 'ERC721',
      metadata: {
        image: 'https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&w=1000',
        attributes: [
          { trait_type: 'Background', value: 'Yellow' },
          { trait_type: 'Fur', value: 'Zombie' },
          { trait_type: 'Eyes', value: 'Wide Eyed' },
          { trait_type: 'Clothes', value: 'Leather Jacket' },
        ],
      },
      ownerAddress: address || '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
      lastTransferred: Date.now() - 1000 * 60 * 60 * 24 * 60, // 60 days ago
    },
  ];
  
  // Load blockchain data (mock implementation)
  useEffect(() => {
    const loadData = async () => {
      if (!isConnected || !address) return;
      
      setState(prev => ({ ...prev, isLoading: true }));
      
      try {
        // In a real app, these would be API calls
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setState(prev => ({
          ...prev,
          transactions: mockTransactions,
          tokens: mockTokens,
          nfts: mockNFTs,
          isLoading: false,
        }));
      } catch (error) {
        console.error('Error loading blockchain data:', error);
        toast({
          title: 'Error',
          description: 'Failed to load blockchain data. Please try again.',
          variant: 'destructive',
        });
        setState(prev => ({ ...prev, isLoading: false }));
      }
    };
    
    loadData();
  }, [isConnected, address, toast, state.selectedNetwork.id]);
  
  // Filter transactions based on current filters
  const filteredTransactions = state.transactions.filter(tx => {
    // Filter by search query
    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      const matchesHash = tx.hash.toLowerCase().includes(query);
      const matchesTo = tx.to.toLowerCase().includes(query);
      const matchesFrom = tx.from.toLowerCase().includes(query);
      const matchesMethod = tx.methodName?.toLowerCase().includes(query);
      
      if (!(matchesHash || matchesTo || matchesFrom || matchesMethod)) {
        return false;
      }
    }
    
    // Filter by transaction type
    if (state.filters.transactionType === 'incoming' && !tx.isIncoming) {
      return false;
    }
    if (state.filters.transactionType === 'outgoing' && tx.isIncoming) {
      return false;
    }
    
    // Filter by date range
    const now = Date.now();
    if (state.filters.dateRange === 'today') {
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);
      if (tx.timestamp < startOfDay.getTime()) {
        return false;
      }
    } else if (state.filters.dateRange === 'week') {
      const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;
      if (tx.timestamp < oneWeekAgo) {
        return false;
      }
    } else if (state.filters.dateRange === 'month') {
      const oneMonthAgo = now - 30 * 24 * 60 * 60 * 1000;
      if (tx.timestamp < oneMonthAgo) {
        return false;
      }
    }
    
    return true;
  });
  
  // Filter tokens based on current filters
  const filteredTokens = state.tokens.filter(token => {
    // Filter by search query
    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      const matchesName = token.name.toLowerCase().includes(query);
      const matchesSymbol = token.symbol.toLowerCase().includes(query);
      const matchesAddress = token.address.toLowerCase().includes(query);
      
      if (!(matchesName || matchesSymbol || matchesAddress)) {
        return false;
      }
    }
    
    // Filter by token type
    if (state.filters.tokenType !== 'all' && token.tokenType !== state.filters.tokenType) {
      return false;
    }
    
    return true;
  });
  
  // Filter NFTs based on current filters
  const filteredNFTs = state.nfts.filter(nft => {
    // Filter by search query
    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      const matchesName = nft.name?.toLowerCase().includes(query);
      const matchesAddress = nft.contractAddress.toLowerCase().includes(query);
      const matchesTokenId = nft.tokenId.includes(query);
      
      if (!(matchesName || matchesAddress || matchesTokenId)) {
        return false;
      }
    }
    
    return true;
  });
  
  // Toggle token star status
  const toggleTokenStar = (tokenAddress: string) => {
    setState(prev => ({
      ...prev,
      tokens: prev.tokens.map(token => 
        token.address === tokenAddress
          ? { ...token, isStarred: !token.isStarred }
          : token
      ),
    }));
    
    toast({
      title: 'Watchlist Updated',
      description: 'Token watchlist preference has been updated.',
    });
  };
  
  // Format address for display
  const formatAddress = (address: string) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };
  
  // Format timestamp to relative time
  const formatRelativeTime = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  };
  
  // Copy to clipboard helper
  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied',
      description: message,
    });
  };
  
  if (!isConnected) {
    return (
      <Card className={cn("w-full", className)}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Database className="h-5 w-5 mr-2 text-primary" />
            Blockchain Explorer Dashboard
          </CardTitle>
          <CardDescription>
            Connect your wallet to view your transactions, tokens, and NFTs
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-10">
          <Layers className="h-16 w-16 text-neutral-300 mb-4" />
          <h3 className="text-lg font-medium mb-2">Wallet Not Connected</h3>
          <p className="text-sm text-neutral-500 text-center max-w-md mb-6">
            Connect your wallet to track your blockchain activity, monitor your assets, and view your transaction history across multiple networks.
          </p>
          <Button>Connect Wallet</Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="flex items-center">
              <Database className="h-5 w-5 mr-2 text-primary" />
              Blockchain Explorer Dashboard
            </CardTitle>
            <CardDescription>
              Track your transactions, tokens, and NFTs across multiple networks
            </CardDescription>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Select 
              value={state.selectedNetwork.id.toString()} 
              onValueChange={(value) => {
                const network = networks.find(n => n.id === parseInt(value));
                if (network) {
                  setState(prev => ({ ...prev, selectedNetwork: network }));
                }
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Network" />
              </SelectTrigger>
              <SelectContent>
                {networks.map(network => (
                  <SelectItem key={network.id} value={network.id.toString()}>
                    <div className="flex items-center">
                      <span>{network.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-neutral-500" />
                <Input
                  placeholder="Search by address, tx hash, token..."
                  className="pl-9"
                  value={state.searchQuery}
                  onChange={(e) => setState(prev => ({ ...prev, searchQuery: e.target.value }))}
                />
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <Tabs 
          value={state.activeTab} 
          onValueChange={(value) => setState(prev => ({ ...prev, activeTab: value }))}
          className="w-full"
        >
          <div className="border-b px-6">
            <TabsList className="w-full justify-start h-12">
              <TabsTrigger value="transactions" className="flex items-center">
                <History className="h-4 w-4 mr-2" />
                <span>Transactions</span>
                <Badge className="ml-2 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                  {state.transactions.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="tokens" className="flex items-center">
                <Coins className="h-4 w-4 mr-2" />
                <span>Tokens</span>
                <Badge className="ml-2 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                  {state.tokens.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="nfts" className="flex items-center">
                <Image className="h-4 w-4 mr-2" />
                <span>NFTs</span>
                <Badge className="ml-2 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                  {state.nfts.length}
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Transactions Tab */}
          <TabsContent value="transactions" className="p-0">
            <div className="px-6 py-4 border-b flex flex-wrap gap-2">
              <Select 
                value={state.filters.transactionType} 
                onValueChange={(value) => {
                  setState(prev => ({
                    ...prev,
                    filters: {
                      ...prev.filters,
                      transactionType: value as 'all' | 'incoming' | 'outgoing',
                    },
                  }));
                }}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Transaction Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Transactions</SelectItem>
                  <SelectItem value="incoming">Incoming</SelectItem>
                  <SelectItem value="outgoing">Outgoing</SelectItem>
                </SelectContent>
              </Select>
              
              <Select 
                value={state.filters.dateRange} 
                onValueChange={(value) => {
                  setState(prev => ({
                    ...prev,
                    filters: {
                      ...prev.filters,
                      dateRange: value as 'all' | 'today' | 'week' | 'month',
                    },
                  }));
                }}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Past Week</SelectItem>
                  <SelectItem value="month">Past Month</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon" className="ml-auto h-10 w-10"
                onClick={() => setState(prev => ({ ...prev, searchQuery: '', filters: { transactionType: 'all', dateRange: 'all', tokenType: 'all' } }))}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
            
            {state.isLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : filteredTransactions.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tx Hash</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>From / To</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead className="w-[100px]">Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTransactions.map((tx) => (
                      <TableRow key={tx.hash} className="cursor-pointer hover:bg-neutral-50"
                        onClick={() => setViewingTransaction(tx)}>
                        <TableCell className="font-mono text-xs">
                          {formatAddress(tx.hash)}
                        </TableCell>
                        <TableCell>
                          {tx.methodName ? (
                            <Badge variant="outline" className={cn(
                              "border-0",
                              tx.isIncoming ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"
                            )}>
                              {tx.methodName}
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="border-0 bg-neutral-50 text-neutral-700">
                              Transfer
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-neutral-500 text-sm">
                          {formatRelativeTime(tx.timestamp)}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1">
                            <div className={cn(
                              "text-xs flex items-center",
                              tx.isIncoming ? "text-green-600" : "text-neutral-700"
                            )}>
                              <span>From:</span>
                              <span className="ml-1 font-mono">{formatAddress(tx.from)}</span>
                            </div>
                            <div className={cn(
                              "text-xs flex items-center",
                              !tx.isIncoming ? "text-blue-600" : "text-neutral-700"
                            )}>
                              <span>To:</span>
                              <span className="ml-1 font-mono">{formatAddress(tx.to)}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {tx.tokenTransfers && tx.tokenTransfers.length > 0 ? (
                            <div className="flex flex-col gap-1">
                              {tx.tokenTransfers.map((transfer, idx) => (
                                <div key={idx} className={cn(
                                  "text-xs flex items-center",
                                  transfer.to.toLowerCase() === address?.toLowerCase() 
                                    ? "text-green-600" 
                                    : "text-blue-600"
                                )}>
                                  <span>{transfer.value} {transfer.token.symbol}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className={cn(
                              "text-sm",
                              tx.isIncoming ? "text-green-600" : "text-blue-600"
                            )}>
                              {tx.value} {state.selectedNetwork.nativeCurrency.symbol}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge className={cn(
                            tx.status === 'confirmed' 
                              ? "bg-green-100 text-green-800"
                              : tx.status === 'pending'
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          )}>
                            {tx.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end">
                            <Button variant="ghost" size="icon" asChild
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(`${state.selectedNetwork.blockExplorerUrl}/tx/${tx.hash}`, '_blank');
                              }}>
                              <a href={`${state.selectedNetwork.blockExplorerUrl}/tx/${tx.hash}`} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <FileText className="h-16 w-16 text-neutral-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No Transactions Found</h3>
                <p className="text-sm text-neutral-500 text-center max-w-md">
                  {state.searchQuery 
                    ? "No transactions match your search criteria. Try adjusting your filters."
                    : "We couldn't find any transactions for this address. Try changing the network or checking back later."}
                </p>
              </div>
            )}
          </TabsContent>
          
          {/* Tokens Tab */}
          <TabsContent value="tokens" className="p-0">
            <div className="px-6 py-4 border-b flex flex-wrap gap-2">
              <Select 
                value={state.filters.tokenType} 
                onValueChange={(value) => {
                  setState(prev => ({
                    ...prev,
                    filters: {
                      ...prev.filters,
                      tokenType: value as 'all' | 'ERC20' | 'ERC721' | 'ERC1155',
                    },
                  }));
                }}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Token Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="ERC20">ERC-20</SelectItem>
                  <SelectItem value="ERC721">ERC-721</SelectItem>
                  <SelectItem value="ERC1155">ERC-1155</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon" className="ml-auto h-10 w-10"
                onClick={() => setState(prev => ({ ...prev, searchQuery: '', filters: { transactionType: 'all', dateRange: 'all', tokenType: 'all' } }))}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
            
            {state.isLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : filteredTokens.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]"></TableHead>
                      <TableHead>Token</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTokens.map((token) => (
                      <TableRow key={token.address} className="cursor-pointer hover:bg-neutral-50"
                        onClick={() => setViewingToken(token)}>
                        <TableCell className="w-[50px]">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleTokenStar(token.address);
                            }}
                          >
                            <Star 
                              className={cn(
                                "h-4 w-4", 
                                token.isStarred 
                                  ? "fill-yellow-400 text-yellow-400" 
                                  : "text-neutral-300"
                              )} 
                            />
                          </Button>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {token.logo ? (
                              <Avatar className="h-6 w-6">
                                <img src={token.logo} alt={token.name} />
                              </Avatar>
                            ) : (
                              <Avatar className="h-6 w-6 bg-primary-50">
                                <AvatarFallback className="text-primary-700 text-xs">
                                  {token.symbol.substring(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                            )}
                            <div>
                              <div className="font-medium">{token.symbol}</div>
                              <div className="text-xs text-neutral-500">{token.name}</div>
                            </div>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {token.tokenType}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{parseFloat(token.balance).toLocaleString()}</div>
                        </TableCell>
                        <TableCell>
                          {token.balanceUsd && (
                            <div className="font-medium">
                              ${parseFloat(token.balanceUsd).toLocaleString()}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="font-medium">${token.price}</div>
                            {token.priceChange24h && (
                              <Badge className={cn(
                                "ml-2 border-none text-xs",
                                parseFloat(token.priceChange24h) >= 0
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              )}>
                                {parseFloat(token.priceChange24h) >= 0 ? '+' : ''}{token.priceChange24h}%
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end">
                            <Button variant="ghost" size="icon" asChild
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(`${state.selectedNetwork.blockExplorerUrl}/token/${token.address}`, '_blank');
                              }}>
                              <a href={`${state.selectedNetwork.blockExplorerUrl}/token/${token.address}`} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <Coins className="h-16 w-16 text-neutral-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No Tokens Found</h3>
                <p className="text-sm text-neutral-500 text-center max-w-md">
                  {state.searchQuery 
                    ? "No tokens match your search criteria. Try adjusting your filters."
                    : "We couldn't find any tokens for this address. Try changing the network or import a token manually."}
                </p>
              </div>
            )}
          </TabsContent>
          
          {/* NFTs Tab */}
          <TabsContent value="nfts" className="p-0">
            {state.isLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : filteredNFTs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {filteredNFTs.map((nft) => (
                  <Card key={`${nft.contractAddress}-${nft.tokenId}`} className="overflow-hidden cursor-pointer"
                    onClick={() => setViewingNFT(nft)}>
                    <div className="aspect-square bg-neutral-100 relative">
                      {nft.metadata?.image ? (
                        <img 
                          src={nft.metadata.image} 
                          alt={nft.name || `NFT #${nft.tokenId}`} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileImage className="h-16 w-16 text-neutral-300" />
                        </div>
                      )}
                      <Badge className="absolute top-3 right-3 bg-black/50 text-white border-none">
                        {nft.tokenType}
                      </Badge>
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-medium truncate">{nft.name || `NFT #${nft.tokenId}`}</h3>
                      <p className="text-xs text-neutral-500 truncate">
                        {formatAddress(nft.contractAddress)} • #{nft.tokenId}
                      </p>
                      {nft.metadata?.attributes && nft.metadata.attributes.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {nft.metadata.attributes.slice(0, 3).map((attr, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {attr.trait_type}: {attr.value}
                            </Badge>
                          ))}
                          {nft.metadata.attributes.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{nft.metadata.attributes.length - 3} more
                            </Badge>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <Image className="h-16 w-16 text-neutral-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No NFTs Found</h3>
                <p className="text-sm text-neutral-500 text-center max-w-md">
                  {state.searchQuery 
                    ? "No NFTs match your search criteria. Try adjusting your search."
                    : "We couldn't find any NFTs for this address. Try changing the network or check back later."}
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="bg-neutral-50 p-6 text-xs text-neutral-500 flex items-center justify-between border-t">
        <div className="flex items-center">
          <Info className="h-3 w-3 mr-1" />
          Data is updated in real-time as transactions occur
        </div>
        <div>
          <a
            href={state.selectedNetwork.blockExplorerUrl + '/address/' + address}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary cursor-pointer"
          >
            View on {state.selectedNetwork.name} Explorer
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      </CardFooter>
      
      {/* Transaction Details Dialog */}
      <Dialog open={!!viewingTransaction} onOpenChange={(open) => !open && setViewingTransaction(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <History className="h-5 w-5 mr-2 text-primary" />
              Transaction Details
            </DialogTitle>
          </DialogHeader>
          
          {viewingTransaction && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge className={cn(
                  viewingTransaction.status === 'confirmed' 
                    ? "bg-green-100 text-green-800"
                    : viewingTransaction.status === 'pending'
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                )}>
                  {viewingTransaction.status}
                </Badge>
                <span className="text-sm text-neutral-500">
                  {new Date(viewingTransaction.timestamp).toLocaleString()}
                </span>
              </div>
              
              <div>
                <Label className="text-xs text-neutral-500">Transaction Hash</Label>
                <div className="flex items-center justify-between">
                  <code className="text-sm font-mono break-all">
                    {viewingTransaction.hash}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => copyToClipboard(viewingTransaction.hash, 'Transaction hash copied to clipboard')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-neutral-500">From</Label>
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono break-all">
                      {viewingTransaction.from}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(viewingTransaction.from, 'From address copied to clipboard')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label className="text-xs text-neutral-500">To</Label>
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono break-all">
                      {viewingTransaction.to}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(viewingTransaction.to, 'To address copied to clipboard')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {viewingTransaction.methodName && (
                <div>
                  <Label className="text-xs text-neutral-500">Method</Label>
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono">
                      {viewingTransaction.methodName} {viewingTransaction.methodSignature && `(${viewingTransaction.methodSignature})`}
                    </code>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-xs text-neutral-500">Block</Label>
                  <div className="text-sm font-medium">
                    {viewingTransaction.blockNumber.toLocaleString()}
                  </div>
                </div>
                
                <div>
                  <Label className="text-xs text-neutral-500">Gas Used</Label>
                  <div className="text-sm font-medium">
                    {viewingTransaction.gas} units
                  </div>
                </div>
                
                <div>
                  <Label className="text-xs text-neutral-500">Gas Price</Label>
                  <div className="text-sm font-medium">
                    {viewingTransaction.gasPrice} Gwei
                  </div>
                </div>
              </div>
              
              {viewingTransaction.tokenTransfers && viewingTransaction.tokenTransfers.length > 0 && (
                <div>
                  <Label className="text-xs text-neutral-500">Token Transfers</Label>
                  <div className="space-y-2 mt-2">
                    {viewingTransaction.tokenTransfers.map((transfer, idx) => (
                      <div key={idx} className="bg-neutral-50 p-3 rounded-md">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{transfer.token.name}</span>
                          <Badge variant="outline">
                            {transfer.tokenType}
                          </Badge>
                        </div>
                        <div className="flex flex-col space-y-1 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-neutral-500">From</span>
                            <code className="font-mono text-xs">{formatAddress(transfer.from)}</code>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-neutral-500">To</span>
                            <code className="font-mono text-xs">{formatAddress(transfer.to)}</code>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-neutral-500">Amount</span>
                            <span>{transfer.value} {transfer.token.symbol}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <DialogFooter>
                <Button asChild variant="outline">
                  <a 
                    href={`${state.selectedNetwork.blockExplorerUrl}/tx/${viewingTransaction.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View on {state.selectedNetwork.name} Explorer
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Token Details Dialog */}
      <Dialog open={!!viewingToken} onOpenChange={(open) => !open && setViewingToken(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Coins className="h-5 w-5 mr-2 text-primary" />
              Token Details
            </DialogTitle>
          </DialogHeader>
          
          {viewingToken && (
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {viewingToken.logo ? (
                  <Avatar className="h-12 w-12">
                    <img src={viewingToken.logo} alt={viewingToken.name} />
                  </Avatar>
                ) : (
                  <Avatar className="h-12 w-12 bg-primary-50">
                    <AvatarFallback className="text-primary-700">
                      {viewingToken.symbol.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <h3 className="font-medium text-lg">{viewingToken.name}</h3>
                  <div className="flex items-center">
                    <span className="text-neutral-500 mr-2">{viewingToken.symbol}</span>
                    <Badge variant="outline">{viewingToken.tokenType}</Badge>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="ml-auto"
                  onClick={() => toggleTokenStar(viewingToken.address)}
                >
                  <Star 
                    className={cn(
                      "h-5 w-5", 
                      viewingToken.isStarred 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-neutral-300"
                    )} 
                  />
                </Button>
              </div>
              
              <div>
                <Label className="text-xs text-neutral-500">Token Address</Label>
                <div className="flex items-center justify-between">
                  <code className="text-sm font-mono break-all">
                    {viewingToken.address}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => copyToClipboard(viewingToken.address, 'Token address copied to clipboard')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Balance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{parseFloat(viewingToken.balance).toLocaleString()}</div>
                    {viewingToken.balanceUsd && (
                      <div className="text-neutral-500">${parseFloat(viewingToken.balanceUsd).toLocaleString()}</div>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Price</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${viewingToken.price}</div>
                    {viewingToken.priceChange24h && (
                      <div className={cn(
                        "flex items-center",
                        parseFloat(viewingToken.priceChange24h) >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      )}>
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {parseFloat(viewingToken.priceChange24h) >= 0 ? '+' : ''}{viewingToken.priceChange24h}% (24h)
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-neutral-500">Decimals</Label>
                  <div className="text-sm font-medium">
                    {viewingToken.decimals}
                  </div>
                </div>
                
                <div>
                  <Label className="text-xs text-neutral-500">Last Updated</Label>
                  <div className="text-sm font-medium">
                    {viewingToken.lastUpdated ? new Date(viewingToken.lastUpdated).toLocaleString() : 'N/A'}
                  </div>
                </div>
              </div>
              
              <DialogFooter className="flex flex-col sm:flex-row gap-2">
                <Button asChild variant="outline">
                  <a 
                    href={`${state.selectedNetwork.blockExplorerUrl}/token/${viewingToken.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View on {state.selectedNetwork.name} Explorer
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
                
                <Button onClick={() => {
                  // Here you'd integrate with the Swap feature
                  toast({
                    title: 'Swap Interface',
                    description: 'Redirecting to token swap interface...',
                  });
                  
                  // In a real app, you'd redirect to the swap page with this token pre-selected
                  // or open a swap modal
                }}>
                  <ArrowLeftRight className="h-4 w-4 mr-2" />
                  Swap Token
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      {/* NFT Details Dialog */}
      <Dialog open={!!viewingNFT} onOpenChange={(open) => !open && setViewingNFT(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Image className="h-5 w-5 mr-2 text-primary" />
              NFT Details
            </DialogTitle>
          </DialogHeader>
          
          {viewingNFT && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square bg-neutral-100 rounded-md overflow-hidden">
                {viewingNFT.metadata?.image ? (
                  <img 
                    src={viewingNFT.metadata.image} 
                    alt={viewingNFT.name || `NFT #${viewingNFT.tokenId}`} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FileImage className="h-16 w-16 text-neutral-300" />
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-bold">{viewingNFT.name || `NFT #${viewingNFT.tokenId}`}</h2>
                  {viewingNFT.description && (
                    <p className="text-neutral-500 mt-1">{viewingNFT.description}</p>
                  )}
                </div>
                
                <div>
                  <Label className="text-xs text-neutral-500">Token ID</Label>
                  <div className="text-sm font-mono">
                    {viewingNFT.tokenId}
                  </div>
                </div>
                
                <div>
                  <Label className="text-xs text-neutral-500">Contract Address</Label>
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono break-all">
                      {viewingNFT.contractAddress}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(viewingNFT.contractAddress, 'Contract address copied to clipboard')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label className="text-xs text-neutral-500">Owner</Label>
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono break-all">
                      {viewingNFT.ownerAddress}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => copyToClipboard(viewingNFT.ownerAddress, 'Owner address copied to clipboard')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {viewingNFT.lastTransferred && (
                  <div>
                    <Label className="text-xs text-neutral-500">Last Transferred</Label>
                    <div className="text-sm">
                      {new Date(viewingNFT.lastTransferred).toLocaleString()}
                    </div>
                  </div>
                )}
                
                {viewingNFT.metadata?.attributes && viewingNFT.metadata.attributes.length > 0 && (
                  <div>
                    <Label className="text-xs text-neutral-500">Attributes</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {viewingNFT.metadata.attributes.map((attr, idx) => (
                        <div key={idx} className="bg-neutral-50 p-2 rounded-md">
                          <div className="text-xs text-neutral-500">{attr.trait_type}</div>
                          <div className="font-medium">{attr.value.toString()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <DialogFooter>
                  <Button asChild variant="outline">
                    <a 
                      href={`${state.selectedNetwork.blockExplorerUrl}/token/${viewingNFT.contractAddress}?a=${viewingNFT.tokenId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      View on {state.selectedNetwork.name} Explorer
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </DialogFooter>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
}

// An additional component needed to address missing Image component from lucide
const Image = (props: React.ComponentProps<typeof FileText>) => {
  return <FileText {...props} />;
};

const FileImage = (props: React.ComponentProps<typeof FileText>) => {
  return <FileText {...props} />;
};

const RotateCcw = (props: React.ComponentProps<typeof RefreshCw>) => {
  return <RefreshCw {...props} />;
};
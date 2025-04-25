import React, { useState, useEffect } from 'react';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useDex, Token } from './dex-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, Search, Plus, AlertTriangle, ExternalLink } from 'lucide-react';

interface TokenSelectProps {
  value: string;
  onSelect: (value: string) => void;
  disabledTokenAddresses?: string[];
}

export const TokenSelect: React.FC<TokenSelectProps> = ({ 
  value, 
  onSelect,
  disabledTokenAddresses = []
}) => {
  const { availableTokens, popularTokens, addCustomToken } = useDex();
  const { isConnected } = useWallet();
  
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTokens, setFilteredTokens] = useState<Token[]>([]);
  const [activeTab, setActiveTab] = useState<string>('popular');
  
  // Form state for custom token
  const [customToken, setCustomToken] = useState({
    address: '',
    name: '',
    symbol: '',
    decimals: '18'
  });
  
  // Get the selected token display
  const selectedToken = availableTokens.find(token => token.address === value);
  
  // Filter tokens based on search query
  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();
    
    if (!query) {
      if (activeTab === 'popular') {
        setFilteredTokens(popularTokens);
      } else {
        setFilteredTokens(availableTokens);
      }
      return;
    }
    
    const tokensToFilter = activeTab === 'popular' ? popularTokens : availableTokens;
    
    const filtered = tokensToFilter.filter(token => 
      token.name.toLowerCase().includes(query) || 
      token.symbol.toLowerCase().includes(query) || 
      token.address.toLowerCase().includes(query)
    );
    
    setFilteredTokens(filtered);
  }, [searchQuery, availableTokens, popularTokens, activeTab]);
  
  // Reset search when dialog opens
  useEffect(() => {
    if (open) {
      setSearchQuery('');
      setActiveTab('popular');
      setFilteredTokens(popularTokens);
    }
  }, [open, popularTokens]);
  
  // Handle token selection
  const handleSelectToken = (tokenAddress: string) => {
    onSelect(tokenAddress);
    setOpen(false);
  };
  
  // Handle adding custom token
  const handleAddCustomToken = () => {
    const newToken: Token = {
      address: customToken.address,
      name: customToken.name,
      symbol: customToken.symbol,
      decimals: parseInt(customToken.decimals),
      logoUrl: undefined
    };
    
    addCustomToken(newToken);
    setCustomToken({
      address: '',
      name: '',
      symbol: '',
      decimals: '18'
    });
    setActiveTab('all');
  };
  
  // Check if custom token form is valid
  const isCustomTokenValid = () => {
    return (
      customToken.address.startsWith('0x') && 
      customToken.address.length === 42 &&
      customToken.name.trim() !== '' &&
      customToken.symbol.trim() !== '' &&
      !isNaN(parseInt(customToken.decimals))
    );
  };
  
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="flex items-center justify-between w-32 h-10"
          >
            {selectedToken ? (
              <div className="flex items-center">
                {selectedToken.logoUrl ? (
                  <img
                    src={selectedToken.logoUrl}
                    alt={selectedToken.symbol}
                    className="w-5 h-5 mr-2 rounded-full"
                  />
                ) : (
                  <div className="w-5 h-5 bg-primary/20 rounded-full mr-2" />
                )}
                <span>{selectedToken.symbol}</span>
              </div>
            ) : (
              <span>Select Token</span>
            )}
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select a token</DialogTitle>
          </DialogHeader>
          
          <div className="p-1">
            <Input
              placeholder="Search name or paste address"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-4"
              prefix={<Search className="h-4 w-4 mr-2 text-neutral-500" />}
            />
            
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="all">All Tokens</TabsTrigger>
                <TabsTrigger value="custom">Add Custom</TabsTrigger>
              </TabsList>
              
              <TabsContent value="popular" className="mt-0">
                <ScrollArea className="h-60">
                  <div className="space-y-1">
                    {filteredTokens.length > 0 ? (
                      filteredTokens.map((token) => (
                        <Button
                          key={token.address}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start font-normal h-12"
                          disabled={disabledTokenAddresses.includes(token.address)}
                          onClick={() => handleSelectToken(token.address)}
                        >
                          <div className="flex items-center w-full">
                            {token.logoUrl ? (
                              <img
                                src={token.logoUrl}
                                alt={token.symbol}
                                className="w-6 h-6 mr-3 rounded-full"
                              />
                            ) : (
                              <div className="w-6 h-6 bg-primary/20 rounded-full mr-3 flex items-center justify-center">
                                {token.symbol.charAt(0)}
                              </div>
                            )}
                            <div className="flex flex-col items-start">
                              <span>{token.symbol}</span>
                              <span className="text-xs text-neutral-500">{token.name}</span>
                            </div>
                            {token.balance && isConnected && (
                              <div className="ml-auto text-right">
                                <span className="text-sm">
                                  {parseFloat(token.balance.formatted).toLocaleString(undefined, {
                                    maximumFractionDigits: 6
                                  })}
                                </span>
                              </div>
                            )}
                          </div>
                        </Button>
                      ))
                    ) : (
                      <div className="py-6 text-center text-neutral-500">
                        <p>No tokens found</p>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="all" className="mt-0">
                <ScrollArea className="h-60">
                  <div className="space-y-1">
                    {filteredTokens.length > 0 ? (
                      filteredTokens.map((token) => (
                        <Button
                          key={token.address}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start font-normal h-12"
                          disabled={disabledTokenAddresses.includes(token.address)}
                          onClick={() => handleSelectToken(token.address)}
                        >
                          <div className="flex items-center w-full">
                            {token.logoUrl ? (
                              <img
                                src={token.logoUrl}
                                alt={token.symbol}
                                className="w-6 h-6 mr-3 rounded-full"
                              />
                            ) : (
                              <div className="w-6 h-6 bg-primary/20 rounded-full mr-3 flex items-center justify-center">
                                {token.symbol.charAt(0)}
                              </div>
                            )}
                            <div className="flex flex-col items-start">
                              <span>{token.symbol}</span>
                              <span className="text-xs text-neutral-500">{token.name}</span>
                            </div>
                            {token.balance && isConnected && (
                              <div className="ml-auto text-right">
                                <span className="text-sm">
                                  {parseFloat(token.balance.formatted).toLocaleString(undefined, {
                                    maximumFractionDigits: 6
                                  })}
                                </span>
                              </div>
                            )}
                          </div>
                        </Button>
                      ))
                    ) : (
                      <div className="py-6 text-center text-neutral-500">
                        <p>No tokens found</p>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="custom" className="mt-0">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="token-address">Token Address</Label>
                    <Input
                      id="token-address"
                      placeholder="0x..."
                      value={customToken.address}
                      onChange={(e) => setCustomToken({ ...customToken, address: e.target.value })}
                    />
                    <p className="text-xs text-neutral-500 mt-1">
                      Enter the token contract address
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="token-name">Token Name</Label>
                      <Input
                        id="token-name"
                        placeholder="Ethereum"
                        value={customToken.name}
                        onChange={(e) => setCustomToken({ ...customToken, name: e.target.value })}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="token-symbol">Token Symbol</Label>
                      <Input
                        id="token-symbol"
                        placeholder="ETH"
                        value={customToken.symbol}
                        onChange={(e) => setCustomToken({ ...customToken, symbol: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="token-decimals">Token Decimals</Label>
                    <Input
                      id="token-decimals"
                      type="number"
                      placeholder="18"
                      value={customToken.decimals}
                      onChange={(e) => setCustomToken({ ...customToken, decimals: e.target.value })}
                    />
                    <p className="text-xs text-neutral-500 mt-1">
                      Most tokens use 18 decimals
                    </p>
                  </div>
                  
                  <div className="flex items-center p-3 bg-amber-50 text-amber-700 rounded-md">
                    <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <p className="text-xs">
                      Make sure you are adding the correct token contract. Malicious tokens can lead to loss of funds.
                    </p>
                  </div>
                  
                  <Button
                    onClick={handleAddCustomToken}
                    disabled={!isCustomTokenValid()}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Custom Token
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
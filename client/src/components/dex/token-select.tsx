import React, { useState } from 'react';
import { Check, ChevronsUpDown, PlusCircle, Search, X } from 'lucide-react';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useDex } from './dex-provider';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

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
  const [customTokenOpen, setCustomTokenOpen] = useState(false);
  const [customTokenAddress, setCustomTokenAddress] = useState('');
  const [customTokenAddressError, setCustomTokenAddressError] = useState('');
  const [isAddingToken, setIsAddingToken] = useState(false);
  
  // Get the selected token details
  const selectedToken = availableTokens.find(token => token.address.toLowerCase() === value.toLowerCase());
  
  // Handle token selection
  const handleSelectToken = (tokenAddress: string) => {
    onSelect(tokenAddress);
    setOpen(false);
  };
  
  // Handle adding a custom token
  const handleAddCustomToken = async () => {
    if (!customTokenAddress) {
      setCustomTokenAddressError('Please enter a token address');
      return;
    }
    
    if (!customTokenAddress.startsWith('0x') || customTokenAddress.length !== 42) {
      setCustomTokenAddressError('Please enter a valid token address');
      return;
    }
    
    setIsAddingToken(true);
    setCustomTokenAddressError('');
    
    try {
      const token = await addCustomToken(customTokenAddress);
      
      if (token) {
        onSelect(token.address);
        setCustomTokenOpen(false);
        setCustomTokenAddress('');
      }
    } catch (error) {
      console.error('Error adding custom token:', error);
      setCustomTokenAddressError('Failed to add token. Please check the address and try again.');
    } finally {
      setIsAddingToken(false);
    }
  };
  
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {selectedToken ? (
              <div className="flex items-center">
                {selectedToken.logoUrl && (
                  <img 
                    src={selectedToken.logoUrl} 
                    alt={selectedToken.symbol} 
                    className="w-5 h-5 mr-2 rounded-full"
                  />
                )}
                <span>{selectedToken.symbol}</span>
                {selectedToken.balance && (
                  <span className="ml-2 text-neutral-500 text-sm">
                    {parseFloat(selectedToken.balance.formatted).toLocaleString(undefined, {
                      maximumFractionDigits: 6
                    })}
                  </span>
                )}
              </div>
            ) : (
              <span>Select token</span>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search token..." />
            <CommandList>
              <CommandEmpty>No tokens found.</CommandEmpty>
              
              {popularTokens.length > 0 && (
                <CommandGroup heading="Popular Tokens">
                  {popularTokens.map((token) => (
                    <CommandItem
                      key={token.address}
                      value={token.address}
                      onSelect={() => handleSelectToken(token.address)}
                      disabled={disabledTokenAddresses.includes(token.address.toLowerCase())}
                      className={cn(
                        disabledTokenAddresses.includes(token.address.toLowerCase()) && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <div className="flex items-center">
                        {token.logoUrl && (
                          <img 
                            src={token.logoUrl} 
                            alt={token.symbol} 
                            className="w-5 h-5 mr-2 rounded-full"
                          />
                        )}
                        <span>{token.symbol}</span>
                        <span className="ml-2 text-neutral-500 text-sm">
                          {token.name}
                        </span>
                        {isConnected && token.balance && (
                          <span className="ml-auto text-neutral-500 text-sm">
                            {parseFloat(token.balance.formatted).toLocaleString(undefined, {
                              maximumFractionDigits: 4
                            })}
                          </span>
                        )}
                      </div>
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedToken?.address.toLowerCase() === token.address.toLowerCase()
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              
              {availableTokens.length > popularTokens.length && (
                <CommandGroup heading="All Tokens">
                  {availableTokens
                    .filter(token => !popularTokens.find(p => p.address.toLowerCase() === token.address.toLowerCase()))
                    .map((token) => (
                      <CommandItem
                        key={token.address}
                        value={token.address}
                        onSelect={() => handleSelectToken(token.address)}
                        disabled={disabledTokenAddresses.includes(token.address.toLowerCase())}
                        className={cn(
                          disabledTokenAddresses.includes(token.address.toLowerCase()) && "opacity-50 cursor-not-allowed"
                        )}
                      >
                        <div className="flex items-center">
                          {token.logoUrl && (
                            <img 
                              src={token.logoUrl} 
                              alt={token.symbol} 
                              className="w-5 h-5 mr-2 rounded-full"
                            />
                          )}
                          <span>{token.symbol}</span>
                          <span className="ml-2 text-neutral-500 text-sm">
                            {token.name}
                          </span>
                          {isConnected && token.balance && (
                            <span className="ml-auto text-neutral-500 text-sm">
                              {parseFloat(token.balance.formatted).toLocaleString(undefined, {
                                maximumFractionDigits: 4
                              })}
                            </span>
                          )}
                        </div>
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            selectedToken?.address.toLowerCase() === token.address.toLowerCase()
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                </CommandGroup>
              )}
              
              <CommandSeparator />
              
              <CommandGroup>
                <Dialog open={customTokenOpen} onOpenChange={setCustomTokenOpen}>
                  <DialogTrigger asChild>
                    <CommandItem onSelect={() => setCustomTokenOpen(true)}>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>Add Custom Token</span>
                    </CommandItem>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Custom Token</DialogTitle>
                      <DialogDescription>
                        Enter the token contract address to add it to your list.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="token-address">Token Address</Label>
                        <Input
                          id="token-address"
                          placeholder="0x..."
                          value={customTokenAddress}
                          onChange={(e) => setCustomTokenAddress(e.target.value)}
                        />
                        {customTokenAddressError && (
                          <p className="text-sm text-red-500">{customTokenAddressError}</p>
                        )}
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setCustomTokenOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddCustomToken} disabled={isAddingToken}>
                        {isAddingToken ? 'Adding...' : 'Add Token'}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
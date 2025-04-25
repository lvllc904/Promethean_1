import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, DownloadCloud, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

interface WalletFallbackProps {
  onClose: () => void;
}

export function WalletFallback({ onClose }: WalletFallbackProps) {
  const handleContinue = () => {
    // Close the warning dialog and let user continue without wallet
    onClose();
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-red-50 dark:bg-red-900/20 border-b">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <CardTitle className="text-lg">Wallet Error</CardTitle>
        </div>
        <CardDescription>
          No Ethereum wallet detected. Some functionality will be limited.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <p className="text-sm">
          To access the full features of the DAC Marketplace, you'll need a Web3 wallet like MetaMask.
          Without a wallet, you can still browse the platform, but you won't be able to:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Connect to your digital assets</li>
          <li>Participate in DAO governance</li>
          <li>Purchase or tokenize properties</li>
          <li>Receive payments for completed tasks</li>
        </ul>

        <div className="rounded-lg bg-muted p-4">
          <h4 className="font-medium mb-2">Install a wallet</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <a 
              href="https://metamask.io/download/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <DownloadCloud className="h-4 w-4" />
              MetaMask
              <ExternalLink className="h-3 w-3 ml-auto" />
            </a>
            <a 
              href="https://www.coinbase.com/wallet" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <DownloadCloud className="h-4 w-4" />
              Coinbase Wallet
              <ExternalLink className="h-3 w-3 ml-auto" />
            </a>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" onClick={handleContinue}>
          Continue as Guest
        </Button>
        <Link href="/">
          <Button>
            Return to Home
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
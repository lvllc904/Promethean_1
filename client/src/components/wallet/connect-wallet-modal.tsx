import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useWallet } from "./wallet-provider";
import { ChevronRight, AlertTriangle, Download, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface WalletOption {
  id: string;
  name: string;
  icon: string;
  description: string;
  downloadUrl: string;
}

export function ConnectWalletModal() {
  const { isModalOpen, closeModal, connect } = useWallet();
  const [isConnecting, setIsConnecting] = useState(false);
  const [hasEthereum, setHasEthereum] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("connect");
  
  useEffect(() => {
    // Check if ethereum is available in window
    if (typeof window !== 'undefined') {
      setHasEthereum(!!window.ethereum);
      setActiveTab(!!window.ethereum ? "connect" : "install");
    }
  }, [isModalOpen]); // Re-check when modal opens
  
  const walletOptions: WalletOption[] = [
    {
      id: 'metamask',
      name: 'MetaMask',
      icon: 'https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg',
      description: 'The most popular Ethereum wallet',
      downloadUrl: 'https://metamask.io/download/'
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      icon: 'https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png',
      description: 'Connect using multiple wallets',
      downloadUrl: 'https://walletconnect.com/'
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      icon: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0=w240-h480-rw',
      description: 'Easy to use mobile wallet',
      downloadUrl: 'https://www.coinbase.com/wallet/downloads'
    }
  ];
  
  const handleConnect = async (walletId: string) => {
    setIsConnecting(true);
    try {
      await connect(walletId);
      // closeModal will be called in the wallet provider if connection is successful
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };
  
  const handleDownload = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>
            Connect your wallet to access the DAC Marketplace platform. You'll be able to browse properties, participate in DAO governance, and more.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="connect" disabled={!hasEthereum}>Connect</TabsTrigger>
            <TabsTrigger value="install">Install</TabsTrigger>
          </TabsList>
          
          <TabsContent value="connect" className="mt-4 space-y-3">
            {!hasEthereum && (
              <div className="bg-amber-50 border border-amber-200 rounded-md p-3 mb-3 flex items-center text-sm text-amber-800">
                <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>No wallet detected. Please install a wallet first.</span>
              </div>
            )}
            
            {walletOptions.map((wallet) => (
              <Button
                key={wallet.id}
                variant="outline"
                className="w-full flex items-center justify-between px-4 py-3 h-auto text-left font-normal"
                disabled={isConnecting || !hasEthereum}
                onClick={() => handleConnect(wallet.id)}
              >
                <div className="flex items-center">
                  <img src={wallet.icon} alt={wallet.name} className="h-6 w-6 mr-3" />
                  <div>
                    <div>{wallet.name}</div>
                    <div className="text-xs text-neutral-500">{wallet.description}</div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-neutral-400" />
              </Button>
            ))}
          </TabsContent>
          
          <TabsContent value="install" className="mt-4 space-y-3">
            <p className="text-sm text-neutral-600">
              You'll need to install a wallet to connect to the blockchain and use all features of the DAC Marketplace.
            </p>
            
            {walletOptions.map((wallet) => (
              <Button
                key={wallet.id}
                variant="outline"
                className="w-full flex items-center justify-between px-4 py-3 h-auto text-left font-normal"
                onClick={() => handleDownload(wallet.downloadUrl)}
              >
                <div className="flex items-center">
                  <img src={wallet.icon} alt={wallet.name} className="h-6 w-6 mr-3" />
                  <div>
                    <div>{wallet.name}</div>
                    <div className="text-xs text-neutral-500">{wallet.description}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <Download className="h-4 w-4" />
                  <ExternalLink className="h-3 w-3" />
                </div>
              </Button>
            ))}
            
            <div className="pt-3 text-xs text-neutral-500">
              After installing a wallet, refresh this page and click "Connect" again.
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-4 pt-3 border-t text-xs text-neutral-500">
          By connecting your wallet, you agree to the DAC Marketplace's
          <Button variant="link" className="h-auto p-0 text-xs">Terms of Service</Button> and
          <Button variant="link" className="h-auto p-0 text-xs">Privacy Policy</Button>.
        </div>
      </DialogContent>
    </Dialog>
  );
}

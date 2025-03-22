import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useWallet } from "./wallet-provider";
import { ChevronRight } from "lucide-react";

interface WalletOption {
  id: string;
  name: string;
  icon: string;
}

export function ConnectWalletModal() {
  const { isModalOpen, closeModal, connect } = useWallet();
  const [isConnecting, setIsConnecting] = useState(false);
  
  const walletOptions: WalletOption[] = [
    {
      id: 'metamask',
      name: 'MetaMask',
      icon: 'https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg'
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      icon: 'https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png'
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      icon: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0=w240-h480-rw'
    }
  ];
  
  const handleConnect = async (walletId: string) => {
    setIsConnecting(true);
    try {
      await connect(walletId);
      closeModal();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
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
        
        <div className="mt-4 space-y-3">
          {walletOptions.map((wallet) => (
            <Button
              key={wallet.id}
              variant="outline"
              className="w-full flex items-center justify-between px-4 py-3 h-auto text-left font-normal"
              disabled={isConnecting}
              onClick={() => handleConnect(wallet.id)}
            >
              <div className="flex items-center">
                <img src={wallet.icon} alt={wallet.name} className="h-6 w-6 mr-3" />
                {wallet.name}
              </div>
              <ChevronRight className="h-5 w-5 text-neutral-400" />
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

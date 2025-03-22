import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { 
  Star, 
  ShieldCheck, 
  Zap, 
  CheckCircle, 
  AlertCircle,
  Sparkles,
  UserPlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MembershipCard } from '@/components/ui/membership-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useToast } from '@/hooks/use-toast';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { purchaseMembership } from '@/lib/web3-client';
import { MembershipTier } from '@shared/schema';

export default function Memberships() {
  const { isConnected, user, signer } = useWallet();
  const { toast } = useToast();
  const [selectedTier, setSelectedTier] = useState<MembershipTier | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [billingInterval, setBillingInterval] = useState<'month' | 'year'>('month');
  
  // Fetch membership tiers
  const { 
    data: membershipTiers = [], 
    isLoading,
    isError,
  } = useQuery<MembershipTier[]>({
    queryKey: ['/api/membership-tiers', { interval: billingInterval }],
  });
  
  // Purchase membership mutation
  const { mutate: purchaseMutate, isPending } = useMutation({
    mutationFn: async (tier: MembershipTier) => {
      if (!signer) throw new Error("Wallet not connected");
      
      // First purchase the membership on the blockchain
      await purchaseMembership(
        signer, 
        tier.name.toLowerCase(), 
        tier.price.toString()
      );
      
      // Then update the user's membership in our database
      return apiRequest('POST', '/api/users/membership', {
        userId: user?.id,
        membershipTierId: tier.id,
      });
    },
    onSuccess: () => {
      toast({
        title: "Membership Purchased",
        description: `You have successfully upgraded to ${selectedTier?.name} tier!`,
      });
      
      setShowConfirmDialog(false);
      setSelectedTier(null);
      
      // Refetch user data to update UI
      queryClient.invalidateQueries({queryKey: ['/api/users/me']});
    },
    onError: (error) => {
      toast({
        title: "Purchase Failed",
        description: `Failed to purchase membership: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    },
  });
  
  const handleSelectMembership = (tier: MembershipTier) => {
    if (!isConnected) {
      toast({
        title: "Authentication Required",
        description: "Please connect your wallet to purchase a membership.",
        variant: "destructive",
      });
      return;
    }
    
    setSelectedTier(tier);
    setShowConfirmDialog(true);
  };
  
  const confirmPurchase = () => {
    if (selectedTier) {
      purchaseMutate(selectedTier);
    }
  };
  
  const getBadgeForUserTier = (tier: string) => {
    if (!user?.membershipTier) return null;
    
    if (user.membershipTier === tier.toLowerCase()) {
      return (
        <Badge className="bg-green-100 text-green-800 absolute top-2 right-2">
          <CheckCircle className="h-3 w-3 mr-1" />
          Current Plan
        </Badge>
      );
    }
    return null;
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-heading font-bold mb-2">Membership Tiers</h1>
          <p className="text-neutral-500">
            Choose the membership tier that best fits your needs on the DAC Marketplace.
          </p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Tabs 
            value={billingInterval} 
            onValueChange={(value) => setBillingInterval(value as 'month' | 'year')}
            className="w-[400px]"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="month">Monthly</TabsTrigger>
              <TabsTrigger value="year">
                Yearly
                <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      {isLoading ? (
        <div className="text-center py-10">
          <p>Loading membership tiers...</p>
        </div>
      ) : isError ? (
        <div className="text-center py-10 bg-red-50 rounded-lg border border-red-200">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-red-800 mb-1">Error Loading Membership Tiers</h3>
          <p className="text-sm text-red-600 mb-4">
            An error occurred while loading membership options. Please try again.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {membershipTiers.map((tier, index) => (
            <div key={tier.id} className="relative">
              {getBadgeForUserTier(tier.name)}
              <MembershipCard 
                tier={tier} 
                isPopular={tier.name === 'Premium'} 
                onSelect={handleSelectMembership} 
              />
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-amber-500" />
              The DAC Marketplace Advantage
            </CardTitle>
            <CardDescription>
              Membership benefits that empower your real estate journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-green-100 mr-3">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-medium">Security & Compliance</h3>
                </div>
                <p className="text-sm text-neutral-600 pl-10">
                  All transactions are secured by smart contracts and validated by our network of AI legal agents. Compliance with local regulations is automatically ensured.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-purple-100 mr-3">
                    <Sparkles className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-medium">AI-Powered Tools</h3>
                </div>
                <p className="text-sm text-neutral-600 pl-10">
                  Access cutting-edge AI valuation tools, legal document generation, and creative financing strategy recommendations customized to your specific needs.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-blue-100 mr-3">
                    <UserPlus className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-medium">Community Power</h3>
                </div>
                <p className="text-sm text-neutral-600 pl-10">
                  Join a global network of real estate professionals, investors, and service providers. Collaborate, share knowledge, and find opportunities through our community.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-neutral-50 border-t">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm font-medium">4.9/5 rating from over 1,200 members</span>
              </div>
              
              <div>
                <Button 
                  variant="link" 
                  className="text-sm"
                  onClick={() => window.location.href = '/community'}
                >
                  Read Testimonials →
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      
      {/* Membership Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Membership Purchase</DialogTitle>
            <DialogDescription>
              You're about to upgrade to the {selectedTier?.name} membership tier.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Membership Level:</span>
              <span>{selectedTier?.name}</span>
            </div>
            
            <div className="flex justify-between mb-4">
              <span className="font-medium">Price:</span>
              <span>
                {selectedTier ? new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: selectedTier.currency,
                  maximumFractionDigits: 0,
                }).format(Number(selectedTier.price)) : '$0'}
                /{selectedTier?.interval}
              </span>
            </div>
            
            <div className="flex justify-between mb-4">
              <span className="font-medium">DAC Tokens:</span>
              <span>{selectedTier?.dacTokens} DAC</span>
            </div>
            
            <div className="border-t border-neutral-200 pt-4 mt-4">
              <h4 className="font-medium mb-2">Included Features:</h4>
              <ul className="text-sm space-y-1">
                {selectedTier?.features?.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setShowConfirmDialog(false)}
            >
              Cancel
            </Button>
            <Button 
              onClick={confirmPurchase}
              disabled={isPending}
            >
              {isPending ? 'Processing...' : 'Confirm Purchase'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

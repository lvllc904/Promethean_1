import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useWallet } from "@/components/wallet/wallet-provider";
import { useAuth } from "@/hooks/use-auth";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { DualAuthWrapper } from "@/components/auth/dual-auth-wrapper";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, CheckCircle2, ShieldAlert, Building2, Clock, DollarSign, User, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Escrow {
  id: number;
  propertyId: number;
  sellerId: number;
  buyerId: number;
  amount: string;
  currency: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  transactionHash?: string;
  termsAndConditions?: string;
  additionalDocuments?: string[];
  escrowPeriod?: number;
  completionDate?: string;
  titleTransferId?: number;
}

interface Property {
  id: number;
  title: string;
  description: string;
  price: string;
  location?: string;
  imageUrl?: string;
  userId: number;
}

interface User {
  id: number;
  username: string;
  name?: string;
  walletAddress?: string;
}

interface EscrowActionProps {
  escrow: Escrow;
  property?: Property;
  buyer?: User;
  seller?: User;
  currentUserId: number;
  onAction: () => void;
}

const EscrowActions = ({ escrow, property, buyer, seller, currentUserId, onAction }: EscrowActionProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Action button based on escrow status and user role
  const handleAction = async (newStatus: string) => {
    try {
      setIsSubmitting(true);
      
      const response = await apiRequest(
        "PATCH", 
        `/api/escrows/${escrow.id}/status`, 
        { 
          status: newStatus,
          transactionHash: transactionHash || undefined 
        }
      );
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to update escrow status");
      }
      
      toast({
        title: "Success",
        description: `Escrow has been ${newStatus}`,
      });
      
      onAction();
      setIsDialogOpen(false);
      
    } catch (error) {
      console.error("Error updating escrow:", error);
      toast({
        title: "Error",
        description: error.message || "An error occurred while updating the escrow",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Determine available actions based on escrow status and user role
  if (escrow.status === 'pending') {
    if (currentUserId === escrow.buyerId) {
      return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="default">Fund Escrow</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Fund Escrow</DialogTitle>
              <DialogDescription>
                To fund this escrow, please provide the transaction hash from your blockchain payment.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="transactionHash" className="text-right">
                  Transaction Hash
                </Label>
                <Input
                  id="transactionHash"
                  placeholder="0x..."
                  className="col-span-3"
                  value={transactionHash}
                  onChange={(e) => setTransactionHash(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                type="submit" 
                onClick={() => handleAction('funded')}
                disabled={isSubmitting || !transactionHash}
              >
                {isSubmitting ? "Processing..." : "Confirm Funding"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    } else if (currentUserId === escrow.sellerId) {
      return (
        <Button variant="outline" onClick={() => handleAction('cancelled')} disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Cancel Escrow"}
        </Button>
      );
    }
  } else if (escrow.status === 'funded') {
    if (currentUserId === escrow.sellerId) {
      return (
        <Button variant="default" onClick={() => handleAction('completed')} disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Complete Transaction"}
        </Button>
      );
    } else if (currentUserId === escrow.buyerId) {
      return (
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleAction('disputed')} disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Dispute Transaction"}
          </Button>
        </div>
      );
    }
  } else if (escrow.status === 'disputed') {
    return (
      <Button variant="outline" disabled>
        Awaiting Arbitrator
      </Button>
    );
  }
  
  return null;
};

const EscrowDetails = ({ escrow, property, buyer, seller, currentUserId, onRefresh }: {
  escrow: Escrow;
  property?: Property;
  buyer?: User;
  seller?: User;
  currentUserId: number;
  onRefresh: () => void;
}) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Escrow #{escrow.id}</CardTitle>
            <CardDescription>
              Created on {new Date(escrow.createdAt).toLocaleDateString()}
            </CardDescription>
          </div>
          <Badge className={
            escrow.status === 'completed' ? 'bg-green-100 text-green-800' :
            escrow.status === 'funded' ? 'bg-blue-100 text-blue-800' :
            escrow.status === 'disputed' ? 'bg-red-100 text-red-800' :
            escrow.status === 'cancelled' ? 'bg-neutral-100 text-neutral-600' :
            'bg-amber-100 text-amber-800'
          }>
            {escrow.status.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center mb-2">
              <Building2 className="mr-2 h-4 w-4 text-neutral-500" />
              <h3 className="font-medium">Property Details</h3>
            </div>
            <div className="bg-neutral-50 p-3 rounded-md">
              <p className="text-sm font-semibold">{property?.title || `Property #${escrow.propertyId}`}</p>
              <p className="text-sm text-neutral-600">{property?.location || 'No location specified'}</p>
              <p className="text-sm text-neutral-600">{property?.description?.substring(0, 100) || 'No description'}{property?.description?.length > 100 ? '...' : ''}</p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <DollarSign className="mr-2 h-4 w-4 text-neutral-500" />
              <h3 className="font-medium">Transaction Details</h3>
            </div>
            <div className="bg-neutral-50 p-3 rounded-md">
              <p className="text-sm"><span className="font-medium">Amount:</span> {escrow.amount} {escrow.currency}</p>
              <p className="text-sm"><span className="font-medium">Escrow Period:</span> {escrow.escrowPeriod || 'Not specified'} days</p>
              {escrow.completionDate && (
                <p className="text-sm"><span className="font-medium">Completed:</span> {new Date(escrow.completionDate).toLocaleDateString()}</p>
              )}
              {escrow.transactionHash && (
                <div className="flex items-center mt-1">
                  <span className="text-sm font-medium mr-1">Transaction:</span>
                  <a 
                    href={`https://etherscan.io/tx/${escrow.transactionHash}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:underline flex items-center"
                  >
                    View on Etherscan
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center mb-2">
              <User className="mr-2 h-4 w-4 text-neutral-500" />
              <h3 className="font-medium">Seller</h3>
            </div>
            <div className="bg-neutral-50 p-3 rounded-md">
              <p className="text-sm font-semibold">{seller?.name || seller?.username || `User #${escrow.sellerId}`}</p>
              {seller?.walletAddress && (
                <p className="text-sm text-neutral-600 font-mono">
                  {seller.walletAddress.substring(0, 6)}...{seller.walletAddress.substring(seller.walletAddress.length - 4)}
                </p>
              )}
              {currentUserId === escrow.sellerId && (
                <Badge variant="outline" className="mt-1">You</Badge>
              )}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <User className="mr-2 h-4 w-4 text-neutral-500" />
              <h3 className="font-medium">Buyer</h3>
            </div>
            <div className="bg-neutral-50 p-3 rounded-md">
              <p className="text-sm font-semibold">{buyer?.name || buyer?.username || `User #${escrow.buyerId}`}</p>
              {buyer?.walletAddress && (
                <p className="text-sm text-neutral-600 font-mono">
                  {buyer.walletAddress.substring(0, 6)}...{buyer.walletAddress.substring(buyer.walletAddress.length - 4)}
                </p>
              )}
              {currentUserId === escrow.buyerId && (
                <Badge variant="outline" className="mt-1">You</Badge>
              )}
            </div>
          </div>
        </div>
        
        {escrow.termsAndConditions && (
          <div>
            <div className="flex items-center mb-2">
              <Clock className="mr-2 h-4 w-4 text-neutral-500" />
              <h3 className="font-medium">Terms & Conditions</h3>
            </div>
            <div className="bg-neutral-50 p-3 rounded-md">
              <p className="text-sm whitespace-pre-line">{escrow.termsAndConditions}</p>
            </div>
          </div>
        )}
        
        {escrow.additionalDocuments && escrow.additionalDocuments.length > 0 && (
          <div>
            <div className="flex items-center mb-2">
              <FileText className="mr-2 h-4 w-4 text-neutral-500" />
              <h3 className="font-medium">Additional Documents</h3>
            </div>
            <div className="bg-neutral-50 p-3 rounded-md">
              <ul className="list-disc list-inside space-y-1">
                {escrow.additionalDocuments.map((doc, index) => (
                  <li key={index} className="text-sm">
                    <a 
                      href={doc} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Document {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <EscrowActions 
          escrow={escrow} 
          property={property} 
          buyer={buyer} 
          seller={seller} 
          currentUserId={currentUserId} 
          onAction={onRefresh}
        />
      </CardFooter>
    </Card>
  );
};

export default function ManageEscrows() {
  const { isConnected, address } = useWallet();
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState("all");
  
  // Determine if we can fetch user data
  const canFetchUserData = (!!isConnected && !!address) || !!user?.id;
  const userId = user?.id;

  // Fetch all escrows where user is buyer or seller
  const { data: escrows, isLoading: isLoadingEscrows, refetch: refetchEscrows } = useQuery({
    queryKey: ['/api/escrows', userId, address],
    queryFn: async () => {
      if (!userId) return [];
      
      // Fetch escrows where user is either buyer or seller
      const buyerResponse = await fetch(`/api/escrows?buyerId=${userId}`);
      const sellerResponse = await fetch(`/api/escrows?sellerId=${userId}`);
      
      if (!buyerResponse.ok || !sellerResponse.ok) {
        throw new Error('Failed to fetch escrows');
      }
      
      const buyerEscrows = await buyerResponse.json();
      const sellerEscrows = await sellerResponse.json();
      
      // Combine and deduplicate
      const allEscrows = [...buyerEscrows, ...sellerEscrows];
      return Array.from(new Map(allEscrows.map(item => [item.id, item])).values());
    },
    enabled: canFetchUserData
  });

  // Fetch properties for the escrows
  const { data: properties, isLoading: isLoadingProperties } = useQuery({
    queryKey: ['/api/properties/escrow'],
    queryFn: async () => {
      if (!escrows?.length) return [];
      
      const propertyIds = [...new Set(escrows.map(e => e.propertyId))];
      const propertyPromises = propertyIds.map(async (id) => {
        const response = await fetch(`/api/properties/${id}`);
        if (!response.ok) {
          console.warn(`Failed to fetch property ${id}`);
          return null;
        }
        return response.json();
      });
      
      const propertiesResults = await Promise.all(propertyPromises);
      return propertiesResults.filter(Boolean);
    },
    enabled: !!escrows?.length
  });

  // Fetch users for the escrows
  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ['/api/users/escrow'],
    queryFn: async () => {
      if (!escrows?.length) return [];
      
      const userIds = [...new Set(escrows.flatMap(e => [e.buyerId, e.sellerId]))];
      const userPromises = userIds.map(async (id) => {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
          console.warn(`Failed to fetch user ${id}`);
          return null;
        }
        return response.json();
      });
      
      const usersResults = await Promise.all(userPromises);
      return usersResults.filter(Boolean);
    },
    enabled: !!escrows?.length
  });

  const handleRefreshData = () => {
    refetchEscrows();
    queryClient.invalidateQueries({ queryKey: ['/api/properties/escrow'] });
    queryClient.invalidateQueries({ queryKey: ['/api/users/escrow'] });
  };

  // Helper to get property by id
  const getProperty = (propertyId: number) => {
    return properties?.find(p => p.id === propertyId);
  };

  // Helper to get user by id
  const getUser = (userId: number) => {
    return users?.find(u => u.id === userId);
  };

  // Filter escrows based on active tab
  const filteredEscrows = escrows?.filter(escrow => {
    if (activeTab === "all") return true;
    if (activeTab === "asSeller") return escrow.sellerId === userId;
    if (activeTab === "asBuyer") return escrow.buyerId === userId;
    if (activeTab === "active") return ["pending", "funded"].includes(escrow.status);
    if (activeTab === "completed") return escrow.status === "completed";
    if (activeTab === "disputed") return escrow.status === "disputed";
    return true;
  }) || [];

  // Dashboard content - will be wrapped in DualAuthWrapper
  const EscrowManagementContent = () => (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-neutral-800 mb-2">Manage Escrows</h1>
        <p className="text-neutral-600">
          Review and manage your property escrow agreements.
        </p>
      </div>

      <div className="mb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="disputed">Disputed</TabsTrigger>
            <TabsTrigger value="asSeller">As Seller</TabsTrigger>
            <TabsTrigger value="asBuyer">As Buyer</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab}>
            {isLoadingEscrows || isLoadingProperties || isLoadingUsers ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="w-full h-48 animate-pulse bg-neutral-100"></Card>
                ))}
              </div>
            ) : filteredEscrows.length === 0 ? (
              <Card className="p-6 text-center">
                <div className="flex flex-col items-center">
                  {activeTab === "disputed" ? (
                    <>
                      <ShieldAlert className="h-12 w-12 text-amber-500 mb-4" />
                      <h3 className="text-xl font-medium mb-1">No Disputed Escrows</h3>
                      <p className="text-neutral-600 mb-4">You don't have any escrows that are currently in dispute.</p>
                    </>
                  ) : activeTab === "completed" ? (
                    <>
                      <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                      <h3 className="text-xl font-medium mb-1">No Completed Escrows</h3>
                      <p className="text-neutral-600 mb-4">You haven't completed any escrow transactions yet.</p>
                    </>
                  ) : (
                    <>
                      <Lock className="h-12 w-12 text-primary-500 mb-4" />
                      <h3 className="text-xl font-medium mb-1">No Escrows Found</h3>
                      <p className="text-neutral-600 mb-4">You don't have any escrows matching the selected filter.</p>
                    </>
                  )}
                  <Button onClick={() => setActiveTab("all")}>View All Escrows</Button>
                </div>
              </Card>
            ) : (
              <div>
                {filteredEscrows.map(escrow => (
                  <EscrowDetails
                    key={escrow.id}
                    escrow={escrow}
                    property={getProperty(escrow.propertyId)}
                    buyer={getUser(escrow.buyerId)}
                    seller={getUser(escrow.sellerId)}
                    currentUserId={userId || 0}
                    onRefresh={handleRefreshData}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Escrow Information */}
      <Alert>
        <div className="flex items-start">
          <div className="mr-2 mt-1">
            <Lock className="h-4 w-4" />
          </div>
          <div>
            <AlertTitle>About the Escrow System</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                Our blockchain-based escrow system provides secure property transactions by holding funds until all conditions are met.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-sm font-medium mb-1">Escrow Process:</h4>
                  <ol className="list-decimal list-inside text-xs space-y-1 text-neutral-600">
                    <li>Seller creates an escrow agreement</li>
                    <li>Buyer funds the escrow</li>
                    <li>Property transfer occurs off-platform</li>
                    <li>Seller marks transaction as complete</li>
                    <li>Funds are released to the seller</li>
                  </ol>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Dispute Resolution:</h4>
                  <ul className="list-disc list-inside text-xs space-y-1 text-neutral-600">
                    <li>Buyer can initiate a dispute</li>
                    <li>Arbitrators review the transaction</li>
                    <li>Resolution is enforced on-chain</li>
                    <li>Funds are released according to resolution</li>
                  </ul>
                </div>
              </div>
            </AlertDescription>
          </div>
        </div>
      </Alert>
    </div>
  );
  
  return (
    <DualAuthWrapper
      title="Manage Your Escrows"
      description="You need to sign in to manage your escrow agreements and property transactions."
      walletFeatureDescription="Connect your wallet for blockchain-powered secure transactions, or use traditional authentication for standard escrow features."
      authRequiredMessage="Authentication Required for Escrow Management"
    >
      <EscrowManagementContent />
    </DualAuthWrapper>
  );
}
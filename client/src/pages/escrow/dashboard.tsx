import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useWallet } from "@/components/wallet/wallet-provider";
import { useAuth } from "@/hooks/use-auth";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { Lock, FileText, TrendingUp, UserCheck, ArrowUpRight } from "lucide-react";
import { DualAuthWrapper } from "@/components/auth/dual-auth-wrapper";

interface EscrowStats {
  totalEscrows: number;
  activeEscrows: number;
  completedEscrows: number;
  totalValue: number;
  pendingTransfers: number;
}

export default function EscrowDashboard() {
  const { isConnected, address } = useWallet();
  const { user } = useAuth();
  const { toast } = useToast();
  const [stats, setStats] = useState<EscrowStats>({
    totalEscrows: 0,
    activeEscrows: 0,
    completedEscrows: 0,
    totalValue: 0,
    pendingTransfers: 0
  });

  // Determine if we can fetch user data
  const canFetchUserData = (!!isConnected && !!address) || !!user?.id;
  const userId = user?.id;

  const { data: escrows, isLoading: isLoadingEscrows } = useQuery({
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

  const { data: transfers, isLoading: isLoadingTransfers } = useQuery({
    queryKey: ['/api/title-transfers', userId],
    queryFn: async () => {
      if (!userId) return [];
      
      // Get properties owned by user
      const propertiesResponse = await fetch(`/api/properties/my`);
      if (!propertiesResponse.ok) {
        throw new Error('Failed to fetch properties');
      }
      
      const properties = await propertiesResponse.json();
      
      // Fetch transfers for all properties
      const transferPromises = properties.map(async (property) => {
        const response = await fetch(`/api/title-transfers?propertyId=${property.id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch transfers for property ${property.id}`);
        }
        return response.json();
      });
      
      const transfersArrays = await Promise.all(transferPromises);
      return transfersArrays.flat();
    },
    enabled: canFetchUserData
  });

  const { data: arbitrators, isLoading: isLoadingArbitrators } = useQuery({
    queryKey: ['/api/arbitrators'],
    queryFn: async () => {
      const response = await fetch('/api/arbitrators');
      if (!response.ok) {
        throw new Error('Failed to fetch arbitrators');
      }
      return response.json();
    }
  });

  useEffect(() => {
    if (escrows && transfers) {
      const activeEscrows = escrows.filter(e => ['pending', 'funded'].includes(e.status)).length;
      const completedEscrows = escrows.filter(e => e.status === 'completed').length;
      const totalValue = escrows.reduce((sum, e) => sum + parseFloat(e.amount), 0);
      const pendingTransfers = transfers.filter(t => t.verificationStatus === 'pending').length;
      
      setStats({
        totalEscrows: escrows.length,
        activeEscrows,
        completedEscrows,
        totalValue,
        pendingTransfers
      });
    }
  }, [escrows, transfers]);

  // Dashboard content - will be wrapped in DualAuthWrapper
  const DashboardContent = () => (
    <div className="container mx-auto p-6">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-800 mb-2">Escrow System Dashboard</h1>
          <p className="text-neutral-600 mb-6">
            Manage property transactions securely through our blockchain-based escrow system.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Escrows</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {isLoadingEscrows ? (
                  <div className="h-8 w-16 bg-neutral-200 animate-pulse rounded"></div>
                ) : (
                  stats.totalEscrows
                )}
              </div>
              <Progress className="mt-2" value={(stats.completedEscrows / Math.max(1, stats.totalEscrows)) * 100} />
              <p className="text-xs text-neutral-500 mt-1">
                {stats.completedEscrows} completed / {stats.activeEscrows} active
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Value Locked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {isLoadingEscrows ? (
                  <div className="h-8 w-28 bg-neutral-200 animate-pulse rounded"></div>
                ) : (
                  `$${stats.totalValue.toLocaleString()}`
                )}
              </div>
              <div className="text-xs text-neutral-500 mt-1">
                Across all active escrows
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Pending Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {isLoadingTransfers ? (
                  <div className="h-8 w-16 bg-neutral-200 animate-pulse rounded"></div>
                ) : (
                  stats.pendingTransfers
                )}
              </div>
              <div className="text-xs text-neutral-500 mt-1">
                Title transfers awaiting verification
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Available Arbitrators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {isLoadingArbitrators ? (
                  <div className="h-8 w-16 bg-neutral-200 animate-pulse rounded"></div>
                ) : (
                  arbitrators?.length || 0
                )}
              </div>
              <div className="text-xs text-neutral-500 mt-1">
                Verified dispute resolution experts
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-primary-50 to-white">
            <CardHeader>
              <CardTitle>Create New Escrow</CardTitle>
              <CardDescription>Start a secure property transaction</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600">
                Create a new escrow agreement to securely handle a property sale or purchase with blockchain protection.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/escrow/create">
                <Button className="w-full">
                  Create Escrow <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <CardTitle>Manage Escrows</CardTitle>
              <CardDescription>View and update your escrows</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600">
                Check the status of your active escrows, release funds, or resolve disputes for your property transactions.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/escrow/manage">
                <Button variant="outline" className="w-full">
                  Manage Escrows <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-50 to-white">
            <CardHeader>
              <CardTitle>Title Transfers</CardTitle>
              <CardDescription>Manage property ownership</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600">
                Initiate or review property title transfers and track their verification status on the blockchain.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/escrow/transfers">
                <Button variant="outline" className="w-full">
                  View Transfers <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Recent Escrows */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Escrows</h2>
          
          {isLoadingEscrows ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-24 bg-neutral-100 animate-pulse rounded-lg"></div>
              ))}
            </div>
          ) : escrows?.length ? (
            <div className="space-y-4">
              {escrows.slice(0, 5).map((escrow) => (
                <Card key={escrow.id} className="flex flex-col md:flex-row md:items-center p-4 gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Property #{escrow.propertyId}</h3>
                      <Badge className={
                        escrow.status === 'completed' ? 'bg-green-100 text-green-800' :
                        escrow.status === 'funded' ? 'bg-blue-100 text-blue-800' :
                        escrow.status === 'disputed' ? 'bg-red-100 text-red-800' :
                        'bg-neutral-100 text-neutral-800'
                      }>
                        {escrow.status.charAt(0).toUpperCase() + escrow.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-neutral-600 mt-1">
                      {userId === escrow.sellerId ? 'You are the seller' : 'You are the buyer'}
                    </p>
                    <p className="text-sm font-medium mt-1">
                      Amount: ${parseFloat(escrow.amount).toLocaleString()} {escrow.currency}
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="mt-2 md:mt-0">
                    View Details
                  </Button>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-6 text-center">
              <p className="text-neutral-600">You don't have any escrows yet.</p>
              <Link href="/escrow/create">
                <Button className="mt-4">Create Your First Escrow</Button>
              </Link>
            </Card>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <DualAuthWrapper
      title="Access Escrow System"
      description="You need to sign in to access the escrow system and manage your property transactions."
      walletFeatureDescription="Connect your wallet for blockchain-powered secure transactions, or use traditional authentication for standard escrow features."
      authRequiredMessage="Authentication Required for Escrow Access"
    >
      <DashboardContent />
    </DualAuthWrapper>
  );
}
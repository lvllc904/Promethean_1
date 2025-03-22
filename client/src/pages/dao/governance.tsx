import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  BarChart3, 
  TrendingUp, 
  CircleDollarSign, 
  Users, 
  VoteIcon, 
  FileText,
  Info 
} from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ProposalCard } from '@/components/ui/proposal-card';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useToast } from '@/hooks/use-toast';
import { Proposal } from '@shared/schema';

export default function Governance() {
  const { isConnected, user, address } = useWallet();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Fetch DAO statistics
  const { data: daoStats, isLoading: isLoadingStats } = useQuery({
    queryKey: ['/api/dao/stats'],
    enabled: true,
  });
  
  // Fetch active proposals
  const { data: activeProposals = [], isLoading: isLoadingProposals } = useQuery<Proposal[]>({
    queryKey: ['/api/dao/proposals/active'],
    enabled: isConnected,
  });
  
  // Sample governance token data (in a real app, this would come from blockchain)
  const tokenDistribution = [
    { type: 'Community Treasury', percentage: 30 },
    { type: 'Team & Advisors', percentage: 20 },
    { type: 'Protocol Incentives', percentage: 25 },
    { type: 'Initial Sale', percentage: 15 },
    { type: 'Development Fund', percentage: 10 },
  ];
  
  const handleVoteYes = (proposalId: number) => {
    if (!isConnected) {
      toast({
        title: "Authentication Required",
        description: "Please connect your wallet to vote on proposals.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Vote Submitted",
      description: `You voted YES on proposal #${proposalId}`,
    });
  };
  
  const handleVoteNo = (proposalId: number) => {
    if (!isConnected) {
      toast({
        title: "Authentication Required",
        description: "Please connect your wallet to vote on proposals.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Vote Submitted",
      description: `You voted NO on proposal #${proposalId}`,
    });
  };
  
  const handleAbstain = (proposalId: number) => {
    if (!isConnected) {
      toast({
        title: "Authentication Required",
        description: "Please connect your wallet to vote on proposals.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Vote Submitted",
      description: `You abstained from voting on proposal #${proposalId}`,
    });
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold mb-2">DAO Governance</h1>
          <p className="text-neutral-500">
            Participate in the decentralized governance of the DAC Marketplace platform.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link href="/dao/proposals">
              <FileText className="mr-2 h-4 w-4" />
              View All Proposals
            </Link>
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="voting">Active Proposals</TabsTrigger>
          <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
          <TabsTrigger value="treasury">Treasury</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-500">DAO Members</p>
                    <p className="text-2xl font-heading font-semibold mt-1">
                      {isLoadingStats ? '...' : daoStats?.members || '1,245'}
                    </p>
                  </div>
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-500">Total Proposals</p>
                    <p className="text-2xl font-heading font-semibold mt-1">
                      {isLoadingStats ? '...' : daoStats?.totalProposals || '124'}
                    </p>
                  </div>
                  <div className="p-2 bg-purple-100 rounded-full">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-500">Active Votes</p>
                    <p className="text-2xl font-heading font-semibold mt-1">
                      {isLoadingStats ? '...' : daoStats?.activeProposals || '7'}
                    </p>
                  </div>
                  <div className="p-2 bg-green-100 rounded-full">
                    <VoteIcon className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-500">DAC Price</p>
                    <p className="text-2xl font-heading font-semibold mt-1">
                      {isLoadingStats ? '...' : daoStats?.tokenPrice || '$0.853'}
                    </p>
                  </div>
                  <div className="p-2 bg-amber-100 rounded-full">
                    <TrendingUp className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Governance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>
                    The DAC Marketplace is governed by its community through a Decentralized Autonomous Organization (DAO).
                    As a DAC token holder, you have voting rights proportional to your token holdings.
                  </p>
                  
                  <div className="flex items-start space-x-2">
                    <Info className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">How Governance Works</h4>
                      <p className="text-neutral-600 mt-1">
                        Any DAC holder can create proposals for changes to the platform. Proposals are voted on by all token 
                        holders, with votes weighted by token balance. If a proposal reaches quorum and majority approval, 
                        it gets implemented by the protocol.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Info className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Your Governance Power</h4>
                      <p className="text-neutral-600 mt-1">
                        {isConnected ? (
                          <>Your current voting power is <span className="font-medium">{user?.dacTokenBalance || 0} votes</span> based on your DAC token balance.</>
                        ) : (
                          <>Connect your wallet to see your governance power and participate in voting.</>
                        )}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Info className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Key Governance Parameters</h4>
                      <ul className="list-disc list-inside text-neutral-600 mt-1 space-y-1">
                        <li>Quorum: 10% of total supply must vote for a proposal to be valid</li>
                        <li>Threshold: 60% majority needed for a proposal to pass</li>
                        <li>Voting Period: 5 days for standard proposals</li>
                        <li>Time Lock: 2 days before implementation after approval</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {!isConnected && (
                  <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h4 className="font-medium mb-2">Join the DAO</h4>
                    <p className="text-sm text-neutral-600 mb-3">
                      Connect your wallet and acquire DAC tokens to participate in governance.
                    </p>
                    <Button onClick={() => document.dispatchEvent(new CustomEvent('openWalletModal'))}>
                      Connect Wallet
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent DAO Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-neutral-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <VoteIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Proposal #124 Passed</p>
                        <p className="text-xs text-neutral-500">92% approval • 2 days ago</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-neutral-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <CircleDollarSign className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Treasury Expanded</p>
                        <p className="text-xs text-neutral-500">+1,000 DAC • 3 days ago</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b border-neutral-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <FileText className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">New Proposal Created</p>
                        <p className="text-xs text-neutral-500">Proposal #125 • 4 days ago</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <Users className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">New DAO Members</p>
                        <p className="text-xs text-neutral-500">+45 members • 1 week ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="voting">
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-xl font-heading font-semibold">Active Proposals</h3>
            <Button variant="outline" asChild>
              <Link href="/dao/proposals/create">Create Proposal</Link>
            </Button>
          </div>
          
          <div className="space-y-4">
            {isLoadingProposals ? (
              <p>Loading active proposals...</p>
            ) : activeProposals.length > 0 ? (
              activeProposals.map((proposal) => (
                <ProposalCard
                  key={proposal.id}
                  proposal={proposal}
                  onVoteYes={() => handleVoteYes(proposal.id)}
                  onVoteNo={() => handleVoteNo(proposal.id)}
                  onAbstain={() => handleAbstain(proposal.id)}
                  onViewDetails={() => window.location.href = `/dao/proposals/${proposal.id}`}
                />
              ))
            ) : (
              <div className="text-center py-10 bg-neutral-50 rounded-lg border border-neutral-200">
                <FileText className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
                <h3 className="text-lg font-medium mb-1">No Active Proposals</h3>
                <p className="text-neutral-500 mb-4">
                  There are currently no active proposals to vote on.
                </p>
                <Button asChild>
                  <Link href="/dao/proposals/create">Create a Proposal</Link>
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="tokenomics">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>DAC Token Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tokenDistribution.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.type}</span>
                        <span className="text-sm">{item.percentage}%</span>
                      </div>
                      <Progress value={item.percentage} />
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h4 className="font-medium mb-2">Token Utility</h4>
                  <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
                    <li>Governance voting rights</li>
                    <li>Platform fee discounts</li>
                    <li>Premium feature access</li>
                    <li>Staking rewards</li>
                    <li>Revenue sharing from platform fees</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Token Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                    <span className="text-sm text-neutral-600">Total Supply</span>
                    <span className="font-medium">100,000,000 DAC</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                    <span className="text-sm text-neutral-600">Circulating Supply</span>
                    <span className="font-medium">45,320,500 DAC</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                    <span className="text-sm text-neutral-600">Current Price</span>
                    <span className="font-medium">$0.853 USD</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                    <span className="text-sm text-neutral-600">Market Cap</span>
                    <span className="font-medium">$38.6M USD</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-neutral-600">24h Volume</span>
                    <span className="font-medium">$1.2M USD</span>
                  </div>
                </div>
                
                {isConnected ? (
                  <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h4 className="font-medium mb-1">Your Balance</h4>
                    <p className="text-2xl font-heading font-semibold">{user?.dacTokenBalance || 0} DAC</p>
                    <p className="text-sm text-neutral-500 mt-1">≈ ${((user?.dacTokenBalance || 0) * 0.853).toFixed(2)} USD</p>
                    
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <Button size="sm">Buy DAC</Button>
                      <Button size="sm" variant="outline">Stake DAC</Button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <h4 className="font-medium mb-2">Connect Wallet</h4>
                    <p className="text-sm text-neutral-600 mb-3">
                      Connect your wallet to view your DAC token balance and participate in governance.
                    </p>
                    <Button onClick={() => document.dispatchEvent(new CustomEvent('openWalletModal'))}>
                      Connect Wallet
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="treasury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-500">Treasury Balance</p>
                    <p className="text-2xl font-heading font-semibold mt-1">$2,450,000</p>
                  </div>
                  <div className="p-2 bg-blue-100 rounded-full">
                    <CircleDollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-500">Weekly Revenue</p>
                    <p className="text-2xl font-heading font-semibold mt-1">$57,230</p>
                  </div>
                  <div className="p-2 bg-green-100 rounded-full">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-500">DAC in Treasury</p>
                    <p className="text-2xl font-heading font-semibold mt-1">10,245,320</p>
                  </div>
                  <div className="p-2 bg-purple-100 rounded-full">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-500">Expenses (30d)</p>
                    <p className="text-2xl font-heading font-semibold mt-1">$124,500</p>
                  </div>
                  <div className="p-2 bg-amber-100 rounded-full">
                    <CircleDollarSign className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Treasury Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Protocol Development</span>
                    <span className="text-sm">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Marketing & Growth</span>
                    <span className="text-sm">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Ecosystem Grants</span>
                    <span className="text-sm">20%</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Community Rewards</span>
                    <span className="text-sm">10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Reserve Fund</span>
                    <span className="text-sm">5%</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <h4 className="font-medium mb-2">Treasury Management</h4>
                <p className="text-sm text-neutral-600 mb-3">
                  The DAO treasury is managed by governance voting. All expenditures over $50,000 require a community vote.
                </p>
                <Link href="/dao/proposals/create">
                  <Button variant="outline">
                    Propose Treasury Action
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

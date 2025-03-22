import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  AlertCircle,
  Check,
  X,
  Clock,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProposalCard } from '@/components/ui/proposal-card';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useToast } from '@/hooks/use-toast';
import { castVote, createProposal } from '@/lib/web3-client';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { Proposal } from '@shared/schema';

// Schema for creating a new proposal
const createProposalSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  startDate: z.string(),
  endDate: z.string(),
  executionPayload: z.string().optional(),
});

export default function Proposals() {
  const { isConnected, user, signer } = useWallet();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [showNewProposalDialog, setShowNewProposalDialog] = useState(false);
  const [activeTab, setActiveTab] = useState('active');
  
  // Form setup for new proposal
  const form = useForm<z.infer<typeof createProposalSchema>>({
    resolver: zodResolver(createProposalSchema),
    defaultValues: {
      title: '',
      description: '',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      executionPayload: '',
    },
  });
  
  // Fetch proposals based on active tab
  const { 
    data: proposals = [], 
    isLoading,
    isError,
    refetch
  } = useQuery<Proposal[]>({
    queryKey: ['/api/dao/proposals', { 
      status: activeTab !== 'all' ? activeTab : undefined, 
      search: searchQuery,
      statusFilter
    }],
  });
  
  // Handle proposal creation submission
  const onSubmit = async (data: z.infer<typeof createProposalSchema>) => {
    if (!isConnected || !signer) {
      toast({
        title: "Authentication Required",
        description: "Please connect your wallet to create a proposal.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Create proposal on the blockchain
      await createProposal(signer, data.title, data.description, data.executionPayload || '');
      
      // Create proposal in our database
      await apiRequest('POST', '/api/dao/proposals', {
        ...data,
        creatorId: user?.id || 1,
      });
      
      toast({
        title: "Proposal Created",
        description: "Your proposal has been created successfully.",
      });
      
      // Reset form and close dialog
      form.reset();
      setShowNewProposalDialog(false);
      
      // Refetch proposals list
      queryClient.invalidateQueries({queryKey: ['/api/dao/proposals']});
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to create proposal: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    }
  };
  
  const handleVote = async (proposalId: number, voteType: 'for' | 'against' | 'abstain') => {
    if (!isConnected || !signer) {
      toast({
        title: "Authentication Required",
        description: "Please connect your wallet to vote.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Cast vote on blockchain
      const voteTypeValue = voteType === 'for' ? 1 : voteType === 'against' ? 0 : 2;
      await castVote(signer, proposalId, voteTypeValue);
      
      // Record vote in our database
      await apiRequest('POST', '/api/dao/votes', {
        proposalId,
        userId: user?.id || 1,
        voteType,
        votePower: user?.dacTokenBalance || 1,
      });
      
      toast({
        title: "Vote Recorded",
        description: `You have voted ${voteType.toUpperCase()} on proposal #${proposalId}.`,
      });
      
      // Refetch proposals to update the UI
      queryClient.invalidateQueries({queryKey: ['/api/dao/proposals']});
    } catch (error) {
      toast({
        title: "Voting Failed",
        description: `Failed to cast your vote: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-amber-100 text-amber-800">Active</Badge>;
      case 'passed':
        return <Badge className="bg-green-100 text-green-800">Passed</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      case 'executed':
        return <Badge className="bg-blue-100 text-blue-800">Executed</Badge>;
      default:
        return <Badge className="bg-neutral-100">Unknown</Badge>;
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };
  
  const toggleStatusFilter = (status: string) => {
    if (statusFilter.includes(status)) {
      setStatusFilter(statusFilter.filter(s => s !== status));
    } else {
      setStatusFilter([...statusFilter, status]);
    }
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold mb-2">DAO Proposals</h1>
          <p className="text-neutral-500">
            View, create, and vote on governance proposals for the DAC Marketplace.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button 
            onClick={() => {
              if (!isConnected) {
                toast({
                  title: "Authentication Required",
                  description: "Please connect your wallet to create a proposal.",
                  variant: "destructive",
                });
                return;
              }
              setShowNewProposalDialog(true);
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Proposal
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <Tabs 
          defaultValue="active" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full md:w-auto"
        >
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="passed">Passed</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            <Input 
              placeholder="Search proposals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 min-w-[200px]"
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => toggleStatusFilter('active')}>
                {statusFilter.includes('active') ? (
                  <Check className="mr-2 h-4 w-4" />
                ) : (
                  <div className="w-4 mr-2" />
                )}
                Active
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleStatusFilter('passed')}>
                {statusFilter.includes('passed') ? (
                  <Check className="mr-2 h-4 w-4" />
                ) : (
                  <div className="w-4 mr-2" />
                )}
                Passed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleStatusFilter('rejected')}>
                {statusFilter.includes('rejected') ? (
                  <Check className="mr-2 h-4 w-4" />
                ) : (
                  <div className="w-4 mr-2" />
                )}
                Rejected
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleStatusFilter('executed')}>
                {statusFilter.includes('executed') ? (
                  <Check className="mr-2 h-4 w-4" />
                ) : (
                  <div className="w-4 mr-2" />
                )}
                Executed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter([])}>
                Clear Filters
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {isLoading ? (
        <div className="text-center py-10">
          <p>Loading proposals...</p>
        </div>
      ) : isError ? (
        <div className="text-center py-10 bg-red-50 rounded-lg border border-red-200">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-red-800 mb-1">Error Loading Proposals</h3>
          <p className="text-sm text-red-600 mb-4">
            An error occurred while loading proposals. Please try again.
          </p>
          <Button onClick={() => refetch()}>Retry</Button>
        </div>
      ) : proposals.length > 0 ? (
        <div className="space-y-4">
          {proposals.map((proposal) => (
            <div key={proposal.id} className="bg-white rounded-lg border border-neutral-200 shadow-sm p-4">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-medium">{proposal.title}</h3>
                    {getStatusBadge(proposal.status)}
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">
                    Proposal #{proposal.id} by{' '}
                    <span className="text-primary-500">
                      {`0x${proposal.creatorId.toString(16).padStart(4, '0')}...${Math.floor(Math.random() * 10000).toString(16).padStart(4, '0')}`}
                    </span>
                    {' • '}Created {formatDate(proposal.createdAt)}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center">
                  <div className="flex items-center gap-1 text-sm text-neutral-500">
                    <Clock className="h-4 w-4" />
                    <span>
                      {proposal.status === 'active' ? (
                        <>Ends {formatDate(proposal.endDate)}</>
                      ) : (
                        <>Ended {formatDate(proposal.endDate)}</>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-700 mb-4 text-sm">
                {proposal.description.length > 200 
                  ? `${proposal.description.substring(0, 200)}...` 
                  : proposal.description}
              </p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Votes</span>
                  <span>{proposal.votesFor + proposal.votesAgainst + proposal.votesAbstain} total votes</span>
                </div>
                <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="flex h-full">
                    {proposal.votesFor > 0 && (
                      <div 
                        className="bg-green-500 h-full" 
                        style={{ 
                          width: `${proposal.votesFor / (proposal.votesFor + proposal.votesAgainst + proposal.votesAbstain) * 100}%` 
                        }}
                      />
                    )}
                    {proposal.votesAgainst > 0 && (
                      <div 
                        className="bg-red-500 h-full" 
                        style={{ 
                          width: `${proposal.votesAgainst / (proposal.votesFor + proposal.votesAgainst + proposal.votesAbstain) * 100}%` 
                        }}
                      />
                    )}
                    {proposal.votesAbstain > 0 && (
                      <div 
                        className="bg-neutral-400 h-full" 
                        style={{ 
                          width: `${proposal.votesAbstain / (proposal.votesFor + proposal.votesAgainst + proposal.votesAbstain) * 100}%` 
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-green-600">
                    {proposal.votesFor} For ({((proposal.votesFor / (proposal.votesFor + proposal.votesAgainst + proposal.votesAbstain)) * 100).toFixed(1)}%)
                  </span>
                  <span className="text-neutral-500">
                    {proposal.votesAbstain} Abstain ({((proposal.votesAbstain / (proposal.votesFor + proposal.votesAgainst + proposal.votesAbstain)) * 100).toFixed(1)}%)
                  </span>
                  <span className="text-red-600">
                    {proposal.votesAgainst} Against ({((proposal.votesAgainst / (proposal.votesFor + proposal.votesAgainst + proposal.votesAbstain)) * 100).toFixed(1)}%)
                  </span>
                </div>
              </div>
              
              {proposal.status === 'active' ? (
                <div className="flex flex-wrap gap-2">
                  <Button 
                    className="bg-green-500 hover:bg-green-600"
                    onClick={() => handleVote(proposal.id, 'for')}
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Vote For
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-red-300 text-red-700 hover:bg-red-50"
                    onClick={() => handleVote(proposal.id, 'against')}
                  >
                    <X className="mr-2 h-4 w-4" />
                    Vote Against
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleVote(proposal.id, 'abstain')}
                  >
                    Abstain
                  </Button>
                  <Button 
                    variant="link" 
                    asChild
                    className="ml-auto"
                  >
                    <Link href={`/dao/proposals/${proposal.id}`}>View Details</Link>
                  </Button>
                </div>
              ) : (
                <div className="flex justify-end">
                  <Button 
                    variant="outline" 
                    asChild
                  >
                    <Link href={`/dao/proposals/${proposal.id}`}>View Details</Link>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-neutral-50 rounded-lg border border-neutral-200">
          <FileText className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
          <h3 className="text-lg font-medium mb-1">No Proposals Found</h3>
          <p className="text-neutral-500 mb-4">
            {activeTab === 'active' 
              ? 'There are currently no active proposals.' 
              : `No proposals matching your criteria were found.`}
          </p>
          <Button 
            onClick={() => {
              if (!isConnected) {
                toast({
                  title: "Authentication Required",
                  description: "Please connect your wallet to create a proposal.",
                  variant: "destructive",
                });
                return;
              }
              setShowNewProposalDialog(true);
            }}
          >
            Create a Proposal
          </Button>
        </div>
      )}
      
      {/* New Proposal Dialog */}
      <Dialog open={showNewProposalDialog} onOpenChange={setShowNewProposalDialog}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Create New Proposal</DialogTitle>
            <DialogDescription>
              Submit a new governance proposal for the DAC community to vote on.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter proposal title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your proposal in detail..." 
                        className="min-h-32"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="executionPayload"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Execution Payload (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter smart contract execution data (optional)..." 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      For technical proposals, enter the smart contract execution payload in JSON format.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowNewProposalDialog(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Create Proposal</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

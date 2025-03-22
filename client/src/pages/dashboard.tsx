import { useState } from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { StatCard } from '@/components/ui/stat-card';
import { PropertyCard } from '@/components/ui/property-card';
import { ProposalCard } from '@/components/ui/proposal-card';
import { TaskCard } from '@/components/ui/task-card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useToast } from '@/hooks/use-toast';
import { Property, Proposal, Task } from '@shared/schema';

export default function Dashboard() {
  const { isConnected, user } = useWallet();
  const { toast } = useToast();
  
  // Fetch featured properties
  const { 
    data: properties = [], 
    isLoading: isLoadingProperties 
  } = useQuery<Property[]>({
    queryKey: ['/api/properties/featured'],
    enabled: true,
  });
  
  // Fetch active DAO proposals
  const { 
    data: proposals = [], 
    isLoading: isLoadingProposals 
  } = useQuery<Proposal[]>({
    queryKey: ['/api/dao/proposals/active'],
    enabled: isConnected,
  });
  
  // Fetch available tasks
  const { 
    data: tasks = [], 
    isLoading: isLoadingTasks 
  } = useQuery<Task[]>({
    queryKey: ['/api/tasks/available'],
    enabled: isConnected,
  });
  
  const handleViewProperty = (property: Property) => {
    window.location.href = `/properties/${property.id}`;
  };
  
  const handleApplyAIValuation = (property: Property) => {
    if (!isConnected) {
      toast({
        title: "Authentication Required",
        description: "Please connect your wallet to use AI valuation tools.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "AI Valuation Started",
      description: "Analyzing property data to provide an accurate valuation...",
    });
    
    // In a real app, this would redirect to a valuation page or show a modal
    window.location.href = `/properties/valuation/${property.id}`;
  };
  
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
  
  const handleApplyForTask = (taskId: number) => {
    if (!isConnected) {
      toast({
        title: "Authentication Required",
        description: "Please connect your wallet to apply for tasks.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Application Submitted",
      description: `Your application for task #${taskId} has been submitted!`,
    });
  };
  
  return (
    <div>
      {/* Dashboard Overview */}
      <div className="mb-8">
        <h3 className="text-lg font-heading font-semibold mb-4">Overview</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* DAC Token Card */}
          <StatCard
            title="DAC Token"
            value="$0.853"
            trend={{
              value: 2.5,
              direction: 'up'
            }}
            footer={{
              label: "Your balance",
              value: `${user?.dacTokenBalance || 0} DAC`
            }}
            actionLabel="View Details"
          />
          
          {/* Properties Card */}
          <StatCard
            title="Properties"
            value="12,058"
            unit="listings"
            badge={{
              text: "Global",
              variant: "blue"
            }}
            footer={{
              label: "Your listings",
              value: "3 properties"
            }}
            actionLabel="Browse All"
            onClick={() => window.location.href = '/properties'}
          />
          
          {/* Active Proposals Card */}
          <StatCard
            title="Active Proposals"
            value="7"
            unit="to vote"
            badge={{
              text: "4 new",
              variant: "purple"
            }}
            footer={{
              label: "Closing soon",
              value: "2 proposals"
            }}
            actionLabel="Vote Now"
            onClick={() => window.location.href = '/dao/proposals'}
          />
          
          {/* Available Tasks Card */}
          <StatCard
            title="Available Tasks"
            value="156"
            unit="open tasks"
            badge={{
              text: "12 new",
              variant: "amber"
            }}
            footer={{
              label: "Your tasks",
              value: "4 in progress"
            }}
            actionLabel="Find Tasks"
            onClick={() => window.location.href = '/marketplace'}
          />
        </div>
      </div>
      
      {/* Property Listings Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-heading font-semibold">Featured Properties</h3>
          <Link href="/properties">
            <a className="text-sm font-medium text-primary-500 hover:text-primary-600">
              View all properties →
            </a>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoadingProperties ? (
            // Loading skeletons
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
                <Skeleton className="w-full h-48" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-36" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            properties.slice(0, 3).map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={handleViewProperty}
                onApplyAIValuation={handleApplyAIValuation}
              />
            ))
          )}
        </div>
      </div>
      
      {/* Two Column Split: DAO Activity and Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* DAO Activity */}
        <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-heading font-semibold">DAO Activity</h3>
            <Link href="/dao/proposals">
              <a className="text-sm font-medium text-primary-500 hover:text-primary-600">
                All activity →
              </a>
            </Link>
          </div>
          
          <div className="space-y-4">
            {isLoadingProposals ? (
              // Loading skeletons
              Array(3).fill(0).map((_, index) => (
                <div key={index} className="border border-neutral-200 rounded-md p-3">
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-3" />
                  <Skeleton className="h-1.5 w-full mb-2" />
                  <div className="flex justify-between mb-3">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <div className="flex space-x-2">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                </div>
              ))
            ) : proposals.length > 0 ? (
              proposals.slice(0, 3).map((proposal) => (
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
              <div className="text-center py-6 text-neutral-500">
                <p>No active proposals found.</p>
                {isConnected && (
                  <Button 
                    className="mt-2"
                    variant="outline"
                    onClick={() => window.location.href = '/dao/proposals/create'}
                  >
                    Create a New Proposal
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Available Tasks */}
        <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-heading font-semibold">Available Tasks</h3>
            <Link href="/marketplace">
              <a className="text-sm font-medium text-primary-500 hover:text-primary-600">
                All tasks →
              </a>
            </Link>
          </div>
          
          <div className="space-y-4">
            {isLoadingTasks ? (
              // Loading skeletons
              Array(4).fill(0).map((_, index) => (
                <div key={index} className="border border-neutral-200 rounded-md p-3">
                  <div className="flex justify-between mb-2">
                    <Skeleton className="h-5 w-1/2" />
                    <Skeleton className="h-5 w-24" />
                  </div>
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-10 w-full mb-3" />
                  <div className="flex justify-between">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                </div>
              ))
            ) : tasks.length > 0 ? (
              tasks.slice(0, 4).map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onApply={handleApplyForTask}
                />
              ))
            ) : (
              <div className="text-center py-6 text-neutral-500">
                <p>No available tasks found.</p>
                {isConnected && (
                  <Button 
                    className="mt-2"
                    variant="outline"
                    onClick={() => window.location.href = '/marketplace/create'}
                  >
                    Create a New Task
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Membership Tiers */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-heading font-semibold">Membership Tiers</h3>
          <Button variant="link" asChild>
            <Link href="/memberships">
              <a className="text-sm font-medium text-primary-500 hover:text-primary-600">
                Compare all features →
              </a>
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Free Tier */}
          <div className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
            <div className="p-5">
              <h4 className="text-lg font-medium">Free</h4>
              <p className="text-neutral-500 text-sm my-2">Basic access with sweat equity</p>
              <p className="text-3xl font-heading font-bold mt-4 mb-2">$0</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Limited property listings
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Access to task marketplace
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Community forum access
                </li>
                <li className="flex items-center text-neutral-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No AI valuation tools
                </li>
                <li className="flex items-center text-neutral-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No governance rights
                </li>
              </ul>
              <Link href="/memberships">
                <Button variant="outline" className="mt-6 w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Basic Tier */}
          <div className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
            <div className="p-5">
              <h4 className="text-lg font-medium">Basic</h4>
              <p className="text-neutral-500 text-sm my-2">Individual investors & agents</p>
              <p className="text-3xl font-heading font-bold mt-4 mb-2">$49<span className="text-base font-normal text-neutral-500">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited property listings
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic AI valuation tools
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  10 DAC governance tokens
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Priority marketplace access
                </li>
                <li className="flex items-center text-neutral-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No smart contract generation
                </li>
              </ul>
              <Link href="/memberships">
                <Button className="mt-6 w-full">
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Premium Tier */}
          <div className="bg-white rounded-lg border-2 border-primary-500 shadow-md overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold uppercase py-1 px-3 transform translate-x-6 rotate-45 origin-bottom-left">
              Popular
            </div>
            <div className="p-5">
              <h4 className="text-lg font-medium">Premium</h4>
              <p className="text-neutral-500 text-sm my-2">Professional real estate firms</p>
              <p className="text-3xl font-heading font-bold mt-4 mb-2">$199<span className="text-base font-normal text-neutral-500">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited property listings
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced AI valuation tools
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  50 DAC governance tokens
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Smart contract generation
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  AI legal assistant
                </li>
              </ul>
              <Link href="/memberships">
                <Button className="mt-6 w-full">
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Enterprise Tier */}
          <div className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
            <div className="p-5">
              <h4 className="text-lg font-medium">Enterprise</h4>
              <p className="text-neutral-500 text-sm my-2">Large institutions & developers</p>
              <p className="text-3xl font-heading font-bold mt-4 mb-2">Custom</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Premium
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  White-labeled platform
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom DAO governance
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated support team
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom API integrations
                </li>
              </ul>
              <Link href="/memberships">
                <Button variant="outline" className="mt-6 w-full bg-neutral-800 text-white hover:bg-neutral-900">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

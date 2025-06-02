import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'wouter';
import { 
  Search, 
  Filter, 
  Plus, 
  AlertCircle, 
  Clock,
  DollarSign,
  ShoppingBag,
  BarChartHorizontal,
  Building2,
  TrendingUp,
  Wallet,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { TaskCard } from '@/components/ui/task-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Task } from '@shared/schema';

interface AssetTokenizationForm {
  assetType: string;
  description: string;
  valuation: string;
  requestedTokens: string;
  custodianInfo: {
    name: string;
    license: string;
    address: string;
  };
  documentation: {
    title: string;
    description: string;
  };
}

export default function MarketplaceIndex() {
  const { isConnected, user } = useWallet();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceSort, setPriceSort] = useState('desc');
  const [activeTab, setActiveTab] = useState('tasks');
  const [rwaTab, setRwaTab] = useState('tokenize');
  const [taskSubTab, setTaskSubTab] = useState('available');
  
  // RWA tokenization form state
  const [tokenizationForm, setTokenizationForm] = useState<AssetTokenizationForm>({
    assetType: "",
    description: "",
    valuation: "",
    requestedTokens: "",
    custodianInfo: {
      name: "",
      license: "",
      address: ""
    },
    documentation: {
      title: "",
      description: ""
    }
  });
  
  // Fetch tasks (only when tasks tab is active)
  const { 
    data: tasks = [], 
    isLoading,
    isError,
    refetch
  } = useQuery<Task[]>({
    queryKey: ['/api/tasks', { 
      status: taskSubTab === 'available' ? 'open' : 
             taskSubTab === 'mine' ? 'owned' : 
             taskSubTab === 'applied' ? 'applied' : undefined,
      search: searchQuery,
      category: categoryFilter !== 'all' ? categoryFilter : undefined,
      sort: priceSort
    }],
    enabled: activeTab === 'tasks',
  });
  
  // Fetch task statistics
  const { 
    data: taskStats,
    isLoading: isLoadingStats
  } = useQuery({
    queryKey: ['/api/tasks/stats'],
    enabled: activeTab === 'tasks',
  });

  // Fetch RWA assets and portfolio data
  const { 
    data: rwaAssets = [], 
    isLoading: isLoadingRWA,
    isError: isRWAError 
  } = useQuery({
    queryKey: ['/api/rwa/assets'],
    enabled: activeTab === 'rwa',
  });

  const { 
    data: rwaPortfolio,
    isLoading: isLoadingPortfolio 
  } = useQuery({
    queryKey: ['/api/rwa/portfolio'],
    enabled: activeTab === 'rwa' && isConnected,
  });

  // RWA tokenization mutation
  const tokenizeAssetMutation = useMutation({
    mutationFn: async (formData: AssetTokenizationForm) => {
      return apiRequest('/api/rwa/tokenize', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
    },
    onSuccess: () => {
      toast({
        title: "Tokenization Request Submitted",
        description: "Your asset tokenization request has been submitted for review.",
      });
      setTokenizationForm({
        assetType: "",
        description: "",
        valuation: "",
        requestedTokens: "",
        custodianInfo: { name: "", license: "", address: "" },
        documentation: { title: "", description: "" }
      });
      queryClient.invalidateQueries({ queryKey: ['/api/rwa/assets'] });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Failed to submit tokenization request. Please try again.",
        variant: "destructive",
      });
    },
  });
  
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
      description: `Your application for task #${taskId} has been submitted successfully!`,
    });
  };

  const handleTokenizeAsset = () => {
    if (!isConnected) {
      toast({
        title: "Authentication Required",
        description: "Please connect your wallet to tokenize assets.",
        variant: "destructive",
      });
      return;
    }
    
    tokenizeAssetMutation.mutate(tokenizationForm);
  };
  
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'photography', label: 'Photography' },
    { value: 'data-analysis', label: 'Data Analysis' },
    { value: 'blockchain', label: 'Blockchain Development' },
    { value: 'ai-development', label: 'AI Development' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'legal', label: 'Legal Services' },
    { value: 'administrative', label: 'Administrative' },
  ];

  const rwaAssetTypes = [
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'art', label: 'Art & Collectibles' },
    { value: 'commodities', label: 'Commodities' },
    { value: 'intellectual-property', label: 'Intellectual Property' },
    { value: 'business-equity', label: 'Business Equity' },
    { value: 'renewable-energy', label: 'Renewable Energy' },
    { value: 'infrastructure', label: 'Infrastructure' },
    { value: 'other', label: 'Other Assets' },
  ];
  
  const popularSkills = [
    { name: 'Photography', count: 32 },
    { name: 'Data Analysis', count: 28 },
    { name: 'Smart Contracts', count: 24 },
    { name: 'UI/UX Design', count: 19 },
    { name: 'Content Writing', count: 17 },
    { name: 'Legal Review', count: 14 },
    { name: 'Marketing', count: 12 },
    { name: 'Translation', count: 9 },
  ];
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold mb-2">
            {activeTab === 'tasks' ? 'Task Marketplace' : 'Real World Asset Marketplace'}
          </h1>
          <p className="text-neutral-500">
            {activeTab === 'tasks' 
              ? 'Find gig opportunities or create tasks for the DAC community.'
              : 'Tokenize real-world assets and access fractional ownership opportunities.'
            }
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          {activeTab === 'tasks' ? (
            <Button asChild>
              <Link href="/marketplace/create">
                <Plus className="mr-2 h-4 w-4" />
                Create Task
              </Link>
            </Button>
          ) : (
            <Button onClick={() => setRwaTab('tokenize')}>
              <Building2 className="mr-2 h-4 w-4" />
              Tokenize Asset
            </Button>
          )}
        </div>
      </div>

      {/* Main marketplace tabs */}
      <div className="mb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tasks" className="flex items-center">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Task Marketplace
            </TabsTrigger>
            <TabsTrigger value="rwa" className="flex items-center">
              <Building2 className="mr-2 h-4 w-4" />
              RWA Marketplace
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {activeTab === 'tasks' ? (
            <>
              {/* Task marketplace content */}
              <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                <Tabs 
                  value={taskSubTab} 
                  onValueChange={setTaskSubTab}
                  className="w-full md:w-auto"
                >
                  <TabsList>
                    <TabsTrigger value="available">Available Tasks</TabsTrigger>
                    {isConnected && (
                      <>
                        <TabsTrigger value="mine">My Tasks</TabsTrigger>
                        <TabsTrigger value="applied">Applied</TabsTrigger>
                      </>
                    )}
                  </TabsList>
                </Tabs>
                
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                    <Input 
                      placeholder="Search tasks..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 min-w-[200px]"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between bg-neutral-50 p-3 rounded-lg mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <Filter className="h-4 w-4 mr-2 text-neutral-500" />
                  <span className="text-sm font-medium mr-3">Filters:</span>
                  
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-[180px] h-8 text-xs">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Select value={priceSort} onValueChange={setPriceSort}>
                  <SelectTrigger className="w-[180px] h-8 text-xs">
                    <SelectValue placeholder="Sort by price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desc">Price: High to Low</SelectItem>
                    <SelectItem value="asc">Price: Low to High</SelectItem>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="deadline">Deadline</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {isLoading ? (
                <div className="space-y-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="flex justify-between mb-2">
                          <Skeleton className="h-5 w-1/3" />
                          <Skeleton className="h-5 w-16" />
                        </div>
                        <Skeleton className="h-4 w-1/4 mb-2" />
                        <Skeleton className="h-12 w-full mb-3" />
                        <div className="flex justify-between">
                          <Skeleton className="h-5 w-16" />
                          <Skeleton className="h-9 w-20" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : isError ? (
                <div className="text-center py-10 bg-red-50 rounded-lg border border-red-200">
                  <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-red-800 mb-1">Error Loading Tasks</h3>
                  <p className="text-sm text-red-600 mb-4">
                    An error occurred while loading tasks. Please try again.
                  </p>
                  <Button onClick={() => refetch()}>Retry</Button>
                </div>
              ) : tasks.length > 0 ? (
                <div className="space-y-4">
                  {tasks.map(task => (
                    <TaskCard 
                      key={task.id} 
                      task={task} 
                      onApply={handleApplyForTask} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-neutral-50 rounded-lg border border-neutral-200">
                  <ShoppingBag className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
                  <h3 className="text-lg font-medium mb-1">No Tasks Found</h3>
                  <p className="text-neutral-500 mb-4">
                    {taskSubTab === 'available' 
                      ? 'There are currently no available tasks matching your filters.' 
                      : taskSubTab === 'mine'
                      ? 'You haven\'t created any tasks yet.'
                      : 'You haven\'t applied to any tasks yet.'}
                  </p>
                  {taskSubTab === 'available' ? (
                    <Button onClick={() => {
                      setCategoryFilter('all');
                      setSearchQuery('');
                    }}>
                      Clear Filters
                    </Button>
                  ) : (
                    <Button asChild>
                      <Link href="/marketplace/create">Create a Task</Link>
                    </Button>
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              {/* RWA marketplace content */}
              <div className="mb-6">
                <Tabs value={rwaTab} onValueChange={setRwaTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tokenize">Tokenize Assets</TabsTrigger>
                    <TabsTrigger value="marketplace">Browse Assets</TabsTrigger>
                    <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="tokenize" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Building2 className="mr-2 h-5 w-5" />
                          Asset Tokenization Request
                        </CardTitle>
                        <CardDescription>
                          Submit your real-world asset for tokenization and fractional ownership.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="assetType">Asset Type</Label>
                            <Select 
                              value={tokenizationForm.assetType} 
                              onValueChange={(value) => setTokenizationForm(prev => ({...prev, assetType: value}))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select asset type" />
                              </SelectTrigger>
                              <SelectContent>
                                {rwaAssetTypes.map(type => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="valuation">Asset Valuation (USD)</Label>
                            <Input
                              id="valuation"
                              type="number"
                              placeholder="1000000"
                              value={tokenizationForm.valuation}
                              onChange={(e) => setTokenizationForm(prev => ({...prev, valuation: e.target.value}))}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="description">Asset Description</Label>
                          <Textarea
                            id="description"
                            placeholder="Provide a detailed description of your asset..."
                            value={tokenizationForm.description}
                            onChange={(e) => setTokenizationForm(prev => ({...prev, description: e.target.value}))}
                            rows={4}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="requestedTokens">Requested Token Supply</Label>
                          <Input
                            id="requestedTokens"
                            type="number"
                            placeholder="1000000"
                            value={tokenizationForm.requestedTokens}
                            onChange={(e) => setTokenizationForm(prev => ({...prev, requestedTokens: e.target.value}))}
                          />
                        </div>
                        
                        <div className="border rounded-lg p-4 space-y-4">
                          <h4 className="font-medium">Custodian Information</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="custodianName">Custodian Name</Label>
                              <Input
                                id="custodianName"
                                placeholder="Asset custody company"
                                value={tokenizationForm.custodianInfo.name}
                                onChange={(e) => setTokenizationForm(prev => ({
                                  ...prev, 
                                  custodianInfo: {...prev.custodianInfo, name: e.target.value}
                                }))}
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="custodianLicense">License Number</Label>
                              <Input
                                id="custodianLicense"
                                placeholder="License/Registration number"
                                value={tokenizationForm.custodianInfo.license}
                                onChange={(e) => setTokenizationForm(prev => ({
                                  ...prev, 
                                  custodianInfo: {...prev.custodianInfo, license: e.target.value}
                                }))}
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="custodianAddress">Custodian Address</Label>
                            <Textarea
                              id="custodianAddress"
                              placeholder="Physical address of the custodian"
                              value={tokenizationForm.custodianInfo.address}
                              onChange={(e) => setTokenizationForm(prev => ({
                                ...prev, 
                                custodianInfo: {...prev.custodianInfo, address: e.target.value}
                              }))}
                              rows={2}
                            />
                          </div>
                        </div>
                        
                        <Button 
                          onClick={handleTokenizeAsset}
                          disabled={tokenizeAssetMutation.isPending}
                          className="w-full"
                        >
                          {tokenizeAssetMutation.isPending ? 'Submitting...' : 'Submit Tokenization Request'}
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="marketplace" className="mt-6">
                    <div className="space-y-4">
                      {isLoadingRWA ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Array(4).fill(0).map((_, i) => (
                            <Card key={i}>
                              <CardContent className="p-4">
                                <Skeleton className="h-32 w-full mb-4" />
                                <Skeleton className="h-5 w-3/4 mb-2" />
                                <Skeleton className="h-4 w-1/2" />
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : rwaAssets.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {rwaAssets.map((asset: any, index: number) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-3">
                                  <Badge variant="outline">{asset.type || 'Real Estate'}</Badge>
                                  <span className="text-lg font-bold">${asset.price || '1,250,000'}</span>
                                </div>
                                <h3 className="font-medium mb-2">{asset.name || 'Premium Commercial Property'}</h3>
                                <p className="text-sm text-neutral-600 mb-3">
                                  {asset.description || 'High-yield commercial property in prime location with stable tenants.'}
                                </p>
                                <div className="flex justify-between text-sm">
                                  <span>Token Supply: {asset.tokenSupply || '1,000,000'}</span>
                                  <span>APY: {asset.apy || '8.5%'}</span>
                                </div>
                                <Button className="w-full mt-3" size="sm">
                                  <Wallet className="mr-2 h-4 w-4" />
                                  Invest Now
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-10 bg-neutral-50 rounded-lg border border-neutral-200">
                          <Building2 className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
                          <h3 className="text-lg font-medium mb-1">No Assets Available</h3>
                          <p className="text-neutral-500 mb-4">
                            No tokenized assets are currently available for investment.
                          </p>
                          <Button onClick={() => setRwaTab('tokenize')}>
                            Tokenize Your Asset
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="portfolio" className="mt-6">
                    {isConnected ? (
                      <div className="space-y-6">
                        {isLoadingPortfolio ? (
                          <Card>
                            <CardContent className="p-6">
                              <Skeleton className="h-6 w-1/3 mb-4" />
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {Array(4).fill(0).map((_, i) => (
                                  <div key={i}>
                                    <Skeleton className="h-4 w-full mb-2" />
                                    <Skeleton className="h-6 w-2/3" />
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ) : (
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center">
                                <TrendingUp className="mr-2 h-5 w-5" />
                                Portfolio Overview
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div>
                                  <p className="text-sm text-neutral-600">Total Value</p>
                                  <p className="text-2xl font-bold">${rwaPortfolio?.totalValue || '0'}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-neutral-600">Total Assets</p>
                                  <p className="text-2xl font-bold">{rwaPortfolio?.totalAssets || '0'}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-neutral-600">Performance</p>
                                  <p className="text-2xl font-bold text-green-600">+{rwaPortfolio?.performance || '0'}%</p>
                                </div>
                                <div>
                                  <p className="text-sm text-neutral-600">Dividends Received</p>
                                  <p className="text-2xl font-bold">${rwaPortfolio?.dividendsReceived || '0'}</p>
                                </div>
                              </div>
                              
                              {rwaPortfolio?.assets?.length > 0 ? (
                                <div className="space-y-4">
                                  <h4 className="font-medium">Your Investments</h4>
                                  {rwaPortfolio.assets.map((asset: any, index: number) => (
                                    <div key={index} className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
                                      <div>
                                        <p className="font-medium">{asset.name}</p>
                                        <p className="text-sm text-neutral-600">{asset.tokens} tokens</p>
                                      </div>
                                      <div className="text-right">
                                        <p className="font-medium">${asset.value}</p>
                                        <p className="text-sm text-green-600">+{asset.performance}%</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="text-center py-8">
                                  <Wallet className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
                                  <h4 className="font-medium mb-2">No Investments Yet</h4>
                                  <p className="text-neutral-500 mb-4">Start building your RWA portfolio today.</p>
                                  <Button onClick={() => setRwaTab('marketplace')}>
                                    Browse Assets
                                  </Button>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-10 bg-neutral-50 rounded-lg border border-neutral-200">
                        <Shield className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
                        <h3 className="text-lg font-medium mb-1">Connect Your Wallet</h3>
                        <p className="text-neutral-500 mb-4">
                          Connect your wallet to view your RWA portfolio and manage investments.
                        </p>
                        <Button onClick={() => document.dispatchEvent(new CustomEvent('openWalletModal'))}>
                          Connect Wallet
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            </>
          )}
        </div>
        
        <div className="space-y-6">
          {activeTab === 'tasks' ? (
            <>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-3 flex items-center">
                    <BarChartHorizontal className="h-4 w-4 mr-2 text-primary-500" />
                    Marketplace Statistics
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Available Tasks</span>
                      <span className="font-medium">{isLoadingStats ? '...' : taskStats?.availableTasks || 156}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Completed Tasks</span>
                      <span className="font-medium">{isLoadingStats ? '...' : taskStats?.completedTasks || 1253}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Average Reward</span>
                      <span className="font-medium">${isLoadingStats ? '...' : taskStats?.averageReward || '185'}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Active Workers</span>
                      <span className="font-medium">{isLoadingStats ? '...' : taskStats?.activeWorkers || 438}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-3 flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-primary-500" />
                    Earning Potential
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    {isConnected ? (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-neutral-600">Your Tasks Completed</span>
                          <span className="font-medium">8</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                          <span className="text-neutral-600">Total Earned</span>
                          <span className="font-medium">$1,240</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                          <span className="text-neutral-600">Reputation Score</span>
                          <div className="flex items-center">
                            <span className="font-medium mr-2">4.8/5</span>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Excellent
                            </Badge>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-neutral-500 mb-3">
                          Connect your wallet to see your earning statistics and apply for tasks.
                        </p>
                        <Button size="sm" onClick={() => document.dispatchEvent(new CustomEvent('openWalletModal'))}>
                          Connect Wallet
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary-500" />
                    Popular Skills in Demand
                  </h3>
                  
                  <div className="space-y-3">
                    {popularSkills.map((skill, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span className="text-sm text-neutral-500">{skill.count} tasks</span>
                        </div>
                        <Progress value={(skill.count / popularSkills[0].count) * 100} className="h-1.5" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Building2 className="h-4 w-4 mr-2 text-primary-500" />
                    RWA Market Overview
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Total Assets</span>
                      <span className="font-medium">42</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Market Cap</span>
                      <span className="font-medium">$52.8M</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Average APY</span>
                      <span className="font-medium">7.2%</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Active Investors</span>
                      <span className="font-medium">1,247</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-3 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary-500" />
                    Asset Categories
                  </h3>
                  
                  <div className="space-y-3">
                    {[
                      { name: 'Real Estate', percentage: 45 },
                      { name: 'Art & Collectibles', percentage: 25 },
                      { name: 'Commodities', percentage: 15 },
                      { name: 'Infrastructure', percentage: 10 },
                      { name: 'Other', percentage: 5 },
                    ].map((category, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{category.name}</span>
                          <span className="text-sm text-neutral-500">{category.percentage}%</span>
                        </div>
                        <Progress value={category.percentage} className="h-1.5" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Quick Tips</h3>
              
              <ul className="space-y-2 text-sm text-neutral-600 list-disc list-inside">
                {activeTab === 'tasks' ? (
                  <>
                    <li>Complete your profile to improve task matching</li>
                    <li>Apply quickly to high-paying tasks for better chances</li>
                    <li>Build your reputation with quality work</li>
                    <li>Earn DAC tokens from completed tasks</li>
                    <li>Join specialized skill channels in the community</li>
                  </>
                ) : (
                  <>
                    <li>Diversify across different asset types for better returns</li>
                    <li>Research custodian credentials before investing</li>
                    <li>Monitor market trends and asset performance</li>
                    <li>Start with smaller investments to test the platform</li>
                    <li>Join RWA investment discussions in the community</li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
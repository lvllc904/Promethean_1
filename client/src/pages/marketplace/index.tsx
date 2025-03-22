import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { 
  Search, 
  Filter, 
  Plus, 
  AlertCircle, 
  Clock,
  DollarSign,
  ShoppingBag,
  BarChartHorizontal
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
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useToast } from '@/hooks/use-toast';
import { Task } from '@shared/schema';

export default function MarketplaceIndex() {
  const { isConnected, user } = useWallet();
  const { toast } = useToast();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceSort, setPriceSort] = useState('desc');
  const [activeTab, setActiveTab] = useState('available');
  
  // Fetch tasks
  const { 
    data: tasks = [], 
    isLoading,
    isError,
    refetch
  } = useQuery<Task[]>({
    queryKey: ['/api/tasks', { 
      status: activeTab === 'available' ? 'open' : 
             activeTab === 'mine' ? 'owned' : 
             activeTab === 'applied' ? 'applied' : undefined,
      search: searchQuery,
      category: categoryFilter !== 'all' ? categoryFilter : undefined,
      sort: priceSort
    }],
  });
  
  // Fetch task statistics
  const { 
    data: taskStats,
    isLoading: isLoadingStats
  } = useQuery({
    queryKey: ['/api/tasks/stats'],
    enabled: true,
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
          <h1 className="text-2xl font-heading font-bold mb-2">Task Marketplace</h1>
          <p className="text-neutral-500">
            Find gig opportunities or create tasks for the DAC community.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link href="/marketplace/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Task
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
            <Tabs 
              defaultValue="available" 
              value={activeTab} 
              onValueChange={setActiveTab}
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
                {activeTab === 'available' 
                  ? 'There are currently no available tasks matching your filters.' 
                  : activeTab === 'mine'
                  ? 'You haven\'t created any tasks yet.'
                  : 'You haven\'t applied to any tasks yet.'}
              </p>
              {activeTab === 'available' ? (
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
        </div>
        
        <div className="space-y-6">
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
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Quick Tips</h3>
              
              <ul className="space-y-2 text-sm text-neutral-600 list-disc list-inside">
                <li>Complete your profile to improve task matching</li>
                <li>Apply quickly to high-paying tasks for better chances</li>
                <li>Build your reputation with quality work</li>
                <li>Earn DAC tokens from completed tasks</li>
                <li>Join specialized skill channels in the community</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

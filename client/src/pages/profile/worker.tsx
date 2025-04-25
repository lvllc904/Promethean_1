import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'wouter';
import { 
  Star, 
  Award,
  Briefcase,
  Clock,
  CheckCircle2,
  ThumbsUp,
  Calendar,
  ArrowUpRight,
  BarChart3,
  MessageSquare,
  Users
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Skeleton } from '@/components/ui/skeleton';
import { TaskCard } from '@/components/ui/task-card';
import { WorkerReputation, WorkerRating, Task } from '@shared/schema';

export default function WorkerProfile() {
  const { id } = useParams();
  const workerId = parseInt(id || '0');
  const [activeTab, setActiveTab] = useState('overview');

  // Fetch worker profile and reputation data
  const { 
    data: worker,
    isLoading: isLoadingWorker,
    isError: isWorkerError 
  } = useQuery<{
    profile: {
      id: number;
      username: string;
      name: string;
      bio: string;
      skills: string[];
      avatarUrl: string;
      location: string;
      joinedDate: string;
    },
    reputation: WorkerReputation
  }>({
    queryKey: ['/api/workers', workerId],
    enabled: Boolean(workerId),
  });

  // Fetch worker ratings
  const {
    data: ratings = [],
    isLoading: isLoadingRatings
  } = useQuery<WorkerRating[]>({
    queryKey: ['/api/workers', workerId, 'ratings'],
    enabled: Boolean(workerId),
  });

  // Fetch worker tasks
  const {
    data: tasks = [],
    isLoading: isLoadingTasks
  } = useQuery<Task[]>({
    queryKey: ['/api/workers', workerId, 'tasks'],
    enabled: Boolean(workerId),
  });

  // Format date properly
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Calculate experience bar percentage for display
  const calculateExpBar = (xp: number, level: number) => {
    // Simple formula: each level requires level*1000 XP
    const nextLevelXp = level * 1000;
    const currentLevelXp = (level - 1) * 1000;
    const levelProgress = xp - currentLevelXp;
    
    return Math.floor((levelProgress / (nextLevelXp - currentLevelXp)) * 100);
  };

  // Get color based on reputation level
  const getReputationColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 4) return 'text-green-500';
    if (rating >= 3.5) return 'text-yellow-500';
    if (rating >= 3) return 'text-yellow-600';
    return 'text-red-500';
  };

  // Get badge background color based on rarity
  const getBadgeColor = (rarity: string) => {
    switch(rarity.toLowerCase()) {
      case 'common': return 'bg-slate-100 text-slate-800';
      case 'uncommon': return 'bg-green-100 text-green-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-amber-100 text-amber-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  if (isWorkerError) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Worker Profile Not Found</h2>
        <p className="text-neutral-500 mb-6">This worker profile does not exist or has been removed.</p>
        <Button asChild><a href="/marketplace">Return to Marketplace</a></Button>
      </div>
    );
  }

  if (isLoadingWorker) {
    return <WorkerProfileSkeleton />;
  }

  // Calculate the average rating for rendering stars
  const averageRating = worker?.reputation.overallRating || 0;
  
  // Sort skills by highest rating
  const sortedSkills = Object.entries(worker?.reputation.ratingsByCategory || {})
    .sort(([, a], [, b]) => Number(b) - Number(a))
    .slice(0, 6);

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Avatar and basic info */}
        <div className="w-full md:w-1/3">
          <Card>
            <CardContent className="p-6 text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={worker?.profile.avatarUrl} alt={worker?.profile.name} />
                <AvatarFallback className="text-xl">
                  {worker?.profile.name?.split(' ').map(n => n[0]).join('') || 'U'}
                </AvatarFallback>
              </Avatar>
              
              <h2 className="text-xl font-bold mb-1">{worker?.profile.name}</h2>
              <p className="text-neutral-500 text-sm mb-3">@{worker?.profile.username}</p>
              
              <div className="flex items-center justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= Math.round(Number(averageRating)) 
                      ? 'text-yellow-400 fill-yellow-400' 
                      : 'text-neutral-300'}`}
                  />
                ))}
                <span className={`ml-2 font-medium ${getReputationColor(Number(averageRating))}`}>
                  {Number(averageRating).toFixed(1)}
                </span>
                <span className="ml-1 text-neutral-500 text-sm">
                  ({worker?.reputation.ratingsCount || 0})
                </span>
              </div>
              
              <div className="flex justify-center space-x-4 mb-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-primary-600">{tasks.filter(t => t.status === 'completed').length}</p>
                  <p className="text-xs text-neutral-500">Tasks Completed</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <p className="text-xl font-bold text-primary-600">{worker?.reputation.level || 1}</p>
                  <p className="text-xs text-neutral-500">Level</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <p className="text-xl font-bold text-primary-600">{worker?.reputation.badgeIds?.length || 0}</p>
                  <p className="text-xs text-neutral-500">Badges</p>
                </div>
              </div>
              
              <div className="text-sm text-left mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span>Level {worker?.reputation.level || 1}</span>
                  <span className="text-xs text-neutral-500">
                    {worker?.reputation.experiencePoints || 0} XP
                  </span>
                </div>
                <Progress 
                  value={calculateExpBar(
                    worker?.reputation.experiencePoints || 0, 
                    worker?.reputation.level || 1
                  )} 
                  className="h-2" 
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {worker?.profile.skills?.slice(0, 5).map((skill, i) => (
                  <Badge key={i} variant="outline" className="bg-primary-50">{skill}</Badge>
                ))}
              </div>
              
              <div className="space-y-3 text-sm text-left">
                <div className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-neutral-500 mt-0.5" />
                  <p className="text-neutral-600">Joined {worker?.profile.joinedDate ? formatDate(worker.profile.joinedDate) : 'N/A'}</p>
                </div>
                {worker?.profile.location && (
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-500 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="text-neutral-600">{worker.profile.location}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main profile content */}
        <div className="w-full md:w-2/3 space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="ratings">Reviews ({ratings.length})</TabsTrigger>
              <TabsTrigger value="tasks">Completed Tasks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6 mt-6">
              {/* Bio */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700">
                    {worker?.profile.bio || 'This worker has not added a bio yet.'}
                  </p>
                </CardContent>
              </Card>
              
              {/* Skills */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Skills & Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sortedSkills.length > 0 ? (
                      sortedSkills.map(([skill, rating], i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-neutral-800">{skill}</span>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-3.5 w-3.5 ${star <= Math.round(Number(rating)) 
                                    ? 'text-yellow-400 fill-yellow-400' 
                                    : 'text-neutral-300'}`}
                                />
                              ))}
                              <span className="ml-2 text-sm">
                                {Number(rating).toFixed(1)}
                              </span>
                            </div>
                          </div>
                          <Progress 
                            value={Number(rating) * 20} 
                            className="h-1.5" 
                          />
                        </div>
                      ))
                    ) : (
                      <p className="text-neutral-500 py-2">No skill ratings available yet.</p>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {/* Stats */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Performance Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-neutral-500">Response Rate</p>
                      <div className="flex items-center">
                        <span className="text-xl font-bold mr-1">
                          {worker?.reputation.responseRate 
                            ? Math.round(Number(worker.reputation.responseRate)) + '%' 
                            : 'N/A'}
                        </span>
                      </div>
                      {worker?.reputation.responseRate && (
                        <Progress value={Number(worker.reputation.responseRate)} className="h-1.5" />
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-neutral-500">Completion Rate</p>
                      <div className="flex items-center">
                        <span className="text-xl font-bold mr-1">
                          {worker?.reputation.completionRate 
                            ? Math.round(Number(worker.reputation.completionRate)) + '%' 
                            : 'N/A'}
                        </span>
                      </div>
                      {worker?.reputation.completionRate && (
                        <Progress value={Number(worker.reputation.completionRate)} className="h-1.5" />
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-neutral-500">On-Time Rate</p>
                      <div className="flex items-center">
                        <span className="text-xl font-bold mr-1">
                          {worker?.reputation.onTimeRate 
                            ? Math.round(Number(worker.reputation.onTimeRate)) + '%' 
                            : 'N/A'}
                        </span>
                      </div>
                      {worker?.reputation.onTimeRate && (
                        <Progress value={Number(worker.reputation.onTimeRate)} className="h-1.5" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Badges */}
              {worker?.reputation.badgeIds && worker.reputation.badgeIds.length > 0 && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Earned Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {worker.reputation.badgeIds.map((badgeId, i) => (
                        <TooltipProvider key={i}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className={`flex items-center px-3 py-1.5 rounded-full ${getBadgeColor('rare')}`}>
                                <Award className="h-4 w-4 mr-1.5" />
                                <span className="text-sm font-medium">Quality Expert</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="font-medium">Quality Expert</p>
                              <p className="text-xs">Consistently received 5-star ratings for quality</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="ratings" className="space-y-4 mt-6">
              {isLoadingRatings ? (
                Array(3).fill(0).map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex justify-between mb-2">
                        <Skeleton className="h-5 w-1/4" />
                        <Skeleton className="h-5 w-20" />
                      </div>
                      <Skeleton className="h-4 w-full mb-3" />
                      <Skeleton className="h-4 w-full mb-3" />
                      <Skeleton className="h-4 w-2/3" />
                    </CardContent>
                  </Card>
                ))
              ) : ratings.length > 0 ? (
                ratings.map((rating, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          {!rating.anonymous ? (
                            <span className="font-medium">Rater #{rating.raterId}</span>
                          ) : (
                            <span className="text-neutral-500">Anonymous</span>
                          )}
                          <span className="text-neutral-400 mx-2">•</span>
                          <span className="text-neutral-500 text-sm">
                            {formatDate(rating.createdAt.toString())}
                          </span>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= rating.rating 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : 'text-neutral-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-neutral-700">{rating.review || 'No written review provided.'}</p>
                      {rating.criteria && Object.keys(rating.criteria).length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {Object.entries(rating.criteria).map(([key, value], i) => (
                            <Badge key={i} variant="outline" className="bg-neutral-50">
                              {key}: {value}/5
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-10 bg-neutral-50 rounded-lg">
                  <MessageSquare className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
                  <h3 className="text-lg font-medium mb-1">No Reviews Yet</h3>
                  <p className="text-neutral-500 max-w-md mx-auto">
                    This worker hasn't received any reviews yet.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="tasks" className="space-y-4 mt-6">
              {isLoadingTasks ? (
                Array(3).fill(0).map((_, i) => (
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
                ))
              ) : tasks.filter(t => t.status === 'completed').length > 0 ? (
                tasks
                  .filter(t => t.status === 'completed')
                  .map(task => (
                    <TaskCard 
                      key={task.id} 
                      task={task} 
                      onApply={() => {}}
                      readOnly 
                    />
                  ))
              ) : (
                <div className="text-center py-10 bg-neutral-50 rounded-lg">
                  <Briefcase className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
                  <h3 className="text-lg font-medium mb-1">No Completed Tasks</h3>
                  <p className="text-neutral-500 max-w-md mx-auto">
                    This worker hasn't completed any tasks yet.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

// Skeleton loader for worker profile
function WorkerProfileSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/3">
          <Card>
            <CardContent className="p-6 text-center">
              <Skeleton className="h-24 w-24 rounded-full mx-auto mb-4" />
              <Skeleton className="h-6 w-1/2 mx-auto mb-1" />
              <Skeleton className="h-4 w-1/3 mx-auto mb-3" />
              <Skeleton className="h-4 w-2/3 mx-auto mb-4" />
              
              <div className="flex justify-center space-x-4 mb-4">
                <div className="text-center">
                  <Skeleton className="h-6 w-8 mx-auto mb-1" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <Skeleton className="h-6 w-8 mx-auto mb-1" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <Skeleton className="h-6 w-8 mx-auto mb-1" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-2 w-full mb-6" />
              
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-16 rounded-full" />
                ))}
              </div>
              
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="w-full md:w-2/3 space-y-6">
          <div className="w-full border-b pb-2">
            <Skeleton className="h-10 w-full" />
          </div>
          
          <Card>
            <CardHeader className="pb-2">
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array(4).fill(0).map((_, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-2 w-full" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
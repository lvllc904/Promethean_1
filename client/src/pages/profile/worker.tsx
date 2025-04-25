import { useState } from 'react';
import { useParams, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { 
  Star, 
  Map, 
  Calendar, 
  Clock, 
  ChevronRight,
  Award,
  Briefcase,
  ThumbsUp,
  MessageCircle,
  User,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  Share2
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { TaskCard } from '@/components/ui/task-card';
import { Task, WorkerReputation } from '@shared/schema';

export default function WorkerProfile() {
  const { id } = useParams();
  const workerId = parseInt(id || '0');
  const [activeTab, setActiveTab] = useState('overview');
  
  // Fetch worker profile data
  const { 
    data: worker,
    isLoading: isLoadingWorker,
    isError: isErrorWorker,
    refetch: refetchWorker
  } = useQuery({
    queryKey: [`/api/workers/${workerId}`],
    enabled: !!workerId,
  });
  
  // Fetch worker ratings
  const { 
    data: ratings = [],
    isLoading: isLoadingRatings,
  } = useQuery({
    queryKey: [`/api/workers/${workerId}/ratings`],
    enabled: !!workerId,
  });
  
  // Fetch worker completed tasks
  const { 
    data: tasks = [],
    isLoading: isLoadingTasks,
  } = useQuery({
    queryKey: [`/api/workers/${workerId}/tasks`],
    enabled: !!workerId,
  });
  
  const formatRating = (rating: string | number | null) => {
    if (rating === null) return 'N/A';
    return Number(rating).toFixed(1);
  };
  
  // Get color based on reputation level
  const getReputationColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 4) return 'text-green-500';
    if (rating >= 3.5) return 'text-yellow-500';
    if (rating >= 3) return 'text-yellow-600';
    return 'text-red-500';
  };
  
  if (isLoadingWorker) {
    return <WorkerProfileSkeleton />;
  }
  
  if (isErrorWorker || !worker) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-medium mb-4">Error Loading Worker Profile</h2>
        <p className="text-neutral-500 mb-4">
          There was a problem loading this worker's profile. It may not exist or there was a server error.
        </p>
        <div className="flex justify-center gap-3">
          <Button onClick={() => refetchWorker()}>Try Again</Button>
          <Button variant="outline" asChild>
            <Link href="/profile">Back to Workers</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const { profile, reputation } = worker;
  
  return (
    <div>
      <div className="mb-6">
        <Button variant="ghost" className="pl-2 gap-1" asChild>
          <Link href="/profile">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to workers</span>
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={profile.avatarUrl} alt={profile.name} />
                  <AvatarFallback className="text-xl">
                    {profile.name?.split(' ').map(n => n[0]).join('') || profile.username?.substring(0, 2).toUpperCase() || 'W'}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-medium">{profile.name || profile.username}</h2>
                
                <div className="flex items-center justify-center mt-2 mb-1">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= Math.round(Number(reputation.overallRating))
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-neutral-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className={`text-sm font-medium ${getReputationColor(Number(reputation.overallRating))}`}>
                    {formatRating(reputation.overallRating)}
                  </span>
                  <span className="text-neutral-500 text-sm ml-1">
                    ({reputation.ratingsCount || 0} reviews)
                  </span>
                </div>
                
                <div className="flex items-center gap-1 mt-1 text-sm text-neutral-500">
                  <Map className="h-3.5 w-3.5" />
                  <span>{profile.location || 'Location not specified'}</span>
                </div>
                
                <div className="flex items-center gap-1 mt-1.5 mb-4 text-sm text-neutral-500">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Member since {profile.joinedDate ? format(new Date(profile.joinedDate), 'MMM yyyy') : 'N/A'}</span>
                </div>
                
                <div className="grid grid-cols-3 w-full mb-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-medium text-primary">{tasks.length}</div>
                    <div className="text-xs text-neutral-500">Tasks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-medium text-primary">{reputation.level || 1}</div>
                    <div className="text-xs text-neutral-500">Level</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-medium text-primary">{reputation.badgeIds?.length || 0}</div>
                    <div className="text-xs text-neutral-500">Badges</div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="w-full text-left">
                  <h3 className="font-medium mb-2.5 text-sm">Level Progress</h3>
                  <div className="mb-1 flex justify-between text-xs">
                    <span>Level {reputation.level || 1}</span>
                    <span>Level {(reputation.level || 1) + 1}</span>
                  </div>
                  <Progress 
                    value={
                      reputation.experiencePoints
                        ? (reputation.experiencePoints % 1000) / 10 
                        : 0
                    } 
                    className="h-2" 
                  />
                  <p className="mt-1 text-xs text-neutral-500">
                    {reputation.experiencePoints 
                      ? `${reputation.experiencePoints % 1000} / 1000 XP` 
                      : '0 / 1000 XP'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Skills Card */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {profile.skills?.length > 0 ? (
                  profile.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="bg-neutral-50">
                      {skill}
                    </Badge>
                  ))
                ) : (
                  <p className="text-neutral-500 text-sm">No skills listed yet.</p>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Badges Card */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Badges Earned</CardTitle>
            </CardHeader>
            <CardContent>
              {reputation.badgeIds && reputation.badgeIds.length > 0 ? (
                <div className="grid grid-cols-3 gap-2">
                  {reputation.badgeIds.map((badgeId, i) => (
                    <div key={i} className="text-center p-2">
                      <Award className="h-8 w-8 mx-auto text-amber-500 mb-1" />
                      <span className="text-xs">Badge #{badgeId}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-neutral-500 text-sm">No badges earned yet.</p>
              )}
            </CardContent>
          </Card>
          
          {/* Contact Card */}
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <Button className="w-full" size="sm">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Worker
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="work">Work History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              {/* Bio Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">
                    {profile.bio || 'This worker has not added a bio yet.'}
                  </p>
                </CardContent>
              </Card>
              
              {/* Statistics Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Performance</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-4">
                    {/* Ratings by Category */}
                    <div>
                      <h3 className="font-medium mb-3 text-sm">Rating Breakdown</h3>
                      
                      {reputation.ratingsByCategory && Object.keys(reputation.ratingsByCategory).length > 0 ? (
                        <div className="space-y-3">
                          {Object.entries(reputation.ratingsByCategory).map(([category, rating], i) => (
                            <div key={i} className="space-y-1">
                              <div className="flex justify-between text-sm items-center">
                                <span className="capitalize">
                                  {category.replace(/-/g, ' ')}
                                </span>
                                <div className="flex items-center">
                                  <span className={getReputationColor(Number(rating))}>
                                    {formatRating(rating)}
                                  </span>
                                  <Star className={`h-3.5 w-3.5 ml-1 ${
                                    Number(rating) >= 4 
                                      ? 'text-yellow-400 fill-yellow-400' 
                                      : 'text-neutral-300'
                                  }`} />
                                </div>
                              </div>
                              <Progress value={Number(rating) * 20} className="h-1.5" />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-neutral-500 text-sm">No ratings by category yet.</p>
                      )}
                    </div>
                    
                    {/* Completion Rate */}
                    <div>
                      <h3 className="font-medium mb-3 text-sm">Task Completion Rate</h3>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm">Overall Completion</span>
                        <span className="text-green-600 font-medium">
                          {tasks.filter(t => t.status === 'completed').length} / {tasks.length}
                        </span>
                      </div>
                      <Progress 
                        value={tasks.length > 0 
                          ? (tasks.filter(t => t.status === 'completed').length / tasks.length) * 100 
                          : 0
                        } 
                        className="h-2" 
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Work Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Recent Work</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary text-sm gap-1"
                    onClick={() => setActiveTab('work')}
                  >
                    <span>View All</span> 
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  {isLoadingTasks ? (
                    <div className="space-y-4">
                      {Array(2).fill(0).map((_, i) => (
                        <div key={i} className="border rounded-lg p-4">
                          <Skeleton className="h-6 w-48 mb-2" />
                          <Skeleton className="h-4 w-full mb-1.5" />
                          <Skeleton className="h-4 w-3/4" />
                          <div className="flex justify-between mt-3">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-16" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : tasks.length > 0 ? (
                    <div className="space-y-4">
                      {tasks.slice(0, 3).map((task) => (
                        <TaskCard key={task.id} task={task} onApply={() => {}} readOnly={true} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center bg-neutral-50 py-6 rounded-lg">
                      <Briefcase className="h-10 w-10 text-neutral-400 mx-auto mb-2" />
                      <h3 className="text-lg font-medium mb-1">No Work History</h3>
                      <p className="text-neutral-500 max-w-md mx-auto text-sm">
                        This worker hasn't completed any tasks yet.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Client Reviews</CardTitle>
                  <CardDescription>
                    Feedback from clients who have worked with {profile.name || profile.username}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoadingRatings ? (
                    <div className="space-y-6">
                      {Array(3).fill(0).map((_, i) => (
                        <div key={i} className="border-b pb-5 mb-5 last:border-0 last:mb-0 last:pb-0">
                          <div className="flex gap-3 mb-3">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="flex-1">
                              <Skeleton className="h-4 w-32 mb-1.5" />
                              <Skeleton className="h-3 w-24" />
                            </div>
                            <Skeleton className="h-4 w-16" />
                          </div>
                          <Skeleton className="h-4 w-full mb-1.5" />
                          <Skeleton className="h-4 w-3/4 mb-1.5" />
                          <Skeleton className="h-4 w-1/2" />
                        </div>
                      ))}
                    </div>
                  ) : ratings.length > 0 ? (
                    <div className="space-y-6">
                      {ratings.map((rating, i) => (
                        <div key={i} className="border-b pb-5 mb-5 last:border-0 last:mb-0 last:pb-0">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback>
                                  {rating.raterName?.substring(0, 2).toUpperCase() || 'U'}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">{rating.raterName}</h4>
                                <p className="text-sm text-neutral-500">
                                  {rating.createdAt 
                                    ? format(new Date(rating.createdAt), 'MMM d, yyyy') 
                                    : 'Recently'
                                  }
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="flex mr-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`h-3.5 w-3.5 ${
                                      star <= Math.round(Number(rating.rating))
                                        ? 'text-yellow-400 fill-yellow-400'
                                        : 'text-neutral-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm font-medium">
                                {formatRating(rating.rating)}
                              </span>
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <p className="text-neutral-700">{rating.comments}</p>
                          </div>
                          
                          <div className="text-sm text-neutral-500">
                            <span>Task: </span>
                            <Link href={`/marketplace/task/${rating.taskId}`} className="text-primary hover:underline">
                              {rating.taskTitle || `Task #${rating.taskId}`}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center bg-neutral-50 py-8 rounded-lg">
                      <MessageCircle className="h-10 w-10 text-neutral-400 mx-auto mb-2" />
                      <h3 className="text-lg font-medium mb-1">No Reviews Yet</h3>
                      <p className="text-neutral-500 max-w-md mx-auto text-sm">
                        This worker hasn't received any reviews yet.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="work" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Task History</CardTitle>
                  <CardDescription>
                    A record of all tasks completed by {profile.name || profile.username}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoadingTasks ? (
                    <div className="space-y-4">
                      {Array(4).fill(0).map((_, i) => (
                        <div key={i} className="border rounded-lg p-4">
                          <Skeleton className="h-6 w-48 mb-2" />
                          <Skeleton className="h-4 w-full mb-1.5" />
                          <Skeleton className="h-4 w-3/4" />
                          <div className="flex justify-between mt-3">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-16" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : tasks.length > 0 ? (
                    <div className="space-y-4">
                      {tasks.map((task) => (
                        <div key={task.id} className="border rounded-lg overflow-hidden">
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-medium">{task.title}</h3>
                              <Badge variant={task.status === 'completed' ? 'success' : 'default'}>
                                {task.status}
                              </Badge>
                            </div>
                            <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                              {task.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-neutral-500">
                              <div className="flex items-center">
                                <Clock className="h-3.5 w-3.5 mr-1" />
                                <span>
                                  {task.createdAt 
                                    ? format(new Date(task.createdAt), 'MMM d, yyyy') 
                                    : 'Recently'
                                  }
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Map className="h-3.5 w-3.5 mr-1" />
                                <span>{task.location || 'Remote'}</span>
                              </div>
                            </div>
                          </div>
                          <div className="border-t bg-neutral-50 p-3 flex items-center justify-between">
                            <div className="font-medium">
                              {task.currency || '$'}{parseFloat(task.price).toFixed(2)}
                            </div>
                            <div className="flex gap-2">
                              {task.status === 'completed' ? (
                                <div className="flex items-center text-sm text-green-600">
                                  <CheckCircle2 className="h-4 w-4 mr-1" />
                                  <span>Completed</span>
                                </div>
                              ) : task.status === 'cancelled' ? (
                                <div className="flex items-center text-sm text-red-600">
                                  <XCircle className="h-4 w-4 mr-1" />
                                  <span>Cancelled</span>
                                </div>
                              ) : (
                                <div className="flex items-center text-sm text-amber-600">
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>In Progress</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center bg-neutral-50 py-8 rounded-lg">
                      <Briefcase className="h-10 w-10 text-neutral-400 mx-auto mb-2" />
                      <h3 className="text-lg font-medium mb-1">No Work History</h3>
                      <p className="text-neutral-500 max-w-md mx-auto text-sm">
                        This worker hasn't completed any tasks yet.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function WorkerProfileSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Profile sidebar skeleton */}
      <div className="lg:col-span-1 space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Skeleton className="h-24 w-24 rounded-full mb-4" />
              <Skeleton className="h-7 w-48 mb-2" />
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-4 w-40 mb-2" />
              <Skeleton className="h-4 w-40 mb-4" />
              
              <div className="grid grid-cols-3 w-full mb-2 gap-4">
                <div className="text-center">
                  <Skeleton className="h-6 w-8 mx-auto mb-1" />
                  <Skeleton className="h-4 w-12 mx-auto" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-6 w-8 mx-auto mb-1" />
                  <Skeleton className="h-4 w-12 mx-auto" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-6 w-8 mx-auto mb-1" />
                  <Skeleton className="h-4 w-12 mx-auto" />
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="w-full text-left">
                <Skeleton className="h-5 w-24 mb-3" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-2 w-full mb-1" />
                <Skeleton className="h-4 w-16 mt-1" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <Skeleton className="h-5 w-20" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-28 rounded-full" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <Skeleton className="h-5 w-28" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="text-center p-2">
                  <Skeleton className="h-8 w-8 mx-auto mb-1 rounded-full" />
                  <Skeleton className="h-3 w-12 mx-auto" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Main content skeleton */}
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-3 gap-2 mb-6">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-24 mb-1" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-1.5" />
            <Skeleton className="h-4 w-full mb-1.5" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32 mb-1" />
          </CardHeader>
          <CardContent className="pb-2">
            <div className="space-y-4">
              <div>
                <Skeleton className="h-5 w-28 mb-3" />
                <div className="space-y-3">
                  {Array(3).fill(0).map((_, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <Skeleton className="h-2 w-full" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Skeleton className="h-5 w-36 mb-3" />
                <div className="flex justify-between items-center mb-1.5">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-2 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-8 w-24" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array(2).fill(0).map((_, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-full mb-1.5" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex justify-between mt-3">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
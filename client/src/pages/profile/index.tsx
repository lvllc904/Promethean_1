import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { 
  Search, 
  Star, 
  Filter, 
  Users, 
  Award,
  BarChart3,
  ArrowUpRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { WorkerReputation } from '@shared/schema';

export default function WorkersList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [skillFilter, setSkillFilter] = useState('all');
  const [sortOption, setSortOption] = useState('rating');
  
  // Fetch top workers
  const { 
    data: workers = [], 
    isLoading,
    isError,
    refetch 
  } = useQuery<Array<{
    id: number;
    username: string;
    name: string;
    skills: string[];
    avatarUrl: string;
    reputation: WorkerReputation;
  }>>({
    queryKey: ['/api/workers', { 
      search: searchQuery,
      skill: skillFilter !== 'all' ? skillFilter : undefined,
      sort: sortOption
    }],
  });

  // Get popular skills for filtering
  const { 
    data: skills = [],
  } = useQuery<Array<{
    name: string;
    count: number;
  }>>({
    queryKey: ['/api/skills/popular'],
  });

  // Get leaderboard data for top workers in each category
  const {
    data: leaderboard = {},
    isLoading: isLoadingLeaderboard
  } = useQuery<{
    overall: Array<{ id: number; username: string; score: number }>;
    categories: Record<string, Array<{ id: number; username: string; score: number }>>;
  }>({
    queryKey: ['/api/workers/leaderboard'],
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

  const popularSkills = skills.length > 0 ? skills : [
    { name: 'Photography', count: 32 },
    { name: 'Data Analysis', count: 28 },
    { name: 'Smart Contracts', count: 24 },
    { name: 'UI/UX Design', count: 19 },
    { name: 'Content Writing', count: 17 },
    { name: 'Legal Review', count: 14 },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold mb-2">Community Talent</h1>
          <p className="text-neutral-500">
            Discover skilled workers in the DAC community.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
              <Input 
                placeholder="Search workers by name or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <Select value={skillFilter} onValueChange={setSkillFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Skills</SelectItem>
                  {popularSkills.map((skill, i) => (
                    <SelectItem key={i} value={skill.name.toLowerCase().replace(/\s+/g, '-')}>
                      {skill.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="tasks">Most Tasks</SelectItem>
                  <SelectItem value="level">Highest Level</SelectItem>
                  <SelectItem value="recent">Recently Active</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array(6).fill(0).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex items-center gap-4">
                        <Skeleton className="h-14 w-14 rounded-full" />
                        <div className="flex-1">
                          <Skeleton className="h-5 w-32 mb-1.5" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        <Skeleton className="h-5 w-16 rounded-full" />
                        <Skeleton className="h-5 w-20 rounded-full" />
                        <Skeleton className="h-5 w-24 rounded-full" />
                      </div>
                    </div>
                    <div className="bg-neutral-50 p-3 flex items-center justify-between">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-9 w-24" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : isError ? (
            <div className="text-center bg-red-50 p-6 rounded-lg border border-red-200">
              <p className="text-red-600 mb-3">Failed to load workers data.</p>
              <Button onClick={() => refetch()}>Try Again</Button>
            </div>
          ) : workers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workers.map((worker) => (
                <Card key={worker.id} className="overflow-hidden hover:border-primary-300 transition-colors">
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-14 w-14">
                          <AvatarImage src={worker.avatarUrl} alt={worker.name} />
                          <AvatarFallback>
                            {worker.name?.split(' ').map(n => n[0]).join('') || worker.username?.substring(0, 2).toUpperCase() || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-lg">{worker.name || worker.username}</h3>
                          <div className="flex items-center text-sm text-neutral-500">
                            <div className="flex mr-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-3.5 w-3.5 ${
                                    star <= Math.round(Number(worker.reputation.overallRating))
                                      ? 'text-yellow-400 fill-yellow-400'
                                      : 'text-neutral-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className={getReputationColor(Number(worker.reputation.overallRating))}>
                              {formatRating(worker.reputation.overallRating)}
                            </span>
                            <span className="mx-1">•</span>
                            <span>Level {worker.reputation.level}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {worker.skills?.slice(0, 3).map((skill, i) => (
                          <Badge key={i} variant="outline" className="bg-neutral-50">
                            {skill}
                          </Badge>
                        ))}
                        {worker.skills?.length > 3 && (
                          <Badge variant="outline" className="bg-neutral-50">
                            +{worker.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="bg-neutral-50 p-3 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Award className="h-4 w-4 text-amber-500 mr-1.5" />
                          <span className="text-sm font-medium">{worker.reputation.badgeIds?.length || 0} badges</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-blue-500 mr-1.5" />
                          <span className="text-sm font-medium">{worker.reputation.ratingsCount || 0} reviews</span>
                        </div>
                      </div>
                      
                      <Button asChild size="sm">
                        <Link href={`/profile/worker/${worker.id}`}>
                          <span>View Profile</span>
                          <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center bg-neutral-50 p-8 rounded-lg">
              <Users className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
              <h3 className="text-lg font-medium mb-1">No Workers Found</h3>
              <p className="text-neutral-500 max-w-md mx-auto mb-4">
                No workers match your current search criteria or filters.
              </p>
              <Button onClick={() => {
                setSearchQuery('');
                setSkillFilter('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3 flex items-center">
                <BarChart3 className="h-4 w-4 mr-2 text-primary-500" />
                Leaderboards
              </h3>
              
              <Tabs defaultValue="overall">
                <TabsList className="w-full grid grid-cols-2 mb-4">
                  <TabsTrigger value="overall">Overall</TabsTrigger>
                  <TabsTrigger value="categories">By Skill</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overall" className="space-y-3 mt-0">
                  {isLoadingLeaderboard ? (
                    Array(5).fill(0).map((_, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="font-medium w-5 text-center text-neutral-500">{i+1}</span>
                          <Skeleton className="h-4 w-28" />
                        </div>
                        <Skeleton className="h-4 w-10" />
                      </div>
                    ))
                  ) : leaderboard.overall?.length > 0 ? (
                    leaderboard.overall.slice(0, 5).map((worker, i) => (
                      <Link key={i} href={`/profile/worker/${worker.id}`}>
                        <div className="flex justify-between items-center hover:bg-neutral-50 cursor-pointer p-1.5 rounded-md">
                          <div className="flex items-center gap-2">
                            <span className="font-medium w-5 text-center text-neutral-500">{i+1}</span>
                            <span className={i < 3 ? "font-medium text-primary-700" : ""}>
                              {worker.username}
                            </span>
                            {i === 0 && (
                              <Award className="h-4 w-4 text-amber-500 ml-1" />
                            )}
                          </div>
                          <span className="font-medium">{worker.score.toFixed(1)}</span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-neutral-500 py-2 text-sm">No leaderboard data available yet.</p>
                  )}
                </TabsContent>
                
                <TabsContent value="categories" className="mt-0">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select skill category" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(leaderboard.categories || {}).map((category, i) => (
                        <SelectItem key={i} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="space-y-3 mt-4">
                    {isLoadingLeaderboard ? (
                      Array(5).fill(0).map((_, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="font-medium w-5 text-center text-neutral-500">{i+1}</span>
                            <Skeleton className="h-4 w-28" />
                          </div>
                          <Skeleton className="h-4 w-10" />
                        </div>
                      ))
                    ) : Object.values(leaderboard.categories || {})[0]?.length > 0 ? (
                      Object.values(leaderboard.categories || {})[0].slice(0, 5).map((worker, i) => (
                        <Link key={i} href={`/profile/worker/${worker.id}`}>
                          <div className="flex justify-between items-center hover:bg-neutral-50 cursor-pointer p-1.5 rounded-md">
                            <div className="flex items-center gap-2">
                              <span className="font-medium w-5 text-center text-neutral-500">{i+1}</span>
                              <span className={i < 3 ? "font-medium text-primary-700" : ""}>
                                {worker.username}
                              </span>
                            </div>
                            <span className="font-medium">{worker.score.toFixed(1)}</span>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-neutral-500 py-2 text-sm">Select a skill category to see top workers.</p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Popular Skills</h3>
              
              <div className="space-y-3">
                {popularSkills.slice(0, 6).map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-sm text-neutral-500">{skill.count} workers</span>
                    </div>
                    <Progress value={(skill.count / popularSkills[0].count) * 100} className="h-1.5" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Why Work with the DAC Community?</h3>
              
              <ul className="space-y-2 text-sm text-neutral-600 list-disc list-inside">
                <li>Access to verified, skilled professionals</li>
                <li>Transparent reputation and review system</li>
                <li>Secure blockchain-based payments</li>
                <li>Community governance for dispute resolution</li>
                <li>Earn and use DAC tokens in the ecosystem</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { 
  MessageSquare, 
  Heart, 
  Share2, 
  Filter, 
  Hash, 
  Shield, 
  Users, 
  Lock,
  Unlock,
  ThumbsUp,
  ChevronDown,
  Image,
  Link as LinkIcon,
  UserPlus
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

export default function SocialFeed() {
  const [postText, setPostText] = useState('');
  const [postVisibility, setPostVisibility] = useState('public');
  const [filterBy, setFilterBy] = useState('all');
  
  // Query for social posts
  const {
    data: posts = [],
    isLoading,
    isError,
    refetch
  } = useQuery<Array<{
    id: number;
    profileId: number;
    content: string;
    createdAt: string;
    visibility: 'public' | 'followers' | 'private';
    profileName: string;
    profileUsername: string;
    profileAvatarUrl: string | null;
    likesCount: number;
    commentsCount: number;
    isLiked: boolean;
    isFollowing: boolean;
  }>>({
    queryKey: ['/api/social/feed', { filter: filterBy }],
  });
  
  // Format timestamp to readable date
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };
  
  // Handler for new post submission
  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit to the API
    console.log('Post submitted:', { content: postText, visibility: postVisibility });
    setPostText('');
  };
  
  // Get icon based on post visibility
  const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
      case 'public':
        return <Unlock className="h-3.5 w-3.5 text-green-500" />;
      case 'followers':
        return <Users className="h-3.5 w-3.5 text-blue-500" />;
      case 'private':
        return <Lock className="h-3.5 w-3.5 text-amber-500" />;
      default:
        return null;
    }
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold mb-2">Social Feed</h1>
          <p className="text-neutral-500">
            Connect with the DAC community in a secure, privacy-focused space.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Post Creation Card */}
          <Card>
            <CardContent className="p-4">
              <form onSubmit={handlePostSubmit}>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {/* User's initials would go here */}
                        ME
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Input
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                        placeholder="Share something with the community..."
                        className="min-h-[80px] resize-y"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex gap-2">
                      <Button type="button" variant="outline" size="sm">
                        <Image className="h-4 w-4 mr-1" />
                        Image
                      </Button>
                      <Button type="button" variant="outline" size="sm">
                        <LinkIcon className="h-4 w-4 mr-1" />
                        Link
                      </Button>
                    </div>
                    <div className="flex items-center gap-3">
                      <Select value={postVisibility} onValueChange={setPostVisibility}>
                        <SelectTrigger className="w-[140px] h-9">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">
                            <div className="flex items-center">
                              <Unlock className="h-4 w-4 mr-2 text-green-500" />
                              Public
                            </div>
                          </SelectItem>
                          <SelectItem value="followers">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-blue-500" />
                              Followers Only
                            </div>
                          </SelectItem>
                          <SelectItem value="private">
                            <div className="flex items-center">
                              <Lock className="h-4 w-4 mr-2 text-amber-500" />
                              Private
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Button 
                        type="submit" 
                        disabled={!postText.trim()}
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Feed Filters */}
          <div className="flex justify-between items-center gap-4">
            <Tabs defaultValue="all" className="w-full" onValueChange={setFilterBy}>
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="all">All Posts</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Posts</SelectItem>
                <SelectItem value="following">Following</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Posts Feed */}
          {isLoading ? (
            <div className="space-y-4">
              {Array(3).fill(0).map((_, i) => (
                <Card key={i}>
                  <CardHeader className="p-4 pb-0">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1">
                        <Skeleton className="h-5 w-32 mb-1" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardContent>
                  <CardFooter className="px-4 py-3 flex justify-between border-t border-neutral-100">
                    <div className="flex gap-4">
                      <Skeleton className="h-9 w-16" />
                      <Skeleton className="h-9 w-16" />
                    </div>
                    <Skeleton className="h-9 w-16" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : isError ? (
            <div className="text-center bg-red-50 p-6 rounded-lg border border-red-200">
              <p className="text-red-600 mb-3">Failed to load posts.</p>
              <Button onClick={() => refetch()}>Try Again</Button>
            </div>
          ) : posts.length > 0 ? (
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Link href={`/social/profile/${post.profileId}`}>
                          <Avatar className="h-10 w-10 cursor-pointer">
                            <AvatarImage src={post.profileAvatarUrl || undefined} />
                            <AvatarFallback>
                              {post.profileName?.slice(0, 2) || post.profileUsername?.slice(0, 2) || 'U'}
                            </AvatarFallback>
                          </Avatar>
                        </Link>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <Link href={`/social/profile/${post.profileId}`}>
                              <p className="font-medium hover:text-primary-600 cursor-pointer">{post.profileName || post.profileUsername}</p>
                            </Link>
                            {post.visibility !== 'public' && (
                              <span className="flex items-center" title={`This post is ${post.visibility}`}>
                                {getVisibilityIcon(post.visibility)}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-neutral-500">{formatTimestamp(post.createdAt)}</p>
                        </div>
                      </div>
                      
                      {!post.isFollowing && post.profileId !== -1 && (
                        <Button variant="outline" size="sm" className="h-8">
                          <UserPlus className="h-3.5 w-3.5 mr-1.5" />
                          Follow
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <p className="whitespace-pre-wrap">{post.content}</p>
                  </CardContent>
                  <CardFooter className="px-4 py-3 flex justify-between border-t border-neutral-100">
                    <div className="flex gap-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`flex items-center gap-1.5 ${post.isLiked ? 'text-red-500' : ''}`}
                      >
                        <Heart className={`h-4 w-4 ${post.isLiked ? 'fill-current' : ''}`} />
                        {post.likesCount > 0 && <span>{post.likesCount}</span>}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex items-center gap-1.5"
                      >
                        <MessageSquare className="h-4 w-4" />
                        {post.commentsCount > 0 && <span>{post.commentsCount}</span>}
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-1.5" />
                      Share
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center bg-neutral-50 p-8 rounded-lg">
              <MessageSquare className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
              <h3 className="text-lg font-medium mb-1">No Posts Found</h3>
              <p className="text-neutral-500 max-w-md mx-auto mb-4">
                {filterBy === 'following' 
                  ? "You're not following anyone yet or the people you follow haven't posted anything."
                  : "There are no posts matching your current filter."}
              </p>
              {filterBy !== 'all' && (
                <Button onClick={() => setFilterBy('all')}>
                  View All Posts
                </Button>
              )}
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Security Status */}
          <Card>
            <CardHeader className="pb-2">
              <h3 className="text-lg font-medium flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-500" />
                Security Status
              </h3>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">End-to-End Encryption</span>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Active
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Two-Factor Authentication</span>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Enabled
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Privacy Mode</span>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  Standard
                </Badge>
              </div>
              <Button variant="outline" className="w-full mt-2" size="sm">
                Security Settings
              </Button>
            </CardContent>
          </Card>
          
          {/* Trending Topics */}
          <Card>
            <CardHeader className="pb-2">
              <h3 className="text-lg font-medium flex items-center">
                <Hash className="h-5 w-5 mr-2 text-primary-500" />
                Trending Topics
              </h3>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-primary-600">#RealEstateDAO</span>
                    <span className="text-xs text-neutral-500">23 posts</span>
                  </div>
                  <p className="text-xs text-neutral-500">Trending in Property Management</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-primary-600">#TokenizeEverything</span>
                    <span className="text-xs text-neutral-500">18 posts</span>
                  </div>
                  <p className="text-xs text-neutral-500">Trending in Blockchain</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-primary-600">#CommunityGovernance</span>
                    <span className="text-xs text-neutral-500">15 posts</span>
                  </div>
                  <p className="text-xs text-neutral-500">Trending in DAO</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-primary-600">#PropertyReviews</span>
                    <span className="text-xs text-neutral-500">12 posts</span>
                  </div>
                  <p className="text-xs text-neutral-500">Trending in Reviews</p>
                </div>
              </div>
              <Button variant="ghost" className="w-full mt-2" size="sm">
                View All
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
          
          {/* People to Follow */}
          <Card>
            <CardHeader className="pb-2">
              <h3 className="text-lg font-medium flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-500" />
                Suggested Profiles
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array(3).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">User {i + 1}</p>
                        <p className="text-xs text-neutral-500">Property Manager</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="h-8">
                      <UserPlus className="h-3.5 w-3.5 mr-1.5" />
                      Follow
                    </Button>
                  </div>
                ))}
                <Button variant="ghost" className="w-full mt-2" size="sm">
                  View More
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
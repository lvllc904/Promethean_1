import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useLocation, useParams } from 'wouter';
import { Heart } from 'lucide-react';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Globe, 
  Shield, 
  Check,
  X,
  Edit3,
  UserPlus,
  UserMinus,
  Lock,
  Image as ImageIcon,
  Save
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
import { apiRequest } from "@/lib/queryClient";

export default function SocialProfile() {
  const [params] = useParams();
  const profileId = params?.id ? Number(params.id) : null;
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    displayName: '',
    bio: '',
    privacyLevel: 'standard'
  });
  
  // Query for profile data
  const {
    data: profile,
    isLoading,
    isError,
    refetch
  } = useQuery<{
    id: number;
    username: string;
    displayName: string;
    bio: string;
    avatarUrl: string | null;
    privacyLevel: string;
    createdAt: string;
    followersCount: number;
    followingCount: number;
    postsCount: number;
    isCurrentUser: boolean;
    isFollowedByMe: boolean;
    isMutual: boolean;
  }>({
    queryKey: ['/api/social/profile', profileId],
  });
  
  // Query for posts by this profile
  const {
    data: posts = [],
    isLoading: isPostsLoading
  } = useQuery<Array<{
    id: number;
    content: string;
    createdAt: string;
    likesCount: number;
    commentsCount: number;
  }>>({
    queryKey: ['/api/social/posts/user', profileId || 'me'],
  });
  
  // Query for followers
  const {
    data: followers = [],
    isLoading: isFollowersLoading
  } = useQuery<Array<{
    id: number;
    username: string;
    displayName: string;
    avatarUrl: string | null;
    isFollowedByMe: boolean;
  }>>({
    queryKey: ['/api/social/followers', profileId || 'me'],
  });
  
  // Query for following
  const {
    data: following = [],
    isLoading: isFollowingLoading
  } = useQuery<Array<{
    id: number;
    username: string;
    displayName: string;
    avatarUrl: string | null;
    isFollowedByMe: boolean;
  }>>({
    queryKey: ['/api/social/following', profileId || 'me'],
  });

  // Mutation to follow a profile
  const followMutation = useMutation({
    mutationFn: async (targetProfileId: number) => {
      return apiRequest('POST', `/api/social/follow/${targetProfileId}`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/social/profile', profileId] });
      queryClient.invalidateQueries({ queryKey: ['/api/social/followers', profileId || 'me'] });
      queryClient.invalidateQueries({ queryKey: ['/api/social/following', profileId || 'me'] });
    },
  });
  
  // Mutation to unfollow a profile
  const unfollowMutation = useMutation({
    mutationFn: async (targetProfileId: number) => {
      return apiRequest('DELETE', `/api/social/follow/${targetProfileId}`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/social/profile', profileId] });
      queryClient.invalidateQueries({ queryKey: ['/api/social/followers', profileId || 'me'] });
      queryClient.invalidateQueries({ queryKey: ['/api/social/following', profileId || 'me'] });
    },
  });
  
  // Mutation to update profile
  const updateProfileMutation = useMutation({
    mutationFn: async (profileData: typeof editForm) => {
      return apiRequest('PATCH', `/api/social/profile`, profileData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/social/profile', profileId] });
      setIsEditing(false);
    },
  });
  
  // Format date to readable format
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Handle follow/unfollow
  const handleFollowToggle = (targetId: number, isFollowing: boolean) => {
    if (isFollowing) {
      unfollowMutation.mutate(targetId);
    } else {
      followMutation.mutate(targetId);
    }
  };
  
  // Start editing profile
  const startEditing = () => {
    if (profile) {
      setEditForm({
        displayName: profile.displayName,
        bio: profile.bio,
        privacyLevel: profile.privacyLevel
      });
      setIsEditing(true);
    }
  };
  
  // Cancel editing
  const cancelEditing = () => {
    setIsEditing(false);
  };
  
  // Save profile changes
  const saveProfileChanges = () => {
    updateProfileMutation.mutate(editForm);
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-heading font-bold mb-2">
          {profileId ? 'User Profile' : 'My Social Profile'}
        </h1>
        <p className="text-neutral-500">
          {profileId ? 'View user details and activity' : 'Manage your social presence and privacy settings'}
        </p>
      </div>
      
      {isLoading ? (
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <Skeleton className="h-32 w-32 rounded-full" />
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <Skeleton className="h-7 w-48 mx-auto md:mx-0" />
                  <Skeleton className="h-5 w-32 mx-auto md:mx-0" />
                  <Skeleton className="h-4 w-full max-w-md" />
                  <Skeleton className="h-4 w-full max-w-md" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : isError ? (
        <div className="text-center bg-red-50 p-6 rounded-lg border border-red-200">
          <p className="text-red-600 mb-3">Failed to load profile data.</p>
          <Button onClick={() => refetch()}>Try Again</Button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Profile Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={profile.avatarUrl || undefined} />
                    <AvatarFallback className="text-3xl">
                      {profile.displayName?.charAt(0) || profile.username?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  
                  {profile.isCurrentUser && (
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="absolute bottom-1 right-1 rounded-full bg-white"
                      title="Change profile picture"
                    >
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <div className="flex-1 space-y-4 text-center md:text-left">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <Input
                          value={editForm.displayName}
                          onChange={(e) => setEditForm({...editForm, displayName: e.target.value})}
                          placeholder="Display name"
                          className="text-lg font-medium max-w-sm"
                        />
                        <p className="text-sm text-neutral-500 mt-1">@{profile.username}</p>
                      </div>
                      
                      <Textarea
                        value={editForm.bio}
                        onChange={(e) => setEditForm({...editForm, bio: e.target.value})}
                        placeholder="Write a short bio..."
                        className="h-20 max-w-md"
                      />
                      
                      <div className="max-w-xs">
                        <label className="text-sm font-medium block mb-2">Privacy Level</label>
                        <Select 
                          value={editForm.privacyLevel} 
                          onValueChange={(value) => setEditForm({...editForm, privacyLevel: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select privacy level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">
                              <div className="flex items-center">
                                <Globe className="h-4 w-4 mr-2 text-blue-500" />
                                Standard
                              </div>
                            </SelectItem>
                            <SelectItem value="enhanced">
                              <div className="flex items-center">
                                <Shield className="h-4 w-4 mr-2 text-amber-500" />
                                Enhanced
                              </div>
                            </SelectItem>
                            <SelectItem value="maximum">
                              <div className="flex items-center">
                                <Lock className="h-4 w-4 mr-2 text-green-600" />
                                Maximum
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button onClick={saveProfileChanges} disabled={updateProfileMutation.isPending}>
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </Button>
                        <Button variant="outline" onClick={cancelEditing}>Cancel</Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <h2 className="text-xl font-medium">{profile.displayName}</h2>
                        <p className="text-sm text-neutral-500">@{profile.username}</p>
                      </div>
                      
                      {profile.bio && <p className="max-w-md">{profile.bio}</p>}
                      
                      <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-neutral-500 mr-2" />
                          <span className="text-sm text-neutral-600">Joined {formatDate(profile.createdAt)}</span>
                        </div>
                        
                        <div className="flex items-center">
                          {profile.privacyLevel === 'standard' && <Globe className="h-4 w-4 text-blue-500 mr-2" />}
                          {profile.privacyLevel === 'enhanced' && <Shield className="h-4 w-4 text-amber-500 mr-2" />}
                          {profile.privacyLevel === 'maximum' && <Lock className="h-4 w-4 text-green-600 mr-2" />}
                          <span className="text-sm">
                            <span className="font-medium capitalize">{profile.privacyLevel}</span> privacy
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
                        <Link href={`/social/followers/${profile.id}`}>
                          <div className="flex items-center gap-1.5 hover:text-primary-600 cursor-pointer">
                            <Users className="h-4 w-4" />
                            <span className="font-medium">{profile.followersCount}</span>
                            <span>Followers</span>
                          </div>
                        </Link>
                        
                        <Link href={`/social/following/${profile.id}`}>
                          <div className="flex items-center gap-1.5 hover:text-primary-600 cursor-pointer">
                            <Users className="h-4 w-4" />
                            <span className="font-medium">{profile.followingCount}</span>
                            <span>Following</span>
                          </div>
                        </Link>
                        
                        <div className="flex items-center gap-1.5">
                          <MessageSquare className="h-4 w-4" />
                          <span className="font-medium">{profile.postsCount}</span>
                          <span>Posts</span>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        {profile.isCurrentUser ? (
                          <Button variant="outline" onClick={startEditing}>
                            <Edit3 className="h-4 w-4 mr-2" />
                            Edit Profile
                          </Button>
                        ) : (
                          <div className="flex gap-2">
                            <Button
                              variant={profile.isFollowedByMe ? "outline" : "default"}
                              onClick={() => handleFollowToggle(profile.id, profile.isFollowedByMe)}
                              disabled={followMutation.isPending || unfollowMutation.isPending}
                            >
                              {profile.isFollowedByMe ? (
                                <>
                                  <UserMinus className="h-4 w-4 mr-2" />
                                  Unfollow
                                </>
                              ) : (
                                <>
                                  <UserPlus className="h-4 w-4 mr-2" />
                                  Follow
                                </>
                              )}
                            </Button>
                            
                            <Button variant="outline">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Message
                            </Button>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Profile Content */}
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="followers">Followers</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
            </TabsList>
            
            <TabsContent value="posts" className="mt-6">
              {isPostsLoading ? (
                <div className="grid gap-4">
                  {Array(3).fill(0).map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <Skeleton className="h-5 w-32 mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center bg-neutral-50 p-8 rounded-lg">
                  <MessageSquare className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
                  <h3 className="text-lg font-medium mb-1">No Posts Yet</h3>
                  <p className="text-neutral-500 max-w-md mx-auto mb-4">
                    {profile.isCurrentUser 
                      ? "You haven't posted anything yet. Share something with the community!" 
                      : "This user hasn't posted anything yet."}
                  </p>
                  {profile.isCurrentUser && (
                    <Button asChild>
                      <Link href="/social/feed">Create Post</Link>
                    </Button>
                  )}
                </div>
              ) : (
                <div className="grid gap-4">
                  {posts.map(post => (
                    <Card key={post.id}>
                      <CardContent className="p-4">
                        <div className="mb-2 flex justify-between items-center">
                          <span className="text-sm text-neutral-500">{formatDate(post.createdAt)}</span>
                        </div>
                        <p className="mb-3">{post.content}</p>
                        <div className="flex gap-4 text-sm text-neutral-600">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likesCount}</span>
                            <span>likes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.commentsCount}</span>
                            <span>comments</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="followers" className="mt-6">
              {isFollowersLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array(6).fill(0).map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Skeleton className="h-12 w-12 rounded-full" />
                          <div className="flex-1">
                            <Skeleton className="h-5 w-24 mb-1" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : followers.length === 0 ? (
                <div className="text-center bg-neutral-50 p-8 rounded-lg">
                  <Users className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
                  <h3 className="text-lg font-medium mb-1">No Followers Yet</h3>
                  <p className="text-neutral-500 max-w-md mx-auto">
                    {profile.isCurrentUser 
                      ? "You don't have any followers yet. As you interact with the community, users may follow you." 
                      : "This user doesn't have any followers yet."}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {followers.map(follower => (
                    <Card key={follower.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Link href={`/social/profile/${follower.id}`}>
                            <Avatar className="h-12 w-12 cursor-pointer">
                              <AvatarImage src={follower.avatarUrl || undefined} />
                              <AvatarFallback>
                                {follower.displayName?.charAt(0) || follower.username?.charAt(0) || 'U'}
                              </AvatarFallback>
                            </Avatar>
                          </Link>
                          <div className="flex-1">
                            <Link href={`/social/profile/${follower.id}`}>
                              <p className="font-medium hover:text-primary-600 cursor-pointer">
                                {follower.displayName || follower.username}
                              </p>
                            </Link>
                            <p className="text-sm text-neutral-500">@{follower.username}</p>
                          </div>
                          
                          {!profile.isCurrentUser && follower.id !== -1 && (
                            <Button 
                              variant={follower.isFollowedByMe ? "outline" : "default"}
                              size="sm"
                              onClick={() => handleFollowToggle(follower.id, follower.isFollowedByMe)}
                            >
                              {follower.isFollowedByMe ? "Unfollow" : "Follow"}
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="following" className="mt-6">
              {isFollowingLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array(6).fill(0).map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Skeleton className="h-12 w-12 rounded-full" />
                          <div className="flex-1">
                            <Skeleton className="h-5 w-24 mb-1" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : following.length === 0 ? (
                <div className="text-center bg-neutral-50 p-8 rounded-lg">
                  <Users className="h-12 w-12 mx-auto text-neutral-400 mb-3" />
                  <h3 className="text-lg font-medium mb-1">Not Following Anyone</h3>
                  <p className="text-neutral-500 max-w-md mx-auto mb-4">
                    {profile.isCurrentUser 
                      ? "You aren't following anyone yet. Find and follow other users to see their content in your feed." 
                      : "This user isn't following anyone yet."}
                  </p>
                  {profile.isCurrentUser && (
                    <Button asChild>
                      <Link href="/social/feed">Explore Profiles</Link>
                    </Button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {following.map(follow => (
                    <Card key={follow.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Link href={`/social/profile/${follow.id}`}>
                            <Avatar className="h-12 w-12 cursor-pointer">
                              <AvatarImage src={follow.avatarUrl || undefined} />
                              <AvatarFallback>
                                {follow.displayName?.charAt(0) || follow.username?.charAt(0) || 'U'}
                              </AvatarFallback>
                            </Avatar>
                          </Link>
                          <div className="flex-1">
                            <Link href={`/social/profile/${follow.id}`}>
                              <p className="font-medium hover:text-primary-600 cursor-pointer">
                                {follow.displayName || follow.username}
                              </p>
                            </Link>
                            <p className="text-sm text-neutral-500">@{follow.username}</p>
                          </div>
                          
                          {profile.isCurrentUser && (
                            <Button 
                              variant="outline"
                              size="sm"
                              onClick={() => handleFollowToggle(follow.id, true)}
                            >
                              Unfollow
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
}
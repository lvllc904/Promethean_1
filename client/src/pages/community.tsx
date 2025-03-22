import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  MessageCircle, 
  Users, 
  Calendar, 
  BookOpen, 
  Send, 
  Sparkles,
  Search,
  UserPlus,
  FileText,
  Bookmark,
  BarChart2,
  Star 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useToast } from '@/hooks/use-toast';

interface CommunityMember {
  id: number;
  name: string;
  avatar?: string;
  role: string;
  badges: string[];
  memberSince: string;
  reputation: number;
}

interface ForumPost {
  id: number;
  title: string;
  content: string;
  authorId: number;
  authorName: string;
  authorAvatar?: string;
  postedAt: string;
  likes: number;
  replies: number;
  tags: string[];
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  virtual: boolean;
  organizer: string;
  attendees: number;
}

interface Resource {
  id: number;
  title: string;
  type: 'guide' | 'video' | 'webinar' | 'case-study';
  description: string;
  thumbnail?: string;
  author: string;
  publishedAt: string;
  likes: number;
  downloads: number;
}

export default function Community() {
  const { isConnected, user } = useWallet();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('forum');
  const [searchQuery, setSearchQuery] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  
  // Fetch forum posts
  const { data: forumPosts = [], isLoading: isLoadingPosts } = useQuery<ForumPost[]>({
    queryKey: ['/api/community/posts', { search: searchQuery }],
    enabled: activeTab === 'forum',
  });
  
  // Fetch events
  const { data: events = [], isLoading: isLoadingEvents } = useQuery<Event[]>({
    queryKey: ['/api/community/events'],
    enabled: activeTab === 'events',
  });
  
  // Fetch resources
  const { data: resources = [], isLoading: isLoadingResources } = useQuery<Resource[]>({
    queryKey: ['/api/community/resources'],
    enabled: activeTab === 'resources',
  });
  
  // Fetch members
  const { data: members = [], isLoading: isLoadingMembers } = useQuery<CommunityMember[]>({
    queryKey: ['/api/community/members', { search: searchQuery }],
    enabled: activeTab === 'members',
  });
  
  const handleCreatePost = () => {
    if (!isConnected) {
      toast({
        title: "Authentication Required",
        description: "Please connect your wallet to post in the community.",
        variant: "destructive",
      });
      return;
    }
    
    if (!newPostContent.trim()) {
      toast({
        title: "Empty Post",
        description: "Please enter some content for your post.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Post Created",
      description: "Your post has been published to the community forum.",
    });
    
    setNewPostContent('');
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };
  
  // Function to get tag color based on tag name
  const getTagColor = (tag: string) => {
    const tagColors: Record<string, string> = {
      'discussion': 'bg-blue-100 text-blue-800',
      'question': 'bg-amber-100 text-amber-800',
      'guide': 'bg-green-100 text-green-800',
      'announcement': 'bg-purple-100 text-purple-800',
      'beginner': 'bg-pink-100 text-pink-800',
      'advanced': 'bg-indigo-100 text-indigo-800',
      'smart-contracts': 'bg-orange-100 text-orange-800',
      'investments': 'bg-emerald-100 text-emerald-800',
      'legal': 'bg-rose-100 text-rose-800',
      'rental': 'bg-cyan-100 text-cyan-800',
      'commercial': 'bg-violet-100 text-violet-800',
      'residential': 'bg-lime-100 text-lime-800',
    };
    
    return tagColors[tag.toLowerCase()] || 'bg-neutral-100 text-neutral-800';
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold mb-2">Community</h1>
          <p className="text-neutral-500">
            Connect with other DAC members, share knowledge, and participate in events.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <Tabs defaultValue="forum" value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <TabsList>
                <TabsTrigger value="forum" className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Forum
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Events
                </TabsTrigger>
                <TabsTrigger value="resources" className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Resources
                </TabsTrigger>
                <TabsTrigger value="members" className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Members
                </TabsTrigger>
              </TabsList>
              
              {(activeTab === 'forum' || activeTab === 'members') && (
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                  <Input 
                    placeholder={`Search ${activeTab === 'forum' ? 'posts' : 'members'}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
              )}
            </div>
            
            <TabsContent value="forum">
              {isConnected && (
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user?.avatarUrl} alt={user?.name || ''} />
                        <AvatarFallback className="bg-primary-100 text-primary-700">
                          {user?.name?.charAt(0) || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Textarea 
                          placeholder="Share something with the community..." 
                          className="mb-3"
                          value={newPostContent}
                          onChange={(e) => setNewPostContent(e.target.value)}
                        />
                        <div className="flex justify-end">
                          <Button onClick={handleCreatePost}>
                            <Send className="h-4 w-4 mr-2" />
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              <div className="space-y-4">
                {isLoadingPosts ? (
                  <p>Loading forum posts...</p>
                ) : forumPosts.length > 0 ? (
                  forumPosts.map(post => (
                    <Card key={post.id} className="hover:bg-neutral-50 transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={post.authorAvatar} alt={post.authorName} />
                            <AvatarFallback className="bg-primary-100 text-primary-700">
                              {post.authorName.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                              <h3 className="font-medium">{post.title}</h3>
                              <span className="text-xs text-neutral-500">{formatDate(post.postedAt)}</span>
                            </div>
                            <p className="text-sm text-neutral-700 mb-3">{post.content}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.tags.map((tag, i) => (
                                <Badge key={i} className={getTagColor(tag)}>
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-sm text-neutral-500">
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <Star className="h-4 w-4 mr-1" />
                                  {post.likes}
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <MessageCircle className="h-4 w-4 mr-1" />
                                  {post.replies}
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 px-2">
                                  <Bookmark className="h-4 w-4 mr-1" />
                                  Save
                                </Button>
                              </div>
                              <div>
                                <Button variant="link" size="sm" className="h-8 p-0">
                                  View Discussion →
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <MessageCircle className="h-12 w-12 text-neutral-400 mx-auto mb-3" />
                      <h3 className="text-lg font-medium mb-1">No Forum Posts Yet</h3>
                      <p className="text-neutral-500 mb-4">
                        Be the first to start a discussion in the DAC Marketplace community.
                      </p>
                      {isConnected ? (
                        <Button onClick={() => document.querySelector('textarea')?.focus()}>
                          Create a Post
                        </Button>
                      ) : (
                        <Button onClick={() => document.dispatchEvent(new CustomEvent('openWalletModal'))}>
                          Connect Wallet to Post
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="events">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-heading font-semibold">Upcoming Events</h3>
                <Button>
                  <Calendar className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </div>
              
              {isLoadingEvents ? (
                <p>Loading events...</p>
              ) : events.length > 0 ? (
                <div className="space-y-4">
                  {events.map(event => (
                    <Card key={event.id} className="hover:bg-neutral-50 transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-shrink-0 w-full md:w-48 bg-neutral-100 rounded-md flex flex-col items-center justify-center p-4">
                            <h4 className="font-heading font-semibold text-lg">{event.date.split(' ')[0]}</h4>
                            <p className="text-sm text-neutral-500">{event.date.split(' ')[1]}</p>
                            <p className="text-sm font-medium mt-2">{event.time}</p>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                              <h3 className="font-medium text-lg">{event.title}</h3>
                              <Badge className={event.virtual ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}>
                                {event.virtual ? 'Virtual' : 'In Person'}
                              </Badge>
                            </div>
                            
                            <p className="text-sm text-neutral-700 mb-3">{event.description}</p>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-neutral-500 mb-4">
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                Hosted by {event.organizer}
                              </div>
                              <div className="flex items-center">
                                <UserPlus className="h-4 w-4 mr-1" />
                                {event.attendees} Attending
                              </div>
                              {!event.virtual && (
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-1" />
                                  {event.location}
                                </div>
                              )}
                            </div>
                            
                            <div className="flex justify-end">
                              <Button>
                                Register
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Calendar className="h-12 w-12 text-neutral-400 mx-auto mb-3" />
                    <h3 className="text-lg font-medium mb-1">No Upcoming Events</h3>
                    <p className="text-neutral-500 mb-4">
                      There are no events scheduled at the moment. Check back later or create your own event.
                    </p>
                    <Button>
                      Create an Event
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="resources">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-heading font-semibold">Learning Resources</h3>
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Submit Resource
                </Button>
              </div>
              
              {isLoadingResources ? (
                <p>Loading resources...</p>
              ) : resources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resources.map(resource => (
                    <Card key={resource.id} className="hover:bg-neutral-50 transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex flex-col gap-3">
                          <div className="flex justify-between">
                            <Badge className={
                              resource.type === 'guide' ? 'bg-green-100 text-green-800' :
                              resource.type === 'video' ? 'bg-red-100 text-red-800' :
                              resource.type === 'webinar' ? 'bg-blue-100 text-blue-800' :
                              'bg-purple-100 text-purple-800'
                            }>
                              {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                            </Badge>
                            <span className="text-xs text-neutral-500">{formatDate(resource.publishedAt)}</span>
                          </div>
                          
                          <h3 className="font-medium">{resource.title}</h3>
                          <p className="text-sm text-neutral-700">{resource.description}</p>
                          
                          <div className="flex items-center text-sm text-neutral-500">
                            <span>By {resource.author}</span>
                            <Separator orientation="vertical" className="mx-2 h-4" />
                            <div className="flex items-center">
                              <BarChart2 className="h-4 w-4 mr-1" />
                              {resource.downloads} downloads
                            </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <Button variant="outline">
                              {resource.type === 'guide' || resource.type === 'case-study' ? 'Download' : 'Watch'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <BookOpen className="h-12 w-12 text-neutral-400 mx-auto mb-3" />
                    <h3 className="text-lg font-medium mb-1">No Resources Available</h3>
                    <p className="text-neutral-500 mb-4">
                      There are no learning resources available yet. Be the first to contribute!
                    </p>
                    <Button>
                      Submit a Resource
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="members">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-heading font-semibold">Community Members</h3>
              </div>
              
              {isLoadingMembers ? (
                <p>Loading members...</p>
              ) : members.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {members.map(member => (
                    <Card key={member.id} className="hover:bg-neutral-50 transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-14 w-14">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback className="bg-primary-100 text-primary-700">
                              {member.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div>
                            <h3 className="font-medium">{member.name}</h3>
                            <p className="text-sm text-neutral-500">{member.role}</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {member.badges.map((badge, i) => (
                                <Badge key={i} variant="outline" className="text-xs py-0 h-5">
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-neutral-200 flex justify-between items-center text-sm">
                          <span className="text-neutral-500">Member since {member.memberSince}</span>
                          <div className="flex items-center text-amber-600">
                            <Star className="h-4 w-4 mr-1 fill-amber-500" />
                            {member.reputation.toFixed(1)}
                          </div>
                        </div>
                        
                        <div className="mt-3 flex">
                          <Button variant="outline" className="w-full">
                            View Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Users className="h-12 w-12 text-neutral-400 mx-auto mb-3" />
                    <h3 className="text-lg font-medium mb-1">No Members Found</h3>
                    <p className="text-neutral-500 mb-4">
                      No community members match your search criteria. Try a different search term.
                    </p>
                    <Button onClick={() => setSearchQuery('')}>
                      Clear Search
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="md:w-1/4 space-y-6">
          {!isConnected ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <Sparkles className="h-12 w-12 mx-auto text-primary-500 mb-2" />
                  <h3 className="font-medium text-lg mb-1">Join Our Community</h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Connect your wallet to participate in discussions, attend events, and more.
                  </p>
                  <Button onClick={() => document.dispatchEvent(new CustomEvent('openWalletModal'))}>
                    Connect Wallet
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Your Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Forum Posts</span>
                    <span className="font-medium">12</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Events Attended</span>
                    <span className="font-medium">5</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Reputation Score</span>
                    <div className="flex items-center text-amber-600">
                      <Star className="h-4 w-4 mr-1 fill-amber-500" />
                      4.8
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Trending Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-100 text-blue-800">Trending</Badge>
                  <span className="text-sm font-medium">Smart Contract Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800">Hot</Badge>
                  <span className="text-sm font-medium">AI Valuation Tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-100 text-purple-800">New</Badge>
                  <span className="text-sm font-medium">Cross-Border Transactions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-amber-100 text-amber-800">Active</Badge>
                  <span className="text-sm font-medium">Regulatory Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-red-100 text-red-800">Popular</Badge>
                  <span className="text-sm font-medium">Creative Financing</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                  Be respectful and constructive
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                  No spam or self-promotion
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                  Stay on topic in discussions
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                  Protect personal information
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                  Report violations to moderators
                </li>
              </ul>
              <Button variant="link" className="p-0 h-auto mt-2 text-sm">
                View Full Guidelines
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium text-sm">Webinar: AI in Real Estate</h4>
                    <Badge variant="outline" className="text-xs">Jun 15</Badge>
                  </div>
                  <p className="text-xs text-neutral-500">Learn how AI is transforming property valuation and transactions.</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium text-sm">Monthly DAO Meetup</h4>
                    <Badge variant="outline" className="text-xs">Jun 20</Badge>
                  </div>
                  <p className="text-xs text-neutral-500">Join our virtual governance discussion and networking session.</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium text-sm">Blockchain Workshop</h4>
                    <Badge variant="outline" className="text-xs">Jun 28</Badge>
                  </div>
                  <p className="text-xs text-neutral-500">Hands-on tutorial for creating and deploying smart contracts.</p>
                </div>
              </div>
              
              <Button variant="link" className="p-0 h-auto mt-2 text-sm">
                View All Events
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

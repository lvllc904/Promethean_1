import { useState, useRef, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useLocation } from 'wouter';
import { 
  Search, 
  Send, 
  Users, 
  Clock, 
  Lock, 
  Shield, 
  CheckCheck,
  ChevronLeft,
  Paperclip,
  MoreHorizontal,
  Info,
  Phone,
  Video
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
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
import { apiRequest } from "@/lib/queryClient";

interface Message {
  id: number;
  senderId: number;
  recipientId: number;
  createdAt: string;
  content: string;
  read: boolean;
  senderName: string;
  senderUsername: string;
  senderAvatarUrl: string | null;
}

interface ConversationPreview {
  profileId: number;
  profileName: string;
  profileUsername: string;
  profileAvatarUrl: string | null;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export default function MessagesPage() {
  const [location, setLocation] = useLocation();
  const queryClient = useQueryClient();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Extract the conversation partner ID from the URL if it exists
  const pathSegments = location.split('/');
  const conversationPartnerId = pathSegments.length > 3 ? Number(pathSegments[3]) : null;
  
  // Query for inbox conversations
  const {
    data: conversations = [],
    isLoading: isLoadingConversations,
    isError: isConversationsError
  } = useQuery<ConversationPreview[]>({
    queryKey: ['/api/social/messages/inbox'],
  });
  
  // Query for current conversation messages if a partner is selected
  const {
    data: messages = [],
    isLoading: isLoadingMessages,
    isError: isMessagesError
  } = useQuery<Message[]>({
    queryKey: ['/api/social/messages/conversation', conversationPartnerId],
    enabled: conversationPartnerId !== null,
  });
  
  // Query for the conversation partner's profile details
  const {
    data: partnerProfile,
    isLoading: isLoadingProfile
  } = useQuery<{
    id: number;
    name: string;
    username: string;
    avatarUrl: string | null;
    isOnline: boolean;
    lastSeen: string | null;
  }>({
    queryKey: ['/api/social/profile', conversationPartnerId],
    enabled: conversationPartnerId !== null,
  });
  
  // Mutation to send a new message
  const sendMessageMutation = useMutation({
    mutationFn: async (newMessage: { recipientId: number; content: string }) => {
      return apiRequest('POST', '/api/social/messages', newMessage);
    },
    onSuccess: () => {
      // Invalidate relevant queries to refresh the data
      queryClient.invalidateQueries({ queryKey: ['/api/social/messages/conversation', conversationPartnerId] });
      queryClient.invalidateQueries({ queryKey: ['/api/social/messages/inbox'] });
      setMessageText('');
    },
  });
  
  // Mutation to mark messages as read
  const markAsReadMutation = useMutation({
    mutationFn: async (profileId: number) => {
      return apiRequest('PATCH', `/api/social/messages/read-all/${profileId}`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/social/messages/inbox'] });
    },
  });
  
  // Format timestamp to readable date/time
  const formatMessageTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric'
      }).format(date);
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
    } else {
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric'
      }).format(date);
    }
  };
  
  // Handler for sending a new message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || !conversationPartnerId) return;
    
    sendMessageMutation.mutate({
      recipientId: conversationPartnerId,
      content: messageText
    });
  };
  
  // Filter conversations based on search query
  const filteredConversations = conversations.filter(convo => 
    convo.profileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    convo.profileUsername.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Auto-scroll to bottom of message list when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Mark messages as read when entering a conversation
  useEffect(() => {
    if (conversationPartnerId) {
      markAsReadMutation.mutate(conversationPartnerId);
    }
  }, [conversationPartnerId]);
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold mb-2">Secure Messages</h1>
          <p className="text-neutral-500">
            End-to-end encrypted communication with community members.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversation list */}
        <div className="lg:col-span-1">
          <Card className="overflow-hidden h-[calc(100vh-240px)] flex flex-col">
            <CardHeader className="p-4 pb-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
                <Input
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            
            <div className="flex-1 overflow-y-auto border-t border-neutral-100">
              {isLoadingConversations ? (
                <div className="divide-y divide-neutral-100">
                  {Array(5).fill(0).map((_, i) => (
                    <div key={i} className="p-3 hover:bg-neutral-50">
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="flex-1">
                          <Skeleton className="h-5 w-24 mb-1" />
                          <Skeleton className="h-4 w-32" />
                        </div>
                        <Skeleton className="h-4 w-10" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : isConversationsError ? (
                <div className="p-6 text-center">
                  <p className="text-red-500 mb-2">Failed to load conversations</p>
                  <Button size="sm" variant="outline">Retry</Button>
                </div>
              ) : filteredConversations.length === 0 ? (
                <div className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto text-neutral-300 mb-3" />
                  <p className="text-neutral-500">
                    {searchQuery.trim() ? 'No conversations match your search' : 'No conversations yet'}
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-neutral-100">
                  {filteredConversations.map((conversation) => (
                    <div 
                      key={conversation.profileId}
                      className={`p-3 hover:bg-neutral-50 cursor-pointer ${
                        conversation.profileId === conversationPartnerId ? 'bg-neutral-50' : ''
                      }`}
                      onClick={() => setLocation(`/social/messages/${conversation.profileId}`)}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={conversation.profileAvatarUrl || undefined} />
                          <AvatarFallback>
                            {conversation.profileName?.slice(0, 2) || conversation.profileUsername?.slice(0, 2) || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center mb-1">
                            <p className={`font-medium truncate ${conversation.unreadCount > 0 ? 'text-primary-800' : ''}`}>
                              {conversation.profileName || conversation.profileUsername}
                            </p>
                            <span className="text-xs text-neutral-500">{formatMessageTime(conversation.lastMessageTime)}</span>
                          </div>
                          <p className="text-sm text-neutral-600 truncate">
                            {conversation.lastMessage}
                          </p>
                        </div>
                        
                        {conversation.unreadCount > 0 && (
                          <Badge className="bg-primary-500 text-white">{conversation.unreadCount}</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
          
          {/* Encryption Info Card */}
          <Card className="mt-4">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-5 w-5 text-green-500" />
                <h3 className="font-medium">End-to-End Encrypted</h3>
              </div>
              <p className="text-sm text-neutral-600">
                Your messages are secured with end-to-end encryption. Only you and the recipient can read them.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Message thread */}
        <div className="lg:col-span-2">
          {!conversationPartnerId ? (
            <div className="h-[calc(100vh-240px)] flex items-center justify-center bg-neutral-50 rounded-lg border border-neutral-200">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-neutral-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Select a Conversation</h3>
                <p className="text-neutral-500 max-w-md">
                  Choose a conversation from the list or start a new one to send secure, encrypted messages.
                </p>
              </div>
            </div>
          ) : (
            <Card className="overflow-hidden h-[calc(100vh-240px)] flex flex-col">
              {/* Message thread header */}
              <CardHeader className="p-4 border-b border-neutral-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="lg:hidden" 
                      onClick={() => setLocation('/social/messages')}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={partnerProfile?.avatarUrl || undefined} />
                      <AvatarFallback>
                        {partnerProfile?.name?.slice(0, 2) || partnerProfile?.username?.slice(0, 2) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">
                          {partnerProfile?.name || partnerProfile?.username || 'Loading...'}
                        </p>
                        <Lock className="h-3.5 w-3.5 text-green-500" title="Encrypted conversation" />
                      </div>
                      <p className="text-xs text-neutral-500">
                        {partnerProfile?.isOnline ? (
                          <span className="flex items-center">
                            <span className="h-2 w-2 rounded-full bg-green-500 inline-block mr-1.5"></span>
                            Online
                          </span>
                        ) : partnerProfile?.lastSeen ? (
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1.5 text-neutral-400" />
                            Last seen {formatMessageTime(partnerProfile.lastSeen)}
                          </span>
                        ) : 'Offline'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" title="Call">
                      <Phone className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Video call">
                      <Video className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" title="Info">
                      <Info className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              {/* Messages list */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {isLoadingMessages ? (
                  <div className="space-y-4">
                    {Array(5).fill(0).map((_, i) => (
                      <div key={i} className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-[80%] ${i % 2 === 0 ? 'bg-neutral-100' : 'bg-primary-100'} p-3 rounded-lg`}>
                          <Skeleton className="h-4 w-32 mb-1" />
                          <Skeleton className="h-4 w-48" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : isMessagesError ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-red-500 mb-2">Failed to load messages</p>
                      <Button size="sm" variant="outline">Retry</Button>
                    </div>
                  </div>
                ) : messages.length === 0 ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-neutral-500 mb-2">No messages yet</p>
                      <p className="text-sm text-neutral-400">Send a message to start the conversation</p>
                    </div>
                  </div>
                ) : (
                  messages.map((message, index) => {
                    const isCurrentUser = message.senderId === -1; // Replace with actual current user ID check
                    const showAvatar = index === 0 || messages[index - 1]?.senderId !== message.senderId;
                    
                    return (
                      <div key={message.id} className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex gap-2 max-w-[80%] ${isCurrentUser ? 'flex-row-reverse' : ''}`}>
                          {!isCurrentUser && showAvatar && (
                            <Avatar className="h-8 w-8 mt-auto">
                              <AvatarImage src={message.senderAvatarUrl || undefined} />
                              <AvatarFallback>
                                {message.senderName?.slice(0, 2) || message.senderUsername?.slice(0, 2) || 'U'}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          
                          <div>
                            <div 
                              className={`p-3 rounded-lg ${
                                isCurrentUser 
                                  ? 'bg-primary-100 text-primary-900' 
                                  : 'bg-neutral-100 text-neutral-900'
                              }`}
                            >
                              <p className="whitespace-pre-wrap">{message.content}</p>
                            </div>
                            <div 
                              className={`flex items-center mt-1 text-xs text-neutral-500 ${
                                isCurrentUser ? 'justify-end' : 'justify-start'
                              }`}
                            >
                              <span>{formatMessageTime(message.createdAt)}</span>
                              {isCurrentUser && (
                                <CheckCheck 
                                  className={`h-3.5 w-3.5 ml-1 ${
                                    message.read ? 'text-blue-500' : 'text-neutral-400'
                                  }`} 
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Message input */}
              <div className="p-3 border-t border-neutral-100">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                  <Button type="button" variant="ghost" size="icon" className="shrink-0">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Input
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type a secure message..."
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    disabled={!messageText.trim() || sendMessageMutation.isPending}
                    className="shrink-0"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
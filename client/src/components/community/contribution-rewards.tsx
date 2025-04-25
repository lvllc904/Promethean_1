import React, { useState } from 'react';
import { useWallet } from '@/components/wallet/wallet-provider';
import { 
  Award, 
  Calendar, 
  Check, 
  Coins, 
  Gift, 
  Globe, 
  HandCoins, 
  Loader2, 
  MessageSquare, 
  Puzzle, 
  Repeat, 
  Sparkles, 
  Star, 
  ThumbsUp, 
  Trophy, 
  Users, 
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Types for contribution rewards
type ContributionType = 
  | 'content' 
  | 'technical' 
  | 'community' 
  | 'governance';

type RewardItem = {
  id: string;
  title: string;
  description: string;
  rewardAmount: number;
  rewardType: 'token' | 'badge' | 'privileges';
  completedPercentage?: number; // For in-progress rewards
  type: ContributionType;
  icon: React.ReactNode;
  timeEstimate?: string;
  isActive: boolean;
  isCompleted?: boolean;
  tags: string[];
};

type UserStats = {
  totalContributions: number;
  tokenRewards: number;
  badgesEarned: number;
  contributionStreak: number;
  reputationScore: number;
  level: number;
  // Distribution of contribution types
  contributionTypes: {
    content: number;
    technical: number;
    community: number;
    governance: number;
  };
};

interface ContributionRewardsProps {
  className?: string;
}

export function ContributionRewards({ className }: ContributionRewardsProps) {
  const { isConnected, address } = useWallet();
  const { toast } = useToast();
  
  const [activeTab, setActiveTab] = useState<string>('available');
  const [isClaimingReward, setIsClaimingReward] = useState<string | null>(null);
  
  // Sample user stats - would be fetched from the API in a real application
  const userStats: UserStats = {
    totalContributions: 37,
    tokenRewards: 425,
    badgesEarned: 8,
    contributionStreak: 12,
    reputationScore: 76,
    level: 3,
    contributionTypes: {
      content: 40,
      technical: 25,
      community: 20,
      governance: 15,
    },
  };
  
  // Sample available rewards
  const availableRewards: RewardItem[] = [
    {
      id: 'daily-check-in',
      title: 'Daily Community Check-in',
      description: 'Log in and participate in the community daily to earn tokens.',
      rewardAmount: 5,
      rewardType: 'token',
      type: 'community',
      icon: <Calendar className="h-12 w-12 text-primary-500" />,
      timeEstimate: '5 min',
      isActive: true,
      tags: ['daily', 'beginner-friendly'],
    },
    {
      id: 'forum-post',
      title: 'Create a Quality Forum Post',
      description: 'Create a new discussion post in the community forum about property management or real estate investing.',
      rewardAmount: 15,
      rewardType: 'token',
      type: 'content',
      icon: <MessageSquare className="h-12 w-12 text-primary-500" />,
      timeEstimate: '20 min',
      isActive: true,
      tags: ['content', 'discussion'],
    },
    {
      id: 'vote-proposals',
      title: 'Vote on Governance Proposals',
      description: 'Cast your vote on at least 3 active DAO governance proposals.',
      rewardAmount: 20,
      rewardType: 'token',
      type: 'governance',
      icon: <Users className="h-12 w-12 text-primary-500" />,
      completedPercentage: 33, // 1/3 complete
      timeEstimate: '15 min',
      isActive: true,
      tags: ['governance', 'decision-making'],
    },
    {
      id: 'technical-contribution',
      title: 'Report a Platform Bug',
      description: 'Find and submit a valid bug report through the platform's feedback system.',
      rewardAmount: 50,
      rewardType: 'token',
      type: 'technical',
      icon: <Puzzle className="h-12 w-12 text-primary-500" />,
      timeEstimate: 'Varies',
      isActive: true,
      tags: ['technical', 'quality-assurance'],
    },
    {
      id: 'invite-friends',
      title: 'Invite New Members',
      description: 'Invite friends to join the platform using your referral link.',
      rewardAmount: 25,
      rewardType: 'token',
      type: 'community',
      icon: <Users className="h-12 w-12 text-primary-500" />,
      timeEstimate: '10 min',
      isActive: true,
      tags: ['growth', 'networking'],
    },
    {
      id: 'community-badge',
      title: 'Community Guardian',
      description: 'Earn this badge by helping moderate community discussions and maintaining a positive environment.',
      rewardAmount: 1,
      rewardType: 'badge',
      type: 'community',
      icon: <Award className="h-12 w-12 text-primary-500" />,
      timeEstimate: 'Ongoing',
      isActive: true,
      tags: ['badge', 'moderation'],
    },
  ];
  
  // Sample completed rewards
  const completedRewards: RewardItem[] = [
    {
      id: 'welcome-bonus',
      title: 'Welcome Bonus',
      description: 'Complete your profile setup and get familiar with the platform.',
      rewardAmount: 50,
      rewardType: 'token',
      type: 'community',
      icon: <Gift className="h-12 w-12 text-green-500" />,
      isActive: false,
      isCompleted: true,
      tags: ['onboarding', 'beginner-friendly'],
    },
    {
      id: 'first-comment',
      title: 'First Comment',
      description: 'Participate in the community by writing your first comment.',
      rewardAmount: 10,
      rewardType: 'token',
      type: 'content',
      icon: <MessageSquare className="h-12 w-12 text-green-500" />,
      isActive: false,
      isCompleted: true,
      tags: ['engagement', 'beginner-friendly'],
    },
    {
      id: 'voter-badge',
      title: 'Active Voter',
      description: 'Participated in at least 5 governance votes.',
      rewardAmount: 1,
      rewardType: 'badge',
      type: 'governance',
      icon: <Award className="h-12 w-12 text-green-500" />,
      isActive: false,
      isCompleted: true,
      tags: ['badge', 'governance'],
    },
  ];
  
  // Function to claim a reward
  const claimReward = async (rewardId: string) => {
    if (!isConnected) {
      toast({
        title: 'Wallet not connected',
        description: 'Please connect your wallet to claim rewards.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsClaimingReward(rewardId);
    
    try {
      // Simulate API call to claim reward
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: 'Reward Claimed!',
        description: 'Your reward has been transferred to your account.',
        variant: 'default',
      });
      
      // In a real application, we would update the state and reload the reward list
    } catch (error) {
      console.error('Error claiming reward:', error);
      toast({
        title: 'Claim Failed',
        description: 'There was an error claiming your reward. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsClaimingReward(null);
    }
  };
  
  // Function to get level progress between current and next level
  const getLevelProgress = () => {
    // This would be calculated based on actual platform level requirements
    return 65; // 65% to next level
  };
  
  if (!isConnected) {
    return (
      <Card className={cn("w-full", className)}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="h-5 w-5 mr-2 text-primary" />
            Community Contribution Rewards
          </CardTitle>
          <CardDescription>
            Connect your wallet to view and claim rewards for contributing to the community
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-10">
          <Award className="h-16 w-16 text-neutral-300 mb-4" />
          <h3 className="text-lg font-medium mb-2">Wallet Not Connected</h3>
          <p className="text-sm text-neutral-500 text-center max-w-md mb-6">
            Connect your wallet to view available rewards, track your contributions, and claim tokens for your participation.
          </p>
          <Button>Connect Wallet</Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-primary" />
          Community Contribution Rewards
        </CardTitle>
        <CardDescription>
          Earn rewards by contributing to the community and platform
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* User stats overview */}
        <div className="bg-neutral-50 rounded-lg p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <Star className="h-5 w-5 mr-2 text-primary" />
              <h3 className="font-medium">Community Level {userStats.level}</h3>
            </div>
            <div className="space-y-2">
              <Progress value={getLevelProgress()} className="h-2" />
              <p className="text-xs text-neutral-500">
                {getLevelProgress()}% to Level {userStats.level + 1}
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Coins className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">Token Rewards</span>
              </div>
              <span className="font-medium">{userStats.tokenRewards}</span>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">Badges Earned</span>
              </div>
              <span className="font-medium">{userStats.badgesEarned}</span>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <Repeat className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">Contribution Streak</span>
              </div>
              <span className="font-medium">{userStats.contributionStreak} days</span>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              <h3 className="font-medium">Contribution Types</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Content</span>
                <span>{userStats.contributionTypes.content}%</span>
              </div>
              <Progress value={userStats.contributionTypes.content} className="h-1.5 bg-neutral-200" />
              
              <div className="flex justify-between text-xs">
                <span>Technical</span>
                <span>{userStats.contributionTypes.technical}%</span>
              </div>
              <Progress value={userStats.contributionTypes.technical} className="h-1.5 bg-neutral-200" />
              
              <div className="flex justify-between text-xs">
                <span>Community</span>
                <span>{userStats.contributionTypes.community}%</span>
              </div>
              <Progress value={userStats.contributionTypes.community} className="h-1.5 bg-neutral-200" />
              
              <div className="flex justify-between text-xs">
                <span>Governance</span>
                <span>{userStats.contributionTypes.governance}%</span>
              </div>
              <Progress value={userStats.contributionTypes.governance} className="h-1.5 bg-neutral-200" />
            </div>
          </div>
        </div>
        
        <Separator />
        
        {/* Rewards tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="available">
              <div className="flex items-center">
                <Gift className="h-4 w-4 mr-2" />
                Available Rewards
              </div>
            </TabsTrigger>
            <TabsTrigger value="completed">
              <div className="flex items-center">
                <Check className="h-4 w-4 mr-2" />
                Completed
              </div>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="available" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableRewards.map(reward => (
                <Card key={reward.id} className="overflow-hidden">
                  <CardHeader className="pb-2 pt-6">
                    <div className="flex">
                      <div className="mr-4">
                        {reward.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">{reward.title}</CardTitle>
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {reward.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardDescription>
                          {reward.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm mb-1">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-neutral-500" />
                        <span className="text-neutral-500">
                          {reward.timeEstimate}
                        </span>
                      </div>
                      <div className="flex items-center">
                        {reward.rewardType === 'token' ? (
                          <Coins className="h-4 w-4 mr-1 text-primary" />
                        ) : (
                          <Award className="h-4 w-4 mr-1 text-primary" />
                        )}
                        <span className="font-medium">
                          {reward.rewardAmount} {reward.rewardType === 'token' ? 'tokens' : 'badge'}
                        </span>
                      </div>
                    </div>
                    
                    {reward.completedPercentage !== undefined && (
                      <div className="mt-2 space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{reward.completedPercentage}%</span>
                        </div>
                        <Progress value={reward.completedPercentage} className="h-1.5" />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="bg-neutral-50 pt-3 pb-3">
                    <Button 
                      className="w-full"
                      disabled={isClaimingReward !== null}
                      onClick={() => claimReward(reward.id)}
                    >
                      {isClaimingReward === reward.id ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Claiming...
                        </>
                      ) : (
                        <>
                          <HandCoins className="h-4 w-4 mr-2" />
                          {reward.completedPercentage !== undefined 
                            ? `${reward.completedPercentage < 100 ? 'Continue Progress' : 'Claim Reward'}` 
                            : 'Start & Claim'}
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {completedRewards.map(reward => (
                <Card key={reward.id} className="overflow-hidden border-green-100">
                  <CardHeader className="pb-2 pt-6 bg-green-50">
                    <div className="flex">
                      <div className="mr-4 relative">
                        {reward.icon}
                        <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">{reward.title}</CardTitle>
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {reward.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs bg-white/80">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardDescription>
                          {reward.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-neutral-500" />
                        <span className="text-neutral-500">
                          Completed 3 days ago
                        </span>
                      </div>
                      <div className="flex items-center">
                        {reward.rewardType === 'token' ? (
                          <Coins className="h-4 w-4 mr-1 text-primary" />
                        ) : (
                          <Award className="h-4 w-4 mr-1 text-primary" />
                        )}
                        <span className="font-medium">
                          {reward.rewardAmount} {reward.rewardType === 'token' ? 'tokens' : 'badge'} earned
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="bg-neutral-50 border-t px-6 py-4">
        <div className="text-xs text-neutral-500 flex items-center">
          <Globe className="h-3 w-3 mr-1" />
          The community grows stronger with each contribution. Keep it up!
        </div>
      </CardFooter>
    </Card>
  );
}

// Additional missing component that needs to be defined
const Shield = (props: React.ComponentProps<typeof Award>) => {
  return <Award {...props} />;
};

const Clock = (props: React.ComponentProps<typeof Calendar>) => {
  return <Calendar {...props} />;
};
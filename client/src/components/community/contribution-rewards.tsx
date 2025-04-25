import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Award, 
  Building2,
  CheckCircle2, 
  Clock, 
  Flame, 
  HelpCircle, 
  Info, 
  Lightbulb, 
  MessageSquare, 
  Shield, 
  Star, 
  ThumbsUp, 
  Trophy, 
  Users 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger 
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useWallet } from '@/components/wallet/wallet-provider';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Types for rewards data
type ActivityType = 
  | 'proposal_creation'
  | 'proposal_vote'
  | 'task_creation'
  | 'task_completion'
  | 'property_listing'
  | 'content_creation'
  | 'feedback'
  | 'bug_report'
  | 'referral'
  | 'daily_login'
  | 'milestone';

type RewardItem = {
  id: string;
  title: string;
  description: string;
  type: ActivityType;
  points: number;
  maxPerDay?: number;
  maxPerWeek?: number;
  maxPerMonth?: number;
  completedCount: number;
  maxCount?: number;
  isCompleted?: boolean;
  inProgress?: boolean;
  progress?: number;
  requiredLevel?: number;
  unlockDate?: Date;
};

type Badge = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  requiredLevel?: number;
  requiredPoints?: number;
  requiredActivity?: Partial<Record<ActivityType, number>>;
  dateEarned?: Date;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
};

type RewardLevel = {
  level: number;
  title: string;
  requiredPoints: number;
  perks: string[];
};

type UserRewards = {
  totalPoints: number;
  level: number;
  pointsToNextLevel: number;
  weeklyPoints: number;
  monthlyPoints: number;
  badges: string[];
  rewardsHistory: Array<{
    date: Date;
    activity: string;
    points: number;
  }>;
};

// Dummy data for the rewards system
const rewardActivities: RewardItem[] = [
  {
    id: 'daily-login',
    title: 'Daily Login',
    description: 'Log in to the platform daily',
    type: 'daily_login',
    points: 5,
    completedCount: 1,
    maxCount: 1,
    isCompleted: true,
  },
  {
    id: 'create-proposal',
    title: 'Create a Governance Proposal',
    description: 'Submit a new proposal for the community to vote on',
    type: 'proposal_creation',
    points: 50,
    completedCount: 0,
    maxPerWeek: 5,
  },
  {
    id: 'vote-proposal',
    title: 'Vote on Proposals',
    description: 'Participate in governance by voting on active proposals',
    type: 'proposal_vote',
    points: 10,
    completedCount: 3,
    maxPerDay: 10,
  },
  {
    id: 'list-property',
    title: 'List a Property',
    description: 'Add a new property listing to the marketplace',
    type: 'property_listing',
    points: 100,
    completedCount: 0,
  },
  {
    id: 'create-task',
    title: 'Create a Task',
    description: 'Post a new task on the marketplace for others to complete',
    type: 'task_creation',
    points: 30,
    completedCount: 1,
    maxPerWeek: 10,
  },
  {
    id: 'complete-task',
    title: 'Complete a Task',
    description: 'Successfully fulfill and complete a marketplace task',
    type: 'task_completion',
    points: 40,
    completedCount: 2,
    maxPerWeek: 20,
  },
  {
    id: 'provide-feedback',
    title: 'Provide Platform Feedback',
    description: 'Submit detailed feedback to help improve the platform',
    type: 'feedback',
    points: 25,
    completedCount: 0,
    maxPerWeek: 3,
  },
  {
    id: 'report-bug',
    title: 'Report a Bug',
    description: 'Help improve the platform by reporting bugs',
    type: 'bug_report',
    points: 20,
    completedCount: 1,
    maxPerWeek: 5,
  },
  {
    id: 'refer-user',
    title: 'Refer a New User',
    description: 'Invite new users to join the platform',
    type: 'referral',
    points: 75,
    completedCount: 0,
    maxPerMonth: 10,
  },
  {
    id: 'active-participation',
    title: 'Active Community Participation',
    description: 'Engage regularly in community discussions and events',
    type: 'content_creation',
    points: 15,
    completedCount: 5,
    maxPerDay: 3,
  },
  {
    id: 'milestone-100',
    title: 'Reach 100 Contribution Points',
    description: 'Earn your first 100 points through various activities',
    type: 'milestone',
    points: 25,
    completedCount: 1,
    maxCount: 1,
    isCompleted: true,
  },
  {
    id: 'milestone-1000',
    title: 'Reach 1,000 Contribution Points',
    description: 'Achieve the milestone of 1,000 total points',
    type: 'milestone',
    points: 100,
    completedCount: 0,
    maxCount: 1,
    progress: 35,
    inProgress: true,
  },
];

const badges: Badge[] = [
  {
    id: 'early-adopter',
    name: 'Early Adopter',
    description: 'One of the first users to join the platform',
    icon: <Clock className="h-6 w-6" />,
    dateEarned: new Date('2023-01-15'),
    rarity: 'rare',
  },
  {
    id: 'governance-voter',
    name: 'Governance Participant',
    description: 'Actively participated in platform governance',
    icon: <Shield className="h-6 w-6" />,
    requiredActivity: { proposal_vote: 10 },
    dateEarned: new Date('2023-03-22'),
    rarity: 'uncommon',
  },
  {
    id: 'task-master',
    name: 'Task Master',
    description: 'Completed 10 or more marketplace tasks',
    icon: <CheckCircle2 className="h-6 w-6" />,
    requiredActivity: { task_completion: 10 },
    rarity: 'uncommon',
  },
  {
    id: 'property-mogul',
    name: 'Property Mogul',
    description: 'Listed 5 or more properties on the platform',
    icon: <Building2 className="h-6 w-6" />,
    requiredActivity: { property_listing: 5 },
    rarity: 'rare',
  },
  {
    id: 'community-leader',
    name: 'Community Leader',
    description: 'Created proposals that received significant support',
    icon: <Users className="h-6 w-6" />,
    requiredLevel: 5,
    rarity: 'epic',
  },
  {
    id: 'influencer',
    name: 'Influencer',
    description: 'Referred 20+ new users to the platform',
    icon: <Flame className="h-6 w-6" />,
    requiredActivity: { referral: 20 },
    rarity: 'legendary',
  },
  {
    id: 'contributor',
    name: 'Valued Contributor',
    description: 'Regularly contributes to platform improvement',
    icon: <ThumbsUp className="h-6 w-6" />,
    requiredPoints: 500,
    dateEarned: new Date('2023-05-10'),
    rarity: 'common',
  },
  {
    id: 'innovator',
    name: 'Platform Innovator',
    description: 'Suggested features that were implemented',
    icon: <Lightbulb className="h-6 w-6" />,
    requiredActivity: { feedback: 5 },
    rarity: 'epic',
  },
];

const levels: RewardLevel[] = [
  {
    level: 1,
    title: 'Newcomer',
    requiredPoints: 0,
    perks: ['Access to basic platform features', 'Ability to vote on proposals'],
  },
  {
    level: 2,
    title: 'Contributor',
    requiredPoints: 100,
    perks: ['Reduced fees on property transactions (0.5%)', 'Access to exclusive community events'],
  },
  {
    level: 3,
    title: 'Engaged Member',
    requiredPoints: 300,
    perks: ['Priority support', 'Access to beta features', 'Higher task visibility'],
  },
  {
    level: 4,
    title: 'Platform Advocate',
    requiredPoints: 750,
    perks: ['Further reduced fees (1%)', 'Weighted voting power (1.25x)', 'Special profile badge'],
  },
  {
    level: 5,
    title: 'Community Leader',
    requiredPoints: 1500,
    perks: ['Maximum fee reduction (1.5%)', 'Weighted voting power (1.5x)', 'Access to leadership forums'],
  },
  {
    level: 6,
    title: 'Platform Steward',
    requiredPoints: 3000,
    perks: ['Early access to all new features', 'Ability to create special proposals', 'Exclusive governance rights'],
  },
  {
    level: 7,
    title: 'DAO Elder',
    requiredPoints: 6000,
    perks: ['Governance council eligibility', 'Platform ambassador status', 'Weighted voting power (2x)'],
  },
];

// User's progress data
const userRewards: UserRewards = {
  totalPoints: 350,
  level: 3,
  pointsToNextLevel: 400,
  weeklyPoints: 125,
  monthlyPoints: 350,
  badges: ['early-adopter', 'governance-voter', 'contributor'],
  rewardsHistory: [
    {
      date: new Date('2023-12-15'),
      activity: 'Daily Login',
      points: 5,
    },
    {
      date: new Date('2023-12-15'),
      activity: 'Voted on Proposal #45',
      points: 10,
    },
    {
      date: new Date('2023-12-14'),
      activity: 'Voted on Proposal #43',
      points: 10,
    },
    {
      date: new Date('2023-12-14'),
      activity: 'Created Task "Website Design"',
      points: 30,
    },
    {
      date: new Date('2023-12-13'),
      activity: 'Completed Task "Smart Contract Audit"',
      points: 40,
    },
    {
      date: new Date('2023-12-12'),
      activity: 'Completed Task "Content Writing"',
      points: 40,
    },
    {
      date: new Date('2023-12-12'),
      activity: 'Community Participation',
      points: 15,
    },
    {
      date: new Date('2023-12-11'),
      activity: 'Reported Bug #123',
      points: 20,
    },
    {
      date: new Date('2023-12-10'),
      activity: 'Milestone: 100 Points',
      points: 25,
    },
  ],
};

// Leaderboard data
const leaderboardData = [
  { rank: 1, name: 'CryptoWhale', points: 4250, level: 6, badges: 12 },
  { rank: 2, name: 'BlockchainGuru', points: 3780, level: 6, badges: 10 },
  { rank: 3, name: 'TokenMaster', points: 3120, level: 5, badges: 9 },
  { rank: 4, name: 'DAOExplorer', points: 2840, level: 5, badges: 8 },
  { rank: 5, name: 'Web3Wizard', points: 2350, level: 5, badges: 7 },
  { rank: 6, name: 'PropTech', points: 1920, level: 5, badges: 6 },
  { rank: 7, name: 'RealtorToken', points: 1650, level: 4, badges: 5 },
  { rank: 8, name: 'SmartInvestor', points: 1480, level: 4, badges: 6 },
  { rank: 9, name: 'ChainBuilder', points: 1320, level: 4, badges: 4 },
  { rank: 10, name: 'CurrentUser', points: 350, level: 3, badges: 3 },
];

interface ContributionRewardsProps {
  isAdminView?: boolean;
}

export function ContributionRewards({ isAdminView = false }: ContributionRewardsProps) {
  const { isConnected, address, user } = useWallet();
  const { toast } = useToast();
  
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  
  // Current user's level
  const currentLevel = levels.find(level => level.level === userRewards.level);
  const nextLevel = levels.find(level => level.level === userRewards.level + 1);
  
  // Progress to next level
  const levelProgress = nextLevel ? 
    Math.round(((userRewards.totalPoints - currentLevel!.requiredPoints) / 
    (nextLevel.requiredPoints - currentLevel!.requiredPoints)) * 100) : 100;
  
  // User's badges
  const userBadges = badges.filter(badge => userRewards.badges.includes(badge.id));
  
  // Handle claim reward
  const handleClaimReward = (reward: RewardItem) => {
    toast({
      title: 'Reward Claimed!',
      description: `You've earned ${reward.points} points for "${reward.title}"`,
    });
  };
  
  // Filter activities by status
  const availableActivities = rewardActivities.filter(activity => !activity.isCompleted && !activity.inProgress);
  const completedActivities = rewardActivities.filter(activity => activity.isCompleted);
  const inProgressActivities = rewardActivities.filter(activity => activity.inProgress);
  
  // Badge rarity colors
  const rarityColors = {
    common: 'bg-slate-100 text-slate-800',
    uncommon: 'bg-green-100 text-green-800',
    rare: 'bg-blue-100 text-blue-800',
    epic: 'bg-purple-100 text-purple-800',
    legendary: 'bg-amber-100 text-amber-800',
  };
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };
  
  if (!isConnected) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="h-5 w-5 mr-2 text-primary" />
            Community Contribution Rewards
          </CardTitle>
          <CardDescription>
            Earn rewards by contributing to the community and platform
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-8">
          <Award className="h-16 w-16 text-neutral-300 mb-4" />
          <h3 className="text-lg font-medium mb-2">Wallet Not Connected</h3>
          <p className="text-sm text-neutral-500 text-center max-w-md mb-6">
            Connect your wallet to track your contributions, earn rewards, and level up in the community. Your participation helps improve the platform for everyone.
          </p>
          <Button>Connect Wallet</Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-primary" />
              Community Contribution Rewards
            </CardTitle>
            <CardDescription>
              Earn rewards by contributing to the community and platform
            </CardDescription>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-90 px-4 py-2 rounded-md shadow-sm">
              <div className="text-xs text-neutral-500 mb-1">Your Points</div>
              <div className="text-xl font-bold text-primary">
                {userRewards.totalPoints}
                <span className="text-sm font-normal text-neutral-500 ml-1">pts</span>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-90 px-4 py-2 rounded-md shadow-sm">
              <div className="text-xs text-neutral-500 mb-1">Current Level</div>
              <div className="text-xl font-bold">
                {userRewards.level}
                <span className="text-sm font-normal text-neutral-500 ml-1">{currentLevel?.title}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b">
          <TabsList className="w-full justify-start h-12 rounded-none border-b bg-transparent p-0">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-4"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="activities" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-4"
            >
              Activities
            </TabsTrigger>
            <TabsTrigger 
              value="badges" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-4"
            >
              Badges
            </TabsTrigger>
            <TabsTrigger 
              value="leaderboard" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-4"
            >
              Leaderboard
            </TabsTrigger>
            <TabsTrigger 
              value="history" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-4"
            >
              History
            </TabsTrigger>
          </TabsList>
        </div>
        
        {isAdminView && (
          <div className="bg-amber-50 border-b border-amber-100 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-amber-600 mr-2" />
                <span className="font-medium text-amber-800">Admin Controls</span>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">Configure Rewards</Button>
                <Button size="sm" variant="outline">Manage Badges</Button>
                <Button size="sm" variant="outline">Activity Settings</Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Overview Tab */}
        <TabsContent value="overview" className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Level Progress */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center">
                      Level {userRewards.level}: {currentLevel?.title}
                      <HoverCard>
                        <HoverCardTrigger>
                          <Info className="h-4 w-4 ml-2 text-neutral-400 cursor-help" />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="space-y-2">
                            <h4 className="font-medium">Level {userRewards.level} Benefits</h4>
                            <ul className="text-sm space-y-1">
                              {currentLevel?.perks.map((perk, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                                  <span>{perk}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </h3>
                    {nextLevel && (
                      <p className="text-sm text-neutral-500">
                        {userRewards.pointsToNextLevel} points needed for Level {nextLevel.level}
                      </p>
                    )}
                  </div>
                  
                  <Badge className="text-xs bg-primary hover:bg-primary">
                    {userRewards.weeklyPoints} points this week
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress to Level {userRewards.level + 1}</span>
                    <span>{levelProgress}%</span>
                  </div>
                  <Progress value={levelProgress} className="h-2" />
                </div>
                
                {nextLevel && (
                  <div className="bg-neutral-50 p-4 rounded-lg border">
                    <h4 className="font-medium flex items-center">
                      <Star className="h-4 w-4 mr-2 text-amber-500" />
                      Next Level: {nextLevel.level} - {nextLevel.title}
                    </h4>
                    <p className="text-sm text-neutral-500 mt-1 mb-3">
                      Reach {nextLevel.requiredPoints} points to unlock these benefits:
                    </p>
                    <ul className="text-sm space-y-1">
                      {nextLevel.perks.map((perk, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowUpRight className="h-4 w-4 mr-2 text-neutral-400 mt-0.5" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Your Recent Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {completedActivities.slice(0, 2).map((activity) => (
                    <Card key={activity.id} className="bg-neutral-50 border">
                      <CardHeader className="pb-2 pt-4">
                        <CardTitle className="text-base flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                          {activity.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-neutral-500">{activity.description}</p>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Badge variant="outline">
                          {activity.points} points earned
                        </Badge>
                      </CardFooter>
                    </Card>
                  ))}
                  
                  {inProgressActivities.slice(0, 2).map((activity) => (
                    <Card key={activity.id}>
                      <CardHeader className="pb-2 pt-4">
                        <CardTitle className="text-base flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-amber-500" />
                          {activity.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-neutral-500">{activity.description}</p>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Progress</span>
                            <span>{activity.progress}%</span>
                          </div>
                          <Progress value={activity.progress} className="h-1.5" />
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Badge variant="outline">
                          {activity.points} points on completion
                        </Badge>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column: Badges & Stats */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Your Badges
                  <Badge className="ml-2">
                    {userBadges.length}
                  </Badge>
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {userBadges.slice(0, 4).map((badge) => (
                    <div 
                      key={badge.id}
                      className="p-3 bg-white rounded-lg border border-neutral-200 cursor-pointer hover:border-primary hover:shadow-sm transition-all"
                      onClick={() => setSelectedBadge(badge)}
                    >
                      <div className="flex justify-center mb-2">
                        <div className={cn(
                          "p-2 rounded-full",
                          rarityColors[badge.rarity].split(' ')[0]
                        )}>
                          {badge.icon}
                        </div>
                      </div>
                      <h4 className="text-sm font-medium text-center">{badge.name}</h4>
                      <div className="flex justify-center mt-1">
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "text-xs",
                            rarityColors[badge.rarity].split(' ')[1]
                          )}
                        >
                          {badge.rarity}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-3 flex justify-center">
                  <Button 
                    variant="link" 
                    size="sm"
                    onClick={() => setActiveTab('badges')}
                  >
                    View All Badges
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-primary" />
                  Leaderboard Ranking
                </h3>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center pb-6">
                      <div className="text-5xl font-bold">#10</div>
                      <p className="text-sm text-neutral-500 mt-1">Your Current Rank</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-neutral-500">Total Points</span>
                        <span className="font-medium">{userRewards.totalPoints}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-neutral-500">Current Level</span>
                        <span className="font-medium">{userRewards.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-neutral-500">Badges Earned</span>
                        <span className="font-medium">{userBadges.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-neutral-500">Points This Week</span>
                        <span className="font-medium">{userRewards.weeklyPoints}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-center">
                    <Button 
                      variant="outline" 
                      onClick={() => setActiveTab('leaderboard')}
                    >
                      View Full Leaderboard
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Activities Tab */}
        <TabsContent value="activities" className="p-6">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="text-lg font-semibold">Available Activities</h3>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Activities</SelectItem>
                    <SelectItem value="governance">Governance</SelectItem>
                    <SelectItem value="marketplace">Marketplace</SelectItem>
                    <SelectItem value="social">Social & Community</SelectItem>
                    <SelectItem value="platform">Platform Support</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="points-high">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="points-high">Points (High to Low)</SelectItem>
                    <SelectItem value="points-low">Points (Low to High)</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableActivities.map((activity) => (
                <Card key={activity.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base">{activity.title}</CardTitle>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-0">
                        {activity.points} pts
                      </Badge>
                    </div>
                    <CardDescription>
                      {activity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-neutral-500 space-y-1">
                      {activity.maxPerDay && (
                        <div className="flex justify-between">
                          <span>Daily Limit:</span>
                          <span>{activity.completedCount}/{activity.maxPerDay}</span>
                        </div>
                      )}
                      {activity.maxPerWeek && (
                        <div className="flex justify-between">
                          <span>Weekly Limit:</span>
                          <span>{activity.completedCount}/{activity.maxPerWeek}</span>
                        </div>
                      )}
                      {activity.requiredLevel && (
                        <div className="flex justify-between">
                          <span>Required Level:</span>
                          <span>{activity.requiredLevel}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleClaimReward(activity)}
                      disabled={activity.requiredLevel ? userRewards.level < activity.requiredLevel : false}
                    >
                      Start Activity
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {inProgressActivities.length > 0 && (
              <>
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">In Progress</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {inProgressActivities.map((activity) => (
                      <Card key={activity.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-base">{activity.title}</CardTitle>
                            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                              In Progress
                            </Badge>
                          </div>
                          <CardDescription>
                            {activity.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Progress</span>
                              <span>{activity.progress}%</span>
                            </div>
                            <Progress value={activity.progress} className="h-1.5" />
                          </div>
                          
                          <div className="text-sm flex justify-between">
                            <span className="text-neutral-500">Reward:</span>
                            <span className="font-medium">{activity.points} points</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            disabled={activity.progress !== 100}
                          >
                            {activity.progress === 100 ? 'Claim Reward' : 'Continue Activity'}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            )}
            
            {completedActivities.length > 0 && (
              <>
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Completed Activities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {completedActivities.map((activity) => (
                      <Card key={activity.id} className="bg-neutral-50">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-base">{activity.title}</CardTitle>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Completed
                            </Badge>
                          </div>
                          <CardDescription>
                            {activity.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm flex justify-between">
                            <span className="text-neutral-500">Earned:</span>
                            <span className="font-medium">{activity.points} points</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </TabsContent>
        
        {/* Badges Tab */}
        <TabsContent value="badges" className="p-6">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="text-lg font-semibold">Your Badges</h3>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Badges</SelectItem>
                    <SelectItem value="earned">Earned Badges</SelectItem>
                    <SelectItem value="unearned">Unearned Badges</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="rarity">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rarity">Sort by Rarity</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="alphabetical">Alphabetical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {badges.map((badge) => {
                const isEarned = userRewards.badges.includes(badge.id);
                return (
                  <div 
                    key={badge.id}
                    className={cn(
                      "p-4 bg-white rounded-lg border cursor-pointer hover:border-primary transition-all",
                      isEarned ? "border-neutral-200" : "border-neutral-200 opacity-70"
                    )}
                    onClick={() => setSelectedBadge(badge)}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={cn(
                        "p-3 rounded-full mb-3",
                        isEarned ? rarityColors[badge.rarity].split(' ')[0] : "bg-neutral-100"
                      )}>
                        {badge.icon}
                      </div>
                      <h4 className="font-medium text-sm mb-1">{badge.name}</h4>
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "text-xs mb-2",
                          isEarned ? rarityColors[badge.rarity].split(' ')[1] : "text-neutral-500"
                        )}
                      >
                        {badge.rarity}
                      </Badge>
                      {isEarned ? (
                        <div className="text-xs text-green-600 flex items-center mt-auto">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Earned
                        </div>
                      ) : (
                        <div className="text-xs text-neutral-500 mt-auto">Not Earned</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Badge Details Dialog */}
          <Dialog open={!!selectedBadge} onOpenChange={(open) => !open && setSelectedBadge(null)}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center">
                  <div className={cn(
                    "p-2 rounded-full mr-2",
                    selectedBadge && rarityColors[selectedBadge.rarity].split(' ')[0]
                  )}>
                    {selectedBadge?.icon}
                  </div>
                  {selectedBadge?.name}
                  <Badge 
                    className={cn(
                      "ml-2",
                      selectedBadge && rarityColors[selectedBadge.rarity].split(' ')[0],
                      selectedBadge && rarityColors[selectedBadge.rarity].split(' ')[1],
                    )}
                  >
                    {selectedBadge?.rarity}
                  </Badge>
                </DialogTitle>
                <DialogDescription>
                  {selectedBadge?.description}
                </DialogDescription>
              </DialogHeader>
              
              {selectedBadge && (
                <div className="space-y-4">
                  {userRewards.badges.includes(selectedBadge.id) && selectedBadge.dateEarned && (
                    <div className="bg-green-50 text-green-800 px-4 py-2 rounded-md flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div>
                        <div className="font-medium">Earned</div>
                        <div className="text-sm">{formatDate(selectedBadge.dateEarned)}</div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Requirements</h4>
                    <div className="text-sm space-y-1">
                      {selectedBadge.requiredPoints && (
                        <div className="flex justify-between">
                          <span>Total Points Needed:</span>
                          <span className="font-medium">{selectedBadge.requiredPoints}</span>
                        </div>
                      )}
                      {selectedBadge.requiredLevel && (
                        <div className="flex justify-between">
                          <span>Level Required:</span>
                          <span className="font-medium">{selectedBadge.requiredLevel}</span>
                        </div>
                      )}
                      {selectedBadge.requiredActivity && Object.entries(selectedBadge.requiredActivity).map(([activity, count]) => (
                        <div key={activity} className="flex justify-between">
                          <span>{activity.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}:</span>
                          <span className="font-medium">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Benefits</h4>
                    <p className="text-sm">
                      Badges showcase your contributions and achievements within the platform.
                      Some exclusive badges may unlock special features or provide bonuses.
                    </p>
                  </div>
                </div>
              )}
              
              <DialogFooter className="gap-2 sm:gap-0">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setSelectedBadge(null)}
                >
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>
        
        {/* Leaderboard Tab */}
        <TabsContent value="leaderboard" className="p-6">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="text-lg font-semibold">Community Leaderboard</h3>
              <div>
                <Select defaultValue="all-time">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Time Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-time">All Time</SelectItem>
                    <SelectItem value="monthly">This Month</SelectItem>
                    <SelectItem value="weekly">This Week</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg space-y-4">
              <h4 className="font-semibold text-center">Top 3 Contributors</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="order-2 md:order-1 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3">
                    <div className="w-12 h-12 rounded-full bg-[#C0C0C0] flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardHeader className="pt-8 text-center">
                    <CardTitle className="text-lg">{leaderboardData[1].name}</CardTitle>
                    <CardDescription>Level {leaderboardData[1].level}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {leaderboardData[1].points}
                      <span className="text-sm font-normal text-neutral-500 ml-1">pts</span>
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">
                      {leaderboardData[1].badges} Badges
                    </div>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Badge>2nd Place</Badge>
                  </CardFooter>
                </Card>
                
                <Card className="order-1 md:order-2 border-primary relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3">
                    <div className="w-14 h-14 rounded-full bg-[#FFD700] flex items-center justify-center">
                      <Trophy className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <CardHeader className="pt-8 text-center">
                    <CardTitle className="text-xl">{leaderboardData[0].name}</CardTitle>
                    <CardDescription>Level {leaderboardData[0].level}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-primary">
                      {leaderboardData[0].points}
                      <span className="text-sm font-normal text-neutral-500 ml-1">pts</span>
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">
                      {leaderboardData[0].badges} Badges
                    </div>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Badge className="bg-[#FFD700] hover:bg-[#FFD700]/90">1st Place</Badge>
                  </CardFooter>
                </Card>
                
                <Card className="order-3 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3">
                    <div className="w-12 h-12 rounded-full bg-[#CD7F32] flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardHeader className="pt-8 text-center">
                    <CardTitle className="text-lg">{leaderboardData[2].name}</CardTitle>
                    <CardDescription>Level {leaderboardData[2].level}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {leaderboardData[2].points}
                      <span className="text-sm font-normal text-neutral-500 ml-1">pts</span>
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">
                      {leaderboardData[2].badges} Badges
                    </div>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Badge>3rd Place</Badge>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px] text-center">Rank</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead className="text-right">Level</TableHead>
                  <TableHead className="text-right">Badges</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((user) => (
                  <TableRow 
                    key={user.rank}
                    className={cn(
                      user.rank === 10 && "bg-primary/5 border-l-2 border-primary"
                    )}
                  >
                    <TableCell className="text-center font-medium">
                      {user.rank <= 3 ? (
                        <Badge className={cn(
                          "w-8 h-8 p-0 flex items-center justify-center rounded-full",
                          user.rank === 1 && "bg-[#FFD700] hover:bg-[#FFD700]/90",
                          user.rank === 2 && "bg-[#C0C0C0] hover:bg-[#C0C0C0]/90",
                          user.rank === 3 && "bg-[#CD7F32] hover:bg-[#CD7F32]/90",
                        )}>
                          {user.rank}
                        </Badge>
                      ) : (
                        <div>{user.rank}</div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">
                        {user.name}
                        {user.rank === 10 && (
                          <Badge className="ml-2 bg-primary/20 hover:bg-primary/30 text-primary">You</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {user.level}
                    </TableCell>
                    <TableCell className="text-right">
                      {user.badges}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {user.points}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        {/* History Tab */}
        <TabsContent value="history" className="p-6">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="text-lg font-semibold">Rewards History</h3>
              <div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Activities</SelectItem>
                    <SelectItem value="governance">Governance</SelectItem>
                    <SelectItem value="marketplace">Marketplace</SelectItem>
                    <SelectItem value="social">Social & Community</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userRewards.rewardsHistory.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {formatDate(record.date)}
                    </TableCell>
                    <TableCell>
                      {record.activity}
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="font-mono bg-green-50 text-green-700 border-green-200">
                        +{record.points}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-neutral-500">
                Showing {userRewards.rewardsHistory.length} of {userRewards.rewardsHistory.length} records
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}


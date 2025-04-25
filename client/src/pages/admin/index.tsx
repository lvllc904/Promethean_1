import React, { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { Settings, Users, Trophy, Zap, Database, ArrowLeftRight, BarChart3, Shield, Key, LineChart, Globe, Layout } from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const adminFeatures = [
  {
    title: "Smart Contracts",
    icon: <Zap className="h-10 w-10 text-blue-500" />,
    description: "Interact with blockchain smart contracts",
    path: "/admin/contracts",
    stats: "2 contracts deployed"
  },
  {
    title: "Blockchain Explorer",
    icon: <Database className="h-10 w-10 text-purple-500" />,
    description: "View and analyze blockchain data",
    path: "/admin/blockchain/explorer",
    stats: "4 networks"
  },
  {
    title: "DEX (Decentralized Exchange)",
    icon: <ArrowLeftRight className="h-10 w-10 text-green-500" />,
    description: "Swap and exchange tokens",
    path: "/admin/dex",
    stats: "5 tokens available"
  },
  {
    title: "Community Rewards",
    icon: <Trophy className="h-10 w-10 text-amber-500" />,
    description: "Manage community incentives and rewards",
    path: "/admin/community/rewards",
    stats: "3 active campaigns"
  },
  {
    title: "Analytics",
    icon: <LineChart className="h-10 w-10 text-indigo-500" />,
    description: "Track platform metrics and performance",
    path: "/admin/analytics",
    stats: "Real-time data"
  },
  {
    title: "API Management",
    icon: <Key className="h-10 w-10 text-red-500" />,
    description: "Manage API keys and integrations",
    path: "/admin/api",
    stats: "3 active integrations"
  },
  {
    title: "Security",
    icon: <Shield className="h-10 w-10 text-emerald-500" />,
    description: "Platform security settings and logs",
    path: "/admin/security",
    stats: "All systems secure"
  },
  {
    title: "White Label Settings",
    icon: <Layout className="h-10 w-10 text-cyan-500" />,
    description: "Customize platform appearance and branding",
    path: "/admin/white-label",
    stats: "Brand settings"
  }
];

const PlatformStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">1,256</div>
        <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Active Properties</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">346</div>
        <p className="text-xs text-muted-foreground mt-1">+5% from last month</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">DAO Proposals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">28</div>
        <p className="text-xs text-muted-foreground mt-1">12 active votes</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Platform Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <div className="text-2xl font-bold mr-2">95%</div>
          <Progress value={95} className="h-2 flex-1" />
        </div>
        <p className="text-xs text-muted-foreground mt-1">All systems operational</p>
      </CardContent>
    </Card>
  </div>
);

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6 space-y-8">
      <PageHeader
        title="Admin Dashboard"
        description="Manage and configure platform settings"
        icon={<Settings className="h-6 w-6" />}
      />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tools">Admin Tools</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="settings">Platform Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <PlatformStats />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Platform Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {adminFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="mb-1">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardFooter className="pt-2 flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">{feature.stats}</div>
                  <Button 
                    variant="ghost" 
                    className="font-medium text-primary" 
                    onClick={() => setLocation(feature.path)}
                  >
                    Manage
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tools">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Blockchain Tools</CardTitle>
                <CardDescription>Access specialized blockchain management features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Link href="/admin/contracts" className="block py-1.5 px-2 rounded-md hover:bg-secondary">
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-blue-500" />
                      Smart Contract Interaction
                    </div>
                  </Link>
                  <Link href="/admin/blockchain/explorer" className="block py-1.5 px-2 rounded-md hover:bg-secondary">
                    <div className="flex items-center">
                      <Database className="h-4 w-4 mr-2 text-purple-500" />
                      Blockchain Explorer
                    </div>
                  </Link>
                  <Link href="/admin/dex" className="block py-1.5 px-2 rounded-md hover:bg-secondary">
                    <div className="flex items-center">
                      <ArrowLeftRight className="h-4 w-4 mr-2 text-green-500" />
                      DEX Management
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Community Management</CardTitle>
                <CardDescription>Manage community features and rewards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Link href="/admin/community/rewards" className="block py-1.5 px-2 rounded-md hover:bg-secondary">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 mr-2 text-amber-500" />
                      Community Rewards
                    </div>
                  </Link>
                  <Link href="/admin/users" className="block py-1.5 px-2 rounded-md hover:bg-secondary">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-indigo-500" />
                      User Management
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage platform users and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <p>User management interface will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Configuration</CardTitle>
              <CardDescription>Manage global platform settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Platform settings interface will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
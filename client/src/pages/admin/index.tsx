import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Users, 
  Building, 
  FileText, 
  CreditCard, 
  BarChart2, 
  Key, 
  Layers, 
  Server, 
  Puzzle, 
  Palette, 
  Play, 
  Calendar,
  Bot,
  MessageCircle,
  VoteIcon,
  Cpu
} from "lucide-react";

// Admin Components
import ApiCredentials from './components/ApiCredentials';
import ServiceCategories from './components/ServiceCategories';
import ServiceProviders from './components/ServiceProviders';
import ServiceIntegrations from './components/ServiceIntegrations';
import WhitelabelSettings from './components/WhitelabelSettings';
import ApiUsage from './components/ApiUsage';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Admin overview stats - in a real app these would come from an API
  const stats = {
    users: 1205,
    properties: 342,
    transactions: 156,
    revenue: '$125,450.00',
    activeIntegrations: 8,
    successRate: '99.2%',
    pendingReviews: 14,
    activeProposals: 3
  };
  
  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage platform settings, integrations, and monitor usage
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Tasks
          </Button>
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Run Tests
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-between items-center">
          <TabsList className="grid grid-cols-2 md:grid-cols-8 w-full md:w-auto">
            <TabsTrigger value="overview" className="px-3">
              <BarChart2 className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="apis" className="px-3">
              <Key className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">API Keys</span>
            </TabsTrigger>
            <TabsTrigger value="categories" className="px-3">
              <Layers className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Categories</span>
            </TabsTrigger>
            <TabsTrigger value="providers" className="px-3">
              <Server className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Providers</span>
            </TabsTrigger>
            <TabsTrigger value="integrations" className="px-3">
              <Puzzle className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Integrations</span>
            </TabsTrigger>
            <TabsTrigger value="whitelabel" className="px-3">
              <Palette className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Whitelabel</span>
            </TabsTrigger>
            <TabsTrigger value="usage" className="px-3">
              <BarChart2 className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Usage</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="px-3">
              <Bot className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">AI</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <div className="mt-6">
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{stats.users}</div>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{stats.properties}</div>
                    <Building className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{stats.transactions}</div>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{stats.revenue}</div>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-xl font-semibold mt-6">API Integrations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{stats.activeIntegrations}</div>
                    <Puzzle className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{stats.successRate}</div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Healthy
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">AI System</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Running
                      </Badge>
                    </div>
                    <Cpu className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-xl font-semibold mt-6">DAO Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Unprocessed Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{stats.pendingReviews}</div>
                    <MessageCircle className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Proposals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{stats.activeProposals}</div>
                    <VoteIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and operations</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Users className="h-6 w-6 mb-2" />
                    <span>Manage Users</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Building className="h-6 w-6 mb-2" />
                    <span>Properties</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Bot className="h-6 w-6 mb-2" />
                    <span>AI Settings</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Settings className="h-6 w-6 mb-2" />
                    <span>System Config</span>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                  <CardDescription>Service health and performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                      <span>Web Server</span>
                    </div>
                    <Badge variant="outline">Operational</Badge>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                      <span>Database</span>
                    </div>
                    <Badge variant="outline">Operational</Badge>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                      <span>Smart Contracts</span>
                    </div>
                    <Badge variant="outline">Operational</Badge>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                      <span>AI Services</span>
                    </div>
                    <Badge variant="outline">Operational</Badge>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                      <span>Scheduler</span>
                    </div>
                    <Badge variant="outline">Operational</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* API Keys Tab */}
          <TabsContent value="apis">
            <ApiCredentials />
          </TabsContent>
          
          {/* Categories Tab */}
          <TabsContent value="categories">
            <ServiceCategories />
          </TabsContent>
          
          {/* Providers Tab */}
          <TabsContent value="providers">
            <ServiceProviders />
          </TabsContent>
          
          {/* Integrations Tab */}
          <TabsContent value="integrations">
            <ServiceIntegrations />
          </TabsContent>
          
          {/* Whitelabel Tab */}
          <TabsContent value="whitelabel">
            <WhitelabelSettings />
          </TabsContent>
          
          {/* Usage Tab */}
          <TabsContent value="usage">
            <ApiUsage />
          </TabsContent>
          
          {/* AI Tab */}
          <TabsContent value="ai">
            <Card>
              <CardHeader>
                <CardTitle>AI and Governance Management</CardTitle>
                <CardDescription>Configure AI services and DAO governance settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Review Analysis</CardTitle>
                      <CardDescription>Configure how feedback is processed and analyzed</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Auto-categorize reviews</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Enabled
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Sentiment analysis</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Enabled
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Auto-summarization</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Enabled
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Process frequency</span>
                        <Badge variant="outline">Hourly</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="outline" className="w-full">Configure</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Proposal Generation</CardTitle>
                      <CardDescription>Configure how governance proposals are generated</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Auto-generate proposals</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Enabled
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Feasibility analysis</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Enabled
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Impact assessment</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Enabled
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Min. review threshold</span>
                        <Badge variant="outline">5 reviews</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="outline" className="w-full">Configure</Button>
                    </CardFooter>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">AI Models Configuration</CardTitle>
                    <CardDescription>Configure AI models and parameters used throughout the platform</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Review Analysis Model</span>
                          <Badge variant="outline">gpt-4o</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Proposal Generation Model</span>
                          <Badge variant="outline">gpt-4o</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Property Valuation Model</span>
                          <Badge variant="outline">gpt-4o</Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Smart Contract Generator</span>
                          <Badge variant="outline">gpt-4o</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Legal Analysis Model</span>
                          <Badge variant="outline">gpt-4o</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Image Generation Model</span>
                          <Badge variant="outline">dall-e-3</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full">Configure AI Models</Button>
                  </CardFooter>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Scheduler Status</CardTitle>
                      <CardDescription>Current status of AI processing tasks</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Review Analysis Job</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Running
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Proposal Generation Job</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Running
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Last Execution</span>
                        <span className="text-sm text-muted-foreground">
                          {new Date().toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Next Execution</span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(Date.now() + 60 * 60 * 1000).toLocaleTimeString()}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between">
                      <Button variant="outline">Pause Jobs</Button>
                      <Button>Run Now</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">API Usage</CardTitle>
                      <CardDescription>AI service consumption metrics</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Today's Usage</span>
                        <Badge variant="outline">124 Requests</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">This Month</span>
                        <Badge variant="outline">3,245 Requests</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Token Usage (30d)</span>
                        <Badge variant="outline">524,321 Tokens</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Monthly Cost</span>
                        <span className="text-sm font-medium">$142.50</span>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button variant="outline" className="w-full">View Detailed Analytics</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
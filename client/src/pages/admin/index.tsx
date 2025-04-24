import { useState, Suspense } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Server, Database, Palette, Key, History, PlusCircle } from 'lucide-react';
import { Link } from 'wouter';

// Admin dashboard tabs - to be implemented
const ServiceCategories = () => <div>Service Categories Component (Coming Soon)</div>;
const ServiceProviders = () => <div>Service Providers Component (Coming Soon)</div>;
const ApiCredentials = () => <div>API Credentials Component (Coming Soon)</div>;
const ServiceIntegrations = () => <div>Service Integrations Component (Coming Soon)</div>;
const WhitelabelSettings = () => <div>Whitelabel Settings Component (Coming Soon)</div>;
const ApiUsage = () => <div>API Usage Component (Coming Soon)</div>;

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('categories');
  
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Configure external services, API connections, and white-label settings
          </p>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-6 md:grid-cols-6 gap-2">
          <TabsTrigger value="categories" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span className="hidden md:inline">Categories</span>
          </TabsTrigger>
          <TabsTrigger value="providers" className="flex items-center gap-2">
            <Server className="h-4 w-4" />
            <span className="hidden md:inline">Providers</span>
          </TabsTrigger>
          <TabsTrigger value="credentials" className="flex items-center gap-2">
            <Key className="h-4 w-4" />
            <span className="hidden md:inline">API Keys</span>
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            <span className="hidden md:inline">Integrations</span>
          </TabsTrigger>
          <TabsTrigger value="whitelabel" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden md:inline">Whitelabel</span>
          </TabsTrigger>
          <TabsTrigger value="usage" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            <span className="hidden md:inline">Usage</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Service Categories</CardTitle>
              <CardDescription>
                Manage categories for organizing external service integrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading categories...</div>}>
                <ServiceCategories />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="providers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Service Providers</CardTitle>
              <CardDescription>
                Configure service providers and their connection details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading providers...</div>}>
                <ServiceProviders />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="credentials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Credentials</CardTitle>
              <CardDescription>
                Securely store and manage API keys and access tokens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading credentials...</div>}>
                <ApiCredentials />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Service Integrations</CardTitle>
              <CardDescription>
                Set up and configure active service integrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading integrations...</div>}>
                <ServiceIntegrations />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="whitelabel" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Whitelabel Settings</CardTitle>
              <CardDescription>
                Customize the platform's appearance and branding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading whitelabel settings...</div>}>
                <WhitelabelSettings />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Usage</CardTitle>
              <CardDescription>
                Monitor API usage and track service consumption
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading usage data...</div>}>
                <ApiUsage />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
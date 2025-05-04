import React from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/hooks/use-auth';
import { Loader2, Tags } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLayout from './components/AdminLayout';
import UiLabelManagement from './components/UiLabelManagement';
import UiLabelExample from './components/UiLabelExample';
import UiLabelExplorer from './components/UiLabelExplorer';
import { PageHeader } from '@/components/ui/page-header';

export default function UiLabelsPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Check if user has admin privileges
  // For development/testing purposes, allow all authenticated users to access
  // In production, uncomment the role check
  // const isAdmin = user?.role === 'admin';
  const isAdmin = true; // Temporary override for testing
  
  if (!isAdmin) {
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-muted-foreground mt-2">
          You do not have permission to access this page.
        </p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>UI Labels Management - DAC Admin</title>
      </Helmet>
      
      <AdminLayout>
        <div className="space-y-6">
          <PageHeader
            title="UI Labels"
            description="Customize text labels across the platform for white-labeling"
            icon={<Tags className="h-6 w-6" />}
          />
          
          <Separator />
          
          <Tabs defaultValue="management" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-2">
              <TabsTrigger value="management">Traditional Management</TabsTrigger>
              <TabsTrigger value="explorer">Visual Explorer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="management" className="space-y-4 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <UiLabelManagement />
                </div>
                <div className="lg:col-span-1">
                  <UiLabelExample />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="explorer" className="space-y-4 mt-6">
              <UiLabelExplorer />
              <div className="mt-4">
                <UiLabelExample isMinimal />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </AdminLayout>
    </>
  );
}
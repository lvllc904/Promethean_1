import React from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/hooks/use-auth';
import { Loader2, Tags } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import AdminLayout from './components/AdminLayout';
import UiLabelManagement from './components/UiLabelManagement';
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
  const isAdmin = user?.role === 'admin';
  
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
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <UiLabelManagement />
              </div>
              <div className="lg:col-span-1">
                <UiLabelExample />
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
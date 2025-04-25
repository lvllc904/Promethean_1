import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { insertServiceIntegrationSchema } from '@shared/schema';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, PuzzleIcon, Activity, Settings, PauseCircle, PlayCircle, Trash2, Plus, Link2, Bell, RefreshCw } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Extend the insert schema for Service Integrations
const serviceIntegrationSchema = insertServiceIntegrationSchema.extend({
  name: z.string().min(3, "Name must be at least 3 characters"),
  providerId: z.number().min(1, "Please select a provider"),
  // Allow credentialId to be a number or null
  // This will be handled in the onSubmit function
  credentialId: z.number().min(0).nullable(),
  settings: z.any().optional(),
  webhookUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  callbackUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  usageQuota: z.number().int().nonnegative().optional(),
});

type ServiceIntegrationFormValues = z.infer<typeof serviceIntegrationSchema>;

const ServiceIntegrations = () => {
  const { toast } = useToast();
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editingIntegration, setEditingIntegration] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('all');
  
  // Fetch all service integrations
  const { data: integrations, isLoading: isLoadingIntegrations, error: integrationsError } = useQuery({
    queryKey: ['/api/admin/service-integrations'],
    retry: 1,
  });
  
  // Fetch all providers for dropdown
  const { data: providers, isLoading: isLoadingProviders } = useQuery({
    queryKey: ['/api/admin/service-providers'],
    retry: 1,
  });
  
  // Fetch all credentials for dropdown
  const { data: credentials, isLoading: isLoadingCredentials } = useQuery({
    queryKey: ['/api/admin/api-credentials'],
    retry: 1,
  });
  
  // Create new service integration
  const addIntegrationMutation = useMutation({
    mutationFn: (newIntegration: ServiceIntegrationFormValues) => 
      apiRequest<{id: number}>('POST', '/api/admin/service-integrations', newIntegration),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-integrations'] });
      setAddDialogOpen(false);
      toast({
        title: "Integration Added",
        description: "Service integration has been added successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to add integration",
        description: error.message || "An error occurred while adding the integration.",
        variant: "destructive",
      });
    }
  });
  
  // Update service integration
  const updateIntegrationMutation = useMutation({
    mutationFn: ({ id, data }: { id: number, data: Partial<ServiceIntegrationFormValues> }) => 
      apiRequest<{success: boolean}>('PATCH', `/api/admin/service-integrations/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-integrations'] });
      setEditingIntegration(null);
      setAddDialogOpen(false);
      toast({
        title: "Integration Updated",
        description: "Service integration has been updated successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to update integration",
        description: error.message || "An error occurred while updating the integration.",
        variant: "destructive",
      });
    }
  });
  
  // Delete service integration
  const deleteIntegrationMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest<{success: boolean}>('DELETE', `/api/admin/service-integrations/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-integrations'] });
      toast({
        title: "Integration Deleted",
        description: "Service integration has been deleted successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to delete integration",
        description: error.message || "An error occurred while deleting the integration.",
        variant: "destructive",
      });
    }
  });
  
  // Toggle integration active status
  const toggleIntegrationStatusMutation = useMutation({
    mutationFn: ({ id, isActive }: { id: number, isActive: boolean }) => 
      apiRequest<{success: boolean}>('PATCH', `/api/admin/service-integrations/${id}/status`, { isActive }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-integrations'] });
      toast({
        title: "Status Updated",
        description: "Integration status has been updated successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to update status",
        description: error.message || "An error occurred while updating the status.",
        variant: "destructive",
      });
    }
  });
  
  // Test integration
  const testIntegrationMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest<{success: boolean, message: string}>('POST', `/api/admin/service-integrations/${id}/test`),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-integrations'] });
      toast({
        title: data.success ? "Test Successful" : "Test Failed",
        description: data.message,
        variant: data.success ? "default" : "destructive",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Test Failed",
        description: error.message || "An error occurred while testing the integration.",
        variant: "destructive",
      });
    }
  });
  
  // Reset usage count
  const resetUsageCountMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest<{success: boolean}>('POST', `/api/admin/service-integrations/${id}/reset-usage`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-integrations'] });
      toast({
        title: "Usage Count Reset",
        description: "Integration usage count has been reset successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to reset usage count",
        description: error.message || "An error occurred while resetting the usage count.",
        variant: "destructive",
      });
    }
  });
  
  // Form for adding/editing integrations
  const form = useForm<ServiceIntegrationFormValues>({
    resolver: zodResolver(serviceIntegrationSchema),
    defaultValues: {
      name: "",
      providerId: undefined,
      credentialId: undefined,
      settings: {},
      webhookUrl: "",
      callbackUrl: "",
      usageQuota: undefined,
    },
  });
  
  const onSubmit = (values: ServiceIntegrationFormValues) => {
    // Convert settings to proper JSON object if it's a string
    if (typeof values.settings === 'string') {
      try {
        values.settings = JSON.parse(values.settings);
      } catch (e) {
        toast({
          title: "Invalid Settings Format",
          description: "Please enter valid JSON for settings.",
          variant: "destructive",
        });
        return;
      }
    }
    
    // Handle the special case where credentialId was set to 0 (our workaround for the undefined type issue)
    const submissionValues = {
      ...values,
      // If credentialId is 0, it means it wasn't actually selected and should be null in the backend
      credentialId: values.credentialId === 0 ? null : values.credentialId
    };
    
    if (editingIntegration) {
      updateIntegrationMutation.mutate({ 
        id: editingIntegration.id, 
        data: submissionValues 
      });
    } else {
      addIntegrationMutation.mutate(submissionValues);
    }
  };
  
  const handleProviderChange = (providerId: number) => {
    form.setValue('providerId', providerId);
    
    // Filter credentials by the selected provider
    const providerCredentials = credentials && Array.isArray(credentials) ? 
      credentials.filter((cred) => cred.providerId === providerId) : [];
    
    // If there's only one credential, select it
    if (providerCredentials.length === 1) {
      form.setValue('credentialId', providerCredentials[0].id);
    } else {
      // Clear the credential selection by passing a number type
      // This is a workaround for the type issue with undefined
      form.setValue('credentialId', 0);
      
      // On form submission we'll check for this value and handle it appropriately
      // This is safer than modifying the schema or forcing undefined/null which can cause type issues
    }
  };
  
  const handleEditIntegration = (integration: any) => {
    setEditingIntegration(integration);
    form.reset({
      name: integration.name,
      providerId: integration.providerId,
      credentialId: integration.credentialId,
      settings: integration.settings || {},
      webhookUrl: integration.webhookUrl || "",
      callbackUrl: integration.callbackUrl || "",
      usageQuota: integration.usageQuota,
    });
    setAddDialogOpen(true);
  };
  
  const closeDialog = () => {
    setAddDialogOpen(false);
    setEditingIntegration(null);
    form.reset();
  };
  
  // Filter available credentials based on selected provider
  const filteredCredentials = form.watch('providerId') && credentials && Array.isArray(credentials) 
    ? credentials.filter((cred) => cred.providerId === form.watch('providerId'))
    : [];
  
  if (isLoadingIntegrations || isLoadingProviders || isLoadingCredentials) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Service Integrations</CardTitle>
          <CardDescription>Configure and manage active service integrations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (integrationsError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Service Integrations</CardTitle>
          <CardDescription>Configure and manage active service integrations</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to load service integrations. Please try again later.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }
  
  // Filter integrations based on active tab
  const filteredIntegrations = integrations && Array.isArray(integrations) ? (
    activeTab === 'all' 
      ? integrations
      : activeTab === 'active'
        ? integrations.filter((i) => i.isActive)
        : integrations.filter((i) => !i.isActive)
  ) : [];
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Service Integrations</CardTitle>
          <CardDescription>Configure and manage active service integrations</CardDescription>
        </div>
        <Button onClick={() => setAddDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Integration
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Status Tabs */}
        <Tabs 
          defaultValue="all" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 w-[300px] mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* Integration List */}
        {filteredIntegrations && filteredIntegrations.length === 0 ? (
          <div className="text-center py-8">
            <PuzzleIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium">No Service Integrations</h3>
            <p className="text-muted-foreground mt-2 mb-4">
              Add integrations to connect external services to your platform.
            </p>
            <Button onClick={() => setAddDialogOpen(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Create First Integration
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredIntegrations && filteredIntegrations.map((integration) => {
              const provider = providers && Array.isArray(providers) ? 
                providers.find((p) => p.id === integration.providerId) : 
                undefined;
              const credential = credentials && Array.isArray(credentials) ? 
                credentials.find((c) => c.id === integration.credentialId) : 
                undefined;
              
              return (
                <Card key={integration.id} className={`${integration.isActive ? 'border-gray-200' : 'border-red-200 bg-red-50'}`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-base">{integration.name}</CardTitle>
                        <CardDescription className="text-xs">
                          {provider ? provider.name : 'Unknown Provider'}
                          {credential && ` • ${credential.name}`}
                        </CardDescription>
                      </div>
                      <Badge variant={integration.isActive ? "outline" : "secondary"} className={integration.isActive ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}>
                        {integration.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pb-3">
                    {integration.lastError && (
                      <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Last Error</AlertTitle>
                        <AlertDescription className="text-xs truncate">
                          {integration.lastError}
                        </AlertDescription>
                      </Alert>
                    )}
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs">Usage</p>
                        <p className="font-medium">
                          {integration.usageCount || 0} 
                          {integration.usageQuota ? ` / ${integration.usageQuota}` : ''}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-muted-foreground text-xs">Last Successful</p>
                        <p className="font-medium">
                          {integration.lastSuccessful 
                            ? new Date(integration.lastSuccessful).toLocaleDateString()
                            : 'Never'}
                        </p>
                      </div>
                      
                      {integration.webhookUrl && (
                        <div className="col-span-2">
                          <p className="text-muted-foreground text-xs">Webhook</p>
                          <p className="font-medium truncate">{integration.webhookUrl}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => testIntegrationMutation.mutate(integration.id)}
                      disabled={testIntegrationMutation.isPending}
                      title="Test this integration"
                    >
                      Test
                    </Button>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => toggleIntegrationStatusMutation.mutate({ id: integration.id, isActive: !integration.isActive })}
                        disabled={toggleIntegrationStatusMutation.isPending}
                        title={integration.isActive ? "Disable integration" : "Enable integration"}
                      >
                        {integration.isActive 
                          ? <PauseCircle className="h-4 w-4" /> 
                          : <PlayCircle className="h-4 w-4" />}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => resetUsageCountMutation.mutate(integration.id)}
                        disabled={resetUsageCountMutation.isPending}
                        title="Reset usage count"
                      >
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => handleEditIntegration(integration)}
                        title="Edit integration"
                      >
                        <Settings className="h-4 w-4" />
                      </Button>
                      
                      <Button 
                        variant="destructive" 
                        size="icon" 
                        onClick={() => {
                          if (confirm("Are you sure you want to delete this integration?")) {
                            deleteIntegrationMutation.mutate(integration.id);
                          }
                        }}
                        title="Delete integration"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </CardContent>
      
      {/* Add/Edit Integration Dialog */}
      <Dialog open={addDialogOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {editingIntegration ? "Edit Service Integration" : "Add Service Integration"}
            </DialogTitle>
            <DialogDescription>
              {editingIntegration 
                ? "Update the details of this service integration" 
                : "Configure a new integration using an available service provider"}
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Integration Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Production OpenAI Integration" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="providerId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Provider</FormLabel>
                      <Select 
                        onValueChange={(value) => handleProviderChange(parseInt(value))}
                        value={field.value?.toString()}
                        disabled={!!editingIntegration}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a provider" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {providers && Array.isArray(providers) && providers.map((provider) => (
                            <SelectItem key={provider.id} value={provider.id.toString()}>
                              {provider.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        {editingIntegration ? "Provider cannot be changed" : "Select service provider for this integration"}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="credentialId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>API Credential</FormLabel>
                      <Select 
                        onValueChange={(value) => field.onChange(parseInt(value))}
                        value={field.value?.toString()}
                        disabled={!form.watch('providerId') || filteredCredentials.length === 0}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={
                              !form.watch('providerId') 
                                ? "Select a provider first" 
                                : filteredCredentials.length === 0
                                  ? "No credentials available"
                                  : "Select a credential"
                            } />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {filteredCredentials.map((credential) => (
                            <SelectItem key={credential.id} value={credential.id.toString()}>
                              {credential.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        {filteredCredentials.length === 0 && form.watch('providerId') && (
                          <span className="text-red-500">No credentials available for this provider. Add credentials first.</span>
                        )}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="settings"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Integration Settings (JSON)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder='{"setting1": "value1", "setting2": "value2"}'
                        value={typeof field.value === 'object' ? JSON.stringify(field.value, null, 2) : field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="font-mono text-sm"
                        rows={5}
                      />
                    </FormControl>
                    <FormDescription>
                      Integration-specific settings in JSON format
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="webhookUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Webhook URL (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/webhook" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="callbackUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Callback URL (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/callback" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="usageQuota"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usage Quota (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min={0} 
                        step={1} 
                        placeholder="Leave empty for unlimited"
                        {...field} 
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e.target.value === '' ? undefined : parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>
                      Maximum number of calls allowed for this integration (0 or empty for unlimited)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={closeDialog}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  disabled={
                    addIntegrationMutation.isPending || 
                    updateIntegrationMutation.isPending
                  }
                >
                  {editingIntegration ? "Update Integration" : "Create Integration"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ServiceIntegrations;
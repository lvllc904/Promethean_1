import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { insertServiceProviderSchema } from '@shared/schema';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { AlertCircle, Boxes, Server, Globe, ExternalLink, Edit2, Trash2, Plus, Database, Link as LinkIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Extend the insert schema for Service Providers
const serviceProviderSchema = insertServiceProviderSchema.extend({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().optional(),
  categoryId: z.number().min(1, "Please select a category"),
  logoUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  documentationUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  apiBaseUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  isRapidApi: z.boolean().default(false),
  authType: z.string().min(1, "Please select an authentication type"),
  requiredFields: z.any().optional(),
});

type ServiceProviderFormValues = z.infer<typeof serviceProviderSchema>;

const authTypes = [
  { value: 'api_key', label: 'API Key' },
  { value: 'oauth2', label: 'OAuth 2.0' },
  { value: 'bearer', label: 'Bearer Token' },
  { value: 'basic', label: 'Basic Auth' },
  { value: 'none', label: 'No Authentication' }
];

const ServiceProviders = () => {
  const { toast } = useToast();
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editingProvider, setEditingProvider] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  
  // Fetch all service providers
  const { data: providers, isLoading: isLoadingProviders, error: providersError } = useQuery({
    queryKey: ['/api/admin/service-providers'],
    retry: 1,
  });
  
  // Fetch all categories for dropdown
  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['/api/admin/service-categories'],
    retry: 1,
  });
  
  // Create new service provider
  const addProviderMutation = useMutation({
    mutationFn: (newProvider: ServiceProviderFormValues) => 
      apiRequest<{id: number}>('POST', '/api/admin/service-providers', newProvider),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-providers'] });
      setAddDialogOpen(false);
      toast({
        title: "Provider Added",
        description: "Service provider has been added successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to add provider",
        description: error.message || "An error occurred while adding the provider.",
        variant: "destructive",
      });
    }
  });
  
  // Update service provider
  const updateProviderMutation = useMutation({
    mutationFn: ({ id, data }: { id: number, data: Partial<ServiceProviderFormValues> }) => 
      apiRequest<{success: boolean}>('PATCH', `/api/admin/service-providers/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-providers'] });
      setEditingProvider(null);
      setAddDialogOpen(false);
      toast({
        title: "Provider Updated",
        description: "Service provider has been updated successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to update provider",
        description: error.message || "An error occurred while updating the provider.",
        variant: "destructive",
      });
    }
  });
  
  // Delete service provider
  const deleteProviderMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest<{success: boolean}>('DELETE', `/api/admin/service-providers/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-providers'] });
      toast({
        title: "Provider Deleted",
        description: "Service provider has been deleted successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to delete provider",
        description: error.message || "An error occurred while deleting the provider.",
        variant: "destructive",
      });
    }
  });
  
  // Toggle provider active status
  const toggleProviderStatusMutation = useMutation({
    mutationFn: ({ id, isActive }: { id: number, isActive: boolean }) => 
      apiRequest<{success: boolean}>('PATCH', `/api/admin/service-providers/${id}/status`, { isActive }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-providers'] });
      toast({
        title: "Status Updated",
        description: "Provider status has been updated successfully.",
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
  
  // Form for adding/editing providers
  const form = useForm<ServiceProviderFormValues>({
    resolver: zodResolver(serviceProviderSchema),
    defaultValues: {
      name: "",
      description: "",
      categoryId: undefined,
      logoUrl: "",
      website: "",
      documentationUrl: "",
      apiBaseUrl: "",
      isRapidApi: false,
      authType: "",
      requiredFields: {},
    },
  });
  
  const onSubmit = (values: ServiceProviderFormValues) => {
    // Convert requiredFields to proper JSON object if it's a string
    if (typeof values.requiredFields === 'string') {
      try {
        values.requiredFields = JSON.parse(values.requiredFields);
      } catch (e) {
        toast({
          title: "Invalid Required Fields Format",
          description: "Please enter valid JSON for required fields.",
          variant: "destructive",
        });
        return;
      }
    }
    
    if (editingProvider) {
      updateProviderMutation.mutate({ 
        id: editingProvider.id, 
        data: values 
      });
    } else {
      addProviderMutation.mutate(values);
    }
  };
  
  const handleEditProvider = (provider: any) => {
    setEditingProvider(provider);
    form.reset({
      name: provider.name,
      description: provider.description || "",
      categoryId: provider.categoryId,
      logoUrl: provider.logoUrl || "",
      website: provider.website || "",
      documentationUrl: provider.documentationUrl || "",
      apiBaseUrl: provider.apiBaseUrl || "",
      isRapidApi: provider.isRapidApi || false,
      authType: provider.authType,
      requiredFields: provider.requiredFields || {},
    });
    setAddDialogOpen(true);
  };
  
  const closeDialog = () => {
    setAddDialogOpen(false);
    setEditingProvider(null);
    form.reset();
  };
  
  if (isLoadingProviders || isLoadingCategories) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Service Providers</CardTitle>
          <CardDescription>Manage external service providers for integrations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (providersError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Service Providers</CardTitle>
          <CardDescription>Manage external service providers for integrations</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to load service providers. Please try again later.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }
  
  // Filter providers by category if a category is selected
  const filteredProviders = providers && Array.isArray(providers) ? (
    activeCategory 
      ? providers.filter((provider: any) => provider.categoryId === activeCategory)
      : providers
  ) : [];
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Service Providers</CardTitle>
          <CardDescription>Manage external service providers for integrations</CardDescription>
        </div>
        <Button onClick={() => setAddDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Provider
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Category Tabs */}
        {categories && Array.isArray(categories) && categories.length > 0 && (
          <Tabs 
            defaultValue="all" 
            onValueChange={(value) => setActiveCategory(value === 'all' ? null : parseInt(value))}
            className="w-full"
          >
            <TabsList className="flex flex-wrap h-auto">
              <TabsTrigger value="all" className="mb-1">All Categories</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id.toString()}
                  className="mb-1"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}
        
        {/* Provider Listing */}
        {filteredProviders && filteredProviders.length === 0 ? (
          <div className="text-center py-8">
            <Server className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium">No Service Providers</h3>
            <p className="text-muted-foreground mt-2 mb-4">
              Add service providers to enable integrations with external services.
            </p>
            <Button onClick={() => setAddDialogOpen(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Add First Provider
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProviders && filteredProviders.map((provider) => {
              const category = categories && Array.isArray(categories) ? 
                categories.find((c) => c.id === provider.categoryId) : 
                undefined;
              return (
                <Card key={provider.id} className={`${provider.isActive ? 'border-gray-200' : 'border-red-200 bg-red-50'}`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        {provider.logoUrl ? (
                          <img 
                            src={provider.logoUrl} 
                            alt={provider.name} 
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <Boxes className="h-8 w-8 text-muted-foreground" />
                        )}
                        <div>
                          <CardTitle className="text-base">{provider.name}</CardTitle>
                          <CardDescription className="text-xs">
                            {category ? category.name : 'Uncategorized'}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant={provider.isActive ? "outline" : "secondary"} className={provider.isActive ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}>
                        {provider.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-sm text-muted-foreground mb-3">
                      {provider.description || "No description provided"}
                    </p>
                    
                    <div className="text-xs space-y-2">
                      {provider.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="h-3 w-3 text-muted-foreground" />
                          <a 
                            href={provider.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline truncate"
                          >
                            {provider.website}
                          </a>
                        </div>
                      )}
                      
                      {provider.documentationUrl && (
                        <div className="flex items-center gap-2">
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          <a 
                            href={provider.documentationUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline truncate"
                          >
                            Documentation
                          </a>
                        </div>
                      )}
                      
                      {provider.apiBaseUrl && (
                        <div className="flex items-center gap-2">
                          <LinkIcon className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground truncate">
                            {provider.apiBaseUrl}
                          </span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2">
                        <Database className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Auth: {authTypes.find(a => a.value === provider.authType)?.label || provider.authType}
                        </span>
                      </div>
                      
                      {provider.isRapidApi && (
                        <Badge variant="secondary" className="text-xs mt-2">
                          RapidAPI
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => toggleProviderStatusMutation.mutate({ id: provider.id, isActive: !provider.isActive })}
                      disabled={toggleProviderStatusMutation.isPending}
                    >
                      {provider.isActive ? "Disable" : "Enable"}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleEditProvider(provider)}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => {
                        if (confirm("Are you sure you want to delete this provider?")) {
                          deleteProviderMutation.mutate(provider.id);
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </CardContent>
      
      {/* Add/Edit Provider Dialog */}
      <Dialog open={addDialogOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {editingProvider ? "Edit Service Provider" : "Add Service Provider"}
            </DialogTitle>
            <DialogDescription>
              {editingProvider 
                ? "Update the details of this service provider" 
                : "Add a new external service provider for integration"}
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Provider Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. OpenAI" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="categoryId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select 
                        onValueChange={(value) => field.onChange(parseInt(value))}
                        value={field.value?.toString()}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories && Array.isArray(categories) && categories.map((category) => (
                            <SelectItem key={category.id} value={category.id.toString()}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter a description for this service provider" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="logoUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Logo URL (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/logo.png" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="documentationUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Documentation URL (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://docs.example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="apiBaseUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>API Base URL (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://api.example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="authType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Authentication Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select auth type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {authTypes.map((authType) => (
                            <SelectItem key={authType.value} value={authType.value}>
                              {authType.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="isRapidApi"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          RapidAPI Integration
                        </FormLabel>
                        <FormDescription>
                          This service is available through RapidAPI
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="requiredFields"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Required Fields (JSON)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder='{"field1": "description", "field2": "description"}'
                        value={typeof field.value === 'object' ? JSON.stringify(field.value, null, 2) : field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                    </FormControl>
                    <FormDescription>
                      JSON object describing the fields required for configuration
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
                    addProviderMutation.isPending || 
                    updateProviderMutation.isPending
                  }
                >
                  {editingProvider ? "Update Provider" : "Add Provider"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ServiceProviders;
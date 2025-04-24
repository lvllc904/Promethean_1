import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { insertApiCredentialSchema } from '@shared/schema';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { AlertCircle, CheckCircle2, KeyRound, EyeOff, Eye, Pencil, Trash2, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Extend the insert schema for API credentials
const apiCredentialSchema = insertApiCredentialSchema.extend({
  providerId: z.number().min(1, "Please select a service provider"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  apiKey: z.string().optional(),
  apiSecret: z.string().optional(),
  accessToken: z.string().optional(),
  refreshToken: z.string().optional(),
  additionalSettings: z.any().optional(),
});

type ApiCredentialFormValues = z.infer<typeof apiCredentialSchema>;

const ApiCredentials = () => {
  const { toast } = useToast();
  const [showSecret, setShowSecret] = useState<Record<number, boolean>>({});
  const [editMode, setEditMode] = useState<number | null>(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  
  // Fetch all API credentials
  const { data: credentials, isLoading: isLoadingCredentials, error: credentialsError } = useQuery({
    queryKey: ['/api/admin/credentials'],
    retry: 1,
  });
  
  // Fetch service providers for dropdown
  const { data: providers, isLoading: isLoadingProviders } = useQuery({
    queryKey: ['/api/admin/providers'],
    retry: 1,
  });
  
  // Create new API credential
  const addCredentialMutation = useMutation({
    mutationFn: (newCredential: ApiCredentialFormValues) => 
      apiRequest('/api/admin/credentials', { method: 'POST', data: newCredential }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/credentials'] });
      setAddDialogOpen(false);
      toast({
        title: "Credential Added",
        description: "API credential has been added successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to add credential",
        description: error.message || "An error occurred while adding the credential.",
        variant: "destructive",
      });
    }
  });
  
  // Update API credential
  const updateCredentialMutation = useMutation({
    mutationFn: ({ id, data }: { id: number, data: Partial<ApiCredentialFormValues> }) => 
      apiRequest(`/api/admin/credentials/${id}`, { method: 'PATCH', data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/credentials'] });
      setEditMode(null);
      toast({
        title: "Credential Updated",
        description: "API credential has been updated successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to update credential",
        description: error.message || "An error occurred while updating the credential.",
        variant: "destructive",
      });
    }
  });
  
  // Delete API credential
  const deleteCredentialMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest(`/api/admin/credentials/${id}`, { method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/credentials'] });
      toast({
        title: "Credential Deleted",
        description: "API credential has been deleted successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to delete credential",
        description: error.message || "An error occurred while deleting the credential.",
        variant: "destructive",
      });
    }
  });
  
  // Test API credential
  const testCredentialMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest(`/api/admin/credentials/${id}/test`, { method: 'POST' }),
    onSuccess: (data, id) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/credentials'] });
      toast({
        title: data.success ? "Test Successful" : "Test Failed",
        description: data.message,
        variant: data.success ? "default" : "destructive",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Test Failed",
        description: error.message || "An error occurred while testing the credential.",
        variant: "destructive",
      });
    }
  });
  
  // Form for adding new credentials
  const form = useForm<ApiCredentialFormValues>({
    resolver: zodResolver(apiCredentialSchema),
    defaultValues: {
      name: "",
      providerId: undefined,
      apiKey: "",
      apiSecret: "",
      accessToken: "",
      refreshToken: "",
      additionalSettings: {},
    },
  });
  
  const onSubmit = (values: ApiCredentialFormValues) => {
    addCredentialMutation.mutate(values);
  };
  
  const toggleSecretVisibility = (id: number) => {
    setShowSecret(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const startEdit = (credential: any) => {
    setEditMode(credential.id);
    form.reset({
      name: credential.name,
      providerId: credential.providerId,
      apiKey: credential.apiKey,
      apiSecret: credential.apiSecret,
      accessToken: credential.accessToken,
      refreshToken: credential.refreshToken,
      additionalSettings: credential.additionalSettings,
    });
  };
  
  const cancelEdit = () => {
    setEditMode(null);
    form.reset();
  };
  
  if (isLoadingCredentials || isLoadingProviders) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>API Credentials</CardTitle>
          <CardDescription>Manage API keys and authentication tokens for external services</CardDescription>
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
  
  if (credentialsError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>API Credentials</CardTitle>
          <CardDescription>Manage API keys and authentication tokens for external services</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to load API credentials. Please try again later.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>API Credentials</CardTitle>
          <CardDescription>Manage API keys and authentication tokens for external services</CardDescription>
        </div>
        <Button onClick={() => setAddDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Credential
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {credentials && credentials.length === 0 ? (
          <div className="text-center py-8">
            <KeyRound className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium">No API Credentials</h3>
            <p className="text-muted-foreground mt-2 mb-4">
              Add API credentials to connect external services to your platform.
            </p>
            <Button onClick={() => setAddDialogOpen(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Add First Credential
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {credentials && credentials.map((credential: any) => (
              <Card key={credential.id} className={`${credential.isActive ? 'border-gray-200' : 'border-red-200 bg-red-50'}`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium">{credential.name}</h3>
                      {credential.testResult === true && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Verified
                        </Badge>
                      )}
                      {credential.testResult === false && (
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          Failed
                        </Badge>
                      )}
                      {!credential.isActive && (
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          Inactive
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => startEdit(credential)}
                        className="gap-1"
                      >
                        <Pencil className="h-3 w-3" />
                        Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => testCredentialMutation.mutate(credential.id)}
                        disabled={testCredentialMutation.isPending}
                      >
                        Test
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        onClick={() => {
                          if (confirm("Are you sure you want to delete this credential?")) {
                            deleteCredentialMutation.mutate(credential.id);
                          }
                        }}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Provider: {providers?.find((p: any) => p.id === credential.providerId)?.name || 'Unknown'}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {credential.apiKey && (
                      <div className="space-y-1">
                        <p className="text-sm font-medium">API Key</p>
                        <div className="flex items-center gap-2">
                          <Input 
                            value={showSecret[credential.id] ? credential.apiKey : '•'.repeat(16)} 
                            readOnly 
                            className="font-mono"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleSecretVisibility(credential.id)}
                          >
                            {showSecret[credential.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {credential.apiSecret && (
                      <div className="space-y-1">
                        <p className="text-sm font-medium">API Secret</p>
                        <Input 
                          value={showSecret[credential.id] ? credential.apiSecret : '•'.repeat(16)} 
                          readOnly 
                          className="font-mono"
                        />
                      </div>
                    )}
                    
                    {credential.accessToken && (
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Access Token</p>
                        <Input 
                          value={showSecret[credential.id] ? credential.accessToken : '•'.repeat(16)} 
                          readOnly 
                          className="font-mono"
                        />
                      </div>
                    )}
                  </div>
                  
                  {credential.lastTested && (
                    <div className="mt-4 text-sm text-muted-foreground">
                      Last tested: {new Date(credential.lastTested).toLocaleString()}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
      
      {/* Add New Credential Dialog */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent className="sm:max-w-[540px]">
          <DialogHeader>
            <DialogTitle>Add API Credential</DialogTitle>
            <DialogDescription>
              Add a new API credential for an external service. 
              All credentials are securely stored and encrypted.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Credential Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Production OpenAI Key" {...field} />
                    </FormControl>
                    <FormDescription>
                      Give this credential a recognizable name for your reference
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="providerId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Provider</FormLabel>
                    <Select 
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      value={field.value?.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a provider" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {providers && providers.map((provider: any) => (
                          <SelectItem key={provider.id} value={provider.id.toString()}>
                            {provider.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select the service provider this credential is for
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="apiKey"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>API Key</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter API key" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="apiSecret"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>API Secret (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter API secret if required" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="accessToken"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Access Token (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter access token if using OAuth" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setAddDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  disabled={addCredentialMutation.isPending}
                >
                  {addCredentialMutation.isPending ? "Saving..." : "Save Credential"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ApiCredentials;
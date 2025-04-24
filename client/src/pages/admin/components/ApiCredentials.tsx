import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Loader2, PlusCircle, Pencil, Trash2, CheckCircle, XCircle, Play, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ApiCredential {
  id: number;
  name: string;
  providerId: number;
  hasApiKey: boolean;
  hasApiSecret: boolean;
  hasAccessToken: boolean;
  hasRefreshToken: boolean;
  isActive: boolean;
  lastTested: string | null;
  testResult: boolean | null;
  additionalSettings: Record<string, any> | null;
}

interface ServiceProvider {
  id: number;
  name: string;
  authType: string;
  requiredFields: string[] | null;
}

export default function ApiCredentials() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedCredential, setSelectedCredential] = useState<ApiCredential | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    providerId: '',
    apiKey: '',
    apiSecret: '',
    accessToken: '',
    refreshToken: '',
    additionalSettings: ''
  });
  
  // Fetch credentials
  const { data: credentials, isLoading: isLoadingCredentials } = useQuery({
    queryKey: ['/api/admin/api-credentials'],
    retry: 1,
  });
  
  // Fetch providers for dropdown
  const { data: providers, isLoading: isLoadingProviders } = useQuery({
    queryKey: ['/api/admin/service-providers'],
    retry: 1,
  });
  
  // Find current provider
  const selectedProvider = providers?.find((p: ServiceProvider) => 
    p.id === (typeof formData.providerId === 'string' 
      ? parseInt(formData.providerId) 
      : formData.providerId)
  );
  
  // Add credential mutation
  const addMutation = useMutation({
    mutationFn: (newCredential: any) => {
      // Parse additionalSettings if it's a string
      if (typeof newCredential.additionalSettings === 'string' && newCredential.additionalSettings.trim()) {
        try {
          newCredential.additionalSettings = JSON.parse(newCredential.additionalSettings);
        } catch (e) {
          throw new Error('Invalid JSON in additional settings');
        }
      } else if (typeof newCredential.additionalSettings === 'string') {
        newCredential.additionalSettings = null;
      }
      
      return apiRequest('/api/admin/api-credentials', {
        method: 'POST',
        data: newCredential,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/api-credentials'] });
      toast({
        title: 'Success',
        description: 'API credential added successfully',
      });
      setIsAddDialogOpen(false);
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to add API credential. Please try again.',
        variant: 'destructive',
      });
    },
  });
  
  // Update credential mutation
  const updateMutation = useMutation({
    mutationFn: ({ id, ...data }: { id: number, [key: string]: any }) => {
      // Parse additionalSettings if it's a string
      if (typeof data.additionalSettings === 'string' && data.additionalSettings.trim()) {
        try {
          data.additionalSettings = JSON.parse(data.additionalSettings);
        } catch (e) {
          throw new Error('Invalid JSON in additional settings');
        }
      } else if (typeof data.additionalSettings === 'string') {
        data.additionalSettings = null;
      }
      
      return apiRequest(`/api/admin/api-credentials/${id}`, {
        method: 'PATCH',
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/api-credentials'] });
      toast({
        title: 'Success',
        description: 'API credential updated successfully',
      });
      setIsEditDialogOpen(false);
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to update API credential. Please try again.',
        variant: 'destructive',
      });
    },
  });
  
  // Delete credential mutation
  const deleteMutation = useMutation({
    mutationFn: (id: number) => {
      return apiRequest(`/api/admin/api-credentials/${id}`, {
        method: 'DELETE',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/api-credentials'] });
      toast({
        title: 'Success',
        description: 'API credential deleted successfully',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to delete API credential. Please try again.',
        variant: 'destructive',
      });
    },
  });
  
  // Test credential mutation
  const testMutation = useMutation({
    mutationFn: (id: number) => {
      return apiRequest(`/api/admin/api-credentials/${id}/test`, {
        method: 'POST',
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/api-credentials'] });
      toast({
        title: data.success ? 'Test Successful' : 'Test Failed',
        description: data.message,
        variant: data.success ? 'default' : 'destructive',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to test API credential. Please try again.',
        variant: 'destructive',
      });
    },
  });
  
  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      providerId: '',
      apiKey: '',
      apiSecret: '',
      accessToken: '',
      refreshToken: '',
      additionalSettings: ''
    });
    setSelectedCredential(null);
  };
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Open edit dialog
  const handleEditClick = (credential: ApiCredential) => {
    // First, fetch the full credential (including secrets if we need to show them)
    apiRequest(`/api/admin/api-credentials/${credential.id}`, {
      method: 'GET',
    }).then((data) => {
      setSelectedCredential(credential);
      setFormData({
        name: credential.name,
        providerId: credential.providerId.toString(),
        apiKey: '',  // We don't show existing secrets for security
        apiSecret: '',
        accessToken: '',
        refreshToken: '',
        additionalSettings: data.additionalSettings 
          ? JSON.stringify(data.additionalSettings, null, 2) 
          : ''
      });
      setIsEditDialogOpen(true);
    }).catch(() => {
      toast({
        title: 'Error',
        description: 'Failed to fetch credential details',
        variant: 'destructive',
      });
    });
  };
  
  // Handle add form submission
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMutation.mutate({
      name: formData.name,
      providerId: parseInt(formData.providerId),
      apiKey: formData.apiKey || null,
      apiSecret: formData.apiSecret || null,
      accessToken: formData.accessToken || null,
      refreshToken: formData.refreshToken || null,
      additionalSettings: formData.additionalSettings
    });
  };
  
  // Handle edit form submission
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCredential) return;
    
    const updateData: Record<string, any> = {
      id: selectedCredential.id,
      name: formData.name,
      providerId: parseInt(formData.providerId),
      additionalSettings: formData.additionalSettings
    };
    
    // Only include secrets if they were changed
    if (formData.apiKey) updateData.apiKey = formData.apiKey;
    if (formData.apiSecret) updateData.apiSecret = formData.apiSecret;
    if (formData.accessToken) updateData.accessToken = formData.accessToken;
    if (formData.refreshToken) updateData.refreshToken = formData.refreshToken;
    
    updateMutation.mutate(updateData);
  };
  
  // Handle delete
  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this API credential?')) {
      deleteMutation.mutate(id);
    }
  };
  
  // Handle test
  const handleTest = (id: number) => {
    testMutation.mutate(id);
  };
  
  if (isLoadingCredentials || isLoadingProviders) {
    return <div className="flex justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">API Credentials</h3>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setIsAddDialogOpen(true); }}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Credential
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New API Credential</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddSubmit} className="space-y-4 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="My API Credential"
                  required
                />
                <p className="text-sm text-muted-foreground">
                  Give this credential a descriptive name for easy identification
                </p>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="providerId">Service Provider</Label>
                <Select name="providerId" value={formData.providerId} onValueChange={(value) => handleSelectChange('providerId', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a provider" />
                  </SelectTrigger>
                  <SelectContent>
                    {providers && providers.map((provider: ServiceProvider) => (
                      <SelectItem key={provider.id} value={provider.id.toString()}>
                        {provider.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {selectedProvider && (
                <Alert>
                  <AlertDescription>
                    This provider uses <Badge variant="outline">{selectedProvider.authType}</Badge> authentication
                  </AlertDescription>
                </Alert>
              )}
              
              {/* Dynamic credential fields based on provider auth type */}
              {selectedProvider && (
                <div className="space-y-4 border rounded-md p-4">
                  {selectedProvider.authType === 'api_key' && (
                    <div className="grid gap-2">
                      <Label htmlFor="apiKey">API Key</Label>
                      <Input
                        id="apiKey"
                        name="apiKey"
                        value={formData.apiKey}
                        onChange={handleInputChange}
                        type="password"
                        placeholder="Your API key"
                        required
                      />
                    </div>
                  )}
                  
                  {selectedProvider.authType === 'api_key_secret' && (
                    <>
                      <div className="grid gap-2">
                        <Label htmlFor="apiKey">API Key</Label>
                        <Input
                          id="apiKey"
                          name="apiKey"
                          value={formData.apiKey}
                          onChange={handleInputChange}
                          type="password"
                          placeholder="Your API key"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="apiSecret">API Secret</Label>
                        <Input
                          id="apiSecret"
                          name="apiSecret"
                          value={formData.apiSecret}
                          onChange={handleInputChange}
                          type="password"
                          placeholder="Your API secret"
                          required
                        />
                      </div>
                    </>
                  )}
                  
                  {selectedProvider.authType === 'oauth2' && (
                    <>
                      <div className="grid gap-2">
                        <Label htmlFor="accessToken">Access Token</Label>
                        <Input
                          id="accessToken"
                          name="accessToken"
                          value={formData.accessToken}
                          onChange={handleInputChange}
                          type="password"
                          placeholder="OAuth access token"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="refreshToken">Refresh Token</Label>
                        <Input
                          id="refreshToken"
                          name="refreshToken"
                          value={formData.refreshToken}
                          onChange={handleInputChange}
                          type="password"
                          placeholder="OAuth refresh token"
                        />
                      </div>
                    </>
                  )}
                  
                  {selectedProvider.authType === 'bearer' && (
                    <div className="grid gap-2">
                      <Label htmlFor="accessToken">Bearer Token</Label>
                      <Input
                        id="accessToken"
                        name="accessToken"
                        value={formData.accessToken}
                        onChange={handleInputChange}
                        type="password"
                        placeholder="Bearer token"
                        required
                      />
                    </div>
                  )}
                </div>
              )}
              
              <div className="grid gap-2">
                <Label htmlFor="additionalSettings">Additional Settings (JSON)</Label>
                <Textarea
                  id="additionalSettings"
                  name="additionalSettings"
                  value={formData.additionalSettings}
                  onChange={handleInputChange}
                  placeholder='{"setting1": "value1", "setting2": "value2"}'
                  className="font-mono min-h-[100px]"
                />
                <p className="text-sm text-muted-foreground">
                  Optional: JSON object with additional provider-specific settings
                </p>
              </div>
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={addMutation.isPending}>
                  {addMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Save
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit API Credential</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSubmit} className="space-y-4 mt-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Name</Label>
              <Input
                id="edit-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="edit-providerId">Service Provider</Label>
              <Select name="providerId" value={formData.providerId} onValueChange={(value) => handleSelectChange('providerId', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a provider" />
                </SelectTrigger>
                <SelectContent>
                  {providers && providers.map((provider: ServiceProvider) => (
                    <SelectItem key={provider.id} value={provider.id.toString()}>
                      {provider.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {selectedProvider && (
              <Alert>
                <AlertDescription>
                  This provider uses <Badge variant="outline">{selectedProvider.authType}</Badge> authentication
                </AlertDescription>
              </Alert>
            )}
            
            {/* Secret fields for updating - blank means no change */}
            {selectedProvider && (
              <div className="space-y-4 border rounded-md p-4">
                <p className="text-sm mb-2">
                  Leave blank to keep existing secrets. Fill in to update with new values.
                </p>
                {(selectedProvider.authType === 'api_key' || selectedProvider.authType === 'api_key_secret') && (
                  <div className="grid gap-2">
                    <Label htmlFor="edit-apiKey">API Key</Label>
                    <Input
                      id="edit-apiKey"
                      name="apiKey"
                      value={formData.apiKey}
                      onChange={handleInputChange}
                      type="password"
                      placeholder="Leave blank to keep existing API key"
                    />
                  </div>
                )}
                
                {selectedProvider.authType === 'api_key_secret' && (
                  <div className="grid gap-2">
                    <Label htmlFor="edit-apiSecret">API Secret</Label>
                    <Input
                      id="edit-apiSecret"
                      name="apiSecret"
                      value={formData.apiSecret}
                      onChange={handleInputChange}
                      type="password"
                      placeholder="Leave blank to keep existing API secret"
                    />
                  </div>
                )}
                
                {(selectedProvider.authType === 'oauth2' || selectedProvider.authType === 'bearer') && (
                  <div className="grid gap-2">
                    <Label htmlFor="edit-accessToken">
                      {selectedProvider.authType === 'bearer' ? 'Bearer Token' : 'Access Token'}
                    </Label>
                    <Input
                      id="edit-accessToken"
                      name="accessToken"
                      value={formData.accessToken}
                      onChange={handleInputChange}
                      type="password"
                      placeholder={`Leave blank to keep existing ${selectedProvider.authType === 'bearer' ? 'bearer token' : 'access token'}`}
                    />
                  </div>
                )}
                
                {selectedProvider.authType === 'oauth2' && (
                  <div className="grid gap-2">
                    <Label htmlFor="edit-refreshToken">Refresh Token</Label>
                    <Input
                      id="edit-refreshToken"
                      name="refreshToken"
                      value={formData.refreshToken}
                      onChange={handleInputChange}
                      type="password"
                      placeholder="Leave blank to keep existing refresh token"
                    />
                  </div>
                )}
              </div>
            )}
            
            <div className="grid gap-2">
              <Label htmlFor="edit-additionalSettings">Additional Settings (JSON)</Label>
              <Textarea
                id="edit-additionalSettings"
                name="additionalSettings"
                value={formData.additionalSettings}
                onChange={handleInputChange}
                className="font-mono min-h-[100px]"
              />
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={updateMutation.isPending}>
                {updateMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Update
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Credentials Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Provider</TableHead>
              <TableHead className="hidden md:table-cell">Authentication</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="w-[150px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!credentials || credentials.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No API credentials found. Add your first credential.
                </TableCell>
              </TableRow>
            ) : (
              credentials.map((credential: ApiCredential) => {
                const provider = providers?.find((p: ServiceProvider) => p.id === credential.providerId);
                return (
                  <TableRow key={credential.id}>
                    <TableCell className="font-medium">
                      {credential.name}
                      {!credential.isActive && <span className="ml-2 text-xs text-muted-foreground">(inactive)</span>}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {provider?.name || `Provider #${credential.providerId}`}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex gap-2">
                        {credential.hasApiKey && <Badge variant="outline">API Key</Badge>}
                        {credential.hasApiSecret && <Badge variant="outline">Secret</Badge>}
                        {credential.hasAccessToken && <Badge variant="outline">Token</Badge>}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {credential.testResult === true ? (
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span className="text-xs">Verified</span>
                        </div>
                      ) : credential.testResult === false ? (
                        <div className="flex items-center text-red-600">
                          <XCircle className="h-4 w-4 mr-1" />
                          <span className="text-xs">Failed</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-amber-600">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          <span className="text-xs">Not Tested</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleTest(credential.id)}
                          title="Test Credential"
                          disabled={testMutation.isPending}
                        >
                          {testMutation.isPending && testMutation.variables === credential.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Play className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEditClick(credential)}
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(credential.id)}
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
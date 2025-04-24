import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Loader2, PlusCircle, Pencil, Trash2, Play, CheckCircle, XCircle, Settings } from 'lucide-react';

interface ServiceIntegration {
  id: number;
  name: string;
  description: string | null;
  providerId: number;
  credentialId: number;
  endpoint: string | null;
  parameters: Record<string, any> | null;
  isActive: boolean;
  lastExecuted: Date | null;
  lastStatus: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ServiceProvider {
  id: number;
  name: string;
  authType: string;
}

interface ApiCredential {
  id: number;
  name: string;
  providerId: number;
}

export default function ServiceIntegrations() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState<ServiceIntegration | null>(null);
  const [parameters, setParameters] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    providerId: '',
    credentialId: '',
    endpoint: '',
    isActive: true,
  });
  
  // Fetch integrations
  const { data: integrations, isLoading, error } = useQuery({
    queryKey: ['/api/admin/service-integrations'],
    retry: 1,
  });
  
  // Fetch providers for dropdown
  const { data: providers } = useQuery({
    queryKey: ['/api/admin/service-providers'],
    retry: 1,
  });
  
  // Fetch credentials for dropdown
  const { data: credentials } = useQuery({
    queryKey: ['/api/admin/api-credentials'],
    retry: 1,
  });
  
  // Filter credentials based on selected provider
  const filteredCredentials = credentials?.filter(
    (cred: ApiCredential) => 
      !formData.providerId || cred.providerId.toString() === formData.providerId
  );
  
  // Add integration mutation
  const addMutation = useMutation({
    mutationFn: (newIntegration: any) => {
      let parsedParams = null;
      
      if (parameters.trim()) {
        try {
          parsedParams = JSON.parse(parameters);
        } catch (e) {
          throw new Error('Invalid JSON in parameters field');
        }
      }
      
      return apiRequest('/api/admin/service-integrations', {
        method: 'POST',
        data: {
          ...newIntegration,
          parameters: parsedParams,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-integrations'] });
      toast({
        title: 'Success',
        description: 'Service integration added successfully',
      });
      setIsAddDialogOpen(false);
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to add service integration. Please try again.',
        variant: 'destructive',
      });
    },
  });
  
  // Update integration mutation
  const updateMutation = useMutation({
    mutationFn: ({ id, ...data }: { id: number, [key: string]: any }) => {
      let parsedParams = null;
      
      if (parameters.trim()) {
        try {
          parsedParams = JSON.parse(parameters);
        } catch (e) {
          throw new Error('Invalid JSON in parameters field');
        }
      }
      
      return apiRequest(`/api/admin/service-integrations/${id}`, {
        method: 'PATCH',
        data: {
          ...data,
          parameters: parsedParams,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-integrations'] });
      toast({
        title: 'Success',
        description: 'Service integration updated successfully',
      });
      setIsEditDialogOpen(false);
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to update service integration. Please try again.',
        variant: 'destructive',
      });
    },
  });
  
  // Delete integration mutation
  const deleteMutation = useMutation({
    mutationFn: (id: number) => {
      return apiRequest(`/api/admin/service-integrations/${id}`, {
        method: 'DELETE',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-integrations'] });
      toast({
        title: 'Success',
        description: 'Service integration deleted successfully',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to delete service integration. Please try again.',
        variant: 'destructive',
      });
    },
  });
  
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
    
    // Reset credential if provider changes
    if (name === 'providerId') {
      setFormData(prev => ({
        ...prev,
        credentialId: '',
      }));
    }
  };
  
  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      providerId: '',
      credentialId: '',
      endpoint: '',
      isActive: true,
    });
    setParameters('');
    setSelectedIntegration(null);
  };
  
  // Open edit dialog
  const handleEditClick = (integration: ServiceIntegration) => {
    setSelectedIntegration(integration);
    setFormData({
      name: integration.name,
      description: integration.description || '',
      providerId: integration.providerId.toString(),
      credentialId: integration.credentialId.toString(),
      endpoint: integration.endpoint || '',
      isActive: integration.isActive,
    });
    setParameters(integration.parameters ? JSON.stringify(integration.parameters, null, 2) : '');
    setIsEditDialogOpen(true);
  };
  
  // Handle add form submission
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMutation.mutate({
      name: formData.name,
      description: formData.description || null,
      providerId: parseInt(formData.providerId),
      credentialId: parseInt(formData.credentialId),
      endpoint: formData.endpoint || null,
      isActive: true,
    });
  };
  
  // Handle edit form submission
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedIntegration) return;
    
    updateMutation.mutate({
      id: selectedIntegration.id,
      name: formData.name,
      description: formData.description || null,
      providerId: parseInt(formData.providerId),
      credentialId: parseInt(formData.credentialId),
      endpoint: formData.endpoint || null,
      isActive: formData.isActive,
    });
  };
  
  // Handle delete
  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this service integration?')) {
      deleteMutation.mutate(id);
    }
  };
  
  // Format status badge
  const getStatusBadge = (status: string | null) => {
    if (!status) return <Badge variant="outline">Not tested</Badge>;
    
    switch (status.toLowerCase()) {
      case 'success':
        return <Badge variant="success" className="bg-green-100 text-green-800">Success</Badge>;
      case 'error':
        return <Badge variant="destructive">Error</Badge>;
      case 'warning':
        return <Badge variant="warning" className="bg-yellow-100 text-yellow-800">Warning</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  if (isLoading) {
    return <div className="flex justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }
  
  if (error) {
    return <div className="text-red-500">Error loading service integrations. Please try again.</div>;
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Service Integrations</h3>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setIsAddDialogOpen(true); }}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Integration
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Service Integration</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddSubmit} className="space-y-4 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Integration Name"
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe what this integration does"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="providerId">Service Provider</Label>
                <Select 
                  name="providerId" 
                  value={formData.providerId} 
                  onValueChange={(value) => handleSelectChange('providerId', value)}
                >
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
              
              <div className="grid gap-2">
                <Label htmlFor="credentialId">API Credential</Label>
                <Select 
                  name="credentialId" 
                  value={formData.credentialId} 
                  onValueChange={(value) => handleSelectChange('credentialId', value)}
                  disabled={!formData.providerId}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={formData.providerId ? "Select a credential" : "Select a provider first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredCredentials && filteredCredentials.map((credential: ApiCredential) => (
                      <SelectItem key={credential.id} value={credential.id.toString()}>
                        {credential.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formData.providerId && (!filteredCredentials || filteredCredentials.length === 0) && (
                  <p className="text-amber-600 text-xs">
                    No credentials found for this provider. Add a credential first.
                  </p>
                )}
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="endpoint">Endpoint</Label>
                <Input
                  id="endpoint"
                  name="endpoint"
                  value={formData.endpoint}
                  onChange={handleInputChange}
                  placeholder="/v1/resource"
                />
                <p className="text-xs text-muted-foreground">
                  The endpoint path to append to the provider's base URL (optional)
                </p>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="parameters">Parameters (JSON)</Label>
                <Textarea
                  id="parameters"
                  value={parameters}
                  onChange={(e) => setParameters(e.target.value)}
                  placeholder='{"param1": "value1", "param2": "value2"}'
                  className="font-mono min-h-[100px]"
                />
                <p className="text-xs text-muted-foreground">
                  Optional JSON object containing default parameters for this integration
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
            <DialogTitle>Edit Service Integration</DialogTitle>
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
              <Label htmlFor="edit-description">Description</Label>
              <Textarea
                id="edit-description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="edit-providerId">Service Provider</Label>
              <Select 
                name="providerId" 
                value={formData.providerId} 
                onValueChange={(value) => handleSelectChange('providerId', value)}
              >
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
            
            <div className="grid gap-2">
              <Label htmlFor="edit-credentialId">API Credential</Label>
              <Select 
                name="credentialId" 
                value={formData.credentialId} 
                onValueChange={(value) => handleSelectChange('credentialId', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a credential" />
                </SelectTrigger>
                <SelectContent>
                  {filteredCredentials && filteredCredentials.map((credential: ApiCredential) => (
                    <SelectItem key={credential.id} value={credential.id.toString()}>
                      {credential.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="edit-endpoint">Endpoint</Label>
              <Input
                id="edit-endpoint"
                name="endpoint"
                value={formData.endpoint}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="edit-parameters">Parameters (JSON)</Label>
              <Textarea
                id="edit-parameters"
                value={parameters}
                onChange={(e) => setParameters(e.target.value)}
                className="font-mono min-h-[100px]"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Status</Label>
              <RadioGroup
                value={formData.isActive ? "active" : "inactive"}
                onValueChange={(value) => setFormData({ ...formData, isActive: value === "active" })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="active" id="active" />
                  <Label htmlFor="active" className="cursor-pointer">Active</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="inactive" id="inactive" />
                  <Label htmlFor="inactive" className="cursor-pointer">Inactive</Label>
                </div>
              </RadioGroup>
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
      
      {/* Integrations Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Provider</TableHead>
              <TableHead className="hidden lg:table-cell">Last Status</TableHead>
              <TableHead className="hidden lg:table-cell">Last Run</TableHead>
              <TableHead className="w-[120px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!integrations || integrations.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No service integrations found. Add your first integration.
                </TableCell>
              </TableRow>
            ) : (
              integrations.map((integration: ServiceIntegration) => {
                const provider = providers?.find((p: ServiceProvider) => p.id === integration.providerId);
                return (
                  <TableRow key={integration.id}>
                    <TableCell className="font-medium">
                      {integration.name}
                      {!integration.isActive && <span className="ml-2 text-xs text-muted-foreground">(inactive)</span>}
                      <div className="text-xs text-muted-foreground md:hidden">
                        {provider?.name}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {provider?.name || `Provider #${integration.providerId}`}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {getStatusBadge(integration.lastStatus)}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {integration.lastExecuted ? 
                        new Date(integration.lastExecuted).toLocaleString() : 
                        "Never"
                      }
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            toast({
                              title: 'Testing Integration',
                              description: 'This functionality is not yet implemented',
                            });
                          }}
                          title="Test Integration"
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEditClick(integration)}
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(integration.id)}
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
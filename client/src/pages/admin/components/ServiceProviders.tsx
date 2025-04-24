import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
import { Loader2, PlusCircle, Pencil, Trash2, CheckCircle, XCircle } from 'lucide-react';

interface ServiceProvider {
  id: number;
  name: string;
  description: string | null;
  categoryId: number;
  authType: string;
  baseUrl: string | null;
  docsUrl: string | null;
  logoUrl: string | null;
  requiredFields: string[] | null;
  isActive: boolean;
}

interface ServiceCategory {
  id: number;
  name: string;
  description: string | null;
}

export default function ServiceProviders() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<ServiceProvider | null>(null);
  const [requiredFields, setRequiredFields] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    categoryId: '',
    authType: 'api_key',
    baseUrl: '',
    docsUrl: '',
    logoUrl: '',
    isActive: true,
  });
  
  // Fetch providers
  const { data: providers, isLoading, error } = useQuery({
    queryKey: ['/api/admin/service-providers'],
    retry: 1,
  });
  
  // Fetch categories for dropdown
  const { data: categories } = useQuery({
    queryKey: ['/api/admin/service-categories'],
    retry: 1,
  });
  
  // Add provider mutation
  const addMutation = useMutation({
    mutationFn: (newProvider: any) => {
      return apiRequest('/api/admin/service-providers', {
        method: 'POST',
        data: {
          ...newProvider,
          requiredFields: parseRequiredFields(requiredFields),
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-providers'] });
      toast({
        title: 'Success',
        description: 'Service provider added successfully',
      });
      setIsAddDialogOpen(false);
      resetForm();
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: 'Failed to add service provider. Please try again.',
        variant: 'destructive',
      });
    },
  });
  
  // Update provider mutation
  const updateMutation = useMutation({
    mutationFn: ({ id, ...data }: { id: number, [key: string]: any }) => {
      return apiRequest(`/api/admin/service-providers/${id}`, {
        method: 'PATCH',
        data: {
          ...data,
          requiredFields: parseRequiredFields(requiredFields),
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-providers'] });
      toast({
        title: 'Success',
        description: 'Service provider updated successfully',
      });
      setIsEditDialogOpen(false);
      resetForm();
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: 'Failed to update service provider. Please try again.',
        variant: 'destructive',
      });
    },
  });
  
  // Delete provider mutation
  const deleteMutation = useMutation({
    mutationFn: (id: number) => {
      return apiRequest(`/api/admin/service-providers/${id}`, {
        method: 'DELETE',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/service-providers'] });
      toast({
        title: 'Success',
        description: 'Service provider deleted successfully',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: 'Failed to delete service provider. Please try again.',
        variant: 'destructive',
      });
    },
  });
  
  // Parse required fields from comma-separated string to array
  const parseRequiredFields = (fields: string): string[] | null => {
    if (!fields.trim()) return null;
    return fields.split(',').map(field => field.trim()).filter(Boolean);
  };
  
  // Format array to comma-separated string
  const formatRequiredFields = (fields: string[] | null): string => {
    if (!fields) return '';
    return fields.join(', ');
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
  
  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      categoryId: '',
      authType: 'api_key',
      baseUrl: '',
      docsUrl: '',
      logoUrl: '',
      isActive: true,
    });
    setRequiredFields('');
    setSelectedProvider(null);
  };
  
  // Open edit dialog
  const handleEditClick = (provider: ServiceProvider) => {
    setSelectedProvider(provider);
    setFormData({
      name: provider.name,
      description: provider.description || '',
      categoryId: provider.categoryId.toString(),
      authType: provider.authType,
      baseUrl: provider.baseUrl || '',
      docsUrl: provider.docsUrl || '',
      logoUrl: provider.logoUrl || '',
      isActive: provider.isActive,
    });
    setRequiredFields(formatRequiredFields(provider.requiredFields));
    setIsEditDialogOpen(true);
  };
  
  // Handle add form submission
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMutation.mutate({
      name: formData.name,
      description: formData.description || null,
      categoryId: parseInt(formData.categoryId),
      authType: formData.authType,
      baseUrl: formData.baseUrl || null,
      docsUrl: formData.docsUrl || null,
      logoUrl: formData.logoUrl || null,
      isActive: true,
    });
  };
  
  // Handle edit form submission
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProvider) return;
    
    updateMutation.mutate({
      id: selectedProvider.id,
      name: formData.name,
      description: formData.description || null,
      categoryId: parseInt(formData.categoryId),
      authType: formData.authType,
      baseUrl: formData.baseUrl || null,
      docsUrl: formData.docsUrl || null,
      logoUrl: formData.logoUrl || null,
      isActive: formData.isActive,
    });
  };
  
  // Handle delete
  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this service provider?')) {
      deleteMutation.mutate(id);
    }
  };
  
  // Format auth type for display
  const formatAuthType = (authType: string): string => {
    switch (authType) {
      case 'api_key':
        return 'API Key';
      case 'api_key_secret':
        return 'API Key + Secret';
      case 'oauth2':
        return 'OAuth 2.0';
      case 'bearer':
        return 'Bearer Token';
      default:
        return authType;
    }
  };
  
  if (isLoading) {
    return <div className="flex justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }
  
  if (error) {
    return <div className="text-red-500">Error loading service providers. Please try again.</div>;
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Service Providers</h3>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setIsAddDialogOpen(true); }}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Provider
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Service Provider</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddSubmit} className="space-y-4 mt-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Service Provider Name"
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
                  placeholder="Describe what this service provider offers"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="categoryId">Category</Label>
                <Select 
                  name="categoryId" 
                  value={formData.categoryId} 
                  onValueChange={(value) => handleSelectChange('categoryId', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories && categories.map((category: ServiceCategory) => (
                      <SelectItem key={category.id} value={category.id.toString()}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="authType">Authentication Type</Label>
                <Select 
                  name="authType" 
                  value={formData.authType} 
                  onValueChange={(value) => handleSelectChange('authType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select auth type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="api_key">API Key</SelectItem>
                    <SelectItem value="api_key_secret">API Key + Secret</SelectItem>
                    <SelectItem value="oauth2">OAuth 2.0</SelectItem>
                    <SelectItem value="bearer">Bearer Token</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="baseUrl">Base URL</Label>
                <Input
                  id="baseUrl"
                  name="baseUrl"
                  value={formData.baseUrl}
                  onChange={handleInputChange}
                  placeholder="https://api.example.com"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="docsUrl">Documentation URL</Label>
                <Input
                  id="docsUrl"
                  name="docsUrl"
                  value={formData.docsUrl}
                  onChange={handleInputChange}
                  placeholder="https://docs.example.com"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="logoUrl">Logo URL</Label>
                <Input
                  id="logoUrl"
                  name="logoUrl"
                  value={formData.logoUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/logo.png"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="requiredFields">Required Fields (comma-separated)</Label>
                <Textarea
                  id="requiredFields"
                  value={requiredFields}
                  onChange={(e) => setRequiredFields(e.target.value)}
                  placeholder="field1, field2, field3"
                />
                <p className="text-sm text-muted-foreground">
                  List any fields specific to this provider, separated by commas
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
            <DialogTitle>Edit Service Provider</DialogTitle>
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
              <Label htmlFor="edit-categoryId">Category</Label>
              <Select 
                name="categoryId" 
                value={formData.categoryId} 
                onValueChange={(value) => handleSelectChange('categoryId', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories && categories.map((category: ServiceCategory) => (
                    <SelectItem key={category.id} value={category.id.toString()}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="edit-authType">Authentication Type</Label>
              <Select 
                name="authType" 
                value={formData.authType} 
                onValueChange={(value) => handleSelectChange('authType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select auth type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="api_key">API Key</SelectItem>
                  <SelectItem value="api_key_secret">API Key + Secret</SelectItem>
                  <SelectItem value="oauth2">OAuth 2.0</SelectItem>
                  <SelectItem value="bearer">Bearer Token</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="edit-baseUrl">Base URL</Label>
              <Input
                id="edit-baseUrl"
                name="baseUrl"
                value={formData.baseUrl}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="edit-docsUrl">Documentation URL</Label>
              <Input
                id="edit-docsUrl"
                name="docsUrl"
                value={formData.docsUrl}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="edit-logoUrl">Logo URL</Label>
              <Input
                id="edit-logoUrl"
                name="logoUrl"
                value={formData.logoUrl}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="edit-requiredFields">Required Fields (comma-separated)</Label>
              <Textarea
                id="edit-requiredFields"
                value={requiredFields}
                onChange={(e) => setRequiredFields(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Label htmlFor="edit-isActive" className="cursor-pointer flex items-center">
                <input
                  id="edit-isActive"
                  type="checkbox"
                  className="mr-2 h-4 w-4"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                />
                Active
              </Label>
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
      
      {/* Providers Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Auth Type</TableHead>
              <TableHead className="hidden lg:table-cell">Status</TableHead>
              <TableHead className="w-[120px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!providers || providers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No service providers found. Add your first provider.
                </TableCell>
              </TableRow>
            ) : (
              providers.map((provider: ServiceProvider) => {
                const category = categories?.find((c: ServiceCategory) => c.id === provider.categoryId);
                return (
                  <TableRow key={provider.id}>
                    <TableCell className="font-medium">
                      {provider.name}
                      <div className="text-xs text-muted-foreground line-clamp-1 md:hidden">
                        {category?.name} - {formatAuthType(provider.authType)}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {category?.name || `Category #${provider.categoryId}`}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="outline">{formatAuthType(provider.authType)}</Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {provider.isActive ? (
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span className="text-xs">Active</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-slate-500">
                          <XCircle className="h-4 w-4 mr-1" />
                          <span className="text-xs">Inactive</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEditClick(provider)}
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(provider.id)}
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
import React, { useState } from 'react';
import { useUiLabel, UiLabel } from '@/hooks/use-ui-label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Plus, Pencil, Trash, Search, Filter, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

const UiLabelManagement: React.FC = () => {
  const { labels, isLoading, createLabel, updateLabel, deleteLabel } = useUiLabel();
  const { toast } = useToast();
  
  const [newLabel, setNewLabel] = useState<{
    key: string;
    value: string;
    defaultValue: string;
    context: string;
  }>({
    key: '',
    value: '',
    defaultValue: '',
    context: 'Global',
  });
  
  const [editingLabel, setEditingLabel] = useState<UiLabel | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [contextFilter, setContextFilter] = useState<string>('All');
  
  // Get unique contexts for filtering
  const contexts = ['All', ...new Set(labels.map(label => label.context))];
  
  // Filter labels based on search term and context filter
  const filteredLabels = labels.filter(label => {
    const matchesSearch = 
      label.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      label.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
      label.defaultValue.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesContext = contextFilter === 'All' || label.context === contextFilter;
    
    return matchesSearch && matchesContext;
  });
  
  const handleCreateLabel = async () => {
    try {
      if (!newLabel.key || !newLabel.value || !newLabel.defaultValue || !newLabel.context) {
        toast({
          title: 'Validation Error',
          description: 'All fields are required.',
          variant: 'destructive',
        });
        return;
      }
      
      // Check if key already exists in the same context
      const keyExists = labels.some(
        label => label.key === newLabel.key && label.context === newLabel.context
      );
      
      if (keyExists) {
        toast({
          title: 'Validation Error',
          description: `A label with key "${newLabel.key}" already exists in "${newLabel.context}" context.`,
          variant: 'destructive',
        });
        return;
      }
      
      await createLabel(newLabel);
      
      // Reset form
      setNewLabel({
        key: '',
        value: '',
        defaultValue: '',
        context: 'Global',
      });
      
    } catch (error) {
      console.error('Failed to create label:', error);
    }
  };
  
  const handleUpdateLabel = async () => {
    if (!editingLabel) return;
    
    try {
      await updateLabel(editingLabel.id, editingLabel.value);
      setEditingLabel(null);
    } catch (error) {
      console.error('Failed to update label:', error);
    }
  };
  
  const handleDeleteLabel = async (id: number) => {
    try {
      await deleteLabel(id);
    } catch (error) {
      console.error('Failed to delete label:', error);
    }
  };
  
  // Handle context changes for the new label form
  const handleContextChange = (value: string) => {
    setNewLabel({ ...newLabel, context: value });
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setContextFilter('All');
  };
  
  const renderAddDialog = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-auto">
          <Plus className="h-4 w-4 mr-2" />
          Add Label
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New UI Label</DialogTitle>
          <DialogDescription>
            Create a new UI label for customizable text in the application.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="key" className="text-right">
              Key
            </Label>
            <Input
              id="key"
              value={newLabel.key}
              onChange={(e) => setNewLabel({ ...newLabel, key: e.target.value })}
              placeholder="e.g. homepage.title"
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="value" className="text-right">
              Value
            </Label>
            <Textarea
              id="value"
              value={newLabel.value}
              onChange={(e) => setNewLabel({ ...newLabel, value: e.target.value })}
              placeholder="The actual text to display"
              className="col-span-3"
              rows={2}
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="defaultValue" className="text-right">
              Default Value
            </Label>
            <Textarea
              id="defaultValue"
              value={newLabel.defaultValue}
              onChange={(e) => setNewLabel({ ...newLabel, defaultValue: e.target.value })}
              placeholder="The fallback text"
              className="col-span-3"
              rows={2}
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="context" className="text-right">
              Context
            </Label>
            <Select
              value={newLabel.context}
              onValueChange={handleContextChange}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a context" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Contexts</SelectLabel>
                  <SelectItem value="Global">Global</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Dashboard">Dashboard</SelectItem>
                  <SelectItem value="Properties">Properties</SelectItem>
                  <SelectItem value="Marketplace">Marketplace</SelectItem>
                  <SelectItem value="DAO">DAO</SelectItem>
                  <SelectItem value="DEX">DEX</SelectItem>
                  <SelectItem value="Escrow">Escrow</SelectItem>
                  <SelectItem value="Community">Community</SelectItem>
                  <SelectItem value="Rewards">Rewards</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleCreateLabel}>Create Label</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
  
  const renderEditDialog = () => (
    <Dialog open={!!editingLabel} onOpenChange={(open) => !open && setEditingLabel(null)}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit UI Label</DialogTitle>
          <DialogDescription>
            Update the value of this UI label.
          </DialogDescription>
        </DialogHeader>
        
        {editingLabel && (
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right font-semibold">Key</Label>
              <div className="col-span-3">{editingLabel.key}</div>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right font-semibold">Context</Label>
              <div className="col-span-3">{editingLabel.context}</div>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right font-semibold">Default Value</Label>
              <div className="col-span-3 text-muted-foreground">{editingLabel.defaultValue}</div>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="value" className="text-right">
                Value
              </Label>
              <Textarea
                id="value"
                value={editingLabel.value}
                onChange={(e) => setEditingLabel({ ...editingLabel, value: e.target.value })}
                className="col-span-3"
                rows={3}
              />
            </div>
          </div>
        )}
        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleUpdateLabel}>Update Label</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>UI Label Management</CardTitle>
          <CardDescription>
            Manage customizable text labels throughout the application
          </CardDescription>
        </div>
        {renderAddDialog()}
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search labels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-9 w-9"
                  onClick={() => setSearchTerm('')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select
                value={contextFilter}
                onValueChange={setContextFilter}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by context" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Contexts</SelectLabel>
                    {contexts.map((context) => (
                      <SelectItem key={context} value={context}>
                        {context}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              
              {(searchTerm || contextFilter !== 'All') && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableCaption>
                {isLoading ? 'Loading UI labels...' : `Total: ${filteredLabels.length} labels`}
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Key</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Context</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">Loading...</TableCell>
                  </TableRow>
                ) : filteredLabels.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">
                      {searchTerm || contextFilter !== 'All'
                        ? 'No labels matching the current filters'
                        : 'No labels found. Create your first one!'}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredLabels.map((label) => (
                    <TableRow key={label.id}>
                      <TableCell className="font-mono text-xs">{label.key}</TableCell>
                      <TableCell>
                        <div className="max-w-[300px] truncate" title={label.value}>
                          {label.value}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{label.context}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setEditingLabel(label)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="icon" className="text-destructive">
                                <Trash className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This will permanently delete the UI label "{label.key}" in context "{label.context}".
                                  This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDeleteLabel(label.id)}
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
      
      {renderEditDialog()}
    </Card>
  );
};

export default UiLabelManagement;
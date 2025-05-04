import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { UiLabel, insertUiLabelSchema } from '@shared/schema';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  AlertCircle, 
  Edit, 
  Plus, 
  Save, 
  Search, 
  Tags, 
  Trash2,
  X
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Extend the insert schema for UI label management
const uiLabelFormSchema = insertUiLabelSchema.extend({
  internalKey: z.string().min(2, "Key must be at least 2 characters"),
  context: z.string().min(1, "Context is required"),
  defaultLabel: z.string().min(1, "Default label is required"),
  customLabel: z.string().optional(),
});

type UiLabelFormValues = z.infer<typeof uiLabelFormSchema>;

const DEFAULT_CONTEXTS = [
  "Global",
  "Navigation",
  "Properties",
  "Governance",
  "Tasks",
  "Escrow",
  "Wallet",
  "Settings",
  "Authentication",
  "Social",
  "Legal",
  "Notifications"
];

const UiLabelManagement = () => {
  const { toast } = useToast();
  const [editingLabel, setEditingLabel] = useState<UiLabel | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [contextFilter, setContextFilter] = useState<string>('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  // Fetch all UI labels
  const { 
    data: labels, 
    isLoading, 
    error, 
    refetch 
  } = useQuery<UiLabel[]>({
    queryKey: ['/api/admin/ui-labels'],
    retry: 1,
  });
  
  // Create/update UI label
  const saveLabelMutation = useMutation({
    mutationFn: (data: UiLabelFormValues) => 
      apiRequest('POST', '/api/admin/ui-labels', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/ui-labels'] });
      toast({
        title: "Label Saved",
        description: "UI label has been saved successfully.",
      });
      setIsAddDialogOpen(false);
      setEditingLabel(null);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to save label",
        description: error.message || "An error occurred while saving the label.",
        variant: "destructive",
      });
    }
  });
  
  // Delete UI label
  const deleteLabelMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest('DELETE', `/api/admin/ui-labels/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/ui-labels'] });
      toast({
        title: "Label Deleted",
        description: "UI label has been deleted successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to delete label",
        description: error.message || "An error occurred while deleting the label.",
        variant: "destructive",
      });
    }
  });
  
  // Form for creating/editing UI labels
  const form = useForm<UiLabelFormValues>({
    resolver: zodResolver(uiLabelFormSchema),
    defaultValues: {
      internalKey: "",
      context: "Global",
      defaultLabel: "",
      customLabel: "",
    },
  });
  
  // Reset form when editing label changes
  useEffect(() => {
    if (editingLabel) {
      form.reset({
        internalKey: editingLabel.internalKey,
        context: editingLabel.context,
        defaultLabel: editingLabel.defaultLabel,
        customLabel: editingLabel.customLabel || "",
      });
      setIsAddDialogOpen(true);
    } else {
      form.reset({
        internalKey: "",
        context: "Global",
        defaultLabel: "",
        customLabel: "",
      });
    }
  }, [editingLabel, form]);
  
  // Handle form submission
  const onSubmit = (data: UiLabelFormValues) => {
    const submitData = {
      ...data,
      id: editingLabel?.id,
    };
    saveLabelMutation.mutate(submitData);
  };
  
  // Filter labels by search term and context
  const filteredLabels = labels ? labels.filter(label => {
    const matchesSearch = searchTerm === '' || 
      label.internalKey.toLowerCase().includes(searchTerm.toLowerCase()) ||
      label.defaultLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (label.customLabel && label.customLabel.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesContext = contextFilter === '' || label.context === contextFilter;
    
    return matchesSearch && matchesContext;
  }) : [];
  
  // Get unique contexts from labels
  const uniqueContexts = labels ? 
    [...new Set(labels.map(label => label.context))] : 
    [];
  
  const allContexts = [...new Set([...DEFAULT_CONTEXTS, ...uniqueContexts])].sort();
  
  // Handle cancel edit
  const cancelEdit = () => {
    setEditingLabel(null);
    setIsAddDialogOpen(false);
  };
  
  // Handle delete confirmation
  const confirmDelete = (label: UiLabel) => {
    if (window.confirm(`Are you sure you want to delete the label "${label.internalKey}"?`)) {
      deleteLabelMutation.mutate(label.id);
    }
  };
  
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-4 w-2/3" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load UI labels. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>UI Label Management</span>
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Label
          </Button>
        </CardTitle>
        <CardDescription>
          Customize UI text across the platform for white-label branding
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Search and filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search labels..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select
            value={contextFilter}
            onValueChange={setContextFilter}
          >
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Filter by context" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Contexts</SelectItem>
              {allContexts.map(context => (
                <SelectItem key={context} value={context}>
                  {context}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Labels table */}
        {filteredLabels.length > 0 ? (
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Key</TableHead>
                  <TableHead>Context</TableHead>
                  <TableHead>Default Label</TableHead>
                  <TableHead>Custom Label</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLabels.map((label) => (
                  <TableRow key={label.id}>
                    <TableCell className="font-mono text-sm">
                      {label.internalKey}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {label.context}
                      </Badge>
                    </TableCell>
                    <TableCell>{label.defaultLabel}</TableCell>
                    <TableCell>
                      {label.customLabel || (
                        <span className="text-muted-foreground italic">
                          Not customized
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEditingLabel(label)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => confirmDelete(label)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-8 border rounded-md">
            <div className="mb-4">
              <Tags className="h-12 w-12 mx-auto text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium">No matching labels found</h3>
            <p className="text-muted-foreground mt-1">
              {labels?.length ? "Try adjusting your search or filter." : "Start by adding your first UI label."}
            </p>
            <Button className="mt-4" onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Label
            </Button>
          </div>
        )}
      </CardContent>
      
      {/* Add/Edit Label Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>
              {editingLabel ? "Edit UI Label" : "Add New UI Label"}
            </DialogTitle>
            <DialogDescription>
              {editingLabel 
                ? "Modify this UI label to customize text displayed to users." 
                : "Create a new UI label to override default text in the application."}
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="internalKey"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Internal Key</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., dashboard.welcome_message" 
                          {...field} 
                          disabled={!!editingLabel}
                        />
                      </FormControl>
                      <FormDescription>
                        Unique identifier used in code (cannot be changed after creation)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="context"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Context</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a context" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {allContexts.map(context => (
                            <SelectItem key={context} value={context}>
                              {context}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        The section or feature where this text appears
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="defaultLabel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Default Label</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="The original text displayed to users" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Original text shown when no customization is applied
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="customLabel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Custom Label</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your customized text" 
                          {...field} 
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormDescription>
                        Custom text that will replace the default text
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <DialogFooter className="flex gap-2 justify-end">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={cancelEdit}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  disabled={saveLabelMutation.isPending}
                >
                  {saveLabelMutation.isPending && (
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background"></span>
                  )}
                  Save Label
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default UiLabelManagement;
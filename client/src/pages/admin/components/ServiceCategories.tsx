import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { insertServiceCategorySchema } from '@shared/schema';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { AlertCircle, CheckCircle2, Layers, BadgePlus, Edit2, Trash2, Plus, ArrowUpDown, Package } from "lucide-react";
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

// Extend the insert schema for Service Categories
const serviceCategorySchema = insertServiceCategorySchema.extend({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().optional(),
  icon: z.string().optional(),
  displayOrder: z.number().int().nonnegative().optional(),
});

type ServiceCategoryFormValues = z.infer<typeof serviceCategorySchema>;

const ServiceCategories = () => {
  const { toast } = useToast();
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  
  // Fetch all service categories
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['/api/admin/categories'],
    retry: 1,
  });
  
  // Create new service category
  const addCategoryMutation = useMutation({
    mutationFn: (newCategory: ServiceCategoryFormValues) => 
      apiRequest('/api/admin/categories', { method: 'POST', data: newCategory }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/categories'] });
      setAddDialogOpen(false);
      toast({
        title: "Category Added",
        description: "Service category has been added successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to add category",
        description: error.message || "An error occurred while adding the category.",
        variant: "destructive",
      });
    }
  });
  
  // Update service category
  const updateCategoryMutation = useMutation({
    mutationFn: ({ id, data }: { id: number, data: Partial<ServiceCategoryFormValues> }) => 
      apiRequest(`/api/admin/categories/${id}`, { method: 'PATCH', data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/categories'] });
      setEditingCategory(null);
      toast({
        title: "Category Updated",
        description: "Service category has been updated successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to update category",
        description: error.message || "An error occurred while updating the category.",
        variant: "destructive",
      });
    }
  });
  
  // Delete service category
  const deleteCategoryMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest(`/api/admin/categories/${id}`, { method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/categories'] });
      toast({
        title: "Category Deleted",
        description: "Service category has been deleted successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to delete category",
        description: error.message || "An error occurred while deleting the category.",
        variant: "destructive",
      });
    }
  });
  
  // Toggle category active status
  const toggleCategoryStatusMutation = useMutation({
    mutationFn: ({ id, isActive }: { id: number, isActive: boolean }) => 
      apiRequest(`/api/admin/categories/${id}/status`, { 
        method: 'PATCH', 
        data: { isActive } 
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/categories'] });
      toast({
        title: "Status Updated",
        description: "Category status has been updated successfully.",
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
  
  // Form for adding/editing categories
  const form = useForm<ServiceCategoryFormValues>({
    resolver: zodResolver(serviceCategorySchema),
    defaultValues: {
      name: "",
      description: "",
      icon: "",
      displayOrder: 0,
    },
  });
  
  const onSubmit = (values: ServiceCategoryFormValues) => {
    if (editingCategory) {
      updateCategoryMutation.mutate({ 
        id: editingCategory.id, 
        data: values 
      });
    } else {
      addCategoryMutation.mutate(values);
    }
  };
  
  const handleEditCategory = (category: any) => {
    setEditingCategory(category);
    form.reset({
      name: category.name,
      description: category.description || "",
      icon: category.icon || "",
      displayOrder: category.displayOrder || 0,
    });
    setAddDialogOpen(true);
  };
  
  const closeDialog = () => {
    setAddDialogOpen(false);
    setEditingCategory(null);
    form.reset();
  };
  
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Service Categories</CardTitle>
          <CardDescription>Organize external service integrations into categories</CardDescription>
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
  
  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Service Categories</CardTitle>
          <CardDescription>Organize external service integrations into categories</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to load service categories. Please try again later.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }
  
  // Sort categories by display order
  const sortedCategories = categories && [...categories].sort((a, b) => a.displayOrder - b.displayOrder);
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Service Categories</CardTitle>
          <CardDescription>Organize external service integrations into categories</CardDescription>
        </div>
        <Button onClick={() => setAddDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Category
        </Button>
      </CardHeader>
      <CardContent>
        {sortedCategories && sortedCategories.length === 0 ? (
          <div className="text-center py-8">
            <Layers className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium">No Service Categories</h3>
            <p className="text-muted-foreground mt-2 mb-4">
              Create categories to organize your external service integrations.
            </p>
            <Button onClick={() => setAddDialogOpen(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Create First Category
            </Button>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Description</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="w-[150px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedCategories && sortedCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.displayOrder}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {category.icon ? (
                        <span className="text-muted-foreground">{category.icon}</span>
                      ) : (
                        <Package className="h-4 w-4 text-muted-foreground" />
                      )}
                      {category.name}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">
                    {category.description || "No description"}
                  </TableCell>
                  <TableCell>
                    <Badge variant={category.isActive ? "outline" : "secondary"} className={category.isActive ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}>
                      {category.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => toggleCategoryStatusMutation.mutate({ id: category.id, isActive: !category.isActive })}
                        disabled={toggleCategoryStatusMutation.isPending}
                      >
                        {category.isActive ? "Disable" : "Enable"}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => handleEditCategory(category)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="icon" 
                        onClick={() => {
                          if (confirm("Are you sure you want to delete this category? This will also delete all associated service providers.")) {
                            deleteCategoryMutation.mutate(category.id);
                          }
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      
      {/* Add/Edit Category Dialog */}
      <Dialog open={addDialogOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {editingCategory ? "Edit Category" : "Add Service Category"}
            </DialogTitle>
            <DialogDescription>
              {editingCategory 
                ? "Update the details of this service category" 
                : "Create a new category for organizing external service integrations"}
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. AI Services" {...field} />
                    </FormControl>
                    <FormDescription>
                      A name for this category of services
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter a description for this category" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="icon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Icon (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Icon name or emoji" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter an icon name or emoji to represent this category
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="displayOrder"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Display Order</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min={0} 
                        step={1} 
                        {...field} 
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                      />
                    </FormControl>
                    <FormDescription>
                      Categories are displayed in ascending order (lower numbers first)
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
                    addCategoryMutation.isPending || 
                    updateCategoryMutation.isPending
                  }
                >
                  {editingCategory ? "Update Category" : "Create Category"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ServiceCategories;
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { 
  PlusCircle, 
  Clock, 
  DollarSign, 
  MapPin, 
  Tag, 
  FileText,
  CalendarClock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { insertTaskSchema } from '@shared/schema';
import { useWallet } from '@/components/wallet/wallet-provider';

// Extend the task schema with additional frontend validation
const createTaskSchema = insertTaskSchema.extend({
  price: z.preprocess(
    (val) => (val === '' ? undefined : Number(val)),
    z.number().min(1, "Price must be greater than 0")
  ),
  dueDate: z.string().optional(),
});

type FormValues = z.infer<typeof createTaskSchema>;

export default function CreateTask() {
  const { toast } = useToast();
  const { isConnected, user } = useWallet();
  
  // Form setup
  const form = useForm<FormValues>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: '',
      description: '',
      category: '',
      price: undefined,
      currency: 'USD',
      location: '',
      dueDate: '',
    },
  });
  
  // Task categories
  const taskCategories = [
    { value: 'photography', label: 'Photography' },
    { value: 'data-analysis', label: 'Data Analysis' },
    { value: 'blockchain', label: 'Blockchain Development' },
    { value: 'ai-development', label: 'AI Development' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'legal', label: 'Legal Services' },
    { value: 'administrative', label: 'Administrative' },
    { value: 'translation', label: 'Translation' },
    { value: 'design', label: 'Design' },
    { value: 'content', label: 'Content Creation' },
  ];
  
  // Create task mutation
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      return apiRequest('POST', '/api/tasks', {
        ...data,
        creatorId: user?.id || 1,
      });
    },
    onSuccess: () => {
      toast({
        title: 'Task Created',
        description: 'Your task has been created successfully.',
      });
      form.reset();
      queryClient.invalidateQueries({queryKey: ['/api/tasks']});
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: `Failed to create task: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: 'destructive',
      });
    },
  });
  
  const onSubmit = (data: FormValues) => {
    if (!isConnected) {
      toast({
        title: 'Authentication Required',
        description: 'Please connect your wallet to create a task.',
        variant: 'destructive',
      });
      return;
    }
    
    mutate(data);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-heading font-bold mb-2">Create New Task</h1>
        <p className="text-neutral-500">
          Fill out the details below to create a new task for the DAC marketplace.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-primary-500" />
                  Task Details
                </h2>
                
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Task Title*</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Property Photography in Miami" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description*</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Provide a detailed description of the task, requirements, and any specific skills needed..." 
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category*</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select task category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {taskCategories.map(category => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-primary-500" />
                  Compensation
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price*</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0" 
                            placeholder="e.g., 150" 
                            {...field} 
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="currency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Currency*</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select currency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="EUR">EUR</SelectItem>
                            <SelectItem value="GBP">GBP</SelectItem>
                            <SelectItem value="ETH">ETH</SelectItem>
                            <SelectItem value="DAC">DAC</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold flex items-center">
                  <Tag className="mr-2 h-5 w-5 text-primary-500" />
                  Additional Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location (Optional)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={16} />
                            <Input 
                              placeholder="e.g., Miami, FL or Remote" 
                              className="pl-10"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Leave empty if the task can be done remotely
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dueDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Due Date (Optional)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <CalendarClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={16} />
                            <Input 
                              type="date" 
                              className="pl-10"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end space-x-3">
            <Button 
              type="button" 
              variant="outline"
              onClick={() => form.reset()}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={isPending}
            >
              {isPending ? 'Creating...' : 'Create Task'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

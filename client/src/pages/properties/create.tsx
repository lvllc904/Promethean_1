import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { PlusCircle, Trash2, Upload, Building, MapPin, DollarSign, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { insertPropertySchema } from '@shared/schema';
import { useWallet } from '@/components/wallet/wallet-provider';

// Extend the property schema with frontend validation
const createPropertySchema = insertPropertySchema.extend({
  price: z.preprocess(
    (val) => (val === '' ? undefined : Number(val)),
    z.number().min(1, "Price must be greater than 0")
  ),
  beds: z.preprocess(
    (val) => (val === '' ? undefined : Number(val)),
    z.number().min(0).optional()
  ),
  baths: z.preprocess(
    (val) => (val === '' ? undefined : Number(val)),
    z.number().min(0).optional()
  ),
  sqft: z.preprocess(
    (val) => (val === '' ? undefined : Number(val)),
    z.number().min(0).optional()
  ),
  imageUrls: z.array(z.string()).optional(),
});

type FormValues = z.infer<typeof createPropertySchema>;

export default function CreateProperty() {
  const { toast } = useToast();
  const { isConnected, user } = useWallet();
  
  // Form setup
  const form = useForm<FormValues>({
    resolver: zodResolver(createPropertySchema),
    defaultValues: {
      title: '',
      description: '',
      price: undefined,
      currency: 'USD',
      location: '',
      country: '',
      city: '',
      address: '',
      beds: undefined,
      baths: undefined,
      sqft: undefined,
      userId: user?.id || 1,
      listingType: 'sale',
      propertyType: 'house',
      imageUrls: [],
      features: [],
    },
  });
  
  // Property features options
  const propertyFeatures = [
    { id: 'pool', label: 'Swimming Pool' },
    { id: 'garden', label: 'Garden' },
    { id: 'garage', label: 'Garage' },
    { id: 'ac', label: 'Air Conditioning' },
    { id: 'heating', label: 'Heating' },
    { id: 'security', label: 'Security System' },
    { id: 'elevator', label: 'Elevator' },
    { id: 'furnished', label: 'Furnished' },
    { id: 'parking', label: 'Parking' },
    { id: 'gym', label: 'Gym' },
    { id: 'balcony', label: 'Balcony' },
    { id: 'waterfront', label: 'Waterfront' },
  ];
  
  // Create property mutation
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      return apiRequest('POST', '/api/properties', data);
    },
    onSuccess: () => {
      toast({
        title: 'Property Created',
        description: 'Your property listing has been created successfully.',
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: `Failed to create property: ${error.message}`,
        variant: 'destructive',
      });
    },
  });
  
  const onSubmit = (data: FormValues) => {
    if (!isConnected) {
      toast({
        title: 'Authentication Required',
        description: 'Please connect your wallet to create a property listing.',
        variant: 'destructive',
      });
      return;
    }
    
    mutate(data);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-heading font-bold mb-2">Create New Property Listing</h1>
        <p className="text-neutral-500">
          Fill out the details below to list your property on our marketplace.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold flex items-center">
                  <Building className="mr-2 h-5 w-5 text-primary-500" />
                  Basic Information
                </h2>
                
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Title*</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Luxury Modern Villa" {...field} />
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
                          placeholder="Provide a detailed description of your property..." 
                          className="min-h-32"
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
                    name="propertyType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Type*</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select property type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="condo">Condo</SelectItem>
                            <SelectItem value="townhouse">Townhouse</SelectItem>
                            <SelectItem value="land">Land</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="listingType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Listing Type*</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="sale" id="sale" />
                              <label htmlFor="sale" className="text-sm font-medium">
                                For Sale
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="rent" id="rent" />
                              <label htmlFor="rent" className="text-sm font-medium">
                                For Rent
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
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
                  <MapPin className="mr-2 h-5 w-5 text-primary-500" />
                  Location Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country*</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., United States" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City*</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., New York" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area/Neighborhood*</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Upper East Side" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street Address</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 123 Main St" {...field} />
                      </FormControl>
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
                  Pricing
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
                            placeholder="e.g., 250000" 
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
                  <Home className="mr-2 h-5 w-5 text-primary-500" />
                  Property Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="beds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bedrooms</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0" 
                            placeholder="e.g., 3" 
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
                    name="baths"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bathrooms</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0" 
                            placeholder="e.g., 2" 
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
                    name="sqft"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Square Footage</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0" 
                            placeholder="e.g., 1500" 
                            {...field} 
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="features"
                  render={() => (
                    <FormItem>
                      <FormLabel>Property Features</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {propertyFeatures.map((feature) => (
                          <FormField
                            key={feature.id}
                            control={form.control}
                            name="features"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={feature.id}
                                  className="flex items-center space-x-2 m-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(feature.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, feature.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== feature.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal cursor-pointer">
                                    {feature.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
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
                  <Upload className="mr-2 h-5 w-5 text-primary-500" />
                  Images
                </h2>
                
                <FormField
                  control={form.control}
                  name="imageUrls"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Images</FormLabel>
                      <FormControl>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {field.value?.map((url, index) => (
                            <div 
                              key={index}
                              className="relative rounded-md overflow-hidden border border-neutral-200 aspect-square"
                            >
                              <img 
                                src={url} 
                                alt={`Property ${index + 1}`} 
                                className="w-full h-full object-cover"
                              />
                              <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2 h-7 w-7"
                                onClick={() => {
                                  const newUrls = [...field.value || []];
                                  newUrls.splice(index, 1);
                                  field.onChange(newUrls);
                                }}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                          
                          <Button
                            type="button"
                            variant="outline"
                            className="h-32 border-dashed border-2"
                            onClick={() => {
                              // In a real app, this would open a file upload dialog
                              const mockImageUrl = `https://source.unsplash.com/random/800x600/?house&sig=${Date.now()}`;
                              field.onChange([...(field.value || []), mockImageUrl]);
                            }}
                          >
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Image
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
              {isPending ? 'Creating...' : 'Create Listing'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

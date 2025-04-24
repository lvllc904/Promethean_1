import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { insertWhitelabelSettingSchema } from '../../../../shared/schema';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, Palette, Globe, Upload, GalleryVerticalEnd, Code, ExternalLink, RotateCw } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import ColorPicker from './ColorPicker';

// Extend the insert schema for whitelabel settings
const whitelabelSettingsSchema = insertWhitelabelSettingSchema.extend({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  logoUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  faviconUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  primaryColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Please enter a valid hex color"),
  secondaryColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Please enter a valid hex color"),
  accentColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Please enter a valid hex color"),
  fontPrimary: z.string().min(1, "Primary font is required"),
  fontSecondary: z.string().min(1, "Secondary font is required"),
  customCss: z.string().optional(),
  customJs: z.string().optional(),
  contactEmail: z.string().email("Please enter a valid email").optional().or(z.literal('')),
  supportUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  privacyPolicyUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  termsOfServiceUrl: z.string().url("Please enter a valid URL").optional().or(z.literal('')),
  socialLinks: z.any().optional(),
  customDomain: z.string().optional(),
});

type WhitelabelSettingsFormValues = z.infer<typeof whitelabelSettingsSchema>;

// Available fonts list
const fontOptions = [
  { value: 'Inter', label: 'Inter' },
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Open Sans', label: 'Open Sans' },
  { value: 'Lato', label: 'Lato' },
  { value: 'Montserrat', label: 'Montserrat' },
  { value: 'Poppins', label: 'Poppins' },
  { value: 'Raleway', label: 'Raleway' },
  { value: 'Source Sans Pro', label: 'Source Sans Pro' },
  { value: 'Merriweather', label: 'Merriweather' },
  { value: 'Playfair Display', label: 'Playfair Display' },
];

const WhitelabelSettings = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('branding');
  
  // Fetch whitelabel settings
  const { data: settings, isLoading, error, refetch } = useQuery({
    queryKey: ['/api/admin/whitelabel'],
    retry: 1,
  });
  
  // Update whitelabel settings
  const updateSettingsMutation = useMutation({
    mutationFn: (data: Partial<WhitelabelSettingsFormValues>) => 
      apiRequest('/api/admin/whitelabel', { method: 'PATCH', data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/whitelabel'] });
      toast({
        title: "Settings Updated",
        description: "Whitelabel settings have been updated successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to update settings",
        description: error.message || "An error occurred while updating the settings.",
        variant: "destructive",
      });
    }
  });
  
  // Apply whitelabel settings
  const applySettingsMutation = useMutation({
    mutationFn: () => 
      apiRequest('/api/admin/whitelabel/apply', { method: 'POST' }),
    onSuccess: () => {
      toast({
        title: "Settings Applied",
        description: "Whitelabel settings have been applied to the application.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to apply settings",
        description: error.message || "An error occurred while applying the settings.",
        variant: "destructive",
      });
    }
  });
  
  // Form for editing whitelabel settings
  const form = useForm<WhitelabelSettingsFormValues>({
    resolver: zodResolver(whitelabelSettingsSchema),
    defaultValues: {
      companyName: "",
      logoUrl: "",
      faviconUrl: "",
      primaryColor: "#3B82F6",
      secondaryColor: "#10B981",
      accentColor: "#8B5CF6",
      fontPrimary: "Inter",
      fontSecondary: "Inter",
      customCss: "",
      customJs: "",
      contactEmail: "",
      supportUrl: "",
      privacyPolicyUrl: "",
      termsOfServiceUrl: "",
      socialLinks: {},
      customDomain: "",
    },
  });
  
  // Load initial values when settings are fetched
  useEffect(() => {
    if (settings) {
      form.reset({
        companyName: settings.companyName || "",
        logoUrl: settings.logoUrl || "",
        faviconUrl: settings.faviconUrl || "",
        primaryColor: settings.primaryColor || "#3B82F6",
        secondaryColor: settings.secondaryColor || "#10B981",
        accentColor: settings.accentColor || "#8B5CF6",
        fontPrimary: settings.fontPrimary || "Inter",
        fontSecondary: settings.fontSecondary || "Inter",
        customCss: settings.customCss || "",
        customJs: settings.customJs || "",
        contactEmail: settings.contactEmail || "",
        supportUrl: settings.supportUrl || "",
        privacyPolicyUrl: settings.privacyPolicyUrl || "",
        termsOfServiceUrl: settings.termsOfServiceUrl || "",
        socialLinks: settings.socialLinks || {},
        customDomain: settings.customDomain || "",
      });
    }
  }, [settings, form]);
  
  const onSubmit = (values: WhitelabelSettingsFormValues) => {
    // Convert socialLinks to proper JSON object if it's a string
    if (typeof values.socialLinks === 'string') {
      try {
        values.socialLinks = JSON.parse(values.socialLinks);
      } catch (e) {
        toast({
          title: "Invalid Social Links Format",
          description: "Please enter valid JSON for social links.",
          variant: "destructive",
        });
        return;
      }
    }
    
    updateSettingsMutation.mutate(values);
  };
  
  const applySettings = () => {
    applySettingsMutation.mutate();
  };
  
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Whitelabel Settings</CardTitle>
          <CardDescription>Customize the platform's appearance and branding</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Whitelabel Settings</CardTitle>
          <CardDescription>Customize the platform's appearance and branding</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to load whitelabel settings. Please try again later.
            </AlertDescription>
          </Alert>
          <div className="mt-4">
            <Button onClick={() => refetch()}>
              <RotateCw className="mr-2 h-4 w-4" />
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Whitelabel Settings</CardTitle>
        <CardDescription>Customize the platform's appearance, branding, and behavior</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs 
              defaultValue="branding" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid grid-cols-4 w-full mb-6">
                <TabsTrigger value="branding">Branding</TabsTrigger>
                <TabsTrigger value="colors">Colors & Fonts</TabsTrigger>
                <TabsTrigger value="custom">Custom Code</TabsTrigger>
                <TabsTrigger value="legal">Legal & Social</TabsTrigger>
              </TabsList>
              
              {/* Branding Tab */}
              <TabsContent value="branding" className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Branding Settings</h3>
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Name" {...field} />
                          </FormControl>
                          <FormDescription>
                            The name displayed throughout the application
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="logoUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Logo URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com/logo.png" {...field} />
                          </FormControl>
                          <FormDescription>
                            URL to your company logo (recommended size: 250x80px)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="faviconUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Favicon URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com/favicon.ico" {...field} />
                          </FormControl>
                          <FormDescription>
                            URL to your favicon (recommended size: 32x32px)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="customDomain"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Custom Domain</FormLabel>
                          <FormControl>
                            <Input placeholder="app.yourdomain.com" {...field} />
                          </FormControl>
                          <FormDescription>
                            Custom domain for your branded platform (contact support to set up)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {field => (
                      <div className="rounded-md border p-4 mt-6">
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                          <div className="flex-1 w-full md:w-auto">
                            <h3 className="font-medium text-sm">Logo Preview</h3>
                            {form.watch('logoUrl') ? (
                              <div className="bg-gray-50 rounded-md h-20 flex items-center justify-center p-4 mt-2">
                                <img 
                                  src={form.watch('logoUrl')} 
                                  alt="Logo Preview" 
                                  className="max-h-16 max-w-full object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjUwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyNTAiIGhlaWdodD0iODAiIGZpbGw9IiNFNUU3RUIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAmIzM0O1NlZ29lIFVJJiMzNDssIFJvYm90bywgJiMzNDtIZWx2ZXRpY2EgTmV1ZSYjMzQ7LCBBcmlhbCwgJiMzNDtOb3RvIFNhbnMmIzM0OywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjOTQ5NkEyIiBmb250LXNpemU9IjE2cHgiPkludmFsaWQgaW1hZ2U8L3RleHQ+PC9zdmc+';
                                  }}
                                />
                              </div>
                            ) : (
                              <div className="bg-gray-50 rounded-md h-20 flex items-center justify-center mt-2">
                                <p className="text-muted-foreground text-sm">No logo URL provided</p>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1 w-full md:w-auto">
                            <h3 className="font-medium text-sm">Favicon Preview</h3>
                            {form.watch('faviconUrl') ? (
                              <div className="bg-gray-50 rounded-md h-20 flex items-center justify-center p-4 mt-2">
                                <img 
                                  src={form.watch('faviconUrl')} 
                                  alt="Favicon Preview" 
                                  className="h-8 w-8 object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiNFNUU3RUIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAmIzM0O1NlZ29lIFVJJiMzNDssIFJvYm90bywgJiMzNDtIZWx2ZXRpY2EgTmV1ZSYjMzQ7LCBBcmlhbCwgJiMzNDtOb3RvIFNhbnMmIzM0OywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjOTQ5NkEyIiBmb250LXNpemU9IjhweCI+LjwvdGV4dD48L3N2Zz4=';
                                  }}
                                />
                              </div>
                            ) : (
                              <div className="bg-gray-50 rounded-md h-20 flex items-center justify-center mt-2">
                                <p className="text-muted-foreground text-sm">No favicon URL provided</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              {/* Colors & Fonts Tab */}
              <TabsContent value="colors" className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Colors & Typography</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="primaryColor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Color</FormLabel>
                          <FormControl>
                            <div className="flex items-center gap-2">
                              <Input {...field} />
                              <div 
                                className="h-10 w-10 rounded-md border"
                                style={{ backgroundColor: field.value }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="secondaryColor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Secondary Color</FormLabel>
                          <FormControl>
                            <div className="flex items-center gap-2">
                              <Input {...field} />
                              <div 
                                className="h-10 w-10 rounded-md border"
                                style={{ backgroundColor: field.value }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="accentColor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Accent Color</FormLabel>
                          <FormControl>
                            <div className="flex items-center gap-2">
                              <Input {...field} />
                              <div 
                                className="h-10 w-10 rounded-md border"
                                style={{ backgroundColor: field.value }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <FormField
                      control={form.control}
                      name="fontPrimary"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Font</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              value={field.value}
                              onChange={field.onChange}
                            >
                              {fontOptions.map((font) => (
                                <option key={font.value} value={font.value}>
                                  {font.label}
                                </option>
                              ))}
                            </select>
                          </FormControl>
                          <FormDescription>
                            Used for headings and important text
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="fontSecondary"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Secondary Font</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              value={field.value}
                              onChange={field.onChange}
                            >
                              {fontOptions.map((font) => (
                                <option key={font.value} value={font.value}>
                                  {font.label}
                                </option>
                              ))}
                            </select>
                          </FormControl>
                          <FormDescription>
                            Used for body text and less prominent elements
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="mt-8 p-4 border rounded-md">
                    <h3 className="font-semibold text-base mb-2">Preview</h3>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-4">
                        <div className="p-4 rounded-md" style={{ backgroundColor: form.watch('primaryColor') }}>
                          <span className="text-white font-medium">Primary</span>
                        </div>
                        <div className="p-4 rounded-md" style={{ backgroundColor: form.watch('secondaryColor') }}>
                          <span className="text-white font-medium">Secondary</span>
                        </div>
                        <div className="p-4 rounded-md" style={{ backgroundColor: form.watch('accentColor') }}>
                          <span className="text-white font-medium">Accent</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 style={{ fontFamily: form.watch('fontPrimary') }} className="text-lg font-bold mb-2">
                          This is a heading in {form.watch('fontPrimary')}
                        </h3>
                        <p style={{ fontFamily: form.watch('fontSecondary') }}>
                          This is body text in {form.watch('fontSecondary')}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Nulla facilisi. Cras vel nisi id urna elementum commodo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Custom Code Tab */}
              <TabsContent value="custom" className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Custom Code</h3>
                  <Alert className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                      Custom code is injected into the application and can affect functionality. 
                      Use with caution and test thoroughly before deploying to production.
                    </AlertDescription>
                  </Alert>
                  
                  <FormField
                    control={form.control}
                    name="customCss"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Custom CSS</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="/* Your custom CSS here */"
                            className="min-h-[200px] font-mono"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Custom CSS styles to be applied to the application
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="customJs"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel>Custom JavaScript</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="// Your custom JavaScript here"
                            className="min-h-[200px] font-mono"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Custom JavaScript code to be executed in the application
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>
              
              {/* Legal & Social Tab */}
              <TabsContent value="legal" className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Legal Information & Social Links</h3>
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="contactEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Email</FormLabel>
                          <FormControl>
                            <Input placeholder="support@yourcompany.com" {...field} />
                          </FormControl>
                          <FormDescription>
                            Email address for user inquiries
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="supportUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Support URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourcompany.com/support" {...field} />
                          </FormControl>
                          <FormDescription>
                            URL to your support or help center
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="privacyPolicyUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Privacy Policy URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://yourcompany.com/privacy" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="termsOfServiceUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Terms of Service URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://yourcompany.com/terms" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="socialLinks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Social Media Links (JSON)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder='{"twitter": "https://twitter.com/yourcompany", "linkedin": "https://linkedin.com/company/yourcompany"}'
                              className="min-h-[120px] font-mono"
                              value={typeof field.value === 'object' ? JSON.stringify(field.value, null, 2) : field.value}
                              onChange={(e) => field.onChange(e.target.value)}
                            />
                          </FormControl>
                          <FormDescription>
                            Add social media links as a JSON object with platform names as keys and URLs as values
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-between pt-6 border-t">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => form.reset()}
                disabled={updateSettingsMutation.isPending}
              >
                Reset Changes
              </Button>
              <div className="flex gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={applySettings}
                  disabled={updateSettingsMutation.isPending || applySettingsMutation.isPending}
                >
                  Apply Changes
                </Button>
                <Button 
                  type="submit"
                  disabled={updateSettingsMutation.isPending}
                >
                  Save Settings
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default WhitelabelSettings;

const ColorPicker = ({ value, onChange }: { value: string, onChange: (color: string) => void }) => {
  // Simple color picker component
  return (
    <Input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 w-10 p-0 rounded"
    />
  );
};
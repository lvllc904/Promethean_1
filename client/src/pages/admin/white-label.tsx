import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ColorPicker } from "@/components/ui/color-picker";
import { Loader2 } from "lucide-react";

const whitelabelSchema = z.object({
  platformName: z.string().min(2, "Platform name must be at least 2 characters"),
  platformLogo: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  primaryColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Please enter a valid hex color"),
  secondaryColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Please enter a valid hex color"),
  faviconUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  customDomain: z.string().optional().or(z.literal("")),
  contactEmail: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  customCss: z.string().optional().or(z.literal("")),
  enableWhitelabel: z.boolean().default(false),
  footerText: z.string().optional().or(z.literal("")),
  termsUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  privacyUrl: z.string().url("Please enter a valid URL").optional().or(z.literal(""))
});

type WhitelabelSettings = z.infer<typeof whitelabelSchema>;

export default function WhiteLabelPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState("branding");

  // Fetch current white-label settings
  const { data: settings, isLoading } = useQuery<WhitelabelSettings>({
    queryKey: ['/api/admin/white-label'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/admin/white-label');
        if (!response.ok) throw new Error('Failed to fetch white-label settings');
        return await response.json();
      } catch (error) {
        // If settings don't exist yet, return default values
        return {
          platformName: "DAC Marketplace",
          primaryColor: "#3B82F6",
          secondaryColor: "#10B981",
          enableWhitelabel: false
        };
      }
    }
  });

  const form = useForm<WhitelabelSettings>({
    resolver: zodResolver(whitelabelSchema),
    defaultValues: settings || {
      platformName: "DAC Marketplace",
      primaryColor: "#3B82F6",
      secondaryColor: "#10B981",
      enableWhitelabel: false,
      customCss: ""
    },
    values: settings
  });

  const updateMutation = useMutation({
    mutationFn: async (data: WhitelabelSettings) => {
      const response = await apiRequest('POST', '/api/admin/white-label', data);
      if (!response.ok) {
        throw new Error('Failed to update white-label settings');
      }
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/white-label'] });
      toast({
        title: "Settings updated",
        description: "White-label settings have been saved successfully."
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  function onSubmit(data: WhitelabelSettings) {
    updateMutation.mutate(data);
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">White-Label Configuration</h1>
          <p className="text-muted-foreground mt-2">
            Customize the platform's appearance and branding for your clients
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>White-Labeling Settings</CardTitle>
                    <CardDescription>
                      Enable white-labeling to customize the platform for your clients
                    </CardDescription>
                  </div>
                  <FormField
                    control={form.control}
                    name="enableWhitelabel"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            {field.value ? "Enabled" : "Disabled"}
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-2 md:grid-cols-none mb-6">
                    <TabsTrigger value="branding">Branding</TabsTrigger>
                    <TabsTrigger value="appearance">Appearance</TabsTrigger>
                    <TabsTrigger value="domain">Domain & URLs</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced</TabsTrigger>
                  </TabsList>

                  <TabsContent value="branding" className="space-y-4">
                    <FormField
                      control={form.control}
                      name="platformName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Platform Name</FormLabel>
                          <FormControl>
                            <Input placeholder="DAC Marketplace" {...field} />
                          </FormControl>
                          <FormDescription>
                            The name displayed in the header and title
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="platformLogo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Logo URL</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://example.com/logo.png"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormDescription>
                            URL to your company logo (SVG or PNG recommended)
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
                            <Input
                              placeholder="https://example.com/favicon.ico"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormDescription>
                            URL to your favicon (ICO, PNG or SVG)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="footerText"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Footer Text</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="© 2025 Your Company"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormDescription>
                            Custom text to display in the footer
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>

                  <TabsContent value="appearance" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="primaryColor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Primary Color</FormLabel>
                            <FormControl>
                              <div className="flex space-x-2">
                                <ColorPicker
                                  value={field.value}
                                  onChange={field.onChange}
                                />
                                <Input {...field} />
                              </div>
                            </FormControl>
                            <FormDescription>
                              Main accent color used throughout the platform
                            </FormDescription>
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
                              <div className="flex space-x-2">
                                <ColorPicker
                                  value={field.value}
                                  onChange={field.onChange}
                                />
                                <Input {...field} />
                              </div>
                            </FormControl>
                            <FormDescription>
                              Used for complementary UI elements
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="mt-6">
                      <Label>Theme Preview</Label>
                      <div className="mt-2 p-6 border rounded-md">
                        <div className="space-y-4">
                          <div>
                            <Button
                              style={{ backgroundColor: form.watch("primaryColor") }}
                            >
                              Primary Button
                            </Button>
                            <Button
                              variant="outline"
                              className="ml-2"
                              style={{ borderColor: form.watch("secondaryColor"), color: form.watch("secondaryColor") }}
                            >
                              Secondary Button
                            </Button>
                          </div>
                          <div className="flex space-x-2">
                            <div
                              className="w-8 h-8 rounded-full"
                              style={{ backgroundColor: form.watch("primaryColor") }}
                            ></div>
                            <div
                              className="w-8 h-8 rounded-full"
                              style={{ backgroundColor: form.watch("secondaryColor") }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="domain" className="space-y-4">
                    <FormField
                      control={form.control}
                      name="customDomain"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Custom Domain</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="app.yourcompany.com"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormDescription>
                            Your custom domain for the platform (requires DNS configuration)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contactEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="support@yourcompany.com"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormDescription>
                            Email address displayed for support inquiries
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="termsUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Terms of Service URL</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://example.com/terms"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormDescription>
                            Link to your custom Terms of Service
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="privacyUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Privacy Policy URL</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://example.com/privacy"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormDescription>
                            Link to your custom Privacy Policy
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>

                  <TabsContent value="advanced" className="space-y-4">
                    <FormField
                      control={form.control}
                      name="customCss"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Custom CSS</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder=".header { background-color: #f5f5f5; }"
                              className="font-mono h-48"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormDescription>
                            Add custom CSS to further customize the platform (applied platform-wide)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => {
                    form.reset({
                      platformName: "DAC Marketplace",
                      primaryColor: "#3B82F6",
                      secondaryColor: "#10B981",
                      enableWhitelabel: false,
                      customCss: ""
                    });
                    toast({
                      title: "Defaults restored",
                      description: "Form has been reset to default values"
                    });
                  }}
                >
                  Reset to Defaults
                </Button>
                <Button
                  type="submit"
                  disabled={updateMutation.isPending}
                >
                  {updateMutation.isPending && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
}
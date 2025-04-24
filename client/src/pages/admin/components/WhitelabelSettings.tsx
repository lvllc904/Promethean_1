import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface WhitelabelSettings {
  id: number;
  companyName: string;
  logoUrl: string | null;
  faviconUrl: string | null;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontPrimary: string;
  fontSecondary: string;
  customCss: string | null;
  customJs: string | null;
  contactEmail: string | null;
  supportUrl: string | null;
  privacyPolicyUrl: string | null;
  termsOfServiceUrl: string | null;
  socialLinks: Record<string, string> | null;
  customDomain: string | null;
}

export default function WhitelabelSettings() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState('branding');
  
  const [formData, setFormData] = useState<Partial<WhitelabelSettings>>({
    companyName: '',
    logoUrl: '',
    faviconUrl: '',
    primaryColor: '#3B82F6',
    secondaryColor: '#10B981',
    accentColor: '#8B5CF6',
    fontPrimary: 'Inter',
    fontSecondary: 'Inter',
    customCss: '',
    customJs: '',
    contactEmail: '',
    supportUrl: '',
    privacyPolicyUrl: '',
    termsOfServiceUrl: '',
    customDomain: '',
  });
  
  // Fetch whitelabel settings
  const { data: settings, isLoading, error } = useQuery({
    queryKey: ['/api/admin/whitelabel-settings'],
    retry: 1,
  });
  
  // Update settings on data load
  useEffect(() => {
    if (settings) {
      setFormData({
        ...formData,
        ...settings,
      });
    }
  }, [settings]);
  
  // Update settings mutation
  const updateMutation = useMutation({
    mutationFn: (data: Partial<WhitelabelSettings>) => {
      return apiRequest('/api/admin/whitelabel-settings', {
        method: 'PATCH',
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/whitelabel-settings'] });
      toast({
        title: 'Success',
        description: 'Whitelabel settings updated successfully',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: 'Failed to update settings. Please try again.',
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
  
  // Handle color change
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };
  
  // Preview style based on current settings
  const previewStyle = {
    backgroundColor: formData.primaryColor,
    color: '#ffffff',
    fontFamily: formData.fontPrimary,
    padding: '20px',
    borderRadius: '8px',
    position: 'relative' as 'relative',
  };
  
  const accentStyle = {
    backgroundColor: formData.accentColor,
    padding: '10px',
    borderRadius: '4px',
    marginTop: '10px',
  };
  
  const secondaryStyle = {
    backgroundColor: formData.secondaryColor,
    padding: '6px 12px',
    borderRadius: '4px',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    fontFamily: formData.fontSecondary,
  };
  
  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }
  
  if (error) {
    return <div className="text-red-500">Error loading whitelabel settings. Please try again.</div>;
  }
  
  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <form onSubmit={handleSubmit}>
          <TabsContent value="branding" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName || ''}
                  onChange={handleInputChange}
                  placeholder="Your Company Name"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="logoUrl">Logo URL</Label>
                <Input
                  id="logoUrl"
                  name="logoUrl"
                  value={formData.logoUrl || ''}
                  onChange={handleInputChange}
                  placeholder="https://example.com/logo.png"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="faviconUrl">Favicon URL</Label>
                <Input
                  id="faviconUrl"
                  name="faviconUrl"
                  value={formData.faviconUrl || ''}
                  onChange={handleInputChange}
                  placeholder="https://example.com/favicon.ico"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail || ''}
                  onChange={handleInputChange}
                  placeholder="support@example.com"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="supportUrl">Support URL</Label>
                <Input
                  id="supportUrl"
                  name="supportUrl"
                  value={formData.supportUrl || ''}
                  onChange={handleInputChange}
                  placeholder="https://example.com/support"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="customDomain">Custom Domain</Label>
                <Input
                  id="customDomain"
                  name="customDomain"
                  value={formData.customDomain || ''}
                  onChange={handleInputChange}
                  placeholder="app.yourdomain.com"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-4">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex gap-3">
                    <Input
                      id="primaryColor"
                      name="primaryColor"
                      type="color"
                      className="w-12 h-10 p-1"
                      value={formData.primaryColor || '#3B82F6'}
                      onChange={handleColorChange}
                    />
                    <Input
                      value={formData.primaryColor || '#3B82F6'}
                      onChange={handleColorChange}
                      name="primaryColor"
                      className="font-mono"
                    />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="secondaryColor">Secondary Color</Label>
                  <div className="flex gap-3">
                    <Input
                      id="secondaryColor"
                      name="secondaryColor"
                      type="color"
                      className="w-12 h-10 p-1"
                      value={formData.secondaryColor || '#10B981'}
                      onChange={handleColorChange}
                    />
                    <Input
                      value={formData.secondaryColor || '#10B981'}
                      onChange={handleColorChange}
                      name="secondaryColor"
                      className="font-mono"
                    />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="accentColor">Accent Color</Label>
                  <div className="flex gap-3">
                    <Input
                      id="accentColor"
                      name="accentColor"
                      type="color"
                      className="w-12 h-10 p-1"
                      value={formData.accentColor || '#8B5CF6'}
                      onChange={handleColorChange}
                    />
                    <Input
                      value={formData.accentColor || '#8B5CF6'}
                      onChange={handleColorChange}
                      name="accentColor"
                      className="font-mono"
                    />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="fontPrimary">Primary Font</Label>
                  <Input
                    id="fontPrimary"
                    name="fontPrimary"
                    value={formData.fontPrimary || 'Inter'}
                    onChange={handleInputChange}
                    placeholder="Inter, sans-serif"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="fontSecondary">Secondary Font</Label>
                  <Input
                    id="fontSecondary"
                    name="fontSecondary"
                    value={formData.fontSecondary || 'Inter'}
                    onChange={handleInputChange}
                    placeholder="Inter, sans-serif"
                  />
                </div>
              </div>
              
              {/* Preview */}
              <div>
                <h3 className="text-lg font-medium mb-2">Preview</h3>
                <Card>
                  <CardContent className="p-6">
                    <div style={previewStyle}>
                      <h2 style={{ fontFamily: formData.fontPrimary, fontWeight: 'bold', fontSize: '1.5rem' }}>
                        {formData.companyName || 'Your Company Name'}
                      </h2>
                      <div style={accentStyle}>
                        <p>This is how your accent color looks</p>
                      </div>
                      <button style={secondaryStyle}>Action Button</button>
                    </div>
                  </CardContent>
                </Card>
                <p className="text-sm text-muted-foreground mt-2">
                  Preview shows approximate styling based on your selections
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="privacyPolicyUrl">Privacy Policy URL</Label>
                <Input
                  id="privacyPolicyUrl"
                  name="privacyPolicyUrl"
                  value={formData.privacyPolicyUrl || ''}
                  onChange={handleInputChange}
                  placeholder="https://example.com/privacy"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="termsOfServiceUrl">Terms of Service URL</Label>
                <Input
                  id="termsOfServiceUrl"
                  name="termsOfServiceUrl"
                  value={formData.termsOfServiceUrl || ''}
                  onChange={handleInputChange}
                  placeholder="https://example.com/terms"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="customCss">Custom CSS</Label>
                <Textarea
                  id="customCss"
                  name="customCss"
                  value={formData.customCss || ''}
                  onChange={handleInputChange}
                  placeholder="/* Your custom CSS here */"
                  className="min-h-32 font-mono text-sm"
                />
                <p className="text-sm text-muted-foreground">
                  Custom CSS will be injected into the page. Use with caution.
                </p>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="customJs">Custom JavaScript</Label>
                <Textarea
                  id="customJs"
                  name="customJs"
                  value={formData.customJs || ''}
                  onChange={handleInputChange}
                  placeholder="// Your custom JavaScript here"
                  className="min-h-32 font-mono text-sm"
                />
                <p className="text-sm text-muted-foreground">
                  Custom JavaScript will be executed on page load. Use with extreme caution.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <div className="flex justify-end mt-6">
            <Button type="submit" disabled={updateMutation.isPending}>
              {updateMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </div>
        </form>
      </Tabs>
    </div>
  );
}
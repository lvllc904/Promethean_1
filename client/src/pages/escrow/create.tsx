import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useWallet } from "@/components/wallet/wallet-provider";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { apiRequest } from "@/lib/queryClient";

import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage, 
  FormDescription 
} from "@/components/ui/form";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Lock, AlertCircle, DollarSign, Building2, User } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Define the form schema
const formSchema = z.object({
  propertyId: z.string().min(1, "Property is required"),
  buyerId: z.string().min(1, "Buyer is required"),
  amount: z.string().min(1, "Amount is required"),
  currency: z.string().default("USD"),
  escrowPeriod: z.string().min(1, "Escrow period is required"),
  termsAndConditions: z.string().min(10, "Please provide terms and conditions"),
  additionalDocuments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreateEscrow() {
  const { isConnected, user: walletUser } = useWallet();
  const { user: authUser } = useAuth();
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Use either wallet user or auth user
  const user = walletUser || authUser;

  // Define form with validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyId: "",
      buyerId: "",
      amount: "",
      currency: "USD",
      escrowPeriod: "30",
      termsAndConditions: "",
      additionalDocuments: "",
    },
  });

  // Fetch user's properties (where they are the owner)
  const { data: properties, isLoading: isLoadingProperties } = useQuery({
    queryKey: ['/api/properties/my'],
    queryFn: async () => {
      const response = await fetch('/api/properties/my');
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }
      return response.json();
    },
    enabled: !!user?.id, // Enable if either wallet or auth user is available
  });

  // Fetch potential buyers (simplified - in a real app this would be more sophisticated)
  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ['/api/users'],
    queryFn: async () => {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    },
    enabled: !!user?.id, // Enable if either wallet or auth user is available
  });

  // Handle form submission
  async function onSubmit(values: FormValues) {
    if (!user?.id) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to create an escrow",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const escrowData = {
        propertyId: parseInt(values.propertyId),
        sellerId: user.id,
        buyerId: parseInt(values.buyerId),
        amount: values.amount,
        currency: values.currency,
        escrowPeriod: parseInt(values.escrowPeriod),
        termsAndConditions: values.termsAndConditions,
        additionalDocuments: values.additionalDocuments ? values.additionalDocuments.split(',').map(d => d.trim()) : [],
      };

      const response = await apiRequest("POST", "/api/escrows", escrowData);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create escrow");
      }

      const newEscrow = await response.json();

      toast({
        title: "Escrow Created",
        description: `Escrow #${newEscrow.id} has been created successfully`,
      });

      // Navigate to escrow management
      navigate("/escrow/manage");
    } catch (error: any) {
      console.error("Error creating escrow:", error);
      toast({
        title: "Error",
        description: error.message || "An error occurred while creating the escrow",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // If no user is authenticated (neither wallet nor traditional auth)
  if (!user?.id) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <Lock className="h-16 w-16 text-primary-500 mb-4" />
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">Authentication Required</h2>
          <p className="text-neutral-600 mb-6 max-w-md">
            You need to sign in or connect your wallet to create an escrow for secure property transactions.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => navigate("/auth/login")}>
              Sign In
            </Button>
            {!isConnected && (
              <Button variant="outline" onClick={() => toast({ title: "Connect Wallet", description: "Use the connect button at the bottom of the sidebar" })}>
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-neutral-800 mb-2">Create New Escrow</h1>
          <p className="text-neutral-600">
            Set up a secure escrow agreement for your property transaction with blockchain protection.
          </p>
        </div>

        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            Creating an escrow will generate a smart contract on the blockchain to hold funds until all conditions are met. Both parties must agree to the terms.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>Escrow Details</CardTitle>
            <CardDescription>
              Fill out the information below to create a new escrow agreement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Property Selection */}
                  <FormField
                    control={form.control}
                    name="propertyId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Property</FormLabel>
                        <Select 
                          disabled={isLoadingProperties} 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a property" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {isLoadingProperties ? (
                              <SelectItem value="loading">Loading properties...</SelectItem>
                            ) : properties?.length > 0 ? (
                              properties.map((property) => (
                                <SelectItem key={property.id} value={property.id.toString()}>
                                  {property.title || `Property #${property.id}`}
                                </SelectItem>
                              ))
                            ) : (
                              <SelectItem value="none" disabled>
                                No properties found
                              </SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          <Building2 className="inline h-3 w-3 mr-1" />
                          Only properties you own can be used for escrow
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Buyer Selection */}
                  <FormField
                    control={form.control}
                    name="buyerId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Buyer</FormLabel>
                        <Select 
                          disabled={isLoadingUsers} 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a buyer" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {isLoadingUsers ? (
                              <SelectItem value="loading">Loading users...</SelectItem>
                            ) : users?.length > 0 ? (
                              users
                                .filter(u => u.id !== user?.id) // Filter out current user
                                .map((u) => (
                                  <SelectItem key={u.id} value={u.id.toString()}>
                                    {u.name || u.username || `User #${u.id}`}
                                  </SelectItem>
                                ))
                            ) : (
                              <SelectItem value="none" disabled>
                                No users found
                              </SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          <User className="inline h-3 w-3 mr-1" />
                          The buyer will need to fund and approve the escrow
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Amount */}
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-500" />
                            <Input
                              type="number"
                              min="0"
                              step="0.01"
                              className="pl-10"
                              placeholder="0.00"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>
                          The amount to be held in escrow
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Currency */}
                  <FormField
                    control={form.control}
                    name="currency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Currency</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select currency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="USD">USD - US Dollar</SelectItem>
                            <SelectItem value="EUR">EUR - Euro</SelectItem>
                            <SelectItem value="GBP">GBP - British Pound</SelectItem>
                            <SelectItem value="ETH">ETH - Ethereum</SelectItem>
                            <SelectItem value="DAC">DAC - DAC Token</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          The currency for the escrow amount
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Escrow Period */}
                <FormField
                  control={form.control}
                  name="escrowPeriod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Escrow Period (Days)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select escrow period" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="14">14 days</SelectItem>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="60">60 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="180">180 days</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        The number of days the escrow will be active before expiration
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Terms and Conditions */}
                <FormField
                  control={form.control}
                  name="termsAndConditions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Terms and Conditions</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the terms of this escrow agreement..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Clearly outline all conditions that must be met for the escrow to be released
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Additional Documents */}
                <FormField
                  control={form.control}
                  name="additionalDocuments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Documents (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Document URLs separated by commas"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Add links to any supporting documents (separated by commas)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? "Creating Escrow..." : "Create Escrow"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
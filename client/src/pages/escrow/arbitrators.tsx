import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useWallet } from "@/components/wallet/wallet-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage, 
  FormDescription 
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Lock, 
  UserCheck, 
  Shield, 
  Star, 
  CircleCheck, 
  Building, 
  Gavel 
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

interface Arbitrator {
  id: number;
  userId: number;
  walletAddress: string;
  companyName: string | null;
  licenseNumber: string | null;
  specialties: string[] | null;
  rating: string | null;
  totalCases: number | null;
  successfulResolutions: number | null;
  verificationDocuments: string[] | null;
  isVerified: boolean | null;
  createdAt: string;
}

interface User {
  id: number;
  username: string;
  name?: string;
  walletAddress?: string;
  email?: string;
}

const arbitratorFormSchema = z.object({
  walletAddress: z.string().min(1, "Wallet address is required"),
  companyName: z.string().optional(),
  licenseNumber: z.string().optional(),
  specialties: z.string().optional(),
  verificationDocuments: z.string().optional(),
});

type ArbitratorFormValues = z.infer<typeof arbitratorFormSchema>;

const RegisterArbitratorForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const { user } = useWallet();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<ArbitratorFormValues>({
    resolver: zodResolver(arbitratorFormSchema),
    defaultValues: {
      walletAddress: user?.walletAddress || "",
      companyName: "",
      licenseNumber: "",
      specialties: "",
      verificationDocuments: "",
    }
  });

  const onSubmit = async (values: ArbitratorFormValues) => {
    if (!user?.id) {
      toast({
        title: "Not connected",
        description: "Please connect your wallet to register as an arbitrator",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const arbitratorData = {
        userId: user.id,
        walletAddress: values.walletAddress,
        companyName: values.companyName || null,
        licenseNumber: values.licenseNumber || null,
        specialties: values.specialties ? values.specialties.split(',').map(s => s.trim()) : [],
        verificationDocuments: values.verificationDocuments ? values.verificationDocuments.split(',').map(d => d.trim()) : [],
      };

      const response = await apiRequest("POST", "/api/arbitrators", arbitratorData);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register as arbitrator");
      }

      toast({
        title: "Registration Submitted",
        description: "Your arbitrator registration has been submitted for verification",
      });

      form.reset();
      setIsDialogOpen(false);
      onSuccess();
    } catch (error) {
      console.error("Error registering as arbitrator:", error);
      toast({
        title: "Error",
        description: error.message || "An error occurred during registration",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Register as Arbitrator</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Register as Arbitrator</DialogTitle>
          <DialogDescription>
            Become an arbitrator to help resolve disputes in the escrow system. Arbitrators earn fees for successful resolutions.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Wallet Address */}
            <FormField
              control={form.control}
              name="walletAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wallet Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0x..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    The wallet address that will be used for arbitration
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company Name */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your company or organization name"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    If you represent a company or organization
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* License Number */}
            <FormField
              control={form.control}
              name="licenseNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>License Number (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Professional license or certification number"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    If you have a professional license or certification
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Specialties */}
            <FormField
              control={form.control}
              name="specialties"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specialties (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="E.g. Real Estate, Commercial, Residential (comma separated)"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Your areas of expertise, separated by commas
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Verification Documents */}
            <FormField
              control={form.control}
              name="verificationDocuments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Documents (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="URLs to professional certifications, licenses, or credentials (comma separated)"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide links to documents that verify your credentials
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="mt-4">
              <Button 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

const ArbitratorCard = ({ arbitrator, user }: { arbitrator: Arbitrator, user?: User }) => {
  const successRate = arbitrator.totalCases && arbitrator.totalCases > 0
    ? Math.round((arbitrator.successfulResolutions / arbitrator.totalCases) * 100)
    : 0;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{arbitrator.companyName || (user?.name || user?.username || 'Anonymous Arbitrator')}</CardTitle>
            <CardDescription>
              {arbitrator.specialties && arbitrator.specialties.length > 0
                ? arbitrator.specialties.join(', ')
                : 'General Arbitration'
              }
            </CardDescription>
          </div>
          {arbitrator.isVerified ? (
            <Badge className="bg-green-100 text-green-800">
              <CircleCheck className="mr-1 h-3 w-3" /> Verified
            </Badge>
          ) : (
            <Badge variant="outline">Pending Verification</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-4">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-neutral-500">Total Cases</p>
              <p className="text-xl font-semibold">{arbitrator.totalCases || 0}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Success Rate</p>
              <p className="text-xl font-semibold">{successRate}%</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-neutral-500">Resolution Rate</span>
              <span className="text-xs font-medium text-neutral-500">{successRate}%</span>
            </div>
            <Progress value={successRate} className="h-2" />
          </div>
          
          {/* Wallet Address */}
          <div className="pt-2">
            <p className="text-xs text-neutral-500">Wallet Address</p>
            <p className="text-sm font-mono">
              {arbitrator.walletAddress.substring(0, 6)}...{arbitrator.walletAddress.substring(arbitrator.walletAddress.length - 4)}
            </p>
          </div>
          
          {/* License Info if available */}
          {arbitrator.licenseNumber && (
            <div>
              <p className="text-xs text-neutral-500">License Number</p>
              <p className="text-sm font-medium">{arbitrator.licenseNumber}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="bg-neutral-50 pt-4">
        <Button variant="outline" className="w-full" disabled>
          <Shield className="mr-2 h-4 w-4" />
          Select as Arbitrator
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function Arbitrators() {
  const { isConnected, user } = useWallet();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [filterVerified, setFilterVerified] = useState(false);
  
  // Fetch all arbitrators
  const { data: arbitrators, isLoading: isLoadingArbitrators } = useQuery({
    queryKey: ['/api/arbitrators', filterVerified],
    queryFn: async () => {
      const response = await fetch('/api/arbitrators');
      if (!response.ok) {
        throw new Error('Failed to fetch arbitrators');
      }
      const data = await response.json();
      
      // Apply filter if needed
      if (filterVerified) {
        return data.filter(a => a.isVerified);
      }
      
      return data;
    }
  });

  // Fetch users for the arbitrators
  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ['/api/users/arbitrators', arbitrators],
    queryFn: async () => {
      if (!arbitrators?.length) return [];
      
      const userIds = arbitrators.map(a => a.userId);
      const userPromises = userIds.map(async (id) => {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
          console.warn(`Failed to fetch user ${id}`);
          return null;
        }
        return response.json();
      });
      
      const usersResults = await Promise.all(userPromises);
      return usersResults.filter(Boolean);
    },
    enabled: !!arbitrators?.length
  });

  // Check if current user is already registered as an arbitrator
  const isUserRegisteredAsArbitrator = !!arbitrators?.find(a => a.userId === user?.id);

  const handleRefreshData = () => {
    queryClient.invalidateQueries({ queryKey: ['/api/arbitrators'] });
  };

  // Helper to get user by id
  const getUser = (userId: number) => {
    return users?.find(u => u.id === userId);
  };

  if (!isConnected) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <Lock className="h-16 w-16 text-primary-500 mb-4" />
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">Connect Your Wallet</h2>
          <p className="text-neutral-600 mb-6 max-w-md">
            You need to connect your wallet to view arbitrators and register as one.
          </p>
          <Button onClick={() => toast({ title: "Please connect your wallet", description: "Use the connect button at the bottom of the sidebar" })}>
            Connect Wallet
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-neutral-800 mb-2">Arbitrators</h1>
          <p className="text-neutral-600">
            Trusted third parties who help resolve disputes in the escrow system.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          {!isUserRegisteredAsArbitrator ? (
            <RegisterArbitratorForm onSuccess={handleRefreshData} />
          ) : (
            <Badge variant="outline" className="text-green-700 bg-green-50 px-3 py-1.5">
              <UserCheck className="mr-2 h-4 w-4" />
              You are registered as an arbitrator
            </Badge>
          )}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox 
            id="verified" 
            checked={filterVerified}
            onCheckedChange={(checked) => setFilterVerified(checked as boolean)}
          />
          <label
            htmlFor="verified"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show only verified arbitrators
          </label>
        </div>
      </div>

      {isLoadingArbitrators || isLoadingUsers ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="h-64 animate-pulse bg-neutral-100"></Card>
          ))}
        </div>
      ) : arbitrators?.length === 0 ? (
        <Card className="p-6 text-center">
          <div className="flex flex-col items-center">
            <Gavel className="h-12 w-12 text-primary-500 mb-4" />
            <h3 className="text-xl font-medium mb-1">No Arbitrators Found</h3>
            <p className="text-neutral-600 mb-4">
              {filterVerified 
                ? "There are no verified arbitrators yet. Please check back later or view all arbitrators."
                : "There are no registered arbitrators yet. Be the first to register!"
              }
            </p>
            {filterVerified && (
              <Button onClick={() => setFilterVerified(false)}>View All Arbitrators</Button>
            )}
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arbitrators.map(arbitrator => (
            <ArbitratorCard 
              key={arbitrator.id}
              arbitrator={arbitrator}
              user={getUser(arbitrator.userId)}
            />
          ))}
        </div>
      )}

      {/* Arbitration Information */}
      <Alert className="mt-8">
        <div className="flex items-start">
          <div className="mr-2 mt-1">
            <Gavel className="h-4 w-4" />
          </div>
          <div>
            <AlertTitle>About Arbitration</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                Arbitrators play a crucial role in our escrow system by providing impartial dispute resolution for property transactions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-sm font-medium mb-1">Arbitration Process:</h4>
                  <ol className="list-decimal list-inside text-xs space-y-1 text-neutral-600">
                    <li>Buyer or seller raises a dispute</li>
                    <li>An arbitrator is selected</li>
                    <li>Both parties submit evidence</li>
                    <li>Arbitrator reviews the case</li>
                    <li>Final binding decision is rendered</li>
                  </ol>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Becoming an Arbitrator:</h4>
                  <ul className="list-disc list-inside text-xs space-y-1 text-neutral-600">
                    <li>Register with your wallet</li>
                    <li>Provide professional credentials</li>
                    <li>Complete verification process</li>
                    <li>Maintain high success rate</li>
                    <li>Earn fees for each resolved case</li>
                  </ul>
                </div>
              </div>
            </AlertDescription>
          </div>
        </div>
      </Alert>
    </div>
  );
}
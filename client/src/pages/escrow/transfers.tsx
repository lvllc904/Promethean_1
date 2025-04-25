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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Lock, FileText, Building2, CheckCircle2, Clock, User, ExternalLink } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface TitleTransfer {
  id: number;
  propertyId: number;
  fromUserId: number;
  toUserId: number;
  transactionHash: string | null;
  verificationStatus: string;
  tokenId: string | null;
  transferDate: string | null;
  createdAt: string;
  legalDocuments: string[] | null;
  metadata: any;
}

interface Property {
  id: number;
  title: string;
  description: string;
  price: string;
  location?: string;
  imageUrl?: string;
  userId: number;
}

interface User {
  id: number;
  username: string;
  name?: string;
  walletAddress?: string;
}

const transferFormSchema = z.object({
  propertyId: z.string().min(1, "Property is required"),
  toUserId: z.string().min(1, "Recipient is required"),
  transactionHash: z.string().optional(),
  legalDocuments: z.string().optional(),
  metadata: z.string().optional()
});

type TransferFormValues = z.infer<typeof transferFormSchema>;

const CreateTransferForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const { user } = useWallet();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<TransferFormValues>({
    resolver: zodResolver(transferFormSchema),
    defaultValues: {
      propertyId: "",
      toUserId: "",
      transactionHash: "",
      legalDocuments: "",
      metadata: "{}"
    }
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
    enabled: !!user?.id,
  });

  // Fetch users (potential recipients)
  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ['/api/users'],
    queryFn: async () => {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    }
  });

  const onSubmit = async (values: TransferFormValues) => {
    if (!user?.id) {
      toast({
        title: "Not connected",
        description: "Please connect your wallet to create a title transfer",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const transferData = {
        propertyId: parseInt(values.propertyId),
        fromUserId: user.id,
        toUserId: parseInt(values.toUserId),
        transactionHash: values.transactionHash || null,
        legalDocuments: values.legalDocuments ? values.legalDocuments.split(',').map(d => d.trim()) : [],
        metadata: values.metadata ? JSON.parse(values.metadata) : {}
      };

      const response = await apiRequest("POST", "/api/title-transfers", transferData);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create title transfer");
      }

      toast({
        title: "Title Transfer Created",
        description: "The title transfer has been initiated successfully",
      });

      form.reset();
      setIsDialogOpen(false);
      onSuccess();
    } catch (error) {
      console.error("Error creating title transfer:", error);
      toast({
        title: "Error",
        description: error.message || "An error occurred while creating the title transfer",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Create New Title Transfer</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create Title Transfer</DialogTitle>
          <DialogDescription>
            Initiate a property title transfer to another user. This will be recorded on the blockchain.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      Select property to transfer
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Recipient Selection */}
              <FormField
                control={form.control}
                name="toUserId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Recipient</FormLabel>
                    <Select 
                      disabled={isLoadingUsers} 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a recipient" />
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
                      User to transfer the property to
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Transaction Hash */}
            <FormField
              control={form.control}
              name="transactionHash"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transaction Hash (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0x..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    If you've already executed this transfer on the blockchain, provide the transaction hash
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Legal Documents */}
            <FormField
              control={form.control}
              name="legalDocuments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Legal Documents (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Document URLs separated by commas"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Add links to any legal documents (separated by commas)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Metadata */}
            <FormField
              control={form.control}
              name="metadata"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Metadata (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='{"key": "value"}'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Add any additional data as JSON
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
                {isSubmitting ? "Creating Transfer..." : "Create Transfer"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

const TransferDetails = ({ transfer, property, sender, receiver }: {
  transfer: TitleTransfer;
  property?: Property;
  sender?: User;
  receiver?: User;
}) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isUpdating, setIsUpdating] = useState(false);

  const updateTransferStatus = async (status: string) => {
    try {
      setIsUpdating(true);
      
      const response = await apiRequest(
        "PATCH", 
        `/api/title-transfers/${transfer.id}/status`, 
        { status }
      );
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to update transfer status");
      }
      
      toast({
        title: "Success",
        description: `Transfer status updated to ${status}`,
      });
      
      queryClient.invalidateQueries({ queryKey: ['/api/title-transfers'] });
      
    } catch (error) {
      console.error("Error updating transfer:", error);
      toast({
        title: "Error",
        description: error.message || "An error occurred while updating the transfer",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Title Transfer #{transfer.id}</CardTitle>
            <CardDescription>
              Created on {new Date(transfer.createdAt).toLocaleDateString()}
            </CardDescription>
          </div>
          <Badge className={
            transfer.verificationStatus === 'completed' ? 'bg-green-100 text-green-800' :
            transfer.verificationStatus === 'verified' ? 'bg-blue-100 text-blue-800' :
            transfer.verificationStatus === 'rejected' ? 'bg-red-100 text-red-800' :
            'bg-amber-100 text-amber-800'
          }>
            {transfer.verificationStatus.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center mb-2">
              <Building2 className="mr-2 h-4 w-4 text-neutral-500" />
              <h3 className="font-medium">Property</h3>
            </div>
            <div className="bg-neutral-50 p-3 rounded-md">
              <p className="text-sm font-semibold">{property?.title || `Property #${transfer.propertyId}`}</p>
              <p className="text-sm text-neutral-600">{property?.location || 'No location specified'}</p>
              {property?.price && (
                <p className="text-sm text-neutral-600">Valued at ${parseFloat(property.price).toLocaleString()}</p>
              )}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <Clock className="mr-2 h-4 w-4 text-neutral-500" />
              <h3 className="font-medium">Transfer Timeline</h3>
            </div>
            <div className="bg-neutral-50 p-3 rounded-md">
              <p className="text-sm"><span className="font-medium">Created:</span> {new Date(transfer.createdAt).toLocaleDateString()}</p>
              {transfer.transferDate && (
                <p className="text-sm"><span className="font-medium">Transferred:</span> {new Date(transfer.transferDate).toLocaleDateString()}</p>
              )}
              {transfer.tokenId && (
                <p className="text-sm"><span className="font-medium">Token ID:</span> {transfer.tokenId}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center mb-2">
              <User className="mr-2 h-4 w-4 text-neutral-500" />
              <h3 className="font-medium">From</h3>
            </div>
            <div className="bg-neutral-50 p-3 rounded-md">
              <p className="text-sm font-semibold">{sender?.name || sender?.username || `User #${transfer.fromUserId}`}</p>
              {sender?.walletAddress && (
                <p className="text-sm text-neutral-600 font-mono">
                  {sender.walletAddress.substring(0, 6)}...{sender.walletAddress.substring(sender.walletAddress.length - 4)}
                </p>
              )}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <User className="mr-2 h-4 w-4 text-neutral-500" />
              <h3 className="font-medium">To</h3>
            </div>
            <div className="bg-neutral-50 p-3 rounded-md">
              <p className="text-sm font-semibold">{receiver?.name || receiver?.username || `User #${transfer.toUserId}`}</p>
              {receiver?.walletAddress && (
                <p className="text-sm text-neutral-600 font-mono">
                  {receiver.walletAddress.substring(0, 6)}...{receiver.walletAddress.substring(receiver.walletAddress.length - 4)}
                </p>
              )}
            </div>
          </div>
        </div>
        
        {transfer.transactionHash && (
          <div>
            <div className="flex items-center mb-2">
              <ExternalLink className="mr-2 h-4 w-4 text-neutral-500" />
              <h3 className="font-medium">Blockchain Record</h3>
            </div>
            <div className="bg-neutral-50 p-3 rounded-md">
              <div className="flex items-center">
                <span className="text-sm mr-2">Transaction:</span>
                <a 
                  href={`https://etherscan.io/tx/${transfer.transactionHash}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:underline flex items-center"
                >
                  {transfer.transactionHash.substring(0, 10)}...{transfer.transactionHash.substring(transfer.transactionHash.length - 8)}
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        )}
        
        {transfer.legalDocuments && transfer.legalDocuments.length > 0 && (
          <div>
            <div className="flex items-center mb-2">
              <FileText className="mr-2 h-4 w-4 text-neutral-500" />
              <h3 className="font-medium">Legal Documents</h3>
            </div>
            <div className="bg-neutral-50 p-3 rounded-md">
              <ul className="list-disc list-inside space-y-1">
                {transfer.legalDocuments.map((doc, index) => (
                  <li key={index} className="text-sm">
                    <a 
                      href={doc} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Document {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {transfer.verificationStatus === 'pending' && (
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => updateTransferStatus('rejected')}
              disabled={isUpdating}
            >
              Reject Transfer
            </Button>
            <Button 
              variant="default" 
              onClick={() => updateTransferStatus('verified')}
              disabled={isUpdating}
            >
              Verify Transfer
            </Button>
          </div>
        )}
        {transfer.verificationStatus === 'verified' && (
          <Button 
            variant="default" 
            onClick={() => updateTransferStatus('completed')}
            disabled={isUpdating}
          >
            Complete Transfer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default function TitleTransfers() {
  const { isConnected, user } = useWallet();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState("all");

  // Fetch properties owned by the user
  const { data: userProperties, isLoading: isLoadingUserProperties } = useQuery({
    queryKey: ['/api/properties/my'],
    queryFn: async () => {
      if (!user?.id) return [];
      
      const response = await fetch('/api/properties/my');
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }
      
      return response.json();
    },
    enabled: !!isConnected && !!user?.id
  });

  // Fetch title transfers for all user properties
  const { data: transfers, isLoading: isLoadingTransfers } = useQuery({
    queryKey: ['/api/title-transfers', userProperties],
    queryFn: async () => {
      if (!userProperties?.length) return [];
      
      // Fetch transfers for each property
      const transferPromises = userProperties.map(async (property) => {
        const response = await fetch(`/api/title-transfers?propertyId=${property.id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch transfers for property ${property.id}`);
        }
        return response.json();
      });
      
      const transfersArrays = await Promise.all(transferPromises);
      return transfersArrays.flat();
    },
    enabled: !!userProperties?.length
  });

  // Fetch properties for the transfers
  const { data: properties, isLoading: isLoadingProperties } = useQuery({
    queryKey: ['/api/properties/transfers'],
    queryFn: async () => {
      if (!transfers?.length) return [];
      
      const propertyIds = [...new Set(transfers.map(t => t.propertyId))];
      const propertyPromises = propertyIds.map(async (id) => {
        const response = await fetch(`/api/properties/${id}`);
        if (!response.ok) {
          console.warn(`Failed to fetch property ${id}`);
          return null;
        }
        return response.json();
      });
      
      const propertiesResults = await Promise.all(propertyPromises);
      return propertiesResults.filter(Boolean);
    },
    enabled: !!transfers?.length
  });

  // Fetch users for the transfers
  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ['/api/users/transfers'],
    queryFn: async () => {
      if (!transfers?.length) return [];
      
      const userIds = [...new Set(transfers.flatMap(t => [t.fromUserId, t.toUserId]))];
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
    enabled: !!transfers?.length
  });

  const handleRefreshData = () => {
    queryClient.invalidateQueries({ queryKey: ['/api/title-transfers'] });
    queryClient.invalidateQueries({ queryKey: ['/api/properties/transfers'] });
    queryClient.invalidateQueries({ queryKey: ['/api/users/transfers'] });
  };

  // Helper to get property by id
  const getProperty = (propertyId: number) => {
    return properties?.find(p => p.id === propertyId);
  };

  // Helper to get user by id
  const getUser = (userId: number) => {
    return users?.find(u => u.id === userId);
  };

  // Filter transfers based on active tab
  const filteredTransfers = transfers?.filter(transfer => {
    if (activeTab === "all") return true;
    if (activeTab === "outgoing") return transfer.fromUserId === user?.id;
    if (activeTab === "incoming") return transfer.toUserId === user?.id;
    if (activeTab === "pending") return transfer.verificationStatus === "pending";
    if (activeTab === "completed") return transfer.verificationStatus === "completed";
    return true;
  }) || [];

  if (!isConnected) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <Lock className="h-16 w-16 text-primary-500 mb-4" />
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">Connect Your Wallet</h2>
          <p className="text-neutral-600 mb-6 max-w-md">
            You need to connect your wallet to view and manage property title transfers.
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
          <h1 className="text-3xl font-bold text-neutral-800 mb-2">Title Transfers</h1>
          <p className="text-neutral-600">
            Manage property title transfers on the blockchain.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <CreateTransferForm onSuccess={handleRefreshData} />
        </div>
      </div>

      <div className="mb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
            <TabsTrigger value="incoming">Incoming</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab}>
            {isLoadingTransfers || isLoadingProperties || isLoadingUsers ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="w-full h-48 animate-pulse bg-neutral-100"></Card>
                ))}
              </div>
            ) : filteredTransfers.length === 0 ? (
              <Card className="p-6 text-center">
                <div className="flex flex-col items-center">
                  {activeTab === "completed" ? (
                    <>
                      <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                      <h3 className="text-xl font-medium mb-1">No Completed Transfers</h3>
                      <p className="text-neutral-600 mb-4">You haven't completed any title transfers yet.</p>
                    </>
                  ) : (
                    <>
                      <FileText className="h-12 w-12 text-primary-500 mb-4" />
                      <h3 className="text-xl font-medium mb-1">No Title Transfers</h3>
                      <p className="text-neutral-600 mb-4">There are no title transfers matching the selected filter.</p>
                    </>
                  )}
                  <Button onClick={() => setActiveTab("all")}>View All Transfers</Button>
                </div>
              </Card>
            ) : (
              <div>
                {filteredTransfers.map(transfer => (
                  <TransferDetails
                    key={transfer.id}
                    transfer={transfer}
                    property={getProperty(transfer.propertyId)}
                    sender={getUser(transfer.fromUserId)}
                    receiver={getUser(transfer.toUserId)}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Title Transfer Information */}
      <Alert>
        <div className="flex items-start">
          <div className="mr-2 mt-1">
            <FileText className="h-4 w-4" />
          </div>
          <div>
            <AlertTitle>About Title Transfers</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                Property title transfers are recorded on the blockchain to ensure transparency and immutability. The process includes verification steps to confirm the legitimacy of the transfer.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="text-sm font-medium mb-1">Title Transfer Process:</h4>
                  <ol className="list-decimal list-inside text-xs space-y-1 text-neutral-600">
                    <li>Current owner initiates the transfer</li>
                    <li>Legal documents are uploaded and verified</li>
                    <li>Transfer is recorded on the blockchain</li>
                    <li>New owner receives tokenized property deed</li>
                    <li>Title transfer is completed and registered</li>
                  </ol>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Benefits:</h4>
                  <ul className="list-disc list-inside text-xs space-y-1 text-neutral-600">
                    <li>Immutable record of ownership</li>
                    <li>Transparent transaction history</li>
                    <li>Reduced fraud risk</li>
                    <li>Faster transfer process</li>
                    <li>Lower transaction costs</li>
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
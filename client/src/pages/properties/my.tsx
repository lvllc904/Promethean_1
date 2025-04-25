import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CircleDollarSign, Building, PenSquare, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Property {
  id: number;
  title: string;
  description: string;
  price: string;
  location: string;
  imageUrl: string;
  ownershipStatus: string;
  tokenized: boolean;
  valuation: string;
}

export default function MyProperties() {
  const { toast } = useToast();
  const [userId, setUserId] = useState<number | null>(null);

  // Get the current user ID
  useEffect(() => {
    fetch("/api/users/me")
      .then(res => res.json())
      .then(data => {
        setUserId(data.id);
      })
      .catch(err => {
        console.error("Failed to fetch user:", err);
        toast({
          title: "Error",
          description: "Failed to load user information",
          variant: "destructive",
        });
      });
  }, [toast]);

  // Fetch user's properties
  const { data: properties, isLoading, error } = useQuery({
    queryKey: ['/api/properties', userId, 'owned'],
    queryFn: async () => {
      if (!userId) return [];
      const res = await fetch(`/api/properties?ownerId=${userId}`);
      
      if (!res.ok) {
        throw new Error("Failed to fetch properties");
      }
      
      return res.json();
    },
    enabled: !!userId,
  });

  if (error) {
    toast({
      title: "Error",
      description: "Failed to load your properties",
      variant: "destructive",
    });
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Properties</h1>
        <Link href="/properties/create">
          <Button>
            <PenSquare className="mr-2 h-4 w-4" />
            Add Property
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : properties && properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property: Property) => (
            <Card key={property.id} className="overflow-hidden">
              <div 
                className="h-48 bg-center bg-cover" 
                style={{ backgroundImage: `url(${property.imageUrl || '/placeholders/property.jpg'})` }}
              />
              <CardHeader>
                <CardTitle>{property.title}</CardTitle>
                <div className="text-sm text-muted-foreground">{property.location}</div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <CircleDollarSign className="text-primary h-5 w-5 mr-1" />
                    <span className="font-semibold">${property.price}</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="text-primary h-5 w-5 mr-1" />
                    <span>{property.ownershipStatus || "Full Ownership"}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground line-clamp-2">
                  {property.description}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`/properties/${property.id}/details`}>
                  <Button variant="outline">View Details</Button>
                </Link>
                {!property.tokenized && (
                  <Link href={`/properties/${property.id}/tokenize`}>
                    <Button>
                      Tokenize
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
                {property.tokenized && (
                  <Link href={`/properties/${property.id}/valuation`}>
                    <Button variant="secondary">
                      View Valuation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-6 text-center">
          <div className="mb-4 text-muted-foreground">
            <Building className="h-12 w-12 mx-auto mb-2" />
            <p>You don't have any properties yet.</p>
          </div>
          <Link href="/properties/create">
            <Button>
              <PenSquare className="mr-2 h-4 w-4" />
              Add Your First Property
            </Button>
          </Link>
        </Card>
      )}
    </div>
  );
}
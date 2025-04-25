import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingUp, TrendingDown, Building, ArrowLeft, ChevronUp, ChevronDown, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  imageUrl: string;
  valuation: string;
}

interface ValuationData {
  date: string;
  value: number;
  pctChange: number;
}

export default function PropertyValuation() {
  const { toast } = useToast();
  const params = useParams();
  const propertyId = params.id;
  
  // Retrieve property ID from URL or fallback to first property for demo
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(
    propertyId ? parseInt(propertyId) : null
  );

  // Fetch user's properties for selection
  const { data: properties, isLoading: propertiesLoading } = useQuery({
    queryKey: ['/api/properties', 'owned'],
    queryFn: async () => {
      const res = await fetch(`/api/properties?tokenized=true`);
      
      if (!res.ok) {
        throw new Error("Failed to fetch tokenized properties");
      }
      
      return res.json();
    },
  });

  useEffect(() => {
    // If no property is selected but we have properties, select the first one
    if (!selectedPropertyId && properties && properties.length > 0) {
      setSelectedPropertyId(properties[0].id);
    }
  }, [properties, selectedPropertyId]);

  // Fetch valuation data for the selected property
  const { data: valuationData, isLoading: valuationLoading } = useQuery({
    queryKey: ['/api/properties/valuation', selectedPropertyId],
    queryFn: async () => {
      if (!selectedPropertyId) return null;
      
      const res = await fetch(`/api/properties/${selectedPropertyId}/valuation`);
      
      if (!res.ok) {
        throw new Error("Failed to fetch property valuation");
      }
      
      return res.json();
    },
    enabled: !!selectedPropertyId,
  });

  // Generate mock historical data if not available from API
  const [historicalData, setHistoricalData] = useState<ValuationData[]>([]);
  
  useEffect(() => {
    if (valuationData && (!valuationData.historicalData || valuationData.historicalData.length === 0)) {
      // Generate sample historical data if not provided by API
      const currentValue = parseFloat(valuationData.currentValue || "0");
      const startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 12);
      
      const generated = [];
      let lastValue = currentValue * 0.85; // Start value is 85% of current
      
      for (let i = 0; i < 12; i++) {
        const date = new Date(startDate);
        date.setMonth(date.getMonth() + i);
        
        // Random change between -2% and +3%
        const change = ((Math.random() * 5) - 2) / 100;
        const newValue = lastValue * (1 + change);
        
        generated.push({
          date: date.toISOString().split('T')[0],
          value: Math.round(newValue * 100) / 100,
          pctChange: Math.round(change * 10000) / 100 // Convert to percentage with 2 decimals
        });
        
        lastValue = newValue;
      }
      
      setHistoricalData(generated);
    } else if (valuationData && valuationData.historicalData) {
      setHistoricalData(valuationData.historicalData);
    }
  }, [valuationData]);

  // Calculate current month-over-month change
  const currentChange = historicalData.length >= 2 
    ? ((historicalData[historicalData.length - 1]?.value || 0) - 
       (historicalData[historicalData.length - 2]?.value || 0)) / 
      (historicalData[historicalData.length - 2]?.value || 1) * 100
    : 0;

  // Get property details for the selected property
  const selectedProperty = properties?.find((p: Property) => p.id === selectedPropertyId);

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-6">
        <Link href="/properties/my">
          <Button variant="outline" size="icon" className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Property Valuation</h1>
      </div>

      {propertiesLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-80 w-full" />
        </div>
      ) : properties && properties.length > 0 ? (
        <>
          {/* Property selector */}
          <div className="mb-6">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {properties.map((property: Property) => (
                <Button
                  key={property.id}
                  variant={selectedPropertyId === property.id ? "default" : "outline"}
                  onClick={() => setSelectedPropertyId(property.id)}
                  className="whitespace-nowrap"
                >
                  <Building className="mr-2 h-4 w-4" />
                  {property.title}
                </Button>
              ))}
            </div>
          </div>

          {valuationLoading ? (
            <Skeleton className="h-80 w-full" />
          ) : selectedProperty ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Property details card */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Property Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="h-48 bg-center bg-cover mb-4 rounded-md" 
                    style={{ backgroundImage: `url(${selectedProperty.imageUrl || '/placeholders/property.jpg'})` }}
                  />
                  <h3 className="text-xl font-semibold mb-2">{selectedProperty.title}</h3>
                  <p className="text-muted-foreground mb-4">{selectedProperty.location}</p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Purchase Price:</span>
                      <span className="font-semibold">${selectedProperty.price}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Current Valuation:</span>
                      <span className="font-semibold text-lg">
                        ${valuationData?.currentValue || selectedProperty.valuation || selectedProperty.price}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monthly Change:</span>
                      <div className={`flex items-center ${currentChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {currentChange >= 0 ? (
                          <ChevronUp className="h-4 w-4 mr-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 mr-1" />
                        )}
                        <span className="font-medium">{Math.abs(currentChange).toFixed(2)}%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Annual Return:</span>
                      <div className="flex items-center text-green-600">
                        <ChevronUp className="h-4 w-4 mr-1" />
                        <span className="font-medium">
                          {(historicalData.length > 0 
                            ? ((historicalData[historicalData.length - 1]?.value || 0) / 
                               (historicalData[0]?.value || 1) - 1) * 100 
                            : 0).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Valuation chart card */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Valuation History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={historicalData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#6366F1" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="date" 
                          tickFormatter={(value) => {
                            const date = new Date(value);
                            return date.toLocaleDateString(undefined, { month: 'short' });
                          }}
                        />
                        <YAxis />
                        <Tooltip 
                          formatter={(value: number) => [`$${value.toFixed(2)}`, 'Valuation']}
                          labelFormatter={(value) => {
                            const date = new Date(value);
                            return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long' });
                          }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#6366F1" 
                          fillOpacity={1} 
                          fill="url(#colorValue)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground">Projected Annual Return</h4>
                            <p className="text-2xl font-bold">9.8%</p>
                          </div>
                          <TrendingUp className="h-8 w-8 text-green-500" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground">Market Volatility</h4>
                            <p className="text-2xl font-bold">Low</p>
                          </div>
                          <Activity className="h-8 w-8 text-blue-500" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="p-6 text-center">
              <div className="mb-4 text-muted-foreground">
                <Building className="h-12 w-12 mx-auto mb-2" />
                <p>No tokenized properties found. Tokenize a property to view its valuation.</p>
              </div>
              <Link href="/properties">
                <Button>
                  Browse Properties
                </Button>
              </Link>
            </Card>
          )}
        </>
      ) : (
        <Card className="p-6 text-center">
          <div className="mb-4 text-muted-foreground">
            <Building className="h-12 w-12 mx-auto mb-2" />
            <p>No properties found. Add a property to view its valuation.</p>
          </div>
          <Link href="/properties/create">
            <Button>
              Add Your First Property
            </Button>
          </Link>
        </Card>
      )}
    </div>
  );
}
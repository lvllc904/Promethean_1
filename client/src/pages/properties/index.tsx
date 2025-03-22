import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  ArrowUpDown,
  Building2,
  Bed,
  Bath,
  DollarSign 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
} from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { 
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerClose
} from '@/components/ui/drawer';
import { 
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb 
} from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { PropertyCard } from '@/components/ui/property-card';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Property } from '@shared/schema';

export default function PropertiesIndex() {
  const { toast } = useToast();
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [propertyType, setPropertyType] = useState<string[]>([]);
  const [bedsMin, setBedsMin] = useState(0);
  const [bathsMin, setBathsMin] = useState(0);
  const [listingType, setListingType] = useState<string[]>([]);
  
  // Fetch properties
  const { 
    data: properties = [], 
    isLoading,
    refetch 
  } = useQuery<Property[]>({
    queryKey: ['/api/properties', { 
      searchQuery, 
      sortBy, 
      priceRange, 
      propertyType, 
      bedsMin, 
      bathsMin,
      listingType 
    }],
  });
  
  // Property type options
  const propertyTypeOptions = [
    { id: 'house', label: 'House' },
    { id: 'apartment', label: 'Apartment' },
    { id: 'condo', label: 'Condo' },
    { id: 'townhouse', label: 'Townhouse' },
    { id: 'land', label: 'Land' },
    { id: 'commercial', label: 'Commercial' },
  ];
  
  // Listing type options
  const listingTypeOptions = [
    { id: 'sale', label: 'For Sale' },
    { id: 'rent', label: 'For Rent' },
  ];
  
  const handleViewProperty = (property: Property) => {
    window.location.href = `/properties/${property.id}`;
  };
  
  const handleApplyAIValuation = (property: Property) => {
    toast({
      title: "AI Valuation Started",
      description: "Analyzing property data to provide an accurate valuation...",
    });
    window.location.href = `/properties/valuation/${property.id}`;
  };
  
  const applyFilters = () => {
    refetch();
    toast({
      title: "Filters Applied",
      description: "Showing properties based on your filters.",
    });
  };
  
  const resetFilters = () => {
    setSearchQuery('');
    setSortBy('latest');
    setPriceRange([0, 5000000]);
    setPropertyType([]);
    setBedsMin(0);
    setBathsMin(0);
    setListingType([]);
    refetch();
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h1 className="text-2xl font-heading font-bold mb-4 md:mb-0">Browse Properties</h1>
        <div className="flex space-x-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            <Input 
              placeholder="Search properties..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[160px]">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="price_low">Price: Low to High</SelectItem>
              <SelectItem value="price_high">Price: High to Low</SelectItem>
              <SelectItem value="beds">Most Beds</SelectItem>
              <SelectItem value="baths">Most Baths</SelectItem>
            </SelectContent>
          </Select>
          
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-lg">
                <DrawerHeader>
                  <DrawerTitle>Filter Properties</DrawerTitle>
                  <DrawerDescription>
                    Apply filters to find your perfect property.
                  </DrawerDescription>
                </DrawerHeader>
                
                <div className="p-4 pb-0">
                  <div className="space-y-6">
                    {/* Price Range */}
                    <div>
                      <h3 className="text-sm font-medium mb-2 flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        Price Range
                      </h3>
                      <div className="px-2">
                        <Slider 
                          defaultValue={priceRange} 
                          max={10000000} 
                          step={50000}
                          onValueChange={setPriceRange}
                        />
                        <div className="flex justify-between mt-2 text-sm text-neutral-500">
                          <span>{formatCurrency(priceRange[0])}</span>
                          <span>{formatCurrency(priceRange[1])}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Property Type */}
                    <div>
                      <h3 className="text-sm font-medium mb-2 flex items-center">
                        <Building2 className="h-4 w-4 mr-1" />
                        Property Type
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {propertyTypeOptions.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`property-type-${option.id}`}
                              checked={propertyType.includes(option.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setPropertyType([...propertyType, option.id]);
                                } else {
                                  setPropertyType(propertyType.filter(id => id !== option.id));
                                }
                              }}
                            />
                            <Label 
                              htmlFor={`property-type-${option.id}`}
                              className="text-sm font-normal"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Beds & Baths */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium mb-2 flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          Minimum Beds
                        </h3>
                        <Select 
                          value={bedsMin.toString()} 
                          onValueChange={(value) => setBedsMin(parseInt(value))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Any" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">Any</SelectItem>
                            <SelectItem value="1">1+</SelectItem>
                            <SelectItem value="2">2+</SelectItem>
                            <SelectItem value="3">3+</SelectItem>
                            <SelectItem value="4">4+</SelectItem>
                            <SelectItem value="5">5+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-2 flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          Minimum Baths
                        </h3>
                        <Select 
                          value={bathsMin.toString()} 
                          onValueChange={(value) => setBathsMin(parseInt(value))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Any" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">Any</SelectItem>
                            <SelectItem value="1">1+</SelectItem>
                            <SelectItem value="2">2+</SelectItem>
                            <SelectItem value="3">3+</SelectItem>
                            <SelectItem value="4">4+</SelectItem>
                            <SelectItem value="5">5+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    {/* Listing Type */}
                    <div>
                      <h3 className="text-sm font-medium mb-2">Listing Type</h3>
                      <div className="flex space-x-4">
                        {listingTypeOptions.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`listing-type-${option.id}`}
                              checked={listingType.includes(option.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setListingType([...listingType, option.id]);
                                } else {
                                  setListingType(listingType.filter(id => id !== option.id));
                                }
                              }}
                            />
                            <Label 
                              htmlFor={`listing-type-${option.id}`}
                              className="text-sm font-normal"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <DrawerFooter>
                  <div className="flex space-x-2">
                    <Button className="flex-1" onClick={applyFilters}>
                      <Filter className="mr-2 h-4 w-4" />
                      Apply Filters
                    </Button>
                    <Button variant="outline" onClick={resetFilters}>
                      Reset
                    </Button>
                  </div>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      
      {/* Active Filters */}
      {(searchQuery || propertyType.length > 0 || listingType.length > 0 || bedsMin > 0 || bathsMin > 0 || priceRange[0] > 0 || priceRange[1] < 5000000) && (
        <div className="flex flex-wrap items-center gap-2 mb-4 p-3 bg-neutral-50 rounded-md">
          <div className="text-sm font-medium text-neutral-600 mr-2">
            <SlidersHorizontal className="inline-block h-4 w-4 mr-1" />
            Active Filters:
          </div>
          
          {searchQuery && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs"
              onClick={() => setSearchQuery('')}
            >
              Search: {searchQuery}
              <span className="ml-1">×</span>
            </Button>
          )}
          
          {propertyType.length > 0 && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs"
              onClick={() => setPropertyType([])}
            >
              Property Types: {propertyType.length}
              <span className="ml-1">×</span>
            </Button>
          )}
          
          {listingType.length > 0 && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs"
              onClick={() => setListingType([])}
            >
              Listing Types: {listingType.length}
              <span className="ml-1">×</span>
            </Button>
          )}
          
          {bedsMin > 0 && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs"
              onClick={() => setBedsMin(0)}
            >
              Min Beds: {bedsMin}+
              <span className="ml-1">×</span>
            </Button>
          )}
          
          {bathsMin > 0 && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs"
              onClick={() => setBathsMin(0)}
            >
              Min Baths: {bathsMin}+
              <span className="ml-1">×</span>
            </Button>
          )}
          
          {(priceRange[0] > 0 || priceRange[1] < 5000000) && (
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs"
              onClick={() => setPriceRange([0, 5000000])}
            >
              Price: {formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])}
              <span className="ml-1">×</span>
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-7 text-xs ml-auto"
            onClick={resetFilters}
          >
            Clear All
          </Button>
        </div>
      )}
      
      {/* Property Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <Skeleton className="w-full h-48" />
              <CardContent className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-14 w-full mb-4" />
                <div className="flex justify-between">
                  <Skeleton className="h-9 w-24" />
                  <Skeleton className="h-9 w-36" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onViewDetails={handleViewProperty}
              onApplyAIValuation={handleApplyAIValuation}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Building2 className="h-12 w-12 mx-auto text-neutral-300 mb-3" />
          <h3 className="text-lg font-medium text-neutral-700 mb-1">No properties found</h3>
          <p className="text-neutral-500 mb-6">
            Try adjusting your search filters or browse our latest listings.
          </p>
          <Button onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { Heart, HelpCircle, Bath, BedDouble, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Property } from "@shared/schema";

interface PropertyCardProps {
  property: Property;
  onViewDetails?: (property: Property) => void;
  onApplyAIValuation?: (property: Property) => void;
}

export function PropertyCard({ property, onViewDetails, onApplyAIValuation }: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  
  const formatCurrency = (amount: number, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  return (
    <Card className="overflow-hidden property-card">
      <div className="relative">
        <img 
          src={property.imageUrls?.[0] || 'https://via.placeholder.com/800x600?text=No+Image'} 
          alt={property.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 property-actions">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="p-1.5 bg-white rounded-full shadow-md text-neutral-700 hover:text-primary-500"
            aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={cn("h-5 w-5", isLiked && "fill-primary-500 text-primary-500")} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <div className="flex justify-between items-center">
            <span className="text-white text-sm font-medium">
              {formatCurrency(Number(property.price), property.currency)}
            </span>
            <Badge 
              variant={property.listingType === 'sale' ? 'default' : 'secondary'}
              className={property.listingType === 'sale' ? 'bg-primary-500' : ''}
            >
              {property.listingType === 'sale' ? 'For Sale' : 'For Rent'}
            </Badge>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h4 className="text-lg font-medium mb-1 text-neutral-800">{property.title}</h4>
        <p className="text-sm text-neutral-600 mb-2 flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 inline mr-1 text-neutral-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
          {property.location}
        </p>
        
        <div className="flex justify-between items-center text-sm text-neutral-500 border-t border-neutral-200 pt-3 mt-3">
          <div className="flex items-center">
            <BedDouble className="h-4 w-4 mr-1" />
            {property.beds} Beds
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            {property.baths} Baths
          </div>
          <div className="flex items-center">
            <Building className="h-4 w-4 mr-1" />
            {property.sqft} sqft
          </div>
        </div>
        
        <div className="flex justify-between mt-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onViewDetails?.(property)}
          >
            View Details
          </Button>
          <Button 
            size="sm"
            onClick={() => onApplyAIValuation?.(property)}
            className="space-x-1"
          >
            <HelpCircle className="h-4 w-4" />
            <span>Apply AI Valuation</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

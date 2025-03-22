import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MembershipTier } from "@shared/schema";

interface MembershipCardProps {
  tier: MembershipTier;
  isPopular?: boolean;
  onSelect: (tier: MembershipTier) => void;
}

export function MembershipCard({ tier, isPopular, onSelect }: MembershipCardProps) {
  const formatPrice = (price: number) => {
    if (price === 0) return "$0";
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: tier.currency,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  return (
    <Card className={cn(
      "overflow-hidden relative",
      isPopular && "border-2 border-primary-500 shadow-md"
    )}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold uppercase py-1 px-3 transform translate-x-6 rotate-45 origin-bottom-left">
          Popular
        </div>
      )}
      
      <CardContent className="p-5">
        <h4 className="text-lg font-medium">{tier.name}</h4>
        <p className="text-neutral-500 text-sm my-2">{tier.description}</p>
        
        <div className="mt-4 mb-2">
          <p className="text-3xl font-heading font-bold">
            {formatPrice(Number(tier.price))}
            {Number(tier.price) > 0 && (
              <span className="text-base font-normal text-neutral-500">/{tier.interval}</span>
            )}
          </p>
        </div>
        
        <ul className="mt-4 space-y-2 text-sm">
          {tier.features?.map((feature, index) => {
            const isDisabled = feature.startsWith('No ') || feature.includes('Not included');
            
            return (
              <li key={index} className={`flex items-center ${isDisabled ? 'text-neutral-400' : ''}`}>
                {isDisabled ? (
                  <X className="h-5 w-5 mr-2 text-neutral-400" />
                ) : (
                  <Check className="h-5 w-5 mr-2 text-success-500" />
                )}
                {isDisabled ? feature.replace('No ', '') : feature}
              </li>
            );
          })}
        </ul>
        
        <Button 
          className={cn(
            "mt-6 w-full",
            tier.name === 'Enterprise' && "bg-neutral-800 hover:bg-neutral-900",
            isPopular && "bg-primary-500 hover:bg-primary-600"
          )}
          variant={tier.name === 'Free' ? "outline" : "default"}
          onClick={() => onSelect(tier)}
        >
          {tier.name === 'Free' ? 'Get Started' : 
           tier.name === 'Enterprise' ? 'Contact Sales' : 'Subscribe'}
        </Button>
      </CardContent>
    </Card>
  );
}

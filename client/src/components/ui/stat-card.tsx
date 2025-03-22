import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'neutral';
  };
  badge?: {
    text: string;
    variant: 'default' | 'blue' | 'purple' | 'amber' | 'green';
  };
  footer?: {
    label: string;
    value: string | number;
  };
  onClick?: () => void;
  actionLabel?: string;
}

export function StatCard({
  title,
  value,
  unit,
  trend,
  badge,
  footer,
  onClick,
  actionLabel = "View Details"
}: StatCardProps) {
  // Get badge class based on variant
  const getBadgeClass = (variant: string) => {
    switch (variant) {
      case 'blue':
        return 'bg-blue-100 text-blue-800';
      case 'purple':
        return 'bg-purple-100 text-purple-800';
      case 'amber':
        return 'bg-amber-100 text-amber-800';
      case 'green':
        return 'bg-green-100 text-green-800';
      default:
        return '';
    }
  };
  
  return (
    <Card className="bg-white shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-neutral-500">{title}</h4>
          {badge && (
            <Badge className={getBadgeClass(badge.variant)}>
              {badge.text}
            </Badge>
          )}
        </div>
        
        <div className="flex items-baseline">
          <p className="text-2xl font-heading font-semibold">{value}</p>
          {unit && <span className="ml-2 text-sm text-neutral-500">{unit}</span>}
          {trend && (
            <span className={`ml-2 flex items-center text-xs font-medium ${
              trend.direction === 'up' ? 'text-green-600' : 
              trend.direction === 'down' ? 'text-red-600' : 'text-neutral-500'
            }`}>
              {trend.direction === 'up' ? (
                <ArrowUp className="h-3 w-3 mr-0.5" />
              ) : trend.direction === 'down' ? (
                <ArrowDown className="h-3 w-3 mr-0.5" />
              ) : null}
              {trend.value}%
            </span>
          )}
        </div>
        
        {footer && (
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-500">{footer.label}</p>
              <p className="text-sm font-medium">{footer.value}</p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="inline-flex items-center px-2 py-1 text-xs text-primary-500 bg-primary-50 hover:bg-primary-100 border-transparent"
              onClick={onClick}
            >
              {actionLabel}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

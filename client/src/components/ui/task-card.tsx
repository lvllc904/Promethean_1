import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Task } from "@shared/schema";

interface TaskCardProps {
  task: Task;
  onApply: (taskId: number) => void;
}

export function TaskCard({ task, onApply }: TaskCardProps) {
  const formatCurrency = (amount: number, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  // Function to get badge color based on category
  const getCategoryBadgeColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'photography':
        return 'bg-blue-100 text-blue-800';
      case 'data-analysis':
        return 'bg-purple-100 text-purple-800';
      case 'blockchain':
        return 'bg-yellow-100 text-yellow-800';
      case 'ai-development':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Format date as "X days ago"
  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diff === 0) return 'today';
    if (diff === 1) return 'yesterday';
    return `${diff} days ago`;
  };
  
  const creatorName = task.creatorId === 1 
    ? 'RealtyDAO' 
    : task.creatorId === 2 
      ? 'Market Insights DAO' 
      : task.creatorId === 3 
        ? 'Security DAO' 
        : 'Tech DAO';
  
  const formattedCreationDate = formatDate(new Date(task.createdAt));
  
  return (
    <Card className="border border-neutral-200 hover:bg-neutral-50 transition-colors">
      <CardContent className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-sm">{task.title}</h4>
            <p className="text-xs text-neutral-500 mt-1">
              Posted by <span className="text-primary-500">{creatorName}</span> • {formattedCreationDate}
            </p>
          </div>
          <Badge className={getCategoryBadgeColor(task.category)}>
            {task.category}
          </Badge>
        </div>
        
        <p className="text-xs text-neutral-600 mt-2">
          {task.description}
        </p>
        
        <div className="mt-3 flex justify-between items-center">
          <span className="text-sm font-medium text-neutral-800">
            {formatCurrency(Number(task.price), task.currency)}
            {task.category === 'AI Development' && ' / hour'}
          </span>
          <Button 
            size="sm"
            onClick={() => onApply(task.id)}
          >
            Apply
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

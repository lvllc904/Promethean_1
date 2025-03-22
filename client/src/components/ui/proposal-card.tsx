import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Proposal } from "@shared/schema";

interface ProposalCardProps {
  proposal: Proposal;
  onVoteYes?: (proposalId: number) => void;
  onVoteNo?: (proposalId: number) => void;
  onAbstain?: (proposalId: number) => void;
  onViewDetails?: (proposalId: number) => void;
}

export function ProposalCard({ 
  proposal, 
  onVoteYes, 
  onVoteNo, 
  onAbstain, 
  onViewDetails 
}: ProposalCardProps) {
  // Calculate the percentage of Yes votes
  const totalVotes = proposal.votesFor + proposal.votesAgainst + proposal.votesAbstain;
  const yesPercentage = totalVotes === 0 ? 0 : Math.round((proposal.votesFor / totalVotes) * 100);
  const noPercentage = totalVotes === 0 ? 0 : Math.round((proposal.votesAgainst / totalVotes) * 100);
  
  // Get badge color based on proposal status
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-amber-100 text-amber-800';
      case 'passed':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'executed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card className="border border-neutral-200 hover:bg-neutral-50 transition-colors">
      <CardContent className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-sm">{proposal.title}</h4>
            <p className="text-xs text-neutral-500 mt-1">
              Proposal #{proposal.id} by{' '}
              <span className="text-primary-500">
                {`0x${proposal.creatorId.toString(16).padStart(4, '0')}...${Math.floor(Math.random() * 10000).toString(16).padStart(4, '0')}`}
              </span>
            </p>
          </div>
          <Badge className={getStatusBadgeVariant(proposal.status)}>
            {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
          </Badge>
        </div>
        
        <div className="mt-3">
          <Progress value={yesPercentage} className="h-1.5" />
          <div className="mt-2 flex justify-between text-xs">
            <span className="text-neutral-500">{yesPercentage}% Yes</span>
            <span className="text-neutral-500">{noPercentage}% No</span>
          </div>
        </div>
        
        {proposal.status === 'active' ? (
          <div className="mt-3 flex space-x-2">
            <Button 
              size="sm"
              onClick={() => onVoteYes?.(proposal.id)}
              className="bg-green-500 hover:bg-green-600"
            >
              Vote Yes
            </Button>
            <Button 
              size="sm"
              variant="outline"
              onClick={() => onVoteNo?.(proposal.id)}
            >
              Vote No
            </Button>
            <Button 
              size="sm"
              variant="outline"
              onClick={() => onAbstain?.(proposal.id)}
            >
              Abstain
            </Button>
          </div>
        ) : (
          <div className="mt-3">
            <Button 
              size="sm"
              variant="outline"
              className="w-full"
              onClick={() => onViewDetails?.(proposal.id)}
            >
              View Details
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

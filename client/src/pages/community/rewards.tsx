import React from 'react';
import { ContributionRewards } from '@/components/community/contribution-rewards';
import { PageHeader } from '@/components/ui/page-header';
import { Trophy } from 'lucide-react';

export default function CommunityRewardsPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-6 space-y-8">
      <PageHeader
        title="Community Contribution Rewards"
        description="Earn rewards by contributing to the community and platform"
        icon={<Trophy className="h-6 w-6" />}
      />
      
      <ContributionRewards />
    </div>
  );
}
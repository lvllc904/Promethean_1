import React from 'react';
import { ContributionRewards } from '@/components/community/contribution-rewards';
import { PageHeader } from '@/components/ui/page-header';
import { Trophy, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function AdminCommunityRewardsPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-6 space-y-8">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Community Contribution Rewards"
          description="Manage and configure community rewards"
          icon={<Trophy className="h-6 w-6" />}
        />
        <Link href="/admin">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin
          </Button>
        </Link>
      </div>
      
      <ContributionRewards isAdminView={true} />
    </div>
  );
}
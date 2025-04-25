import React from 'react';
import { ExplorerDashboard } from '@/components/blockchain/explorer-dashboard';
import { PageHeader } from '@/components/ui/page-header';
import { Database } from 'lucide-react';

export default function BlockchainExplorerPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-6 space-y-8">
      <PageHeader
        title="Blockchain Explorer"
        description="Track your transactions, tokens, and NFTs across multiple networks"
        icon={<Database className="h-6 w-6" />}
      />
      
      <ExplorerDashboard />
    </div>
  );
}
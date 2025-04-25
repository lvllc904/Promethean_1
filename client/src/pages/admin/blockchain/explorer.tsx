import React from 'react';
import { ExplorerDashboard } from '@/components/blockchain/explorer-dashboard';
import { PageHeader } from '@/components/ui/page-header';
import { Database, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function AdminBlockchainExplorerPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-6 space-y-8">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Blockchain Explorer"
          description="Track your transactions, tokens, and NFTs across multiple networks"
          icon={<Database className="h-6 w-6" />}
        />
        <Link href="/admin">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin
          </Button>
        </Link>
      </div>
      
      <ExplorerDashboard />
    </div>
  );
}
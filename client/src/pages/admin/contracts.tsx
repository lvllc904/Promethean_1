import React from 'react';
import { ContractInteractionWizard } from '@/components/contracts/contract-interaction-wizard-fixed';
import { PageHeader } from '@/components/ui/page-header';
import { Zap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function AdminContractsPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-6 space-y-8">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Smart Contract Interaction"
          description="Connect and interact with any smart contract on the blockchain"
          icon={<Zap className="h-6 w-6" />}
        />
        <Link href="/admin">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Admin
          </Button>
        </Link>
      </div>
      
      <ContractInteractionWizard />
    </div>
  );
}
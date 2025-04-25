import React from 'react';
import { ContractInteractionWizard } from '@/components/contracts/contract-interaction-wizard';
import { PageHeader } from '@/components/ui/page-header';
import { Zap } from 'lucide-react';

export default function ContractsPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-6 space-y-8">
      <PageHeader
        title="Smart Contract Interaction"
        description="Connect and interact with any smart contract on the blockchain"
        icon={<Zap className="h-6 w-6" />}
      />
      
      <ContractInteractionWizard />
    </div>
  );
}
import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import PropertiesIndex from "@/pages/properties/index";
import CreateProperty from "@/pages/properties/create";
import TokenizeProperty from "@/pages/properties/tokenize";
import Governance from "@/pages/dao/governance";
import Proposals from "@/pages/dao/proposals";
import MarketplaceIndex from "@/pages/marketplace/index";
import CreateTask from "@/pages/marketplace/create";
import MyTasks from "@/pages/marketplace/my";
import Memberships from "@/pages/memberships";
import Community from "@/pages/community";
import CommunityTalent from "@/pages/profile";
import DexPage from "@/pages/dex";
import Wallet from "@/pages/wallet";
import Feedback from "@/pages/feedback";
import AdminDashboard from "@/pages/admin";
import { WalletProvider } from "@/components/wallet/wallet-provider";
import { AppLayout } from "@/components/layout/app-layout";

// Import the new page components
import CreateProposal from "@/pages/dao/proposals/create";
import MyProperties from "@/pages/properties/my";
import PropertyValuation from "@/pages/properties/valuation";

// Import social media components
import SocialFeed from "@/pages/social/feed";
import SocialMessages from "@/pages/social/messages";
import SocialProfile from "@/pages/social/profile";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/properties" component={PropertiesIndex} />
      <Route path="/properties/create" component={CreateProperty} />
      <Route path="/properties/my" component={MyProperties} />
      <Route path="/properties/valuation" component={PropertyValuation} />
      <Route path="/properties/valuation/:id" component={PropertyValuation} />
      <Route path="/properties/:id/tokenize" component={TokenizeProperty} />
      <Route path="/dao/governance" component={Governance} />
      <Route path="/dao/proposals" component={Proposals} />
      <Route path="/dao/proposals/create" component={CreateProposal} />
      <Route path="/dex" component={DexPage} />
      <Route path="/marketplace" component={MarketplaceIndex} />
      <Route path="/marketplace/create" component={CreateTask} />
      <Route path="/marketplace/my" component={MyTasks} />
      <Route path="/memberships" component={Memberships} />
      <Route path="/community" component={Community} />
      <Route path="/community/rewards">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Community Rewards...</div>}>
            {(() => {
              const CommunityRewards = lazy(() => import('@/pages/community/rewards'));
              return <CommunityRewards />;
            })()}
          </Suspense>
        )}
      </Route>
      <Route path="/profile" component={CommunityTalent} />
      <Route path="/social/feed" component={SocialFeed} />
      <Route path="/social/messages" component={SocialMessages} />
      <Route path="/social/messages/:id" component={SocialMessages} />
      <Route path="/social/profile" component={SocialProfile} />
      <Route path="/social/profile/:id" component={SocialProfile} />
      <Route path="/contracts">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Smart Contract Interface...</div>}>
            {(() => {
              const ContractsPage = lazy(() => import('@/pages/contracts'));
              return <ContractsPage />;
            })()}
          </Suspense>
        )}
      </Route>
      <Route path="/blockchain/explorer">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Blockchain Explorer...</div>}>
            {(() => {
              const BlockchainExplorer = lazy(() => import('@/pages/blockchain/explorer'));
              return <BlockchainExplorer />;
            })()}
          </Suspense>
        )}
      </Route>
      <Route path="/feedback" component={Feedback} />
      <Route path="/wallet" component={Wallet} />
      <Route path="/admin" component={AdminDashboard} />
      
      {/* Admin Section Routes */}
      <Route path="/admin/contracts">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Admin Contract Interface...</div>}>
            {(() => {
              const AdminContracts = lazy(() => import('@/pages/admin/contracts'));
              return <AdminContracts />;
            })()}
          </Suspense>
        )}
      </Route>
      <Route path="/admin/blockchain/explorer">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Admin Blockchain Explorer...</div>}>
            {(() => {
              const AdminBlockchainExplorer = lazy(() => import('@/pages/admin/blockchain/explorer'));
              return <AdminBlockchainExplorer />;
            })()}
          </Suspense>
        )}
      </Route>
      <Route path="/admin/dex">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Admin DEX Interface...</div>}>
            {(() => {
              const AdminDex = lazy(() => import('@/pages/admin/dex'));
              return <AdminDex />;
            })()}
          </Suspense>
        )}
      </Route>
      <Route path="/admin/community/rewards">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Admin Community Rewards...</div>}>
            {(() => {
              const AdminCommunityRewards = lazy(() => import('@/pages/admin/community/rewards'));
              return <AdminCommunityRewards />;
            })()}
          </Suspense>
        )}
      </Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <AppLayout>
          <Router />
        </AppLayout>
      </WalletProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

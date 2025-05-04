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
import { AuthProvider } from "@/hooks/use-auth";
import { AppLayout } from "@/components/layout/app-layout";
import { ProtectedRoute } from "@/lib/protected-route";

// Import the new page components
import CreateProposal from "@/pages/dao/proposals/create";
import MyProperties from "@/pages/properties/my";
import PropertyValuation from "@/pages/properties/valuation";

// Import social media components
import SocialFeed from "@/pages/social/feed";
import SocialMessages from "@/pages/social/messages";
import SocialProfile from "@/pages/social/profile";

// Import auth pages
import AuthPage from "@/pages/auth/index";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";

// Import lazy loaded escrow components
const EscrowDashboard = lazy(() => import('@/pages/escrow/dashboard'));
const CreateEscrow = lazy(() => import('@/pages/escrow/create'));
const ManageEscrows = lazy(() => import('@/pages/escrow/manage'));
const TitleTransfers = lazy(() => import('@/pages/escrow/transfers'));
const Arbitrators = lazy(() => import('@/pages/escrow/arbitrators'));

function Router() {
  return (
    <Switch>
      {/* Authentication Routes */}
      <Route path="/auth" component={AuthPage} />
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/register" component={RegisterPage} />
      
      {/* Protected Routes */}
      <ProtectedRoute path="/" component={Dashboard} />
      <ProtectedRoute path="/properties" component={PropertiesIndex} />
      <ProtectedRoute path="/properties/create" component={CreateProperty} />
      <ProtectedRoute path="/properties/my" component={MyProperties} />
      <ProtectedRoute path="/properties/valuation" component={PropertyValuation} />
      <ProtectedRoute path="/properties/valuation/:id" component={PropertyValuation} />
      <ProtectedRoute path="/properties/:id/tokenize" component={TokenizeProperty} />
      <ProtectedRoute path="/dao/governance" component={Governance} />
      <ProtectedRoute path="/dao/proposals" component={Proposals} />
      <ProtectedRoute path="/dao/proposals/create" component={CreateProposal} />
      <ProtectedRoute path="/dex" component={DexPage} />
      <ProtectedRoute path="/marketplace" component={MarketplaceIndex} />
      <ProtectedRoute path="/marketplace/create" component={CreateTask} />
      <ProtectedRoute path="/marketplace/my" component={MyTasks} />
      <ProtectedRoute path="/memberships" component={Memberships} />
      <ProtectedRoute path="/community" component={Community} />
      <ProtectedRoute path="/community/rewards">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Community Rewards...</div>}>
            {(() => {
              const CommunityRewards = lazy(() => import('@/pages/community/rewards'));
              return <CommunityRewards />;
            })()}
          </Suspense>
        )}
      </ProtectedRoute>
      <ProtectedRoute path="/profile" component={CommunityTalent} />
      <ProtectedRoute path="/social/feed" component={SocialFeed} />
      <ProtectedRoute path="/social/messages" component={SocialMessages} />
      <ProtectedRoute path="/social/messages/:id" component={SocialMessages} />
      <ProtectedRoute path="/social/profile" component={SocialProfile} />
      <ProtectedRoute path="/social/profile/:id" component={SocialProfile} />
      <ProtectedRoute path="/contracts">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Smart Contract Interface...</div>}>
            {(() => {
              const ContractsPage = lazy(() => import('@/pages/contracts'));
              return <ContractsPage />;
            })()}
          </Suspense>
        )}
      </ProtectedRoute>
      <ProtectedRoute path="/blockchain/explorer">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Blockchain Explorer...</div>}>
            {(() => {
              const BlockchainExplorer = lazy(() => import('@/pages/blockchain/explorer'));
              return <BlockchainExplorer />;
            })()}
          </Suspense>
        )}
      </ProtectedRoute>
      <ProtectedRoute path="/feedback" component={Feedback} />
      <ProtectedRoute path="/wallet" component={Wallet} />
      <ProtectedRoute path="/admin" component={AdminDashboard} />
      
      {/* Admin Section Routes */}
      <ProtectedRoute path="/admin/contracts">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Admin Contract Interface...</div>}>
            {(() => {
              const AdminContracts = lazy(() => import('@/pages/admin/contracts'));
              return <AdminContracts />;
            })()}
          </Suspense>
        )}
      </ProtectedRoute>
      <ProtectedRoute path="/admin/blockchain/explorer">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Admin Blockchain Explorer...</div>}>
            {(() => {
              const AdminBlockchainExplorer = lazy(() => import('@/pages/admin/blockchain/explorer'));
              return <AdminBlockchainExplorer />;
            })()}
          </Suspense>
        )}
      </ProtectedRoute>
      <ProtectedRoute path="/admin/dex">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Admin DEX Interface...</div>}>
            {(() => {
              const AdminDex = lazy(() => import('@/pages/admin/dex'));
              return <AdminDex />;
            })()}
          </Suspense>
        )}
      </ProtectedRoute>
      <ProtectedRoute path="/admin/community/rewards">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Admin Community Rewards...</div>}>
            {(() => {
              const AdminCommunityRewards = lazy(() => import('@/pages/admin/community/rewards'));
              return <AdminCommunityRewards />;
            })()}
          </Suspense>
        )}
      </ProtectedRoute>
      
      <ProtectedRoute path="/admin/ui-labels">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading UI Labels Management...</div>}>
            {(() => {
              const UiLabelsPage = lazy(() => import('@/pages/admin/ui-labels'));
              return <UiLabelsPage />;
            })()}
          </Suspense>
        )}
      </ProtectedRoute>
      
      <ProtectedRoute path="/admin/white-label">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading White Label Settings...</div>}>
            {(() => {
              const WhiteLabelPage = lazy(() => import('@/pages/admin/white-label'));
              return <WhiteLabelPage />;
            })()}
          </Suspense>
        )}
      </ProtectedRoute>
      
      {/* Escrow System Routes */}
      <ProtectedRoute path="/escrow/dashboard">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Escrow Dashboard...</div>}>
            <EscrowDashboard />
          </Suspense>
        )}
      </ProtectedRoute>
      
      <ProtectedRoute path="/escrow/create">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Create Escrow...</div>}>
            <CreateEscrow />
          </Suspense>
        )}
      </ProtectedRoute>
      
      <ProtectedRoute path="/escrow/manage">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Manage Escrows...</div>}>
            <ManageEscrows />
          </Suspense>
        )}
      </ProtectedRoute>
      
      <ProtectedRoute path="/escrow/transfers">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Title Transfers...</div>}>
            <TitleTransfers />
          </Suspense>
        )}
      </ProtectedRoute>
      
      <ProtectedRoute path="/escrow/arbitrators">
        {() => (
          <Suspense fallback={<div className="p-8 text-center">Loading Arbitrators...</div>}>
            <Arbitrators />
          </Suspense>
        )}
      </ProtectedRoute>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <AuthProvider>
          <AppLayout>
            <Router />
          </AppLayout>
        </AuthProvider>
      </WalletProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import PropertiesIndex from "@/pages/properties/index";
import CreateProperty from "@/pages/properties/create";
import Governance from "@/pages/dao/governance";
import Proposals from "@/pages/dao/proposals";
import MarketplaceIndex from "@/pages/marketplace/index";
import CreateTask from "@/pages/marketplace/create";
import Memberships from "@/pages/memberships";
import Community from "@/pages/community";
import { WalletProvider } from "@/components/wallet/wallet-provider";
import { AppLayout } from "@/components/layout/app-layout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/properties" component={PropertiesIndex} />
      <Route path="/properties/create" component={CreateProperty} />
      <Route path="/dao/governance" component={Governance} />
      <Route path="/dao/proposals" component={Proposals} />
      <Route path="/marketplace" component={MarketplaceIndex} />
      <Route path="/marketplace/create" component={CreateTask} />
      <Route path="/memberships" component={Memberships} />
      <Route path="/community" component={Community} />
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

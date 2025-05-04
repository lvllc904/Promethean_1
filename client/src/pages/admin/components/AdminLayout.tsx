import React from 'react';
import { Link, useLocation } from 'wouter';
import { 
  Settings, 
  ArrowLeft, 
  Home, 
  Zap, 
  Database, 
  ArrowLeftRight,
  Trophy,
  Key,
  Shield,
  Palette,
  Tags
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [location] = useLocation();
  
  const isActive = (path: string) => location === path;

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-8">
        <Link href="/admin">
          <a className="flex items-center text-2xl font-bold text-primary">
            <Settings className="mr-2 h-6 w-6" />
            Admin Portal
          </a>
        </Link>
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="bg-card rounded-lg shadow-sm border p-3 space-y-1 sticky top-20">
            <NavItem href="/admin" icon={<Home />} active={isActive("/admin")}>
              Overview
            </NavItem>
            <NavItem href="/admin/contracts" icon={<Zap />} active={isActive("/admin/contracts")}>
              Smart Contracts
            </NavItem>
            <NavItem href="/admin/blockchain/explorer" icon={<Database />} active={isActive("/admin/blockchain/explorer")}>
              Blockchain Explorer
            </NavItem>
            <NavItem href="/admin/dex" icon={<ArrowLeftRight />} active={isActive("/admin/dex")}>
              DEX Management
            </NavItem>
            <NavItem href="/admin/community/rewards" icon={<Trophy />} active={isActive("/admin/community/rewards")}>
              Community Rewards
            </NavItem>
            <NavItem href="/admin/white-label" icon={<Palette />} active={isActive("/admin/white-label")}>
              White Label
            </NavItem>
            <NavItem href="/admin/ui-labels" icon={<Tags />} active={isActive("/admin/ui-labels")}>
              UI Labels
            </NavItem>
            <NavItem href="/admin/api" icon={<Key />} active={isActive("/admin/api")}>
              API Management
            </NavItem>
            <NavItem href="/admin/security" icon={<Shield />} active={isActive("/admin/security")}>
              Security
            </NavItem>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  active: boolean;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, active, children }) => {
  return (
    <Link href={href}>
      <a
        className={cn(
          "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
          active
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        <span className="mr-3">{icon}</span>
        {children}
      </a>
    </Link>
  );
};

export default AdminLayout;
import { useState } from "react";
import { useLocation, Link } from "wouter";
import { 
  Home, 
  Building2, 
  Users, 
  ShoppingBag, 
  MessageSquare, 
  Award,
  ChevronDown,
  Wallet2,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWallet } from "@/components/wallet/wallet-provider";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavItem = ({ href, icon, children, isActive }: NavItemProps) => (
  <Link href={href}>
    <div className={cn(
      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
      isActive 
        ? "bg-primary-50 text-primary-500" 
        : "text-neutral-700 hover:bg-neutral-100"
    )}>
      <span className="mr-3">{icon}</span>
      {children}
    </div>
  </Link>
);

const NavGroupItem = ({ href, children, isActive }: Omit<NavItemProps, 'icon'>) => (
  <Link href={href}>
    <div className={cn(
      "block px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
      isActive 
        ? "text-primary-500 bg-primary-50" 
        : "text-neutral-700 hover:bg-neutral-100"
    )}>
      {children}
    </div>
  </Link>
);

export function Sidebar() {
  const [location] = useLocation();
  const { isConnected, connect, address, user } = useWallet();
  
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  const [daoOpen, setDaoOpen] = useState(false);
  const [marketplaceOpen, setMarketplaceOpen] = useState(false);
  
  const isActive = (path: string) => location === path;
  const isActiveGroup = (paths: string[]) => paths.some(path => location.startsWith(path));
  
  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 lg:translate-x-0 bg-white border-r border-neutral-200 shadow-sm flex flex-col">
      {/* Logo Section */}
      <div className="p-4 flex items-center justify-between border-b border-neutral-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
            <span className="text-white font-bold">DAC</span>
          </div>
          <h1 className="text-lg font-heading font-semibold text-neutral-800">DAC Marketplace</h1>
        </div>
      </div>
      
      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {/* Dashboard */}
        <NavItem 
          href="/" 
          icon={<Home className="h-5 w-5" />} 
          isActive={isActive("/")}
        >
          Dashboard
        </NavItem>
        
        {/* Properties Group */}
        <div>
          <button 
            onClick={() => setPropertiesOpen(!propertiesOpen)} 
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100"
          >
            <div className="flex items-center">
              <Building2 className="h-5 w-5 mr-3" />
              Properties
            </div>
            <ChevronDown 
              className={cn("h-5 w-5 transition-transform duration-200", propertiesOpen && "transform rotate-180")} 
            />
          </button>
          
          {propertiesOpen && (
            <div className="ml-7 pl-3 border-l border-neutral-200 space-y-1 mt-1">
              <NavGroupItem href="/properties" isActive={isActive("/properties")}>Browse Listings</NavGroupItem>
              <NavGroupItem href="/properties/my" isActive={isActive("/properties/my")}>My Properties</NavGroupItem>
              <NavGroupItem href="/properties/create" isActive={isActive("/properties/create")}>Create Listing</NavGroupItem>
              <NavGroupItem href="/properties/valuation" isActive={isActive("/properties/valuation")}>AI Valuation</NavGroupItem>
            </div>
          )}
        </div>
        
        {/* DAO Group */}
        <div>
          <button 
            onClick={() => setDaoOpen(!daoOpen)} 
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100"
          >
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-3" />
              DAO
            </div>
            <ChevronDown 
              className={cn("h-5 w-5 transition-transform duration-200", daoOpen && "transform rotate-180")} 
            />
          </button>
          
          {daoOpen && (
            <div className="ml-7 pl-3 border-l border-neutral-200 space-y-1 mt-1">
              <NavGroupItem href="/dao/governance" isActive={isActive("/dao/governance")}>Governance</NavGroupItem>
              <NavGroupItem href="/dao/proposals" isActive={isActive("/dao/proposals")}>Proposals</NavGroupItem>
              <NavGroupItem href="/dao/voting" isActive={isActive("/dao/voting")}>Voting</NavGroupItem>
              <NavGroupItem href="/dao/treasury" isActive={isActive("/dao/treasury")}>Treasury</NavGroupItem>
            </div>
          )}
        </div>
        
        {/* Marketplace Group */}
        <div>
          <button 
            onClick={() => setMarketplaceOpen(!marketplaceOpen)} 
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100"
          >
            <div className="flex items-center">
              <ShoppingBag className="h-5 w-5 mr-3" />
              Task Marketplace
            </div>
            <ChevronDown 
              className={cn("h-5 w-5 transition-transform duration-200", marketplaceOpen && "transform rotate-180")} 
            />
          </button>
          
          {marketplaceOpen && (
            <div className="ml-7 pl-3 border-l border-neutral-200 space-y-1 mt-1">
              <NavGroupItem href="/marketplace" isActive={isActive("/marketplace")}>Browse Tasks</NavGroupItem>
              <NavGroupItem href="/marketplace/my" isActive={isActive("/marketplace/my")}>My Tasks</NavGroupItem>
              <NavGroupItem href="/marketplace/create" isActive={isActive("/marketplace/create")}>Create Task</NavGroupItem>
            </div>
          )}
        </div>
        
        {/* Community */}
        <NavItem 
          href="/community" 
          icon={<MessageSquare className="h-5 w-5" />} 
          isActive={isActive("/community")}
        >
          Community
        </NavItem>
        
        {/* Memberships */}
        <NavItem 
          href="/memberships" 
          icon={<Award className="h-5 w-5" />} 
          isActive={isActive("/memberships")}
        >
          Memberships
        </NavItem>
        
        {/* Admin Dashboard */}
        <NavItem 
          href="/admin" 
          icon={<Settings className="h-5 w-5" />} 
          isActive={isActive("/admin")}
        >
          Admin Dashboard
        </NavItem>
      </nav>
      
      {/* Current User / Connect */}
      <div className="px-4 py-3 mt-auto border-t border-neutral-200">
        {!isConnected ? (
          <div className="flex items-center">
            <Button 
              className="w-full"
              onClick={() => connect()}
            >
              <Wallet2 className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8 bg-primary-100">
              <AvatarFallback className="text-primary-700">
                {user?.name?.charAt(0) || address?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-neutral-700 truncate">
                {user?.name || 'Anonymous'}
              </p>
              <p className="text-xs text-neutral-500 truncate font-mono">
                {address ? `${address.substring(0, 8)}...${address.substring(36)}` : '0x...'}
              </p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

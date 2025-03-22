import { 
  Bell, 
  Menu, 
  Moon, 
  Sun 
} from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation } from "wouter";

interface TopBarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function TopBar({ sidebarOpen, onToggleSidebar }: TopBarProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [location] = useLocation();
  
  // Get the current page title based on route
  const getPageTitle = () => {
    const path = location.split('/')[1] || 'dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost"
            size="icon"
            className="lg:hidden mr-3 text-neutral-500 hover:text-neutral-700" 
            onClick={onToggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h2 className="text-xl font-heading font-semibold">{getPageTitle()}</h2>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Currency Selector */}
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger className="w-[80px] h-9">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="GBP">GBP</SelectItem>
              <SelectItem value="ETH">ETH</SelectItem>
              <SelectItem value="DAC">DAC</SelectItem>
            </SelectContent>
          </Select>
          
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setDarkMode(!darkMode)} 
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}

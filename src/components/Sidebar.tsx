import { Home, Database, Code, Shield, Settings, Search, ChevronsUpDown, BarChart3, Users } from 'lucide-react';
import { cn } from '../lib/utils';
import { View } from '../App';

interface SidebarProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const navItems: { id: View; label: string; icon: React.ElementType }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'tableEditor', label: 'Table Editor', icon: Database },
  { id: 'sqlEditor', label: 'SQL Editor', icon: Code },
  { id: 'auth', label: 'Authentication', icon: Users },
  { id: 'usage', label: 'Usage', icon: BarChart3 },
];

const Sidebar = ({ activeView, setActiveView }: SidebarProps) => {
  return (
    <div className="w-64 bg-background-light flex flex-col border-r border-gray-dark">
      <div className="p-4 border-b border-gray-dark">
        <div className="flex items-center justify-between bg-background-dark p-2 rounded-lg">
          <div className="flex items-center">
            <span className="bg-accent-green text-background-dark text-xs font-bold w-6 h-6 flex items-center justify-center rounded-md mr-2">Y</span>
            <span className="font-semibold">Yanna Corp</span>
          </div>
          <ChevronsUpDown size={16} className="text-gray-light" />
        </div>
      </div>
      <div className="p-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-light" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-background-dark border border-gray-dark rounded-md pl-9 pr-3 py-1.5 text-sm focus:ring-1 focus:ring-accent-green focus:outline-none"
          />
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={cn(
              "w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-left",
              activeView === item.id 
                ? 'bg-gray-dark text-foreground' 
                : 'text-gray-light hover:bg-gray-dark hover:text-foreground'
            )}
          >
            <item.icon 
              size={16} 
              className={cn("mr-3", activeView === item.id && 'text-accent-green')} 
            />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-dark">
        <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-light hover:bg-gray-dark hover:text-foreground">
          <Settings size={16} className="mr-3" />
          Project Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
import {
  Bell,
  Code,
  Database,
  Edit3,
  HardDrive,
  Home,
  Settings,
  Shield,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeView: string;
  setActiveView: (view: any) => void;
}

const Sidebar = ({ activeView, setActiveView }: SidebarProps) => {
  const navItems = [
    { name: "Table Editor", icon: Database, view: "TableEditor" },
    { name: "SQL Editor", icon: Edit3, view: "SqlEditor" },
    { name: "Authentication", icon: Shield, view: "Auth" },
  ];

  const bottomNavItems = [
    { name: "Home", icon: Home, view: "Home" },
    { name: "Docs", icon: Code, view: "Docs" },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-700/50 flex flex-col">
      <div className="p-4 flex items-center space-x-3 border-b border-gray-700/50">
        <div className="w-8 h-8 bg-green-500 rounded-md"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Project</span>
          <span className="font-semibold text-white">Great-Dan</span>
        </div>
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-1.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      </div>
      <nav className="flex-1 px-2 py-2 space-y-1">
        <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Tools
        </h3>
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            item={item}
            isActive={activeView === item.view}
            onClick={() => setActiveView(item.view)}
          />
        ))}
      </nav>
      <div className="px-2 py-4 space-y-1 border-t border-gray-700/50">
         {bottomNavItems.map((item) => (
          <NavItem
            key={item.name}
            item={item}
            isActive={activeView === item.view}
            onClick={() => setActiveView(item.view)}
          />
        ))}
        <div className="p-2">
            <button className="w-full flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                <Settings className="h-5 w-5"/>
                <span>Project Settings</span>
            </button>
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ item, isActive, onClick }: any) => {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={cn(
        "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200",
        isActive
          ? "bg-gray-800 text-green-400"
          : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
      )}
    >
      <item.icon className="h-5 w-5 mr-3" />
      {item.name}
    </a>
  );
};

export default Sidebar;

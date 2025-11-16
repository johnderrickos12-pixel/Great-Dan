import { Database, Code, Users, Home, BarChart3, HelpCircle, Bell } from 'lucide-react';
import { View } from '../App';

interface HeaderProps {
  activeView: View;
}

const viewConfig = {
  tableEditor: { icon: Database, title: 'Table Editor' },
  sqlEditor: { icon: Code, title: 'SQL Editor' },
  auth: { icon: Users, title: 'Authentication' },
  home: { icon: Home, title: 'Home' },
  usage: { icon: BarChart3, title: 'Usage' },
};

const Header = ({ activeView }: HeaderProps) => {
  const { icon: Icon, title } = viewConfig[activeView] || viewConfig.home;

  return (
    <header className="h-16 flex items-center justify-between px-8 border-b border-gray-dark bg-background-light flex-shrink-0">
      <div className="flex items-center space-x-3">
        <Icon size={20} className="text-accent-green" />
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-sm text-gray-light hover:text-foreground">Docs</button>
        <HelpCircle size={18} className="text-gray-light cursor-pointer hover:text-foreground" />
        <Bell size={18} className="text-gray-light cursor-pointer hover:text-foreground" />
        <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center text-background-dark font-bold">
          Y
        </div>
      </div>
    </header>
  );
};

export default Header;
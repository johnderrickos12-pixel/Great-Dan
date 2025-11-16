import { Database, HelpCircle, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-8 border-b border-gray-dark bg-background-light">
      <div className="flex items-center space-x-3">
        <Database size={20} className="text-accent-green" />
        <h1 className="text-lg font-semibold text-foreground">Table Editor</h1>
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
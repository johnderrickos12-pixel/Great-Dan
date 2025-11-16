import { Home, Database, Code, Shield, Settings, Search, ChevronsUpDown, BarChart3, Users } from 'lucide-react';

const Sidebar = () => {
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
        <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-light hover:bg-gray-dark hover:text-foreground">
          <Home size={16} className="mr-3" />
          Home
        </a>
        <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-gray-dark text-foreground">
          <Database size={16} className="mr-3 text-accent-green" />
          Table Editor
        </a>
        <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-light hover:bg-gray-dark hover:text-foreground">
          <Code size={16} className="mr-3" />
          SQL Editor
        </a>
         <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-light hover:bg-gray-dark hover:text-foreground">
          <Users size={16} className="mr-3" />
          Authentication
        </a>
        <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-light hover:bg-gray-dark hover:text-foreground">
          <BarChart3 size={16} className="mr-3" />
          Usage
        </a>
      </nav>
      <div className="p-4 border-t border-gray-dark">
        <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-light hover:bg-gray-dark hover:text-foreground">
          <Settings size={16} className="mr-3" />
          Project Settings
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
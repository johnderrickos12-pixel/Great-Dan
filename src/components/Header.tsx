import { ChevronDown, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  icon: React.ElementType;
  title: string;
}

const Header = ({ icon: Icon, title }: HeaderProps) => {
  return (
    <header className="flex-shrink-0 bg-gray-900 border-b border-gray-700/50 flex items-center justify-between p-4">
      <div className="flex items-center space-x-3">
        <div className="bg-gray-800/80 p-1.5 rounded-md">
           <Icon className="h-5 w-5 text-green-400" />
        </div>
        <h1 className="text-lg font-semibold text-white">{title}</h1>
      </div>
      <div className="flex items-center space-x-4">
         <button className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-200">
           <ArrowUpRight className="h-4 w-4"/>
           <span>Docs</span>
         </button>
        <button className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-200">
          <span>John Derrick</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Users, Shield, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("Users");

  const tabs = [
    { name: "Users", icon: Users },
    { name: "Providers", icon: Shield },
    { name: "Settings", icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Users":
        return <UsersView />;
      case "Providers":
        return <ProvidersView />;
      case "Settings":
        return <SettingsView />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white h-full overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-200">Authentication</h2>
      </div>
      <div className="border-b border-gray-700">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={cn(
                "group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200",
                activeTab === tab.name
                  ? "border-green-400 text-green-400"
                  : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500"
              )}
            >
              <tab.icon className={cn("-ml-0.5 mr-2 h-5 w-5", activeTab === tab.name ? 'text-green-400' : 'text-gray-500 group-hover:text-gray-400')} />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
};

const UsersView = () => (
  <div className="bg-gray-800/50 rounded-lg p-6">
    <h3 className="text-lg font-medium text-gray-200 mb-4">Manage Users</h3>
    <p className="text-gray-400">User management UI will be built here. It will include a searchable list of all application users.</p>
  </div>
);

const ProvidersView = () => (
  <div className="bg-gray-800/50 rounded-lg p-6">
    <h3 className="text-lg font-medium text-gray-200 mb-4">Authentication Providers</h3>
    <p className="text-gray-400">A grid of OAuth providers (Google, GitHub, etc.) with toggle switches will be implemented here.</p>
  </div>
);

const SettingsView = () => (
  <div className="bg-gray-800/50 rounded-lg p-6">
    <h3 className="text-lg font-medium text-gray-200 mb-4">Auth Settings</h3>
    <p className="text-gray-400">A detailed form for configuring authentication settings, such as JWT expiry, and other security rules will be available here.</p>
  </div>
);


export default Auth;

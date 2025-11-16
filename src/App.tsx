import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TableEditor from "./components/TableEditor";
import SqlEditor from "./components/SqlEditor";
import Auth from "./components/Auth";
import { Database, Edit3, Shield } from "lucide-react";

type View = "TableEditor" | "SqlEditor" | "Auth";

const App = () => {
  const [activeView, setActiveView] = useState<View>("TableEditor");

  const views = {
    TableEditor: {
      component: TableEditor,
      icon: Database,
      title: "Table Editor",
    },
    SqlEditor: {
      component: SqlEditor,
      icon: Edit3,
      title: "SQL Editor",
    },
     Auth: {
      component: Auth,
      icon: Shield,
      title: "Authentication",
    },
  };

  const ActiveComponent = views[activeView].component;

  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          icon={views[activeView].icon}
          title={views[activeView].title}
        />
        <main className="flex-1 overflow-y-auto bg-gray-800/50">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
};

export default App;

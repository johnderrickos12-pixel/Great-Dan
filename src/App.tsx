import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TableEditor from './components/TableEditor';
import SqlEditor from './components/SqlEditor';

export type View = 'tableEditor' | 'sqlEditor' | 'auth' | 'home' | 'usage';

function App() {
  const [activeView, setActiveView] = useState<View>('tableEditor');

  const renderContent = () => {
    switch (activeView) {
      case 'tableEditor':
        return <TableEditor />;
      case 'sqlEditor':
        return <SqlEditor />;
      // Add cases for other views here
      default:
        return <TableEditor />;
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-foreground flex font-sans">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 flex flex-col">
        <Header activeView={activeView} />
        <div className="flex-1 p-8 overflow-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}

export default App;
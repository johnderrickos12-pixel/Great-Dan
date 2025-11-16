import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TableEditor from './components/TableEditor';

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-foreground flex font-sans">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-8 overflow-auto">
          <TableEditor />
        </div>
      </main>
    </div>
  )
}

export default App;
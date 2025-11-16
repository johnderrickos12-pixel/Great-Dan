import { Play, Save, FileText } from 'lucide-react';

const mockSqlResult = {
  headers: ['id', 'name', 'email', 'role'],
  rows: [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },
    { id: 4, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Editor' },
  ],
};

const SqlEditor = () => {
  const defaultQuery = "SELECT id, name, email, role FROM users WHERE role = 'Admin' OR role = 'Editor';";

  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex-none flex items-center justify-between">
        <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-accent-green text-background-dark text-sm font-semibold rounded-md flex items-center space-x-2 hover:bg-accent-green-dark">
                <Play size={16} />
                <span>Run</span>
            </button>
             <button className="px-3 py-1.5 text-sm font-medium rounded-md flex items-center space-x-2 text-gray-light hover:bg-gray-dark hover:text-foreground">
              <Save size={14} />
              <span>Save</span>
            </button>
        </div>
        <div className="flex items-center space-x-2">
           <button className="px-3 py-1.5 text-sm font-medium rounded-md flex items-center space-x-2 text-gray-light hover:bg-gray-dark hover:text-foreground">
              <FileText size={14} />
              <span>New Query</span>
            </button>
        </div>
      </div>
      
      <div className="flex-1 bg-background-light rounded-lg border border-gray-dark flex flex-col">
        <textarea
          className="flex-1 w-full bg-[#1A1A1A] p-4 font-mono text-sm text-foreground resize-none focus:outline-none rounded-t-lg"
          defaultValue={defaultQuery}
        />
        <div className="h-48 border-t border-gray-dark p-2 text-xs text-gray-light">
          Success. No rows returned in 23ms.
        </div>
      </div>

      <div className="flex-none bg-background-light rounded-lg border border-gray-dark flex flex-col">
        <div className="p-3 border-b border-gray-dark text-sm font-medium">
            Results: 3 rows
        </div>
         <div className="flex-1 overflow-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-dark bg-gray-dark/30">
                  {mockSqlResult.headers.map(header => (
                    <th key={header} className="p-3 font-medium text-gray-light">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-dark">
                {mockSqlResult.rows.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-dark/50">
                    <td className="p-3">{row.id}</td>
                    <td className="p-3">{row.name}</td>
                    <td className="p-3 text-gray-light">{row.email}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${row.role === 'Admin' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        {row.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default SqlEditor;
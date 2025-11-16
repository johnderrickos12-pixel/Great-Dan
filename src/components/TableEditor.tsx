import { Plus, Filter, Search, MoreHorizontal, Lock } from 'lucide-react';

const mockData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', created_at: '2023-01-15T10:30:00Z', last_login: '2024-05-20T12:00:00Z' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', created_at: '2023-02-20T14:00:00Z', last_login: '2024-05-19T08:45:00Z' },
  { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', role: 'Viewer', created_at: '2023-03-10T09:00:00Z', last_login: '2024-05-21T11:20:00Z' },
  { id: 4, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Editor', created_at: '2023-04-05T18:45:00Z', last_login: '2024-05-18T16:30:00Z' },
  { id: 5, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'Viewer', created_at: '2023-05-12T11:20:00Z', last_login: null },
];

const TableEditor = () => {
  return (
    <div className="bg-background-light rounded-lg border border-gray-dark flex flex-col h-full">
      <div className="p-4 border-b border-gray-dark flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1.5 bg-accent-green text-background-dark text-sm font-semibold rounded-md flex items-center space-x-2 hover:bg-accent-green-dark">
            <Plus size={16} />
            <span>Insert row</span>
          </button>
          <button className="px-3 py-1.5 text-sm font-medium rounded-md flex items-center space-x-2 text-gray-light hover:bg-gray-dark hover:text-foreground">
            <Filter size={14} />
            <span>Filter</span>
          </button>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-light" />
            <input type="text" placeholder="Search" className="w-48 bg-background-dark border border-gray-dark rounded-md pl-9 pr-3 py-1.5 text-sm focus:ring-1 focus:ring-accent-green focus:outline-none" />
          </div>
        </div>
        <div className="flex items-center">
           <span className="text-sm text-gray-light mr-4">Viewing 1-5 of 5 rows</span>
           <MoreHorizontal size={20} className="text-gray-light cursor-pointer" />
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm text-left">
          <thead className="sticky top-0 bg-background-light">
            <tr className="border-b border-gray-dark">
              <th className="p-3 font-medium text-gray-light w-16 text-center">id</th>
              <th className="p-3 font-medium text-gray-light">name</th>
              <th className="p-3 font-medium text-gray-light">email</th>
              <th className="p-3 font-medium text-gray-light">role</th>
              <th className="p-3 font-medium text-gray-light flex items-center space-x-1">
                <Lock size={12} />
                <span>created_at</span>
              </th>
               <th className="p-3 font-medium text-gray-light">last_login</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-dark">
            {mockData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-dark/50">
                <td className="p-3 text-center text-gray-light">{row.id}</td>
                <td className="p-3">{row.name}</td>
                <td className="p-3 text-gray-light">{row.email}</td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${row.role === 'Admin' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    {row.role}
                  </span>
                </td>
                <td className="p-3 font-mono text-xs text-gray-light">{new Date(row.created_at).toLocaleString()}</td>
                 <td className="p-3 font-mono text-xs text-gray-light">{row.last_login ? new Date(row.last_login).toLocaleString() : <span className="text-gray-500">NULL</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableEditor;
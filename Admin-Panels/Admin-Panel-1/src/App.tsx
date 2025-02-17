import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  LogOut,
  Menu,
  X,
  Bell,
  Search
} from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'products', icon: ShoppingCart, label: 'Products' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="ltr">
      {/* Sidebar */}
      <aside 
        className={`bg-white fixed md:static h-full shadow-lg transition-all duration-300 ease-in-out z-50
          ${isSidebarOpen ? 'w-64 translate-x-0' : 'w-0 md:w-20 translate-x-full md:translate-x-0'}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-5 flex items-center justify-between">
            <h1 className={`font-bold text-xl text-indigo-600 transition-opacity duration-200
              ${isSidebarOpen ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              Admin Panel
            </h1>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav className="flex-1 px-4 py-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200
                  ${activeMenu === item.id 
                    ? 'bg-indigo-50 text-indigo-600' 
                    : 'hover:bg-gray-50 text-gray-700'}`}
              >
                <item.icon size={20} />
                <span className={`transition-opacity duration-200
                  ${isSidebarOpen ? 'opacity-100' : 'opacity-0 md:opacity-100 md:hidden'}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t">
            <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200">
              <LogOut size={20} />
              <span className={`transition-opacity duration-200
                ${isSidebarOpen ? 'opacity-100' : 'opacity-0 md:opacity-100 md:hidden'}`}>
                Logout
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
            >
              <Menu size={24} />
            </button>

            <div className="flex items-center gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 pr-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>

              <button className="relative p-2 rounded-lg hover:bg-gray-100">
                <Bell size={24} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Ali Mohammadi</p>
                  <p className="text-sm text-gray-500">System Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
}

export default App;
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

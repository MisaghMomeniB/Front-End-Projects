import React from "react";
import { 
  LineChart, 
  Wallet, 
  Users, 
  ArrowUpDown, 
  Bell,
  User,
  Settings,
  LogOut
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <div className="flex items-center gap-2 mb-8">
          <Wallet className="w-8 h-8 text-blue-400" />
          <h1 className="text-xl font-bold">CryptoAdmin</h1>
        </div>
        
        <nav className="space-y-2">
          {[
            { icon: <LineChart />, text: 'Dashboard' },
            { icon: <ArrowUpDown />, text: 'Transactions' },
            { icon: <Users />, text: 'Users' },
            { icon: <Wallet />, text: 'Wallets' },
            { icon: <Settings />, text: 'Settings' },
          ].map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-gray-800">
              <Bell className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-lg">
              <img
                src=""
                alt="Admin"
                className="w-8 h-8 rounded-full"
              />
              <span>Admin User</span>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Users', value: '24,521', icon: <Users className="w-6 h-6 text-blue-400" /> },
            { title: 'Active Trades', value: '1,429', icon: <ArrowUpDown className="w-6 h-6 text-green-400" /> },
            { title: 'Total Volume', value: '$12.9M', icon: <LineChart className="w-6 h-6 text-purple-400" /> },
            { title: 'Revenue', value: '$891K', icon: <Wallet className="w-6 h-6 text-yellow-400" /> },
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <p className="text-gray-400">{stat.title}</p>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
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
import React from 'react';
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
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
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

        {/* Recent Activity */}
        <section className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Recent Transactions</h3>
          <div className="space-y-4">
            {[
              { user: 'Sarah Chen', action: 'Bought BTC', amount: '0.234 BTC', value: '$8,532' },
              { user: 'Michael Smith', action: 'Sold ETH', amount: '4.123 ETH', value: '$7,234' },
              { user: 'David Kim', action: 'Bought BTC', amount: '0.112 BTC', value: '$4,121' },
              { user: 'Emma Wilson', action: 'Sold ETH', amount: '2.345 ETH', value: '$4,032' },
            ].map((tx, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-4">
                  <User className="w-10 h-10 p-2 bg-gray-600 rounded-full" />
                  <div>
                    <p className="font-medium">{tx.user}</p>
                    <p className="text-sm text-gray-400">{tx.action}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{tx.amount}</p>
                  <p className="text-sm text-gray-400">{tx.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
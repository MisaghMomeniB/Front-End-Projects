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
      <aside className="w-64 bg-gray-800 p-6">
        <div className="flex items-center gap-2 mb-8">
          <Wallet className="w-8 h-8 text-blue-400" />
          <h1 className="text-xl font-bold">کریپتو ادمین</h1>
        </div>
        
        <nav className="space-y-2">
          {[
            { icon: <LineChart />, text: 'داشبورد' },
            { icon: <ArrowUpDown />, text: 'تراکنش‌ها' },
            { icon: <Users />, text: 'کاربران' },
            { icon: <Wallet />, text: 'کیف پول‌ها' },
            { icon: <Settings />, text: 'تنظیمات' },
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

      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">نمای کلی داشبورد</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-gray-800">
              <Bell className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
                alt="مدیر"
                className="w-8 h-8 rounded-full"
              />
              <span>کاربر ادمین</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'تعداد کاربران', value: '۲۴,۵۲۱', icon: <Users className="w-6 h-6 text-blue-400" /> },
            { title: 'معاملات فعال', value: '۱,۴۲۹', icon: <ArrowUpDown className="w-6 h-6 text-green-400" /> },
            { title: 'حجم کل', value: '۱۲.۹ میلیون دلار', icon: <LineChart className="w-6 h-6 text-purple-400" /> },
            { title: 'درآمد', value: '۸۹۱ هزار دلار', icon: <Wallet className="w-6 h-6 text-yellow-400" /> },
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

        <section className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">تراکنش‌های اخیر</h3>
          <div className="space-y-4">
            {[
              { user: 'مصیح', action: 'خرید بیت‌کوین', amount: '۰.۲۳۴ BTC', value: '۸,۵۳۲ دلار' },
              { user: 'میلاد', action: 'فروش اتریوم', amount: '۴.۱۲۳ ETH', value: '۷,۲۳۴ دلار' },
              { user: 'احسان', action: 'خرید بیت‌کوین', amount: '۰.۱۱۲ BTC', value: '۴,۱۲۱ دلار' },
              { user: 'اکبر', action: 'فروش اتریوم', amount: '۲.۳۴۵ ETH', value: '۴,۰۳۲ دلار' },
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

import { motion } from 'framer-motion';
import { ShoppingBag, Star, TrendingUp, Trophy, Truck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-right">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80"
            alt="زمین بسکتبال"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              الیت هوپس
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              کفش‌های بسکتبال حرفه‌ای برای قهرمانان
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              خرید کنید
            </motion.button>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, title: "کیفیت برتر", desc: "مواد درجه یک" },
              { icon: Truck, title: "ارسال سریع", desc: "ارسال رایگان به سراسر کشور" },
              { icon: Star, title: "تایید شده", desc: "تست شده توسط ورزشکاران" },
              { icon: TrendingUp, title: "عملکرد عالی", desc: "بهبود بازی شما" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-gray-700 rounded-xl"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">محصولات ویژه</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "ایر الیت پرو",
                price: "۵,۹۹۰,۰۰۰ تومان",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80"
              },
              {
                name: "کورت مستر ایکس",
                price: "۴,۹۹۰,۰۰۰ تومان",
                image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80"
              },
              {
                name: "جامپ فورس ۱",
                price: "۳,۹۹۰,۰۰۰ تومان",
                image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                  <p className="text-orange-400 mb-4">{product.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    افزودن به سبد خرید
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-l from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">عضو خانواده الیت شوید</h2>
            <p className="text-xl text-white/90 mb-8">
              برای دریافت تخفیف‌های ویژه و دسترسی زودهنگام به محصولات جدید عضو شوید
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:border-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                عضویت
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">الیت هوپس</h3>
              <p className="text-sm">کفش‌های بسکتبال حرفه‌ای برای قهرمانان</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">دسترسی سریع</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">درباره ما</a></li>
                <li><a href="#" className="hover:text-white transition-colors">محصولات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">راهنمای سایز</a></li>
                <li><a href="#" className="hover:text-white transition-colors">تماس با ما</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">پشتیبانی</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">اطلاعات ارسال</a></li>
                <li><a href="#" className="hover:text-white transition-colors">مرجوعی</a></li>
                <li><a href="#" className="hover:text-white transition-colors">سوالات متداول</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">اطلاعات تماس</h4>
              <p className="text-sm mb-2">ایمیل: info@elitehoops.ir</p>
              <p className="text-sm mb-2">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p className="text-sm">آدرس: تهران، خیابان ولیعصر، پلاک ۱۲۳</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>© 1403 الیت هوپس. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
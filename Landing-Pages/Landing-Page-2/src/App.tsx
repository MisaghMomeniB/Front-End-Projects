import React from 'react';
import { Coffee, Clock, MapPin, Phone, Instagram, Star, Award, Leaf, Coffee as CoffeeBean, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 left-4 p-2 rounded-full bg-brown-100 dark:bg-brown-800 text-brown-800 dark:text-brown-100 hover:bg-brown-200 dark:hover:bg-brown-700 transition-colors z-50"
      >
        {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <div className="hero-pattern dark:bg-gray-900 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-brown-900 dark:text-brown-100 mb-6">کافه‌ی آرامش</h1>
          <p className="text-xl md:text-2xl text-brown-700 dark:text-brown-300 mb-8">لذت نوشیدن قهوه‌ی اصیل ایرانی</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-brown-800 text-white px-8 py-3 rounded-full text-lg hover:bg-brown-900 transition-colors">
              سفارش آنلاین
            </button>
            <button className="border-2 border-brown-800 dark:border-brown-300 text-brown-800 dark:text-brown-300 px-8 py-3 rounded-full text-lg hover:bg-brown-50 dark:hover:bg-brown-800 transition-colors">
              مشاهده منو
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-brown-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-brown-800 dark:text-brown-300" />
            <h3 className="text-xl font-bold mb-2 dark:text-brown-100">قهوه‌ی تازه</h3>
            <p className="text-brown-600 dark:text-brown-400">هر روز با دانه‌های تازه برشته شده</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-brown-800 dark:text-brown-300" />
            <h3 className="text-xl font-bold mb-2 dark:text-brown-100">ساعات کاری</h3>
            <p className="text-brown-600 dark:text-brown-400">همه روزه از ۸ صبح تا ۱۰ شب</p>
          </div>
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-brown-800 dark:text-brown-300" />
            <h3 className="text-xl font-bold mb-2 dark:text-brown-100">موقعیت عالی</h3>
            <p className="text-brown-600 dark:text-brown-400">در قلب شهر</p>
          </div>
        </div>
      </div>
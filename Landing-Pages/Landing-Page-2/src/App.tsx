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

      {/* Products Showcase */}
      <div className="py-20 dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-brown-100">محصولات ویژه ما</h2>
            <p className="text-lg text-brown-600 dark:text-brown-400">بهترین دانه‌های قهوه از سراسر جهان</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'قهوه برزیلی',
                description: 'عطر و طعم شکلاتی با رایحه گردو',
                price: '۱۲۰,۰۰۰',
                image: 'https://images.unsplash.com/photo-1587734005433-8a2fb6a6dd52?auto=format&fit=crop&q=80&w=400'
              },
              {
                name: 'قهوه اتیوپی',
                description: 'طعم میوه‌ای با رایحه توت و مرکبات',
                price: '۱۴۵,۰۰۰',
                image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80&w=400'
              },
              {
                name: 'قهوه کلمبیا',
                description: 'عطر کاراملی با پس‌زمینه بادام',
                price: '۱۳۵,۰۰۰',
                image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=400'
              },
              {
                name: 'قهوه گواتمالا',
                description: 'طعم متعادل با رایحه شکلات تلخ',
                price: '۱۵۰,۰۰۰',
                image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-brown-100">{item.name}</h3>
                  <p className="text-brown-600 dark:text-brown-400 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-brown-800 dark:text-brown-200 font-bold">{item.price} تومان</span>
                    <button className="bg-brown-100 dark:bg-brown-700 text-brown-800 dark:text-brown-100 px-4 py-2 rounded-lg hover:bg-brown-200 dark:hover:bg-brown-600 transition-colors">
                      افزودن به سبد
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Menu */}
      <div className="py-20 bg-brown-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-brown-100">منوی نوشیدنی‌های ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'قهوه ترک',
                price: '۴۵,۰۰۰',
                image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400'
              },
              {
                name: 'لاته',
                price: '۶۵,۰۰۰',
                image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400'
              },
              {
                name: 'اسپرسو',
                price: '۳۵,۰۰۰',
                image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=400'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-brown-100">{item.name}</h3>
                  <p className="text-brown-800 dark:text-brown-200">{item.price} تومان</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
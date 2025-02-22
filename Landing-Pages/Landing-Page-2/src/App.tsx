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
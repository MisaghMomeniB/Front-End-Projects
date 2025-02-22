import React from 'react';
import { Coffee, Clock, MapPin, Phone, Instagram, Star, Award, Leaf, Coffee as CoffeeBean, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();
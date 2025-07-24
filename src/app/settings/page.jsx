"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Settings, User, Bell, Palette, Trash2, ShoppingBag, Tag, Mail, HelpCircle, Heart, Package } from 'lucide-react';
import { useCart } from '../cart-context';

export default function SettingsPage() {
  const { clearCart, clearWishlist, setIsCartOpen } = useCart();

  // Mock user settings with localStorage persistence
  const [userSettings, setUserSettings] = useState(() => {
    const savedSettings = localStorage.getItem('userSettings');
    return savedSettings
      ? JSON.parse(savedSettings)
      : {
          name: 'John Doe',
          email: 'john.doe@example.com',
          address: '123 Luxe Street, Cosmos City, CA 90210',
          notifications: { email: true, push: false },
          theme: 'dark',
        };
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle notification toggle
  const handleNotificationToggle = (type) => {
    setUserSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type],
      },
    }));
  };

  // Handle theme change
  const handleThemeChange = (theme) => {
    setUserSettings((prev) => ({
      ...prev,
      theme,
    }));
    // Note: Actual theme switching requires updating the HTML class, which is handled by Tailwind's darkMode: 'class'
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
  }, [userSettings]);

  // Handle form submission
  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert('Profile settings saved!');
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080')] bg-cover opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-blue-900/50"></div>
        <div className="absolute inset-0 animate-particle-field">
          <div className="w-2 h-2 bg-purple-400 rounded-full absolute top-20 left-20 animate-float"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full absolute top-40 right-40 animate-float delay-1000"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full absolute bottom-30 left-60 animate-float delay-2000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Settings className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-black text-white">
              Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Settings</span>
            </h1>
            <Settings className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Customize your account preferences and manage your settings.
          </p>
        </div>
      </section>

      {/* Settings Sections */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Settings */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <User className="w-6 h-6 text-purple-400 mr-2" />
                Profile Settings
              </h2>
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={userSettings.name}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-3 bg-gray-900/50 text-white rounded-lg border border-gray-700 focus:border-purple-400 focus:ring focus:ring-purple-400/50 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userSettings.email}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-3 bg-gray-900/50 text-white rounded-lg border border-gray-700 focus:border-purple-400 focus:ring focus:ring-purple-400/50 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={userSettings.address}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-3 bg-gray-900/50 text-white rounded-lg border border-gray-700 focus:border-purple-400 focus:ring focus:ring-purple-400/50 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-[0_0_15px_rgba(124,58,237,0.7)] hover:scale-105 transition-all duration-300"
                >
                  Save Profile
                </button>
              </form>
            </div>

            {/* Notification Settings */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Bell className="w-6 h-6 text-purple-400 mr-2" />
                Notification Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">Email Notifications</span>
                  <button
                    onClick={() => handleNotificationToggle('email')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      userSettings.notifications.email ? 'bg-purple-600' : 'bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        userSettings.notifications.email ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Push Notifications</span>
                  <button
                    onClick={() => handleNotificationToggle('push')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                      userSettings.notifications.push ? 'bg-purple-600' : 'bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                        userSettings.notifications.push ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Theme Preferences */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Palette className="w-6 h-6 text-purple-400 mr-2" />
                Theme Preferences
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleThemeChange('dark')}
                    className={`flex-1 py-2 rounded-lg font-semibold ${
                      userSettings.theme === 'dark'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-900/50 text-gray-300'
                    } hover:scale-105 transition-all duration-300`}
                  >
                    Dark Mode
                  </button>
                  <button
                    onClick={() => handleThemeChange('light')}
                    className={`flex-1 py-2 rounded-lg font-semibold ${
                      userSettings.theme === 'light'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-900/50 text-gray-300'
                    } hover:scale-105 transition-all duration-300`}
                  >
                    Light Mode
                  </button>
                </div>
                <p className="text-sm text-gray-300">
                  Note: Theme changes are for demonstration purposes and may require additional setup for full functionality.
                </p>
              </div>
            </div>

            {/* Account Management */}
            <div className="lg:col-span-3 bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Settings className="w-6 h-6 text-purple-400 mr-2" />
                Account Management
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">Clear Wishlist</span>
                  <button
                    onClick={() => {
                      clearWishlist();
                      alert('Wishlist cleared!');
                    }}
                    className="py-2 px-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 flex items-center"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Clear Cart</span>
                  <button
                    onClick={() => {
                      clearCart();
                      setIsCartOpen(true);
                      alert('Cart cleared!');
                    }}
                    className="py-2 px-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 flex items-center"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Delete Account</span>
                  <button
                    onClick={() => alert('Account deletion is not implemented in this demo.')}
                    className="py-2 px-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 flex items-center"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:scale-105 transition-all duration-300"
            >
              Shop All Products
            </Link>
            <Link
              href="/deals"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(237,20,61,0.8)] hover:scale-105 transition-all duration-300"
            >
              View Deals
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:scale-105 transition-all duration-300"
            >
              Support
            </Link>
            <Link
              href="/wishlist"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] hover:scale-105 transition-all duration-300"
            >
              Wishlist
            </Link>
            <Link
              href="/account"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300"
            >
              Account
            </Link>
            <Link
              href="/orders"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:scale-105 transition-all duration-300"
            >
              Orders
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

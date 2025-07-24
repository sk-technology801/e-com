"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Updated import for App Router
import { Search, ShoppingCart, User, Menu, X, Heart, Bell, Globe, ChevronDown, Star, Zap, Gift, TrendingUp, MapPin, Phone, Mail, Shield, Truck, CreditCard, ArrowRight, Filter, Grid, List } from 'lucide-react';

const EcommerceHeader = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(3);
  const [wishlistItems, setWishlistItems] = useState(2);
  const [notifications, setNotifications] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: 'John Doe', email: 'john@example.com', avatar: 'J' });
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const searchRef = useRef(null);
  const userMenuRef = useRef(null);
  const cartRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchSuggestions([]);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const categories = [
    { name: 'Electronics', icon: Zap, color: 'from-blue-500 to-cyan-500', href: '/category/electronics', subcategories: ['Smartphones', 'Laptops', 'Gaming', 'Audio'] },
    { name: 'Fashion', icon: Star, color: 'from-pink-500 to-rose-500', href: '/category/fashion', subcategories: ['Men', 'Women', 'Kids', 'Accessories'] },
    { name: 'Home & Garden', icon: Gift, color: 'from-green-500 to-emerald-500', href: '/category/home', subcategories: ['Furniture', 'Decor', 'Kitchen', 'Garden'] },
    { name: 'Sports', icon: TrendingUp, color: 'from-orange-500 to-red-500', href: '/category/sports', subcategories: ['Fitness', 'Outdoor', 'Team Sports', 'Water Sports'] }
  ];

  const trendingSearches = ['iPhone 15 Pro', 'Gaming Chair', 'Wireless Earbuds', 'Smart Watch', 'Air Fryer'];
  
  const mockSuggestions = [
    { type: 'product', name: 'iPhone 15 Pro Max', category: 'Electronics', price: '$1,199' },
    { type: 'product', name: 'Gaming Mechanical Keyboard', category: 'Electronics', price: '$159' },
    { type: 'category', name: 'Wireless Headphones', count: '2,341 items' },
    { type: 'brand', name: 'Apple Products', count: '1,892 items' }
  ];

  const cartItemsData = [
    { id: 1, name: 'Wireless Bluetooth Earbuds', price: 89.99, qty: 1, image: '/api/placeholder/60/60' },
    { id: 2, name: 'Gaming Mechanical Keyboard', price: 159.99, qty: 2, image: '/api/placeholder/60/60' },
    { id: 3, name: 'Smart Fitness Watch', price: 249.99, qty: 1, image: '/api/placeholder/60/60' }
  ];

  const notificationsData = [
    { id: 1, title: 'Order Shipped', message: 'Your order #12345 has been shipped', time: '2 min ago', type: 'success' },
    { id: 2, title: 'Price Drop Alert', message: 'iPhone 15 Pro is now 15% off!', time: '1 hour ago', type: 'info' },
    { id: 3, title: 'Back in Stock', message: 'Gaming Chair is available again', time: '3 hours ago', type: 'warning' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchSuggestions([]);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.length > 2) {
      setSearchSuggestions(mockSuggestions.filter(item => 
        item.name.toLowerCase().includes(value.toLowerCase())
      ));
    } else {
      setSearchSuggestions([]);
    }
  };

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => Math.max(0, prev - 1));
  };

  const isActive = (path) => router.pathname === path;

  return (
    <div className="relative">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-center py-2 px-4 overflow-hidden relative">
        <div className="flex items-center justify-center space-x-8 animate-pulse">
          <div className="flex items-center space-x-2">
            <Truck className="w-4 h-4" />
            <span className="text-sm font-medium">Free Shipping on $50+</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Secure Checkout</span>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">24/7 Support</span>
          </div>
        </div>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:text-gray-200">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-purple-100' : 'bg-white shadow-sm'
      }`}>
        
        {/* Primary Header */}
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex items-center justify-center shadow-lg">
                      <div className="w-7 h-7 bg-white rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300 shadow-inner"></div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                  </div>
                  <div>
                    <h1 className="text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
                      LUXE
                    </h1>
                    <p className="text-xs text-gray-500 -mt-1 font-semibold tracking-wider">MARKETPLACE</p>
                  </div>
                </div>
              </Link>

              {/* Advanced Search Bar */}
              <div className="hidden md:flex flex-1 max-w-3xl mx-8 relative" ref={searchRef}>
                <form onSubmit={handleSearch} className="w-full">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 flex items-center space-x-2">
                        <Search className="text-gray-400 w-5 h-5" />
                        <div className="hidden lg:block w-px h-6 bg-gray-300"></div>
                      </div>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInput}
                        placeholder="Search for products, brands, categories..."
                        className="w-full pl-14 lg:pl-16 pr-32 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-0 outline-none text-gray-700 placeholder-gray-400 bg-gray-50 focus:bg-white transition-all duration-300 text-base"
                      />
                      <div className="absolute right-2 flex items-center space-x-2">
                        <button
                          type="button"
                          className="hidden lg:flex items-center space-x-1 text-gray-500 hover:text-purple-600 transition-colors px-3 py-1 rounded-lg hover:bg-purple-50"
                        >
                          <Filter className="w-4 h-4" />
                          <span className="text-sm">Filter</span>
                        </button>
                        <button 
                          type="submit"
                          className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-8 py-2.5 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold flex items-center space-x-2"
                        >
                          <span>Search</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Enhanced Search Suggestions */}
                {searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-4">
                      <div className="space-y-3">
                        {searchSuggestions.map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-3 hover:bg-purple-50 rounded-xl cursor-pointer transition-colors group">
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg ${item.type === 'product' ? 'bg-blue-100 text-blue-600' : item.type === 'category' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'}`}>
                                {item.type === 'product' ? <Gift className="w-4 h-4" /> : item.type === 'category' ? <Grid className="w-4 h-4" /> : <Star className="w-4 h-4" />}
                              </div>
                              <div>
                                <p className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.category || item.count}</p>
                              </div>
                            </div>
                            {item.price && <span className="font-bold text-purple-600">{item.price}</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t bg-gray-50 p-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Trending Searches</h4>
                      <div className="flex flex-wrap gap-2">
                        {trendingSearches.map((term, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSearchQuery(term);
                              router.push(`/search?q=${encodeURIComponent(term)}`);
                            }}
                            className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm hover:bg-purple-100 hover:text-purple-600 border border-gray-200 hover:border-purple-300 transition-all duration-300"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side Navigation */}
              <div className="flex items-center space-x-2 lg:space-x-4">
                
                {/* Mobile Search */}
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="md:hidden p-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                >
                  <Search className="w-6 h-6" />
                </button>

                {/* Wishlist */}
                <Link href="/wishlist" className="hidden sm:block relative group">
                  <div className="p-3 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300 relative">
                    <Heart className={`w-6 h-6 ${isActive('/wishlist') ? 'fill-red-500 text-red-500' : ''}`} />
                    {wishlistItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                        {wishlistItems}
                      </span>
                    )}
                  </div>
                </Link>

                {/* Notifications */}
                <div className="hidden sm:block relative" ref={notificationRef}>
                  <button 
                    onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                    className="p-3 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all duration-300 relative"
                  >
                    <Bell className="w-6 h-6" />
                    {notifications > 0 && (
                      <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
                        {notifications}
                      </span>
                    )}
                  </button>

                  {/* Notifications Dropdown */}
                  {isNotificationOpen && (
                    <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                      <div className="p-4 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-800">Notifications</h3>
                          <button className="text-sm text-purple-600 hover:text-purple-700 font-semibold">Mark all read</button>
                        </div>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notificationsData.map((notification) => (
                          <div key={notification.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer">
                            <div className="flex items-start space-x-3">
                              <div className={`p-2 rounded-lg ${
                                notification.type === 'success' ? 'bg-green-100 text-green-600' :
                                notification.type === 'info' ? 'bg-blue-100 text-blue-600' :
                                'bg-yellow-100 text-yellow-600'
                              }`}>
                                <Bell className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-gray-800 truncate">{notification.title}</p>
                                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 border-t bg-gray-50">
                        <Link href="/notifications" className="block text-center text-purple-600 hover:text-purple-700 font-semibold">
                          View All Notifications
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Shopping Cart */}
                <div className="relative" ref={cartRef}>
                  <button 
                    onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}
                    className="p-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 relative group"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    {cartItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                        {cartItems}
                      </span>
                    )}
                  </button>

                  {/* Cart Dropdown */}
                  {isCartDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                      <div className="p-4 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-800">Shopping Cart ({cartItems})</h3>
                          <Link href="/cart" className="text-sm text-purple-600 hover:text-purple-700 font-semibold">
                            View Cart
                          </Link>
                        </div>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {cartItemsData.map((item) => (
                          <div key={item.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center space-x-3">
                              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg bg-gray-100" />
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-gray-800 truncate">{item.name}</p>
                                <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                                <p className="font-bold text-purple-600">${item.price}</p>
                              </div>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 border-t bg-gray-50">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-semibold text-gray-700">Total:</span>
                          <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            $499.97
                          </span>
                        </div>
                        <Link 
                          href="/checkout"
                          className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-3 rounded-xl font-semibold text-center block hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                          Checkout Now
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* User Account */}
                <div className="relative" ref={userMenuRef}>
                  <button 
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                  >
                    {isLoggedIn ? (
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {currentUser.avatar}
                      </div>
                    ) : (
                      <User className="w-6 h-6" />
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* User Dropdown */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                      {isLoggedIn ? (
                        <>
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-100">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                                {currentUser.avatar}
                              </div>
                              <div>
                                <p className="font-bold text-gray-800">{currentUser.name}</p>
                                <p className="text-sm text-gray-600">{currentUser.email}</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-2">
                            {[
                              { label: 'My Account', href: '/account', icon: User },
                              { label: 'Orders', href: '/orders', icon: ShoppingCart },
                              { label: 'Wishlist', href: '/wishlist', icon: Heart },
                              { label: 'Settings', href: '/settings', icon: Shield },
                              { label: 'Help & Support', href: '/help', icon: Phone }
                            ].map((item) => {
                              const IconComponent = item.icon;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-purple-50 rounded-xl transition-colors ${
                                    isActive(item.href) ? 'bg-purple-50 text-purple-600 font-semibold' : 'text-gray-700'
                                  }`}
                                >
                                  <IconComponent className="w-5 h-5" />
                                  <span>{item.label}</span>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="border-t p-2">
                            <button 
                              onClick={() => setIsLoggedIn(false)}
                              className="flex items-center space-x-3 w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                            >
                              <ArrowRight className="w-5 h-5 rotate-180" />
                              <span>Sign Out</span>
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="p-4 space-y-3">
                          <Link
                            href="/login"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold text-center block hover:shadow-lg transition-all duration-300"
                          >
                            Sign In
                          </Link>
                          <Link
                            href="/register"
                            className="w-full border-2 border-purple-200 text-purple-600 py-3 rounded-xl font-semibold text-center block hover:bg-purple-50 transition-all duration-300"
                          >
                            Create Account
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center">
                <Search className="absolute left-4 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInput}
                  placeholder="Search for products, brands, categories..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 outline-none text-gray-700 placeholder-gray-400 bg-gray-50 focus:bg-white transition-all duration-300"
                />
              </div>
              {searchSuggestions.length > 0 && (
                <div className="mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="p-4">
                    <div className="space-y-3">
                      {searchSuggestions.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 hover:bg-purple-50 rounded-xl cursor-pointer transition-colors group">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${item.type === 'product' ? 'bg-blue-100 text-blue-600' : item.type === 'category' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'}`}>
                              {item.type === 'product' ? <Gift className="w-4 h-4" /> : item.type === 'category' ? <Grid className="w-4 h-4" /> : <Star className="w-4 h-4" />}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">{item.name}</p>
                              <p className="text-sm text-gray-500">{item.category || item.count}</p>
                            </div>
                          </div>
                          {item.price && <span className="font-bold text-purple-600">{item.price}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t bg-gray-50 p-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Trending Searches</h4>
                    <div className="flex flex-wrap gap-2">
                      {trendingSearches.map((term, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSearchQuery(term);
                            router.push(`/search?q=${encodeURIComponent(term)}`);
                          }}
                          className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm hover:bg-purple-100 hover:text-purple-600 border border-gray-200 hover:border-purple-300 transition-all duration-300"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              <div className="space-y-4">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Shop', href: '/shop' },
                  { label: 'Categories', href: '/categories' },
                  { label: 'Deals', href: '/deals' }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-colors ${
                      isActive(item.href) ? 'bg-purple-50 text-purple-600 font-semibold' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t pt-4">
                  <h3 className="px-4 font-semibold text-gray-800">Categories</h3>
                  <div className="mt-2 space-y-2">
                    {categories.map((category, index) => (
                      <div key={index}>
                        <Link
                          href={category.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                              <category.icon className="w-5 h-5" />
                            </div>
                            <span className="font-semibold">{category.name}</span>
                          </div>
                        </Link>
                        <div className="ml-6 mt-2 space-y-2">
                          {category.subcategories.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`${category.href}/${sub.toLowerCase().replace(' ', '-')}`}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <div className="hidden lg:block border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Categories Menu */}
              <div className="flex items-center space-x-8">
                <div className="relative" onMouseEnter={() => setIsCategoryMenuOpen(true)} onMouseLeave={() => setIsCategoryMenuOpen(false)}>
                  <button className="flex items-center space-x-2 py-4 text-gray-700 hover:text-purple-600 transition-colors font-semibold">
                    <Menu className="w-5 h-5" />
                    <span>All Categories</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Mega Menu */}
                  {isCategoryMenuOpen && (
                    <div className="absolute top-full left-0 mt-0 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {categories.map((category, index) => {
                            const IconComponent = category.icon;
                            return (
                              <div key={index}>
                                <Link
                                  href={category.href}
                                  className="group p-4 hover:bg-purple-50 rounded-xl transition-all duration-300"
                                >
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                                      <IconComponent className="w-5 h-5" />
                                    </div>
                                    <span className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">{category.name}</span>
                                  </div>
                                </Link>
                                <div className="ml-11 grid grid-cols-2 gap-2">
                                  {category.subcategories.map((sub, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      href={`${category.href}/${sub.toLowerCase().replace(' ', '-')}`}
                                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-300"
                                    >
                                      {sub}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Additional Navigation Links */}
                {['Home', 'Shop', 'Deals'].map((item) => (
                  <Link
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className={`py-4 text-gray-700 hover:text-purple-600 transition-colors font-semibold ${
                      isActive(item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'text-purple-600 border-b-2 border-purple-600' : ''
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Right Side Quick Links */}
              <div className="flex items-center space-x-6">
                <Link href="/contact" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>Contact</span>
                </Link>
                <Link href="/support" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>Support</span>
                </Link>
                <button className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors">
                  <Globe className="w-5 h-5" />
                  <span>EN</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default EcommerceHeader;
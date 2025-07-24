"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Heart, ShoppingCart, Eye, Zap, Gift, TrendingUp, Shield, Truck, CreditCard, Headphones, ArrowRight, ArrowLeft, Play, Users, Award, Globe, Clock, Sparkles, Flame, Crown, Diamond, Car, Mail, Phone } from 'lucide-react';

const EcommerceHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  // Hero slider auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Testimonial auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: 'Revolutionary Tech',
      subtitle: 'Next-Gen Smartphones',
      description:
        'Experience the future with our latest collection of premium smartphones featuring AI-powered cameras and lightning-fast performance.',
      image: 'https://via.placeholder.com/800x600',
      cta: 'Shop Now',
      link: '/category/electronics',
      badge: 'New Arrival',
      discount: 'Up to 30% OFF',
      gradient: 'from-blue-600 via-purple-600 to-pink-600',
    },
    {
      id: 2,
      title: 'Fashion Forward',
      subtitle: 'Summer Collection 2024',
      description:
        'Discover trendsetting styles that define modern fashion. Premium quality meets contemporary design in our exclusive summer lineup.',
      image: 'https://via.placeholder.com/800x600',
      cta: 'Explore Collection',
      link: '/category/fashion',
      badge: 'Limited Edition',
      discount: '50% OFF',
      gradient: 'from-pink-600 via-rose-600 to-orange-600',
    },
    {
      id: 3,
      title: 'Smart Living',
      subtitle: 'Home Automation',
      description:
        'Transform your living space with intelligent home solutions. Control everything from lighting to security with a single touch.',
      image: 'https://via.placeholder.com/800x600',
      cta: 'Discover More',
      link: '/category/home',
      badge: 'Best Seller',
      discount: '25% OFF',
      gradient: 'from-green-600 via-teal-600 to-blue-600',
    },
  ];

  const categories = [
    {
      name: 'Electronics',
      icon: Zap,
      image: 'https://via.placeholder.com/300x200',
      products: '2,450+',
      href: '/category/electronics',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Fashion',
      icon: Crown,
      image: 'https://via.placeholder.com/300x200',
      products: '5,230+',
      href: '/category/fashion',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Home & Garden',
      icon: Gift,
      image: 'https://via.placeholder.com/300x200',
      products: '1,890+',
      href: '/category/home',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Sports & Fitness',
      icon: TrendingUp,
      image: 'https://via.placeholder.com/300x200',
      products: '980+',
      href: '/category/sports',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'Beauty',
      icon: Sparkles,
      image: 'https://via.placeholder.com/300x200',
      products: '1,560+',
      href: '/category/beauty',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Automotive',
      icon: Car,
      image: 'https://via.placeholder.com/300x200',
      products: '750+',
      href: '/category/automotive',
      gradient: 'from-gray-600 to-gray-800',
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 1199,
      originalPrice: 1299,
      rating: 4.9,
      reviews: 2847,
      image: 'https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg?_gl=1*1cxdt0a*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzNzc3ODgkbzQxJGcxJHQxNzUzMzc5MzAxJGozMyRsMCRoMA..',
      badge: 'Best Seller',
      category: 'Electronics',
      discount: 8,
      colors: ['#1f2937', '#6366f1', '#ec4899'],
      inStock: true,
    },
    {
      id: 2,
      name: 'Premium Wireless Headphones',
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 1923,
      image: 'https://images.pexels.com/photos/1082328/pexels-photo-1082328.jpeg?_gl=1*10vd66k*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzNzc3ODgkbzQxJGcxJHQxNzUzMzc5MzcyJGoyOCRsMCRoMA..',
      badge: "Editor's Choice",
      category: 'Electronics',
      discount: 25,
      colors: ['#000000', '#ffffff', '#dc2626'],
      inStock: true,
    },
    {
      id: 3,
      name: 'Designer Leather Jacket',
      price: 249,
      originalPrice: 399,
      rating: 4.7,
      reviews: 856,
      image: 'https://images.pexels.com/photos/16151364/pexels-photo-16151364.jpeg?_gl=1*1j99owg*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzNzc3ODgkbzQxJGcxJHQxNzUzMzc5NDQ3JGoyNyRsMCRoMA..',
      badge: 'Limited',
      category: 'Fashion',
      discount: 38,
      colors: ['#7c2d12', '#000000', '#6b7280'],
      inStock: false,
    },
    {
      id: 4,
      name: 'Smart Fitness Watch',
      price: 199,
      originalPrice: 249,
      rating: 4.6,
      reviews: 1247,
      image: 'https://images.pexels.com/photos/4672162/pexels-photo-4672162.jpeg?_gl=1*6u0d1p*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzNzc3ODgkbzQxJGcxJHQxNzUzMzc5NTU1JGo3JGwwJGgw',
      badge: 'New',
      category: 'Sports',
      discount: 20,
      colors: ['#1f2937', '#dc2626', '#059669'],
      inStock: true,
    },
  ];

  const flashSaleProducts = [
    {
      id: 1,
      name: 'Gaming Mechanical Keyboard',
      price: 89,
      originalPrice: 159,
      image: 'https://images.pexels.com/photos/6053283/pexels-photo-6053283.jpeg?_gl=1*v34nn0*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzNzc3ODgkbzQxJGcxJHQxNzUzMzc4Nzk3JGoxNSRsMCRoMA..',
      discount: 44,
      timeLeft: '2h 15m',
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: 29,
      originalPrice: 59,
      image: 'https://images.pexels.com/photos/19304049/pexels-photo-19304049.jpeg?_gl=1*lpncsc*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzNzc3ODgkbzQxJGcxJHQxNzUzMzc4OTg3JGoyNCRsMCRoMA..',
      discount: 51,
      timeLeft: '1h 45m',
    },
    {
      id: 3,
      name: 'USB-C Hub',
      price: 39,
      originalPrice: 79,
      image: 'https://images.pexels.com/photos/7742583/pexels-photo-7742583.jpeg?_gl=1*u5hb69*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzNzc3ODgkbzQxJGcxJHQxNzUzMzc5MDk2JGoyMCRsMCRoMA..',
      discount: 51,
      timeLeft: '3h 20m',
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      price: 49,
      originalPrice: 99,
      image: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?_gl=1*1yombup*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzNzc3ODgkbzQxJGcxJHQxNzUzMzc5MTgxJGoyNiRsMCRoMA..',
      discount: 51,
      timeLeft: '4h 10m',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Verified Buyer',
      avatar: 'https://via.placeholder.com/60x60',
      rating: 5,
      comment:
        'Amazing shopping experience! Fast delivery and excellent customer service. The product quality exceeded my expectations.',
      product: 'iPhone 15 Pro',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Premium Member',
      avatar: 'https://via.placeholder.com/60x60',
      rating: 5,
      comment:
        "Best online marketplace I've used. Great prices, authentic products, and super quick shipping. Highly recommended!",
      product: 'Gaming Setup',
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Fashion Enthusiast',
      avatar: 'https://via.placeholder.com/60x60',
      rating: 5,
      comment:
        'Love the fashion collection! Trendy designs, perfect fit, and premium quality. My go-to store for all fashion needs.',
      product: 'Summer Collection',
    },
  ];

  const stats = [
    { icon: Users, value: '2M+', label: 'Happy Customers' },
    { icon: Gift, value: '50K+', label: 'Products' },
    { icon: Globe, value: '150+', label: 'Countries' },
    { icon: Award, value: '99.9%', label: 'Satisfaction' },
  ];

  const features = [
    { icon: Truck, title: 'Free Shipping', subtitle: 'On orders over $50', color: 'text-green-500' },
    { icon: Shield, title: 'Secure Payment', subtitle: '100% protected', color: 'text-blue-500' },
    { icon: Headphones, title: '24/7 Support', subtitle: 'Always here to help', color: 'text-purple-500' },
    { icon: ArrowLeft, title: 'Easy Returns', subtitle: '30-day guarantee', color: 'text-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080')] bg-cover opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-blue-900/50"></div>
        <div className="absolute inset-0 animate-particle-field">
          <div className="w-2 h-2 bg-purple-400 rounded-full absolute top-20 left-20 animate-float"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full absolute top-40 right-40 animate-float delay-1000"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full absolute bottom-30 left-60 animate-float delay-2000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-90`}></div>
              <Image
                src={slide.image}
                alt={slide.title}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold">
                      {heroSlides[currentSlide].badge}
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold text-black">
                      {heroSlides[currentSlide].discount}
                    </span>
                  </div>

                  <h1 className="text-6xl lg:text-7xl font-black leading-tight animate-hologram">
                    {heroSlides[currentSlide].title}
                    <br />
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      {heroSlides[currentSlide].subtitle}
                    </span>
                  </h1>

                  <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                    {heroSlides[currentSlide].description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={heroSlides[currentSlide].link}
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:scale-105 transition-all duration-300"
                  >
                    {heroSlides[currentSlide].cta}
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-md transition-all duration-300">
                    <Play className="mr-2 w-6 h-6" />
                    Watch Demo
                  </button>
                </div>
              </div>

              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl backdrop-blur-lg"></div>
                <div className="relative p-8">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 space-y-4">
                    <h3 className="text-white font-bold text-xl">Cosmic Offer</h3>
                    <div className="grid grid-cols-4 gap-4 text-center">
                      {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="bg-white/20 rounded-lg p-3">
                          <div className="text-2xl font-bold text-white">{value}</div>
                          <div className="text-sm text-white/80 capitalize">{unit}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-white/90">Limited time offer! Don't miss out on stellar savings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </section>

      {/* Features Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                  <div className={`p-3 rounded-xl ${feature.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                    <IconComponent className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Shop by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore thousands of products across our stellar categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={index}
                  href={category.href}
                  className="group relative overflow-hidden rounded-full bg-gray-800/80 backdrop-blur-md shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500 hover:scale-105"
                >
                  <div className="aspect-w-1 aspect-h-1 relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-70 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-white">
                    <div className="space-y-2 text-center">
                      <div className={`inline-flex p-4 rounded-full bg-white/20 backdrop-blur-md group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                        <IconComponent className="w-8 h-8 animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                      <p className="text-white/90">{category.products} products</p>
                      <div className="flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Shop Now</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Flame className="w-8 h-8 text-yellow-400 animate-pulse" />
              <h2 className="text-5xl font-black">Flash Sale</h2>
              <Flame className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-xl opacity-90">Limited time offers - grab them before they're gone!</p>

            {/* Countdown Timer */}
            <div className="mt-8 flex justify-center">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6">
                <div className="grid grid-cols-4 gap-4 text-center">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="bg-white/20 rounded-lg p-4">
                      <div className="text-3xl font-bold">{value}</div>
                      <div className="text-sm opacity-90 capitalize">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {flashSaleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="w-full h-40 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                    -{product.discount}%
                  </div>
                  <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-lg text-xs font-bold">
                    {product.timeLeft}
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-red-600">${product.price}</span>
                      <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-[0_0_15px_rgba(124,58,237,0.7)] transition-all duration-300 flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hand-picked products that combine quality, innovation, and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500 hover:scale-105 group"
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-3 bg-white/80 rounded-full text-gray-600 hover:text-purple-600 hover:scale-110 transition-all duration-300">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white/80 rounded-full text-gray-600 hover:text-red-500 hover:scale-110 transition-all duration-300">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white/80 rounded-full text-gray-600 hover:text-purple-600 hover:scale-110 transition-all duration-300">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        product.badge === 'Best Seller'
                          ? 'bg-yellow-400 text-black'
                          : product.badge === "Editor's Choice"
                          ? 'bg-purple-500 text-white'
                          : product.badge === 'Limited'
                          ? 'bg-red-500 text-white'
                          : 'bg-green-500 text-white'
                      }`}
                    >
                      {product.badge}
                    </span>
                    {product.discount > 0 && (
                      <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                        -{product.discount}%
                      </div>
                    )}
                  </div>

                  {/* Stock Status */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-sm text-purple-400 font-semibold">{product.category}</span>
                    <h3 className="font-bold text-xl text-white mt-1 line-clamp-2">{product.name}</h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>

                  {/* Colors */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-300">Colors:</span>
                    <div className="flex space-x-1">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-5 h-5 rounded-full border-2 border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-purple-400">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      product.inStock
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_15px_rgba(124,58,237,0.7)] hover:scale-105'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:scale-105 transition-all duration-300"
            >
              View All Products
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join millions of satisfied customers in our cosmic shopping universe
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 text-center hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-600/50 to-pink-600/50 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <IconComponent className="w-8 h-8 text-purple-400 animate-pulse" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-lg text-gray-300">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear from our stellar community of shoppers
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex-none w-full p-4">
                    <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
                      <div className="flex items-center space-x-4 mb-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full border-2 border-purple-400"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-5 h-5 ${
                              star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4">{testimonial.comment}</p>
                      <p className="text-sm text-purple-400 font-semibold">Purchased: {testimonial.product}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-purple-400 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 relative z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-3 h-3 bg-purple-400 rounded-full absolute top-10 left-20 animate-float"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full absolute top-30 right-30 animate-float delay-1000"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full absolute bottom-20 left-40 animate-float delay-2000"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Join the <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Cosmic Collective</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Subscribe for stellar updates on deals, new arrivals, and exclusive offers!
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Add newsletter submission logic here
            }}
            className="flex max-w-xl mx-auto relative"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-l-3xl border-0 bg-gray-800/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="px-10 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold rounded-r-3xl hover:scale-105 hover:shadow-[0_0_15px_rgba(124,58,237,0.7)] transition-all duration-300"
            >
              Join Now
            </button>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-40"></div>
          </form>
        </div>
      </section>

      
    </div>
  );
};

export default EcommerceHomePage;
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Heart, ShoppingCart, Eye, Filter, SortAsc, Tag } from 'lucide-react';
import { useCart } from '../cart-context';

export default function DealsPage() {
  const { addToCart } = useCart(); // Access cart context

  // State for filters and sorting
  const [priceFilter, setPriceFilter] = useState([0, 5000]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortOption, setSortOption] = useState('default');

  // Hardcoded products including all categories, filtered for discounts
   const allProducts = [
    // Electronics Products
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 1199,
      originalPrice: 1299,
      rating: 4.9,
      reviews: 2847,
      image: 'https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?_gl=1*verz0s*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg1ODQwJGozOSRsMCRoMA..',
      badge: 'Best Seller',
      category: 'electronics',
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
      image: 'https://images.pexels.com/photos/17664053/pexels-photo-17664053.jpeg?_gl=1*1tpy24g*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg1OTUxJGozMyRsMCRoMA..',
      badge: "Editor's Choice",
      category: 'electronics',
      discount: 25,
      colors: ['#000000', '#ffffff', '#dc2626'],
      inStock: true,
    },
    {
      id: 3,
      name: '4K Ultra HD Smart TV',
      price: 799,
      originalPrice: 999,
      rating: 4.7,
      reviews: 1564,
      image: 'https://images.pexels.com/photos/28549934/pexels-photo-28549934.jpeg?_gl=1*gd3kvx*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg2MDUzJGo1MSRsMCRoMA..',
      badge: 'New Arrival',
      category: 'electronics',
      discount: 20,
      colors: ['#000000', '#4b5563'],
      inStock: true,
    },
    {
      id: 4,
      name: 'Gaming Laptop RTX 4080',
      price: 1999,
      originalPrice: 2299,
      rating: 4.6,
      reviews: 987,
      image: 'https://images.pexels.com/photos/15919234/pexels-photo-15919234.jpeg?_gl=1*10fbahi*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg2MTY2JGo1OSRsMCRoMA..',
      badge: 'Limited',
      category: 'electronics',
      discount: 13,
      colors: ['#1f2937', '#dc2626'],
      inStock: false,
    },
    // Fashion Products
    {
      id: 5,
      name: 'Designer Leather Jacket',
      price: 249,
      originalPrice: 299,
      rating: 4.7,
      reviews: 1345,
      image: 'https://images.pexels.com/photos/16151364/pexels-photo-16151364.jpeg?_gl=1*zq2tp6*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg2Mjk2JGoxJGwwJGgw',
      badge: 'Trending',
      category: 'fashion',
      discount: 17,
      colors: ['#000000', '#8B4513', '#FFFFFF'],
      inStock: true,
    },
    {
      id: 6,
      name: 'Luxury Sneakers',
      price: 149,
      originalPrice: 199,
      rating: 4.6,
      reviews: 876,
      image: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?_gl=1*1kvcpbd*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg2NDM0JGoxNiRsMCRoMA..',
      badge: 'Best Seller',
      category: 'fashion',
      discount: 25,
      colors: ['#FFFFFF', '#000000', '#FF4500'],
      inStock: true,
    },
    {
      id: 7,
      name: 'Elegant Evening Dress',
      price: 399,
      originalPrice: 499,
      rating: 4.8,
      reviews: 654,
      image: 'https://images.pexels.com/photos/9634970/pexels-photo-9634970.jpeg?_gl=1*13a0odr*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg2Njc2JGozMSRsMCRoMA..',
      badge: 'New Arrival',
      category: 'fashion',
      discount: 20,
      colors: ['#800080', '#FFD700', '#FF69B4'],
      inStock: true,
    },
    {
      id: 8,
      name: 'Premium Sunglasses',
      price: 99,
      originalPrice: 129,
      rating: 4.5,
      reviews: 432,
      image: 'https://images.pexels.com/photos/7858516/pexels-photo-7858516.jpeg?_gl=1*528it7*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg2Nzk0JGozMCRsMCRoMA..',
      badge: 'Limited',
      category: 'fashion',
      discount: 23,
      colors: ['#000000', '#FFD700', '#C0C0C0'],
      inStock: false,
    },
    // Home & Garden Products
    {
      id: 9,
      name: 'Smart LED Table Lamp',
      price: 89,
      originalPrice: 119,
      rating: 4.6,
      reviews: 923,
      image: 'https://images.pexels.com/photos/25473948/pexels-photo-25473948.jpeg?_gl=1*mfgqcb*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg2OTAzJGo0MyRsMCRoMA..',
      badge: 'Best Seller',
      category: 'home-garden',
      discount: 25,
      colors: ['#FFFFFF', '#000000', '#FFD700'],
      inStock: true,
    },
    {
      id: 10,
      name: 'Luxury Patio Furniture Set',
      price: 799,
      originalPrice: 999,
      rating: 4.8,
      reviews: 567,
      image: 'https://images.pexels.com/photos/19135437/pexels-photo-19135437.jpeg?_gl=1*1ie4knr*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg2OTY3JGo0MyRsMCRoMA..',
      badge: 'New Arrival',
      category: 'home-garden',
      discount: 20,
      colors: ['#4B5EAA', '#8B4513', '#F5F5DC'],
      inStock: true,
    },
    {
      id: 11,
      name: 'Indoor Plant Collection',
      price: 59,
      originalPrice: 79,
      rating: 4.5,
      reviews: 789,
      image: 'https://images.pexels.com/photos/9414032/pexels-photo-9414032.jpeg?_gl=1*1urj4q3*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg3MDQ5JGoyOSRsMCRoMA..',
      badge: 'Trending',
      category: 'home-garden',
      discount: 25,
      colors: ['#228B22', '#6B8E23', '#98FB98'],
      inStock: true,
    },
    {
      id: 12,
      name: 'Ceramic Garden Planter',
      price: 39,
      originalPrice: 49,
      rating: 4.4,
      reviews: 321,
      image: 'https://images.pexels.com/photos/17356294/pexels-photo-17356294.jpeg?_gl=1*r226n7*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg3MjI2JGo0MCRsMCRoMA..',
      badge: 'Limited',
      category: 'home-garden',
      discount: 20,
      colors: ['#FFFFFF', '#4682B4', '#D3D3D3'],
      inStock: false,
    },
    // Sports & Fitness Products
    {
      id: 13,
      name: 'Smart Fitness Tracker',
      price: 129,
      originalPrice: 159,
      rating: 4.7,
      reviews: 1456,
      image: 'https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?_gl=1*1qgztbu*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg3MzQ5JGozOCRsMCRoMA..',
      badge: 'Best Seller',
      category: 'sports-fitness',
      discount: 19,
      colors: ['#000000', '#FF4500', '#4169E1'],
      inStock: true,
    },
    {
      id: 14,
      name: 'Carbon Fiber Road Bike',
      price: 999,
      originalPrice: 1299,
      rating: 4.9,
      reviews: 876,
      image: 'https://images.pexels.com/photos/10030505/pexels-photo-10030505.jpeg?_gl=1*14pzake*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg3NDIwJGoyOCRsMCRoMA..',
      badge: 'New Arrival',
      category: 'sports-fitness',
      discount: 23,
      colors: ['#1C2526', '#C70039', '#FFFFFF'],
      inStock: true,
    },
    {
      id: 15,
      name: 'Adjustable Dumbbell Set',
      price: 249,
      originalPrice: 299,
      rating: 4.6,
      reviews: 654,
      image: 'https://images.pexels.com/photos/4793234/pexels-photo-4793234.jpeg?_gl=1*1o6jbz3*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg3NDg5JGo0NSRsMCRoMA..',
      badge: 'Trending',
      category: 'sports-fitness',
      discount: 17,
      colors: ['#2F4F4F', '#B22222', '#708090'],
      inStock: true,
    },
    {
      id: 16,
      name: 'Yoga Mat Premium',
      price: 49,
      originalPrice: 69,
      rating: 4.5,
      reviews: 432,
      image: 'https://images.pexels.com/photos/7592485/pexels-photo-7592485.jpeg?_gl=1*rnz6xg*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg3NTUzJGo0OCRsMCRoMA..',
      badge: 'Limited',
      category: 'sports-fitness',
      discount: 29,
      colors: ['#9932CC', '#20B2AA', '#FF69B4'],
      inStock: false,
    },
    // Beauty Products
    {
      id: 17,
      name: 'Luxury Skincare Set',
      price: 79,
      originalPrice: 99,
      rating: 4.8,
      reviews: 1234,
      image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?_gl=1*1oh0jk3*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg3NjM3JGo0NiRsMCRoMA..',
      badge: 'Best Seller',
      category: 'beauty',
      discount: 20,
      colors: ['#FFB6C1', '#FFD700', '#E6E6FA'],
      inStock: true,
    },
    {
      id: 18,
      name: 'Premium Makeup Palette',
      price: 49,
      originalPrice: 69,
      rating: 4.7,
      reviews: 987,
      image: 'https://images.pexels.com/photos/3148938/pexels-photo-3148938.jpeg?_gl=1*z2wmp5*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg3Njg4JGo2MCRsMCRoMA..',
      badge: 'Trending',
      category: 'beauty',
      discount: 29,
      colors: ['#FF4500', '#9932CC', '#FFC1CC'],
      inStock: true,
    },
    {
      id: 19,
      name: 'Hydrating Face Mask',
      price: 29,
      originalPrice: 39,
      rating: 4.6,
      reviews: 654,
      image: 'https://images.pexels.com/photos/4491159/pexels-photo-4491159.jpeg?_gl=1*154fh91*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg3NzYzJGo1OSRsMCRoMA..',
      badge: 'New Arrival',
      category: 'beauty',
      discount: 26,
      colors: ['#ADD8E6', '#98FB98', '#FFFACD'],
      inStock: true,
    },
    {
      id: 20,
      name: 'Perfume Eau de Parfum',
      price: 89,
      originalPrice: 119,
      rating: 4.5,
      reviews: 432,
      image: 'https://images.pexels.com/photos/33139765/pexels-photo-33139765.jpeg?_gl=1*1sl7ez8*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg3ODg2JGoxMiRsMCRoMA..',
      badge: 'Limited',
      category: 'beauty',
      discount: 25,
      colors: ['#FFD700', '#C71585', '#00CED1'],
      inStock: false,
    },
    // Automotive Products
    {
      id: 21,
      name: 'Smart Car Dash Cam',
      price: 149,
      originalPrice: 199,
      rating: 4.7,
      reviews: 876,
      image: 'https://images.pexels.com/photos/14992306/pexels-photo-14992306.jpeg?_gl=1*7ynbnk*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg4MDE5JGoyNCRsMCRoMA..',
      badge: 'Best Seller',
      category: 'automotive',
      discount: 25,
      colors: ['#000000', '#C0C0C0', '#4682B4'],
      inStock: true,
    },
    {
      id: 22,
      name: 'Premium Car Wax Kit',
      price: 59,
      originalPrice: 79,
      rating: 4.6,
      reviews: 654,
      image: 'https://images.pexels.com/photos/16303693/pexels-photo-16303693.jpeg?_gl=1*1rjwg6v*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg4MDg4JGoyNSRsMCRoMA..',
      badge: 'Trending',
      category: 'automotive',
      discount: 25,
      colors: ['#FF4500', '#FFFFFF', '#696969'],
      inStock: true,
    },
    {
      id: 23,
      name: 'All-Season Floor Mats',
      price: 99,
      originalPrice: 129,
      rating: 4.5,
      reviews: 543,
      image: 'https://images.pexels.com/photos/8831719/pexels-photo-8831719.jpeg?_gl=1*17m0yk9*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg4MTQyJGo0MyRsMCRoMA..',
      badge: 'New Arrival',
      category: 'automotive',
      discount: 23,
      colors: ['#2F4F4F', '#000000', '#8B0000'],
      inStock: true,
    },
    {
      id: 24,
      name: 'Portable Car Vacuum',
      price: 39,
      originalPrice: 49,
      rating: 4.4,
      reviews: 321,
      image: 'https://images.pexels.com/photos/6196235/pexels-photo-6196235.jpeg?_gl=1*7u3o34*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzODU4MTkkbzQyJGcxJHQxNzUzMzg4MjEyJGozNSRsMCRoMA..',
      badge: 'Limited',
      category: 'automotive',
      discount: 20,
      colors: ['#1C2526', '#778899', '#B0C4DE'],
      inStock: false,
    },
  ];
  // Filter for discounted products and apply additional filters
  const filteredProducts = allProducts
    .filter((product) => product.discount > 0)
    .filter((product) => product.price >= priceFilter[0] && product.price <= priceFilter[1] && product.rating >= ratingFilter)
    .sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0; // Default: no sorting
    });

  // Debug logs
  console.log('Filtered Products:', filteredProducts);

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
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Tag className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-black text-white">
              Exclusive <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Deals</span>
            </h1>
            <Tag className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Grab the best discounts on premium products before they're gone!
          </p>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="bg-gray-800/80 backdrop-blur-md py-6 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4">
              <Filter className="w-6 h-6 text-purple-400" />
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <label className="text-white text-sm font-semibold mr-2">Price Range:</label>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceFilter[1]}
                    onChange={(e) => setPriceFilter([0, Number(e.target.value)])}
                    className="w-32"
                  />
                  <span className="text-white/90 text-sm ml-2">$0 - ${priceFilter[1]}</span>
                </div>
                <div>
                  <label className="text-white text-sm font-semibold mr-2">Min Rating:</label>
                  <select
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(Number(e.target.value))}
                    className="bg-gray-900 text-white rounded-lg px-2 py-1"
                  >
                    <option value="0">All</option>
                    <option value="4">4+ Stars</option>
                    <option value="4.5">4.5+ Stars</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <SortAsc className="w-6 h-6 text-purple-400" />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-gray-900 text-white rounded-lg px-2 py-1"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-white/90 text-xl">No deals found matching your filters.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
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
                        <Link href={`/product/${product.id}`}>
                          <button className="p-3 bg-white/80 rounded-full text-gray-600 hover:text-purple-600 hover:scale-110 transition-all duration-300">
                            <Eye className="w-5 h-5" />
                          </button>
                        </Link>
                        <button className="p-3 bg-white/80 rounded-full text-gray-600 hover:text-red-500 hover:scale-110 transition-all duration-300">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => addToCart(product)}
                          className="p-3 bg-white/80 rounded-full text-gray-600 hover:text-purple-600 hover:scale-110 transition-all duration-300"
                          disabled={!product.inStock}
                        >
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
                            : product.badge === 'Trending'
                            ? 'bg-pink-500 text-white'
                            : 'bg-green-500 text-white'
                        }`}
                      >
                        {product.badge}
                      </span>
                      <div className="bg-red-600 text-white px-2 py-1 rounded-lg text-xs font-bold animate-pulse">
                        -{product.discount}% OFF
                      </div>
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
                      onClick={() => addToCart(product)}
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
          )}
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
              href="/categories"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:scale-105 transition-all duration-300"
            >
              Explore All Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

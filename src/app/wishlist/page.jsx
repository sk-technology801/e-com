"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Trash2, ShoppingBag, Tag, Mail, HelpCircle } from 'lucide-react';
import { useCart } from '../cart-context';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, moveToCart } = useCart();

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
            <Heart className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-black text-white">
              Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Wishlist</span>
            </h1>
            <Heart className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Save your favorite products here and add them to your cart anytime!
          </p>
        </div>
      </section>

      {/* Wishlist Items */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {wishlist.length === 0 ? (
            <div className="text-center">
              <p className="text-xl text-white/90 mb-6">Your wishlist is empty.</p>
              <Link
                href="/deals"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(237,20,61,0.8)] hover:scale-105 transition-all duration-300"
              >
                Explore Deals
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {wishlist.map((product) => (
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
                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          className="p-3 bg-white/80 rounded-full text-gray-600 hover:text-red-500 hover:scale-110 transition-all duration-300"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => moveToCart(product)}
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

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button
                        onClick={() => moveToCart(product)}
                        className={`flex-1 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 ${
                          product.inStock
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_15px_rgba(124,58,237,0.7)] hover:scale-105 transition-all duration-300'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="w-5 h-5" />
                        <span>Add to Cart</span>
                      </button>
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="flex-1 py-3 bg-gray-900/50 text-white rounded-xl font-semibold hover:bg-red-600 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                      >
                        <Trash2 className="w-5 h-5" />
                        <span>Remove</span>
                      </button>
                    </div>
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
          </div>
        </div>
      </section>
    </div>
  );
}

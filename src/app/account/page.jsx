"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, Package, Heart, ShoppingCart, Trash2, ShoppingBag, Tag, Mail, HelpCircle } from 'lucide-react';
import { useCart } from '../cart-context';

export default function AccountPage() {
  const { wishlist = [], removeFromWishlist, moveToCart } = useCart();

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joined: 'January 2025',
    address: '123 Luxe Street, Cosmos City, CA 90210',
  };

  // Mock order history
  const orders = [
    {
      id: 'ORD123456',
      date: 'July 15, 2025',
      total: 1499.99,
      status: 'Delivered',
      items: [
        { name: 'iPhone 15 Pro Max', quantity: 1, price: 1199 },
        { name: 'Premium Wireless Headphones', quantity: 1, price: 299 },
      ],
    },
    {
      id: 'ORD123457',
      date: 'July 10, 2025',
      total: 249,
      status: 'Processing',
      items: [{ name: 'Designer Leather Jacket', quantity: 1, price: 249 }],
    },
  ];

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
            <User className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-black text-white">
              Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Account</span>
            </h1>
            <User className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Manage your profile, view your orders, and check your wishlist.
          </p>
        </div>
      </section>

      {/* Account Sections */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <User className="w-6 h-6 text-purple-400 mr-2" />
                Profile
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-300">Name</p>
                  <p className="text-lg text-white">{user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-lg text-white">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Joined</p>
                  <p className="text-lg text-white">{user.joined}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Address</p>
                  <p className="text-lg text-white">{user.address}</p>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-[0_0_15px_rgba(124,58,237,0.7)] hover:scale-105 transition-all duration-300">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Order History Section */}
            <div className="lg:col-span-2 bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Package className="w-6 h-6 text-purple-400 mr-2" />
                Order History
              </h2>
              {orders.length === 0 ? (
                <p className="text-gray-300">No orders yet.</p>
              ) : (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="border-b border-gray-700 pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="text-sm text-gray-300">Order #{order.id}</p>
                          <p className="text-lg text-white">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-300">Total: ${order.total.toFixed(2)}</p>
                          <p className={`text-sm ${order.status === 'Delivered' ? 'text-green-400' : 'text-yellow-400'}`}>
                            {order.status}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-gray-300 text-sm">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>${item.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/support?order=${order.id}`}
                        className="mt-4 inline-block text-purple-400 hover:underline"
                      >
                        Need help with this order?
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Wishlist Section */}
          <div className="mt-8 bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Heart className="w-6 h-6 text-purple-400 mr-2" />
              Your Wishlist
            </h2>
            {wishlist.length === 0 ? (
              <div className="text-center">
                <p className="text-gray-300 mb-4">Your wishlist is empty.</p>
                <Link
                  href="/deals"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-[0_0_15px_rgba(237,20,61,0.8)] hover:scale-105 transition-all duration-300"
                >
                  Explore Deals
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-900/50 rounded-2xl overflow-hidden shadow hover:shadow-[0_10px_30px_rgba(124,58,237,0.5)] transition-all duration-300 group"
                  >
                    <div className="relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-lg text-xs font-bold animate-pulse">
                        -{product.discount}% OFF
                      </div>
                      <div className="absolute top-2 right-2">
                        <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`}></div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-gray-300 mt-1">{product.category}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-lg font-bold text-purple-400">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <button
                          onClick={() => moveToCart(product)}
                          className={`flex-1 py-2 rounded-lg text-sm font-semibold flex items-center justify-center ${
                            product.inStock
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_10px_rgba(124,58,237,0.7)] hover:scale-105'
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          } transition-all duration-300`}
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Add to Cart
                        </button>
                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          className="flex-1 py-2 bg-gray-900/50 text-white rounded-lg text-sm font-semibold hover:bg-red-600 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
          </div>
        </div>
      </section>
    </div>
  );
}

"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Package, ShoppingBag, Tag, Mail, HelpCircle, Heart, User } from 'lucide-react';
import { useCart } from '../cart-context';

export default function OrdersPage() {
  const { setIsCartOpen } = useCart();

  // Mock order data with localStorage persistence
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders
      ? JSON.parse(savedOrders)
      : [
          {
            id: 'ORD123456',
            date: 'July 15, 2025',
            total: 1499.99,
            status: 'Delivered',
            items: [
              { id: 1, name: 'iPhone 15 Pro Max', quantity: 1, price: 1199, image: 'https://placehold.co/100x100' },
              { id: 2, name: 'Premium Wireless Headphones', quantity: 1, price: 299, image: 'https://placehold.co/100x100' },
            ],
          },
          {
            id: 'ORD123457',
            date: 'July 10, 2025',
            total: 249,
            status: 'Processing',
            items: [{ id: 5, name: 'Designer Leather Jacket', quantity: 1, price: 249, image: 'https://placehold.co/100x100' }],
          },
        ];
  });

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

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
            <Package className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-black text-white">
              Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Orders</span>
            </h1>
            <Package className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            View and manage your order history.
          </p>
        </div>
      </section>

      {/* Orders Section */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {orders.length === 0 ? (
            <div className="text-center bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg">
              <p className="text-xl text-white/90 mb-6">You have no orders yet.</p>
              <Link
                href="/shop"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:scale-105 transition-all duration-300"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Package className="w-6 h-6 text-purple-400 mr-2" />
                Order History
              </h2>
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="border-b border-gray-700 pb-6 last:border-b-0">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-300">Order #{order.id}</p>
                        <p className="text-lg text-white">{order.date}</p>
                      </div>
                      <div className="text-left sm:text-right mt-2 sm:mt-0">
                        <p className="text-sm text-gray-300">Total: ${order.total.toFixed(2)}</p>
                        <p className={`text-sm ${order.status === 'Delivered' ? 'text-green-400' : 'text-yellow-400'}`}>
                          Status: {order.status}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 bg-gray-900/50 rounded-lg p-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <p className="text-white font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-300">Quantity: {item.quantity}</p>
                            <p className="text-sm text-gray-300">Price: ${item.price.toFixed(2)}</p>
                          </div>
                          <button
                            onClick={() => {
                              setIsCartOpen(true);
                              // For demo purposes, simulate reordering by adding to cart
                              const { id, name, price, image } = item;
                              window.dispatchEvent(
                                new CustomEvent('addToCart', {
                                  detail: { id, name, price, image },
                                })
                              );
                            }}
                            className="py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-semibold hover:shadow-[0_0_10px_rgba(124,58,237,0.7)] hover:scale-105 transition-all duration-300"
                          >
                            Reorder
                          </button>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/support?order=${order.id}`}
                      className="mt-4 inline-block text-purple-400 hover:underline text-sm"
                    >
                      Need help with this order?
                    </Link>
                  </div>
                ))}
              </div>
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
          </div>
        </div>
      </section>
    </div>
  );
}

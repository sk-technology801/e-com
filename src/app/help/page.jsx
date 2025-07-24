"use client";
import React from 'react';
import Link from 'next/link';
import { HelpCircle, Mail, Phone, Info, ShoppingBag, Tag, Heart, Package, User } from 'lucide-react';

export default function HelpPage() {
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
            <HelpCircle className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-black text-white">
              Help <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Center</span>
            </h1>
            <HelpCircle className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to your questions or get in touch with our support team.
          </p>
        </div>
      </section>

      {/* Help Sections */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* FAQs */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Info className="w-6 h-6 text-purple-400 mr-2" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">How do I reset my password?</h3>
                  <p className="text-gray-300">
                    Go to the account page, click "Forgot Password," and follow the instructions sent to your email.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">How can I track my order?</h3>
                  <p className="text-gray-300">
                    Visit the Orders page to view the status of your recent purchases.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">What is your return policy?</h3>
                  <p className="text-gray-300">
                    Returns are accepted within 30 days of purchase. Visit our Support page for details.
                  </p>
                </div>
                <Link
                  href="/faqs"
                  className="inline-block mt-4 text-purple-400 hover:text-purple-300 font-semibold"
                >
                  View All FAQs
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 text-purple-400 mr-2" />
                Contact Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />
                  <p className="text-gray-300">support@cosmosluxe.com</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-400 mr-3" />
                  <p className="text-gray-300">+1 (800) 555-1234</p>
                </div>
                <div className="flex items-center">
                  <Info className="w-5 h-5 text-purple-400 mr-3" />
                  <p className="text-gray-300">123 Luxe Street, Cosmos City, CA 90210</p>
                </div>
                <button
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-[0_0_15px_rgba(124,58,237,0.7)] hover:scale-105 transition-all duration-300"
                  onClick={() => alert('Contact form is not implemented in this demo.')}
                >
                  Send a Message
                </button>
              </div>
            </div>

            {/* Support Resources */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <HelpCircle className="w-6 h-6 text-purple-400 mr-2" />
                Support Resources
              </h2>
              <div className="space-y-4">
                <Link
                  href="/support/shipping"
                  className="block text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Shipping Information
                </Link>
                <Link
                  href="/support/returns"
                  className="block text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Returns & Refunds
                </Link>
                <Link
                  href="/support/warranty"
                  className="block text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Warranty Details
                </Link>
                <Link
                  href="/support/guides"
                  className="block text-gray-300 hover:text-purple-400 transition-colors"
                >
                  User Guides & Manuals
                </Link>
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
              <ShoppingBag className="w-5 h-5 mr-2" />
              Shop All Products
            </Link>
            <Link
              href="/deals"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(237,20,61,0.8)] hover:scale-105 transition-all duration-300"
            >
              <Tag className="w-5 h-5 mr-2" />
              View Deals
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 acion duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:scale-105 transition-all duration-300"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Support
            </Link>
            <Link
              href="/wishlist"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-5 h-5 mr-2" />
              Wishlist
            </Link>
            <Link
              href="/account"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300"
            >
              <User className="w-5 h-5 mr-2" />
              Account
            </Link>
            <Link
              href="/orders"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:scale-105 transition-all duration-300"
            >
              <Package className="w-5 h-5 mr-2" />
              Orders
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
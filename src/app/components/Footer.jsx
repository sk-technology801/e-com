"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Globe, Headphones, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 relative z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2861656/pexels-photo-2861656.jpeg?_gl=1*g6iik4*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTMzOTEyMzAkbzQzJGcxJHQxNzUzMzkxMjYxJGoyOSRsMCRoMA..')] bg-cover opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-blue-900/50"></div>
        <div className="absolute inset-0 animate-particle-field">
          <div className="w-2 h-2 bg-purple-400 rounded-full absolute top-20 left-20 animate-float"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full absolute top-40 right-40 animate-float delay-1000"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full absolute bottom-30 left-60 animate-float delay-2000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl flex items-center justify-center relative group">
                <div className="w-8 h-8 bg-white rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                LUXE Cosmos
              </h3>
            </div>
            <p className="text-sm text-gray-300">
              Your portal to a futuristic shopping universe. Discover premium products with a cosmic edge.
            </p>
          </div>

          {/* Explore Section */}
          <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 text-purple-400 mr-2" />
              Explore
            </h4>
            <ul className="space-y-2">
              {['Electronics', 'Fashion', 'Home & Garden', 'Sports & Fitness', 'Beauty', 'Automotive'].map((category) => (
                <li key={category}>
                  <Link
                    href={`/category/${category.toLowerCase().replace(' & ', '-')}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Headphones className="w-5 h-5 text-purple-400 mr-2" />
              Support
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Contact Us', href: '/contact', icon: Globe },
                { label: 'Help Center', href: '/help', icon: Headphones },
                { label: 'Returns', href: '/returns', icon: Shield },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Mail className="w-5 h-5 text-purple-400 mr-2" />
              Connect
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'support@luxecosmos.com', href: 'mailto:support@luxecosmos.com', icon: Mail },
                { label: '+1-800-555-1234', href: 'tel:+18005551234', icon: Phone },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} LUXE Cosmos. All rights reserved.SK-TECHNOLOGY-801</p>
        </div>
      </div>
    </footer>
  );
}
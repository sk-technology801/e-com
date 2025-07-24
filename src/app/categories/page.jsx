
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Crown, Gift, TrendingUp, Sparkles, Car } from 'lucide-react';

export default function CategoriesPage() {
  const categories = [
    {
      name: 'Electronics',
      slug: 'electronics',
      icon: Zap,
      image: 'https://placehold.co/300x200',
      products: '2,450+',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Fashion',
      slug: 'fashion',
      icon: Crown,
      image: 'https://placehold.co/300x200',
      products: '5,230+',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Home & Garden',
      slug: 'home-garden',
      icon: Gift,
      image: 'https://placehold.co/300x200',
      products: '1,890+',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Sports & Fitness',
      slug: 'sports-fitness',
      icon: TrendingUp,
      image: 'https://placehold.co/300x200',
      products: '980+',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'Beauty',
      slug: 'beauty',
      icon: Sparkles,
      image: 'https://placehold.co/300x200',
      products: '1,560+',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Automotive',
      slug: 'automotive',
      icon: Car,
      image: 'https://placehold.co/300x200',
      products: '750+',
      gradient: 'from-gray-600 to-gray-800',
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black text-white mb-4">
            Explore Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Categories</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover a universe of premium products across all our stellar categories
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
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
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.8)] hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}

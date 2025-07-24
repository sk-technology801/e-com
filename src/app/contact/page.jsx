"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function ContactPage() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Mail className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-black text-white">
              Get in <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <Mail className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We’d love to hear from you! Reach out with any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-[0_0_15px_rgba(124,58,237,0.7)] hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">support@luxecosmos.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+1 (800) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Address</h3>
                    <p className="text-gray-300">123 LUXE Street, Cosmos City, CA 90210</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/50 rounded-full text-white hover:text-purple-400 hover:scale-110 transition-all duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/50 rounded-full text-white hover:text-purple-400 hover:scale-110 transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/50 rounded-full text-white hover:text-purple-400 hover:scale-110 transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/50 rounded-full text-white hover:text-purple-400 hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
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

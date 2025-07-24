"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, Send, MessageCircle, ShoppingBag, Tag, Mail } from 'lucide-react';

export default function SupportPage() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    issueType: '',
    message: '',
  });

  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQs data
  const faqs = [
    {
      question: 'How do I track my order?',
      answer: 'You can track your order by logging into your account and visiting the "Orders" section. You’ll find a tracking link for each order once it has shipped.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Visit our Returns page for more details.',
    },
    {
      question: 'How can I change or cancel my order?',
      answer: 'To change or cancel an order, contact our support team within 24 hours of placing the order. Use the form below or email support@luxecosmos.com.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times vary by location. Standard shipping typically takes 3-7 business days, while express shipping takes 1-3 business days.',
    },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support Form Submitted:', formData);
    setFormData({ name: '', email: '', orderNumber: '', issueType: '', message: '' });
    alert('Thank you for your support request! Our team will respond within 24-48 hours.');
  };

  // Toggle FAQ accordion
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
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
            <HelpCircle className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-black text-white">
              Customer <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Support</span>
            </h1>
            <HelpCircle className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We’re here to help! Explore our FAQs or submit a support request below.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-4 shadow-lg hover:shadow-[0_10px_30px_rgba(124,58,237,0.5)] transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-white font-semibold"
                >
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="mt-4 text-gray-300 text-sm">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Form Section */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Support Form */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-3xl font-bold text-white mb-6">Submit a Support Request</h2>
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
                  <label htmlFor="orderNumber" className="block text-sm font-semibold text-white mb-2">
                    Order Number (Optional)
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    name="orderNumber"
                    value={formData.orderNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                    placeholder="Enter your order number"
                  />
                </div>
                <div>
                  <label htmlFor="issueType" className="block text-sm font-semibold text-white mb-2">
                    Issue Type
                  </label>
                  <select
                    id="issueType"
                    name="issueType"
                    value={formData.issueType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  >
                    <option value="">Select an issue type</option>
                    <option value="order-issue">Order Issue</option>
                    <option value="product-issue">Product Issue</option>
                    <option value="return-refunded">Return/Refund</option>
                    <option value="shipping-issue">Shipping Issue</option>
                    <option value="other">Other</option>
                  </select>
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
                    placeholder="Describe your issue..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-[0_0_15px_rgba(124,58,237,0.7)] hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Request</span>
                </button>
              </form>
            </div>

            {/* Additional Support Options */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-[0_15px_40px_rgba(124,58,237,0.6)] transition-all duration-500">
              <h2 className="text-3xl font-bold text-white mb-6">More Ways to Get Help</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Live Chat</h3>
                    <p className="text-gray-300">
                      Chat with our support team in real-time.{' '}
                      <span className="text-purple-400 cursor-not-allowed">[Coming Soon]</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                    <p className="text-gray-300">
                      Have a general inquiry? Visit our{' '}
                      <Link href="/contact" className="text-purple-400 hover:underline">
                        Contact Page
                      </Link>{' '}
                      for more options.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ShoppingBag className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Order Support</h3>
                    <p className="text-gray-300">
                      Check your order status or initiate a return in your account dashboard.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Tag className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Exclusive Deals</h3>
                    <p className="text-gray-300">
                      Explore our{' '}
                      <Link href="/deals" className="text-purple-400 hover:underline">
                        Deals Page
                      </Link>{' '}
                      for the latest offers.
                    </p>
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
          </div>
        </div>
      </section>
    </div>
  );
}

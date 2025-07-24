"use client"
import React from 'react';
import { useCart } from '../cart-context';
import Image from 'next/image';
import { X, ShoppingCart, Trash2 } from 'lucide-react';

export default function CartSidebar() {
  const { cart, removeFromCart, clearCart, isCartOpen, toggleCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-gray-800/90 backdrop-blur-md z-50 transform transition-transform duration-300 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Your Cart</h2>
          </div>
          <button
            onClick={toggleCart}
            className="p-2 bg-white/20 rounded-full text-gray-300 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-center text-white/90 text-lg">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 bg-gray-900/50 rounded-xl p-3"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold line-clamp-1">{item.name}</h3>
                    <p className="text-purple-400">${item.price} x {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 bg-red-500/80 rounded-full text-white hover:bg-red-600 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between text-white mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-purple-400">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={clearCart}
              className="w-full py-2 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-all"
            >
              Clear Cart
            </button>
            <button
              className="w-full py-2 mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-[0_0_15px_rgba(124,58,237,0.7)] transition-all"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

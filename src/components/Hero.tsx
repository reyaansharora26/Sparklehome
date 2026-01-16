import React from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Sparkles className="w-20 h-20 text-purple-600" strokeWidth={1.5} />
            <Sparkles className="w-8 h-8 text-blue-500 absolute -top-2 -right-2 animate-pulse" />
            <Sparkles className="w-6 h-6 text-pink-500 absolute -bottom-1 -left-2 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Welcome to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">SparkleHome</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-700 mb-4">
          Cleaning Services
        </p>

        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Where we make your home shine! 🏠✨ Our team of experienced cleaners provides top-quality residential cleaning services with safe, eco-friendly products and attention to every detail.
        </p>

        <button
          onClick={scrollToBooking}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Book Your Cleaning Now
          <Sparkles className="w-5 h-5" />
        </button>

        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}

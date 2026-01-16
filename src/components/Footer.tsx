import React from 'react';
import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold">SparkleHome</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Making your home shine with professional, eco-friendly cleaning services. A clean home is a happy home!
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>(555) SPARKLE</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>hello@sparklehome.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Serving your local area</span>
              </div>
            </div>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="text-gray-400">
              <p className="font-semibold mb-2">Business Hours</p>
              <p className="text-sm">Monday - Friday: 8AM - 6PM</p>
              <p className="text-sm">Saturday: 9AM - 4PM</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 SparkleHome Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

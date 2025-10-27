'use client';

import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const navigationItems = [
    { name: 'Fresh Produce', href: '#', isActive: true },
    { name: 'Grains', href: '#' },
    { name: 'Dairy', href: '#' },
    { name: 'Equipment', href: '#' },
    { name: 'Supplies', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Apple Liquid Glass Effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border-b border-white/20"></div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent"></div>

      {/* Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-semibold tracking-tight text-black drop-shadow-lg">
                AGRO
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium transition-colors drop-shadow-sm ${item.isActive
                    ? 'text-black/90 hover:text-black'
                    : 'text-black/80 hover:text-black/90'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm">
                <Search className="w-5 h-5 text-black/90 drop-shadow-sm" />
              </button>
              <Link
                href="/auth"
                className="p-2 hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm"
                title="Sign In"
              >
                <User className="w-5 h-5 text-black/90 drop-shadow-sm" />
              </Link>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm relative">
                <ShoppingBag className="w-5 h-5 text-black/90 drop-shadow-sm" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-white/90 text-gray-900 text-xs flex items-center justify-center rounded-full backdrop-blur-sm">
                  2
                </span>
              </button>
              <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm">
                <Menu className="w-5 h-5 text-black/90 drop-shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

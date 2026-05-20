"use client";

import { useState } from "react";
import { Menu, X, LifeBuoy } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const sosLink = "https://my.splashtop.com/sos/packages/download/WPY3RLP37XSZ";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo-icon.svg" alt="Y2K Group LLC" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-900">
              Y2K Group LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                {link.name}
              </Link>
            ))}
            {/* SOS Button */}
            <a
              href={sosLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl animate-pulse"
              style={{ animationDuration: '2s' }}
            >
              <LifeBuoy className="w-4 h-4" />
              <span>SOS</span>
            </a>
            <a
              href="/#contact"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile SOS Button */}
            <a
              href={sosLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 mx-4 mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LifeBuoy className="w-4 h-4" />
              <span>SOS Support</span>
            </a>
            <a
              href="#contact"
              className="block mx-4 mt-3 bg-primary-600 text-white px-6 py-3 rounded-full font-medium text-center hover:bg-primary-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

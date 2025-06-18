'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-primary z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-bold text-white">
            Jeremy Kemp
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-semibold transition-colors border-b-2 border-transparent
                    ${pathname === item.path
                      ? 'text-white border-b-2 border-mint'
                      : 'text-secondary hover:text-mint hover:border-b-2 hover:border-mint'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/Jeremy Kemp Resume (June 2025).pdf"
                download
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold transition-colors bg-white text-primary hover:bg-mint hover:text-white border border-mint shadow-md ml-2"
                style={{ boxShadow: '0 2px 8px 0 rgba(82, 171, 152, 0.15)' }}
              >
                <ArrowDownTrayIcon className="h-5 w-5 self-center text-mint" />
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-mint focus:outline-none bg-primary"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-primary shadow-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-semibold border-b-2 border-transparent
                  ${pathname === item.path
                    ? 'text-white border-b-2 border-mint'
                    : 'text-secondary hover:text-mint hover:border-b-2 hover:border-mint'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/Jeremy Kemp Resume (June 2025).pdf"
              download
              className="flex items-center px-3 py-2 rounded-md text-base font-semibold bg-white text-primary hover:bg-mint hover:text-white border border-mint shadow-md mt-2"
              style={{ boxShadow: '0 2px 8px 0 rgba(82, 171, 152, 0.15)' }}
              onClick={() => setIsOpen(false)}
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2 text-mint" />
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
} 
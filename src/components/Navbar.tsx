'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed w-full bg-primary z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: scrolled ? 0 : 1 }}
      transition={{ duration: 0.4 }}
    >
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
                      ? 'text-white border-b-2 border-secondary'
                      : 'text-white hover:text-secondary hover:border-b-2 hover:border-secondary'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
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
                    : 'text-white hover:text-mint hover:border-b-2 hover:border-mint'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/Jeremy Kemp Resume (June 2025).pdf"
              download
              className="flex items-center px-3 py-2 rounded-md text-base font-semibold bg-primary text-white hover:bg-mint hover:text-primary border border-white shadow-md mt-2"
              onClick={() => setIsOpen(false)}
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2 text-mint" />
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
} 
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const titles = [
  'Problem Solver',
  'Web Developer',
  'Tech Consultant',
  'AI Enthusiast',
  'Product Builder',
  'UI/UX Advocate',
  'Global Citizen',
  'Team Leader',
  'Lifelong Learner',
  'Data Explorer',
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-primary flex items-center justify-center">
      {/* Hero Section */}
      <section className="hero-section w-full flex flex-col items-center justify-center bg-primary min-h-screen m-0 p-0 border-none rounded-none shadow-none">
        <div className="z-10 text-center px-4 w-full flex flex-col items-center justify-center m-0 p-0 border-none rounded-none shadow-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            Jeremy Kemp
          </motion.h1>
          <div className="relative h-8 md:h-12 mb-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={titles[current]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="block text-xl md:text-2xl text-white"
              >
                {titles[current]}
              </motion.span>
            </AnimatePresence>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/portfolio"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:text-mint hover:border-mint transition-colors font-semibold"
            >
              See My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:text-mint hover:border-mint transition-colors font-semibold"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

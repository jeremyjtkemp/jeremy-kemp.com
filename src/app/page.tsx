'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRightIcon, CodeBracketIcon, CommandLineIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const titles = [
  'Web Developer',
  'App Developer',
  'Problem Solver',
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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-blue-50 dark:bg-blue-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-25 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-10 right-60 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{ animationDelay: '4s' }}></div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left lg:col-span-3"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-black">
                  <GlobeAltIcon className="w-4 h-4 mr-2" />
                  Available for new opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold mb-4 text-black"
              >
                <span className="gradient-text">Jeremy Kemp</span>
              </motion.h1>

              <div className="relative h-12 mb-6 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titles[current]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="block text-xl lg:text-2xl text-black font-medium"
                  >
                    {titles[current]}
                  </motion.span>
                </AnimatePresence>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-black mb-8 leading-relaxed"
              >
                I build exceptional digital experiences that combine cutting-edge technology with thoughtful design. 
                From concept to deployment, I turn ideas into reality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <Link
                  href="/portfolio"
                  style={{
                    padding: '12px 24px',
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#374151';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'black';
                  }}
                >
                  <span style={{ color: 'white' }}>View My Work</span>
                  <ArrowRightIcon className="w-4 h-4" style={{ color: 'white' }} />
                </Link>
                <Link
                  href="/contact"
                  style={{
                    padding: '12px 24px',
                    border: '2px solid black',
                    color: 'black',
                    borderRadius: '8px',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'black';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'black';
                  }}
                >
                  Get in Touch
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex justify-center lg:justify-start gap-8"
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-black">5+</div>
                  <div className="text-sm text-black">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-black">20+</div>
                  <div className="text-sm text-black">Projects Completed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-black">15+</div>
                  <div className="text-sm text-black">Technologies</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Single Large Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-96 lg:h-[600px] lg:col-span-2 -mr-20 -mb-20 lg:-mr-28 lg:-mb-40"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-0 right-0 w-full h-full"
              >
                <Image
                  src="/Headshot1.png"
                  alt="Jeremy Kemp"
                  fill
                  className="object-contain object-bottom-right"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black dark:text-white">What I Do</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I specialize in building modern web applications with a focus on performance, accessibility, and user experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CodeBracketIcon,
                title: "Web & App Development",
                description: "Full-stack development with React, Next.js, and modern web technologies for both web and mobile applications."
              },
              {
                icon: CommandLineIcon,
                title: "Problem Solving",
                description: "Turning complex challenges into elegant, scalable solutions."
              },
              {
                icon: GlobeAltIcon,
                title: "Global Experience",
                description: "International collaboration and cross-cultural project management."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card p-8 text-center hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

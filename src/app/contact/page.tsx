'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import SEO from '@/components/SEO';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Jeremy Kemp for web development projects, consulting opportunities, or collaboration."
      />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-6 bg-primary-100 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center"
            >
              <EnvelopeIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss potential opportunities?
              I&apos;d love to hear from you. Fill out the form below or reach out through
              any of the social links.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </main>
    </>
  );
} 
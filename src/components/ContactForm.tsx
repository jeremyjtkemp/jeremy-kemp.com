'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formspree.io/f/movwogzg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6 text-white">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-transparent text-white focus:ring-2 focus:ring-blue-500 focus:border-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-transparent text-white focus:ring-2 focus:ring-blue-500 focus:border-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Your message here..."
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-transparent text-white focus:ring-2 focus:ring-blue-500 focus:border-white"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="max-w-xs mr-auto px-8 py-3 border-2 border-white text-white rounded-lg hover:underline transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>
      </form>

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg"
        >
          Thank you! Your message has been sent.
        </motion.div>
      )}
    </div>
  );
} 
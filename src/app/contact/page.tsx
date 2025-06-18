'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import SEO from '@/components/SEO';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Jeremy Kemp for web development projects, consulting opportunities, or collaboration."
      />
      <main className="min-h-screen bg-inherit">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white !text-white">Contact Me</h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              I&apos;d love to hear from you. Fill out the form below or reach out through
              any of the social links.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </main>
    </>
  );
} 
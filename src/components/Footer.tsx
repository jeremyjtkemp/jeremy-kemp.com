'use client';

import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart,
  ArrowUp 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold gradient-text hover:scale-105 transition-transform inline-block">
              Jeremy Kemp
            </Link>
            <p className="text-sm text-secondary-600 dark:text-secondary-300 mt-1">
              Web Developer & Tech Consultant
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/jeremyjtkemp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#f3f4f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e5e7eb';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeremyjtkemp/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#f3f4f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e5e7eb';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:jjtk2002@gmail.com"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#f3f4f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e5e7eb';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#f3f4f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
                transition: 'all 0.2s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e5e7eb';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-sm text-secondary-600 dark:text-secondary-300">
            © {currentYear} Jeremy Kemp
          </p>
        </div>
      </div>
    </footer>
  );
} 
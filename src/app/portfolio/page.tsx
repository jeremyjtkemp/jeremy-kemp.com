'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';
import SEO from '@/components/SEO';
import { CodeBracketIcon, SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore Jeremy Kemp's portfolio of web development projects, showcasing expertise in Next.js, React, and modern web technologies."
      />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
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
              <CodeBracketIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">My Work</span>
            </h1>
            
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
              Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge
              and solution, showcasing my skills in web development and problem-solving.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              { icon: CodeBracketIcon, label: 'Projects Built', value: projects.length.toString() },
              { icon: SparklesIcon, label: 'Technologies Used', value: '15+' },
              { icon: RocketLaunchIcon, label: 'Years Experience', value: '5+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-soft text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.value}</div>
                <div className="text-sm text-secondary-600 dark:text-secondary-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-20"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
              <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                I&apos;m always open to discussing new opportunities and exciting projects.
              </p>
              <a
                href="/contact"
                style={{
                  padding: '12px 24px',
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#374151';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'black';
                }}
              >
                <RocketLaunchIcon className="w-5 h-5" />
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
} 
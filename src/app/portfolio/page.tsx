'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';
import SEO from '@/components/SEO';

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore Jeremy Kemp's portfolio of web development projects, showcasing expertise in Next.js, React, and modern web technologies."
      />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">My Work</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge
              and solution, showcasing my skills in web development and problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto pt-6">
          {project.githubUrl && project.liveUrl ? (
            <>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 px-4 py-2 border-2 border-primary text-primary rounded-lg text-center hover:underline transition-colors font-semibold bg-transparent"
              >
                GitHub
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 px-4 py-2 border-2 border-primary text-primary rounded-lg text-center hover:underline transition-colors font-semibold bg-transparent"
              >
                Live Demo
              </Link>
            </>
          ) : project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2 border-2 border-primary text-primary rounded-lg text-center hover:underline transition-colors font-semibold bg-transparent"
            >
              GitHub
            </Link>
          ) : project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2 border-2 border-primary text-primary rounded-lg text-center hover:underline transition-colors font-semibold bg-transparent"
            >
              Live Demo
            </Link>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
} 
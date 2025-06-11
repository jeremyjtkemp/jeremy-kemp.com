'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TimelineItem from '@/components/TimelineItem';
import SEO from '@/components/SEO';

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'AWS Amplify',
  'Git',
  'PostgreSQL',
  'Flutter',
  'Firebase',
];

const timeline = [
  {
    title: 'Senior Web Developer',
    subtitle: 'Tech Company',
    date: '2022 - Present',
    description: 'Leading development of enterprise web applications using Next.js and TypeScript.',
  },
  {
    title: 'Full Stack Developer',
    subtitle: 'Startup Inc.',
    date: '2020 - 2022',
    description: 'Developed and maintained multiple web applications using React and Node.js.',
  },
  {
    title: 'Computer Science Degree',
    subtitle: 'University Name',
    date: '2016 - 2020',
    description: 'Bachelor of Science in Computer Science with focus on Software Engineering.',
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about Jeremy Kemp - a passionate web developer and creative problem solver with expertise in modern web technologies."
      />
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Bio Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m a passionate web developer and creative problem solver with a strong foundation in modern web technologies. 
              With several years of experience in building scalable applications, I specialize in creating elegant solutions 
              that combine technical excellence with user-centric design.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              My approach combines technical expertise with a deep understanding of user needs, 
              allowing me to deliver solutions that are both powerful and intuitive.
            </p>
            <Link
              href="/resume.pdf"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download CV
            </Link>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  {...item}
                  isLast={index === timeline.length - 1}
                />
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
} 
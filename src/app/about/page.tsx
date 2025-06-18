'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TimelineItem from '@/components/TimelineItem';
import SEO from '@/components/SEO';
import Image from 'next/image';

const skills = [
  'Web Development',
  'Product Design',
  'Data Science',
  'Team Leadership',
  'International Collaboration',
  'Mandarin (Proficient)',
];

const timeline = [
  {
    title: 'Product Development',
    subtitle: 'What I build',
    date: '2023 – Present',
    description: 'Building digital products and scalable solutions with a focus on user experience and impact.'
  },
  {
    title: 'International Experience',
    subtitle: "Where I've been",
    date: '2023 – 2024',
    description: 'Studied and worked in Taiwan and Vietnam, gaining global perspective and cross-cultural skills.'
  },
  {
    title: 'Leadership & Athletics',
    subtitle: 'How I lead',
    date: '2021 – 2025',
    description: 'NCAA Division 1 student-athlete and team captain, leading by example in and out of the pool.'
  },
  {
    title: 'Academic Journey',
    subtitle: 'How I learn',
    date: '2021 – 2025',
    description: 'Pursuing a B.S. in Computer Science with a minor in Data Science at Davidson College.'
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about Jeremy Kemp – a web developer, student-athlete, and creative problem solver with international experience and a passion for technology."
      />
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/Headshot.jpg"
              alt="Jeremy Kemp headshot"
              width={160}
              height={160}
              className="rounded-full object-cover border-4 border-blue-200 shadow-lg"
              priority
            />
          </div>
          {/* Fun Facts or Graphics Section (optional, add icons or graphics here in the future) */}
          {/* <div className="flex justify-center mb-8">
            <div className="flex gap-6">
              <span title="World Traveler">🌏</span>
              <span title="Coffee Enthusiast">☕</span>
              <span title="Swimmer">🏊‍♂️</span>
              <span title="Tech Tinkerer">💻</span>
            </div>
          </div> */}
          {/* Bio Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Hi, I'm Jeremy Kemp—a builder, connector, and lifelong learner. I graduated from Davidson College, but my education didn't stop at the classroom. From leading swim teams to launching digital products, and from late-night hackathons to navigating new cultures in Taiwan and Vietnam, I've learned that the best ideas come from mixing curiosity with courage.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I love turning big problems into creative solutions—whether that's designing a new app, collaborating with people from around the world, or just figuring out how to make life a little easier (and more fun) for others. My journey has been anything but linear, and I wouldn't have it any other way.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              If you want the full story (or just want to swap travel tips or tech ideas), download my resume below!
            </p>
            <Link
              href="/Jeremy Kemp Resume (June 2025).pdf"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download Resume
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
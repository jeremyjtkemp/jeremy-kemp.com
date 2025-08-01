'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TimelineItem from '@/components/TimelineItem';
import SEO from '@/components/SEO';
import Image from 'next/image';
import { ArrowDownTrayIcon, GlobeAltIcon, AcademicCapIcon, TrophyIcon, ClockIcon } from '@heroicons/react/24/outline';

const timeline = [
  {
    title: 'Product Development',
    subtitle: 'What I build',
    date: '2023 – Present',
    description: 'Building digital products and scalable solutions with a focus on user experience and impact.',
    icon: '💻'
  },
  {
    title: 'International Experience',
    subtitle: "Where I've been",
    date: '2023 – 2024',
    description: 'Studied and worked in Taiwan and Vietnam, gaining global perspective and cross-cultural skills.',
    icon: '🌏'
  },
  {
    title: 'Leadership & Athletics',
    subtitle: 'How I lead',
    date: '2021 – 2025',
    description: 'NCAA Division 1 student-athlete and team captain, leading by example in and out of the pool.',
    icon: '🏊‍♂️'
  },
  {
    title: 'Academic Journey',
    subtitle: 'How I learn',
    date: '2021 – 2025',
    description: 'Graduated with a B.S. in Computer Science with a minor in Data Science at Davidson College.',
    icon: '🎓'
  },
];

const stats = [
  { label: 'Countries Lived In', value: '3', icon: GlobeAltIcon },
  { label: 'Languages Spoken', value: '2', icon: AcademicCapIcon },
  { label: 'Years of Experience', value: '5+', icon: ClockIcon },
  { label: 'Projects Completed', value: '20+', icon: TrophyIcon },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about Jeremy Kemp – a web developer, student-athlete, and creative problem solver with international experience and a passion for technology."
      />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <Image
                  src="/Headshot.jpg"
                  alt="Jeremy Kemp headshot"
                  width={200}
                  height={200}
                  className="rounded-full object-cover border-4 border-white shadow-2xl"
                  priority
                />
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl lg:text-6xl font-bold mb-6"
            >
              <span className="gradient-text">About Me</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed"
            >
              Hi, I&apos;m Jeremy. I graduated from Davidson College, where I developed a passion for technology, teamwork, and creative problem-solving. 
              I grew up in Southeast Asia and have traveled to many countries, which has given me a broad perspective and a love for working with people from different backgrounds.
            </motion.p>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-soft text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/20 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Bio Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-soft">
                <h2 className="text-3xl font-bold mb-6">My Story</h2>
                <div className="space-y-6 text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  <p>
                    I came to the United States for college, and since then, I&apos;ve had the chance to work in places like Taiwan and Vietnam. 
                    These experiences have shaped my approach to technology and collaboration.
                  </p>
                  <p>
                    I enjoy turning complex problems into practical solutions, whether that&apos;s designing a new app, collaborating with people from around the world, 
                    or finding ways to make life a little easier and more enjoyable for others.
                  </p>
                  <p>
                    My path hasn&apos;t always been straightforward, but every experience has helped me grow and see things from new angles. 
                    I believe in continuous learning and adapting to new challenges.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-soft">
                <h2 className="text-3xl font-bold mb-6">Quick Facts</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-sm"></div>
                    <span className="text-lg">Born and raised in Southeast Asia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-sm"></div>
                    <span className="text-lg">NCAA Division 1 student-athlete</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-sm"></div>
                    <span className="text-lg">Computer Science major with Data Science minor</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-sm"></div>
                    <span className="text-lg">Passionate about AI and emerging technologies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-sm"></div>
                    <span className="text-lg">Fluent in English and proficient in Mandarin</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-sm"></div>
                    <span className="text-lg">Loves reggae music</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-sm"></div>
                    <span className="text-lg">Can ride the unicycle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-sm"></div>
                    <span className="text-lg">Enjoys exploring new places</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Experience & Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  {...item}
                  isLast={index === timeline.length - 1}
                />
              ))}
            </div>
          </motion.section>

          {/* Resume Download */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Want to know more?</h3>
              <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                Download my resume to see my full experience, skills, and achievements.
              </p>
              <Link
                href="/Jeremy Kemp Resume (June 2025).pdf"
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
                <ArrowDownTrayIcon className="w-5 h-5" />
                Download Resume
              </Link>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
} 
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
  'AI & Machine Learning',
  'UI/UX Design',
  'Problem Solving',
  'Programming Languages',
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
        <div className="hero-section max-w-4xl mx-auto px-4 py-12">
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
            <p className="text-lg mb-6">
              Hi, I'm Jeremy. I graduated from Davidson College, where I developed a passion for technology, teamwork, and creative problem-solving. I grew up in Southeast Asia and have traveled to many countries, which has given me a broad perspective and a love for working with people from different backgrounds. I came to the United States for college, and since then, I've had the chance to work in places like Taiwan and Vietnam.
            </p>
            <p className="text-lg mb-6">
              I enjoy turning complex problems into practical solutions, whether that's designing a new app, collaborating with people from around the world, or finding ways to make life a little easier and more enjoyable for others. My path hasn't always been straightforward, but every experience has helped me grow and see things from new angles.
            </p>
            <p className="text-lg mb-8">
              If you'd like to know more about my background or want to connect about tech, travel, or new ideas, feel free to download my resume below!
            </p>
            <div className="flex justify-center mb-12">
              <Link
                href="/Jeremy Kemp Resume (June 2025).pdf"
                className="download-btn"
              >
                Download Resume
              </Link>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-32"
          >
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white text-primary rounded-lg shadow-md text-center font-semibold"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.section>

          <div className="my-20" />

          {/* Timeline Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 mt-20"
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
'use client';

import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  subtitle,
  date,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8"
    >
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
      )}
      
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full" style={{ background: '#c8d8e4' }} />
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-primary">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-sm text-primary">{date}</span>
        </div>
        
        <h4 className="text-md text-primary mb-2">
          {subtitle}
        </h4>
        
        <p className="text-primary">
          {description}
        </p>
      </div>
    </motion.div>
  );
} 
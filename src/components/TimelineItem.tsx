'use client';

import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon?: string;
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  subtitle,
  date,
  description,
  icon,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="flex gap-6">
        {/* Icon and Timeline Line */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-2xl">
            {icon}
          </div>
          {!isLast && (
            <div className="absolute left-1/2 top-12 bottom-0 w-0.5 bg-secondary-200 dark:bg-secondary-700 transform -translate-x-1/2" />
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <span className="text-sm text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
              {date}
            </span>
          </div>
          
          <h4 className="text-lg text-secondary-600 dark:text-secondary-300 mb-3 font-medium">
            {subtitle}
          </h4>
          
          <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
} 
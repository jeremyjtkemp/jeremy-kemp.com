export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'project-4',
    title: 'Exterior Cleaning Marketplace',
    description: 'A full-stack marketplace platform for exterior cleaning services, built in collaboration with Lucid Bots. Features include user authentication, job listings, bidding, messaging, and a seamless user experience.',
    image: '/ExteriorMarketplace.png',
    tags: ['Product Development', 'Full Stack', 'Marketplace', 'Flutter', 'Firebase', 'Lucid Bots'],
    githubUrl: 'https://github.com/jeremykemp7/ExteriorCleaningMarketplace',
    liveUrl: 'https://exterior-cleaning-marketplace.web.app/',
  },
  {
    id: 'project-3',
    title: 'Usability Test',
    description: 'A comprehensive usability testing project that evaluates and improves user experience through thoughtful design and analysis, identifying key pain points and opportunities for enhancement.',
    image: '/projects/spotify_usability_test.png',
    tags: ['Usability Testing', 'UX Research', 'Design Analysis'],
    githubUrl: 'https://github.com/jeremykemp1/dig245-usability-test',
    liveUrl: 'https://jeremykemp1.github.io/dig245-usability-test/',
  },
  {
    id: 'project-1',
    title: 'Fly on the Wall',
    description: 'An interactive storytelling platform that merges design and technology for an engaging user experience, exploring user behavior through observation and analysis.',
    image: '/projects/fly_on_the_wall.png',
    tags: ['User Research', 'UX Design', 'Interactive Storytelling'],
    githubUrl: 'https://github.com/yuahmed/fly-on-the-wall',
    liveUrl: 'https://yuahmed.github.io/fly-on-the-wall/#intro',
  },
  {
    id: 'project-2',
    title: 'Regenerative Design',
    description: 'A project exploring regenerative design principles through creative and innovative digital prototypes, focusing on sustainable and forward-thinking design solutions.',
    image: '/projects/the_future_in_colours.png',
    tags: ['Regenerative Design', 'Innovation', 'Digital Prototyping'],
    githubUrl: 'https://github.com/jeremykemp1/dig245-regenerative',
    liveUrl: 'https://jeremykemp1.github.io/dig245-regenerative/',
  },
  {
    id: 'project-5',
    title: 'One Booking One Tree',
    description: 'A logo design project for The Sarojin, a 5-star luxury resort in Thailand, representing their environmental initiative where they plant one tree for every booking made. The design symbolizes the direct connection between guest bookings and environmental impact through a minimalist circular emblem featuring a growing tree.',
    image: '/projects/one_booking_one_tree.png',
    tags: ['Logo Design', 'Graphic Design', 'Branding', 'Environmental', 'Hospitality', 'The Sarojin'],
    liveUrl: 'https://www.sarojin.com/blog/khao-lak-resort-one-booking-one-tree2023/',
  },
]; 
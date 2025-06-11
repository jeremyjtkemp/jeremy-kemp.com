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
    id: 'project-3',
    title: 'Usability Test',
    description: 'A comprehensive usability testing project that evaluates and improves user experience through thoughtful design and analysis, identifying key pain points and opportunities for enhancement.',
    image: '/projects/spotify_usability_test.png',
    tags: ['Usability Testing', 'UX Research', 'Design Analysis'],
    githubUrl: 'https://github.com/jeremykemp1/dig245-usability-test',
    liveUrl: 'https://jeremykemp1.github.io/dig245-usability-test/',
  },
]; 
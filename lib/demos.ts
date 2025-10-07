export type Demo = {
  slug: string;
  title: string;
  description: string;
  url: string;            // origin of the microservice
  mode: 'proxy' | 'iframe';
  tags?: string[];
  repo?: string;
};

export const demos: Demo[] = [
  {
    slug: 'trending-movies',
    title: 'Trending Movies',
    description: 'React app that shows trending movies using TMDB and OMDB APIs.',
    url: process.env.DEMO_IMAGE_TOOLS_URL || 'https://movie-app-production-06ae.up.railway.app/',
    mode: 'iframe',
    tags: ['React', 'API', 'Rechart'],
    repo: "https://github.com/drewmbailey/movie-app",
  },
  {
    slug: 'task-manager',
    title: 'Task Manager',
    description: 'Simple task manager with a react frontend and Java backend.',
    url: process.env.DEMO_AI_NOTES_URL || 'https://task-manager-fullstack.up.railway.app/',
    mode: 'iframe',
    tags: ['React', 'Java', 'API'],
    repo: "https://github.com/drewmbailey/task-manager-fullstack",
  },
  {
    slug: 'ui-components',
    title: 'UI Components',
    description: 'UI playground for interesting frontend code.',
    url: process.env.DEMO_IMAGE_TOOLS_URL || 'https://ui-components.up.railway.app/',
    mode: 'iframe',
    tags: ['CSS', 'Frontend'],
    repo: "https://github.com/drewmbailey/ui-components",
  }
];

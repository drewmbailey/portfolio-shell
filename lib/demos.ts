export type Demo = {
  slug: string;
  title: string;
  description: string;
  url: string;            
  mode: 'proxy' | 'iframe' | 'endpoint';
  tags?: string[];
  repo?: string;
  online?: boolean;
  image?: string;
};

export const demos: Demo[] = [
  {
    slug: 'trending-movies',
    title: 'Trending Movies',
    description: 'React app that shows trending movies using TMDB and OMDB APIs.',
    url: 'https://movie-app-production-06ae.up.railway.app/',
    mode: 'iframe',
    tags: ['React', 'API', 'Rechart'],
    repo: "https://github.com/drewmbailey/movie-app",
  },
  {
    slug: 'task-manager',
    title: 'Task Manager',
    description: 'Simple task manager with a react frontend and Java backend.',
    url: 'https://task-manager-fullstack.up.railway.app/',
    mode: 'iframe',
    tags: ['React', 'Java', 'API'],
    repo: "https://github.com/drewmbailey/task-manager-fullstack",
  },
  {
    slug: 'ui-components',
    title: 'UI Components',
    description: 'UI playground for interesting frontend code.',
    url: 'https://ui-components.up.railway.app/',
    mode: 'iframe',
    tags: ['CSS', 'Frontend'],
    repo: "https://github.com/drewmbailey/ui-components",
  },
  {
    slug: 'd3-data-visualization',
    title: 'D3 Data Visualization',
    description: 'Data visualization using D3.js, React, Typescript, and Tailwind.',
    url: 'https://d3-demo.up.railway.app/',
    mode: 'iframe',
    tags: ['d3.js', 'React', 'Typescript'],
    repo: "https://github.com/drewmbailey/d3-demo",
  },
  {
    slug: 'notes-endpoint',
    title: 'ChatGPT / Google Drive Notes Endpoint',
    description: 'Express.js endpoint that allows ChatGPT to save notes in Google Drive in markdown format. Works with typed notes, images of handwritten notes.',
    url: 'https://notes-endpoint.up.railway.app/',
    mode: 'endpoint',
    tags: ['Express.js', 'AI', 'ChatGPT'],
    repo: "https://github.com/drewmbailey/notes-endpoint",
    online: true,
    image: 'notes-endpoint.png',
  }
];

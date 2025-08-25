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
    slug: 'ai-notes',
    title: 'AI Notes',
    description: 'Summarize notes, extract tasks—LLM powered. (Iframe mode)',
    url: process.env.DEMO_AI_NOTES_URL || 'https://example.org',
    mode: 'iframe',
    tags: ['ai', 'notes'],
    repo: "https://github.com/",
  }
];

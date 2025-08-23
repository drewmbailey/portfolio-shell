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
    slug: 'image-tools',
    title: 'Image Tools',
    description: 'Transform and optimize images via a tiny API. (Proxy mode)',
    url: process.env.DEMO_IMAGE_TOOLS_URL || 'https://example.com',
    mode: 'iframe',
    tags: ['nextjs', 'edge', 'images'],
    repo: "https://github.com/",
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

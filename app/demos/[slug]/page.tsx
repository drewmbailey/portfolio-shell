import { notFound } from 'next/navigation';
import { demos } from '@/lib/demos';

export default function DemoPage({ params }: { params: { slug: string } }) {
  const demo = demos.find(demo => demo.slug === params.slug);
  if (!demo) return notFound();

  const isIframe = demo.mode === 'iframe';

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold mb-2">{demo.title}</h1>
      <p className="mb-4">{demo.description}</p>
      {demo?.repo && 
        <a href={demo.repo} target="_blank" className="flex flex-row mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          &nbsp;GitHub
        </a>
      }

      {isIframe ? (
        <div className="rounded-2xl overflow-hidden border">
          <iframe
            src={demo.url}
            className="w-full h-[80vh]"
            sandbox="allow-scripts allow-forms allow-same-origin"
          />
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          This demo is proxied under <code>/demos/{demo.slug}</code>. Try navigating within this path.
        </p>
      )}
    </main>
  );
}

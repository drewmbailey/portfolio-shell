import { notFound } from 'next/navigation';
import { demos } from '@/lib/demos';
import { GitHubIcon } from '@/app/components/icons/GitHubIcon';

export default function DemoPage({ params }: { params: { slug: string } }) {
  const demo = demos.find(demo => demo.slug === params.slug);
  if (!demo) return notFound();

  const isIframe = demo.mode === 'iframe';

  return (
    <>
      <h1 className="text-2xl font-semibold mb-2">{demo.title}</h1>
      <p className="mb-4">{demo.description}</p>
      {demo?.repo && 
        <a 
          href={demo.repo} 
          target="_blank" 
          className="flex flex-row mb-5"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
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
    </>
  );
}

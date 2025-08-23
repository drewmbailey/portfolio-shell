import Link from 'next/link';
import { demos } from '@/lib/demos';
import { isUrlAvailable } from '@/lib/helpers/isUrlAvailable';

async function fetchHealth(slug: string) {
  // Works for both dev and prod if NEXT_PUBLIC_BASE_URL is set
  const base = process.env.NEXT_PUBLIC_BASE_URL || '';
  const res = await fetch(`${base}/api/health/${slug}`, { cache: 'no-store' });
  if (!res.ok) return { ok: false };
  return res.json();
}

export default async function DemosPage() {
  // Check all demos in parallel
  const statuses = await Promise.all(
    demos.map(async demo => {
      const online = await isUrlAvailable(demo.url);
      return { slug: demo.slug, online };
    })
  );

  // Make lookup table for quick access by slug
  const statusMap = new Map(statuses.map(entry => [entry.slug, entry.online]));

  const map = new Map(statuses.map(s => [s.slug, s]));

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold mb-8">Demo Catalog</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demos.map(demo => {
          const online = statusMap.get(demo.slug) ?? false;
          const statusLabel = online ? 'Online' : 'Offline';

          const slug = map.get(demo.slug) as any;
          const status = slug?.ok ? 'Online' : 'Offline';
          return (
            <Link key={demo.slug} href={`/demos/${demo.slug}`} className="rounded-2xl p-5 border text-[var(--fg)] hover:text-[var(--fg)] shadow neon">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-medium">{demo.title}</h2>
                <span className={`text-xs px-2 py-1 rounded ${online ? 'bg-green-500' : 'bg-red-500'}`}>{statusLabel}</span>
              </div>
              <p className="text-sm">{demo.description}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {demo.tags?.map(t => <span key={t} className="text-xs bg-gray-500 px-2 py-1 rounded">{t}</span>)}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
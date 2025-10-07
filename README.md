# Next.js Portfolio Shell (Micro‑Demos)

A minimal Next.js + Tailwind starter that acts as a **shell** for independent demo microservices.
Each demo can be shown via **proxy rewrites** (best UX) or **iframe** (simplest isolation).

## Quick Start

```bash
pnpm i
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000

## Configure Demos

Edit `lib/demos.ts` and add entries for each microservice:

```ts
{
  slug: 'image-tools',
  title: 'Image Tools',
  description: 'Transform and optimize images via a tiny API.',
  url: process.env.DEMO_IMAGE_TOOLS_URL!,
  mode: 'proxy', // or 'iframe'
  tags: ['nextjs', 'edge', 'images'],
}
```

### Proxy mode

Add a rewrite in `next.config.mjs` so your demo appears under `/demos/<slug>`:

```js
{ source: '/demos/image-tools/:path*', destination: `${process.env.DEMO_IMAGE_TOOLS_URL}/:path*` }
```

### Iframe mode

No rewrite needed—just ensure your demo allows embedding from your domain (CSP / X-Frame-Options).

## Env Vars

See `.env.example`. At minimum set:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DEMO_IMAGE_TOOLS_URL=https://your-service.example.com
DEMO_AI_NOTES_URL=https://your-other-service.example.com
```

## Structure

```
app/
  page.tsx            # Hero
  about/page.tsx
  contact/page.tsx
  demos/
    page.tsx          # Catalog
    [slug]/page.tsx   # Detail (iframe info or proxy note)
  api/health/[slug]/route.ts
lib/
  demos.ts            # Demo registry
next.config.mjs       # Rewrites for proxy-mode demos
middleware.ts         # Example headers
```

## Deploy

- Vercel recommended. Add env vars in project settings.
- For iframe demos, allow embedding from your domain (CSP / X-Frame-Options).
- For proxy demos, prefer relative asset paths in the demo or absolute URLs.

MIT License

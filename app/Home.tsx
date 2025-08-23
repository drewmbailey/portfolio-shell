import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-6xl font-bold mb-3">Drew Bailey</h1>
      <h2 className="text-2xl mb-6">Software Engineer</h2>
      <p className="max-w-2xl mb-4">
        I'm a full stack software engineer and web developer with over {new Date().getFullYear() - 2013} years of experience building accessible, scalable, and user-focused websites and applications. My background spans front-end and back-end development, with expertise in React, TypeScript, and modern cloud platforms.
      </p>
      <p className="max-w-2xl">  
        Recently, I’ve worked in React/TypeScript microservice architectures, integrating REST APIs and optimizing performance. I care about clean interfaces, WCAG accessibility, and close collaboration with design, product, and marketing teams.
      </p>
      <div className="mt-8">
        <Link 
          href="/demos" 
          className="inline-block rounded-xl px-5 py-3 border text-[var(--fg)] hover:text-[var(--fg)] shadow neon"
        >
          View Demos
        </Link>
      </div>
    </main>
  );
}
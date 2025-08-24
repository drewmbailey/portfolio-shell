import Link from 'next/link';
import { content } from './constants/content';

export default function Home() {
  return (
    <>
      <h1 className="text-6xl font-bold mb-3">{content.home.title}</h1>
      <h2 className="text-2xl mb-6">{content.home.subtitle}</h2>
      <p className="max-w-2xl mb-4">
        {content.home.content[0]}
      </p>
      <p className="max-w-2xl">  
        {content.home.content[1]}
      </p>
      <div className="mt-8">
        <Link 
          href="/demos" 
          className="inline-block rounded-xl px-5 py-3 border text-[var(--fg)] hover:text-[var(--fg)] shadow neon"
        >
          {content.home.button}
        </Link>
      </div>
    </>
  );
}
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <h1 className={"text-xl page-title"}>Drew Bailey</h1>
      <div className="flex gap-6 text-sm">
        <Link 
          href="/"
          className={pathname === '/' ? 'text-[var(--accent-hover)]' : undefined}
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          Home
        </Link>
        <Link 
          href="/demos"
          className={pathname?.includes('/demos') ? 'text-[var(--accent-hover)]' : undefined}
          aria-current={pathname?.includes('/demos') ? 'page' : undefined}
        >
          Demos
        </Link>
        <Link 
          href="/contact"
          className={pathname === '/contact' ? 'text-[var(--accent-hover)]' : undefined}
          aria-current={pathname === '/contact' ? 'page' : undefined}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
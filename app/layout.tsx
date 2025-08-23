import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Shell',
  description: 'Catalog of independent micro-demos under one roof',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="synthwave">
      <body className="min-h-screen antialiased flex flex-col">
        <header className="border-b">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <h1 className={"text-xl page-title"}>Drew Bailey</h1>
            <div className="flex gap-6 text-sm">
              <Link href="/">Home</Link>
              {/* <Link href="/about">About</Link> */}
              <Link href="/demos">Demos</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>
          <div className="flex-1">
            {children}
          </div>
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
            © {new Date().getFullYear()} Drew Bailey
          </div>
        </footer>
      </body>
    </html>
  );
}

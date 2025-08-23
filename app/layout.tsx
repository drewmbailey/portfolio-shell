import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from './components/Navigation';

export const metadata: Metadata = {
  title: 'Portfolio Shell',
  description: 'Catalog of independent micro-demos under one roof',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="synthwave">
      <body className="min-h-screen antialiased flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-black/80 text-white px-3 py-2 rounded">
          Skip to content
        </a>
        <header className="border-b">
          <Navigation />
        </header>
        <main id="main" className="flex-1">
          {children}
        </main>
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
            © {new Date().getFullYear()} Drew Bailey
          </div>
        </footer>
      </body>
    </html>
  );
}

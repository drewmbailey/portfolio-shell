import "./globals.css";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import { content } from "./constants/content";

export const metadata: Metadata = {
  title: "Portfolio Shell",
  description: "Catalog of independent micro-demos under one roof",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="synthwave">
      <body className="min-h-screen antialiased flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-black/80 text-white px-3 py-2 rounded">
          {content.skipLink}
        </a>
        <header className="border-b">
          <Navigation />
        </header>
        <main id="main" className="flex-1">
          <div className="mx-auto max-w-6xl px-6 py-16">
            {children}
          </div>
        </main>
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
            {content.footer.copyright}
          </div>
        </footer>
      </body>
    </html>
  );
}

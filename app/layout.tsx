import "./globals.css";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import { content } from "./constants/content";
import { GitHubIcon } from "./components/icons/GitHubIcon";
import parse from 'html-react-parser';

export const metadata: Metadata = {
  title: "Drew M. Bailey | Software Engineer and Web Developer",
  description: "Full-stack software engineer with 12+ years of experience in React, TypeScript, and modern web development. View my portfolio of interactive demos, projects, and professional work.",
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
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm flex flex-col md:flex-row md:justify-between">
            <span className="md:max-w-xs text-xs md:order-2 leading-[1.2rem]">
              {parse(content.footer.builtWith)}&nbsp;
              <a 
                className="inline-block -mb-1" 
                href={content.footer.builtWithLink}><GitHubIcon className="h-4 w-4" /></a>
            </span>
            <span className="text-xs md:order-1 mt-6 md:mt-0">
              {content.footer.copyright}
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}

import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { MailIcon } from "../components/icons/MailIcon";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>
      <p className="mb-6">
        I’m always interested in discussing new opportunities and ways I can contribute to building accessible, performant, and user-focused applications. Please feel free to get in touch if you’d like to talk about working together.
      </p>
      <ul className="list-none space-y-2">
        <li>
          <a href="mailto:drewmbailey@gmail.com" className="flex flex-row">
            <MailIcon />
            &nbsp;drewmbailey@gmail.com
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/drewmbailey" 
            target="_blank" 
            className="flex flex-row"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            &nbsp;LinkedIn
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/" 
            target="_blank" 
            className="flex flex-row"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            &nbsp;GitHub
          </a>
        </li>
      </ul>
    </main>
  );
}

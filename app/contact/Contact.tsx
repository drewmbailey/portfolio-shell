import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { MailIcon } from "../components/icons/MailIcon";
import { content } from "../constants/content";

export default function ContactPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-6">{content.contact.title}</h1>
      <p className="mb-6 max-w-2xl">
        {content.contact.description}
      </p>
      <ul className="list-none space-y-2">
        <li>
          <a href={content.contact.links.email.href} className="flex flex-row">
            <MailIcon />
            &nbsp;{content.contact.links.email.text}
          </a>
        </li>
        <li>
          <a 
            href={content.contact.links.linkedin.href}
            target="_blank" 
            className="flex flex-row"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            &nbsp;{content.contact.links.linkedin.text}
          </a>
        </li>
      </ul>
    </>
  );
}

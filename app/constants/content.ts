export const content = {
  pageTitle: "Drew Bailey",
  navigation: {
    home: "Home",
    demos: "Demos",
    contact: "Contact",
    back: "Back",
  },
  skipLink: "Skip to content",
  footer: {
    copyright: `\u00a9 ${new Date().getFullYear()} Drew Bailey`,
    builtWith: "This site is a shell for hosting micro-frontend demos. It was built with <strong>Next.js</strong>, <strong>Next.js</strong>, and <strong>Tailwind</strong>.",
    builtWithLink: "https://github.com/drewmbailey/portfolio-shell",
  },
  home: {
    title: "Drew Bailey",
    subtitle: "Software Engineer",
    content: [
      `I'm a full stack software engineer and web developer with over ${new Date().getFullYear() - 2013} years of experience building accessible, scalable, and user-focused websites and applications. My background spans front-end and back-end development, with expertise in React, TypeScript, and modern cloud platforms.`,
      "Recently, I’ve worked in React/TypeScript microservice architectures, integrating REST APIs and optimizing performance. I care about clean interfaces, WCAG accessibility, and close collaboration with design, product, and marketing teams.",
    ],
    button: "View Demos",
  },
  demos: {
    title: "Demos",
    cards: {
      statusOnline: "Online",
      statusOffline: "Offline",
    }
  },
  contacts: {
    title: "Contact",
    description: "I’m always interested in discussing new opportunities and ways I can contribute to building accessible, performant, and user-focused applications. Please feel free to get in touch if you’d like to talk about working together.",
    links: {
      email: {
        href: "mailto:drewmbailey@gmail.com",
        text: "drewmbailey@gmail.com",
      },
      linkedin: {
        href: "https://www.linkedin.com/in/drewmbailey",
        text: "LinkedIn",
      },
      github: {
        href: "https://github.com/drewmbailey",
        text: "GitHub",
      },
    },
  },
};

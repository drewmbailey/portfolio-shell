export const content = {
  pageTitle: "Drew Bailey",
  navigation: {
    home: "Home",
    demos: "Demos",
    resume: "Resume",
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
  resume: {
    title: "Resume",
    downloadResume: "Download Resume",
    workExperience: {
      title: "Work Experience",
      positions: [
        {
          title: "UI Engineer",
          company: "Oracle",
          location: "Remote",
          duration: "2022 – 2025",
          description: "Maintained and updated a sophisticated React-based microservice console for Oracle Cloud, serving as tech lead on feature development and DevOps improvement projects.",
          skills: [
            "TypeScript",
            "React",
            "AI",
            "Java",
            "CI/CD",
            "Scrum"
          ]
        },
        {
          title: "Full Stack / PHP Engineer",
          company: "Raka Creative",
          location: "Portsmouth, NH",
          duration: "2017 – 2022",
          description: "Developed and supported websites using PHP frameworks and CMSs, partnering with designers and marketing teams to deliver pixel-perfect, responsive implementations.",
          skills: [
            "JavaScript",
            "PHP",
            "CMS",
            "SEO",
            "Accessibility"
          ]
        },
        {
          title: "Support Engineer",
          company: "PixelMEDIA",
          location: "Portsmouth, NH",
          duration: "2015 – 2017",
          description: "Maintained and enhanced client websites using various PHP CMSs and ecommerce platforms, working with clients to analyze business needs and provide technical solutions.",
          skills: [
            "Ecommerce",
            "CMS",
            "PHP",
            "JavaScript"
          ]
        },
        {
          title: "Front End Engineer",
          company: "ZOLL Medical",
          location: "Chelmsford, MA",
          duration: "2013 – 2015",
          description: "Supported marketing team by maintaining corporate websites, microsites, and delivering digital marketing campaigns to support product launches.",
          skills: [
            "HubSpot",
            "HTML",
            "CSS",
            "JavaScript"
          ]
        },
        {
          title: "Web Developer",
          company: "Freelance",
          location: "Remote",
          duration: "2012 – Present (part-time)",
          description: "Built and maintained websites for small businesses using WordPress, Squarespace, and custom solutions, delivering responsive, cross-browser designs and ongoing technical support.",
          skills: [
            "JavaScript",
            "WordPress",
            "Squarespace",
            "Custom Solutions"
          ]
        }
      ]
    }
  },
  contact: {
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

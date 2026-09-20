const getEnv = (key: string, fallback: string = ''): string => {
  return import.meta.env[key] ?? fallback;
};

export const siteConfig = {
  url: getEnv('SITE_URL', 'https://routebuilder.developer.li'),
  language: getEnv('SITE_LANGUAGE', 'en'),
  title: getEnv('SITE_TITLE', 'Full-Stack Developer — AI-Native Workflow'),
  description: getEnv('SITE_DESCRIPTION', 'Full-stack developer shipping production apps by directing AI agents and verifying every diff. Documented decisions, trade-offs, and outcomes.'),
  author: {
    name: getEnv('SITE_AUTHOR_NAME', 'routebuilderdev'),
    title: getEnv('SITE_AUTHOR_TITLE', 'Full-Stack Developer'),
    bio: getEnv('SITE_AUTHOR_BIO', 'Full-stack developer with an AI-native workflow: every feature specified first, AI-generated, reviewed line by line, and gated by tests and CI/CD before it ships.'),
    email: getEnv('SITE_AUTHOR_EMAIL', 'routebuilderdev@gmail.com'),
    location: getEnv('SITE_AUTHOR_LOCATION', ''),
  },
  social: {
    github: getEnv('SOCIAL_GITHUB', 'https://github.com/routebuilderdev'),
    linkedin: getEnv('SOCIAL_LINKEDIN', 'https://www.linkedin.com/in/route-builder'),
    twitter: getEnv('SOCIAL_TWITTER', ''),
    mastodon: getEnv('SOCIAL_MASTODON', ''),
    bluesky: getEnv('SOCIAL_BLUESKY', ''),
  },
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'Decisions', href: '/decisions' },
    { label: 'Journey', href: '/journey' },
    { label: 'Writing', href: '/writing' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type NavItem = typeof siteConfig.nav[number];

const getEnv = (key: string, fallback: string = ''): string => {
  return import.meta.env[key] ?? fallback;
};

export const siteConfig = {
  url: getEnv('SITE_URL', 'https://example.com'),
  language: getEnv('SITE_LANGUAGE', 'en'),
  title: getEnv('SITE_TITLE', 'Vibe Coder Portfolio'),
  description: getEnv('SITE_DESCRIPTION', 'Building production apps with AI. Documenting decisions, trade-offs, and outcomes.'),
  author: {
    name: getEnv('SITE_AUTHOR_NAME', 'Your Name'),
    title: getEnv('SITE_AUTHOR_TITLE', 'Vibe Coder'),
    bio: getEnv('SITE_AUTHOR_BIO', 'Shipping production applications built entirely with AI assistance.'),
    email: getEnv('SITE_AUTHOR_EMAIL', 'hello@example.com'),
    location: getEnv('SITE_AUTHOR_LOCATION', ''),
  },
  social: {
    github: getEnv('SOCIAL_GITHUB', ''),
    linkedin: getEnv('SOCIAL_LINKEDIN', ''),
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

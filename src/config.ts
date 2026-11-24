const getEnv = (key: string, fallback: string = ''): string => {
  return import.meta.env[key] ?? fallback;
};

export const siteConfig = {
  url: getEnv('SITE_URL', 'https://routebuilder.developer.li'),
  language: getEnv('SITE_LANGUAGE', 'en'),
  title: getEnv('SITE_TITLE', 'AI-Native Developer — Production Apps, Documented'),
  description: getEnv('SITE_DESCRIPTION', 'AI-native developer shipping production apps by specifying them, directing coding agents, and verifying behaviour with tests, CI and the running app. Documented decisions, trade-offs, and outcomes.'),
  author: {
    name: getEnv('SITE_AUTHOR_NAME', 'routebuilderdev'),
    title: getEnv('SITE_AUTHOR_TITLE', 'AI-Native Developer'),
    bio: getEnv('SITE_AUTHOR_BIO', 'AI-native developer: every feature specified first, implemented by coding agents, and verified through tests, CI/CD and a live deployment before it ships. I do not write the code myself — I define the behaviour, direct the agents, and check the result.'),
    email: getEnv('SITE_AUTHOR_EMAIL', 'routebuilderdev@gmail.com'),
    location: getEnv('SITE_AUTHOR_LOCATION', ''),
  },
  social: {
    github: getEnv('SOCIAL_GITHUB', 'https://github.com/routebuilderdev'),
    linkedin: getEnv('SOCIAL_LINKEDIN', 'https://www.linkedin.com/in/route-builder'),
    twitter: getEnv('SOCIAL_TWITTER', 'https://x.com/routebuilderdev'),
    youtube: getEnv('SOCIAL_YOUTUBE', 'https://www.youtube.com/@routebuilderdev'),
    mastodon: getEnv('SOCIAL_MASTODON', ''),
    bluesky: getEnv('SOCIAL_BLUESKY', ''),
  },
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'Open Source', href: '/open-source' },
    { label: 'Decisions', href: '/decisions' },
    { label: 'Journey', href: '/journey' },
    { label: 'Writing', href: '/writing' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export const socialLabels: Record<string, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  twitter: 'X',
  youtube: 'YouTube',
  mastodon: 'Mastodon',
  bluesky: 'Bluesky',
};

export type SiteConfig = typeof siteConfig;
export type NavItem = typeof siteConfig.nav[number];

import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  integrations: [mdx(), sitemap()],
  site: process.env.SITE_URL || 'https://routebuilder.developer.li',
  env: {
    schema: {
      SITE_URL: envField.string({ context: 'client', access: 'public', default: 'https://routebuilder.developer.li' }),
      SITE_LANGUAGE: envField.string({ context: 'client', access: 'public', default: 'en' }),
      SITE_TITLE: envField.string({ context: 'client', access: 'public', default: 'Full-Stack Developer — AI-Native Workflow' }),
      SITE_DESCRIPTION: envField.string({ context: 'client', access: 'public', default: 'Full-stack developer shipping production apps owned end to end: architecture, review, and verification with tests and CI. Documented decisions, trade-offs, and outcomes.' }),
      SITE_AUTHOR_NAME: envField.string({ context: 'client', access: 'public', default: 'routebuilderdev' }),
      SITE_AUTHOR_TITLE: envField.string({ context: 'client', access: 'public', default: 'Full-Stack Developer' }),
      SITE_AUTHOR_BIO: envField.string({ context: 'client', access: 'public', default: 'Full-stack developer with an AI-native workflow: every feature specified first, AI-generated, reviewed line by line, and gated by tests and CI/CD before it ships.' }),
      SITE_AUTHOR_EMAIL: envField.string({ context: 'client', access: 'public', default: 'routebuilderdev@gmail.com' }),
      SITE_AUTHOR_LOCATION: envField.string({ context: 'client', access: 'public', default: '' }),
      SOCIAL_GITHUB: envField.string({ context: 'client', access: 'public', default: 'https://github.com/routebuilderdev' }),
      SOCIAL_LINKEDIN: envField.string({ context: 'client', access: 'public', default: 'https://www.linkedin.com/in/route-builder' }),
      SOCIAL_TWITTER: envField.string({ context: 'client', access: 'public', default: 'https://x.com/routebuilderdev' }),
      SOCIAL_YOUTUBE: envField.string({ context: 'client', access: 'public', default: 'https://www.youtube.com/@routebuilderdev' }),
      SOCIAL_MASTODON: envField.string({ context: 'client', access: 'public', default: '' }),
      SOCIAL_BLUESKY: envField.string({ context: 'client', access: 'public', default: '' }),
    },
  },
  devToolbar: {
    enabled: false,
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: { limitInputPixels: 268402689 },
    },
    remotePatterns: [],
  },
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
});

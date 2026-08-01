import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  integrations: [mdx(), sitemap()],
  site: process.env.SITE_URL || 'https://example.com',
  env: {
    schema: {
      SITE_URL: envField.string({ context: 'client', access: 'public', default: 'https://example.com' }),
      SITE_LANGUAGE: envField.string({ context: 'client', access: 'public', default: 'en' }),
      SITE_TITLE: envField.string({ context: 'client', access: 'public', default: 'Vibe Coder Portfolio' }),
      SITE_DESCRIPTION: envField.string({ context: 'client', access: 'public', default: 'Building production apps with AI. Documenting decisions, trade-offs, and outcomes.' }),
      SITE_AUTHOR_NAME: envField.string({ context: 'client', access: 'public', default: 'Adelin Dutulescu' }),
      SITE_AUTHOR_TITLE: envField.string({ context: 'client', access: 'public', default: 'Vibe Coder' }),
      SITE_AUTHOR_BIO: envField.string({ context: 'client', access: 'public', default: 'Shipping production-grade applications built entirely with AI assistance. Focused on solving real problems through thoughtful architecture and pragmatic decisions.' }),
      SITE_AUTHOR_EMAIL: envField.string({ context: 'client', access: 'public', default: 'routebuilderdev@gmail.com' }),
      SITE_AUTHOR_LOCATION: envField.string({ context: 'client', access: 'public', default: '' }),
      SOCIAL_GITLAB: envField.string({ context: 'client', access: 'public', default: 'https://gitlab.com/routebuilderdev' }),
      SOCIAL_LINKEDIN: envField.string({ context: 'client', access: 'public', default: 'https://www.linkedin.com/in/route-builder' }),
      SOCIAL_TWITTER: envField.string({ context: 'client', access: 'public', default: '' }),
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

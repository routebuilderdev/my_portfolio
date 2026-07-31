import { siteConfig } from './config';

export const pagesConfig = {
  projects: {
    title: `Projects - ${siteConfig.title}`,
    description: 'Case studies of applications I have built with AI.',
    heading: 'Case Studies',
    intro: 'Three production-shaped applications built with AI. Each documents the problem, the approach, the key decisions, and what shipped.',
  },
  decisions: {
    title: `Decisions - ${siteConfig.title}`,
    description: 'Architectural and technical decisions documented with context and reasoning.',
    heading: 'Decisions',
    intro: 'Every technical decision is documented with context, the alternatives considered, and the reasoning. This is how I think through problems.',
  },
  journey: {
    title: `Journey - ${siteConfig.title}`,
    description: 'My journey from non-coder to shipping production apps with AI.',
    heading: 'My Journey',
    intro: 'From my first line of code to production deployments — the milestones, learnings, and transitions along the way.',
  },
  writing: {
    title: `Writing - ${siteConfig.title}`,
    description: 'Thoughts on building with AI, engineering decisions, and shipping.',
    heading: 'Writing',
    intro: 'How I build with AI, make engineering decisions, and ship.',
  },
  contact: {
    title: `Contact - ${siteConfig.title}`,
    description: 'Get in touch',
    heading: 'Let\'s Work Together',
  },
};

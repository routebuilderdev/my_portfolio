import { siteConfig } from './config';

export const pagesConfig = {
  projects: {
    title: `Projects - ${siteConfig.title}`,
    description: 'Case studies of applications I have built with AI.',
    heading: 'Case Studies',
    intro: 'Real applications built with AI. Each project is documented with the problem, approach, key decisions, and outcomes.',
  },
  decisions: {
    title: `Decisions - ${siteConfig.title}`,
    description: 'Architectural and technical decisions documented with context and reasoning.',
    heading: 'Decisions',
    intro: 'Every technical decision is documented with context, alternatives considered, and reasoning. This is how I think through problems.',
  },
  journey: {
    title: `Journey - ${siteConfig.title}`,
    description: 'My journey from non-coder to shipping production apps with AI.',
    heading: 'My Journey',
    intro: 'From writing zero code to shipping production applications — documenting the milestones, learnings, and transitions along the way.',
  },
  writing: {
    title: `Writing - ${siteConfig.title}`,
    description: 'Thoughts on building with AI, engineering decisions, and shipping.',
    heading: 'Writing',
    intro: 'Thoughts, insights, and lessons learned from building applications with AI assistance.',
  },
  contact: {
    title: `Contact - ${siteConfig.title}`,
    description: 'Get in touch',
    heading: 'Let\'s Work Together',
  },
};

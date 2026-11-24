import { siteConfig } from './config';

export const pagesConfig = {
  projects: {
    title: `Projects - ${siteConfig.title}`,
    description: 'Case studies of applications built with AI under my direction.',
    heading: 'Case Studies',
    intro: 'Production applications and hackathon builds, documented end to end. Each case study covers the problem, the approach, the decisions that mattered, and what actually shipped.',
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
    intro: 'From my first commit to production deployments — the milestones, learnings, and transitions along the way.',
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

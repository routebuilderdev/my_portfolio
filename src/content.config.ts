import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    year: z.number(),
    duration: z.string().optional(),
    teamSize: z.number().optional(),
    outcomeSummary: z.string(),
    overview: z.string(),
    problem: z.string(),
    constraints: z.array(z.string()),
    approach: z.string(),
    keyDecisions: z.array(z.object({
      decision: z.string(),
      reasoning: z.string(),
      alternatives: z.array(z.string()).optional(),
    })),
    techStack: z.array(z.string()),
    impact: z.object({
      metrics: z.array(z.object({
        label: z.string(),
        value: z.string(),
      })).optional(),
      qualitative: z.string(),
    }),
    learnings: z.array(z.string()),
    featured: z.boolean().default(false),
    status: z.enum(['completed', 'ongoing', 'archived']).default('completed'),
    order: z.number().optional(),
    repo: z.string().url().optional(),
    relatedProjects: z.array(z.string()).optional(),
    relatedDecisions: z.array(z.string()).optional(),
  }),
});

const decisionsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/decisions' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    context: z.string(),
    decision: z.string(),
    alternatives: z.array(z.object({
      option: z.string(),
      pros: z.array(z.string()).optional(),
      cons: z.array(z.string()).optional(),
    })),
    reasoning: z.string(),
    tags: z.array(z.string()).optional(),
    relatedProjects: z.array(z.string()).optional(),
    relatedDecisions: z.array(z.string()).optional(),
  }),
});

const journeyCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/journey' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    type: z.enum(['milestone', 'learning', 'transition']),
    description: z.string(),
    skills: z.array(z.string()).optional(),
  }),
});

const writingCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const usesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/uses' }),
  schema: z.object({
    category: z.enum(['tools', 'stack', 'environment']),
    items: z.array(z.object({
      name: z.string(),
      description: z.string(),
      url: z.string().url().optional(),
    })),
    order: z.number(),
  }),
});

const speakingCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/speaking' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    event: z.string(),
    eventUrl: z.string().url().optional(),
    date: z.coerce.date(),
    location: z.string(),
    type: z.enum(['conference', 'meetup', 'podcast', 'workshop', 'webinar']),
    slides: z.string().url().optional(),
    video: z.string().url().optional(),
    duration: z.string().optional(),
    topics: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

const testimonialsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    relationship: z.string(),
    quote: z.string(),
    linkedin: z.string().url().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

export const collections = {
  projects: projectsCollection,
  decisions: decisionsCollection,
  journey: journeyCollection,
  writing: writingCollection,
  uses: usesCollection,
  speaking: speakingCollection,
  testimonials: testimonialsCollection,
};

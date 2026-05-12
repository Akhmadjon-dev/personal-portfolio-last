import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.object({
        en: z.string(),
        ru: z.string(),
        uz: z.string(),
      }),
      outcome: z
        .object({
          en: z.string(),
          ru: z.string(),
          uz: z.string(),
        })
        .optional(),
      tech: z.array(z.string()),
      image: image(),
      link: z.string().url().optional(),
      siteLink: z.string().url().optional(),
      repo: z.string().url().optional(),
      featured: z.boolean().default(true),
      order: z.number().default(0),
    }),
});

const LEVELS = ['entry', 'junior', 'mid', 'senior', 'expert', 'architect'] as const;
const TYPES = ['theory', 'code'] as const;
const LOCALES = ['en', 'ru', 'uz'] as const;

const interview = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/interview' }),
  schema: z.object({
    q: z.string(),
    level: z.enum(LEVELS),
    type: z.enum(TYPES),
    locale: z.enum(LOCALES).default('en'),
    order: z.number().default(0),
    related: z.array(z.string()).optional(),
  }),
});

export const collections = { projects, interview };

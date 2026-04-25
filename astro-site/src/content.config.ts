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

export const collections = { projects };

import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/plugins-tutorials', generateId: ({ entry }) => entry }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    created_at: z.union([z.string(), z.date()]).optional(),
    slug: z.string().optional(),
    published: z.boolean().optional(),
  }),
})

export const collections = { blog }

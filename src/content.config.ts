import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/plugins-tutorials' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    created_at: z.union([z.string(), z.date()]).optional(),
    slug: z.string().optional(),
    published: z.boolean().optional(),
  }),
})

export const collections = { blog }

import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'
import type { Locales } from './services/locale'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md*', base: './src/content/blog', generateId: ({ entry }) => entry }),
  schema: z.object({
    slug: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    created_at: z
      .union([z.string(), z.date()])
      .optional()
      .transform((val) => {
        if (val === undefined || val === null) return undefined
        if (val instanceof Date) return val
        const date = new Date(val)
        return isNaN(date.getTime()) ? undefined : date
      }),
    published: z.boolean().optional(),
    locale: z.string().optional() as z.ZodType<Locales>,
  }),
})

export const collections = { blog }

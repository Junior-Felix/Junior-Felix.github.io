import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      ogImage: image()
        .refine((img) => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      featured: z.boolean().optional(),
      tags: z.array(z.string()),
      canonicalURL: z.string().optional(),
      readingTime: z.number().optional(),
      draft: z.boolean().optional(),
    }),
});

export const collections = { blog };

import { defineCollection, z } from 'astro:content';

const projekte = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    genre: z.string(),           // e.g. "Theaterstück", "Ausstellung"
    ort: z.string(),             // e.g. "Staatsschauspiel Dresden, Dresden 2024"
    coverImg: z.string(),        // path relative to /public, e.g. "img/jetzt/cover.jpg"
    coverAlt: z.string().default(''),
    reihenfolge: z.number().default(99),
    // Gallery: list of image paths relative to /public
    bilder: z.array(z.object({
      src: z.string(),
      alt: z.string().default(''),
      large: z.boolean().default(false), // span 2 columns in the grid
    })).default([]),
    // Credits: list of {rolle, name} pairs (name may contain HTML links)
    credits: z.array(z.object({
      rolle: z.string(),
      name: z.string(),
    })).default([]),
  }),
});

export const collections = { projekte };

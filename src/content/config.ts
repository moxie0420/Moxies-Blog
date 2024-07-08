import { z, defineCollection } from "astro:content";

const image = z.object({
  url: z.string(),
  alt: z.string(),
});

const Generic = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    image: image,
    worksImage1: image,
    worksImage2: image,
    platform: z.string(),
    stack: z.string(),
    website: z.string(),
    github: z.string(),
    date: z.date(),
    prev: z.string().optional(),
    next: z.string().optional(),
  }),
});

export const collections = {
  projects: Generic,
  posts: Generic,
};

import { z, defineCollection } from "astro:content";

const image = z.object({
  url: z.string(),
  alt: z.string(),
});

const postCollection = defineCollection({
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
    date: z.string(),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    worksImage1: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    worksImage2: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    platform: z.string(),
    stack: z.string(),
    website: z.string(),
    github: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
  posts: postCollection,
};

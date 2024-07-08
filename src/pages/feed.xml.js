import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("posts");
  return rss({
    title: "Moxie’s Blog",
    description: "A random collection of my thoughts and projects",
    site: context.site,
    stylesheet: "/rss/pretty-feed-v3.xsl",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      customData: post.data.customData,
      link: `/posts/${post.slug}/`,
    })),
  });
}

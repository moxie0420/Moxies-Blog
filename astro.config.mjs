import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://www.moxiege.com",
  output: "hybrid",
  image: {
    domains: ["moxiege.com", "content.moxiege.com"],
  },
  adapter: cloudflare({
    imageService: "cloudflare",
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [
    react(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "catppuccin-mocha",
      },
      remarkPlugins: [remarkToc],
      gfm: false,
    }),
    tailwind(),
    robotsTxt(),
    playformCompress({
      Image: false,
    }),
    playformInline(),
    partytown(),
  ],
});

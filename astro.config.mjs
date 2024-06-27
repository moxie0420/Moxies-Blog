import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import remarkToc from 'remark-toc';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://www.moxiege.com",
  output: "server",
  image: {
    service: passthroughImageService()
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [react(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'catppuccin-mocha'
    },
    remarkPlugins: [remarkToc],
    gfm: false
  }), tailwind(), vue(), robotsTxt()]
});
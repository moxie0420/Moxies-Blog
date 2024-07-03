import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";
import compressor from "astro-compressor";
import sitemap from "@astrojs/sitemap";
import purgecss from "astro-purgecss";
import swup from "@swup/astro";
import icon from "astro-icon";

import lighthouse from "astro-lighthouse";

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
  experimental: {
    directRenderScript: true,
  },
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
    tailwind({
      applyBaseStyles: true,
    }),
    swup({
      accessibility: true,
      progress: true,
      smoothScrolling: true,
    }),
    robotsTxt(),
    playformInline(),
    playformCompress({
      Image: false,
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    sitemap(),
    purgecss({
      fontFace: true,
      keyframes: false,
      rejected: true,
      extractors: [
        {
          extractor: (content) =>
            content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ["astro", "html"],
        },
      ],
    }),
    icon(),
    lighthouse(),
  ],
});

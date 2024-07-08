import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";
import compressor from "astro-compressor";
import sitemap from "@astrojs/sitemap";
import purgecss from "astro-purgecss";
import swup from "@swup/astro";
import icon from "astro-icon";
import playformFormat from "@playform/format";
import devtoolBreakpoints from "astro-devtool-breakpoints";
import metaTags from "astro-meta-tags";

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
    icon(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "catppuccin-mocha",
      },
    }),
    tailwind({
      applyBaseStyles: true,
    }),
    swup({
      accessibility: true,
      progress: true,
      smoothScrolling: true,
    }),
    playformFormat(),
    playformInline(),
    robotsTxt(),
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
    playformCompress({
      Image: false,
    }),
    compressor(),
    devtoolBreakpoints(),
    metaTags(),
  ],
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {name: "page", mode: "out-in"}
  },

  content: {
    experimental: {
      
    },
  },

  particles: {
    lazy: true,
    mode: "slim"
  },

  eslint: {
    config: {
      "standalone": true
    },
  },

  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages"
  },

  ignore: [
    ".devenv",
    ".direnv"
  ],
  
  modules: ["nitro-cloudflare-dev", "@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/eslint", "@nuxt/image", "nuxt-particles"]
})
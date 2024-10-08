/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        obsidian: "url('/src/assets/bg.webp')",
      },
      colors: {
        milky: {
          50: "#1e1e2e",
          100: "#fdebf3",
          200: "#78c2ad",
          300: "#375a7f",
          400: "#584966",
          500: "#281F3FCC",
          600: "#281f3fCC",
        },
      },
      fontFamily: {
        sans: ["Pacifico", "cursive"],
        serif: ["Josefin", "Sans", "Variable", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};

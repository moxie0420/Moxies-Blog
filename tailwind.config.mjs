const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        milky: {
          50: "#1e1e2e",
          100: "#fdebf3",
          200: "#78c2ad",
          300: "#375a7f",
          400: "#584966",
        },
        mocha: {
          Rosewater: "#f5e0dc",
          Flamingo: "#f2cdcd",
          Pink: "#f5c2e7",
          Mauve: "#cba6f7",
          Red: "#f38ba8",
          Maroon: "#eba0ac",
          Peach: "#fab387",
          Yellow: "#f9e2af",
          Green: "#a6e3a1",
          Teal: "#94e2d5",
          Sky: "#89dceb",
          Sapphire: "#74c7ec",
          Blue: "#89b4fa",
          Lavender: "#b4befe",
        },
      },
      fontFamily: {
        sans: ["pacifico"],
        serif: ["Josefin Sans Variable"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/typography")],
};

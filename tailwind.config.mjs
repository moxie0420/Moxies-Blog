const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
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
			},
			fontFamily: {
				sans: ["pacifico"],
				serif: ["Josefin Sans Variable"]
			}
		},
	},
	darkMode: "class",
	plugins: [nextui()],
}
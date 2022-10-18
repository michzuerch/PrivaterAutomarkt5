const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	options: {
		safelist: ["dark"],
	},
	theme: {
		// theme extensions
		extend: {},
	},

	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/forms"),
		require("daisyui"),
	],
};

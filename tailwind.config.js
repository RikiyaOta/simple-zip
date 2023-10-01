/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.tsx",

		// See: https://tailwindcss.com/docs/guides/nextjs
		//"./app/**/*.{js,ts,jsx,tsx,mdx}",
		//"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		//"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "cupcake", "aqua"],
	},
};

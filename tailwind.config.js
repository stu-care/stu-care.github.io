const colors = require("tailwindcss/colors");

const extendedColors = {
	seagull: {
		50: "#effbff",
		100: "#def6ff",
		200: "#b6efff",
		300: "#75e5ff",
		400: "#2cd9ff",
		500: "#00ccff",
		600: "#009fd4",
		700: "#007fab",
		800: "#006b8d",
		900: "#065874",
		950: "#04384d",
	},
	juniper: {
		50: "#f4f7f7",
		100: "#e2eaeb",
		200: "#c8d6d9",
		300: "#a2babe",
		400: "#688a91",
		500: "#597981",
		600: "#4d666d",
		700: "#43555b",
		800: "#3c494e",
		900: "#353f44",
		950: "#20282c",
	},
	lima: {
		50: "#f5ffe6",
		100: "#e9fec9",
		200: "#d3fc9a",
		300: "#b4f75f",
		400: "#98ed2e",
		500: "#77d30f",
		600: "#62b608",
		700: "#46800b",
		800: "#39650f",
		900: "#315512",
		950: "#173003",
	},

	corduroy: {
		50: "#f6f7f6",
		75: "#edeeec",
		100: "#e3e5e2",
		200: "#c7cbc4",
		300: "#a2a99f",
		400: "#7d867b",
		500: "#626b60",
		600: "#4e554c",
		700: "#41463f",
		800: "#353a35",
		900: "#2f322f",
		950: "#181b18",
	},
};

/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: extendedColors,
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: extendedColors.lima["500"],
					"primary-content": extendedColors.corduroy["950"],
					secondary: extendedColors.corduroy["950"],
					"secondary-content": extendedColors.lima["500"],
					accent: colors.white,
					neutral: extendedColors.corduroy["200"],
					"neutral-content": extendedColors.corduroy["900"],
					"base-100": extendedColors.corduroy["50"],
					"base-200": extendedColors.corduroy["75"],
					"base-300": extendedColors.corduroy["100"],
					"base-content": extendedColors.corduroy["950"],

					"--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
					"--rounded-btn": "1rem", // border radius rounded-btn utility class, used in buttons and similar element
					"--rounded-badge": "1rem", // border radius rounded-badge utility class, used in badges and similar
					"--tab-radius": "1rem", // border radius of tabs
				},
			},
		],
	},
	plugins: [require("daisyui")],
};

export default config;

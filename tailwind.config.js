/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "oklch(0.7748 0.2132 226.1)",
          "secondary": "oklch(0.6839 0.194 200.25)",
          "accent": "oklch(0.6927 0.157 186)",
          "neutral": "oklch(0.6927 0.157 186)",
          "base-100": "oklch(0.95 0 0)",

          "--rounded-box": "0", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "0", // border radius rounded-badge utility class, used in badges and similar
          "--tab-radius": "0", // border radius of tabs
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}


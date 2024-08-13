const colors = require('tailwindcss/colors')

const extendedColors = {
  'seagull': {
    '50': 'oklch(98.03% 0.01 219.62)',
    '100': 'oklch(95.83% 0.03 222.28)',
    '200': 'oklch(91.85% 0.06 216.89)',
    '300': 'oklch(86.54% 0.11 214.93)',
    '400': 'oklch(81.93% 0.14 217.54)',
    '500': 'oklch(78.56% 0.15 224.29)',
    '600': 'oklch(65.90% 0.13 231.14)',
    '700': 'oklch(55.99% 0.11 231.63)',
    '800': 'oklch(49.09% 0.10 229.84)',
    '900': 'oklch(43.09% 0.08 228.94)',
    '950': 'oklch(32.04% 0.06 231.71)',
  },
  'mystic': {
    '50': 'oklch(97.79% 0.00 228.78)',
    '75': 'oklch(96.74% 0.004 214.33)',
    '100': 'oklch(95.46% 0.01 211.04)',
    '200': 'oklch(91.87% 0.01 212.52)',
    '300': 'oklch(80.88% 0.02 210.40)',
    '400': 'oklch(70.19% 0.04 209.49)',
    '500': 'oklch(61.10% 0.04 210.16)',
    '600': 'oklch(52.88% 0.04 211.80)',
    '700': 'oklch(45.63% 0.03 213.52)',
    '800': 'oklch(40.84% 0.03 213.97)',
    '900': 'oklch(37.06% 0.02 214.69)',
    '950': 'oklch(28.50% 0.01 217.94)',
  },
  'lima': {
    '50': 'oklch(98.34% 0.03 126.24)',
    '100': 'oklch(96.15% 0.06 126.36)',
    '200': 'oklch(92.88% 0.12 128.92)',
    '300': 'oklch(88.29% 0.18 130.74)',
    '400': 'oklch(83.31% 0.21 132.96)',
    '500': 'oklch(69.66% 0.20 134.59)',
    '600': 'oklch(63.44% 0.18 135.25)',
    '700': 'oklch(52.25% 0.15 135.31)',
    '800': 'oklch(44.46% 0.12 134.49)',
    '900': 'oklch(39.78% 0.10 134.55)',
    '950': 'oklch(26.77% 0.07 135.74)',
  },
  'lemongrass': {
    '50': 'oklch(97.51% 0.00 145.56)',
    '75': 'oklch(94.78% 0.003 128.49)',
    '100': 'oklch(91.95% 0.00 134.85)',
    '200': 'oklch(83.70% 0.01 131.38)',
    '300': 'oklch(69.71% 0.02 136.11)',
    '400': 'oklch(61.01% 0.02 137.06)',
    '500': 'oklch(51.77% 0.02 139.44)',
    '600': 'oklch(44.03% 0.02 138.73)',
    '700': 'oklch(38.72% 0.01 136.63)',
    '800': 'oklch(34.29% 0.01 139.44)',
    '900': 'oklch(31.31% 0.01 145.41)',
    '950': 'oklch(21.77% 0.01 145.32)',
  }
}

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: extendedColors
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": extendedColors.lima['500'],
          "primary-content": extendedColors.lemongrass['950'],
          "secondary": extendedColors.lemongrass['950'],
          "secondary-content": extendedColors.lima['500'],
          "accent": colors.white,
          "neutral": extendedColors.lemongrass['200'],
          "neutral-content": extendedColors.lemongrass['900'],
          "base-100": extendedColors.lemongrass['50'],
          "base-200": extendedColors.lemongrass['75'],
          "base-300": extendedColors.lemongrass['100'],
          "base-content": extendedColors.lemongrass['950'],

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

export default config;
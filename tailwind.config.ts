import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    // include common project folders and all jsx/tsx files
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    // explicit patterns to ensure .jsx files are discovered
    "./**/*.jsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./WhoWeAre/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        display: ['Merriweather', 'Playfair Display', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        merriweather: ['Merriweather', 'Georgia', 'serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        // explicit inter key so Tailwind generates `font-inter`
        inter: ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        barlow: ['Barlow', 'Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
      colors: {
        primary: '#2F324A',
        secondary: '#CCAB80'
      },
      
    },
  },
  plugins: [],
} satisfies Config;

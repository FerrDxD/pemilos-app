// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0f172a', // Slate 900 - Deep elegant background
          primary: '#1e3a8a', // Blue 900 - Primary brand color
          accent: '#fbbf24', // Amber 400 - Gold accent for buttons/highlights
          light: '#f8fafc', // Slate 50 - Off white for soft backgrounds
        }
      }
    },
  },
  plugins: [],
}
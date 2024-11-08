/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

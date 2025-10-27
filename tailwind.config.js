/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable class-based dark mode. This allows us to toggle dark styles by
  // setting the `dark` class on the html element in the root layout.
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // You can extend the default Tailwind theme here. For now we're
      // leaving it empty so the default palette (including grays) is available.
    },
  },
  plugins: [],
};

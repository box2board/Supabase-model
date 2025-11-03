/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Electric purple core + neutrals
        primary: {
          50:  "#f7f2ff",
          100: "#efe5ff",
          200: "#dcc4ff",
          300: "#c39aff",
          400: "#a76aff",
          500: "#8c3dff",   // electric
          600: "#752df2",
          700: "#5e23c4",
          800: "#4a1d9a",
          900: "#391873",
          950:"#1e0e3c",
        },
        ink: {
          50:"#f7f7fb",
          100:"#efeff5",
          200:"#dcdcE6",
          300:"#bdbdd0",
          400:"#8b8ba5",
          500:"#6b6b86",
          600:"#54546b",
          700:"#3d3d4e",
          800:"#2c2c39",
          900:"#1f1f29",
          950:"#14141b"
        }
      },
      boxShadow: {
        cozy: "0 8px 24px rgba(140,61,255,0.18)",
      },
      borderRadius: {
        cozy: "14px",
      }
    },
  },
  plugins: [],
};

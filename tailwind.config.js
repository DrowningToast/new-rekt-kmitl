// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-chakra)", ...fontFamily.sans],
      },
      colors: {
        primary: "#FF6E30",
        secondary: "#666666",
      },
    },
  },
  plugins: [],
};

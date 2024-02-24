/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Space Grotesk", "sans-serif "],
        primary: ["Space Grotesk", "sans-serif "],
      },
    },
  },
  plugins: [],
};

module.exports = config;

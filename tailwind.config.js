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

      colors: {
        "primary-color": "var(--mwhite)",
        "secondary-color": "var(--mgreen)",
      },
    },
  },
  plugins: [],
};

module.exports = config;

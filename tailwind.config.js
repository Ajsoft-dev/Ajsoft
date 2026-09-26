/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0C10",
        panel: "#14161C",
        accent: {
          DEFAULT: "#7C5CFC",
          soft: "#9B85FF",
        },
        warm: {
          DEFAULT: "#FFB020",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

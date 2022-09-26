/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    theme: {
      extend: {
        backgroundImage: {
          "bg-mazebank": "url('/img/bg-mazebank.png')",
        },
      },
    },
    colors: {
      custom1: "#78dcca",
      customBlack: {
        blacklight: "#272727",
        blacklightdark: "#1C1C1C",
        blackdark: "#202020",
      },
      customGreen: {
        greenlight: "#6BAE8A",
      },
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};

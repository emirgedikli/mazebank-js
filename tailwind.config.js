/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    theme: {
      extend: {
      },
      colors: {
        ...colors,
      },
    },
    plugins: [],
  },
};

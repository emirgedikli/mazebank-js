/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    theme: {
      extend: {
        colors: {
          'logo-grey': '#2d3034'
        }
      },
      colors: {
        ...colors,
      },
    },
    plugins: [],
  },
};

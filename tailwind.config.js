/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    theme: {
      colors: {
        ...colors,
      },
      extend: {
        backgroundImage: {
          "bgmazebank": "url('./src/assets/img/bgmazebank.png')",
        },
      },
    },
    plugins: [],
  },
};

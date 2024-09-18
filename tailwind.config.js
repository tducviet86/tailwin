/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backg: "rgba(52, 48, 69, 1)",
        radial: {
          start: "rgba(58, 52, 86, 0.95)",
          end: "rgba(33, 30, 46, 1)",
        },
        linear: {
          start: "rgba(129, 118, 175, 1)",
          end: "rgba(192, 183, 232, 1)",
        },
        local: "rgba(192, 183, 232, 1)",
      },

      fontFamily: {
        montse: "Montserrat",
      },
    },
  },
  plugins: [],
};

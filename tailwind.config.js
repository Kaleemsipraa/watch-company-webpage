/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1f1f1f",
        "primary-color-light": "#7f7e7e",
        "secondary-color": "#f89b1a",
        "secondary-dark-color": "#d27b02"
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#2D5D46",
        gold: "#AE7533",
        cream: "#FCFAF4",
        beige: "#FFEDD6",
        sage: "#94A591",
      },
      fontFamily: {
        heading: ['"TanMonCheri"', "serif"],
        body: ['"Montserrat"', "sans-serif"],
        sans: ['"Montserrat"', "sans-serif"], // optional override default
      },
    },
  },
  plugins: [],
};

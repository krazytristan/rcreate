/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // BRAND CORE
        primary: {
          DEFAULT: "#1F3F32",   // deeper executive green
          light: "#2F6A55",
        },

        accent: {
          DEFAULT: "#B47B3A",   // richer premium gold
          soft: "#F3DFC3",
        },

        neutral: {
          background: "#F8F6F0",
          surface: "#FFFFFF",
          muted: "#8C9B8A",
          border: "#E8E5DE",
          dark: "#111315",
        },

        // Optional legacy aliases (so old code doesn’t break)
        forest: "#1F3F32",
        gold: "#B47B3A",
        cream: "#F8F6F0",
        beige: "#F3DFC3",
        sage: "#8C9B8A",
      },

      fontFamily: {
        heading: ['"TanMonCheri"', "serif"],
        body: ['"Montserrat"', "sans-serif"],
        sans: ['"Montserrat"', "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        premium: "0 20px 60px rgba(0,0,0,0.15)",
      },

      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

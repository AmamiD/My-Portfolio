/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FAE5D8",
          100: "#DFB6B2",
          300: "#824D69",
          500: "#522959",
          700: "#2A114B",
          900: "#180018",
        },
      },
    },
  },
  plugins: [],
};
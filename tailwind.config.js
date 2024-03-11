/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1039': '1039px',
      },
      height: {
        '596': '596px',
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
        mulish: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}


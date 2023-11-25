/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryGray: "#F7F8FF",
        secondaryGray: "#8F9BB3",
        primarySlateBlack: "#101828",
        secondarySlateBlack: "#475467",
        primaryBlack: "#1D2939",
        lightGray: "#DDDDDD",
      },
      fontFamily:{
        "roboto":["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

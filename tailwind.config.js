/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      screens: {
        sm: { max: "640px" },
        md: { max: "900px" },
        lg: { max: "1000px" },
        xl: { max: "1200px" },
      },
      colors: {
        bgDark: "var(--blueAccent)",
        bgLight: "var(--white)",
        bgGreen: "var(--greenAccent)",
        lightText: "var(--white)",
        darkText: "var(--blueAccent)",
        blackText: "var(--black)",
        greyText: "var(--grey)",
        greenText: "var(--greenAccent2)",
        lightText2: "var(--whiteAccent)",
      },
    },
  },
  plugins: [],
};

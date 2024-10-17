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
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      transitionDelay: {
        0: "0s",
        200: "2s",
      },
    },
  },
  plugins: [],
};

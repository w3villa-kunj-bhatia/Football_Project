/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#303030",
        card: "#222222",
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      fontSize: {
        sm: "16px",
        m: "18px",
        l: "22px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector"],
  theme: {
    extend: {
      colors: {
        app: { ...require("tailwindcss/colors").sky },
        focus: { ...require("tailwindcss/colors").indigo },
      },
      keyframes: {
        loader: {
          "0%, 100%": { backgroundPosition: "0%" },
          "50%": { backgroundPosition: "100%" },
        },
        bounceChar: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-70px)" },
        },
        charPulse: {
          "0%": {
            transform: "scale(1.25)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        loader: "loader 2s linear infinite",
        bounceChar: "bounceChar 1s ease infinite alternate",
        charPulse: "charPulse 1.25s ease infinite alternate",
      },
    },
  },
  plugins: [],
};

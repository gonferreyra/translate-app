/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "DM Sans, sans-serif",
      // sora: "Sora, sans-serif",
    },
    extend: {
      animation: {
        spinner: "spinner 1s linear infinite",
      },
      keyframes: {
        spinner: {
          "0%": {
            transform: "translateX(-50%) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(-50%) rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};

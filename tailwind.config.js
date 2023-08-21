/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Robo: "Roboto Slab",
      Jakarta: "Plus Jakarta Sans",
    },
    animation: {
      "fade-in-left": "fadeInLeft 1s ease-in-out",
      "fade-in-right": "fadeInRight 1s ease-in-out",
      spin: "spin 1s linear infinite",
    },
    keyframes: {
      fadeInLeft: {
        "0%": { transform: "translateX(-50px)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
      fadeInRight: {
        "0%": { transform: "translateX(50px)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },

      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
  },
  plugins: [],
};

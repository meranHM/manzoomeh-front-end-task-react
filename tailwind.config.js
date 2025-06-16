/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        dana: ["Dana", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        reenie: ["Reenie Beanie", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "orange-brand": "#FE9001",
        "orange-brand-light": "#FFC700",
        "orange-brand-medium": "#F18316",
        "orange-brand-dark": "#FFB21D",
        "charcoal-dark": "#303030",
        "gray-ultra-light": "#F0F0F0",
        "gray-faint": "#F2F2F2",
        "gray-suva": "#8E8E8E",
        "gray-light": "#C4C4C4",
        "gray-medium": "#D7D7D7",
        "gray-deep": "#6E6E6E",
        "gray-dark": "#737373",
        "gray-soft": "#E4E6E8",
        "blue-gray": "#60717B",
        "blue-gray-muted": "#69899C",
        "blue-ultra-light": "#EDF2F5",
        "blue-light": "#D8EAff",
        "blue-deep": "#013D68",
        "blue-deep-dark": "#012E41",
        "blue-deep-hover": "#03528A",
        "blue-navy": "#000E19",
        "blue-midnight": "#00233C",
        "blue-midnight-light": "#02253D",
      },
      borderRadius: {
        "box": "32px",
        "pill": "50px",
      },
      boxShadow: {
        "search-box": "0px 10px 20px 0px #0000000D",
        "hotel-card": "0px 0px 30px 0px #0000001A",
        "hotel-card-rating": "0px 0px 15px 0px #0000001A",
        "blog-tour-rating": "0px 2px 7px 0px #00000012",
      },
      margin: {
        "30": "123px",
      }
    },
  },
  plugins: [],
}

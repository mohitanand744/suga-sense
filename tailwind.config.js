/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar"),

    function ({ addUtilities }) {
      addUtilities({
        ".hideScrollBar": {
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, and Edge */,
          },
        },
      });
    },
  ],
};

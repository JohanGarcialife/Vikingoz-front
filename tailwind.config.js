/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      mono: ['"ui-monospace"', '"SFMono-Regular"', "Open Sans"],
      body: ['"Open Sans"', ' "ui-serif"', '"Georgia"', '"Cambria"'],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

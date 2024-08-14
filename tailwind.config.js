/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      primary: {
        50: "#fdf4f3",
        100: "#fce6e4",
        200: "#fad2ce",
        300: "#f6b2ab",
        400: "#ef867a",
        500: "#e2594a",
        600: "#cf4233",
        700: "#ae3427",
        800: "#902f24",
        900: "#782c24",
        950: "#41130e",
      },
      secondary: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#000000",
      },
    },
    extend: {
      fontFamily: "Montserrat",
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

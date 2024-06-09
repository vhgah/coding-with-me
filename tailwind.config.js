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
    extend: {
      scale: {
        102: "1.02",
      },
      colors: {
        bg: "rgb(244, 245, 245)",
      },
    },
  },
  darkMode: ["class"],
  plugins: [],
};

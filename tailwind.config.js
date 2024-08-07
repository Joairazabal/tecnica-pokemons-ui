/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7d346",
        secondary: "#f8ec99",
        tertiary: "#3f3025",
      },
    },
  },
  plugins: [],
};

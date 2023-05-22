/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
      LexendDeca: ['Lexend Deca', 'sans-serif'],
    },
    extend: {
      colors: {
        DarkBlue: 'hsl(233, 47%, 7%)',
        DesaturatedBlue: 'hsl(244, 38%, 16%)',
        SoftViolet: 'hsl(277, 64%, 61%)',
      }
    },
  },
  plugins: [],
}


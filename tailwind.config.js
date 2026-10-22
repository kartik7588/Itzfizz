/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#090b0c',
        chalk: '#f1f0e9',
        volt: '#c8ff29',
        amber: '#ff9f1c',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

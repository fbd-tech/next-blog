/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        main: 'clamp(0px, 1050px, 90vw)',
      },
      height: {
        'article-image': '12rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

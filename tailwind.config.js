/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-dark': '#171c28',
        'secondary-color':"#55198b",
      }
    },
  },
  plugins: [],
}


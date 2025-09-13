/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      fontSize:{
        'xxs':'0.625rem',
        'tiny':'0.6875rem'
      },
    },
  },
  plugins: [],
}


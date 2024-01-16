/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-white': 'hsl(0, 0%, 100%)',
        'neo-light-pink': 'hsl(275, 100%, 97%)',
        'neo-grayish-purple': 'hsl(292, 16%, 49%)',
        'neo-dark-purple': 'hsl(292, 42%, 14%)',
        'neo-pink': '#AD28EB',
      },
      fontFamily: {
        'work-sans': 'Work Sans',
      },
      screens: {
        'sDT': '1024px',
      }
    },
  },
  plugins: [],
}
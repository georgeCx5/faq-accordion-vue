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
      },
      boxShadow: {
        'accordion': '0px 32px 56px rgba(80, 0, 118, 0.1)',
      }

    },
  },
  plugins: [],
}
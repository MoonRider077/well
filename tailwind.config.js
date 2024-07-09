/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max' : '576px'}, 
        'md': {'min' : '577px'}
      },
    },
  },
  plugins: [],
}


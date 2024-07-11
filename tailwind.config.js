/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min' : '350px', 'max' : '420px'},
        'xss': {'min' : '421px', 'max' : '576px'},
        'sm': {'max' : '576px'}, 
        'md': {'min' : '577px'},
        'tablet': {'min' : '577px', 'max' : '992px'},
        'lg': {'min' : '993px', 'max' : '1200px'}
      },
    },
  },
  plugins: [],
}


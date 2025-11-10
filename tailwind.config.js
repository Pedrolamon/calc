
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-light-purple': '#A69BB2',
        'bg-dark-purple': '#2D2A37', 
        'button-dark': '#2B2531',    
        'button-purple': '#6A5ACD',  
      },
      boxShadow: {
        'neumorphic': '6px 6px 12px #2A2534, -6px -6px 12px #423B4C',
      }
    },
  },
  plugins: [],
}
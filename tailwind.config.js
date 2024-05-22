/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["*.html"],
  theme: {
    extend: {
      screens:{
        "sm":"480px",
        "md":"900px",
        
      }
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}


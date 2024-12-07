/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins":["Poppins"," sans-serif"]
      },
      backgroundImage: {
        'image': "url('https://i.ibb.co.com/pyBT9S9/background.jpg')",
        
      }
    },
  },


  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"], // Use default themes
  },
}


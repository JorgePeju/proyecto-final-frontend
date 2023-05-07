/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        'panel': '50rem'
      },
      margin: {
        'boton': '28rem', /* Reemplazar con el valor en rem que deseas */
      },
      backgroundImage: {
        'backgroundZelda': "url('src/assets/background.jpg')",
      },
    },
  },
  
  plugins: [],
}

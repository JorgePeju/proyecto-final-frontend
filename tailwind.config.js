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
      colors: {
        'zdarkblue':'#272F59',
        'zlightblue':'#8491D9',
        'zyellow':'#BFA26B',
        'zbrown':'#736140',
        'zdarkgray':'#6C878C',
        'zbgbrown':'#261313',
        'zbgcosa':'#403333',
        'zbgray':'#261D1D',
        'zbgrey':'#260B10',
      }
    },
  },
  
  plugins: [],
}

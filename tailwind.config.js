/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'Roboto', 'Arial'],
    },
    extend: {
      colors: {
        'p-red': '#DB4437',
        'p-yellow': '#F4B400',
        'p-blue': '#4285F4',
        'p-green': '#0F9D58',
        'p-gray': '#727272'
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '104': '26rem'
      }
    }
  },
  variants: {},
  plugins: []
}

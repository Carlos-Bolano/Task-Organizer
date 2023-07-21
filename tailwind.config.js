/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB61D',
        secondary: {
          100: '#1E1F25',
          900: '#171713'
        },
        gris: '#898989'
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#1C1C1C',
        'background-light': '#282828',
        'foreground': '#ECEDEE',
        'gray-dark': '#3D3D3D',
        'gray-light': '#8E8E8E',
        'accent-green': '#3ECF8E',
        'accent-green-dark': '#31A572',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
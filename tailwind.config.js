/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'brand-gray': '#111111',
        'brand-light-gray': '#1c1c1c',
        'brand-text': '#a1a1a1',
        'brand-purple': '#9e86ff',
      },
      fontFamily: {
        sans: ['"General Sans"', 'sans-serif'],
      },
      keyframes: {
        'gradient-fade': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-fade': 'gradient-fade 15s ease infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        xl: '1280px',
      },
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },

    extend: {
      colors: {
        app: {
          red: '#c2001a',
          darkRed: '#a40318',
          darkYellow: '#df9a3f',
        },
      },
    },

    fontFamily: {
      bebasNeue: ['Bebas Neue', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}

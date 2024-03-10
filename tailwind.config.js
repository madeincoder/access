// tailwind.config.js

const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./**/*.hbs'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1576px',
    },
    fontFamily: {
      'primary': 'var(--font-body)',
      'secondary': 'var(--font-heading)',
    },
    colors:{
      transparent: 'transparent',
      primary: 'var(--ghost-accent-color)',
      heading: '#040E27',
      white: '#ffffff',
      default: '#333333',
      darklight: '#24345F',
      error: '#333333',
      black: '#000000',
      twitter: '#33B6FF', //used
      facebook: '#3E62E1', //used
      lightPink: '#FFF5F5', //used
      lightBrown: '#F7E1C7', //used

      gray:{
        40: '#F9FAFF', //used
        50: '#FAFAFA', //used
        60: '#F9F9F9', //used
        100: '#EEEEEE', //used
        200: '#FCFEFE', //used
        300: '#EBEBEB', //used
        400: '#A9A9AF', //used
        500: '#6B7280',
        600: '#555555', //used
        700: '#374151',
        800: '#0C1631', //used
        900: '#091229', //used
        1000: '#040B1E' //used
      },
    },
    boxShadow:{
      DEFAULT:'0px 10px 30px rgba(0, 0, 0, 0.05)',
      none: 'none',
    },
    fontSize: {
      'xs': ['.75rem', '1rem'],
      'sm': ['.875rem', '1.25rem'],
      'base': ['1rem', '1.5rem'],
      'lg': ['1.125rem', '1.75rem'],
      'xl': ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.5rem'],
      '7xl': ['4.5rem', '5rem'],
      '8xl': ['6rem', '6.2rem'],
      '9xl': ['8rem', '8.2rem'],
    }
  },
  variants: {
    extend:{
      height:{
        hauthor: '450px'
      }
    }
  },
  plugins: [
    require("@tailwindcss/aspect-ratio")
  ],

}
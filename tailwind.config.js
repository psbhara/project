/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef3ff',
          100: '#dce7ff',
          200: '#bfd3ff',
          300: '#92b4ff',
          400: '#608bff',
          500: '#3a61ff',
          600: '#1c3df7',
          700: '#1730e0',
          800: '#1c2cb5',
          900: '#1e2d8f',
          950: '#161c54',
        },
        secondary: {
          50: '#effdfd',
          100: '#d2f7f9',
          200: '#a8eff3',
          300: '#6ee0e9',
          400: '#34c7d3',
          500: '#19aab7',
          600: '#15889a',
          700: '#176d7c',
          800: '#195866',
          900: '#194a56',
          950: '#0c2f39',
        },
        accent: {
          50: '#fff1ed',
          100: '#ffdfd4',
          200: '#ffc0a9',
          300: '#ff9972',
          400: '#ff6739',
          500: '#ff3a11',
          600: '#ff1d00',
          700: '#cc1b03',
          800: '#a1190c',
          900: '#821a0e',
          950: '#460905',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
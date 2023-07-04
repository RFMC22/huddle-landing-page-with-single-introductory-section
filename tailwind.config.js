/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        'violet': 'hsl(257, 40%, 49%)',
        'soft-magenta': 'hsl(300, 69%, 71%)',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


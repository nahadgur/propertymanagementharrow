/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway:     ['Raleway', 'sans-serif'],
        baskerville: ['Libre Baskerville', 'serif'],
        display:     ['Libre Baskerville', 'serif'],
        sans:        ['Raleway', 'sans-serif'],
      },
      fontWeight: {
        800: '800',
      },
      colors: {
        green: {
          DEFAULT: '#2d7a4f',
          dark:    '#1a4730',
          deep:    '#1a4730',
          mid:     '#95d5b2',
          soft:    '#e8f3ed',
          pale:    '#f2f8f4',
        },
        cream: {
          DEFAULT: '#fafaf7',
          2:       '#f4f2ec',
        },
        brand: '#2d7a4f',
      },
    },
  },
  plugins: [],
}

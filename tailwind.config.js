/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#EDF5F5',
          100: '#D0E8E8',
          200: '#A8D4D4',
          300: '#6BAAAA',
          400: '#3D9090',
          500: '#1F7A7A',
          600: '#196666',
          700: '#145252',
          800: '#0F3E3E',
          900: '#0A2E2E',
          950: '#061E1E',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

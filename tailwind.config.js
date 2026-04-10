/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#277649',
          dark:    '#1a5233',
          deep:    '#0f3320',
          light:   '#eaf4ee',
          mid:     '#d0e9d8',
          soft:    '#f2f9f4',
        },
        text: {
          DEFAULT: '#0d1a0f',
          muted:   '#555555',
          faint:   '#888888',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans:    ['var(--font-epilogue)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.03', letterSpacing: '-0.02em' }],
        'h1':   ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h2':   ['2.5rem', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'h3':   ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        'site': '1280px',
      },
      borderColor: {
        DEFAULT: '#f0eee8',
      },
    },
  },
  plugins: [],
}

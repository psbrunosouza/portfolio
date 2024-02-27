/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'base': {
          DEFAULT: 'var(--base-200)',
          '100': 'var(--base-100)',
          '200': 'var(--base-200)',
          '300': 'var(--base-300)',
        },
        'accent': {
          'DEFAULT': 'var(--accent-200)',
          '100': 'var(--accent-100)',
          '200': 'var(--accent-200)',
          '300': 'var(--accent-300)',
        },
        'highlight': {
          'DEFAULT': 'var(--highlight-200)',
          '100': 'var(--highlight-100)',
          '200': 'var(--highlight-200)',
          '300': 'var(--highlight-300)',
        },
        light: {
          'DEFAULT': 'var(--light-200)',
          '100': 'var(--light-100)',
          '200': 'var(--light-200)',
          '300': 'var(--light-300)',
        },
        dark: {
          'DEFAULT': 'var(--dark-200)',
          '100': 'var(--dark-100)',
          '200': 'var(--dark-200)',
          '300': 'var(--dark-300)',
        },
      },
       fontFamily: {
        'open-sans-regular': 'var(--font-regular)',
      },
      boxShadow: {
        'card-shadow': 'var(--card-shadow)',
      }
    },
  },
  plugins: [],
}


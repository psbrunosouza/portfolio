/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'base': 'var(--base)',
        'accent': 'var(--accent)',
        'highlight': 'var(--highlight)',
        light: 'var(--light)',
        dark: 'var(--dark)',
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


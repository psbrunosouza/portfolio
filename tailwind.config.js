/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#020203',
        'accent': '#0E0E15',
        'highlight': '#276FBF',
        light: '#F6F4F3',
        dark: '#020203',
      },
       fontFamily: {
        'open-sans-regular': ['Open Sans Regular', 'Segoe UI'],
      }
    },
  },
  plugins: [],
}


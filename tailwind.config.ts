/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f7',
          100: '#ffe4ef',
          200: '#ffbfd7',
          300: '#ff98bf',
          400: '#ff6aa3',
          500: '#f43f8f', // color principal
          600: '#d22d79',
          700: '#aa1f62',
          800: '#7e164a',
          900: '#4f0c2e'
        }
      }
    },
  },
  plugins: [],
}

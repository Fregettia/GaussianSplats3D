/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./demo/**/*.html",
    "./demo/**/*.js",
    "./build/demo/**/*.html",
    "./build/demo/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'apple-gray': '#f5f5f7',
        'apple-text': '#1d1d1f',
        'apple-link': '#06c'
      },
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: [],
}


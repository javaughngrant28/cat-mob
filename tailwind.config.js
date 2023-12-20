/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './src/**/*.js',
    // Add more file paths as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


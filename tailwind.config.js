/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    minHeight: {
      '1': '1px',
    },
    minWidth: {
      '64': '16rem',
    }
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {transitionDuration: {
      '0': '0ms',
      '2000': '2000ms',
    }},
  },
  plugins: [],
}


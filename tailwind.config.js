/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "btn-bg": "linear-gradient(90.35deg, rgba(155, 28, 191, 0.576) -17.11%, rgba(54, 114, 254, 0.8) 55.15%, rgba(3, 231, 243, 0.8) 120.33%)",
        "hero-text-gradient": "linear-gradient(90.54deg, rgba(155, 28, 191, 0.77) -4.44%, #3672FE 24.41%, #03E7F3 52.32%)"

      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        '2xl': '1rem'
      }
    }
  },
  plugins: [],
}

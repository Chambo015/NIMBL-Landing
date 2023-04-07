/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1660px',
      },
      backgroundImage: {
        "btn-bg": "linear-gradient(to left, rgba(155, 28, 191, 0.576) -17.11%, rgba(54, 114, 254, 0.8) 55.15%, rgba(3, 231, 243, 0.8) 120.33%)",
        "btn-steel": "radial-gradient(55.98% 113.24% at -13.29% -63.24%, #EB00FF 0%, #450B6E 100%)",
        "btn-steel-hero": "radial-gradient(55.98% 113.24% at -13.29% -63.24%, rgb(235 0 255 / 65%) 0%, rgb(69 11 110 / 65%) 100%);",
        "hero-text-gradient": "linear-gradient(90.54deg, rgba(155, 28, 191, 0.77) -4.44%, #3672FE 24.41%, #03E7F3 52.32%)",
        "communities-text-gradient": "linear-gradient(89.85deg, rgba(155, 28, 191, 0.77) -4.81%, #3672FE 47.23%, #03E7F3 97.57%)"
      },
      spacing: {
        'index': 'calc(1vh + 1vw)'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': '1rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1660px',
      },
    }
  },
  plugins: [],
}

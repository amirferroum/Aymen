/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('https://images.pexels.com/photos/4050292/pexels-photo-4050292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }
    },
  },
  plugins: [],
}


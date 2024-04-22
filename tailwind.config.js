/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'search-bg': '#5B8561',
        'color-title': '#1A3626',
        'color-footer1' : '#5C8359',
        'color-footer2' : '#274931',
      },
      backgroundImage: {
        'wallpaper-search': "url('/public/wallpaper-searching.svg')",
      },
  },
  plugins: [],
}
}

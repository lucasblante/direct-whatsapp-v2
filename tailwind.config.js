/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'grey': {
          '100': '#B7B7B7',
          '300': '#606060',
          '600': '#272727',
          '800': '#202020'
        },
        'wpp-green': {
          '500': '#16826B',
          '600': '#025c4c'
        }
      },
    },
  },
  plugins: [],
}

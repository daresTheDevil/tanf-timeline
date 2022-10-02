/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('tailwind-children'),
  ],
  content: [
    `src/components/**/*.{vue,js}`,
    `src/layouts/**/*.vue`,
    `src/pages/**/*.vue`,
    `src/composables/**/*.{js,ts}`,
    `src/plugins/**/*.{js,ts}`,
    `src/App.{js,ts,vue}`,
    `src/app.{js,ts,vue}`
  ]
}

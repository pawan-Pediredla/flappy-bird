/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#1DA1F2',
          'secondary': '#657786',
        },
        spacing: {
          '128': '32rem',
        },
      },
    },
    plugins: [],
  }
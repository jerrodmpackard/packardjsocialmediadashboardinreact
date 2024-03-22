/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        main: {
          limeGreen: "hsl(163, 72%, 41%)",
          brightRed: "hsl(356, 69%, 56%)",
          facebook: "hsl(208, 92%, 53%)",
          twitter: "hsl(203, 89%, 53%)",
          instagram: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
          youtube: "hsl(348, 97%, 39%)",
        },
        darkMode: {
          toggle: "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
          veryDarkBlueBg: "hsl(230, 17%, 14%)",
          veryDarkBlueBgTop: "hsl(232, 19%, 15%)",
          darkDesaturatedBlue: "hsl(228, 28%, 20%)",
          desaturatedBlue: "hsl(228, 34%, 66%)",
          text: "hsl(0, 0%, 100%)",
        },
        lightMode: {
          toggle: "hsl(230, 22%, 74%)",
          whiteBg: "hsl(0, 0%, 100%)",
          veryPaleBlueTop: "hsl(225, 100%, 98%)",
          lightGrayishBlue: "hsl(227, 47%, 96%)",
          darkGrayishBlue: "hsl(228, 12%, 44%)",
          text: "hsl(230, 17%, 14%)",
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


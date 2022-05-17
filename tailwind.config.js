module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'redsummerize' : '#ec0e52',
      'bluesummerize' : '#00c5e8'
    },
    extend: {
      
      fontFamily: {
        monoton: ["MONOTON", "regular"],
      },
    },
  },
  plugins: [require("daisyui")],
}

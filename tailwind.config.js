module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvox: {
          purpleLight: '#6C30BF',
          purpleMedium: '#5F2DA6',
          tealLight: '#41BFBF',
          cyan: '#05F2DB',
          black: '#0D0D0D',
        },
      },
    },
  },
  plugins: [],
}
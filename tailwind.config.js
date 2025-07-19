module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C30BF',
          dark: '#5F2DA6'
        },
        secondary: {
          DEFAULT: '#41BFBF',
          light: '#05F2DB'
        },
        dark: {
          DEFAULT: '#0D0D0D'
        }
      },
    },
  },
  plugins: [],
}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          700: '#6C30BF',
          600: '#5F2DA6',
        },
        teal: {
          400: '#41BFBF',
          300: '#05F2DB',
        },
        black: {
          900: '#0D0D0D',
        },
        // Adicione cores personalizadas como cores nomeadas
        primary: '#6C30BF',
        primaryDark: '#5F2DA6',
        secondary: '#41BFBF',
        secondaryLight: '#05F2DB'
      },
    },
  },
  plugins: [],
}
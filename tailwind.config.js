module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto', 'serif'],
    },
    extend: {
      colors: {
        'blue': '#1158C7',
        'purple': '#553098',
        'red': '#DA3633',
        'gray-dark': '#21262D',
        'gray': '#30363D',
        'gray-light': '#C9D1D9',
        'white': '#FFFFFF'
      },
      height: {
        '80vh': '80vh',
      }
    },
  },
  plugins: [],
}

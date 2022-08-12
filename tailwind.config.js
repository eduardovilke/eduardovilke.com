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
        'gray-200': '#2b3036',
        'gray-300': '#6E7781',
        'gray-light': '#C9D1D9',
        'white': '#FFFFFF',
        'white-100': '#F4F5F7'
      },
      height: {
        '80vh': '80vh',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

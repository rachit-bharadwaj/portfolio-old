module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'ubuntu': ['ubuntu', 'sans-serif'],
    },
    extend: {
        colors: {
          'regal-blue': '#243c5a',
        },
    },
  },
  plugins: [],
}

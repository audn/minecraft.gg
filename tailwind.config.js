const colors = require('./tailwind.colors');

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    inset: {
      '1/2': '50%',
      '-55': '-55%;',
      '114': '114px',
      '0': 0,
      wave: '350px',
    },
    extend: {
      margin: {
        '26': '7rem',
      },
      width: {
        '245': '245px',
        hr: '200px',
      },
      colors,
      fontFamily: {
        sans: ['proxima-soft', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};

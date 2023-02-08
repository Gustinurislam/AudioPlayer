/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        player: '85px repeat(10, minmax(0, 1fr)) 85px;',
      },
    },
  },
  plugins: [],
};

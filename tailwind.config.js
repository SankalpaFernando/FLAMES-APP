module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      fancy: 'Nunito',
      microbe: 'Rubik Microbe',
    },
    extend: { colors: { red: { 50: '#F24A72', 60: '#FF75A0' } } },
  },
  plugins: [require('@tailwindcss/forms')],
};

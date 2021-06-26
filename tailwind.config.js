module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray1: '#333333',
        gray2: '#718596',
        gray3: '#EDF2F7',
        gray4: '#CBD6E0',
        orange1: '#EE6F44',
        blue1: '#227EFF',
        purple1: '#7E42F5',
        purple2: '#29394F',
        green1: '#05944F'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

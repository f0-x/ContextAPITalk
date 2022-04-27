module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#181617',
        'black-3a3': '#3a3a3a',
        white: '#ffffff',
        primary: '#e5312d',
        'gray-a7a': '#a7a7a7',
        'gray-656': '#656565',
        'gray-e3e': '#e3e3e3',
        'gray-f2f': '#f2f2f2',
        'blue-37a': '#37A0C6',
        'orange-f8a': '#F8AE59',
        'green-37c': '#37C63C',
      },
      spacing: {
        'sz-30%': '30%',
        'sz-70%': '70%',
        'sz-45%': '40%',
        'sz-55%': '60%',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto-1': 'auto 1fr',
        '1-auto': '1fr auto',
        2112: '2fr 1fr 1fr 2fr',
        'mm-260': 'repeat(auto-fill,minmax(250px, 1fr))',
        'mm-180': 'repeat(auto-fill,minmax(180px, 1fr))',
      },
      maxWidth: {
        subscriptionInput: 'calc(100% - 330px)',
        smallwidth: 'calc(33.33% - 20px)',
      },
    },
    screens: {
      // => @media (max-width: 1535px) { ... }
      '2xl': { max: '1535px' },
      // => @media (max-width: 1279px) { ... }
      xl: { max: '1279px' },
      // => @media (max-width: 1023px) { ... }
      lg: { max: '1118px' },
      // => @media (max-width: 767px) { ... }
      md: { max: '767px' },
      // => @media (max-width: 639px) { ... }
      sm: { max: '639px' },
    },
  },
  plugins: [],
};

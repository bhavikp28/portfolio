/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      boxShadow: {
        dark: '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
        glowDark: '0px 2px 25px -4px #427bff',
        glowGreen: '0px 2px 25px -4px #42ff5b',
        glowLight: '0px 0px 10px 0px #e05912',
        glowMore: '0px 0px 20px 2px #e05912',
      },
    },
  },
  plugins: [],
};

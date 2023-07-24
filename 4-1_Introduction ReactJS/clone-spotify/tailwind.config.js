/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#232323',
        textSecondary: '#A7A7A7',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './<custom directory>/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      theme: {
        colors: {
          primary: '#19c37d',
          secondary: '#715fde',
          text: '#6e6e80',
          error: '#ef4146',
        },
      },
    },
  },
  plugins: [],
};

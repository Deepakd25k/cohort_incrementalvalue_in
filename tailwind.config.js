export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        main: '#111318',
        secondary: '#596171',
        accent: '#3155F5',
        surface: '#F5F7FB',
        border: '#E3E7EE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

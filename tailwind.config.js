export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#FFFFFF',
        main: '#111318',
        blue: '#3155F5',
        muted: '#626977',
        borders: '#DFE3EB',
        cardBg: '#F5F7FF',
        cardBorder: '#D6DEFB',
        cardSep: '#DCE2F4',
        stickerBg: '#DAFA9C',
        stickerBorder: '#C5E58C',
      },
      fontFamily: {
        nimbus: ['Nimbus', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#11100E',
        coal: '#1A1815',
        paper: '#F3EDE3',
        card: '#FFFDF8',
        surface: '#EAE0D2',
        line: '#E4D8C8',
        linedark: 'rgba(255,255,255,0.12)',
        muted: '#5F574F',
        mutedDark: '#D8D2C8',
        accent: {
          DEFAULT: '#F05A24',
          600: '#D94A18',
          700: '#B83C12',
          100: '#FBDFD2',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
    },
  },
  plugins: [],
}

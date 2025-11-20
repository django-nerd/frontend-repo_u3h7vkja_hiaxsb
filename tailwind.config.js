/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { center: true, padding: { DEFAULT: '1rem', md: '2rem' } },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        mona: ['Mona Sans', 'system-ui', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#F6F1E9',
        offwhite: '#FBF8F3',
        gold: '#C6A15B',
        blue: {
          50: '#F3F6FA',
          100: '#E6EDF5',
          200: '#CBD8E6',
          300: '#B0C2D6',
          400: '#96ACC6',
          500: '#7A8CA5', // muted blue
          600: '#667A93',
          700: '#56677D',
          800: '#465465',
          900: '#394653',
        },
        coffee: {
          50: '#F5EFEB',
          100: '#EDE4DE',
          200: '#D9CDC5',
          300: '#C4B5AB',
          400: '#AD988B',
          500: '#8F7A6D',
          600: '#7A665A',
          700: '#6B574D',
          800: '#56463E',
          900: '#3E2F27',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'fade-out': 'fadeOut 0.5s ease-in both',
        'slide-in': 'slideIn 0.3s ease-out both',
        'slide-up': 'slideUp 0.6s ease-out both',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

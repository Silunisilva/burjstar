/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D89828',
          light: '#E5AF4D',
          dark: '#B57C1C',
          50: '#FDF9F0',
          100: '#FAF0DB',
          200: '#F5DEB3',
          300: '#ECCB8A',
          400: '#E2B861',
          500: '#D89828',
          600: '#BD801D',
          700: '#946317',
          800: '#6C4811',
          900: '#462E0B',
        },
        cream: {
          50: '#FCFBF8',
          100: '#FBF9F5',
          200: '#F5F2EB',
          300: '#ECE8DD',
          400: '#DDD8C7',
        },
        dark: {
          DEFAULT: '#0B0C0E',
          50: '#2A2C32',
          100: '#202227',
          200: '#191B20',
          300: '#141519',
          400: '#101115',
          500: '#0B0C0E',
          600: '#07080A',
          900: '#000000',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        editorial: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(216, 152, 40, 0.3)',
        'gold-sm': '0 0 15px -3px rgba(216, 152, 40, 0.25)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

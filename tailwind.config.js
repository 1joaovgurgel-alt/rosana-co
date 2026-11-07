/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF8',
          100: '#F7F3EC',
          200: '#EFE8DC',
        },
        sand: {
          100: '#F3ECE1',
          200: '#E5DAC8',
          300: '#D4C3AA',
          400: '#B8A284',
        },
        olive: {
          50: '#F4F6F1',
          100: '#E5EAE0',
          200: '#CBD5C1',
          500: '#5C6B48',
          600: '#4A5739',
          700: '#3B462D',
          800: '#2E3723',
          900: '#22281A',
        },
        charcoal: {
          700: '#3D3A36',
          800: '#282623',
          900: '#1A1917',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 24px -4px rgba(26, 25, 23, 0.05)',
        'elevated': '0 12px 36px -8px rgba(26, 25, 23, 0.09)',
      }
    },
  },
  plugins: [],
};

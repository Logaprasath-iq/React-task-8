/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5046E5',
          hover: '#4338CA',
          light: '#EEF2FF',
          dark: '#3730A3',
        },
        background: '#F7F8FC',
        surface: '#FFFFFF',
        textMain: '#111827',
        textMuted: '#64748B',
        borderCol: '#F1F5F9',
        accentCyan: '#00D2D3',
        accentPeach: '#FF647C',
        accentYellow: '#FFA800',
        accentGreen: '#10B981',
        accentBlue: '#3B82F6',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.03), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 10px 25px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'promo': '0 12px 30px -4px rgba(79, 70, 229, 0.15)',
        'dropdown': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
      }
    },
  },
  plugins: [],
}

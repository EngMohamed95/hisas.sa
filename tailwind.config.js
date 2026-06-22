/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#02464f', // Official Corporate Teal
          light: '#086E7B',   // Medium Teal
          dark: '#011c20',    // Very Dark Teal
        },
        gold: {
          DEFAULT: '#02464f', // Official Corporate Teal (replacing Gold)
          light: '#086E7B',   // Medium Teal
          dark: '#011c20',    // Very Dark Teal
          metallic: 'linear-gradient(135deg, #02464f 0%, #086E7B 50%, #011c20 100%)',
        },
        luxury: {
          lightBg: '#f8f8f8',  // Official Light BG
          darkBg: '#011c20',   // Official Dark BG (Deep Teal Canvas)
          text: '#60605f',     // Official Text Gray
          textLight: '#8c8c8b',// Secondary Gray
          borderLight: '#c4c0b8', // Official Stroke/Border Color
          borderDark: '#02464f',  // Dark Mode Border
        }
      },
      fontFamily: {
        sans: ['iwanzaza', 'Inter', 'Cairo', 'Tajawal', 'sans-serif'],
        arabic: ['iwanzaza', 'Cairo', 'Tajawal', 'sans-serif'],
        english: ['Inter', 'Manrope', 'sans-serif'],
        heading: ['iwanzaza', 'Cairo', 'Inter', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};

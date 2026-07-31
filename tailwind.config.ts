import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Manrope', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#082B63',
          50: '#e8edf5',
          100: '#c5d1e8',
          200: '#9eb3d9',
          300: '#7094c8',
          400: '#4d7abb',
          500: '#082B63',
          600: '#072455',
          700: '#051d47',
          800: '#041638',
          900: '#020f29',
        },
        secondary: {
          DEFAULT: '#168B45',
          50: '#e8f5ee',
          100: '#c5e8d3',
          200: '#9ed9b5',
          300: '#70c895',
          400: '#4dbb7d',
          500: '#168B45',
          600: '#12753a',
          700: '#0e5f2f',
          800: '#0a4923',
          900: '#063317',
        },
        navy: {
          DEFAULT: '#081624',
          light: '#0c1f32',
          dark: '#040f1f',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-in-right': 'slideInRight 0.6s ease forwards',
        'scale-in': 'scaleIn 0.4s ease forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'accordion-down': 'accordionDown 0.2s ease-out',
        'accordion-up': 'accordionUp 0.2s ease-out',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        accordionDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

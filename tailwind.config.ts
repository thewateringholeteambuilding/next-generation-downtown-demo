import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          bg: 'hsl(30 15% 12%)',
          surface: 'hsl(30 12% 16%)',
          fg: 'hsl(42 20% 90%)',
          accent: 'hsl(40 55% 66%)',
          muted: 'hsl(30 10% 40%)',
          border: 'hsl(30 10% 22%)',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '3px',
        md: '4px',
      },
      transitionDuration: {
        DEFAULT: '400ms',
        slow: '500ms',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 12s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config

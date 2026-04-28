/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0B0F19',
        primary: '#7C3AED',
        secondary: '#06B6D4',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,58,237,0.18), 0 18px 60px rgba(124,58,237,0.24)',
        cyan: '0 0 0 1px rgba(6,182,212,0.2), 0 18px 60px rgba(6,182,212,0.22)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'button-gradient': 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(124,58,237,0.16), rgba(6,182,212,0.1))',
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        pulseSlow: 'pulseSlow 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}


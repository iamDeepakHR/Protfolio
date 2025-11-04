/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'neon-cyan': '#00ffff',
        'neon-blue': '#0080ff',
        'neon-purple': '#8000ff',
        'dark-bg': '#0a0a0a',
        'dark-secondary': '#1a1a2e',
        'dark-tertiary': '#16213e',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
          },
          '100%': { 
            textShadow: '0 0 30px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 128, 255, 0.5)',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 128, 255, 0.5)'
          },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070B1A',       // Deep space navy
          'dark-card': '#0D152D', // Card dark surface
          'dark-border': 'rgba(255, 255, 255, 0.08)',
          blue: {
            DEFAULT: '#2F6FE4',   // Primary blue
            hover: '#225BC2',
            light: '#EBF3FC',
            glow: '#3B82F6',
          },
          cyan: {
            DEFAULT: '#38BDF8',   // Electric cyan
            glow: 'rgba(56, 189, 248, 0.35)',
            light: '#E0F2FE',
          },
          orange: {
            DEFAULT: '#F26A3D',   // Brand orange
            hover: '#D85429',
            light: '#FEF0EB',
          },
          red: {
            DEFAULT: '#F26A3D',
            hover: '#D85429',
          },
          teal: {
            DEFAULT: '#38BDF8',
            light: '#E0F2FE',
          },
          navy: {
            DEFAULT: '#070B1A',
            surface: '#0F172A',
            light: '#1E293B',
          },
          light: {
            DEFAULT: '#F6F8FC',
            surface: '#FFFFFF',
            border: '#E2E8F0',
          },
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 2px 10px rgba(7, 11, 26, 0.04)',
        'soft-md': '0 8px 30px rgba(7, 11, 26, 0.08)',
        'soft-lg': '0 16px 40px rgba(7, 11, 26, 0.12)',
        'glow-blue': '0 0 35px rgba(47, 111, 228, 0.35)',
        'glow-cyan': '0 0 35px rgba(56, 189, 248, 0.35)',
        'glow-orange': '0 0 25px rgba(242, 106, 61, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'aurora': 'aurora 15s ease infinite alternate',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F4F4F4',
          50: '#FFFFFF',
          100: '#F8F8F8',
          200: '#F0F0F0',
          300: '#E8E8E8',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          card: '#FFFFFF',
          subtle: '#F9F9F9',
        },
        obsidian: {
          DEFAULT: '#111214',
          hover: '#1E2024',
          dark: '#0B0C0E',
          muted: '#24272B',
        },
        slate: {
          DEFAULT: '#5A5E68',
          light: '#828794',
          dark: '#3A3D45',
        },
        cobalt: {
          DEFAULT: '#2B5CFF',
          hover: '#1F4FE0',
          light: '#537CFF',
          glow: 'rgba(43, 92, 255, 0.15)',
        },
        signal: {
          red: '#E62E2D',
          hover: '#CC2423',
          glow: 'rgba(230, 46, 45, 0.2)',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#F8F8F8',
          DEFAULT: '#F4F4F4',
          200: '#ECECEC',
          300: '#E0E0E0',
        },
        graphite: {
          50: '#646864',
          100: '#464946',
          DEFAULT: '#111214',
          800: '#1A1C1E',
          900: '#111214',
          950: '#0B0C0E',
        },
        muted: {
          DEFAULT: '#5A5E68',
          dark: '#3A3D45',
          light: '#828794',
        },
        solar: {
          DEFAULT: '#2B5CFF', // Elevated to Cobalt Blue
          amber: '#D9A441',
          light: '#537CFF',
          dark: '#1F4FE0',
          glow: 'rgba(43, 92, 255, 0.15)',
        },
        techgreen: {
          DEFAULT: '#142C27',
          deep: '#0D1E1B',
          light: '#1D3D36',
          bright: '#10B981',
        }
      },
      fontFamily: {
        sans: ['"Figtree"', '"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Figtree"', '"Cabinet Grotesk"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'flow-dash': 'flowDash 1.8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        flowDash: {
          to: { strokeDashoffset: '-24' }
        }
      }
    },
  },
  plugins: [],
}

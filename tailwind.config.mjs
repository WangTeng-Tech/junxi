/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07090E',
          900: '#0B0F17',
          850: '#101622',
          800: '#161F2E',
          700: '#233044',
          600: '#34455E'
        },
        brand: {
          cyan: '#00E5FF',
          blue: '#0070F3',
          amber: '#FFB300',
          emerald: '#10B981',
          silver: '#8E9AA8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      }
    }
  },
  plugins: []
};

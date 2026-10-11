/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        linen: {
          DEFAULT: '#FAF8F5',
          light: '#F5F2EC',
          dark: '#EAE4DA'
        },
        olive: {
          50: '#F3F6F3',
          100: '#E4ECE5',
          200: '#C9D9CA',
          500: '#5E8760',
          600: '#4C6E4E',
          700: '#3B573D',
          800: '#2B412D',
          900: '#1D2C1E'
        },
        gold: {
          accent: '#9E9368',
          light: '#C5BC97'
        },
        ink: {
          DEFAULT: '#1E241F',
          muted: '#5C5A54',
          subtle: '#8A867E'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

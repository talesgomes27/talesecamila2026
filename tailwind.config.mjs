/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        linen: {
          DEFAULT: '#FAF8F5',
          light: '#F5F3EF',
          dark: '#ECE8E1'
        },
        olive: {
          50: '#F2F6F3',
          100: '#E3ECE4',
          200: '#C8D9C9',
          500: '#628E64',
          600: '#507552',
          700: '#406042',
          800: '#324B34',
          900: '#233524'
        },
        gold: {
          accent: '#A39B75'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

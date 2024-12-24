/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{html,ts}', './.storybook/preview.ts'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        serif: ['Lato', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        primary: colors.emerald,
        error: colors.red
      }
    }
  },
  plugins: [typography, aspectRatio]
} satisfies Config;

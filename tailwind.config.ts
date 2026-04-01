import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'igf-orange': '#E25822',
        'igf-ink': '#1F1F1F',
        'igf-charcoal': '#2E2E2E',
        'igf-gray': '#444444',
        'igf-silver': '#B0B0B0',
        'igf-silver2': '#D8D8D8',
        'igf-bg': '#F9F6F2',
      },
      fontFamily: {
        heading: [
          'Playfair Display',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
        body: [
          'Lato',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
        quote: [
          'Merriweather',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config

import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{tsx,jsx}', './app/**/*.{tsx,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        space: 'SpaceMono',
      },
    },
  },
  plugins: [],
} satisfies Config

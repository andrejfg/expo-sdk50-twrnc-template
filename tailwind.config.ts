import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{tsx,jsx}', './app/**/*.{tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          text: '#000',
          background: '#fff',
          tint: '#2f95dc',
          tabIconDefault: '#ccc',
          tabIconSelected: '#2f95dc',
        },
        dark: {
          text: '#fff',
          background: '#000',
          tint: '#fff',
          tabIconDefault: '#ccc',
          tabIconSelected: '#fff',
        },
      },
      textColor: {
        link: '#2e78b7',
      },
      fontFamily: {
        space: 'SpaceMono',
      },
    },
  },
  plugins: [],
} satisfies Config

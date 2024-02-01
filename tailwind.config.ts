import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4839A3',
          light: '#6C5AE0',
          dark: '#100C27',
        },
        secondary: {
          DEFAULT: '#F2BF4E',
          light: '#F4CA6D',
        },
        gray: {
          DEFAULT: '#7E8A98',
          light: '#97A1AC',
          disabled: '#CFD3D8',
        },
        dark: '#212429',
        grayLight: {
          DEFAULT: '#FFFFFF',
          light: '#F1F3F5',
        },
      },
    },
  },
  plugins: [],
}
export default config

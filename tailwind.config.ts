import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-main':
          'linear-gradient(93.82deg, var(--color-primary) -1.6%, #806EFF 105.56%)',
      },
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

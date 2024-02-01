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
          placeholder: '#636E7C',
        },
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        'darker-grotesque': ['Darker Grotesque', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['56px', { lineHeight: '100%' }],
        '5xl-mobile': ['40px', { lineHeight: '100%' }],
        '4xl': ['40px', { lineHeight: '100%' }],
        '4xl-mobile': ['32px', { lineHeight: '100%' }],
        '3xl': ['32px', { lineHeight: '110%' }],
        '3xl-mobile': ['24px', { lineHeight: '110%' }],
        '2xl': ['24px', { lineHeight: '110%' }],
        '2xl-mobile': ['20px', { lineHeight: '110%' }],
        'xl-sm': ['20px', { lineHeight: '140%' }],
        'xl-sm-mobile': ['16px', { lineHeight: '140%' }],
        'subtitle-xs': ['14px', { lineHeight: '120%' }],
        'base-lg': ['20px', { lineHeight: '150%' }],
        'base-md': ['16px', { lineHeight: '150%' }],
        'base-sm': ['14px', { lineHeight: '150%' }],
        'base-xs': ['12px', { lineHeight: '150%' }],
      },
      fontWeight: {
        black: '900',
        extrabold: '800',
      },
      screens: {
        xs: '360px',
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
  },
  plugins: [],
}
export default config

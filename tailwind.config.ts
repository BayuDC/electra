import type { Config } from 'tailwindcss';

export default {
  theme: {
    fontFamily: {
      sans: ['Fira Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#212738',
        white: '#f6f8ff',
        gray: '#606677',
        emerald: {
          '50': '#f0fdf5',
          '100': '#dcfce9',
          '200': '#bbf7d3',
          '300': '#86efb2',
          '400': '#4ade88',
          '500': '#23ce6b',
          '600': '#16a351',
          '700': '#158043',
          '800': '#166538',
          '900': '#145330',
          '950': '#052e18',
        },
        rose: {
          '50': '#fef1f7',
          '100': '#fee5f1',
          '200': '#ffcbe6',
          '300': '#ffa1cf',
          '400': '#ff52a2',
          '500': '#fa3a8d',
          '600': '#ea1868',
          '700': '#cc0a4f',
          '800': '#a80c42',
          '900': '#8c0f39',
          '950': '#56011e',
        },
      },
    },
  },
  content: [],
} as Config;

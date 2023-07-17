/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'image': 'https://pixabay.com/pt/photos/caf%C3%A9-da-manh%C3%A3-saud%C3%A1vel-h%C3%BAmus-1804457/'
      },
      colors: {
        quarta: '#C2EF7E',
        terceira: '#6B7D3B',
        segunda: '#313131',
        primeira: '#EFFFE0',
      },
      fontFamily: {
        main: ['Abril Fatface'],
        special: ['Poiret One'],
        secondary: ['Inter'],
      },
    },
  },
  plugins: [
        // eslint-disable-next-line no-undef
        require('@tailwindcss/forms'),
  ],
}


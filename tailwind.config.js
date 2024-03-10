/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#2AB7DD',
     'secondary': '#F3F4F6',
     'button-secondary': '#E3E3E3',
    }),
    textColor: theme => (
      {
        ...theme('colors'),
        'primary': '#222222',
        'secondary': '#999B9F',
        'white': '#ffffff',
        'blue': '#2AB7DD',
        'dark': '#626262',
      }
    ),
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#E4E4E4',
      'stroke': '#D1D5DB',
      'blue': '#2AB7DD',
     }),
     screens: theme => ({
      'sm': '640px',
      'md' :'890px',
      'tw': '1250px',
      'lg': '1024px'
     })
  },
  plugins: [],
};
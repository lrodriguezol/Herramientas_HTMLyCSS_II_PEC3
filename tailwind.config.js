
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'sm': '390px',
      'md': '640px',
      'lg': '1024px',
    },
    extend: {
      gridTemplateRows: {
        'custom': '10vh 10vh 10vh 35vh 15vh',
      },
      gridTemplateColumns: {
        'custom': '1fr 1fr 2fr 2fr',
      },
      colors: {
        'concurso-corporate': '#000000',
        'concurso-background': '#ffffff',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      spacing: {
        '1/2': '50%',
        '5/6': '83.333333%',
        '1/4': '25%',
      },
      opacity: {
        '70': '0.7',
      },
      spacing: {
        '10vh': '10vh',
        '10vh': '10vh',
      },
      width: {
        'footer-width': '90%', 
      },
      height: {
        '10vh': '10vh',
      },
      maxHeight: {
        'full': '100%',
      },
    },
  },
  plugins: [],
}
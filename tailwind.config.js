/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "976",
      xl: "1440px"
    },
    extend: {
      colors: {
        neonLime: 'hsl(75, 94%, 57%)',
        white: 'hsl(0, 0%, 20%)',
        darkGray: 'hsl(0, 0%, 12%)',
        offBlack: 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        sans: ["Inter", 'sans-serif']
      }
    },
  },
  plugins: [],
}


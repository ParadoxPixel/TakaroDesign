module.exports = {
  purge: {
    enabled: false,
    content: ['./public/**/*.html'],
  },
  darkMode: false,
  theme: {
    extend: {
      width: {
        fit: 'fit-content'
      },
      maxWidth: {
        '5/6-screen': '83.3333333vw'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
      require('@tailwindcss/line-clamp')
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  //...
  content: [
    './src/**/*.{html,js}',
  ],
<<<<<<< HEAD
  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional)
=======
  plugins: [require('daisyui')],
>>>>>>> 8b06ce9bd9c9daf50cdb9755542de6702b983b24
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
<<<<<<< HEAD
}
=======
}
>>>>>>> 8b06ce9bd9c9daf50cdb9755542de6702b983b24

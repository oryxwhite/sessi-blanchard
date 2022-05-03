module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      xs: '380px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
    },
  },
  // plugins: [require('flowbite/plugin')]
  
  // purge: [
  //   "./pages/**/*.tsx",
  //   "./pages/**/*.js",
  //   "./pages/**/*.ts",
  //   "./components/**/*.tsx",
  //   "./components/**/*.js",
  //   "./components/**/*.ts",
  // ],
   
}


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
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        dracula: {
          ...require("daisyui/src/colors/themes")["[data-theme=luxury]"],
          "base-100": "#0d0100"
        }
      }
    ]
  }
  
  // purge: [
  //   "./pages/**/*.tsx",
  //   "./pages/**/*.js",
  //   "./pages/**/*.ts",
  //   "./components/**/*.tsx",
  //   "./components/**/*.js",
  //   "./components/**/*.ts",
  // ],
   
}


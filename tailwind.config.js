image.pngmodule.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2b6777',
        secondary: '#c8d8e4',
        background: '#ffffff',
        surface: '#f2f2f2',
        accent: '#52ab98',
      },
    },
  },
  plugins: [],
}; 
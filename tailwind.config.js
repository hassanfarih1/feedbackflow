/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dotted-pattern': 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.05) 25%, transparent 25%)',
      },
      backgroundSize: {
        'dotted-pattern': '30px 30px',
      },
      colors: {
        colorBg:'#FFF6EA',
        colorTextf:'#C68FE6',
      },
    },
  },
  plugins: [],
};

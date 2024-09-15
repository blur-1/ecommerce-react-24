/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: "#e14d65",
        secondary:"#a91dcd",
      },
      container:{
        center: true,
        padding:{
          DEFAULT: "2rem",
          sm:"4rem",
        }
      },
      backgroundImage: {
        'custom-bg': "url('src/assets/blob-scene-haikei.svg')",
      },
    },
  },
  plugins: [],
}
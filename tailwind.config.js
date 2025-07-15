/** @type {import('tailwindcss').Config} */
export default {
  content: [`./index.html`, `./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      colors: {
        "main-white": "#FBF7FF",
        "dark-purple": "#483AA0",
        "main-blue": "#1ab9e5",
        "main-black": "#2C2E3E",
        "main-gray": "#D6D6D6",
        "main-green": "#59DF17",
        "main-brown": "#E3D095",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
    plugins: [],
  },
};

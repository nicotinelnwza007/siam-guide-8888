import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      colors: {
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        drift: {
          '0%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(10px, -10px)' },
          '100%': { transform: 'translate(-10px, 10px)' },
        },
      },
      animation: {
        twinkle: 'twinkle 2s infinite alternate ease-in-out',
        drift: 'drift 5s infinite alternate ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;

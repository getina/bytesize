import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorantGaramond: ["var(--font-cormorant-garamond)", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        customGray: '#141414', 
        customWhite: '#F3F5F5',
      },
    },
  },
  plugins: [],
}

export default config

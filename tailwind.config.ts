import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
          'pos-0': '0% 0%',
          'pos-100': '100% 100%',
      },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#599B41',
        secondary: '#79BD61',//'#63AD48',
        primaryGray: '#171717',
        secondaryGray: '#2E2E2E',
        textGray: '#D2D2D2',
      },
      screens: {
        'sm': {'max': '434px'},
        'md': {'min': '435px', 'max': '768px'},
        'mdl': {'min': '769px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1440px'},
        'xl': {'min': '1441px'},
      },
    },
  },
  plugins: [],
};
export default config;

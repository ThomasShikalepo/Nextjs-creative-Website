
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)']
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))'
      },
      backgroundImage: {
     'firefly-radial': "radial-gradient(circle at 50% 50%, rgba(253, 255, 150, 0.6) 10%, rgba(255, 200, 50, 0.3) 40%, rgba(217, 217, 217, 0) 100%)"
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgb(254,254,0.05)',
        'glass-sm': '5px 5px 20px 0px rgb(254,254,0.3)',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite'
      },
      screen: {
        xs: '480px'
      }
    },
  },
  plugins: [],
};

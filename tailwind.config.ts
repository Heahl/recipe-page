import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'primary-nutmeg' : 'hsl(14, 45%, 36%)',
        'primary-dark-raspberry' : 'hsl(332, 51%, 32%)',
        'white' : 'hsl(0, 0%, 100%)',
        'rose-white' : 'hsl(330, 110%, 98%)',
        'eggshell' : 'hsl(30, 54%, 90%)',
        'wenge-brown' : 'hsl(30, 10%, 34%)',
        'dark-charcoal' : 'hsl(24, 5%, 18%)',
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        'young-serif': ['YoungSerif', 'serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

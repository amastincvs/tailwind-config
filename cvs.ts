import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const cvs = {
  content: [
    './src/**/*.{html,js,ts,tsx}',
    './index.html',
    './public/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['CVS Health Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  }
} satisfies Config

export { cvs }

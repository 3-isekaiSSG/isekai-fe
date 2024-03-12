import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
      backgroundImage: {
        'header-gradient':
          'linear-gradient(to right, #e0d01b, #ff9a67 8%, #ff4f4d 38%, #cd47ff 71%, #6a59ff)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config

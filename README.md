<!-- how to work Dark mode  -->

1. npm uninstall tailwindcss @tailwindcss/vite
2. npm install -D tailwindcss@3 postcss autoprefixer
3.  npx tailwindcss init -p


<!-- // vite.config.js -->
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
})


<!-- tailwind.config.js -->

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
}


<!-- index.css -->
❌ Make sure you do NOT have lines like:
@import 'tailwindcss';
@import 'tailwindcss/lib/index.js';

<!-- Check your CSS file (src/index.css or main.css). -->

@tailwind base;
@tailwind components;
@tailwind utilities;

<!-- npm run dev -->

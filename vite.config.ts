import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  assetsInclude: ['**/*.PNG'],  // Add this line
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  base: './', // Ensure base path is set for Vercel
});

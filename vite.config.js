import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    },
    // Tüm statik dosyaları kopyala
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.json', '**/*.js']
  },
  server: {
    port: 3000,
    open: true
  }
});
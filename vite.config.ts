import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/wp-json': {
        target: 'https://paginawebeconomica.org/blog',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

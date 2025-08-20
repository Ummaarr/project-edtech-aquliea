import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-site/', // 👈 IMPORTANT LINE
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  server: {
    hmr: {
      timeout: 5000
    }
  }
});

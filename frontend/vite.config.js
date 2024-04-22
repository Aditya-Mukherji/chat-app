import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        // Disable SSL verification to avoid issues with self-signed certificates in local development
        // Remove this option in production if you have a valid SSL certificate
        secure: false,
        // Rewrite the path to remove '/api' when forwarding the request to the backend
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

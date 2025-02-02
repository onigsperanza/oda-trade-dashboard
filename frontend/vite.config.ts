import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // React app will run on port 3000
  },
  resolve: {
    alias: {
      '@': '/src', // Alias for easier imports from the src directory
    },
  },
});

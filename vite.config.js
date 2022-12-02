import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'sidur/about.html'),
        cart: resolve(__dirname, 'sidur/cart.html'),
        education: resolve(__dirname, 'sidur/education.html'),
        services: resolve(__dirname, 'sidur/services.html'),
      },
    },
  },
});

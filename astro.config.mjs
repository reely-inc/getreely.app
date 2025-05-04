// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Ensure static output to avoid SSR issues
  integrations: [react()],
  
  // Configure 404 handling for Cloudflare Pages
  build: {
    format: 'file'
  },
  
  // Enable trailingSlash: 'never' to ensure consistent URL handling
  trailingSlash: 'never',
  
  // Add a custom 404 page that will handle our dynamic routes
  // This is important for Cloudflare Pages and other static hosts
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {},
        },
      },
    },
  },
});
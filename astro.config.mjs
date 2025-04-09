// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Ensure static output to avoid SSR issues
  integrations: [react()],
});
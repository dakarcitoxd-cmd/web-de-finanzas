import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://web-de-finanzas.pages.dev',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});

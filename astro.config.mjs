import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://web-de-finanzas.pages.dev',
  integrations: [mdx(), sitemap(), partytown()],
  vite: {
    plugins: [tailwindcss()],
  },
});

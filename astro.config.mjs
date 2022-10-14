import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import image from '@astrojs/image';
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  // @todo  Change to productive environment
  site: 'https://michzuerch.github.io/',
  base: '/PrivaterAutomarkt5',
  build: {
    format: 'file'
  },
  integrations: [tailwind(), mdx(), sitemap(), svelte(), image(), alpinejs()]
});
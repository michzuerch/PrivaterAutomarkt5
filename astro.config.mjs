import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	//@todo  Change to productive environment
	site: 'http://localhost:3000',
	integrations: [tailwind(), mdx(), sitemap()],
});

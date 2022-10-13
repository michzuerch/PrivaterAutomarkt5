import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
export default defineConfig({
	//@todo  Change to productive environment
	site: "https://michzuerch.github.io",
  //base: "/PrivaterAutomarkt5",
	integrations: [tailwind(), mdx(), sitemap(), svelte()],
});

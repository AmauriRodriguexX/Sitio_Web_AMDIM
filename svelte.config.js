import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			// En GitHub Pages el sitio vive en /Sitio_Web_AMDIM/ (no en la raíz del dominio).
			// El workflow de despliegue define BASE_PATH; en local (npm run dev / build) queda vacío.
			base: process.env.BASE_PATH ?? ''
		}
	}
};

export default config;

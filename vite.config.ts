import { sveltekit } from '@sveltejs/kit/vite';

import { viteStaticCopy } from 'vite-plugin-static-copy';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{
					src: 'data/blog/**/*.{png,jpg,jpeg,webp,gif,svg}',
					dest: 'blog',
					rename: { stripBase: 2 }
				}
			]
		})
	],
	test: {
		watch: false,
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

const svgOptions = {};

export default defineConfig({
	plugins: [sveltekit(), svg(svgOptions)]
});

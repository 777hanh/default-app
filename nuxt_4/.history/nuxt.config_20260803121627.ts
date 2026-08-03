// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	app: {
		head: {
			script: [
				{
					key: 'theme-mode-init',
					type: 'text/javascript',
					tagPosition: 'head',
				},
			],
		},
	},
	vite: {
		plugins: [tailwindcss()],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "sass:color";
						@use "sass:map";
						@use "sass:math";
					`,
				},
			},
		},
		server: {
			watch: {
				ignored: ['**/node_modules/**'],
			},
		},
		optimizeDeps: {
			include: [],
		},
	},
	alias: {
		// '@': fileURLToPath(new URL('./app', import.meta.url)),
		'~': fileURLToPath(new URL('./app', import.meta.url)),
	},
	modules: [
		(options, nuxt) => {
			console.log('Custom module loaded');
		},
		'@pinia/nuxt',
		'@vueuse/nuxt',
	],
	pinia: {
		/**
		 * Automatically add stores dirs to the auto imports. This is the same as
		 * directly adding the dirs to the `imports.dirs` option. If you want to
		 * also import nested stores, you can use the glob pattern `./stores/**`
		 * (on Nuxt 3) or `app/stores/**` (on Nuxt 4+)
		 *
		 * @default ['stores']
		 */
		storesDirs: [],
	},

	runtimeConfig: {
		// Private keys are only available on the server
		apiSecret: '123',

		// Public keys that are exposed to the client
		public: {
			apiBase: import.meta.env.NUXT_PUBLIC_API_BASE || '/api',
		},
	},
});

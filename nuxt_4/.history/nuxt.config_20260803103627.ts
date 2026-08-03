// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

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

	modules: ['@pinia/nuxt'],

	alias: {
		'@': fileURLToPath(new URL('./app', import.meta.url)),
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

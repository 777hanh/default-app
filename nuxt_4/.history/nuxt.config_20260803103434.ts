// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';

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
			include: [
				// '@ant-design/icons-vue',
				'@intlify/core',
				'@intlify/core-base',
				'@intlify/message-compiler',
				'@intlify/shared',
				'@intlify/utils/h3',
				'@ant-design/icons-vue',
				'dayjs',
				'dayjs/plugin/advancedFormat',
				'dayjs/plugin/customParseFormat',
				'dayjs/plugin/localeData',
				'dayjs/plugin/quarterOfYear',
				'dayjs/plugin/weekOfYear',
				'dayjs/plugin/weekYear',
				'dayjs/plugin/weekday',
				'ufo',
				'vue-i18n',
			],
		},
		// define: {
		// 	__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
		// },
	},

	modules: [
		'@pinia/nuxt',
		'@vueuse/nuxt',
		'@ant-design-vue/nuxt',
		'@nuxt/icon',
		'@nuxtjs/i18n',
		'@nuxtjs/sitemap',
		'@nuxtjs/robots',
		'nuxt-gtag',
	],

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

// composables/useFontAwesome.ts

export const useFontAwesome = () => {
	useHead({
		link: [{ rel: 'stylesheet', href: '/icons/css/all.min.css' }],
		script: [
			{ src: '/icons/js/brands.min.js' },
			{ src: '/icons/js/duotone-light.min.js' },
			{ src: '/icons/js/duotone.min.js' },
			{ src: '/icons/js/duotone-thin.min.js' },
			{ src: '/icons/js/duotone.min.js' },
			// { src: '/icons/js/fontawesome.min.js', defer: true },
			{ src: '/icons/js/light.min.js' },
			{ src: '/icons/js/regular.min.js' },
			{ src: '/icons/js/sharp-duotone-light.min.js' },
			{ src: '/icons/js/sharp-duotone-regular.min.js' },
			{ src: '/icons/js/sharp-duotone-solid.min.js' },
			{ src: '/icons/js/sharp-duotone-thin.min.js' },
			{ src: '/icons/js/sharp-light.min.js' },
			{ src: '/icons/js/sharp-regular.min.js' },
			{ src: '/icons/js/sharp-solid.min.js' },
			{ src: '/icons/js/sharp-thin.min.js' },
			{ src: '/icons/js/solid.js' },
			{ src: '/icons/js/thin.min.js' },
			{ src: '/icons/js/v4-shims.min.js' },
			{ src: '/icons/js/all.min.js' },
		],
	});
};

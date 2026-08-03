// composables/useFontAwesome.ts
import brandsUrl from '~/assets/icons/js/brands.min.js?url';
import duotoneLightUrl from '~/assets/icons/js/duotone-light.min.js?url';
import duotoneUrl from '~/assets/icons/js/duotone.min.js?url';
import duotoneThinUrl from '~/assets/icons/js/duotone-thin.min.js?url';
import lightUrl from '~/assets/icons/js/light.min.js?url';
import regularUrl from '~/assets/icons/js/regular.min.js?url';
import sharpDuotoneLightUrl from '~/assets/icons/js/sharp-duotone-light.min.js?url';
import sharpDuotoneRegularUrl from '~/assets/icons/js/sharp-duotone-regular.min.js?url';
import sharpDuotoneSolidUrl from '~/assets/icons/js/sharp-duotone-solid.min.js?url';
import sharpDuotoneThinUrl from '~/assets/icons/js/sharp-duotone-thin.min.js?url';
import sharpLightUrl from '~/assets/icons/js/sharp-light.min.js?url';
import sharpRegularUrl from '~/assets/icons/js/sharp-regular.min.js?url';
import sharpSolidUrl from '~/assets/icons/js/sharp-solid.min.js?url';
import sharpThinUrl from '~/assets/icons/js/sharp-thin.min.js?url';
import solidUrl from '~/assets/icons/js/solid.js?url';
import thinUrl from '~/assets/icons/js/thin.min.js?url';
import v4ShimsUrl from '~/assets/icons/js/v4-shims.min.js?url';
import allUrl from '~/assets/icons/js/all.min.js?url';

export const useFontAwesome = () => {
	useHead({
		link: [{ rel: 'stylesheet', href: '/icons/css/all.min.css' }],
		script: [
			{ src: brandsUrl, defer: true },
			{ src: duotoneLightUrl, defer: true },
			{ src: duotoneUrl, defer: true },
			{ src: duotoneThinUrl, defer: true },
			{ src: lightUrl, defer: true },
			{ src: regularUrl, defer: true },
			{ src: sharpDuotoneLightUrl, defer: true },
			{ src: sharpDuotoneRegularUrl, defer: true },
			{ src: sharpDuotoneSolidUrl, defer: true },
			{ src: sharpDuotoneThinUrl, defer: true },
			{ src: sharpLightUrl, defer: true },
			{ src: sharpRegularUrl, defer: true },
			{ src: sharpSolidUrl, defer: true },
			{ src: sharpThinUrl, defer: true },
			{ src: solidUrl, defer: true },
			{ src: thinUrl, defer: true },
			{ src: v4ShimsUrl, defer: true },
			{ src: allUrl, defer: true },
		],
	});
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			borderRadius: {
				'rounded-sm': 'var(--border-radius-rounded-sm)',
				rounded: 'var(--border-radius-rounded)',
				md: 'var(--border-radius-rounded-md)',
				lg: 'var(--border-radius-rounded-lg)',
				xl: 'var(--border-radius-rounded-xl)',
				'2xl': 'var(--border-radius-rounded-2xl)',
				'3xl': 'var(--border-radius-rounded-3xl)',
				full: 'var(--border-radius-rounded-full)',
			},
			colors: {
				primary: 'var(--colors-blue-600)',
				secondary: 'var(--colors-green-600)',
				tertiary: 'var(--colors-orange-600)',
				quaternary: 'var(--colors-red-600)',
				quinary: 'var(--colors-cyan-600)',
				muted: 'var(--colors-gray-600)',
			},
			// 		colors: {
			// 			primary: {
			// 				white: 'var(--colors-primary-white)',
			// 				black: 'var(--colors-primary-black)',
			// 				blue: {
			// 					50: 'var(--colors-primary-blue-50)',
			// 					100: 'var(--colors-primary-blue-100)',
			// 					200: 'var(--colors-primary-blue-200)',
			// 					300: 'var(--colors-primary-blue-300)',
			// 					400: 'var(--colors-primary-blue-400)',
			// 					500: 'var(--colors-primary-blue-500)',
			// 					600: 'var(--colors-primary-blue-600)',
			// 					700: 'var(--colors-primary-blue-700)',
			// 					800: 'var(--colors-primary-blue-800)',
			// 					900: 'var(--colors-primary-blue-900)',
			// 					950: 'var(--colors-primary-blue-950)',
			// 				},
			// 				green: generateScale('green', 'primary'),
			// 				orange: generateScale('orange', 'primary'),
			// 				red: generateScale('red', 'primary'),
			// 				gray: generateScale('gray', 'primary'),
			// 			},
			// 			secondary: {
			// 				yellow: generateScale('yellow', 'secondary'),
			// 				emerald: generateScale('emerald', 'secondary'),
			// 				lime: generateScale('lime', 'secondary'),
			// 				indigo: generateScale('indigo', 'secondary'),
			// 				sky: generateScale('sky', 'secondary'),
			// 				cyan: generateScale('cyan', 'secondary'),
			// 				teal: generateScale('teal', 'secondary'),
			// 				violet: generateScale('violet', 'secondary'),
			// 				purple: generateScale('purple', 'secondary'),
			// 				fuchsia: generateScale('fuchsia', 'secondary'),
			// 				pink: generateScale('pink', 'secondary'),
			// 				rose: generateScale('rose', 'secondary'),
			// 				brown: generateScale('brown', 'secondary'),
			// 			},
			// 		},
		},
	},
	plugins: [],
};

// Hàm bổ trợ để tránh viết lặp đi lặp lại 50-950
function generateScale(name, prefix = 'primary') {
	const scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
	const obj = {};
	scales.forEach((s) => {
		obj[s] = `var(--colors-${name}-${s})`;
	});
	return obj;
}

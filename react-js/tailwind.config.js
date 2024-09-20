/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	media: false, // or 'media' or 'class'
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem'
			},
			center: true,
			screens: {
				sm: '540px',
				md: '720px',
				lg: '960px',
				xl: '1140px',
				xxl: '1320px'
			}
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1400px'
		},
		extend: {
			colors: {
				black: '#0a0a0a',
				white: '#fafafa',
				grey: '#ebe8e8',
				disable: '#9b9b9b'
			},
			fontFamily: {
				primary: 'inherit',
				secondary: 'inherit'
			},
			boxShadow: {
				custom1: '0px 2px 40px 0px rgba(8, 70,78,0.08)',
				custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};

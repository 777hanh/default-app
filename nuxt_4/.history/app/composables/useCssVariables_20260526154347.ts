import { ref, watch, nextTick, onMounted, type Ref } from 'vue';
import { useDarkMode } from './useDarkMode';

/**
 * Composable to read CSS custom properties from :root element
 * This creates a reactive connection between main.css variables and the application
 *
 * SSR-Safe: Returns empty strings during server-side rendering
 * Dark Mode Reactive: Automatically updates when dark mode toggles
 *
 * Optimized:
 * - Initializes refs immediately on client setup to avoid FOUC and double render.
 * - Single watcher for all 40+ variables to prevent multiple layout recalculations.
 * - Avoids multiple computed updates in antdTheme.
 */
export function useCssVariables() {
	// Get dark mode state to watch for changes
	const { isDark } = useDarkMode();

	const variables = {
		// Primary Colors - Blue Scale
		primaryBlue50: '--colors-blue-50',
		primaryBlue100: '--colors-blue-100',
		primaryBlue200: '--colors-blue-200',
		primaryBlue300: '--colors-blue-300',
		primaryBlue400: '--colors-blue-400',
		primaryBlue500: '--colors-blue-500',
		primaryBlue600: '--colors-blue-600',
		primaryBlue700: '--colors-blue-700',
		primaryBlue800: '--colors-blue-800',
		primaryBlue900: '--colors-blue-900',

		// Primary Colors - Green Scale
		primaryGreen50: '--colors-green-50',
		primaryGreen100: '--colors-green-100',
		primaryGreen300: '--colors-green-300',
		primaryGreen400: '--colors-green-400',
		primaryGreen500: '--colors-green-500',
		primaryGreen600: '--colors-green-600',
		primaryGreen700: '--colors-green-700',

		// Primary Colors - Orange Scale
		primaryOrange50: '--colors-orange-50',
		primaryOrange100: '--colors-orange-100',
		primaryOrange300: '--colors-orange-300',
		primaryOrange400: '--colors-orange-400',
		primaryOrange500: '--colors-orange-500',
		primaryOrange600: '--colors-orange-600',
		primaryOrange700: '--colors-orange-700',

		// Primary Colors - Red Scale
		primaryRed50: '--colors-red-50',
		primaryRed100: '--colors-red-100',
		primaryRed300: '--colors-red-300',
		primaryRed400: '--colors-red-400',
		primaryRed500: '--colors-red-500',
		primaryRed600: '--colors-red-600',
		primaryRed700: '--colors-red-700',

		// Primary Colors - Rose Scale
		primaryRose50: '--colors-rose-50',
		primaryRose100: '--colors-rose-100',
		primaryRose300: '--colors-rose-300',
		primaryRose400: '--colors-rose-400',
		primaryRose500: '--colors-rose-500',
		primaryRose600: '--colors-rose-600',
		primaryRose700: '--colors-rose-700',

		// Primary Colors - Gray Scale
		primaryGray50: '--colors-gray-50',
		primaryGray100: '--colors-gray-100',
		primaryGray200: '--colors-gray-200',
		primaryGray400: '--colors-gray-400',
		primaryGray500: '--colors-gray-500',
		primaryGray600: '--colors-gray-600',
		primaryGray700: '--colors-gray-700',
		primaryGray800: '--colors-gray-800',
		primaryGray900: '--colors-gray-900',

		// Secondary Colors - Cyan Scale
		secondaryCyan50: '--colors-cyan-50',
		secondaryCyan100: '--colors-cyan-100',
		secondaryCyan300: '--colors-cyan-300',
		secondaryCyan400: '--colors-cyan-400',
		secondaryCyan500: '--colors-cyan-500',
		secondaryCyan600: '--colors-cyan-600',
		secondaryCyan700: '--colors-cyan-700',

		// White & Black
		primaryWhite: '--colors-white',
		primaryBlack: '--colors-black',
	};

	function readCssVar(name: string): string {
		if (typeof window === 'undefined' || typeof document === 'undefined') {
			return '';
		}

		return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
	}

	const isClient = typeof window !== 'undefined';
	const colors: Record<keyof typeof variables, Ref<string>> = {} as any;

	// Initialize variables: always start with empty string to match SSR and prevent hydration mismatch
	for (const [key] of Object.entries(variables)) {
		colors[key as keyof typeof variables] = ref('');
	}

	// Batched update of all variables to prevent layout thrashing
	function updateAll() {
		if (!isClient) return;

		// Force the correct theme class on documentElement before reading style properties.
		// This prevents timing issues where Nuxt's useHead or route transition hooks
		// temporarily remove or delay applying the '.dark' class on hydration/mount.
		document.documentElement.classList.toggle('dark', isDark.value);

		const style = getComputedStyle(document.documentElement);
		for (const [key, varName] of Object.entries(variables)) {
			colors[key as keyof typeof variables].value = style.getPropertyValue(varName).trim();
		}
	}

	// Watch theme mode switches (just one watcher instead of 40+)
	watch(
		() => isDark.value,
		async () => {
			await nextTick();
			updateAll();
		},
		{ flush: 'post' }
	);

	// Khởi tạo khi mounted
	onMounted(() => {
		updateAll();
	});

	return colors;
}

/**
 * Helper type for CSS variable values
 */
export type CssVariables = ReturnType<typeof useCssVariables>;

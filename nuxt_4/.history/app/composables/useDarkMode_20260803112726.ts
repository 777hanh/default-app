import { storeToRefs } from 'pinia';
import { useThemeStore } from '~/store/themeStore';

/**
 * Dark mode — single source of truth: Pinia `themeStore` + cookie `theme-mode`.
 * `toggleDark()` updates the cookie, `isDark`, and `<html class="dark">`.
 *
 * (Previously this also used `useColorMode` with a different localStorage key, which
 * could fight Pinia and remove `.dark` on hydrate — breaking Ant Design + CSS variables.)
 */
export function useDarkMode() {
	const themeStore = useThemeStore();
	const { isDark } = storeToRefs(themeStore);

	// SSR + client: put theme on <html> from cookie so first paint matches (no light flash).
	useHead({
		htmlAttrs: {
			class: computed(() => (isDark.value ? 'dark' : '')),
		},
	});

	return {
		isDark,
		toggleDark: () => themeStore.toggleDark(),
	};
}

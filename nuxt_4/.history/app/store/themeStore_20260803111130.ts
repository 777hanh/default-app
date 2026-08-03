import { defineStore } from 'pinia';
import { STORAGE_KEYS_THEME_MODE } from '~/constants';
import { useMediaQuery } from '@vueuse/core';

export const useThemeStore = defineStore('common', () => {
	const isDesktopWidth = useMediaQuery('(min-width: 768px)');
	const isDesktop = ref<boolean>(false);

	const themeCookie = useCookie<'light' | 'dark'>('theme-mode');
	const valThemeMode = ref<'light' | 'dark'>(themeCookie.value ?? 'light');

	const isDark = computed(() => valThemeMode.value === 'dark');

	if (import.meta.client) {
		watch(
			valThemeMode,
			(mode) => {
				themeCookie.value = mode;
				localStorage.setItem(STORAGE_KEYS_THEME_MODE, mode);
				document.documentElement.classList.toggle('dark', mode === 'dark');
			},
			{ immediate: true }
		);
	}

	const toggleDark = () => {
		valThemeMode.value = isDark.value ? 'light' : 'dark';
	};

	watchEffect(
		() => {
			const width = isDesktopWidth;
			isDesktop.value = width.value;
		},
		{ flush: 'post' }
	);

	return { valThemeMode, isDark, isDesktop, toggleDark };
});

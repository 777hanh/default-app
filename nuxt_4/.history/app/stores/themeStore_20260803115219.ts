import { defineStore } from 'pinia';
import { STORAGE_KEYS_THEME_MODE } from '~/constants';

export const useThemeStore = defineStore('common', () => {
	// SSR-safe desktop detection — useMediaQuery from @vueuse/core calls getCurrentInstance()
	// internally which fails in Pinia stores during SSR. We replicate its behavior manually,
	// guarded to client-only via onMounted.
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

	// Replicate useMediaQuery behavior without calling it at store-setup time (SSR-unsafe).
	// Set initial value on mount, then keep in sync via the MediaQueryList change event.
	onMounted(() => {
		const mq = window.matchMedia('(min-width: 768px)');
		isDesktop.value = mq.matches;
		mq.addEventListener('change', (e) => {
			isDesktop.value = e.matches;
		});
	});

	return { valThemeMode, isDark, isDesktop, toggleDark };
});

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCommonStore } from '~/stores/commonStore';

useFontAwesome();

// const themeStore = useThemeStore();

// const { isDark } = storeToRefs(themeStore);

// useHead({
// 	htmlAttrs: {
// 		class: computed(() => (isDark.value ? 'dark' : '')),
// 	},
// });

if (import.meta.client) {
	const commonStore = useCommonStore();
	const { counter } = storeToRefs(commonStore);

	console.log(counter.value);
}
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtWelcome />
	</div>
</template>

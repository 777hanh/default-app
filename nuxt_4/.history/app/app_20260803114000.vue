<script setup lang="ts">
import { storeToRefs, getActivePinia } from 'pinia';

// useFontAwesome();

const themeStore = useThemeStore();

// const { isDark } = storeToRefs(themeStore);
console.log('pinia =', getActivePinia());

// useHead({
// 	htmlAttrs: {
// 		class: computed(() => (isDark.value ? 'dark' : '')),
// 	},
// });
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtWelcome />
	</div>
</template>

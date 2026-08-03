<script setup lang="ts">
import { storeToRefs } from 'pinia';

// useFontAwesome();

const themeStore = useThemeStore();

const { isDark } = storeToRefs(themeStore);

useHead({
	htmlAttrs: {
		class: computed(() => (isDark.value ? 'dark' : '')),
	},
});
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtWelcome />
	</div>
</template>

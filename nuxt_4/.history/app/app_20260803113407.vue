<script setup lang="ts">
import { storeToRefs } from 'pinia';

useFontAwesome();

// const { valThemeMode } = storeToRefs(useThemeStore());

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

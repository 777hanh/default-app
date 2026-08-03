<script setup lang="ts">
import { storeToRefs } from 'pinia';
useFontAwesome();

const isDark = storeToRefs(useThemeStore());

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

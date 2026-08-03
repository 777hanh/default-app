<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemeStore } from '~/stores/themeStore';

useFontAwesome();

const themeStore = useThemeStore();

const { isDark } = storeToRefs(themeStore);
const { toggleDark } = themeStore;

useHead({
	htmlAttrs: {
		class: computed(() => (isDark.value ? 'dark' : '')),
	},
});
</script>

<template>
	<div>
		<button class="mt-2 border-2 border-red-500 p-2 text-red-500" @click="toggleDark">
			Toggle dark mode
		</button>
		<NuxtRouteAnnouncer />
		<NuxtWelcome />
	</div>
</template>

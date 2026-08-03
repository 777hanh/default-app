<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemeStore } from '~/stores/themeStore';
import '~/assets/css/main.css';

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
		<div class="flex justify-center bg-gray-800">
			<button
				class="mx-auto my-2 cursor-pointer border-2! border-indigo-500! p-2 text-red-400"
				@click="toggleDark"
			>
				Toggle dark mode
			</button>
		</div>
		<NuxtRouteAnnouncer />
		<NuxtWelcome />
	</div>
</template>

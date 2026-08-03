<script setup lang="ts">
import '~/assets/css/main.css';
import { storeToRefs } from 'pinia';
import { useThemeStore } from '~/stores/themeStore';
import { RepositoryFactory } from '~/repository';

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
		<div class="flex flex-col justify-center bg-gray-800">
			<button
				class="mx-auto my-2 cursor-pointer border-2! border-indigo-500! p-2 text-red-400"
				@click="toggleDark"
			>
				Toggle dark mode
			</button>

			<div class="flex gap-4 py-2">
				<ClientOnly>
					<i class="fa-sharp-duotone fa-solid fa-bee"></i>
					<i class="fa-duotone fa-solid fa-circle-user"></i>
					<i class="fa-sharp fa-solid fa-web-awesome"></i>
				</ClientOnly>
			</div>
		</div>
		<NuxtRouteAnnouncer />
		<NuxtWelcome />
	</div>
</template>

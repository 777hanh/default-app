<script setup lang="ts">
const appConfig = useAppConfig();

useFontAwesome();
useDarkMode();
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtWelcome />
	</div>
</template>

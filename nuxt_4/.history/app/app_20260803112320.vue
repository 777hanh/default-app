<script setup lang="ts">
const appConfig = useAppConfig();

useFontAwesome();
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtWelcome />
	</div>
</template>

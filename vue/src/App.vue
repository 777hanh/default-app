<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import { pathNames } from '@/constants';
	import { IonHeader } from '@ionic/vue';
	import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
	<ion-page class="container" :scroll-y="true">
		<IonHeader class="header">
			<img
				alt="Vue logo"
				class="logo"
				src="@/assets/logo.svg"
				width="125"
				height="125"
			/>

			<div class="wrapper">
				<HelloWorld msg="You did it!" />

				<nav>
					<RouterLink :to="pathNames.home">Home</RouterLink>
					<RouterLink :to="pathNames.demo01">Demo 01</RouterLink>
					<RouterLink to="/hihi">Error Link</RouterLink>
				</nav>
			</div>
		</IonHeader>
		<RouterView />
	</ion-page>
</template>

<style scoped lang="scss">
	@use '@/assets/styles/utils';

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;

		@include utils.Responsive(LG) {
			flex-direction: column;
			justify-content: center;
			height: 100dvh;
		}
	}

	header {
		display: flex;
		place-items: center;
		max-height: 100vh;

		line-height: 1.5;
	}

	.logo {
		display: block;
		margin: 0 auto 2rem;
		width: 56px;
		height: 56px;
	}

	nav {
		width: 100%;
		font-size: 12px;
		text-align: center;
		margin-top: 2rem;
	}

	nav a.router-link-exact-active {
		color: var(--color-text, #f2f2f2);
	}

	nav a.router-link-exact-active:hover {
		background-color: transparent;
	}

	nav a {
		display: inline-block;
		padding: 0 1rem;
		border-left: 1px solid var(--color-border);
	}

	nav a:first-of-type {
		border: 0;
	}

	@media (min-width: 1024px) {
		header {
			display: flex;
			place-items: center;
			padding-right: calc(var(--section-gap) / 4);
		}

		.logo {
			margin: 0 2rem 0 0;
		}

		header .wrapper {
			display: flex;
			place-items: flex-start;
			flex-wrap: wrap;
		}

		nav {
			text-align: left;
			margin-left: -1rem;
			font-size: 1.8rem;

			padding: 1rem 0;
			margin-top: 1rem;
		}
	}
</style>

<script setup lang="ts">
	import { defineProps, ref } from 'vue';

	defineProps({
		name: {
			type: [String, null],
			default: ''
		},
		address: {
			type: String,
			default: 'example address'
		}
	});
	const emit = defineEmits(['model-value', 'model-double-value']);

	const count = ref<any>(0);
	const emitValue = ref<number>(0);
	const data = {
		0: 'item 0',
		1: 'item 1',
		2: 'item 2',
		3: 'item 3',
		4: {
			abc: 'de'
		}
	};

	const clickEmit = () => {
		count.value++;
		emit('model-value', count.value);
	};

	const dbClickEmit = () => {
		emitValue.value = 1000 * count.value;
		emit('model-double-value', emitValue.value);
	};
</script>

<template>
	<p
		class="demo-desc"
		@click="clickEmit"
		@dblclick.prevent.stop="dbClickEmit"
	>
		Demo Component
	</p>
	<p class="demo-content">
		<slot></slot>
		<slot name="desc" :data="data"></slot>
	</p>

	<p class="name">{{ name }}</p>
	<p class="address">{{ address }}</p>
</template>

<style scoped>
	.demo-content {
		color: greenyellow;
	}

	::v-deep(.demo-value) {
		color: yellow;
	}
</style>

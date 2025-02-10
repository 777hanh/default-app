<script setup lang="ts">
	import { reactive, ref, shallowRef } from 'vue';
	import { IonContent } from '@ionic/vue';

	import DemoComponent from '@/components/demoComponent.vue';
	import HelloWorld from '@/components/HelloWorld.vue';
	import TheWelcome from '@/components/TheWelcome.vue';

	const isShowParagraph = ref(false);
	const childData = ref<string>('');
	const dbChildData = ref<any>(null);
	const listData = reactive({
		0: 'item 01',
		1: 'item 02',
		2: 'item 03',
		3: 'item 04',
		4: 'item 05',
		5: 'item 06',
		6: 'item 07',
		7: 'item 08',
		8: 'item 09',
		9: 'item 10'
	});
	const countData = ref(Object.keys(listData).length);
	const componentSelected = shallowRef(null);

	const handleToggleShowParagraph = () => {
		isShowParagraph.value = !isShowParagraph.value;
	};

	const handleAddItem = () => {
		listData[countData.value + 1] =
			`item ${countData.value + 1 < 10 ? (++countData.value).toString().padStart(2, '0') : ++countData.value}`;
		console.log(listData);
	};

	const handleRemoveItem = (index: number) => {
		if (index === Object.keys(listData).length - 1) {
			countData.value--;
		}
		delete listData[index];
	};

	const handleRemoveAllItem = () => {
		Object.keys(listData).forEach((key) => {
			delete listData[key];
		});
		countData.value = 0;
	};

	const handleSelectComponent = (component: any) => {
		componentSelected.value = component;
		demoDialog.value.showModal();
		// let timer = setTimeout(() => {
		// 	clearTimeout(timer);
		// 	demoDialog.value.close();
		// }, 3000);
	};

	const listRef = ref<any>(null);
	const demoDialog = ref<any>(null);
	const handleEmit = (data: any) => (dbChildData.value = data);
</script>

<template>
	<IonContent>
		<div class="wrapper">
			<!--Conditionally Demo-->
			<section>
				<h3>Conditionally render</h3>
				<p v-if="isShowParagraph">
					Content Rendered when isShowParagraph is
					{{ isShowParagraph }}.
				</p>
				<p v-else>
					The isShowParagraph is {{ isShowParagraph }} (>.<).
				</p>

				<div class="button-wrap">
					<button @click="handleToggleShowParagraph">
						Show Paragraph
					</button>
				</div>
			</section>

			<!--Render List Data-->
			<section>
				<h3>Lists of Data</h3>
				<div
					v-if="Object.keys(listData).length > 0"
					class="list"
					ref="listRef"
				>
					<p
						class="item"
						v-for="(item, index) in listData"
						:key="index"
						@click="handleRemoveItem(index)"
					>
						{{ item }}
						<input type="text" @click.stop />
					</p>
				</div>
				<p v-else>The List Data is Empty (>.<) !!!.</p>

				<div class="button-wrap">
					<button @click="handleAddItem">Add Item</button>
					<button @click="handleRemoveAllItem">
						Remove All Item
					</button>
				</div>

				<dialog class="dialog" ref="demoDialog">
					<h1>This is Dialog</h1>
					<button @click.prevent.stop="demoDialog.close()">OK</button>
				</dialog>
			</section>

			<section>
				<DemoComponent
					:name="`777hanh`"
					address="example.com"
					@model-value="(e) => (childData = e)"
					@ModelDoubleValue="handleEmit"
					>{{ childData
					}}<span class="demo-value" v-if="dbChildData">
						- {{ dbChildData }}</span
					>
					<template #desc="desc">
						<div v-for="(item, key) in desc.data" :key="key">
							{{ item }}
						</div>
					</template>
				</DemoComponent>
			</section>

			<section>
				<button @click="handleSelectComponent(HelloWorld)">
					HelloWorld
				</button>
				<button @click="handleSelectComponent(TheWelcome)">
					HelloWorld
				</button>
				<KeepAlive>
					<component
						:is="componentSelected"
						v-bind="
							componentSelected === HelloWorld
								? { msg: '777hanh' }
								: {}
						"
					></component>
				</KeepAlive>
			</section>
		</div>
	</IonContent>
</template>

<style lang="scss" scoped>
	.wrapper {
		padding: 20px 24px;
		width: 100%;
		min-height: 100dvh;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.button-wrap {
		display: flex;
		gap: 6px;
	}

	button {
		margin-top: 8px;
		cursor: pointer;
		padding: 4px 10px;
		border-radius: 4px;
	}

	.list {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-auto-rows: 1fr;
		gap: 10px;
	}

	.item {
		width: 100%;
		height: 140px;
		background: #333;

		&--large {
			height: 200px;
		}
	}

	.demo-value {
		color: aqua;
	}

	.dialog {
		&::backdrop {
			background-image: linear-gradient(
				45deg,
				magenta,
				rebeccapurple,
				dodgerblue,
				green
			);
			opacity: 0.75;
		}
	}
</style>

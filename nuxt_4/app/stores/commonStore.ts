import { defineStore, createPinia, setActivePinia } from 'pinia';

export const useCommonStore = defineStore('common', () => {
	const counter = ref(0);
	const increment = () => counter.value++;
	return { counter, increment };
});

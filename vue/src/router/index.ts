import { createRouter, createWebHistory, Router } from 'vue-router';
import { pathNames } from '@/constants';

interface CustomRouter extends Router {
	pages: any[];
	first: string;
}

const importView = (name: string): Promise<any> =>
	import(/* webpackChunkName: "[request]" */ `@/views/${name}/index.ts`);

const router: CustomRouter = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: pathNames.home,
			name: 'HomeView',
			meta: {
				title: 'Home'
			},
			component: () => importView('HomeView').then()
		},
		{
			path: pathNames.demo01,
			name: 'Demo01View',
			meta: {
				title: 'Demo 01'
			},
			component: () => importView('Demo01View').then()
		},
		{
			path: pathNames.notFound,
			name: 'NotFoundView',
			meta: {
				title: '404 Not Found'
			},
			component: () => importView('NotFoundView').then()
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: pathNames.notFound
		}
	]
}) as CustomRouter;

router.pages = [];
router.first = '';

router.beforeEach((to, from) => {
	router.pages.push(to);
	if (!router.first) {
		router.first = `${to.path}`;
	}
});

router.afterEach((to) => {
	document.title =
		to.meta.title && typeof to.meta.title === 'string'
			? `${to.meta.title}`
			: 'Demo Project';

	let link = document.querySelector('link[rel="icon"]');
	if (!link) {
		link = document.createElement('link');
		(link as HTMLLinkElement).rel = 'icon';
		document.head.appendChild(link);
	}
	(link as HTMLLinkElement).href =
		to.meta.icon && typeof to.meta.icon === 'string'
			? `${to.meta.icon}`
			: '/assets/svgs/checked.ico';
});

export default router;

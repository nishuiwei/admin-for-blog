import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/main'
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('~/views/login/login-page.vue')
	},
	{
		path: '/main',
		name: 'main',
		component: () => import('~/views/main/main-page.vue'),
		children: [
			{
				path: '/:pathMatch(.*)*',
				name: 'not-found',
				component: () => import('~/views/not-found/not-found-page.vue')
			},
			{
				path: '/main/chat',
				name: 'chat',
				component: () => import('~/views/main/chat/chat-page.vue')
			}
		]
	}
]

const router = createRouter({
	routes,
	history: createWebHistory(),
	scrollBehavior() {
		return {
			el: '#main',
			top: 0,
			behavior: 'smooth'
		}
	}
})

export default router

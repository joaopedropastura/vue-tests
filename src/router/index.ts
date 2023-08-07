import { createRouter, createWebHistory, type RouteRecord, type RouteRecordRaw } from "vue-router";
import Home from '@/components/home.vue'

const routes : Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/product/:id',
		name: 'product-page',
		component: () => import('../views/ProductPage.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
<template>
	<el-menu
		:default-active="defaultActive"
		:collapse="isCollapse"
		background-color="transparent"
		text-color="#fff"
		unique-opened
		router
		@open="handleOpen"
		@close="handleClose"
	>
		<hj-menu-item :menu="menuWrapper" />
	</el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

withDefaults(
	defineProps<{
		isCollapse: boolean
	}>(),
	{
		isCollapse: false
	}
)

const defaultActive = ref<string>('2-1')

onBeforeRouteUpdate((to) => {
	console.log(to)
	const fullPath = to.fullPath
	const currentPath = fullPath.split('/')[1]
	defaultActive.value = currentPath
})

const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}

const menuWrapper = ref([
	{
		index: '1',
		title: '菜单1',
		icon: 'Menu',
		children: []
	},
	{
		index: '2',
		title: '菜单2',
		icon: 'Menu',
		children: [
			{
				index: '2-1',
				title: '菜单2-1',
				icon: 'Menu',
				children: []
			},
			{
				index: '2-2',
				title: '菜单2-2',
				icon: 'Menu',
				children: []
			},
			{
				index: '2-3',
				title: '菜单2-3',
				icon: 'Menu',
				children: []
			}
		]
	},
	{
		index: '/main/chat',
		title: 'Chat',
		icon: 'Menu',
		children: []
	},
	{
		index: '4',
		title: '菜单4',
		icon: 'Menu',
		children: []
	}
])
</script>

<style scoped lang="less">
.el-menu {
	border-right: none;
	font-size: 14px;
	font-weight: 400;
}
</style>

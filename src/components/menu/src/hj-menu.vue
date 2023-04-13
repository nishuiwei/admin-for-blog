<template>
	<el-menu
		:default-active="defaultActive"
		:collapse="isCollapse"
		background-color="transparent"
		text-color="#fff"
		unique-opened
		router
	>
		<hj-menu-item :menu="menuWrapper" />
	</el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMenusStore } from '../../../store/menus'

const store = useMenusStore()

store.setMenusList()

withDefaults(
	defineProps<{
		isCollapse: boolean
	}>(),
	{
		isCollapse: false
	}
)

const menuWrapper = computed(() => {
	return store.getMenusList
})

const defaultActive = computed(() => {
	const route = useRoute()
	const fullPath = route.fullPath
	return fullPath
})
</script>

<style scoped lang="less">
.el-menu {
	border-right: none;
	font-size: 14px;
	font-weight: 400;
}
</style>

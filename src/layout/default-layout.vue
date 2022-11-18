<template>
	<el-container>
		<el-header>
			<div @click="toggleDark()">
				{{ isDark ? 'light' : 'dark' }}
			</div>
			<template v-for="item in icon_item" :key="item">
				<el-icon :size="20" color="#000"> <Icon :icon="item" /> </el-icon>
			</template>
		</el-header>
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-main>
					<slot name="main" />
				</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import { useTheme } from '../composables'
import { Icon } from '../components/icon'
const { isDark, toggleDark } = useTheme

const icon_item = ['Edit']
</script>

<style scoped lang="scss">
.el-header {
	border-bottom: 1px solid var(--border-color);
	height: var(--header-height);
	padding: 0 12px 0 24px;
	background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
	background-size: 4px 4px;
	backdrop-filter: saturate(50%) blur(4px);
	-webkit-backdrop-filter: saturate(50%) blur(4px);
	height: 55px;
}

.el-aside {
	height: calc(100vh - 55px);
}

.el-main {
	height: calc(100vh - 55px - 60px);
	width: calc(100vw - 200px);
}
</style>

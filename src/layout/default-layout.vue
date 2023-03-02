<template>
	<el-container class="default-layout">
		<el-aside>
			<div class="logo">el-aside</div>
		</el-aside>
		<el-container class="right">
			<el-header>
				<div @click="toggleDark()">
					{{ isDark ? 'light' : 'dark' }}
				</div>
				<template v-for="item in icon_item" :key="item">
					<el-icon :size="20" color="#000"> <Icon :icon="item" /> </el-icon>
				</template>
			</el-header>
			<el-main>
				<slot name="main" />
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import { useTheme } from '../composables'
import { Icon } from '../components/icon'
const { isDark, toggleDark } = useTheme

const icon_item = ['Edit']
</script>

<style scoped lang="less">
@height: 80px;
.default-layout {
	display: flex;
	height: 100%;
	.el-aside {
		width: 240px;
		background: linear-gradient(180deg, #1f2935 0%, #425365 100%);
		border-right: 1px solid #8291a9;
		.logo {
			display: flex;
			align-items: center;
			justify-content: center;
			height: @height;
			border-bottom: 1px solid #161d26;
		}
	}
	.right {
		flex: 1;
		display: flex;
		flex-direction: column;
		.el-header {
			background-color: var(--header-background-color);
			height: @height;
		}
		.el-main {
			flex: 1;
			background-color: var(--background-color);
		}
	}
}
</style>

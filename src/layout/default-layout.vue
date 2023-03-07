<template>
	<el-container class="default-layout">
		<el-aside
			class="bg-transition"
			:style="{ width: isCollapse ? '64px' : '240px' }"
		>
			<div class="logo">Hi - Blog</div>
			<hj-menu :is-collapse="isCollapse" />
		</el-aside>
		<el-container class="right">
			<el-header class="bg-transition">
				<hj-header
					:is-collapse="isCollapse"
					@click-collapse="handleClickCollapse"
				/>
			</el-header>
			<el-main id="main" class="bg-transition">
				<slot name="main" />
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCollapse = ref<boolean>(false)

const handleClickCollapse = (collapseSatus: boolean): void => {
	isCollapse.value = collapseSatus
}
</script>

<style scoped lang="less">
@height: 80px;
.default-layout {
	display: flex;
	height: 100%;
	.el-aside {
		user-select: none;
		width: 240px;
		background: linear-gradient(180deg, #1f2935 0%, #425365 100%);
		border-right: 1px solid var(--menu-border-color);
		color: #fff;
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
			padding: 2px 0 0 0;
		}
	}
}
</style>

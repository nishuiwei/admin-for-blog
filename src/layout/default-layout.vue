<template>
	<el-container class="default-layout">
		<el-aside>
			<div class="logo">Hi - Blog</div>
			<hj-menu />
		</el-aside>
		<el-container class="right">
			<el-header>
				<hj-header />
			</el-header>
			<el-main>
				<slot name="main" />
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
@height: 80px;
.default-layout {
	display: flex;
	height: 100%;
	.el-aside {
		user-select: none;
		width: 240px;
		background: linear-gradient(180deg, #1f2935 0%, #425365 100%);
		border-right: 1px solid #8291a9;
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
			transition: background 0.3s ease-in-out;
		}
		.el-main {
			flex: 1;
			background-color: var(--background-color);
			transition: background 0.3s ease-in-out;
		}
	}
}
</style>

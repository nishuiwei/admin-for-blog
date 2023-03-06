<template>
	<div class="chat">
		<!-- 联系人列表 -->
		<div class="chat-person-list bg-transition">
			<!-- search -->
			<div style="height: 60px" />
			<!-- person-list -->
			<person-list />
		</div>
		<!-- 聊天内容 -->
		<div class="chat-content bg-transition">content</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.chat {
	display: flex;
	height: 100%;
	margin-top: 2px;
	&-person-list {
		width: 348px;
		margin-right: 2px;
		background-color: var(--chat-bg-color);
	}

	&-content {
		flex: 1;
		background-color: var(--header-background-color);
	}
}
</style>

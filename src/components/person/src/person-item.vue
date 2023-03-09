<template>
	<div
		class="person bg-transition"
		:class="active ? 'active' : ''"
		:style="itemStyle"
		@click="handleClickItem"
	>
		<!-- 头像 -->
		<div class="person-avatar">
			<el-badge :is-dot="isNotLine" class="item" type="success">
				<el-avatar shape="square" :size="36" :src="avatar" />
			</el-badge>
		</div>
		<!-- 姓名 & 消息 -->
		<div class="person-desc">
			<p class="person-name">{{ name }}</p>
			<p class="text-subtitle message">{{ message }}</p>
		</div>
		<!-- 时间 -->
		<div v-if="index !== null" class="person-time">
			<p class="text-subtitle">{{ time }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
	defineProps<{
		id?: number
		active?: boolean
		avatar: string
		name: string
		message: string
		time: string
		index?: number | null
		isNotLine?: boolean
	}>(),
	{
		id: 0,
		avatar:
			'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
		name: 'Alensa Langwealt',
		message: 'Sending order #238907 Alansca new water inc.',
		time: '9 min',
		isNotLine: true,
		index: null
	}
)
const emits = defineEmits(['clickItem'])
const handleClickItem = (): void => {
	emits(
		'clickItem',
		{ name: props.name, time: props.time, avatar: props.avatar, id: props.id },
		props.index
	)
}

const itemStyle = computed(() => {
	if (props.index === null) {
		return {
			padding: 0,
			'border-top': 'none'
		}
	}
	return {}
})
</script>

<style scoped lang="less">
.person {
	padding: 22px 20px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	border-top: 1px solid var(--person-item-border-color);
	cursor: pointer;
	&:hover {
		background-color: var(--header-background-color);
		opacity: 0.7;
	}
	&:first-child {
		border-top: none;
	}
	&.active {
		background-color: var(--header-background-color);
		border-radius: 5px;
		&:hover {
			opacity: 1;
		}
	}

	&-avatar {
		height: 36px;
		:deep(.el-badge__content) {
			border-color: var(--chat-bg-color) !important;
			border-width: 3px !important;
			transition: color 0.1s;
		}
	}

	&-desc {
		flex: 1;
		margin-left: 20px;
	}

	&-name {
		font-weight: 500;
		color: var(--text-title-color);
		font-size: 14px;
		line-height: 14px;
		margin-bottom: 5px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	&-time {
		flex-shrink: 0;
	}
	.text-subtitle {
		font-weight: 400;
		font-size: 13px;
		color: var(--submenu-color);
		line-height: 18px;
	}

	.message {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
}
</style>

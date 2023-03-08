<template>
	<div class="panel">
		<template v-for="(item, index) in data" :key="index">
			<!-- 回复 -->
			<div class="panel-chat" :class="item.type">
				<div class="panel-chat-main">
					<!-- 头像 -->
					<el-avatar
						shape="square"
						:size="36"
						src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
					/>
					<div class="person-message">
						<!-- 信息 -->
						<div class="message">{{ item.message }}</div>
						<!-- 时间 -->
						<p class="time">10:50AM</p>
					</div>
				</div>
			</div>
			<!-- 发送 -->
		</template>
	</div>
</template>
<script lang="ts" setup>
defineProps<{
	data: [any]
}>()
</script>
<style scoped lang="less">
@margin: 16px;
.panel {
	flex: 1;
	padding: 50px 40px;
	overflow: auto;
	&-chat {
		display: flex;
		flex-direction: column;
		margin-bottom: 50px;
		&.sender {
			flex-direction: column;
			.message {
				margin-right: @margin;
				background-color: var(--chat-bg-color);
				color: var(--text-title-color);
				border-radius: 25px 25px 0 25px;
			}
			.panel-chat-main {
				flex-direction: row-reverse;
			}
			.time {
				left: 5px;
			}
		}
		&.receiver {
			flex-direction: column;
			.message {
				margin-left: @margin;
				background-color: var(--menu-active-color);
				color: #fff;
				border-radius: 25px 25px 25px 0;
			}
			.panel-chat-main {
				flex-direction: row;
			}
			.time {
				right: 5px;
			}
		}
	}

	.person-message {
		position: relative;
	}

	.panel-chat-main {
		display: flex;
		align-items: flex-end;
		.el-avatar {
			flex-shrink: 0;
		}
	}
	.message {
		padding: 12px 20px;
		font-size: 14px;
		font-weight: 500;
		max-width: 570px;
		box-sizing: border-box;
	}
	.time {
		font-weight: 400;
		font-size: 13px;
		color: var(--submenu-color);
		line-height: 18px;
		position: absolute;
		bottom: -22px;
	}
}
</style>

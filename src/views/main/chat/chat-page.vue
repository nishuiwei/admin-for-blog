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
		<div class="chat-content bg-transition">
			<!-- person-panel-header -->
			<div style="height: 60px" />
			<person-panel />
			<!-- person-panel-input -->
			<div class="chat-content-textarea">
				<div class="icon-wrapper">
					<!-- icon 附件 / emjoy -->
					<div class="icon-item">
						<el-icon :size="20">
							<Icon icon="Paperclip" />
						</el-icon>
					</div>
					<div class="icon-item">
						<el-icon :size="20">
							<Icon icon="PictureRounded" />
						</el-icon>
					</div>
				</div>
				<div class="input-wrapper">
					<!-- input -->
					<el-input
						v-model="message"
						autosize
						type="textarea"
						placeholder="Write a message…"
					/>
				</div>
				<div class="btn-wrapper">
					<!-- send -->
					<el-button class="button" :disabled="!message">
						<el-icon :size="14">
							<Icon icon="Promotion" />
						</el-icon>
					</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '../../../components/icon'

const message = ref<string>('')
</script>

<style scoped lang="less">
.chat {
	display: flex;
	height: 100%;
	overflow: hidden;
	&-person-list {
		width: 348px;
		margin-right: 2px;
		background-color: var(--chat-bg-color);
	}
	&-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		background-color: var(--header-background-color);
		&-textarea {
			min-height: 70px;
			height: 100px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: var(--chat-bg-color);
			padding: 0 40px;
			.icon-wrapper {
				display: flex;
				align-items: center;
				.icon-item {
					margin: 0 5px;
					.el-icon {
						display: flex;
						align-items: center;
						cursor: pointer;
						color: var(--submenu-color);
						font-weight: bold;
					}
				}
			}
			.input-wrapper {
				flex: 1;
				:deep(.el-textarea__inner) {
					outline: none;
					border: none;
					box-shadow: none;
					background-color: transparent;
					font-weight: 500;
					color: var(--text-title-color);
					resize: none;
					max-height: 80px;
					&::placeholder {
						color: var(--text-title-color);
						font-weight: 500;
						font-size: 14px;
					}
				}
			}
			.btn-wrapper {
				.button {
					background: var(--send-btn-bg);
					box-shadow: 0px 4px 8px 0px rgba(0, 129, 255, 0.48);
					border: none;
					color: #fff;
					width: 40px;
					height: 40px;
					&:disabled {
						opacity: 0.6;
						color: #ccc;
					}
				}
			}
		}
	}
}
</style>

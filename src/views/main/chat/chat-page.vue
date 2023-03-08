<template>
	<div class="chat">
		<!-- 联系人列表 -->
		<div class="chat-person-list bg-transition">
			<!-- search -->
			<div class="search-container">
				<div class="search-input">
					<!-- icon & input -->
					<el-icon :size="20">
						<Icon icon="Search" />
					</el-icon>
					<el-input v-model="search_input" placeholder="Search..." />
				</div>
				<div class="btn-wrapper">
					<HJIconButton :disabled="!!search_input" icon="Plus" />
				</div>
			</div>
			<!-- person-list -->
			<person-list :data="personListData" />
		</div>
		<!-- 聊天内容 -->
		<div class="chat-content bg-transition">
			<!-- person-panel-header -->
			<div class="person-panel-header">
				<!-- panel-header -->
				<div class="person-header">
					<person-item :id="1" message="Active 4 min ago" />
				</div>
				<div class="more">
					<el-icon :size="17">
						<Icon icon="More" />
					</el-icon>
				</div>
			</div>
			<person-panel :data="messageContentData" />
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
				<div class="btn-wrapper" @click="handleClickSendMessage">
					<!-- send -->
					<HJIconButton icon="Promotion" :disabled="!!message" shadow />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import HJIconButton from '../../../components/button'
import { Icon } from '../../../components/icon'
import PersonItem from '../../../components/person/src/person-item.vue'
import { sendMessage } from '../../../utils/wss'
import {
	connectWithScoketIOServer,
	createChat,
	messageContent
} from './../../../utils/wss'
connectWithScoketIOServer()

const message = ref<string>('')
const search_input = ref<string>('')

const route = useRoute()

interface IPerson {
	id: number
	name: string
	message: string
	time: string
}

const personListData = ref<IPerson[]>([
	{
		id: 1,
		name: '卫慧杰',
		message: '我是卫慧杰',
		time: '6 min'
	},
	{
		id: 2,
		name: '王璇',
		message: '我是王璇',
		time: '10 min'
	}
])

const messageContentData = ref(messageContent)

createChat({
	sender: route.query.sender,
	receiver: route.query.receiver
})

const handleClickSendMessage = async () => {
	await sendMessage({
		message: message.value,
		userId: route.query.receiver,
		id: route.query.sender,
		type: 'sender'
	})

	message.value = ''
}
</script>

<style scoped lang="less">
@border: 1px solid var(--person-header-border-color);
.chat {
	display: flex;
	height: 100%;
	overflow: hidden;
	&-person-list {
		width: 348px;
		// margin-right: 2px;
		border-right: @border;
		background-color: var(--chat-bg-color);
		.search {
			&-container {
				display: flex;
				align-items: center;
				padding: 10px 20px;
				border-bottom: @border;
				height: 60px;
				box-sizing: border-box;
			}
			&-input {
				flex: 1;
				display: flex;
				align-items: center;
				.el-input {
					:deep(.el-input__wrapper) {
						outline: none;
						border: none;
						box-shadow: none;
						background-color: transparent;
						.el-input__inner {
							font-weight: 500;
							color: var(--text-title-color);
							font-size: 14px;
							&::placeholder {
								color: var(--text-title-color);
								font-weight: 500;
							}
						}
					}
				}

				.el-icon {
					color: #8291a9;
				}
			}
		}
	}
	&-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		background-color: var(--header-background-color);
		.person-panel-header {
			padding: 12px 40px;
			display: flex;
			align-items: center;
			height: 60px;
			box-sizing: border-box;
			border-bottom: @border;
			.person-header {
				flex: 1;
			}
			.el-icon {
				transform: rotate(90deg);
			}
		}
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
		}
	}
}
</style>

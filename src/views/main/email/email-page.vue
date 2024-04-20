<template>
	<div class="email">
		<!-- 邮箱条件筛选 -->
		<div class="email-filter">
			<!--  -->
			<div class="email-filter-header bg-transition">
				<div class="add-button">
					<icon-button
						:size="0"
						icon="EditPen"
						btn-style="width: 140px; height: 40px; border-radius: 6px"
						@click="handleCreateData"
					>
						<p class="button-title">Compose</p>
					</icon-button>
				</div>
			</div>
		</div>
		<!-- 联系人列表 -->
		<div class="email-person-list bg-transition">
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
			<person-list :data="personListData" @click-active="handleClickActive" />
		</div>
		<!-- 邮件内容 -->
		<div class="email-content bg-transition">
			<template v-if="isPersonActive"> 邮箱内容 </template>
			<template v-else>
				<el-empty :image-size="200" />
			</template>
		</div>
		<page-modal
			ref="pageModalRef"
			page-name="email"
			:modal-config="modalConfigRef"
			:default-info="defaultInfo"
			type="email"
		/>
	</div>
</template>

<script setup lang="ts">
import HJIconButton from '../../../components/button'
import PageModal from '../../../components/page-modal'
import { ref } from 'vue'
import { Icon } from '../../../components/icon'
import { personContactRequest } from '../../../service/users'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '../../../hooks/usePageModal'
type IPerson = {
	_id?: string
	id: string
	username: string
	email: string
	profilePic: string
	message?: string
	time?: string
}
const modalConfigRef = ref(modalConfig)

const [pageModalRef, defaultInfo, handleCreateData] = usePageModal()
const isPersonActive = ref<boolean>(false)
const personListData = ref<IPerson[]>([])
const getPersonContactList = async () => {
	const response = await personContactRequest()
	personListData.value = response.data.map((item: IPerson) => {
		return {
			...item,
			id: item._id
		}
	})
	modalConfigRef.value.formItems.forEach((item) => {
		if (item.field === 'receiver') {
			response.data.forEach((res: IPerson) => {
				item.options.push({
					label: '@' + res.username,
					value: res.email
				})
			})
		}
	})
}

getPersonContactList()

const handleClickActive = ({
	data,
	personActive
}: {
	data: IPerson
	personActive: boolean
}) => {
	isPersonActive.value = !personActive
	console.log(data, personActive)
}
</script>

<style scoped lang="less">
@border: 1px solid var(--person-header-border-color);
.email {
	display: flex;
	height: 100%;
	overflow: hidden;
	&-filter {
		width: 230px;
		height: 100%;
		background-color: var(--login-box-bg);
		&-header {
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom: 2px solid var(--background-color);
			height: 58px;
			box-sizing: box-sizing;
			.add-button {
				padding-top: 0;
				padding-bottom: 0;
			}
			.button-title {
				font-weight: 700;
				font-size: 13px;
				margin-left: 14px;
			}
		}
	}
	&-person-list {
		width: 348px;
		// margin-right: 2px;
		border-right: @border;
		background-color: var(--email-bg-color);
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
		.el-empty {
			height: 100%;
		}
		&-textarea {
			min-height: 70px;
			height: 100px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: var(--email-bg-color);
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

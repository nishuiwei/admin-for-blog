<template>
	<div class="hj-dialog">
		<el-dialog
			v-model="dialogVisible"
			destroy-on-close
			class="hj-custom-dialog"
		>
			<template #header="{ close, titleId, titleClass }">
				<div class="my-header">
					<h4 :id="titleId" :class="titleClass">{{ title }}</h4>
					<div class="close">
						<el-icon :size="18" @click="close">
							<Icon icon="CloseBold" />
						</el-icon>
					</div>
				</div>
			</template>
			<hj-form v-bind="modalConfig" v-model="formData" />
			<template #footer>
				<div class="dialog-footer">
					<el-button
						type="primary"
						class="confirm-btn"
						@click="handleCreateClick"
					>
						<el-icon :size="18">
							<Icon icon="Select" />
						</el-icon>
						create
					</el-button>
					<el-button class="cancel-btn" @click="handleCancelClick">
						<el-icon :size="18">
							<Icon icon="CloseBold" />
						</el-icon>
						cancel
					</el-button>
				</div>
			</template>
		</el-dialog>
	</div>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { ref, watch } from 'vue'
import HjForm from '../../../base-ui/form'
import { setMenuItemRequest, editMenuItemRequest } from '../../../service/menus'
import { Icon } from '../../icon'

const props = withDefaults(
	defineProps<{
		title: string
		modalConfig: any
		defaultInfo: any
	}>(),
	{
		title: '添加菜单'
	}
)

const formData = ref<any>({})
const dialogVisible = ref(false)

watch(
	() => props.defaultInfo,
	(newValue: any) => {
		for (const item of props.modalConfig.formItems) {
			formData.value[`${item.field}`] = newValue[`${item.field}`]
		}
	},
	{ deep: true }
)

// onUpdated(() => {
// 	defaultInfoRef.value = props.defaultInfo
// })

const handleCreateClick = async () => {
	let response = null
	if (Object.keys(props.defaultInfo)?.length === 0) {
		response = await setMenuItemRequest(formData.value)
	} else {
		console.log(props.defaultInfo)
		response = await editMenuItemRequest(props.defaultInfo.id, formData.value)
	}
	if (response.success) {
		dialogVisible.value = false
		ElMessage.success(response.message)
	}
}

const handleCancelClick = () => {
	for (const key in formData) {
		formData.value[key] = formData[key]
	}
	dialogVisible.value = false
}

defineExpose({
	dialogVisible
})
</script>
<style scoped lang="less">
.my-header {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	justify-content: space-between;
	.el-dialog__title {
		font-weight: 700;
		font-size: 30px;
		margin-top: 10px;
		color: var(--text-title-color);
	}
	.close {
		width: 18px;
		height: 18px;
		border: 2px solid #ff3d57;
		color: #ff3d57;
		border-radius: 5px;
		cursor: pointer;
	}
}
</style>
<style lang="less">
.hj-custom-dialog {
	background-color: var(--login-box-bg);
	border-radius: 6px;
	overflow: hidden;
	.el-dialog__body {
		padding: 30px;
	}
	.el-dialog__headerbtn {
		display: none;
	}
	.el-dialog__header {
		margin-right: 0;
	}
	.el-dialog__footer {
		height: 100px;
		padding: 0 34px 0 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background-color: var(--chat-bg-color);
		.dialog-footer {
			display: flex;
		}
		.el-button {
			border: none;
			outline: none;
			box-shadow: none;
			font-weight: 700;
			font-size: 13px;
			color: #fff;
			width: 108px;
			height: 40px;
			display: flex;
			align-items: center;
			border-radius: 6px;
			&:hover {
				color: #fff;
			}
			.el-icon {
				margin-right: 10px;
			}
		}
		.cancel-btn {
			background-color: var(--cancel-btn-bg);
		}
		.confirm-btn {
			background-color: var(--send-btn-bg);
		}
	}
}
</style>

<template>
	<div class="hj-dialog">
		<el-dialog
			v-model="dialogFormVisible"
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
						@click="dialogFormVisible = false"
					>
						<el-icon :size="18">
							<Icon icon="Select" />
						</el-icon>
						create
					</el-button>
					<el-button class="cancel-btn" @click="dialogFormVisible = false">
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
import { ref } from 'vue'
import HjForm from '../../../base-ui/form'
import { Icon } from '../../icon'

withDefaults(
	defineProps<{
		title: string
	}>(),
	{
		title: '添加菜单'
	}
)

const formData = ref({
	title: ''
})

const modalConfig = {
	labelWidth: 'auto',
	gutter: 40,
	formItems: [
		{
			field: 'label',
			label: '分类名称',
			type: 'input',
			rules: [],
			placeholder: '请输入分类名称',
			colLayout: {
				xl: 12,
				lg: 12,
				md: 12,
				sm: 24,
				xs: 24
			}
		},
		{
			field: 'description',
			label: '分类描述',
			type: 'input',
			rules: [],
			placeholder: '请输入分类的描述',
			colLayout: {
				xl: 12,
				lg: 12,
				md: 12,
				sm: 24,
				xs: 24
			}
		}
	]
}

const dialogFormVisible = ref(true)
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
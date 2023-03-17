<template>
	<div class="hj-form">
		<el-form :label-width="labelWidth" class="hj-custom-form">
			<el-row :gutter="gutter">
				<template v-for="item in formItems" :key="item.label">
					<el-col v-bind="item.colLayout || colLayout">
						<el-form-item>
							<p class="hj-form-label">
								{{ item.label }}
							</p>
							<el-input v-model="formData[item.field]" v-bind="item" />
						</el-form-item>
					</el-col>
				</template>
			</el-row>
		</el-form>
	</div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'

type FormItem = {
	field: string
	type: string
	label: string
	rules: any[]
	placeholder: string
	slotName?: string
	colLayout?: object
}

const props = withDefaults(
	defineProps<{
		colLayout?: object
		formItems: FormItem[]
		labelWidth?: string
		modelValue: object
		gutter?: number
	}>(),
	{
		labelWidth: '100px',
		colLayout() {
			return {}
		},
		gutter: 20
	}
)

const formData = ref<any>({ ...props.modelValue })
const emits = defineEmits(['update:modelValue'])
watch(
	formData.value,
	(newValue) => {
		formData.value = newValue
		console.log(formData)
		emits('update:modelValue', newValue)
	},
	{
		deep: true
	}
)
</script>
<style scoped lang="less">
.hj-form {
	&-label {
		font-weight: 400;
		font-size: 13px;
		color: var(--text-title-color);
	}
}
</style>

<style lang="less">
.hj-custom-form {
	font-family: 'Poppins';
	.el-input__wrapper {
		background-color: var(--chat-bg-color);
		border: 1px solid #cfcfcf;
		box-shadow: none;
		height: 40px;
		box-sizing: border-box;
		.el-input__inner {
			font-weight: 400;
			font-size: 13px;
			color: #000000;
			font-family: 'Poppins';
		}
		&.is-focus {
			box-shadow: none;
		}
	}
}
</style>

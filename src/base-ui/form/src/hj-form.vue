<template>
	<div class="hj-form">
		<el-form :label-width="labelWidth" class="hj-custom-form">
			<el-row :gutter="gutter">
				<template v-for="item in formItems" :key="item.label">
					<el-col v-bind="item.colLayout || colLayout">
						<template v-if="inputType.includes(item.type)">
							<el-form-item>
								<template #label>
									<p class="hj-form-label">
										{{ item.label }}
									</p>
								</template>
								<el-input v-model="formData[item.field]" v-bind="item" />
							</el-form-item>
						</template>
						<template v-if="item.type === 'select'">
							<el-form-item>
								<template #label>
									<p class="hj-form-label">
										{{ item.label }}
									</p>
								</template>
								<el-select v-bind="item" v-model="formData[item.field]">
									<el-option
										v-for="option in item.options"
										:key="option"
										:label="option.label"
										:value="option.label"
									>
										<template #default>
											<el-tag :type="option.type" effect="plain">
												{{ option.label }}
											</el-tag>
										</template>
									</el-option>
								</el-select>
							</el-form-item>
						</template>
					</el-col>
				</template>
			</el-row>
		</el-form>
	</div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'

const inputType = ref(['input', 'textarea'])

type Options = {
	label: string
	value: string
	type: string
}

type FormItem = {
	field: string
	type: string
	label: string
	rules: any[]
	placeholder: string
	slotName?: string
	colLayout?: object
	options?: Options[]
	otherOptions?: any
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
@background: var(--chat-bg-color);
@borderColor: var(--person-header-border-color);
@formColor: var(--form-input-color);
.hj-custom-form {
	font-family: 'Poppins';
	.el-form-item {
		display: block;
	}
	.el-textarea__inner {
		background-color: @background;
		box-shadow: none;
		border: 1px solid @borderColor;
		color: @formColor;
	}
	.el-input__wrapper {
		background-color: @background;
		border: 1px solid @borderColor;
		box-shadow: none;
		height: 40px;
		box-sizing: border-box;
		.el-input__inner {
			font-weight: 400;
			font-size: 13px;
			color: @formColor;
			font-family: 'Poppins';
		}
		&.is-focus {
			box-shadow: none;
		}
	}
}
</style>

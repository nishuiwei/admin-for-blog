<template>
	<el-button
		class="button"
		:style="btnStyle"
		:disabled="!disabled"
		:class="{ shadow: shadow }"
	>
		<el-icon v-if="icon" :size="size">
			<Icon :icon="icon" />
		</el-icon>
		<slot />
	</el-button>
</template>

<script lang="ts" setup>
import { Icon } from '../../icon'

withDefaults(
	defineProps<{
		disabled?: boolean
		icon: string
		shadow?: boolean
		size?: number
		btnStyle?: any
	}>(),
	{
		disabled: true,
		icon: 'Plus',
		size: 14,
		btnStyle: {
			width: 'max-content',
			height: '40px'
		}
	}
)
</script>

<style lang="less" scoped>
.button {
	background: var(--send-btn-bg);
	border: none;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	// font-family: 'Po';
	&:disabled {
		opacity: 0.6;
		color: #ccc;
	}
	&:hover {
		background: var(--send-btn-bg);
	}
	&.shadow {
		box-shadow: 0px 4px 8px 0px rgba(0, 129, 255, 0.48);
	}
}
</style>

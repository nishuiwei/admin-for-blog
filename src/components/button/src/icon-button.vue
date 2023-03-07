<template>
	<el-button class="button" :disabled="!disabled" :class="{ shadow: shadow }">
		<el-icon :size="size">
			<Icon :icon="icon" />
		</el-icon>
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
	}>(),
	{
		disabled: true,
		icon: 'Plus',
		size: 14
	}
)
</script>

<style lang="less" scoped>
.button {
	background: var(--send-btn-bg);
	border: none;
	color: #fff;
	width: 40px;
	height: 40px;
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

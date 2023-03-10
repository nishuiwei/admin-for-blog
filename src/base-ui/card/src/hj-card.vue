<template>
	<div class="hj-card">
		<h2 class="title">{{ title }}</h2>
		<slot />
	</div>
</template>
<script lang="ts" setup>
withDefaults(
	defineProps<{
		title: string
	}>(),
	{
		title: '卡片标题'
	}
)
</script>
<style scoped lang="less">
.hj-card {
	padding: 25px 30px;
	.title {
		font-weight: 700;
		font-size: 30px;
	}
}
</style>

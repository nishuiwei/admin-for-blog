<template>
	<div class="person-list">
		<template v-for="item in 10" :key="item">
			<person-item :item="item" />
		</template>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
.person-list {
	height: calc(100% - 60px);
	overflow: auto;
}
</style>

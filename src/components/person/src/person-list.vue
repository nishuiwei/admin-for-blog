<template>
	<div class="person-list">
		<template v-for="(item, index) in 10" :key="item">
			<person-item
				:active="index === activeIndex"
				:index="index"
				@click-item="handleClickItem"
			/>
		</template>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref<number>(2)

const handleClickItem = (index: number): void => {
	activeIndex.value = index
}
</script>

<style scoped lang="less">
.person-list {
	height: calc(100% - 60px);
	overflow: auto;
}
</style>

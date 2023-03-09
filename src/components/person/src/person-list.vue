<template>
	<div class="person-list">
		<template v-for="(item, index) in data" :key="item.id">
			<person-item
				v-bind="item"
				:active="index === activeIndex"
				:index="index"
				@click-item="handleClickItem"
			/>
		</template>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface IPerson {
	id: number
	name: string
	message: string
	time: string
}

defineProps<{
	data: IPerson[]
}>()

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

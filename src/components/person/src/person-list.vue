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
import { ref, onMounted } from 'vue'

interface IPerson {
	id: number
	name: string
	message: string
	time: string
}

const props = defineProps<{
	data: IPerson[]
}>()

onMounted(() => {
	console.log(props.data)
})

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

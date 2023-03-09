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

type Person = {
	id: number
	name: string
	message: string
	time: string
}

defineProps<{
	data: Person[]
}>()

const activeIndex = ref<number>(2)

const emits = defineEmits(['clickActive'])

const handleClickItem = (data: Person, index: number): void => {
	activeIndex.value = index
	emits('clickActive', { personActive: !data.id, data })
}
</script>

<style scoped lang="less">
.person-list {
	height: calc(100% - 60px);
	overflow: auto;
}
</style>

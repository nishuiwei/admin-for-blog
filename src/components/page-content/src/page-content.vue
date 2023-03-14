<template>
	<div class="page-content">
		<hj-table :list-data="listData" v-bind="contentConfig">
			<template #icon-slot="socpe">
				<el-icon :size="20">
					<Icon :icon="socpe.row.icon" />
				</el-icon>
			</template>
			<template #path-slot="socpe">
				<el-tag type="success">{{ socpe.row.index }}</el-tag>
			</template>
		</hj-table>
	</div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import HjTable from '../../../base-ui/table'
import { Icon } from '../../icon'
import { useGlobalListStore } from './../../../store/global/list'

const props = withDefaults(
	defineProps<{
		defaultInfo?: any
		pageName: string
		prefix?: string
		contentConfig: any
	}>(),
	{
		defaultInfo: {},
		prefix: ''
	}
)

const store = useGlobalListStore()
store.setGlobalListData({
	prefix: props.prefix,
	pageName: props.pageName,
	defaultInfo: props.defaultInfo
})

const listData = computed(() => {
	return store.getGlobalListData(props.pageName)
})

const totalData = computed(() => {
	return store.getGlobalCountData(props.pageName)
})

console.log(totalData)
</script>
<style scoped lang="less"></style>

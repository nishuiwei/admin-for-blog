<template>
	<div class="page-content">
		<hj-table :list-data="listData" v-bind="contentConfig">
			<template #handler>
				<el-dropdown trigger="click" popper-class="hj-dropdown">
					<span class="el-dropdown-link">
						<el-icon :size="20">
							<Icon icon="More" />
						</el-icon>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<template v-for="item in dropList" :key="item.type">
								<el-dropdown-item>{{ item.label }}</el-dropdown-item>
							</template>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</template>
			<template
				v-for="item in otherPropSlots"
				:key="item.prop"
				#[item.slotName]="scope"
			>
				<template v-if="item.slotName">
					<slot :name="item.slotName" :row="scope.row" />
				</template>
			</template>
		</hj-table>
	</div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useGlobalListStore } from './../../../store/global/list'
import { Icon } from './../../icon/index'
import HjTable from '../../../base-ui/table'
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

type dropItem = {
	type: string
	label: string
}

const dropList = ref<dropItem[]>([])
const store = useGlobalListStore()
store.setGlobalListData({
	prefix: props.prefix,
	pageName: props.pageName,
	defaultInfo: props.defaultInfo
})

console.log(props.contentConfig)

const listData = computed(() => {
	return store.getGlobalListData(props.pageName)
})

const totalData = computed(() => {
	return store.getGlobalCountData(props.pageName)
})

const otherPropSlots = props.contentConfig?.propList.filter((item: any) => {
	if (item.slotName === 'handler') {
		dropList.value = item.dropList
		return false
	}
	return true
})

console.log(totalData)
</script>
<style scoped lang="less">
.el-dropdown-link {
	cursor: pointer;
}
</style>

<style lang="less">
.hj-dropdown {
	.el-dropdown-menu {
		width: 80px;
		.el-dropdown-menu__item {
			justify-content: center;
		}
	}
}
</style>

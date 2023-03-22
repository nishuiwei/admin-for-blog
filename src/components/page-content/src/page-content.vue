<template>
	<div class="page-content">
		<hj-table :list-data="listData" v-bind="contentConfig">
			<template #handler="scope">
				<el-dropdown
					trigger="click"
					popper-class="hj-dropdown"
					@command="(item: any) => {
						handleClickOperate(item, scope.row)
					} "
				>
					<span class="el-dropdown-link">
						<el-icon :size="20">
							<Icon icon="More" />
						</el-icon>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<template v-for="item in dropList" :key="item.type">
								<el-dropdown-item :command="item">
									{{ item.label }}
								</el-dropdown-item>
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
import { ElMessageBox } from 'element-plus'
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

const listData = computed(() => {
	return store.getGlobalListData(props.pageName)
})

const totalData = computed(() => {
	return store.getGlobalCountData(props.pageName)
})

// 匹配动态插槽
const otherPropSlots = props.contentConfig?.propList.filter((item: any) => {
	if (item.slotName === 'handler') {
		dropList.value = item.dropList
		return false
	}
	return true
})

console.log(totalData)

const emits = defineEmits(['click-operate'])

type DropItem = {
	label: string
	type: string
}

// 下拉操作按钮
const handleClickOperate = async (item: DropItem, data: any) => {
	emits('click-operate', item, data)
	if (item.type === 'delete') {
		const canRemove = await ElMessageBox.confirm(
			`确定删除该菜单( ${data.title} )么?`,
			'温馨提示',
			{
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}
		)
		if (canRemove === 'confirm') {
			const payload = {
				prefix: props.prefix,
				pageName: props.pageName,
				url: `/${props.pageName}/${data._id}`
			}
			store.removeGlobalItemData(payload)
		}
	}
}
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

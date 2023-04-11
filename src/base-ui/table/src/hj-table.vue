<template>
	<div class="hj-table">
		<el-table
			:data="listData"
			style="width: 100%"
			lazy
			:row-key="rowId"
			:cell-style="cellStyleFn"
			:header-cell-style="headerCellStyleFn"
		>
			<el-table-column v-if="showSortColumn" width="45">
				<div class="sort-icon">:::</div>
			</el-table-column>
			<el-table-column v-if="showCheckColumn" type="selection" width="55" />
			<template v-for="propItem in propList" :key="propItem._id">
				<el-table-column v-bind="propItem">
					<template #default="scope">
						<slot :name="propItem?.slotName" :row="scope.row">
							{{ scope.row[propItem?.prop ?? ''] }}
						</slot>
					</template>
				</el-table-column>
			</template>
		</el-table>
	</div>
</template>
<script lang="ts" setup>
import { onMounted, nextTick } from 'vue'
import Sortable from 'sortablejs'
import type { Options } from 'sortablejs'

type Fn = (item?: any) => any

const props = withDefaults(
	defineProps<{
		listData: any[]
		totalData?: number
		propList: any
		showIndexColumn: boolean
		showCheckColumn: boolean
		showSortColumn: boolean
		rowId: string
		cellStyleFn?: Fn
		headerCellStyleFn?: Fn
	}>(),
	{
		totalData: 0,
		cellStyleFn: () => {
			return {}
		},
		headerCellStyleFn: () => {
			return {}
		}
	}
)

const initSort = () => {
	if (!props.showSortColumn) return
	const tbody = document.querySelector(
		'.el-table .el-table__body-wrapper .el-table__body tbody'
	) as HTMLElement
	console.log(tbody)
	const opts: Options = {
		group: {
			name: 'table',
			pull: false,
			put: false
		},
		invertSwap: true,
		handle: '.sort-icon',
		direction: 'horizontal',
		draggable: '.el-table .el-table__row',
		touchStartThreshold: 3,
		chosenClass: 'chosen',
		forceFallback: true,
		dataIdAttr: 'data-id',
		onEnd: async function (evt: any) {
			if (evt.oldIndex !== evt.newIndex) {
				console.log('排序了')
			}
		}
	}
	Sortable.create(tbody, opts)
}

onMounted(() => {
	nextTick(() => {
		initSort()
	})
})
</script>
<style scoped lang="less">
.hj-table {
	padding: 20px 0;
	:deep(.el-table) {
		background-color: var(--login-box-bg);
		border-radius: 9px;
		.el-table__inner-wrapper {
			&::before {
				content: '';
				height: 0;
			}
		}
		td {
			font-size: 14px;
		}
		th {
			font-size: 16px;
		}
		td,
		th {
			background-color: var(--login-box-bg);
			border-bottom: 2px solid var(--background-color);
			height: 60px;
			color: var(--text-title-color);
			.el-icon {
				color: var(--text-title-color);
			}
			font-weight: 500;
			.el-checkbox__inner {
				border-radius: 6px;
				width: 20px;
				height: 20px;
				&::after {
					left: 50%;
					top: 45%;
					width: 3px;
					transform: translate(-50%, -50%) rotate(45deg) !important;
					border-width: 3px;
					border-radius: 3px;
				}
				&::before {
					height: 3px;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}
		tr {
			background-color: var(--login-box-bg);
			&:hover {
				td {
					background-color: var(--table-hover-bg);
				}
			}
		}
	}
}

.sort-icon {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	transform: rotate(90deg);
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	color: var(--submenu-color);
	text-align: center;
}
</style>

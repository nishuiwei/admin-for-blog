<template>
	<div class="hj-table">
		<el-table
			:data="tableData"
			style="width: 100%"
			lazy
			default-expand-all
			row-key="id"
		>
			<el-table-column type="selection" width="55" />
			<el-table-column prop="date" label="Date" width="180" />
			<el-table-column prop="name" label="Name" width="180" />
			<el-table-column prop="address" label="Address" />
		</el-table>
	</div>
</template>
<script lang="ts" setup>
type TableData = {
	id: number
	date: string
	name: string
	address: string
	children?: TableData[]
}

const tableData: TableData[] = [
	{
		id: 1,
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		id: 2,
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		id: 3,
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		id: 4,
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
		children: [
			{
				id: 5,
				date: '2016-05-01',
				name: 'wangxiaohu',
				address: 'No. 189, Grove St, Los Angeles'
			},
			{
				id: 6,
				date: '2016-05-01',
				name: 'wangxiaohu',
				address: 'No. 189, Grove St, Los Angeles'
			}
		]
	},
	{
		id: 7,
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		id: 8,
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	}
]
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
</style>

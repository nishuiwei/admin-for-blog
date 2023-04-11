export const contentTableConfig = {
	rowId: '_id',
	propList: [
		{
			prop: 'menu_code',
			label: 'code',
			width: 200
		},
		{
			prop: 'title',
			label: '菜单名称'
		},
		{
			prop: 'icon',
			label: '图标',
			slotName: 'icon-slot'
		},
		{
			prop: 'index',
			label: '路径',
			slotName: 'path-slot'
		},
		{
			prop: 'createdAt',
			label: '创建时间',
			slotName: 'createdAt'
		},
		{
			label: '操作',
			slotName: 'handler',
			dropList: [
				{
					type: 'edit',
					label: '编辑'
				},
				{
					type: 'delete',
					label: '删除'
				}
			]
		}
	],
	showIndexColumn: false,
	showCheckColumn: false,
	cellStyleFn: ({ columnIndex }: { columnIndex: number }) => {
		if (columnIndex === 0 || columnIndex === 4) {
			return {
				color: 'var(--submenu-color)'
			}
		}
	},
	headerCellStyleFn: ({ columnIndex }: { columnIndex: number }) => {
		console.log(columnIndex)
		if (columnIndex === 0) {
			return {
				'padding-left': '20px'
			}
		}
	}
}

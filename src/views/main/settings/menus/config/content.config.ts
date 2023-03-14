export const contentTableConfig = {
	rowId: '_id',
	propList: [
		{
			prop: 'menu_code',
			label: 'code'
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
			prop: 'updatedAt',
			label: '更新时间',
			slotName: 'updatedAt'
		}
	],
	showTreeColumn: true,
	showIndexColumn: false,
	showCheckColumn: false
}

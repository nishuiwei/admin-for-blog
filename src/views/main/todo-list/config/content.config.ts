export const contentTableConfig = {
	rowId: '_id',
	propList: [
		{
			prop: 'title',
			label: '',
			slotName: 'todo-slot'
		},
		{
			label: '',
			slotName: 'handler',
			width: '50px',
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
	showCheckColumn: true,
	showSortColumn: true
}

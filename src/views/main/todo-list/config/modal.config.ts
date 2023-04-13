export const modalConfig = {
	labelWidth: 'auto',
	gutter: 40,
	formItems: [
		{
			field: 'title',
			label: '任务标题',
			type: 'input',
			rules: [],
			placeholder: '任务标题',
			colLayout: {
				xl: 24,
				lg: 24,
				md: 24,
				sm: 24,
				xs: 24
			}
		},
		{
			field: 'label_type',
			label: '任务标签',
			type: 'select',
			rules: [],
			placeholder: '任务标签',
			style: {
				width: '100%'
			},
			colLayout: {
				xl: 24,
				lg: 24,
				md: 24,
				sm: 24,
				xs: 24
			},
			multiple: true,
			options: [
				{
					value: 'info',
					type: 'info',
					label: 'Backend'
				},
				{
					value: 'warning',
					type: 'warning',
					label: 'Work'
				},
				{
					value: 'danger',
					type: 'danger',
					label: 'Project'
				},
				{
					value: 'success',
					type: 'success',
					label: 'Issue'
				},
				{
					value: 'Frontkend',
					type: '',
					label: 'Frontkend'
				}
			]
		},
		{
			field: 'notes',
			label: '任务描述',
			type: 'textarea',
			rules: [],
			placeholder: '任务描述',
			colLayout: {
				xl: 24,
				lg: 24,
				md: 24,
				sm: 24,
				xs: 24
			}
		}
	]
}

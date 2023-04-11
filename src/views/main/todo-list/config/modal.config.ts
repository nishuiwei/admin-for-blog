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
			field: 'tags',
			label: '任务标签',
			type: 'input',
			rules: [],
			placeholder: '任务标签',
			colLayout: {
				xl: 24,
				lg: 24,
				md: 24,
				sm: 24,
				xs: 24
			}
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

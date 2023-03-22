export const modalConfig = {
	labelWidth: 'auto',
	gutter: 40,
	formItems: [
		{
			field: 'label',
			label: '分类名称',
			type: 'input',
			rules: [],
			placeholder: '请输入分类名称',
			colLayout: {
				xl: 12,
				lg: 12,
				md: 12,
				sm: 24,
				xs: 24
			}
		},
		{
			field: 'description',
			label: '分类描述',
			type: 'input',
			rules: [],
			placeholder: '请输入分类的描述',
			colLayout: {
				xl: 12,
				lg: 12,
				md: 12,
				sm: 24,
				xs: 24
			}
		}
	]
}

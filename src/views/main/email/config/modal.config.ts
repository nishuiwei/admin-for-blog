export const modalConfig = {
	labelWidth: 'auto',
	gutter: 40,
	formItems: [
		{
			field: 'receiver',
			label: 'To：',
			type: 'select',
			rules: [],
			placeholder: 'To：',
			colLayout: {
				xl: 24,
				lg: 24,
				md: 24,
				sm: 24,
				xs: 24
			},
			options: []
		},
		{
			field: 'subject',
			label: '主题',
			type: 'input',
			rules: [],
			placeholder: '邮件主题',
			style: {
				width: '100%'
			},
			colLayout: {
				xl: 24,
				lg: 24,
				md: 24,
				sm: 24,
				xs: 24
			}
		},
		{
			field: 'content',
			label: '邮箱内容',
			type: 'textarea',
			rules: [],
			placeholder: '请输入邮箱内容',
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

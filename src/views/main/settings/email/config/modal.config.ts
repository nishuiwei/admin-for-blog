export const modalConfig = {
	labelWidth: 'auto',
	gutter: 40,
	formItems: [
		{
			field: 'email',
			label: '邮箱',
			type: 'input',
			rules: [],
			placeholder: '注册邮箱。。。',
			colLayout: {
				xl: 24,
				lg: 24,
				md: 24,
				sm: 24,
				xs: 24
			},
			disabled: true
		},
		{
			field: 'secret',
			label: '邮箱密钥',
			type: 'input',
			rules: [],
			placeholder: '请输入邮箱密钥',
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

export const modalConfig = {
	labelWidth: 'auto',
	gutter: 40,
	formItems: [
		{
			field: 'parent_code',
			label: '父级 CODE',
			type: 'input',
			rules: [],
			placeholder: '父级 CODE',
			colLayout: {
				xl: 12,
				lg: 12,
				md: 12,
				sm: 24,
				xs: 24
			},
			disabled: false
		},
		{
			field: 'menu_code',
			label: 'CODE',
			type: 'input',
			rules: [],
			placeholder: '请输入菜单 CODE',
			colLayout: {
				xl: 24,
				lg: 24,
				md: 24,
				sm: 24,
				xs: 24
			}
		},
		{
			field: 'meta_title',
			label: '页面标题',
			type: 'input',
			rules: [],
			placeholder: '请输入页面title',
			colLayout: {
				xl: 16,
				lg: 16,
				md: 16,
				sm: 24,
				xs: 24
			}
		},
		{
			field: 'meta_requires_auth',
			label: '是否需要登陆',
			type: 'input',
			rules: [],
			placeholder: '请选择',
			colLayout: {
				xl: 8,
				lg: 8,
				md: 8,
				sm: 24,
				xs: 24
			}
		},
		{
			field: 'title',
			label: '菜单名称',
			type: 'input',
			rules: [],
			placeholder: '请输入菜单名称',
			colLayout: {
				xl: 12,
				lg: 12,
				md: 12,
				sm: 24,
				xs: 24
			}
		},
		{
			field: 'meta_transition',
			label: '页面过渡动画',
			type: 'select',
			rules: [],
			placeholder: '请选择页面过渡动画',
			colLayout: {
				xl: 12,
				lg: 12,
				md: 12,
				sm: 24,
				xs: 24
			}
		},
		{
			field: 'index',
			label: '菜单路径',
			type: 'input',
			rules: [],
			placeholder: '请输入菜单路径 ex: /main/**',
			colLayout: {
				xl: 24,
				lg: 24,
				md: 24,
				sm: 24,
				xs: 24
			}
		},
		{
			field: 'icon',
			label: '菜单ICON',
			type: 'input',
			rules: [],
			placeholder: '请选择菜单ICON',
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

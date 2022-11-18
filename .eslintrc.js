module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: 'vue-eslint-parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 2020,
		parser: '@typescript-eslint/parser'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'non-nullish': 0,
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false
				}
			}
		],
		'@typescript-eslint/no-explicit-any': 0,
		'vue/max-attributes-per-line': 0,
		'vue/html-indent': 0,
		'vue/singleline-html-element-content-newline': 0
	}
}

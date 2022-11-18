## 前言

对于一个项目而言，多人协作，后期维护肯定少不了，所以前期我们需要打好稳固的地基，否则只能开发一时爽，维护火葬场了。本文章主要说明一下，项目前期初始化前期搭建的一些规范，我会从 `eslint`、`prettier`、`husky`、`pinia`、`vue-router`、`element-plus`一步一步带大家完成项目前期的准备工作

## 创建项目

如果你还没有 Vite 创建的项目，你可以运行这个命令：

```sh
 npm create vite@latest my-vue-app -- --template vue-ts
```

按照提示，然后切换到新创建的项目的目录。

## 安装 eslint + prettier

我们将从安装 prettier 开始。我们可以使用以下命令执行此操作：

```sh
npm install -D prettier
```

接下来我们将为 prettier 创建一个配置文件。由于 prettier 的目标是开箱即用的免费配置，因此该配置文件的内容可以只是一个空对象。我们只是添加它，因为一些 IDE 使用它的存在来检测更漂亮。如果您想配置 Prettier 提供的少数几个选项之一，请参阅 [Prettier 文档以了解配置选项](https://prettier.io/docs/en/options.html)。

在项目根目录创建 `.prettierrc` 或者在终端输入 `echo {}> .prettierrc`

```json
/// .prettierrc
{
	"printWidth": 80,
	"tabWidth": 2,
	"useTabs": true,
	"semi": false,
	"singleQuote": true,
	"eqeqeq": true,
	"trailingComma": "es5",
	"bracketSpacing": true,
	"endOfLine": "auto",
	"htmlWhitespaceSensitivity": "css"
}
```

以上是关于我的 `.prettierrc` 设置

接下来我们来设置 `eslint`

我们可以使用以下命令安装 ESLint 和 ESLint 的 vue 插件：

```sh
npm install eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin @vue/cli-plugin-eslint -D
```

接下来，我们将通过使用以下配置创建一个 `.eslintrc.js` 文件来配置 ESLint，以便将其配置为使用 ESLint 推荐规则以及 Vue 3 的推荐规则。

```js
/// .eslintrc.js
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
		'@typescript-eslint/no-explicit-any': 0
	}
}
```

我们还需要安装 `eslint-config-prettier` 配置。它会负责处理的 ESLint 中的格式化规则。

```sh
npm install eslint-config-prettier -D
```

`.eslintrc.js` 并在 extends 下的文件中注册配置。确保它是 extends 数组中定义的最后一个配置，因为配置的顺序决定了处理不同配置中的重复规则（后来的配置覆盖以前的配置）！

```js
//.eslintrc.js
extends: [
	'eslint:recommended',
	'plugin:vue/vue3-recommended',
	'plugin:@typescript-eslint/recommended'
],
```

在这一点上，我们应该设置为让 ESLint 报告并纠正可修复的错误，并让 Prettier 重新格式化我们的源代码。让我们将以下两项添加到 `scripts package.json` 的部分。

```json
"scripts": {
  //...
  "lint": "eslint ./src/**/*.{vue,ts} --fix",
	"format": "prettier ./src/**/*.{vue,ts}  --write"
}
```

此处定义的 lint 命令非常适合在 CI/CD 管道中运行 lint 或仅用于在终端中手动测试。您可以通过运行相应的命令来快速查看它们的工作情况，但这不一定是您希望在整个开发过程中持续使用它们的方式。

## 安装 husky

- 安装 husky

```sh
npm install husky --save-dev
```

```sh
npx husky install
```

- 要在安装后自动启用 Git 挂钩，请编辑 package.json

```json
// package.json
{
	"scripts": {
		// ...
		"prepare": "husky install"
	}
}
```

执行 `npm run prepare` 该项目的目录下会自动生成一个 `.husky` 文件夹

1. 添加提交校验钩子

执行以下命令，.husky 文件下就会自动生成一个 pre-commit 的脚本文件，当你在 git commit 的时候自动执行设置的脚本

```sh
npx husky add .husky/pre-commit "npm run format && npm run lint"
```

可以尝试提交测试是否执行该脚本

2. 添加 `commit` 提交内容规范钩子

```sh
npx husky add .husky/commit-msg 'yarn commitlint --edit "$1"'
```

添加相对应 `commit` 校验以及规范的依赖

```sh
npm install -D @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog
```

在根目录添加一个 `commitlint.config.js` 文件以配置 commit 信息

```js
/// commitlint.config.js
module.exports = {
	extends: ['@commitlint/config-conventional']
}
```

提交之前还需要在做一个操作，需要在 `package.json` 中配置 `.gitmessage.txt`

```json
/// package.json
"config": {
   "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
   }
}
```

3. 添加 lint-staged

`lint-staged` 在我们提交代码时，只会对修改的文件进行检查、修复处理，以保证提交的代码没有语法错误，不会影响其他伙伴在更新代码无法运行的问题。

```sh
npm install lint-staged -D
```

在根目录创建 `.lintstagedrc` 配置文件

- [stylelint 文档](https://stylelint.io/user-guide/usage/cli/)

在 `.lintstagedrc` 文件中添加

```json
{
	"*.{js,ts,vue}": ["eslint", "prettier --write"]
}
```

在 `package.json` 添加执行 `npm run lint-staged` 的 `scripts`

```json
"scripts": {
  "preCommit": "lint-staged"
}
```

修改 .husky/pre-commit 文件

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

- npm run format && npm run lint
+ npm run preCommit
```

以上说了一些关于项目的配置，这里补充一个细节小知识，因为每个人的编辑器配置文件都不一样，所以最开始需要确定编译器的配置文件，这里我用的是 VSCode 所以我这里推荐一个插件[EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

如何使用在根目录下创建一个 `.editorconfig` 文件做以编辑器的配置，详细配置请自行查看

## 安装 vue-router

关于路由后期的话增量会越来越大，所有组件都写进路由文件，后期维护起来会比较艰难，所以前期我只会在路由文件中添加 **登录页面**，**NotFount 页面**，**布局页面**， 其余直接动态引入，后期对于相关权限而言只需要一个 json 文件即可配置

1. 安装 vue-router

```sh
npm i vue-router
```

2. 配置 vue-router

在 `src` 文件下新建 `router/index.js` 文件

```js
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/main'
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('./../views/login/login.vue')
	},
	{
		path: '/main',
		name: 'main',
		component: () => import('./../views/main/main.vue'),
		children: [
			{
				path: '/:pathMatch(.*)*',
				name: 'not-found',
				component: () => import('@/views/not-found/not-found.vue')
			}
		]
	}
]

const router = createRouter({
	routes,
	history: createWebHistory()
})

export default router
```

以上为 `router/index.js` 文件的默认格式

改写 `main.js` 文件

```js
// src/main.js
import { createApp } from 'vue'
import './style.css'
+ import router from './router/index.js'
import App from './App.vue'

- createApp(App).mount('#app')
+ const app = createApp(App)
+ app.use(router)
+ app.mount('#app')
```

改写 `App.vue` 文件

```vue
<template>
	<div>
		<router-view></router-view>
	</div>
</template>
```

路由文件即可访问

路由动态引入

1. 新建 `src/utils/map-menus.js` 文件

```js
export const mapMenusToRoutes = () => {
	const allRoutes = []
	// 获取到默认所有的 routes
	const routeObj = import.meta.glob('./../views/main/**/*.vue') // 获取views下所有组件对象

	const routeFiles = Object.keys(routeObj) // 将组件对象的 key 提取出来组成数组

	// 循环遍历当前 key
	routeFiles.forEach((path) => {
		const route = path
			.match(/\.\/..\/views\/(.*)$/)[1]
			.toLowerCase()
			.split('.')[0]
		// 对当前的 key 进行全部小写

		const path_splite = route.split('/') // 使用 / 对route拆分数据

		const path_name = `${path_splite[0]}/${path_splite[1]}/${path_splite[2]}`
		const name = route.split('/')[3]
		if (name) {
			allRoutes.push({
				path: '/' + path_name,
				name,
				component: routeObj[path]
			})
		}
	})

	return allRoutes
	// [{path: xxx, name: xxx, component: xxx}]
}
```

以上代码获取到 `views/main` 下的所有文件返回成一个路由数组

例如:

```js
allroutes = [
	// ...
	{
		name: helloworld,
		path: '/helloworld',
		component: () => import('@/views/main/helloworld/helloworld.vue')
	}
	// ...
]
```

在 `main.js` 引入以下代码

```js
// main.js
/// ...
const routes = mapMenusToRoutes()
routes.forEach((route) => {
	router.addRoute('main', route)
})
/// ...
```

## 添加 pinia

安装 pinia

> [pinia 文档](https://pinia.vuejs.org/zh/getting-started.html)

```sh
npm i pinia
```

在 `src/main.js` 引入 `pinia`

```js
/// main.js
/// ...
import { createPinia } from 'pinia'
app.use(createPinia())
// ...
```

创建 `src/store/index.js` 文件

```js
/// src/store/index.js

import { defineStore } from 'pinia'
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useStore = defineStore('index', {
	// other options...
	state: () => {
		// ...
	},
	getters: {
		// ...
	},
	actions: {
		// ...
	}
})
```

如何使用

```vue
...
<script setup>
import { useStore } from '@/store/index'
const store = useStore()

// 访问store
store.xxx

// 更改store中的值
store.$patch({
	xxx: xxx
})
</script>
...
```

具体操作自行观看 [pinia 官方文档](https://pinia.vuejs.org/zh/)

## 添加 Element-plus

安装 element-plus

```sh
npm i element-plus
```

引入 element-plus

这边我会使用自动导入，因为方便

首先你需要安装 `unplugin-vue-components` 和 `unplugin-auto-import` 这两款插件

```sh
npm i unplugin-vue-components unplugin-auto-import -D
```

然后把下列代码插入到你的 `vite.config.js` 文件当中

```js
/// vite.config.js
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [
		// ...
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	]
})
```

想了解更多打包 ([Rollup](https://rollupjs.org/guide/en/), [Vue CLI](https://cli.vuejs.org/)) 和配置工具，请参考 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install)。
以上代码填入之后就可以肆无忌惮的使用 `element-plus` 这个框架了

[element-plus](https://element-plus.org/)

## 结语

以上关于我开始做项目前的一些准备，大家有其他不同的想法以及有对该方案有改进的想法都可以联系我，因为目前评论功能没有开发完成，所以，可以给我发邮件 **w920098695@sina.cn**，感谢大家观看

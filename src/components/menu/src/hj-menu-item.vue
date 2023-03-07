<template>
	<template v-for="item in menu" :key="item.index">
		<template v-if="item.children?.length === 0 || !item.children">
			<el-menu-item :index="item.index">
				<el-icon :size="16" color="#000">
					<Icon :icon="item.icon" />
				</el-icon>
				<template #title>
					<span style="margin-left: 10px"> {{ item.title }} </span>
				</template>
			</el-menu-item>
		</template>
		<template v-else>
			<el-sub-menu :index="item.index">
				<template #title>
					<el-icon :size="16" color="#fff">
						<Icon :icon="item.icon" />
					</el-icon>
					<span style="margin-left: 10px"> {{ item.title }} </span>
				</template>
				<hj-menu-item :menu="item.children" />
			</el-sub-menu>
		</template>
	</template>
</template>

<script setup lang="ts">
import { Icon } from '../../icon'
defineProps<{
	menu: [any]
}>()
</script>

<style scoped lang="less">
:deep(.el-sub-menu__title) {
	height: 60px;
	padding-left: 40px !important;
}
.el-menu-item {
	height: 60px;
	padding-left: 40px !important;
}

.el-sub-menu {
	background: transparent;
	.el-menu-item {
		color: var(--submenu-color);
		padding-left: 50px !important;
		&.is-active {
			color: #fff;
			.el-icon {
				color: #fff !important;
			}
			&::before {
				content: '';
				display: none;
			}
		}
	}
	&.is-opened.is-active {
		background-color: var(--menu-active-bg-color);
		color: #fff;
		position: relative;
		.el-icon {
			color: var(--menu-active-color);
		}
		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			display: block;
			width: 6px;
			height: 100%;
			background-color: var(--menu-active-color);
			border-radius: 0px 3px 3px 0px;
		}
	}
}

.el-menu-item {
	&.is-active {
		background-color: var(--menu-active-bg-color);
		color: #fff;
		position: relative;
		.el-icon {
			color: var(--menu-active-color);
		}
		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			display: block;
			width: 6px;
			height: 100%;
			background-color: var(--menu-active-color);
			border-radius: 0px 3px 3px 0px;
		}
	}
}
</style>

<template>
	<div class="header-container">
		<div class="header-collapse" @click="handleClickCollapse">
			<el-icon :size="20">
				<Icon :icon="isCollapse ? 'Expand' : 'Fold'" />
			</el-icon>
		</div>
		<p class="header-title">Welcome to Hi - blog Admin Dashboard Ui</p>
		<div class="header-user">
			<div class="header-user-theme" @click="toggleDark()">
				<el-icon :size="24" :color="isDark ? '#fff' : '#000'">
					<Icon :icon="isDark ? 'Sunny' : 'Moon'" />
				</el-icon>
			</div>
			<div class="header-user-setting">
				<el-dropdown>
					<span class="el-dropdown-link">
						<el-badge is-dot class="item" type="success">
							<el-avatar
								shape="square"
								:size="36"
								src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
							/>
						</el-badge>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item>Action 1</el-dropdown-item>
							<el-dropdown-item>Action 2</el-dropdown-item>
							<el-dropdown-item>Action 3</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '../../icon'
import { useTheme } from '../../../composables'

const props = withDefaults(
	defineProps<{
		isCollapse: boolean
	}>(),
	{
		isCollapse: false
	}
)

const { isDark, toggleDark } = useTheme

const emits = defineEmits(['clickCollapse'])

const handleClickCollapse = (): void => {
	emits('clickCollapse', !props.isCollapse)
}
</script>

<style scoped lang="less">
.header {
	&-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
	}
	&-collapse {
		cursor: pointer;
	}
	&-title {
		font-weight: 500;
		font-size: 16px;
		color: var(--text-color);
		user-select: none;
	}
	&-user {
		transition: 0.3s ease-in-out;
		display: flex;
		align-items: center;
		&-theme {
			margin-right: 15px;
		}
		&-setting {
			.el-dropdown {
				user-select: none;
			}
			.el-dropdown-link {
				&:focus-visible {
					outline: none;
				}
			}
			display: flex;
			align-items: center;
		}
	}
}
</style>

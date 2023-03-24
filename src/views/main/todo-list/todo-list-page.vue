<template>
	<div class="todo">
		<!-- 列表 -->
		<div class="todo-filter">
			<!--  -->
			<div class="todo-filter-header bg-transition">
				<div class="add-button">
					<icon-button
						:size="0"
						icon=""
						btn-style="width: 140px; height: 40px; border-radius: 6px"
					>
						<p class="button-title">add task</p>
					</icon-button>
				</div>
			</div>
		</div>
		<!-- content -->
		<div class="todo-content">
			<hj-card title="任务列表">
				<!--  -->
			</hj-card>
		</div>
	</div>
</template>
<script lang="ts" setup>
import HjCard from './../../../base-ui/card/index'
import IconButton from './../../../components/button/index'
</script>
<style scoped lang="less">
.todo {
	display: flex;
	height: 100%;
	&-filter {
		width: 230px;
		height: 100%;
		background-color: var(--login-box-bg);
		&-header {
			display: flex;
			justify-content: center;
			border-bottom: 2px solid var(--background-color);
			.add-button {
				padding-top: 15px;
				padding-bottom: 15px;
			}
			.button-title {
				font-weight: 700;
				font-size: 13px;
			}
		}
	}
	&-content {
		flex: 1;
		height: 100%;
	}
}
</style>

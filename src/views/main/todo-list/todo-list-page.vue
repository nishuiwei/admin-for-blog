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
						@click="handleCreateData"
					>
						<p class="button-title">add task</p>
					</icon-button>
				</div>
			</div>
		</div>
		<!-- content -->
		<div class="todo-content">
			<hj-card title="任务列表">
				<page-content
					page-name="todos"
					:content-config="contentTableConfig"
					@click-operate="handleClickOperate"
				>
					<template #todo-slot="socpe">
						<div class="todo-item">
							<p class="todo-item-title">
								{{ socpe.row.title }}
							</p>
							<div class="todo-item-opearte">
								<el-tag
									v-for="item in socpe.row.label_type"
									:key="item._id"
									:type="item.type"
									effect="plain"
								>
									{{ item.title }}
								</el-tag>
								<el-icon
									class="question"
									:size="20"
									:style="{ color: socpe.row.notes ? '#FF3D57' : '#8291A9' }"
								>
									<Icon icon="QuestionFilled" />
								</el-icon>
								<el-icon
									:size="26"
									:style="{ color: socpe.row.is_star ? '#FDBF5E' : '#8291A9' }"
									@click="handleClickStar(socpe.row)"
								>
									<Icon icon="StarFilled" />
								</el-icon>
							</div>
						</div>
					</template>
				</page-content>
				<page-modal
					ref="pageModalRef"
					page-name="todos"
					:modal-config="modalConfig"
					:default-info="defaultInfo"
					type="todos"
				/>
			</hj-card>
		</div>
	</div>
</template>
<script lang="ts" setup>
import HjCard from './../../../base-ui/card/index'
import IconButton from './../../../components/button/index'
import PageContent from '../../../components/page-content'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { Icon } from '../../../components/icon'
import PageModal from '../../../components/page-modal'
import { usePageModal } from '../../../hooks/usePageModal'
import { starTodoItemRequest } from './../../../service/todolist'
import { ElMessage } from 'element-plus'
import { useGlobalListStore } from '../../../store/global/list'

const handleClickOperate = ({ type }: { type: string }, data: any) => {
	if (type === 'edit') {
		const item = {
			id: data._id,
			title: data.title,
			label_type: data.label_type.map((item: any) => item.title),
			notes: data.notes
		}
		handleEditData(item)
	}
}

const handleClickStar = async (item: any) => {
	const response = await starTodoItemRequest(item._id, {
		is_star: !item.is_star
	})
	if (response.success) {
		const store = useGlobalListStore()
		store.setGlobalListData({
			pageName: 'todos'
		})
		ElMessage.success('操作成功')
	}
}

const [pageModalRef, defaultInfo, handleCreateData, handleEditData] =
	usePageModal()
</script>
<style scoped lang="less">
.todo {
	display: flex;
	height: 100%;
	&-item {
		display: flex;
		align-items: center;
		&-title {
			flex: 1;
			font-weight: 500;
			font-size: 14px;
		}
		&-opearte {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-right: 20px;
			.question {
				margin: 0 27px;
			}
			.el-icon {
				cursor: pointer;
			}
		}
	}
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

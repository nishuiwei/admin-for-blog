<template>
	<div class="settings-menus">
		<hj-card title="菜单管理">
			<page-content
				page-name="menus"
				:content-config="contentTableConfig"
				@click-operate="handleClickOperate"
			>
				<template #icon-slot="socpe">
					<el-icon :size="20">
						<Icon :icon="socpe.row.icon" />
					</el-icon>
				</template>
				<template #path-slot="socpe">
					<el-tag type="success">{{ socpe.row.index }}</el-tag>
				</template>
				<template #createdAt="scope">
					{{ IosDateFormatFn(scope.row.createdAt).replaceAll('/', '-') }}
				</template>
			</page-content>
			<page-modal ref="pageModalRef" :modal-config="modalConfig" />
		</hj-card>
	</div>
</template>
<script lang="ts" setup>
import HjCard from '../../../../base-ui/card'
import PageContent from '../../../../components/page-content'
import { Icon } from '../../../../components/icon'
import { contentTableConfig } from './config/content.config'
import { IosDateFormatFn } from './../../../../utils/IosDateFormat'
import PageModal from '../../../../components/page-modal/src/page-modal.vue'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '../../../../hooks/usePageModal'

const [pageModalRef, , handleCreateData] = usePageModal()

const handleClickOperate = ({ type }: { type: string }, data: any) => {
	if (type === 'edit') {
		console.log(data)
		handleCreateData(data)
	}
}
</script>
<style scoped lang="less"></style>

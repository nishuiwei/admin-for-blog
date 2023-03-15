<template>
	<div class="settings-menus">
		<hj-card title="菜单管理">
			<page-content page-name="menus" :content-config="contentTableConfig">
				<template #icon-slot="socpe">
					<el-icon :size="20">
						<Icon :icon="socpe.row.icon" />
					</el-icon>
				</template>
				<template #path-slot="socpe">
					<el-tag type="success">{{ socpe.row.index }}</el-tag>
				</template>
				<template #createdAt="scope">
					{{ IosDateFormatFn(scope.row.createdAt) }}
				</template>
			</page-content>
		</hj-card>
	</div>
</template>
<script lang="ts" setup>
import HjCard from '../../../../base-ui/card'
import PageContent from '../../../../components/page-content'
import { Icon } from '../../../../components/icon'
import { contentTableConfig } from './config/content.config'
import { IosDateFormatFn } from './../../../../utils/IosDateFormat'
</script>
<style scoped lang="less"></style>

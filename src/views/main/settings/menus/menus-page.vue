<template>
	<div class="settings-menus">
		<hj-card title="菜单管理">
			<page-content page-name="menus" :content-config="contentTableConfig" />
		</hj-card>
	</div>
</template>
<script lang="ts" setup>
import HjCard from '../../../../base-ui/card'
import { Icon } from '../../../../components/icon'
import PageContent from '../../../../components/page-content'
import { contentTableConfig } from './config/content.config'
</script>
<style scoped lang="less"></style>

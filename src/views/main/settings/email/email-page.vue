<script lang="ts" setup>
import HjCard from '../../../../base-ui/card'
import HJIconButton from '../../../../components/button'
import { ref } from 'vue'
import { modalConfig } from './config/modal.config.ts'
import { setEmailSecretRequest } from '~/service/email'

import HjForm from './../../../../base-ui/form'
import LocalCache from '~/utils/cache.ts'
import { ElMessage } from 'element-plus'
const userData = LocalCache.getCache('user')
const formData = ref<any>({
	email: userData.email.email,
	secret: userData.email.secret || ''
})

const handleSaveData = async (): void => {
	console.log('保存配置', formData.value)
	const response = await setEmailSecretRequest(formData.value)

	if (response.success) {
		ElMessage.success(response.message)
		LocalCache.setCache('user', {
			...userData,
			email: {
				...userData.email,
				secret: formData.value.secret
			}
		})
	}
}
</script>

<template>
	<div class="setting-email">
		<hj-card title="邮箱配置">
			<div class="search">
				<HJIconButton icon="" shadow @click="handleSaveData">
					保存配置
				</HJIconButton>
			</div>
			<div class="setting-email-panel">
				<hj-form v-bind="modalConfig" v-model="formData" />
			</div>
		</hj-card>
	</div>
</template>

<style scoped lang="less">
.search {
	display: flex;
	justify-content: flex-end;
	margin: 20px;
}
.setting-email-panel {
	padding: 20px;
	background: #fff;
	// margin-top: 20px;
	border-radius: 10px;
}
</style>

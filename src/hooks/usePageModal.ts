import { ref } from 'vue'

import PageModal from '../components/page-modal'

type CallbackFn = (item?: any) => void

export const usePageModal = (newCb?: CallbackFn, editCb?: CallbackFn): any => {
	const pageModalRef = ref<InstanceType<typeof PageModal>>()
	const defaultInfo = ref({})

	const handleCreateData = () => {
		defaultInfo.value = {}
		if (pageModalRef.value) {
			pageModalRef.value.dialogVisible = true
		}
		newCb && newCb()
	}

	const handleEditData = (item: any) => {
		defaultInfo.value = { ...item }
		if (pageModalRef.value) {
			pageModalRef.value.dialogVisible = true
		}
		editCb && editCb()
	}

	return [pageModalRef, defaultInfo, handleCreateData, handleEditData]
}

import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'
import {
	getGlobalListRequest,
	removeItemRequest
} from '../../../service/global'
import { GlobalList } from './type'

export const useGlobalListStore = defineStore('globalList', {
	state: (): GlobalList => ({
		menusList: [],
		menusTotal: 0,
		todosList: [],
		todosTotal: 0
	}),
	getters: {
		getGlobalListData(state) {
			return (pageName: any = 'menus') => {
				return (state as any)[`${pageName}List`]
			}
		},
		getGlobalCountData(state) {
			return (pageName: any = 'menus') => {
				return (state as any)[`${pageName}Total`]
			}
		}
	},
	actions: {
		// TODO...
		async setGlobalListData(payload: any) {
			const { prefix = '', pageName, defaultInfo = {} } = payload
			console.log(prefix, pageName)
			const url = `${prefix}/${pageName}`
			const list = `${pageName}List`
			const total = `${pageName}Total`
			const params = defaultInfo
			const response = await getGlobalListRequest(url, params)
			if (response.success) {
				const self = this as any
				self[list] = response.data.list
				self[total] = response.data.total
			}
		},
		async removeGlobalItemData(payload: any) {
			const { prefix, pageName, url } = payload
			const response = await removeItemRequest(url)
			if (response.success) {
				ElMessage.success('删除成功')
				const defaultInfo = {
					offset: 1,
					size: 10
				}
				this.setGlobalListData({ prefix, pageName, defaultInfo })
			}
		}
	}
})

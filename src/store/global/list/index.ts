import { defineStore } from 'pinia'
import { getGlobalListRequest } from '../../../service/global'
import { GlobalList } from './type'

export const useGlobalListStore = defineStore('globalList', {
	state: (): GlobalList => ({
		menusList: [],
		menusTotal: 0
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
			const { prefix, pageName, defaultInfo } = payload
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
		}
	}
})

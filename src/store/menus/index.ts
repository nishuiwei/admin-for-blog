import { defineStore } from 'pinia'
import { getMenusListRequest } from '../../service/menus'
import { MenusStore } from './type'

export const useMenusStore = defineStore('menus', {
	state: (): MenusStore => {
		return {
			list: []
		}
	},
	getters: {
		getMenusList(state) {
			return state.list
		}
	},
	actions: {
		// TODO...
		async setMenusList() {
			const response = await getMenusListRequest()
			if (response.success) {
				this.list = response.data.list
			}
		}
	}
})

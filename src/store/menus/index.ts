import { defineStore } from 'pinia'
import { getMenusListRequest } from '../../service/menus'
import { MenusStore } from './type'
import LocalCache from './../../utils/cache'
export const useMenusStore = defineStore('menus', {
	state: (): MenusStore => {
		return {
			list: []
		}
	},
	getters: {
		getMenusList(state) {
			const menus = LocalCache.getCache('menus')
			if (!menus) return state.list
			return JSON.parse(menus)
		}
	},
	actions: {
		// TODO...
		async setMenusList() {
			const response = await getMenusListRequest()
			if (response.success) {
				this.list = response.data.list
				LocalCache.setCache('menus', JSON.stringify(response.data.list))
			}
		}
	}
})

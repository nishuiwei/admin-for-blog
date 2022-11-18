import { defineStore } from 'pinia'
import { IGlobalState } from './type'

export const useGlobalStore = defineStore('global', {
	state: (): IGlobalState => ({}),
	getters: {},
	actions: {
		// TODO...
	}
})

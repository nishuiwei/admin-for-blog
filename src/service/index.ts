// service 统一出口
import HJRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from './../utils/cache'
import { ElMessage } from 'element-plus'

const hjRequest = new HJRequest({
	baseURL: BASE_URL,
	timeout: TIME_OUT,
	interceptors: {
		requestInterceptors: (config) => {
			const token = localCache.getCache('token')
			if (token) {
				config.headers.Authorization = `Bearer ${token}`
			}
			return config
		},
		requestInterceptorsCatch: (err) => {
			return err
		},
		responseInterceptors: (res) => {
			return res
		},
		responseInterceptorsCatch: (err) => {
			const { response } = err
			const { data, status } = response
			switch (status) {
				case 404:
					ElMessage.error(data.message)
					break

				default:
					return err
			}
		}
	}
})

export default hjRequest

import hjRequest from '..'
// import { RequestConfig } from '../request'

export const getGlobalListRequest = (url: string, params: any) => {
	return hjRequest.get({
		url,
		params
	})
}

export const removeItemRequest = (url: string) => {
	return hjRequest.delete({
		url
	})
}

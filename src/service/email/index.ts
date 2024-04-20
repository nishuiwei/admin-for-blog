import hjRequest from '..'

enum EmailAPI {
	EMAIL = '/email',
	SECRET = '/email/serect'
}

export const setEmailItemRequest = (data: any) => {
	return hjRequest.post({
		url: EmailAPI.EMAIL,
		data
	})
}

export const setEmailSecretRequest = (data: any) => {
	return hjRequest.post({
		url: EmailAPI.SECRET,
		data
	})
}

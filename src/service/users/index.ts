import hjRequest from '..'
// import { username } from './types'

enum PersonAPI {
	PersonContactList = '/users'
}

export const personContactRequest = () => {
	return hjRequest.get({
		url: PersonAPI.PersonContactList
	})
}

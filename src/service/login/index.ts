import hjRequest from '..'
import { ILogin } from './types'

enum LoginAPI {
	Login = '/login',
	LoginUserInfo = '/users',
	LoginUserMenu = '/menus'
}

export const loginRequest = (data: ILogin) => {
	return hjRequest.post({
		url: LoginAPI.Login,
		data: data
	})
}

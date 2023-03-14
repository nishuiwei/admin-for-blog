import hjRequest from '..'

enum MenusAPI {
	menusList = '/menus'
}

export const getMenusListRequest = () => {
	return hjRequest.get({
		url: MenusAPI.menusList
	})
}

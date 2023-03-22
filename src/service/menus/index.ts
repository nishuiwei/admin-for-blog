import hjRequest from '..'

enum MenusAPI {
	menusList = '/menus'
}

export const getMenusListRequest = () => {
	return hjRequest.get({
		url: MenusAPI.menusList
	})
}

export const setMenuItemRequest = (data: any) => {
	return hjRequest.post({
		url: MenusAPI.menusList,
		data
	})
}

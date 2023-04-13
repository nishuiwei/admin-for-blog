import hjRequest from '..'

enum TodoAPI {
	Todo = '/todos',
	TodoStar = '/todos/star'
}

export const setTodoItemRequest = (data: any) => {
	return hjRequest.post({
		url: TodoAPI.Todo,
		data
	})
}

export const editTodoItemRequest = (id: string, data: any) => {
	return hjRequest.patch({
		url: TodoAPI.Todo + '/' + id,
		data
	})
}

export const starTodoItemRequest = (id: string, data: any) => {
	return hjRequest.patch({
		url: TodoAPI.TodoStar + '/' + id,
		data
	})
}

type Meta = {
	title: string
	requiresAuth: boolean
	transition: string | null
}

type MenuItem = {
	index: string
	title: string
	icon: string
	name: string
	menu_code: string
	parent_code: string
	meta: Meta
	children: MenuItem[] | []
}

export type MenusStore = {
	list: MenuItem[]
}

import { createVNode } from 'vue'
import * as Icons from '@element-plus/icons-vue'

export const Icon = (props: { icon: string }) => {
	const { icon } = props
	return createVNode(Icons[icon as keyof typeof Icons])
}

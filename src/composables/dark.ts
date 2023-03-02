import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
	initialValue: 'light',
	selector: 'html',
	attribute: 'class',
	valueLight: 'light',
	valueDark: 'dark'
})

export const toggleDark = useToggle(isDark)

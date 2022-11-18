import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
	initialValue: 'auto',
	valueLight: 'light',
	valueDark: 'dark',
	attribute: 'color-scheme'
})

export const toggleDark = useToggle(isDark)

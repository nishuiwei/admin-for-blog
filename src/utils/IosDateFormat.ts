export const IosDateFormatFn = (date: Date): string => {
	return new Date(date).toLocaleString('zh-CN', { timeZone: 'UTC' })
}

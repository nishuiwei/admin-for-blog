let BASE_URL = ''
const TIME_OUT = 5000

if (process.env.NODE_ENV === 'production') {
	BASE_URL = 'http://localhost:8848/api'
} else if (process.env.NODE_ENV === 'development') {
	BASE_URL = 'http://localhost:8848/api'
} else {
	BASE_URL = 'http://localhost:8848/api'
}

export { BASE_URL, TIME_OUT }

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/style/reset.less'
import './assets/style/fonts.less'
import './style.css'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router).mount('#app')

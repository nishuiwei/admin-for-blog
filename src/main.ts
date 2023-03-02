import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/style/reset.less'
import './style.css'

const app = createApp(App)
app.use(router).mount('#app')

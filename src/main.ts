import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import pinia from './store'
import router from './router'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')

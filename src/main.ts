import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui'
import '@/css/index.scss'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
const pinia = createPinia()
createApp(App).use(router).use(pinia).use(naive).mount('#app')

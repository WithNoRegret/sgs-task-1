import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './providers/router'
import App from './App.vue'
import './styles/style.css'

export const app = createApp(App).use(createPinia()).use(router)

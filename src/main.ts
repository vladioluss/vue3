import '@/app/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from "axios";


const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(axios)

app.mount('#app')
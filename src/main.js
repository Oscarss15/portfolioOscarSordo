import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/css/variables.css'

createApp(App).mount('#app')
createApp(App).use(router).mount('#app')

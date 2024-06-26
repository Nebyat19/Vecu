import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import H1 from '@/components/ui/H1.vue'
import AppContainer from '@/components/AppContainer.vue'
import VueTelegram from 'vue-tg'


const app = createApp(App)

app.use(createPinia())
//app.use(VueTelegram)
app.use(router)
app.component('h-1',H1)
app.component('app-container',AppContainer)
app.mount('#app')

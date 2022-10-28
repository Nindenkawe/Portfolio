import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Vue from 'vue'

createApp(App).use(router).mount('#app')

Vue.config.productionTip = false
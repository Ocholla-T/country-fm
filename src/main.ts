import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import router from './router'
import App from './App.vue'

createApp(App).use(createPinia()).use(router).mount('#app')
createPinia().use(piniaPluginPersistedState)

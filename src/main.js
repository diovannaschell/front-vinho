import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router/router'

// configurar baseURL para o axios
axios.defaults.baseURL = 'http://127.0.0.1:8000'

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies';
import "bootstrap/dist/css/bootstrap.min.css";



createApp(App).use(router).use(VueCookies).mount('#app')

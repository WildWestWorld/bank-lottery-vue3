import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store";
import '@/assets/css/reset.css'
import 'amfe-flexible';

import { createStore } from "vuex";


const myApp = createApp(App)
myApp.use(router);
myApp.use(store);
myApp.mount('#app')

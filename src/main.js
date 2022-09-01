import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import '@/assets/css/reset.css'
import 'amfe-flexible';

const myApp = createApp(App)
myApp.use(router);
myApp.mount('#app')

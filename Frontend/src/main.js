import { createApp } from 'vue'
import App from './App.vue'
import Vuerouter from "./router.js";
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(Vuerouter).mount('#app')
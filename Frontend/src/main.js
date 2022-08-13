import { createApp } from 'vue'
import App from './App.vue'
import Vuerouter from "./router.js";
import Vuelidate from '@vuelidate/core'
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(Vuerouter).use(Vuelidate).mount('#app')
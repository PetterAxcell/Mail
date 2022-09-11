import { createRouter, createWebHistory } from "vue-router";
import Signin from "./Pages/Signin.vue";
import Signup from "./Pages/Signup.vue"
import Main from "./Pages/Main.vue"
import Navegador from "./Components/Navegador.vue"


const routes = [
    { path: "/", component: Signin },
    { path: "/signin", component: Signin },
    { path: "/signup", component: Signup },
    { path: "/main/:id", component: Main },
    { path: "/main/navegador", component: Navegador},
  ];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
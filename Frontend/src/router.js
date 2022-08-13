import { createRouter, createWebHistory } from "vue-router";
import Signin from "./Pages/Signin.vue";
import Signup from "./Pages/Signup.vue"

const routes = [
    { path: "/", component: Signin },
    { path: "/signup", component: Signup },
  ];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;